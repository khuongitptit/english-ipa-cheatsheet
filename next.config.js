const withPlugins = require("next-compose-plugins");

let basePath = "";
let assetPrefix = "/";
const isGithubActions = process.env.GITHUB_ACTIONS || false;
if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}
module.exports = withPlugins([], {
  // imagesPublicPath: "/english-ipa-cheatsheet/_next/static/images/",
  basePath: basePath,
  assetPrefix: assetPrefix,
});
