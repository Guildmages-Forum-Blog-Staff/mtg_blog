const http = require("https");

let tpl = {
  list: `<div class="mtable">
  ##CBLOCK##
  ##SBLOCK##
  </div>`,
  mainblock: `<div class="mdeck">
    <div class="mblock">
      <h4>
        ##TITLE##
      </h4>
      <div>
        ##CARDS##
      </div>
    </div>
  </div>`,
  sideblock: `<div class="msideboard">
    <div class="mblock">
      <h4>
        ##TITLE##
      </h4>
      <div>
        ##CARDS##
      </div>
    </div>
  </div>`,
  row: `<div class="crow">
  <div class="ccount">##CCOUNT##</div>
  <div class="cname">##CTITLE##</div>
  <div class="ccost">##CCOST##</div>
</div>`,
  noSymRow: `<div class="crow">
    <div class="ccount">##CCOUNT##</div>
    <div class="cname">##CTITLE##</div>
  </div>`,
  tooltip_image: `<img class="mtgcard" src="##IMG##">`,
  tooltip: `<a class="tooltip" href="##URL##">##NAME##
    <span>##IMG##</span>
  </a>`,
  style: `<style>
  .mtable {
    padding: 16px 16px 32px 16px;
    border: 1px solid black;
    box-shadow: 7px 5px 5px rgba(0, 0, 0, 0.2);
    min-width: 240px;
    background: unset;
  }
  .crow {
    display: flex;
    width: 100%;
    align-items: baseline;
  }
  .ccount { width: 2em; min-width: 1rem; }
  .cname { width: 100%; min-width: 160px; }
  .ccost { width: 5em; min-width: 3rem; }
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
  @media (min-width: 900px) {
    .mtable { display: flex; max-width: 900px; }
    .mblock { margin-right: 30px; }
    .mdeck, .msideboard { width: 50%; }
  }
  .tooltip {
    text-decoration: none;
    position: relative;
    display: inline;
    opacity: 1;
    z-index: unset;
  }
</style>`,
};

let userAgentString = "curl/8.5.0"; // Ubuntu 24.04.

let render = (tpl, data) => {
  for (let prop in data) {
    tpl = tpl.replace(`##${prop}##`, data[prop]);
  }
  return tpl;
};

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

function extendData(card, data) {
  let cardDetail = data.find((cardScry) => {
    return card.name === cardScry.name.replace(/\s\/\/\s.+$/i, "");
  });
  card.url = cardDetail.scryfall_uri;
  let cardImageUrl;
  if (cardDetail.image_uris !== undefined) {
    cardImageUrl = cardDetail.image_uris.large;
  } else {
    cardImageUrl = cardDetail.card_faces[0].image_uris.large;
  }
  card.image = cardDetail.cardImageUrl;
  card.cost = cardDetail.mana_cost;
  card.symbols = '<div style="display: inline-flex;">';
  let syms = card.cost.match(/\{[^{}]*\}/g);
  if (syms != null) {
    syms.forEach((s) => {
      let sym = s.replace("{", "").replace("}", "").replace("/", "");
      card.symbols += `<img src="https://svgs.scryfall.io/card-symbols/${sym}.svg" style="width: 1rem; height: 1rem; margin: 0px 1px 0px 1px;" />`;
    });
  }
  card.symbols += "</div>";
  card.row = render(tpl.row, {
    CCOUNT: card.count,
    CTITLE: card.name,
    CCOST: card.symbols,
  });

  return card;
}

hexo.extend.filter.register("after_post_render", (data) => {
  data.content += tpl.style;
  return data;
});

/**
 * MtG card list
 * @example
 * {% mtglist [tooltip:true|false] [symbols:true|false] %}
 * count#cardname#edition;
 * //sideboard
 * count#cardname#edition;
 * ....
 * {% endmtglist %}
 * @todo Fix Double-faced cards' image_url.
 */
hexo.extend.tag.register(
  "mtglist",
  async (args, content) => {
    let argv = ((argArray) => {
      let argument = {};
      argArray.forEach((entry, index) => {
        // Options. Style: `key:value` or `key=value`.
        if (entry.includes(":")) {
          let tmp = entry.split(":");
          argument[tmp[0]] = tmp[1] === "true";
        } else if (entry.includes("=")) {
          let tmp = entry.split("=");
          argument[tmp[0]] = tmp[1] === "true";
        }
      });
      if (undefined === argument.tooltip) argument.tooltip = false;
      if (undefined === argument.symbols) argument.symbols = false;

      return argument;
    })(args);

    let data = { identifiers: [] };
    let cards = { main: [], side: [], count: { main: 0, side: 0 } };
    content = content.replaceAll("\n", "").split("//sideboard");
    cards.main = content[0].split(";");
    if (cards.main[cards.main.length - 1] === "") {
      cards.main.splice(-1);
    }
    if (typeof content[1] !== "undefined") {
      cards.side = content[1].split(";");
      if (cards.side[cards.side.length - 1] === "") {
        cards.side.splice(-1);
      }
    }

    cards.main.forEach((entry, idx) => {
      cards.main[idx] = entry.split("#");
      cards.main[idx] = {
        count: parseInt(cards.main[idx][0]),
        name: cards.main[idx][1],
        edition: cards.main[idx][2],
      };
      cards.count.main += cards.main[idx].count;
      data.identifiers.push({
        name: cards.main[idx].name.replaceAll(" ", "-"),
        set: cards.main[idx].edition,
      });
    });
    cards.side.forEach((entry, idx) => {
      cards.side[idx] = entry.split("#");
      cards.side[idx] = {
        count: parseInt(cards.side[idx][0]),
        name: cards.side[idx][1],
        edition: cards.side[idx][2],
      };
      cards.count.side += cards.side[idx].count;
      data.identifiers.push({
        name: cards.side[idx].name,
        set: cards.side[idx].edition,
      });
    });

    data = JSON.stringify(data);
    try {
      const bulk_data = await httpRequest(
        {
          host: "api.scryfall.com",
          method: "POST",
          path: "/cards/collection",
          headers: {
            "User-Agent": userAgentString,
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(data),
          },
        },
        data,
      );

      let main = render(tpl.mainblock, { TITLE: `套牌 (${cards.count.main})` });
      let side = "";
      if (cards.count.side > 0) {
        side = render(tpl.sideblock, { TITLE: `備牌 (${cards.count.side})` });
      }

      cards.main.forEach((card) => {
        card = extendData(card, bulk_data.data);

        if (argv.tooltip) {
          if (argv.symbols) {
            main = render(main, {
              CARDS:
                render(tpl.tooltip, {
                  URL: card.url,
                  NAME: card.row,
                  IMG: render(tpl.tooltip_image, { IMG: card.image }),
                }) + "##CARDS##",
            });
          } else {
            main = render(main, {
              CARDS:
                render(tpl.tooltip, {
                  URL: card.url,
                  NAME: render(tpl.noSymRow, {
                    CCOUNT: card.count,
                    CTITLE: card.name,
                  }),
                  IMG: render(tpl.tooltip_image, { IMG: card.image }),
                }) + "##CARDS##",
            });
          }
        } else {
          if (argv.symbols) {
            main = render(main, { CARDS: `${card.row}##CARDS##` });
          } else {
            main = render(main, {
              CARDS:
                render(tpl.noSymRow, {
                  CCOUNT: card.count,
                  CTITLE: card.name,
                }) + "##CARDS##",
            });
          }
        }
      });

      cards.side.forEach((sidecard) => {
        sidecard = extendData(sidecard, bulk_data.data);

        if (argv.tooltip) {
          if (argv.symbols) {
            side = render(side, {
              CARDS:
                render(tpl.tooltip, {
                  URL: sidecard.url,
                  NAME: sidecard.row,
                  IMG: render(tpl.tooltip_image, { IMG: sidecard.image }),
                }) + "##CARDS##",
            });
          } else {
            side = render(side, {
              CARDS:
                render(tpl.tooltip, {
                  URL: sidecard.url,
                  NAME: render(tpl.noSymRow, {
                    CCOUNT: sidecard.count,
                    CTITLE: sidecard.name,
                  }),
                  IMG: render(tpl.tooltip_image, { IMG: sidecard.image }),
                }) + "##CARDS##",
            });
          }
        } else {
          if (argv.symbols) {
            side = render(side, { CARDS: `${sidecard.row}##CARDS##` });
          } else {
            side = render(side, {
              CARDS:
                render(tpl.noSymRow, {
                  CCOUNT: sidecard.count,
                  CTITLE: sidecard.name,
                }) + "##CARDS##",
            });
          }
        }
      });

      main = render(main, { CARDS: "" });
      if (cards.count.side > 0) {
        side = render(side, { CARDS: "" });
      }
      return render(tpl.list, { CBLOCK: main, SBLOCK: side });
    } catch (err) {
      return `<p>Failed to rendered card list: <br />${content}</p>`;
    }
  },
  {
    ends: true,
    async: true,
  },
);
