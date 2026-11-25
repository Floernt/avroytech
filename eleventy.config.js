export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "src/static": "/" });

  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/blog/*.md").sort((a, b) => b.date - a.date)
  );

  // Même format de date que le blog Squarespace (ex. « Feb 23, 2024 »).
  eleventyConfig.addFilter("displayDate", (d) =>
    new Date(d).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    })
  );
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString().slice(0, 10));
  eleventyConfig.addFilter("absoluteUrl", (path, base) => new URL(path, base).href);

  return {
    dir: { input: "src", output: "dist", includes: "_includes", data: "_data" },
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
  };
}
