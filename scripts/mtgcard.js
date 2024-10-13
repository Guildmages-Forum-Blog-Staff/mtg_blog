"use strict";

const http = require("node:https");
const fs = require("node:fs/promises");

let tpl = {
  image: `<img class="mtgcard w-full" src="##IMG##">`,
  tooltip_image: `<img class="mtgcard" src="##IMG##">`,
  tooltip: `
  <a class="tooltip" href="##URL##">##NAME##
    <span>##IMG##</span>
  </a>
  `.replace(/(\r\n|\n|\r)/gm, ""),
  style: `
    <style>
      .tooltip span { display: none; color: black; }
      .mtgcard { max-width: 300px !important; }
      .tooltip span img { float: left; margin: 0px 0px 0px 0px; }
      .tooltip:hover span {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1000;
        margin-top: 12px;
        margin-left: 32px;
        /* width: 100%; */
        overflow: hidden;
        padding: 8px;
      }
      .tooltip {
        text-decoration: none;
        position: relative;
        display: inline;
        opacity: 1;
        z-index: unset;
      }
    </style>
  `,
};

let userAgentString = "curl/8.5.0"; // Ubuntu 24.04.

let render = (tpl, data) => {
  for (let prop in data) {
    tpl = tpl.replace(`##${prop}##`, data[prop]);
  }
  return tpl;
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function httpRequest(params, postData) {
  return new Promise((resolve, reject) => {
    let req = http.request(params, (res) => {
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error(`statusCode=${res.statusCode}`));
      }
      let body = [];
      res.on("data", (chunk) => body.push(chunk));
      res.on("end", () => {
        try {
          body = JSON.parse(Buffer.concat(body).toString());
        } catch (err) {
          reject(err);
        }
        resolve(body);
      });
    });
    req.on("error", (err) => reject(err));
    if (postData) req.write(postData);
    req.end();
  });
}

hexo.extend.filter.register("after_post_render", (data) => {
  data.content += tpl.style;
  return data;
});

/**
 * MtG card tag
 * @example
 * // "cardname" can be English or printed name.
 * {% mtgcard "cardname" [edition] [language=string] [tooltip=true|false] [alt=string] %}
 */
hexo.extend.tag.register(
  "mtgcard",
  async (args) => {
    let argv = ((argArray) => {
      let argument = {};
      argArray.forEach((entry, index) => {
        if (index === 0) {
          // Name.
          argument["search"] = encodeURIComponent(entry);
          argument["name"] = entry;
        } else {
          if (index === 1 && entry.length === 3) {
            // Expansion.
            // TODO: Use `mathiasbynens/he` when possible.
            argument["edition"] = encodeURIComponent(entry);
          } else {
            // Options. Style: `key:value` or `key=value`.
            if (entry.includes(":")) {
              let tmp = entry.split(":");
              argument[tmp[0]] =
                tmp[1] === "true" || tmp[1] === "false"
                  ? tmp[1] === "true"
                  : encodeURIComponent(tmp[1]);
            } else if (entry.includes("=")) {
              let tmp = entry.split("=");
              argument[tmp[0]] =
                tmp[1] === "true" || tmp[1] === "false"
                  ? tmp[1] === "true"
                  : encodeURIComponent(tmp[1]);
            }
          }
        }
      });
      if (undefined === argument.tooltip) argument.tooltip = false;
      if (undefined === argument.edition) argument.edition = "";
      if (undefined === argument.language) argument.language = "en";

      return argument;
    })(args);

    // First, get bulk data from here.
    let bulk_data;
    try {
      bulk_data = JSON.parse(
        await fs.readFile("./scripts/bulk_data/oracle-cards.json", {
          encoding: "utf8",
        })
      );
    } catch (err) {
      // console.log(err);
    }
    let bulk_data_result = bulk_data.filter((c) => {
      return (
        c.name.toLowerCase() === argv.name.toLowerCase() &&
        (argv.edition === "" ||
          c.set.toLowerCase() === argv.edition.toLowerCase())
      );
    });

    let data;
    let scryfallAPIPath = `/cards/search?q=!%22${argv.search}%22`;
    if (argv.edition !== "") {
      scryfallAPIPath += `+set:${argv.edition}`;
    }
    if (argv.language !== "en") {
      scryfallAPIPath += `+lang:${argv.language}`;
      scryfallAPIPath += "&include_multilingual=1";
    }
    if (bulk_data_result.length === 1) {
      // Hit. No scryfall API.
      data = bulk_data_result[0];
      hexo.log.info(`Request bulk data: ${scryfallAPIPath}`);
    } else {
      // Call Scryfall API.
      try {
        const response = await httpRequest({
          host: "api.scryfall.com",
          method: "GET",
          headers: {
            "User-Agent": userAgentString,
          },
          path: scryfallAPIPath,
        });
        data = response.data[0];
        hexo.log.info(`Request Scryfall API: ${scryfallAPIPath}`);
        await sleep(500);
      } catch (err) {
        return (
          "<p><em>Error getting card data: <br />" +
          `Arguments: ${args}<br />` +
          `Query: ${JSON.stringify(argv)}<br />` +
          `API Path: ${scryfallAPIPath}</em></p>`
        );
      }
    }

    let card = data;
    let html, cardImageUrl;
    if (undefined === card) {
      argv.tooltip = false;
      card["image_uris"]["large"] = "#";
      card["scryfall_uri"] = "#";
    }

    if (card.image_uris !== undefined) {
      cardImageUrl = card.image_uris.large;
    } else {
      cardImageUrl = card.card_faces[0].image_uris.large;
    }
    if (argv.tooltip) {
      html = render(tpl.tooltip, {
        URL: card.scryfall_uri,
        NAME: argv.name,
        IMG: render(tpl.tooltip_image, { IMG: cardImageUrl }),
      });
    } else {
      html = render(tpl.image, { IMG: cardImageUrl });
    }
    return html;
  },
  { async: true }
);

/**
 * MtG card link text
 * @example
 * // "cardname" can be English or printed name.
 * {% mtglink "cardname" [edition] [language=string] [alt=string] %}
 */
hexo.extend.tag.register(
  "mtglink",
  async (args) => {
    let argv = ((argArray) => {
      let argument = {};
      argArray.forEach((entry, index) => {
        if (index === 0) {
          // Name.
          argument["search"] = encodeURIComponent(entry);
          argument["name"] = entry;
        } else {
          if (index === 1 && entry.length === 3) {
            // Expansion.
            argument["edition"] = encodeURIComponent(entry);
          } else {
            // Options. Style: `key:value` or `key=value`.
            if (entry.includes(":")) {
              let tmp = entry.split(":");
              argument[tmp[0]] =
                tmp[1] === "true" || tmp[1] === "false"
                  ? tmp[1] === "true"
                  : encodeURIComponent(tmp[1]);
            } else if (entry.includes("=")) {
              let tmp = entry.split("=");
              argument[tmp[0]] =
                tmp[1] === "true" || tmp[1] === "false"
                  ? tmp[1] === "true"
                  : encodeURIComponent(tmp[1]);
            }
          }
        }
      });
      if (undefined === argument.edition) argument.edition = "";
      if (undefined === argument.language) argument.language = "en";

      return argument;
    })(args);

    // First, get bulk data from here.
    let bulk_data;
    try {
      bulk_data = JSON.parse(
        await fs.readFile("./scripts/bulk_data/oracle-cards.json", {
          encoding: "utf8",
        })
      );
    } catch (err) {
      // console.log(err);
    }
    let bulk_data_result = bulk_data.filter((c) => {
      return (
        c.name.toLowerCase() === argv.name.toLowerCase() &&
        (argv.edition === "" ||
          c.set.toLowerCase() === argv.edition.toLowerCase())
      );
    });

    let data;
    let scryfallAPIPath = `/cards/search?q=!%22${argv.search}%22`;
    if (argv.edition !== "") {
      scryfallAPIPath += `+set:${argv.edition}`;
    }
    if (argv.language !== "en") {
      scryfallAPIPath += `+lang:${argv.language}`;
      scryfallAPIPath += "&include_multilingual=1";
    }
    if (bulk_data_result.length === 1) {
      // Hit. No scryfall API.
      data = bulk_data_result[0];
      hexo.log.info(`Request bulk data: ${scryfallAPIPath}`);
    } else {
      // Call Scryfall API.
      try {
        const response = await httpRequest({
          host: "api.scryfall.com",
          method: "GET",
          headers: {
            "User-Agent": userAgentString,
          },
          path: scryfallAPIPath,
        });
        data = response.data[0];
        hexo.log.info(`Request Scryfall API: ${scryfallAPIPath}`);
        await sleep(500);
      } catch (err) {
        return (
          "<p><em>Error getting card data: <br />" +
          `Arguments: ${args}<br />` +
          `Query: ${JSON.stringify(argv)}<br />` +
          `API Path: ${scryfallAPIPath}</em></p>`
        );
      }
    }

    let card = data;
    let html, cardImageUrl;
    if (undefined === card) {
      argv.tooltip = false;
      card["image_uris"]["large"] = "#";
      card["scryfall_uri"] = "#";
    }

    if (card.image_uris !== undefined) {
      cardImageUrl = card.image_uris.large;
    } else {
      cardImageUrl = card.card_faces[0].image_uris.large;
    }

    html = render(tpl.tooltip, {
      URL: card.scryfall_uri,
      NAME: argv.name,
      IMG: render(tpl.tooltip_image, { IMG: cardImageUrl }),
    });

    return html;
  },
  { async: true }
);

/**
 * MtG pick card tag
 * @example
 * {% mtgpick "expansion" "collection number" [language=string] [tooltip=true|false] [alt=string] %}
 */
hexo.extend.tag.register(
  "mtgpick",
  async (args) => {
    let argv = ((argArray) => {
      let argument = {};
      argArray.forEach((entry, index) => {
        if (index === 0) {
          // Expansion
          argument["edition"] = encodeURIComponent(entry);
        } else if (index === 1) {
          // Collection number.
          argument["collectionNumber"] = encodeURIComponent(entry);
        } else {
          // Options. Style: `key:value` or `key=value`.
          if (entry.includes(":")) {
            let tmp = entry.split(":");
            argument[tmp[0]] =
              tmp[1] === "true" || tmp[1] === "false"
                ? tmp[1] === "true"
                : encodeURIComponent(tmp[1]);
          } else if (entry.includes("=")) {
            let tmp = entry.split("=");
            argument[tmp[0]] =
              tmp[1] === "true" || tmp[1] === "false"
                ? tmp[1] === "true"
                : encodeURIComponent(tmp[1]);
          }
        }
      });
      if (undefined === argument.tooltip) argument.tooltip = false;
      if (undefined === argument.language) argument.language = "en";

      return argument;
    })(args);

    // First, get bulk data from here.
    let bulk_data;
    try {
      bulk_data = JSON.parse(
        await fs.readFile("./scripts/bulk_data/default-cards.json", {
          encoding: "utf8",
        })
      );
    } catch (err) {
      // console.log(err);
    }
    let bulk_data_result = bulk_data.filter((c) => {
      return (
        c.set.toLowerCase() === argv.edition.toLowerCase() &&
        parseInt(c.collector_number) === parseInt(argv.collectionNumber)
      );
    });

    let data;
    let scryfallAPIPath = `/cards/${argv.edition}/${argv.collectionNumber}`;
    if (bulk_data_result.length === 1) {
      // Hit. No scryfall API.
      data = bulk_data_result[0];
      hexo.log.info(`Request bulk data: ${scryfallAPIPath}`);
    } else {
      // Call Scryfall API.
      if (argv.language !== "en") {
        scryfallAPIPath += `/${argv.language}`;
      }
      try {
        data = await httpRequest({
          host: "api.scryfall.com",
          method: "GET",
          headers: {
            "User-Agent": userAgentString,
          },
          path: scryfallAPIPath,
        });
        hexo.log.info(`Request Scryfall API: ${scryfallAPIPath}`);
        await sleep(500);
      } catch (err) {
        return (
          "<p><em>Error getting card data: <br />" +
          `Arguments: ${args}<br />` +
          `Query: ${JSON.stringify(argv)}<br />` +
          `API Path: ${scryfallAPIPath}</em></p>`
        );
      }
    }

    let card = data;
    let html, cardImageUrl;
    if (card.image_uris !== undefined) {
      cardImageUrl = card.image_uris.large;
    } else {
      cardImageUrl = card.card_faces[0].image_uris.large;
    }
    if (argv.tooltip) {
      html = render(tpl.tooltip, {
        URL: card.scryfall_uri,
        NAME: card.name,
        IMG: render(tpl.tooltip_image, { IMG: cardImageUrl }),
      });
    } else {
      html = render(tpl.image, { IMG: cardImageUrl });
    }
    return html;
  },
  {
    async: true,
  }
);
