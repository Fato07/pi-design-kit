import fs from "node:fs";
import path from "node:path";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

const baseDir = dirname(fileURLToPath(import.meta.url));
const packageRoot = dirname(baseDir);
const systemsRoot = join(packageRoot, "skills", "design-artifact", "references", "design-systems");

const systems = [
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
] as const;

type SystemId = (typeof systems)[number];

function isSystemId(value: string): value is SystemId {
  return systems.includes(value as SystemId);
}

function systemPath(system: SystemId): string {
  return join(systemsRoot, system, "DESIGN.md");
}

function parseArgs(args: string): string[] {
  return args.trim().split(/\s+/).filter(Boolean);
}

function usage(): string {
  return [
    "Usage:",
    "  /design-kit list",
    "  /design-kit copy <system> [path]",
    "  /design-kit path <system>",
    "  /design-kit use <system> [brief]",
    "",
    `Systems: ${systems.join(", ")}`,
  ].join("\n");
}

function copyDesignSystem(system: SystemId, target: string): void {
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(systemPath(system), target);
}

export default function designKitExtension(pi: ExtensionAPI) {
  pi.registerCommand("design-kit", {
    description: "Utilities for pi-design-kit: list systems, copy DESIGN.md, or start a design prompt",
    getArgumentCompletions: (prefix) => {
      const commands = ["list", "copy", "path", "use"];
      const current = prefix.trim();
      const parts = current.split(/\s+/).filter(Boolean);

      if (parts.length <= 1 && !current.endsWith(" ")) {
        return commands
          .filter((command) => command.startsWith(parts[0] ?? ""))
          .map((command) => ({ value: command, label: command }));
      }

      const subcommand = parts[0];
      const systemPrefix = parts[1] ?? "";
      if ((subcommand === "copy" || subcommand === "path" || subcommand === "use") && parts.length <= 2) {
        return systems
          .filter((system) => system.startsWith(systemPrefix))
          .map((system) => ({ value: `${subcommand} ${system}`, label: system }));
      }

      return null;
    },
    handler: async (args, ctx) => {
      const [subcommand, rawSystem, ...rest] = parseArgs(args);

      if (!subcommand || subcommand === "help") {
        ctx.ui.notify(usage(), "info");
        return;
      }

      if (subcommand === "list") {
        ctx.ui.notify(`pi-design-kit systems:\n${systems.map((system) => `- ${system}`).join("\n")}`, "info");
        return;
      }

      if (subcommand !== "copy" && subcommand !== "path" && subcommand !== "use") {
        ctx.ui.notify(`Unknown subcommand: ${subcommand}\n\n${usage()}`, "error");
        return;
      }

      if (!rawSystem || !isSystemId(rawSystem)) {
        ctx.ui.notify(`Unknown design system: ${rawSystem ?? "<missing>"}\n\n${usage()}`, "error");
        return;
      }

      if (subcommand === "path") {
        ctx.ui.notify(systemPath(rawSystem), "info");
        return;
      }

      if (subcommand === "copy") {
        const requestedPath = rest.join(" ") || "DESIGN.md";
        const target = path.isAbsolute(requestedPath)
          ? requestedPath
          : path.resolve(ctx.cwd, requestedPath);
        copyDesignSystem(rawSystem, target);
        ctx.ui.notify(`Copied ${rawSystem} DESIGN.md to ${target}`, "info");
        return;
      }

      const brief = rest.join(" ").trim();
      const prompt = brief ? `/design ${rawSystem} ${brief}` : `/design ${rawSystem} `;
      if (brief && ctx.isIdle()) {
        pi.sendUserMessage(prompt);
        return;
      }

      ctx.ui.setEditorText(prompt);
      ctx.ui.notify("Design prompt loaded in editor. Edit and submit when ready.", "info");
    },
  });
}
