const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const requiredFiles = [
  "index.html",
  "assets/app.js",
  "assets/styles.css",
  "README.md",
  "README.zh-CN.md",
  "LICENSE",
  "CONTRIBUTING.md",
  "SECURITY.md",
  "Dockerfile",
  "vercel.json",
  "netlify.toml",
  "site.webmanifest",
  ".nojekyll",
  "prompts/starter-pack.zh-CN.json",
  "prompts/starter-pack.en.json",
];

let failed = false;

for (const file of requiredFiles) {
  const fullPath = path.join(root, file);
  if (!fs.existsSync(fullPath)) {
    console.error(`Missing required file: ${file}`);
    failed = true;
  }
}

const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const app = fs.readFileSync(path.join(root, "assets/app.js"), "utf8");
const starterPacks = [
  JSON.parse(fs.readFileSync(path.join(root, "prompts/starter-pack.zh-CN.json"), "utf8")),
  JSON.parse(fs.readFileSync(path.join(root, "prompts/starter-pack.en.json"), "utf8")),
];

for (const asset of ["assets/styles.css", "assets/app.js"]) {
  if (!html.includes(asset)) {
    console.error(`index.html does not reference ${asset}`);
    failed = true;
  }
}

const promptIds = [...app.matchAll(/id: "([^"]+)"/g)].map((match) => match[1]);
if (new Set(promptIds).size !== promptIds.length) {
  console.error("Prompt ids must be unique");
  failed = true;
}

if (!app.includes("localStorage")) {
  console.error("App should persist prompt data locally");
  failed = true;
}

for (const starterPack of starterPacks) {
  if (!Array.isArray(starterPack) || starterPack.length < 3) {
    console.error("Starter pack should include at least 3 prompts");
    failed = true;
  }

  for (const prompt of starterPack) {
    for (const key of ["id", "title", "category", "template"]) {
      if (!prompt[key]) {
        console.error(`Starter pack prompt is missing ${key}`);
        failed = true;
      }
    }
  }
}

if (failed) process.exit(1);
console.log("Project validation passed.");
