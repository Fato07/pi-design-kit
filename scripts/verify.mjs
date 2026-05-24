import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const expectedSkills = [
  "design-artifact",
  "design-md",
  "design-review",
  "ux-design",
  "ux-review",
];

const expectedPrompts = [
  "design",
  "design-md",
  "design-review",
  "design-systems",
  "ux",
  "ux-a11y",
  "ux-copy",
  "ux-flow",
  "ux-review",
  "ux-states",
];

const expectedSystems = [
  "airbnb",
  "apple",
  "claude",
  "composio",
  "cursor",
  "figma",
  "linear",
  "notion",
  "stripe",
  "supabase",
  "vercel",
  "voltagent",
];

const errors = [];

function rel(file) {
  return path.relative(root, file);
}

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function exists(file) {
  return fs.existsSync(file);
}

function frontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n/);
  return match?.[1] ?? null;
}

function frontmatterValue(fm, key) {
  const match = fm.match(new RegExp(`^${key}:\\s*(.+)$`, "m"));
  return match?.[1]?.trim()?.replace(/^['\"]|['\"]$/g, "") ?? null;
}

function verifyPackageJson() {
  const file = path.join(root, "package.json");
  if (!exists(file)) {
    errors.push("missing package.json");
    return;
  }

  const pkg = JSON.parse(read(file));
  for (const key of ["extensions", "skills", "prompts"]) {
    if (!Array.isArray(pkg.pi?.[key]) || pkg.pi[key].length === 0) {
      errors.push(`package.json missing pi.${key}`);
    }
  }
}

function verifySkills() {
  for (const skill of expectedSkills) {
    const file = path.join(root, "skills", skill, "SKILL.md");
    if (!exists(file)) {
      errors.push(`missing ${rel(file)}`);
      continue;
    }

    const fm = frontmatter(read(file));
    if (!fm) {
      errors.push(`${rel(file)} missing frontmatter`);
      continue;
    }

    const name = frontmatterValue(fm, "name");
    const description = frontmatterValue(fm, "description");
    if (name !== skill) errors.push(`${rel(file)} name ${name} does not match ${skill}`);
    if (!description) errors.push(`${rel(file)} missing description`);
    if (description && description.length > 1024) {
      errors.push(`${rel(file)} description exceeds 1024 chars`);
    }
  }
}

function verifyPrompts() {
  for (const prompt of expectedPrompts) {
    const file = path.join(root, "prompts", `${prompt}.md`);
    if (!exists(file)) {
      errors.push(`missing ${rel(file)}`);
      continue;
    }
    if (!frontmatter(read(file))) errors.push(`${rel(file)} missing frontmatter`);
  }
}

function verifySystems() {
  const index = path.join(root, "skills", "design-artifact", "references", "design-systems", "index.md");
  if (!exists(index)) errors.push(`missing ${rel(index)}`);

  for (const system of expectedSystems) {
    const file = path.join(root, "skills", "design-artifact", "references", "design-systems", system, "DESIGN.md");
    if (!exists(file)) errors.push(`missing ${rel(file)}`);
  }
}

function verifyExtension() {
  const file = path.join(root, "extensions", "design-kit.ts");
  if (!exists(file)) errors.push(`missing ${rel(file)}`);
}

function verifyLicenses() {
  for (const file of ["LICENSE", "third_party/awesome-design-md/LICENSE"]) {
    if (!exists(path.join(root, file))) errors.push(`missing ${file}`);
  }
}

verifyPackageJson();
verifySkills();
verifyPrompts();
verifySystems();
verifyExtension();
verifyLicenses();

if (errors.length > 0) {
  console.error("pi-design-kit verification failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("pi-design-kit verification passed");
console.log(`skills: ${expectedSkills.length}`);
console.log(`prompts: ${expectedPrompts.length}`);
console.log(`design systems: ${expectedSystems.length}`);
