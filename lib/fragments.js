import { jsxs as o, jsx as t, Fragment as I } from "react/jsx-runtime";
import { useMemo as S, useState as w, useEffect as te, useCallback as B } from "react";
import { ChevronDown as ne, ChevronRight as re, X as le, Check as F, Copy as L, ChevronRightIcon as ie, CheckIcon as oe, FileJson as ce, AlertCircle as se, Clock as de, Package as ue, ArrowRightLeft as me, Globe as ge } from "lucide-react";
import { c as p } from "./utils-B6yFEsav.js";
import { A as $, B as T } from "./badge-B1vpNSNG.js";
import pe from "@monaco-editor/react";
import { Slot as fe } from "radix-ui";
import { P as he, c as be, b as xe } from "./popover-BC-4GKqp.js";
import { Command as M } from "cmdk";
import { B as J } from "./button-DHQhRgTM.js";
import { cva as X } from "class-variance-authority";
import "clsx";
import "tailwind-merge";
import { A as Ne, a as R } from "./ActionButtonGroup-D1TNSW-7.js";
function ye(e) {
  const a = [];
  if (!Array.isArray(e)) return a;
  for (const n of e) {
    if (typeof n != "string") continue;
    const r = n.split("/").filter(Boolean);
    if (r.length === 0) continue;
    let l = a, c = "";
    for (let d = 0; d < r.length; d++) {
      const i = r[d];
      c = c ? `${c}/${i}` : i;
      const s = d === r.length - 1;
      let m = l.find((g) => g.name === i);
      m || (m = {
        name: i,
        path: c,
        isFolder: !s,
        children: []
      }, l.push(m)), s || (l = m.children);
    }
  }
  return U(a);
}
function U(e) {
  return e.map((a) => ({ ...a, children: U(a.children) })).sort((a, n) => a.isFolder && !n.isFolder ? -1 : !a.isFolder && n.isFolder ? 1 : a.name.localeCompare(n.name));
}
const D = {
  // JavaScript/TypeScript
  js: { iconName: "react-icons/si:SiJavascript", language: "javascript", label: "JavaScript" },
  mjs: { iconName: "react-icons/si:SiJavascript", language: "javascript", label: "JavaScript" },
  cjs: { iconName: "react-icons/si:SiJavascript", language: "javascript", label: "JavaScript" },
  jsx: { iconName: "react-icons/si:SiJavascript", language: "javascript", label: "React JSX" },
  ts: { iconName: "react-icons/si:SiTypescript", language: "typescript", label: "TypeScript" },
  tsx: { iconName: "react-icons/si:SiTypescript", language: "typescript", label: "React TSX" },
  "d.ts": { iconName: "react-icons/si:SiTypescript", language: "typescript", label: "TypeScript Definition" },
  // Web
  html: { iconName: "react-icons/si:SiHtml5", language: "html", label: "HTML" },
  htm: { iconName: "react-icons/si:SiHtml5", language: "html", label: "HTML" },
  css: { iconName: "react-icons/si:SiCss3", language: "css", label: "CSS" },
  scss: { iconName: "react-icons/si:SiCss3", language: "css", label: "SCSS" },
  sass: { iconName: "react-icons/si:SiCss3", language: "css", label: "Sass" },
  less: { iconName: "react-icons/si:SiCss3", language: "css", label: "Less" },
  svg: { iconName: "lucide-react:Image", language: "html", label: "SVG" },
  // Python
  py: { iconName: "react-icons/si:SiPython", language: "python", label: "Python" },
  pyw: { iconName: "react-icons/si:SiPython", language: "python", label: "Python" },
  pyi: { iconName: "react-icons/si:SiPython", language: "python", label: "Python Stub" },
  ipynb: { iconName: "react-icons/si:SiPython", language: "python", label: "Jupyter Notebook" },
  // Java/Kotlin/Scala
  java: { iconName: "lucide-react:File", language: "java", label: "Java" },
  kt: { iconName: "react-icons/si:SiKotlin", language: "kotlin", label: "Kotlin" },
  kts: { iconName: "react-icons/si:SiKotlin", language: "kotlin", label: "Kotlin Script" },
  scala: { iconName: "react-icons/si:SiScala", language: "scala", label: "Scala" },
  // C/C++/C#
  c: { iconName: "react-icons/si:SiC", language: "c", label: "C" },
  h: { iconName: "react-icons/si:SiC", language: "c", label: "C Header" },
  cpp: { iconName: "react-icons/si:SiCplusplus", language: "cpp", label: "C++" },
  cc: { iconName: "react-icons/si:SiCplusplus", language: "cpp", label: "C++" },
  cxx: { iconName: "react-icons/si:SiCplusplus", language: "cpp", label: "C++" },
  hpp: { iconName: "react-icons/si:SiCplusplus", language: "cpp", label: "C++ Header" },
  cs: { iconName: "lucide-react:File", language: "csharp", label: "C#" },
  // Go/Rust
  go: { iconName: "react-icons/si:SiGo", language: "go", label: "Go" },
  rs: { iconName: "react-icons/si:SiRust", language: "rust", label: "Rust" },
  // Ruby/PHP
  rb: { iconName: "react-icons/si:SiRuby", language: "ruby", label: "Ruby" },
  php: { iconName: "react-icons/si:SiPhp", language: "php", label: "PHP" },
  // Shell
  sh: { iconName: "react-icons/si:SiGnubash", language: "bash", label: "Shell" },
  bash: { iconName: "react-icons/si:SiGnubash", language: "bash", label: "Bash" },
  zsh: { iconName: "react-icons/si:SiGnubash", language: "bash", label: "Zsh" },
  fish: { iconName: "lucide-react:Terminal", language: "bash", label: "Fish" },
  ps1: { iconName: "react-icons/vsc:VscTerminalPowershell", language: "powershell", label: "PowerShell" },
  bat: { iconName: "lucide-react:Terminal", language: "batch", label: "Batch" },
  cmd: { iconName: "lucide-react:Terminal", language: "batch", label: "Batch" },
  // Data/Config
  json: { iconName: "react-icons/vsc:VscJson", language: "json", label: "JSON" },
  jsonc: { iconName: "react-icons/vsc:VscJson", language: "json", label: "JSON with Comments" },
  json5: { iconName: "react-icons/vsc:VscJson", language: "json", label: "JSON5" },
  yaml: { iconName: "react-icons/si:SiYaml", language: "yaml", label: "YAML" },
  yml: { iconName: "react-icons/si:SiYaml", language: "yaml", label: "YAML" },
  toml: { iconName: "react-icons/si:SiToml", language: "toml", label: "TOML" },
  xml: { iconName: "lucide-react:FileText", language: "xml", label: "XML" },
  csv: { iconName: "lucide-react:FileText", language: "text", label: "CSV" },
  tsv: { iconName: "lucide-react:FileText", language: "text", label: "TSV" },
  // Markdown/Text
  md: { iconName: "react-icons/si:SiMarkdown", language: "markdown", label: "Markdown" },
  mdx: { iconName: "react-icons/si:SiMarkdown", language: "markdown", label: "MDX" },
  txt: { iconName: "lucide-react:FileText", language: "text", label: "Text" },
  rst: { iconName: "lucide-react:FileText", language: "text", label: "reStructuredText" },
  // SQL
  sql: { iconName: "lucide-react:Database", language: "sql", label: "SQL" },
  // Docker/DevOps
  dockerfile: { iconName: "react-icons/si:SiDocker", language: "dockerfile", label: "Dockerfile" },
  dockerignore: { iconName: "react-icons/si:SiDocker", language: "text", label: "Docker Ignore" },
  // Git
  gitignore: { iconName: "lucide-react:FileText", language: "text", label: "Git Ignore" },
  gitattributes: { iconName: "lucide-react:FileText", language: "text", label: "Git Attributes" },
  // Swift/Objective-C
  swift: { iconName: "react-icons/si:SiSwift", language: "swift", label: "Swift" },
  m: { iconName: "lucide-react:File", language: "objectivec", label: "Objective-C" },
  mm: { iconName: "lucide-react:File", language: "objectivec", label: "Objective-C++" },
  // Dart/Flutter
  dart: { iconName: "react-icons/si:SiDart", language: "dart", label: "Dart" },
  // Vue/Svelte
  vue: { iconName: "react-icons/si:SiVuedotjs", language: "vue", label: "Vue" },
  svelte: { iconName: "react-icons/si:SiSvelte", language: "svelte", label: "Svelte" },
  // GraphQL
  graphql: { iconName: "react-icons/si:SiGraphql", language: "graphql", label: "GraphQL" },
  gql: { iconName: "react-icons/si:SiGraphql", language: "graphql", label: "GraphQL" },
  // Lua
  lua: { iconName: "react-icons/si:SiLua", language: "lua", label: "Lua" },
  // R
  r: { iconName: "react-icons/si:SiR", language: "r", label: "R" },
  rmd: { iconName: "react-icons/si:SiMarkdown", language: "markdown", label: "R Markdown" },
  // Makefile
  makefile: { iconName: "lucide-react:Terminal", language: "makefile", label: "Makefile" },
  mk: { iconName: "lucide-react:Terminal", language: "makefile", label: "Makefile" },
  // Environment
  env: { iconName: "lucide-react:FileText", language: "text", label: "Environment" },
  "env.local": { iconName: "lucide-react:FileText", language: "text", label: "Environment" },
  "env.development": { iconName: "lucide-react:FileText", language: "text", label: "Environment" },
  "env.production": { iconName: "lucide-react:FileText", language: "text", label: "Environment" },
  // Lock files
  lock: { iconName: "lucide-react:File", language: "text", label: "Lock File" },
  // License
  license: { iconName: "lucide-react:FileText", language: "text", label: "License" },
  licence: { iconName: "lucide-react:FileText", language: "text", label: "License" },
  // Images
  png: { iconName: "lucide-react:Image", language: "image", label: "PNG Image" },
  jpg: { iconName: "lucide-react:Image", language: "image", label: "JPEG Image" },
  jpeg: { iconName: "lucide-react:Image", language: "image", label: "JPEG Image" },
  gif: { iconName: "lucide-react:Image", language: "image", label: "GIF Image" },
  webp: { iconName: "lucide-react:Image", language: "image", label: "WebP Image" },
  ico: { iconName: "lucide-react:Image", language: "image", label: "Icon" }
}, V = {
  "package.json": { iconName: "react-icons/vsc:VscJson", language: "json", label: "Package JSON" },
  "tsconfig.json": { iconName: "react-icons/si:SiTypescript", language: "json", label: "TypeScript Config" },
  "jsconfig.json": { iconName: "react-icons/si:SiJavascript", language: "json", label: "JavaScript Config" },
  ".eslintrc": { iconName: "lucide-react:FileText", language: "json", label: "ESLint Config" },
  ".eslintrc.json": { iconName: "react-icons/vsc:VscJson", language: "json", label: "ESLint Config" },
  ".prettierrc": { iconName: "lucide-react:FileText", language: "json", label: "Prettier Config" },
  "vite.config.ts": { iconName: "react-icons/si:SiTypescript", language: "typescript", label: "Vite Config" },
  "vite.config.js": { iconName: "react-icons/si:SiJavascript", language: "javascript", label: "Vite Config" },
  "next.config.js": { iconName: "react-icons/si:SiJavascript", language: "javascript", label: "Next.js Config" },
  "next.config.mjs": { iconName: "react-icons/si:SiJavascript", language: "javascript", label: "Next.js Config" },
  "tailwind.config.js": { iconName: "react-icons/si:SiJavascript", language: "javascript", label: "Tailwind Config" },
  "tailwind.config.ts": { iconName: "react-icons/si:SiTypescript", language: "typescript", label: "Tailwind Config" },
  dockerfile: { iconName: "react-icons/si:SiDocker", language: "dockerfile", label: "Dockerfile" },
  "docker-compose.yml": { iconName: "react-icons/si:SiDocker", language: "yaml", label: "Docker Compose" },
  "docker-compose.yaml": { iconName: "react-icons/si:SiDocker", language: "yaml", label: "Docker Compose" },
  ".gitignore": { iconName: "lucide-react:FileText", language: "text", label: "Git Ignore" },
  ".gitattributes": { iconName: "lucide-react:FileText", language: "text", label: "Git Attributes" },
  "readme.md": { iconName: "react-icons/si:SiMarkdown", language: "markdown", label: "Readme" },
  readme: { iconName: "lucide-react:FileText", language: "text", label: "Readme" },
  license: { iconName: "lucide-react:FileText", language: "text", label: "License" },
  "license.md": { iconName: "react-icons/si:SiMarkdown", language: "markdown", label: "License" },
  "changelog.md": { iconName: "react-icons/si:SiMarkdown", language: "markdown", label: "Changelog" },
  makefile: { iconName: "lucide-react:Terminal", language: "makefile", label: "Makefile" }
}, ve = {
  iconName: "lucide-react:File",
  language: "text",
  label: "File"
};
function Y(e) {
  const a = e.split("/").pop()?.toLowerCase() || "";
  if (V[a])
    return V[a];
  const n = a.split(".");
  if (n.length > 2) {
    const l = n.slice(-2).join(".");
    if (D[l])
      return D[l];
  }
  const r = n.pop() || "";
  return D[r] || ve;
}
function Se(e) {
  return Y(e).iconName;
}
const we = {
  // Source folders
  src: "lucide-react:FolderCode",
  source: "lucide-react:FolderCode",
  app: "lucide-react:FolderCode",
  pages: "lucide-react:FolderCode",
  // Components
  components: "lucide-react:Component",
  component: "lucide-react:Component",
  ui: "lucide-react:Component",
  widgets: "lucide-react:Component",
  // Libraries & Utils
  lib: "lucide-react:Library",
  libs: "lucide-react:Library",
  utils: "lucide-react:Wrench",
  util: "lucide-react:Wrench",
  helpers: "lucide-react:Wrench",
  hooks: "lucide-react:Anchor",
  // Assets & Media
  assets: "lucide-react:FolderArchive",
  images: "lucide-react:Image",
  img: "lucide-react:Image",
  icons: "lucide-react:Smile",
  fonts: "lucide-react:Type",
  media: "lucide-react:Film",
  public: "lucide-react:Globe",
  static: "lucide-react:Globe",
  // Styles
  styles: "lucide-react:Palette",
  style: "lucide-react:Palette",
  css: "lucide-react:Palette",
  scss: "lucide-react:Palette",
  themes: "lucide-react:Palette",
  // Documentation
  docs: "lucide-react:BookOpen",
  doc: "lucide-react:BookOpen",
  documentation: "lucide-react:BookOpen",
  // Tests
  tests: "lucide-react:FlaskConical",
  test: "lucide-react:FlaskConical",
  __tests__: "lucide-react:FlaskConical",
  spec: "lucide-react:FlaskConical",
  specs: "lucide-react:FlaskConical",
  // Config
  config: "lucide-react:Settings",
  configs: "lucide-react:Settings",
  ".config": "lucide-react:Settings",
  settings: "lucide-react:Settings",
  // API & Server
  api: "lucide-react:Cloud",
  server: "lucide-react:Server",
  services: "lucide-react:Server",
  routes: "lucide-react:Route",
  // Data & Types
  types: "lucide-react:FileType",
  models: "lucide-react:Database",
  schemas: "lucide-react:Database",
  data: "lucide-react:Database",
  // Build & Output
  dist: "lucide-react:Package",
  build: "lucide-react:Package",
  out: "lucide-react:Package",
  ".next": "lucide-react:Package",
  // Dependencies
  node_modules: "lucide-react:Boxes",
  vendor: "lucide-react:Boxes",
  packages: "lucide-react:Boxes",
  // Git & Version Control
  ".git": "lucide-react:GitBranch",
  ".github": "lucide-react:Github",
  // Scripts
  scripts: "lucide-react:Terminal",
  bin: "lucide-react:Terminal",
  // Localization
  locales: "lucide-react:Languages",
  i18n: "lucide-react:Languages",
  translations: "lucide-react:Languages",
  // Redux/State
  store: "lucide-react:Container",
  redux: "lucide-react:Container",
  state: "lucide-react:Container",
  // Layouts
  layouts: "lucide-react:Layout",
  layout: "lucide-react:Layout",
  templates: "lucide-react:Layout",
  // Features
  features: "lucide-react:Puzzle",
  modules: "lucide-react:Puzzle",
  // Middleware
  middleware: "lucide-react:Layers",
  middlewares: "lucide-react:Layers",
  // Providers
  providers: "lucide-react:Share2",
  contexts: "lucide-react:Share2",
  context: "lucide-react:Share2"
}, Ce = "lucide-react:Folder", ke = "lucide-react:FolderOpen";
function je(e, a = !1) {
  const n = e.toLowerCase(), r = we[n];
  return r || (a ? ke : Ce);
}
const G = {
  // Text
  "text/plain": { language: "text", label: "Plain Text" },
  "text/html": { language: "html", label: "HTML" },
  "text/css": { language: "css", label: "CSS" },
  "text/csv": { language: "text", label: "CSV" },
  "text/xml": { language: "xml", label: "XML" },
  "text/markdown": { language: "markdown", label: "Markdown" },
  // JavaScript/TypeScript
  "text/javascript": { language: "javascript", label: "JavaScript" },
  "application/javascript": { language: "javascript", label: "JavaScript" },
  "application/x-javascript": { language: "javascript", label: "JavaScript" },
  "text/typescript": { language: "typescript", label: "TypeScript" },
  "application/typescript": { language: "typescript", label: "TypeScript" },
  // JSON
  "application/json": { language: "json", label: "JSON" },
  "text/json": { language: "json", label: "JSON" },
  "application/ld+json": { language: "json", label: "JSON-LD" },
  "application/manifest+json": { language: "json", label: "Web Manifest" },
  // XML variants
  "application/xml": { language: "xml", label: "XML" },
  "application/xhtml+xml": { language: "html", label: "XHTML" },
  "application/rss+xml": { language: "xml", label: "RSS" },
  "application/atom+xml": { language: "xml", label: "Atom" },
  "image/svg+xml": { language: "xml", label: "SVG" },
  // Python
  "text/x-python": { language: "python", label: "Python" },
  "application/x-python": { language: "python", label: "Python" },
  // Java
  "text/x-java": { language: "java", label: "Java" },
  "text/x-java-source": { language: "java", label: "Java" },
  // C/C++
  "text/x-c": { language: "c", label: "C" },
  "text/x-c++": { language: "cpp", label: "C++" },
  "text/x-csrc": { language: "c", label: "C" },
  "text/x-c++src": { language: "cpp", label: "C++" },
  // Ruby
  "text/x-ruby": { language: "ruby", label: "Ruby" },
  "application/x-ruby": { language: "ruby", label: "Ruby" },
  // PHP
  "text/x-php": { language: "php", label: "PHP" },
  "application/x-php": { language: "php", label: "PHP" },
  // Shell
  "text/x-sh": { language: "bash", label: "Shell" },
  "application/x-sh": { language: "bash", label: "Shell" },
  "text/x-shellscript": { language: "bash", label: "Shell Script" },
  // YAML
  "text/yaml": { language: "yaml", label: "YAML" },
  "text/x-yaml": { language: "yaml", label: "YAML" },
  "application/x-yaml": { language: "yaml", label: "YAML" },
  // SQL
  "text/x-sql": { language: "sql", label: "SQL" },
  "application/sql": { language: "sql", label: "SQL" },
  // Go
  "text/x-go": { language: "go", label: "Go" },
  // Rust
  "text/x-rust": { language: "rust", label: "Rust" },
  // GraphQL
  "application/graphql": { language: "graphql", label: "GraphQL" },
  // Form data
  "application/x-www-form-urlencoded": { language: "text", label: "Form Data" },
  "multipart/form-data": { language: "text", label: "Multipart Form" }
}, Te = { language: "text", label: "Plain Text" };
function Fe(e) {
  const a = e.split(";")[0].trim().toLowerCase();
  return G[a] ? G[a] : a.startsWith("text/") ? { language: "text", label: "Text" } : a.includes("json") ? { language: "json", label: "JSON" } : a.includes("xml") ? { language: "xml", label: "XML" } : a.includes("javascript") ? { language: "javascript", label: "JavaScript" } : Te;
}
function Q({
  node: e,
  depth: a,
  selectedPath: n,
  onSelect: r,
  expandedFolders: l,
  toggleFolder: c,
  showFileIcons: d = !0,
  showTreeLines: i = !1
}) {
  const s = l.has(e.path), m = n === e.path, g = a * 14;
  if (e.isFolder) {
    const h = je(e.name, s);
    return /* @__PURE__ */ o("div", { className: "relative", children: [
      i && a > 0 && /* @__PURE__ */ t(
        "div",
        {
          className: "absolute top-0 bottom-0 border-l border-border",
          style: { left: `${(a - 1) * 14 + 14}px` }
        }
      ),
      /* @__PURE__ */ o(
        "button",
        {
          onClick: () => c(e.path),
          className: p(
            "w-full flex items-center gap-1.5 px-2 py-1 text-xs hover:bg-accent/50 rounded-sm transition-colors relative whitespace-nowrap",
            "text-foreground"
          ),
          style: { paddingLeft: `${g + 6}px` },
          children: [
            s ? /* @__PURE__ */ t(ne, { className: "h-3.5 w-3.5 text-muted-foreground flex-shrink-0" }) : /* @__PURE__ */ t(re, { className: "h-3.5 w-3.5 text-muted-foreground flex-shrink-0" }),
            /* @__PURE__ */ t(
              $,
              {
                name: h,
                size: 15,
                className: "text-muted-foreground flex-shrink-0",
                showSpinner: !1
              }
            ),
            /* @__PURE__ */ t("span", { children: e.name })
          ]
        }
      ),
      s && /* @__PURE__ */ o("div", { className: "relative", children: [
        i && /* @__PURE__ */ t(
          "div",
          {
            className: "absolute top-0 bottom-0 border-l border-border",
            style: { left: `${a * 14 + 14}px` }
          }
        ),
        e.children.map((b) => /* @__PURE__ */ t(
          Q,
          {
            node: b,
            depth: a + 1,
            selectedPath: n,
            onSelect: r,
            expandedFolders: l,
            toggleFolder: c,
            showFileIcons: d,
            showTreeLines: i
          },
          b.path
        ))
      ] })
    ] });
  }
  const f = Se(e.name);
  return /* @__PURE__ */ o("div", { className: "relative", children: [
    i && a > 0 && /* @__PURE__ */ t(
      "div",
      {
        className: "absolute top-0 bottom-0 border-l border-border",
        style: { left: `${(a - 1) * 14 + 14}px` }
      }
    ),
    /* @__PURE__ */ o(
      "button",
      {
        onClick: () => r(e.path),
        className: p(
          "w-full flex items-center gap-1.5 px-2 py-1 text-xs rounded-sm transition-colors relative whitespace-nowrap",
          m ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-accent/50"
        ),
        style: { paddingLeft: `${g + 24}px` },
        children: [
          d && /* @__PURE__ */ t(
            $,
            {
              name: f,
              size: 15,
              className: "text-muted-foreground flex-shrink-0",
              showSpinner: !1
            }
          ),
          /* @__PURE__ */ t("span", { children: e.name })
        ]
      }
    )
  ] });
}
function ya({
  filePaths: e,
  onFileItemClick: a,
  selectedPath: n,
  title: r = "Explorer",
  showFileIcons: l = !0,
  showTreeLines: c = !1
}) {
  const d = S(() => ye(e), [e]), [i, s] = w(() => {
    const g = /* @__PURE__ */ new Set();
    if (n) {
      const f = n.split("/");
      let h = "";
      for (let b = 0; b < f.length - 1; b++)
        h = h ? `${h}/${f[b]}` : f[b], g.add(h);
    }
    return g;
  }), m = (g) => {
    s((f) => {
      const h = new Set(f);
      return h.has(g) ? h.delete(g) : h.add(g), h;
    });
  };
  return /* @__PURE__ */ o("div", { className: "flex flex-col h-full border border-border rounded-lg overflow-hidden bg-background", children: [
    /* @__PURE__ */ t("div", { className: "px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b border-border bg-muted/20 flex-shrink-0", children: r }),
    /* @__PURE__ */ t("div", { className: "flex-1 min-h-0 overflow-hidden", children: /* @__PURE__ */ t("div", { className: "h-full w-full overflow-auto", children: /* @__PURE__ */ t("div", { className: "py-1 min-w-max", children: d.map((g) => /* @__PURE__ */ t(
      Q,
      {
        node: g,
        depth: 0,
        selectedPath: n ?? null,
        onSelect: a,
        expandedFolders: i,
        toggleFolder: m,
        showFileIcons: l,
        showTreeLines: c
      },
      g.path
    )) }) }) })
  ] });
}
function va({
  name: e,
  icon: a,
  onClick: n,
  isActive: r = !1,
  onClose: l
}) {
  return /* @__PURE__ */ o(
    "div",
    {
      onClick: n,
      title: e,
      className: p(
        "flex items-center gap-1.5 px-3 py-1.5 text-xs border-r border-border flex-shrink-0 group cursor-pointer transition-colors",
        r ? "bg-background text-foreground" : "bg-muted/30 text-muted-foreground hover:bg-muted/50"
      ),
      children: [
        a && /* @__PURE__ */ t(a, { className: "h-3.5 w-3.5 text-muted-foreground flex-shrink-0" }),
        /* @__PURE__ */ t("span", { className: "max-w-32 truncate", children: e }),
        l && /* @__PURE__ */ t(
          "button",
          {
            onClick: (c) => {
              c.stopPropagation(), l();
            },
            className: "ml-1 p-0.5 rounded hover:bg-accent opacity-0 group-hover:opacity-100 transition-opacity",
            children: /* @__PURE__ */ t(le, { className: "h-3 w-3" })
          }
        )
      ]
    }
  );
}
const Le = 5e5;
function Me(e) {
  return {
    js: "javascript",
    jsx: "javascript",
    ts: "typescript",
    tsx: "typescript",
    py: "python",
    rb: "ruby",
    yml: "yaml",
    md: "markdown",
    sh: "shell",
    bash: "shell",
    zsh: "shell",
    txt: "plaintext",
    text: "plaintext",
    plain: "plaintext"
  }[e.toLowerCase()] || e.toLowerCase();
}
function Pe({ content: e, language: a, showLineNumbers: n, wrapLines: r = !1 }) {
  const [l, c] = w(!1);
  te(() => {
    const i = () => c(document.documentElement.classList.contains("dark"));
    i();
    const s = new MutationObserver(i);
    return s.observe(document.documentElement, { attributes: !0, attributeFilter: ["class"] }), () => s.disconnect();
  }, []);
  const d = B((i) => {
    const s = {
      noSemanticValidation: !0,
      noSyntaxValidation: !0,
      noSuggestionDiagnostics: !0
    }, m = { noLib: !0, allowNonTsExtensions: !0 };
    i.languages.typescript.typescriptDefaults.setDiagnosticsOptions(s), i.languages.typescript.typescriptDefaults.setCompilerOptions(m), i.languages.typescript.javascriptDefaults.setDiagnosticsOptions(s), i.languages.typescript.javascriptDefaults.setCompilerOptions(m);
  }, []);
  return /* @__PURE__ */ t(
    pe,
    {
      height: "100%",
      language: Me(a),
      value: e,
      theme: l ? "vs-dark" : "light",
      beforeMount: d,
      options: {
        readOnly: !0,
        domReadOnly: !0,
        // Appearance
        fontSize: 12,
        fontFamily: "JetBrains Mono, Fira Code, Consolas, monospace",
        lineNumbers: n ? "on" : "off",
        minimap: { enabled: !1 },
        padding: { top: 8, bottom: 8 },
        scrollBeyondLastLine: !1,
        wordWrap: r ? "on" : "off",
        renderLineHighlight: "none",
        overviewRulerBorder: !1,
        overviewRulerLanes: 0,
        hideCursorInOverviewRuler: !0,
        glyphMargin: !1,
        folding: !0,
        lineDecorationsWidth: 8,
        lineNumbersMinChars: 3,
        automaticLayout: !0,
        // Scrollbar
        scrollbar: {
          vertical: "auto",
          horizontal: r ? "hidden" : "auto",
          verticalScrollbarSize: 8,
          horizontalScrollbarSize: 8
        },
        // Disable IntelliSense features (read-only viewer, no context)
        hover: { enabled: !1 },
        quickSuggestions: !1,
        parameterHints: { enabled: !1 },
        // Find (Ctrl+F)
        find: {
          addExtraSpaceOnTop: !1,
          autoFindInSelection: "never",
          seedSearchStringFromSelection: "selection"
        }
      }
    }
  );
}
function Ie(e) {
  if (e.length > Le) return { content: e, isJson: !1 };
  try {
    return { content: JSON.stringify(JSON.parse(e), null, 2), isJson: !0 };
  } catch {
    return { content: e, isJson: !1 };
  }
}
function Je(e, a) {
  const n = e.split(`
`).length, r = 19, l = 16, c = a ? 28 : 0, d = 80, i = 500, s = n * r + l + c;
  return Math.max(d, Math.min(s, i));
}
function Z({
  filename: e,
  content: a,
  mimeType: n,
  showLineNumbers: r = !0,
  showFooter: l = !0,
  footer: c,
  wrapLines: d = !1,
  height: i,
  width: s,
  maxHeight: m,
  maxWidth: g,
  className: f
}) {
  const [h, b] = w(!1), v = Y(e), u = n ? Fe(n) : null, x = u?.language ?? v.language, N = u?.label ?? v.label, { content: y, isJson: C } = S(() => Ie(a), [a]), k = C ? "json" : x, j = S(
    () => Je(y, l),
    [y, l]
  ), H = () => {
    navigator.clipboard.writeText(a), b(!0), setTimeout(() => b(!1), 2e3);
  }, P = c?.left ?? e, ee = c?.right ?? (C ? "JSON" : N), ae = i || `${j}px`;
  return /* @__PURE__ */ o(
    "div",
    {
      className: `relative bg-background group ${f || ""}`,
      style: {
        height: ae,
        width: s,
        maxHeight: m,
        maxWidth: g,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
      },
      children: [
        /* @__PURE__ */ t(
          "button",
          {
            onClick: H,
            className: "absolute top-2 right-3 z-10 p-1.5 rounded bg-muted/90 hover:bg-muted text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity",
            children: h ? /* @__PURE__ */ t(F, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ t(L, { className: "h-3.5 w-3.5" })
          }
        ),
        /* @__PURE__ */ t("div", { style: { flex: 1, minHeight: 0, overflow: "hidden" }, children: /* @__PURE__ */ t(
          Pe,
          {
            content: y,
            language: k,
            showLineNumbers: r,
            wrapLines: d
          }
        ) }),
        l && /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-4 px-3 py-1 border-t border-border bg-muted/20 text-xs text-muted-foreground", style: { flexShrink: 0 }, children: [
          /* @__PURE__ */ t("span", { className: "truncate", title: P, children: P }),
          /* @__PURE__ */ t("span", { className: "uppercase", style: { flexShrink: 0 }, children: ee })
        ] })
      ]
    }
  );
}
function He({ className: e, ...a }) {
  return /* @__PURE__ */ t(
    "nav",
    {
      "aria-label": "breadcrumb",
      "data-slot": "breadcrumb",
      className: p(e),
      ...a
    }
  );
}
function De({ className: e, ...a }) {
  return /* @__PURE__ */ t(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: p(
        "text-muted-foreground gap-1.5 text-xs flex flex-wrap items-center break-words",
        e
      ),
      ...a
    }
  );
}
function O({ className: e, ...a }) {
  return /* @__PURE__ */ t(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: p("gap-1 inline-flex items-center", e),
      ...a
    }
  );
}
function z({
  asChild: e,
  className: a,
  ...n
}) {
  const r = e ? fe.Root : "a";
  return /* @__PURE__ */ t(
    r,
    {
      "data-slot": "breadcrumb-link",
      className: p("hover:text-foreground transition-colors", a),
      ...n
    }
  );
}
function E({ className: e, ...a }) {
  return /* @__PURE__ */ t(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: p("text-foreground font-normal", e),
      ...a
    }
  );
}
function _({
  children: e,
  className: a,
  ...n
}) {
  return /* @__PURE__ */ t(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: p("[&>svg]:size-3.5", a),
      ...n,
      children: e ?? /* @__PURE__ */ t(
        ie,
        {}
      )
    }
  );
}
X(
  "text-muted-foreground h-auto gap-2 py-1.5 text-xs font-medium group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-none [&>svg:not([class*='size-'])]:size-4 flex cursor-text items-center justify-center select-none",
  {
    variants: {
      align: {
        "inline-start": "pl-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] order-first",
        "inline-end": "pr-2 has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem] order-last",
        "block-start": "px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2 order-first w-full justify-start",
        "block-end": "px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2 order-last w-full justify-start"
      }
    },
    defaultVariants: {
      align: "inline-start"
    }
  }
);
X(
  "gap-2 text-xs shadow-none flex items-center",
  {
    variants: {
      size: {
        xs: "h-6 gap-1 rounded-none px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
        sm: "",
        "icon-xs": "size-6 rounded-none p-0 has-[>svg]:p-0",
        "icon-sm": "size-8 p-0 has-[>svg]:p-0"
      }
    },
    defaultVariants: {
      size: "xs"
    }
  }
);
function Oe({
  className: e,
  ...a
}) {
  return /* @__PURE__ */ t(
    M,
    {
      "data-slot": "command",
      className: p(
        "bg-popover text-popover-foreground rounded-none flex size-full flex-col overflow-hidden",
        e
      ),
      ...a
    }
  );
}
function Ae({
  className: e,
  ...a
}) {
  return /* @__PURE__ */ t(
    M.List,
    {
      "data-slot": "command-list",
      className: p(
        "no-scrollbar max-h-72 scroll-py-0 outline-none overflow-x-hidden overflow-y-auto",
        e
      ),
      ...a
    }
  );
}
function Be({
  className: e,
  ...a
}) {
  return /* @__PURE__ */ t(
    M.Empty,
    {
      "data-slot": "command-empty",
      className: p("py-6 text-center text-xs", e),
      ...a
    }
  );
}
function $e({
  className: e,
  ...a
}) {
  return /* @__PURE__ */ t(
    M.Group,
    {
      "data-slot": "command-group",
      className: p("text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs", e),
      ...a
    }
  );
}
function Re({
  className: e,
  children: a,
  ...n
}) {
  return /* @__PURE__ */ o(
    M.Item,
    {
      "data-slot": "command-item",
      className: p(
        "data-selected:bg-muted data-selected:text-foreground data-selected:*:[svg]:text-foreground relative flex cursor-default items-center gap-2 rounded-none px-2 py-2 text-xs outline-hidden select-none [&_svg:not([class*='size-'])]:size-4 [[data-slot=dialog-content]_&]:rounded-none! group/command-item data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        e
      ),
      ...n,
      children: [
        a,
        /* @__PURE__ */ t(oe, { className: "ml-auto opacity-0 group-has-[[data-slot=command-shortcut]]/command-item:hidden group-data-[checked=true]/command-item:opacity-100" })
      ]
    }
  );
}
function Ve(e, a) {
  let n = e;
  for (const r of a) {
    if (n == null || typeof n != "object") return;
    n = n[r];
  }
  return n;
}
function Ge(e) {
  return e == null ? [] : Array.isArray(e) ? e.map((a, n) => n) : typeof e == "object" ? Object.keys(e) : [];
}
function A(e) {
  return typeof e == "number" ? `[${e}]` : e;
}
function ze(e) {
  return e === null ? { type: "null", color: "text-muted-foreground/60" } : Array.isArray(e) ? { type: `array[${e.length}]`, color: "text-muted-foreground" } : typeof e == "object" ? { type: `object{${Object.keys(e).length}}`, color: "text-muted-foreground" } : typeof e == "number" ? { type: "number", color: "text-muted-foreground" } : typeof e == "boolean" ? { type: "bool", color: "text-muted-foreground" } : typeof e == "string" ? { type: "string", color: "text-muted-foreground" } : { type: typeof e, color: "text-muted-foreground" };
}
function Ee({ data: e, path: a, rootLabel: n, onPathChange: r, onCopyPath: l, pathCopied: c }) {
  const [d, i] = w(!1), s = S(() => Ve(e, a), [e, a]), m = S(() => Ge(s), [s]), g = s !== null && typeof s == "object" && m.length > 0, f = (u) => {
    r(a.slice(0, u));
  }, h = (u) => {
    r([...a, u]), i(!1);
  }, b = S(() => m.map((u) => {
    const x = s[u];
    return { key: u, ...ze(x) };
  }), [m, s]), v = n || "root";
  return /* @__PURE__ */ t("div", { className: "px-3 py-2 flex-shrink-0 flex items-center gap-2 overflow-hidden", children: /* @__PURE__ */ t(He, { className: "whitespace-nowrap overflow-hidden text-ellipsis", children: /* @__PURE__ */ o(De, { className: "flex-nowrap", children: [
    /* @__PURE__ */ t(O, { children: a.length === 0 ? /* @__PURE__ */ o(E, { className: "font-mono font-medium text-secondary-foreground bg-secondary px-1.5 py-0.5 rounded-sm flex items-center gap-1.5", children: [
      n && /* @__PURE__ */ t(
        "button",
        {
          onClick: l,
          className: "p-0.5 hover:bg-background/20 rounded-sm transition-colors text-secondary-foreground/80 hover:text-secondary-foreground",
          title: "Copy path",
          children: c ? /* @__PURE__ */ t(F, { className: "h-3 w-3" }) : /* @__PURE__ */ t(L, { className: "h-3 w-3" })
        }
      ),
      v
    ] }) : /* @__PURE__ */ t(
      z,
      {
        href: "#",
        onClick: (u) => {
          u.preventDefault(), f(0);
        },
        className: "font-mono hover:text-foreground transition-colors",
        children: v
      }
    ) }),
    a.map((u, x) => {
      const N = x === a.length - 1;
      return /* @__PURE__ */ o("span", { className: "contents", children: [
        /* @__PURE__ */ t(_, {}),
        /* @__PURE__ */ t(O, { children: N ? /* @__PURE__ */ o(E, { className: "font-mono font-medium text-secondary-foreground bg-secondary px-1.5 py-0.5 rounded-sm flex items-center gap-1.5", children: [
          /* @__PURE__ */ t(
            "button",
            {
              onClick: l,
              className: "p-0.5 hover:bg-background/20 rounded-sm transition-colors text-secondary-foreground/80 hover:text-secondary-foreground",
              title: "Copy path",
              children: c ? /* @__PURE__ */ t(F, { className: "h-3 w-3" }) : /* @__PURE__ */ t(L, { className: "h-3 w-3" })
            }
          ),
          A(u)
        ] }) : /* @__PURE__ */ t(
          z,
          {
            href: "#",
            onClick: (y) => {
              y.preventDefault(), f(x + 1);
            },
            className: "font-mono hover:text-foreground transition-colors",
            children: A(u)
          }
        ) })
      ] }, x);
    }),
    g && /* @__PURE__ */ o(I, { children: [
      /* @__PURE__ */ t(_, {}),
      /* @__PURE__ */ t(O, { children: /* @__PURE__ */ o(he, { open: d, onOpenChange: i, modal: !0, children: [
        /* @__PURE__ */ t(be, { className: "flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer group", children: /* @__PURE__ */ t("span", { className: "font-mono text-xs group-hover:underline decoration-border/50 underline-offset-2", children: "..." }) }),
        /* @__PURE__ */ t(xe, { align: "start", className: "w-56 p-1", children: /* @__PURE__ */ t(Oe, { children: /* @__PURE__ */ o(Ae, { className: "max-h-[240px] overflow-y-auto", children: [
          /* @__PURE__ */ t(Be, { className: "py-2 text-center text-xs text-muted-foreground", children: "No items." }),
          /* @__PURE__ */ t($e, { children: b.map(({ key: u, type: x, color: N }) => /* @__PURE__ */ o(
            Re,
            {
              value: String(u),
              onSelect: () => h(u),
              className: "flex items-center justify-between py-1.5 px-2 text-xs rounded-sm aria-selected:bg-accent aria-selected:text-accent-foreground cursor-pointer",
              children: [
                /* @__PURE__ */ t("span", { className: "font-mono truncate", children: A(u) }),
                /* @__PURE__ */ t("span", { className: `text-[10px] ${N} opacity-80 flex-shrink-0 ml-2`, children: x })
              ]
            },
            String(u)
          )) })
        ] }) }) })
      ] }) })
    ] })
  ] }) }) });
}
function _e(e, a) {
  let n = e;
  for (const r of a) {
    if (n == null || typeof n != "object") return;
    n = n[r];
  }
  return n;
}
function qe(e, a) {
  const n = a ? [a, ...e] : [...e];
  return n.length === 0 ? "[]" : `[${n.map((l) => typeof l == "number" ? String(l) : `"${l}"`).join(", ")}]`;
}
function Ke(e) {
  const a = e.split(`
`).length, n = 19, r = 40, l = 28, c = 16, d = 150, i = 500, s = a * n + r + l + c;
  return Math.max(d, Math.min(s, i));
}
function Sa({
  filename: e,
  data: a,
  rootLabel: n,
  showFooter: r = !0,
  footer: l,
  wrapLines: c = !1,
  height: d,
  width: i,
  maxHeight: s,
  maxWidth: m,
  className: g
}) {
  const [f, h] = w([]), [b, v] = w(!1), u = S(() => _e(a, f), [a, f]), x = S(() => {
    try {
      return JSON.stringify(u, null, 2);
    } catch {
      return String(u ?? "undefined");
    }
  }, [u]), N = S(() => Ke(x), [x]), y = d || `${N}px`, C = B((j) => {
    h(j);
  }, []), k = B(() => {
    navigator.clipboard.writeText(qe(f, n)), v(!0), setTimeout(() => v(!1), 2e3);
  }, [f, n]);
  return /* @__PURE__ */ o(
    "div",
    {
      className: `flex flex-col bg-background overflow-hidden ${g || ""}`,
      style: { height: y, width: i, maxHeight: s, maxWidth: m },
      children: [
        /* @__PURE__ */ t("div", { className: "border-b border-border flex-shrink-0", children: /* @__PURE__ */ t(
          Ee,
          {
            data: a,
            path: f,
            rootLabel: n,
            onPathChange: C,
            onCopyPath: k,
            pathCopied: b
          }
        ) }),
        /* @__PURE__ */ t("div", { className: "flex-1 min-h-0 overflow-hidden", children: /* @__PURE__ */ t(
          Z,
          {
            filename: e,
            content: x,
            mimeType: "application/json",
            showLineNumbers: !0,
            showFooter: r,
            footer: l,
            wrapLines: c,
            height: "100%"
          }
        ) })
      ]
    }
  );
}
function We({ className: e, ...a }) {
  return /* @__PURE__ */ t("div", { "data-slot": "table-container", className: "relative w-full overflow-x-auto", children: /* @__PURE__ */ t(
    "table",
    {
      "data-slot": "table",
      className: p("w-full caption-bottom text-xs", e),
      ...a
    }
  ) });
}
function Xe({ className: e, ...a }) {
  return /* @__PURE__ */ t(
    "thead",
    {
      "data-slot": "table-header",
      className: p("[&_tr]:border-b", e),
      ...a
    }
  );
}
function Ue({ className: e, ...a }) {
  return /* @__PURE__ */ t(
    "tbody",
    {
      "data-slot": "table-body",
      className: p("[&_tr:last-child]:border-0", e),
      ...a
    }
  );
}
function q({ className: e, ...a }) {
  return /* @__PURE__ */ t(
    "tr",
    {
      "data-slot": "table-row",
      className: p("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", e),
      ...a
    }
  );
}
function K({ className: e, ...a }) {
  return /* @__PURE__ */ t(
    "th",
    {
      "data-slot": "table-head",
      className: p("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0", e),
      ...a
    }
  );
}
function W({ className: e, ...a }) {
  return /* @__PURE__ */ t(
    "td",
    {
      "data-slot": "table-cell",
      className: p("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0", e),
      ...a
    }
  );
}
function Ye(e) {
  return e === null ? { display: "null", className: "", wrapInCode: !0 } : e === void 0 ? { display: "undefined", className: "", wrapInCode: !0 } : typeof e == "boolean" ? { display: String(e), className: "", wrapInCode: !0 } : typeof e == "number" ? { display: String(e), className: "", wrapInCode: !0 } : typeof e == "string" ? e === "" ? { display: "(empty)", className: "text-muted-foreground", wrapInCode: !1 } : { display: e, className: "", wrapInCode: !1 } : Array.isArray(e) || typeof e == "object" ? { display: JSON.stringify(e), className: "", wrapInCode: !1 } : { display: String(e), className: "", wrapInCode: !1 };
}
function wa({
  data: e,
  keyLabel: a = "Name",
  valueLabel: n = "Value",
  showCopy: r = !1,
  showCopyJson: l = !1,
  hideHeader: c = !1
}) {
  const d = Object.entries(e ?? {}), [i, s] = w(null), [m, g] = w(null), f = (u) => {
    s(i === u ? null : u);
  };
  return /* @__PURE__ */ o("div", { className: "space-y-2", children: [
    (r || l) && /* @__PURE__ */ o(Ne, { align: "end", gap: "sm", children: [
      r && /* @__PURE__ */ t(
        R,
        {
          label: m === "text" ? "Copied" : "Copy",
          icon: m === "text" ? F : L,
          onClick: () => {
            const u = d.map(([x, N]) => `${x}: ${typeof N == "object" ? JSON.stringify(N) : N}`).join(`
`);
            navigator.clipboard.writeText(u), g("text"), setTimeout(() => g(null), 2e3);
          },
          variant: "outline",
          size: "xs",
          tooltip: "Copy as text"
        }
      ),
      l && /* @__PURE__ */ t(
        R,
        {
          label: m === "json" ? "Copied" : "Copy JSON",
          icon: m === "json" ? F : ce,
          onClick: () => {
            navigator.clipboard.writeText(JSON.stringify(e, null, 2)), g("json"), setTimeout(() => g(null), 2e3);
          },
          variant: "outline",
          size: "xs",
          tooltip: "Copy as JSON"
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: "rounded border border-border overflow-hidden", children: /* @__PURE__ */ o(We, { className: "table-fixed w-full", children: [
      !c && /* @__PURE__ */ t(Xe, { children: /* @__PURE__ */ o(q, { className: "bg-muted/30", children: [
        /* @__PURE__ */ t(K, { className: "w-[180px] text-xs font-medium", children: a }),
        /* @__PURE__ */ t(K, { className: "text-xs font-medium", children: n })
      ] }) }),
      /* @__PURE__ */ t(Ue, { children: d.map(([u, x]) => {
        const N = i === u, { display: y, className: C, wrapInCode: k } = Ye(x);
        return /* @__PURE__ */ o(
          q,
          {
            onClick: () => f(u),
            className: p(
              "cursor-pointer transition-colors hover:bg-muted/50",
              N && "bg-muted/30"
            ),
            children: [
              /* @__PURE__ */ t(
                W,
                {
                  className: p(
                    "font-mono text-xs py-2 text-muted-foreground align-top",
                    N ? "whitespace-pre-wrap break-all" : "truncate"
                  ),
                  children: u
                }
              ),
              /* @__PURE__ */ t(
                W,
                {
                  className: p(
                    "font-mono text-xs py-2",
                    C,
                    N ? "whitespace-pre-wrap break-all" : "truncate"
                  ),
                  children: k ? /* @__PURE__ */ t("code", { className: "px-1.5 py-0.5 rounded bg-muted text-foreground border border-border", children: y }) : y
                }
              )
            ]
          },
          u
        );
      }) })
    ] }) })
  ] });
}
function Qe(e) {
  if (!e)
    return { protocol: "", host: "", path: "", isDataUrl: !1 };
  if (e.startsWith("data:")) {
    const a = e.indexOf(",");
    return {
      protocol: "data:",
      host: (a > 0 ? e.slice(5, Math.min(a, 50)) : "unknown") + (a > 50 ? "..." : ""),
      path: `[${((e.length - a) / 1024).toFixed(1)} KB payload]`,
      isDataUrl: !0
    };
  }
  try {
    const a = new URL(e);
    return {
      protocol: a.protocol,
      host: a.host,
      path: a.pathname + a.search + a.hash,
      isDataUrl: !1
    };
  } catch {
    return { protocol: "", host: "", path: e, isDataUrl: !1 };
  }
}
function Ze(e) {
  let a;
  if (typeof e == "number")
    a = e;
  else {
    const n = e.toString().match(/^\d+/);
    a = n ? parseInt(n[0], 10) : 0;
  }
  return a >= 200 && a < 300 ? "default" : a >= 400 ? "destructive" : "secondary";
}
function ea(e, a) {
  return a ? `${e} ${a}` : e.toString();
}
function aa(e) {
  if (e == null) return !1;
  if (typeof e == "number") return e > 0;
  if (typeof e == "string") {
    const a = e.match(/^\d+/);
    return a ? parseInt(a[0], 10) > 0 : e.length > 0;
  }
  return !1;
}
function ta(e) {
  return e < 1e3 ? `${Math.round(e)}ms` : e < 6e4 ? `${(e / 1e3).toFixed(1)}s` : `${(e / 6e4).toFixed(1)}min`;
}
function na(e) {
  if (e === 0) return "0 B";
  const a = ["B", "KB", "MB", "GB"], n = Math.min(Math.floor(Math.log(e) / Math.log(1024)), a.length - 1), r = e / Math.pow(1024, n);
  return `${r < 10 ? r.toFixed(1) : Math.round(r)} ${a[n]}`;
}
function ra({
  variant: e,
  icon: a,
  title: n,
  description: r,
  ctaText: l,
  ctaOnClick: c,
  className: d
}) {
  const i = {
    success: "text-primary",
    warning: "text-amber-600 dark:text-amber-500",
    destructive: "text-destructive",
    neutral: "text-muted-foreground"
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: p(
        "flex items-start gap-2 p-2 rounded-md border",
        {
          success: "bg-card border-border",
          warning: "bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/20",
          destructive: "bg-destructive/10 border-destructive/20",
          neutral: "bg-card border-border"
        }[e],
        d
      ),
      children: [
        /* @__PURE__ */ t(a, { className: p("h-4 w-4 shrink-0 mt-0.5", i[e]) }),
        /* @__PURE__ */ o("div", { className: "space-y-1 min-w-0 flex-1", children: [
          n && /* @__PURE__ */ t("h4", { className: "font-medium text-sm leading-5 text-foreground", children: n }),
          (r || l && c) && /* @__PURE__ */ o("p", { className: "text-sm text-muted-foreground", children: [
            r,
            l && c && /* @__PURE__ */ o(I, { children: [
              r && " ",
              /* @__PURE__ */ t(
                J,
                {
                  variant: "link",
                  size: "sm",
                  onClick: c,
                  className: "h-auto p-0 text-sm text-primary hover:text-primary/80",
                  children: l
                }
              )
            ] })
          ] })
        ] })
      ]
    }
  );
}
function Ca({
  method: e,
  url: a,
  status: n,
  statusText: r,
  mimeType: l,
  isRedirect: c,
  responseTimeMs: d,
  contentSizeBytes: i,
  failed: s,
  failureReason: m,
  showActionButton: g = !1,
  actionButtonText: f = "Action",
  actionButtonIcon: h,
  onActionButtonClick: b,
  actionButtonVariant: v = "outline",
  actionButtonTitle: u
}) {
  const [x, N] = w(!1), y = Qe(a), C = async () => {
    await navigator.clipboard.writeText(a), N(!0), setTimeout(() => N(!1), 2e3);
  }, k = (P) => {
    P.stopPropagation(), b?.();
  }, j = aa(n), H = j ? Ze(n) : "secondary";
  return /* @__PURE__ */ o("div", { className: "space-y-2", children: [
    s && m && /* @__PURE__ */ t(ra, { variant: "destructive", icon: se, description: m }),
    /* @__PURE__ */ o("div", { className: "flex items-center gap-2 flex-wrap", children: [
      /* @__PURE__ */ t(
        T,
        {
          variant: "secondary",
          className: "font-mono font-bold text-xs px-2 py-0.5",
          children: e
        }
      ),
      j && /* @__PURE__ */ t(
        T,
        {
          variant: H,
          className: "font-mono text-xs px-2 py-0.5",
          children: ea(n, r)
        }
      ),
      s && !j && /* @__PURE__ */ t(
        T,
        {
          variant: "destructive",
          className: "font-mono text-xs px-2 py-0.5",
          children: "Failed"
        }
      ),
      d !== void 0 && d > 0 && /* @__PURE__ */ o(T, { variant: "outline", className: "text-xs gap-1 text-muted-foreground", children: [
        /* @__PURE__ */ t(de, { className: "h-3 w-3" }),
        ta(d)
      ] }),
      i !== void 0 && i > 0 && /* @__PURE__ */ o(T, { variant: "outline", className: "text-xs gap-1 text-muted-foreground", children: [
        /* @__PURE__ */ t(ue, { className: "h-3 w-3" }),
        na(i)
      ] }),
      c && /* @__PURE__ */ o(T, { variant: "outline", className: "text-xs gap-1 text-amber-600 dark:text-amber-400 border-amber-300 dark:border-amber-700", children: [
        /* @__PURE__ */ t(me, { className: "h-3 w-3" }),
        "Redirect"
      ] }),
      l && /* @__PURE__ */ t(T, { variant: "outline", className: "text-xs hidden sm:inline-flex", children: l }),
      /* @__PURE__ */ t("div", { className: "flex-1" }),
      g && /* @__PURE__ */ o(
        J,
        {
          size: "sm",
          variant: v,
          onClick: k,
          className: "shrink-0 gap-1.5 h-7 text-xs",
          title: u,
          children: [
            h && /* @__PURE__ */ t(h, { className: "h-3.5 w-3.5" }),
            f && /* @__PURE__ */ t("span", { className: "hidden sm:inline", children: f })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ o("div", { className: "flex items-center gap-2 min-w-0 bg-muted/40 p-2 rounded-md border border-border/50", children: [
      /* @__PURE__ */ t(ge, { className: "h-4 w-4 shrink-0 text-primary" }),
      /* @__PURE__ */ t("p", { className: "font-mono text-xs text-foreground/80 truncate flex-1 leading-none", title: a, children: y.isDataUrl ? /* @__PURE__ */ o(I, { children: [
        /* @__PURE__ */ t("span", { className: "text-muted-foreground", children: y.protocol }),
        /* @__PURE__ */ t("span", { children: y.host }),
        /* @__PURE__ */ t("span", { className: "text-muted-foreground ml-1", children: y.path })
      ] }) : /* @__PURE__ */ o(I, { children: [
        /* @__PURE__ */ o("span", { className: "text-muted-foreground", children: [
          y.protocol,
          "//"
        ] }),
        /* @__PURE__ */ t("span", { className: "font-medium", children: y.host }),
        /* @__PURE__ */ t("span", { className: "text-foreground/60", children: y.path })
      ] }) }),
      /* @__PURE__ */ t(
        J,
        {
          size: "sm",
          variant: "ghost",
          onClick: C,
          className: "shrink-0 h-6 w-6 p-0 hover:bg-transparent",
          title: "Copy URL",
          children: x ? /* @__PURE__ */ t(F, { className: "h-3.5 w-3.5 text-green-500" }) : /* @__PURE__ */ t(L, { className: "h-3.5 w-3.5 text-muted-foreground hover:text-foreground" })
        }
      )
    ] })
  ] });
}
function la(e) {
  const a = e.split(`
`).length, n = 19, r = 36, l = 28, c = 16, d = 150, i = 500, s = a * n + r + l + c;
  return Math.max(d, Math.min(s, i));
}
function ka({
  content: e,
  filename: a = "index.html",
  initialMode: n = "code",
  className: r,
  showFooter: l = !0,
  footer: c,
  wrapLines: d = !1,
  height: i,
  width: s,
  maxHeight: m,
  maxWidth: g
}) {
  const [f, h] = w(n), b = S(() => la(e), [e]), v = i || `${b}px`;
  return /* @__PURE__ */ o(
    "div",
    {
      className: `flex flex-col bg-background border border-border rounded-md overflow-hidden ${r || ""}`,
      style: { height: v, width: s, maxHeight: m, maxWidth: g },
      children: [
        /* @__PURE__ */ t("div", { className: "flex items-center justify-between border-b border-border px-3 py-1.5 text-sm flex-shrink-0", children: /* @__PURE__ */ o("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ t(
            "button",
            {
              onClick: () => h("code"),
              className: f === "code" ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground",
              children: "Code"
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: () => h("preview"),
              className: f === "preview" ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground",
              children: "Preview"
            }
          )
        ] }) }),
        /* @__PURE__ */ t("div", { className: "flex-1 min-h-0 overflow-hidden", children: f === "code" ? /* @__PURE__ */ t(
          Z,
          {
            filename: a,
            content: e,
            mimeType: "text/html",
            showLineNumbers: !0,
            showFooter: l,
            footer: c,
            wrapLines: d,
            height: "100%"
          }
        ) : /* @__PURE__ */ t("div", { className: "w-full h-full bg-white", children: e ? /* @__PURE__ */ t(
          "iframe",
          {
            srcDoc: e,
            title: "HTML Preview",
            className: "w-full h-full border-none block",
            sandbox: ""
          }
        ) : /* @__PURE__ */ t("div", { className: "flex items-center justify-center h-full text-muted-foreground text-sm", children: "Empty Preview" }) }) })
      ]
    }
  );
}
function ja({ items: e, className: a }) {
  const n = {
    primary: "bg-primary/10 text-primary border-primary/20",
    destructive: "bg-destructive/10 text-destructive border-destructive/20"
  };
  return /* @__PURE__ */ t("div", { className: p("relative", a), children: e.map((r, l) => {
    const c = r.icon, d = r.iconVariant ?? "primary", i = l === e.length - 1;
    return /* @__PURE__ */ o("div", { className: "relative flex gap-4", children: [
      !i && /* @__PURE__ */ t(
        "div",
        {
          className: "absolute left-[15px] top-[36px] bottom-0 w-px bg-border",
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ t(
        "div",
        {
          className: p(
            "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border",
            n[d]
          ),
          children: /* @__PURE__ */ t(c, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ o("div", { className: p("flex-1 pb-8", i && "pb-0"), children: [
        /* @__PURE__ */ t("h4", { className: "font-medium text-sm leading-8 text-foreground", children: r.title }),
        r.description && /* @__PURE__ */ t("p", { className: "text-sm text-muted-foreground mt-1", children: r.description }),
        r.children && /* @__PURE__ */ t("div", { className: "mt-3", children: r.children }),
        r.ctaText && r.ctaOnClick && /* @__PURE__ */ t(
          J,
          {
            variant: "outline",
            size: "sm",
            onClick: r.ctaOnClick,
            className: "mt-3",
            children: r.ctaText
          }
        )
      ] })
    ] }, l);
  }) });
}
export {
  ja as BasicTimeline,
  va as ContentTab,
  Z as FileCodeView,
  ya as FileTree,
  ka as HtmlCodeView,
  Ca as HttpRequestMetadata,
  Sa as JsonCodeView,
  wa as KeyValuePairTable,
  ra as StatusDisplay
};
