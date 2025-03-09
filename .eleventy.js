import markdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';
import markdownItFootnote from 'markdown-it-footnote';
import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export const config = {
  dir: {
    includes: "_includes",
    layouts: "_layouts",
  }
};

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css/main.css");
  eleventyConfig.addPassthroughCopy("css/post.css");
  // eleventyConfig.addPassthroughCopy("keybase.txt");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("resources/");

  const markdownLib = markdownIt({ html: true, typographer: true });
  markdownLib
    .use(markdownItAttrs)
    .use(markdownItFootnote);
  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    strictFilters: false, // renamed from `strict_filters` in Eleventy 1.0
  });

  // Define a posts collection for all blog posts
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("_posts/**/*.md");
  });

  // Define a post_url Liquid tag for cross referencing
  // https://rusingh.com/articles/2020/04/24/implement-jekyll-post-url-tag-11ty-shortcode/
  eleventyConfig.addShortcode("post_url", (collection, slug) => {
    try {
      if (collection.length < 1) {
        throw "Collection appears to be empty";
      }
      if (!Array.isArray(collection)) {
        throw "Collection is an invalid type - it must be an array!";
      }
      if (typeof slug !== "string") {
        throw "Slug is an invalid type - it must be a string!";
      }

      const found = collection.find(p => p.fileSlug == slug);
      if (found === 0 || found === undefined) {
        throw `${slug} not found in specified collection.`;
      } else {
        return found.url;
      }
    } catch (e) {
      console.error(
        `An error occurred while searching for the url to ${slug}. Details:`,
        e
      );
    }
  });

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- excerpt -->",
  });

  eleventyConfig.addFilter("stripNBSP", function(value) {
    return value.replace(/\&nbsp;/g, ' ');
  });

  eleventyConfig.addPlugin(feedPlugin, {
    type: "rss", // or "rss", "json"
    outputPath: "/feed.xml",
    collection: {
      name: "posts", // iterate over `collections.posts`
      limit: 10,     // 0 means no limit
    },
    metadata: {
      language: "en",
      title: "zmknox",
      subtitle: "A website from a person who enjoys computers.",
      base: "https://zmknox.com/",
      author: {
        name: "zmknox"
      }
    }
  });

  eleventyConfig.addPlugin(feedPlugin, {
    type: "json", // or "rss", "json"
    outputPath: "/feed.json",
    collection: {
      name: "posts", // iterate over `collections.posts`
      limit: 10,     // 0 means no limit
    },
    metadata: {
      language: "en",
      title: "zmknox",
      subtitle: "A website from a person who enjoys computers.",
      base: "https://zmknox.com/",
      author: {
        name: "zmknox"
      }
    }
  });
};

