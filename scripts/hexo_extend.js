"use strict";

const jsyml = require("js-yaml");
const fs = require("fs");

function get_authors() {
  const authorDir = hexo.source_dir + "_authors/";
  const authorFiles = fs.readdirSync(authorDir);
  const authorData = [];
  for (const element of authorFiles) {
    const authorFile = element;
    const authorFileData = fs.readFileSync(authorDir + authorFile, "utf8");
    const authorFileJson = jsyml.load(authorFileData);
    authorData.push(authorFileJson);
  }
  return authorData;
}

hexo.extend.helper.register("post_author", function (post_obj) {
  const post = post_obj;
  const post_authors = post.authors;
  if (!post_authors) {
    return;
  }

  const authorData = get_authors();

  post.author = "";
  post.avatar = "";
  if (post_authors.length > 1) {
    post.avatar = "/images/logo.jpg";
  } else {
    post.avatar = post_authors[0].avatar;
  }
  for (const p_author of post_authors) {
    const author = authorData.find((a) => a.username === p_author);
    if (author && post.author) {
      post.author = post.author + " & " + author.name;
    } else {
      post.author = author.name;
      if (post_authors.length < 2) {
        post.avatar = author.avatar;
      }
    }
  }

  return post.author;
});

hexo.extend.helper.register("author_url", function (post_obj) {
  const post = post_obj;
  const post_authors = post.authors;
  if (!post_authors) {
    return;
  }

  const authorData = get_authors();

  const res = [];
  for (const p_author of post_authors) {
    const author = authorData.find((a) => a.username === p_author);
    if (author && author.url) {
      res.push(author.url);
    }
  }

  return res;
});

hexo.extend.helper.register("author_name", function (post_obj) {
  const post = post_obj;
  const post_authors = post.authors;
  if (!post_authors) {
    return;
  }

  const authorData = get_authors();

  const res = [];
  for (const p_author of post_authors) {
    const author = authorData.find((a) => a.username === p_author);
    if (author) {
      res.push(author.name);
    }
  }

  if (res.length > 0) {
    return res;
  } else {
    return;
  }
});

hexo.extend.helper.register("author_avatar", function (post_obj) {
  const post = post_obj;
  const post_authors = post.authors;
  if (!post_authors) {
    return;
  }

  const authorData = get_authors();

  const res = [];
  for (const p_author of post_authors) {
    const author = authorData.find((a) => a.username === p_author);
    if (author) {
      res.push(author.avatar);
    }
  }

  if (res.length > 0) {
    return res;
  } else {
    return;
  }
});

hexo.extend.helper.register("author_intro", function (post_obj) {
  const post = post_obj;
  const post_authors = post.authors;
  if (!post_authors) {
    return;
  }

  const authorData = get_authors();

  const res = [];
  for (const p_author of post_authors) {
    const author = authorData.find((a) => a.username === p_author);
    if (author) {
      res.push(author.intro);
    }
  }

  if (res.length > 0) {
    return res;
  } else {
    return;
  }
});

hexo.extend.helper.register("author_info_str", function (author_name) {
  const author = get_authors().find((a) => a.username === author_name);
  if (author) {
    return author;
  }
});
