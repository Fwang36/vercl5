/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  browserBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "build",
  devServerPort: 8002,
  serverDependenciesToBundle: [
    "remark-directive-rehype",
    "hastscript",
    "unist-util-map",
    "property-information",
    "hast-util-parse-selector",
    "space-separated-tokens",
    "comma-separated-tokens",
  ],
};
