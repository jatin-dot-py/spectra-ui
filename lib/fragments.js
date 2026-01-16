import { jsxs as l, jsx as a, Fragment as L } from "react/jsx-runtime";
import { useMemo as S, useState as y, useCallback as O } from "react";
import { ChevronDown as re, ChevronRight as le, X as ne, Check as j, Copy as M, ChevronRightIcon as ie, CheckIcon as ce, FileJson as se, AlertCircle as de, Clock as ue, Package as ge, ArrowRightLeft as pe, Globe as me } from "lucide-react";
import { c as g } from "./utils-B6yFEsav.js";
import { A as H, B as N } from "./badge-B1vpNSNG.js";
import { Prism as A } from "react-syntax-highlighter";
import { Slot as he } from "radix-ui";
import { P as be, c as fe, b as ke } from "./popover-BC-4GKqp.js";
import { Command as z } from "cmdk";
import { B as R } from "./button-DHQhRgTM.js";
import { cva as Q } from "class-variance-authority";
import "clsx";
import "tailwind-merge";
import { A as xe, a as V } from "./ActionButtonGroup-D1TNSW-7.js";
function ve(e) {
  const o = [];
  if (!Array.isArray(e)) return o;
  for (const t of e) {
    if (typeof t != "string") continue;
    const r = t.split("/").filter(Boolean);
    if (r.length === 0) continue;
    let n = o, s = "";
    for (let u = 0; u < r.length; u++) {
      const d = r[u];
      s = s ? `${s}/${d}` : d;
      const p = u === r.length - 1;
      let m = n.find((i) => i.name === d);
      m || (m = {
        name: d,
        path: s,
        isFolder: !p,
        children: []
      }, n.push(m)), p || (n = m.children);
    }
  }
  return Z(o);
}
function Z(e) {
  return e.map((o) => ({ ...o, children: Z(o.children) })).sort((o, t) => o.isFolder && !t.isFolder ? -1 : !o.isFolder && t.isFolder ? 1 : o.name.localeCompare(t.name));
}
const I = {
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
}, G = {
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
}, we = {
  iconName: "lucide-react:File",
  language: "text",
  label: "File"
};
function ee(e) {
  const o = e.split("/").pop()?.toLowerCase() || "";
  if (G[o])
    return G[o];
  const t = o.split(".");
  if (t.length > 2) {
    const n = t.slice(-2).join(".");
    if (I[n])
      return I[n];
  }
  const r = t.pop() || "";
  return I[r] || we;
}
function ye(e) {
  return ee(e).iconName;
}
const Ne = {
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
}, Se = "lucide-react:Folder", Ce = "lucide-react:FolderOpen";
function je(e, o = !1) {
  const t = e.toLowerCase(), r = Ne[t];
  return r || (o ? Ce : Se);
}
const $ = {
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
  const o = e.split(";")[0].trim().toLowerCase();
  return $[o] ? $[o] : o.startsWith("text/") ? { language: "text", label: "Text" } : o.includes("json") ? { language: "json", label: "JSON" } : o.includes("xml") ? { language: "xml", label: "XML" } : o.includes("javascript") ? { language: "javascript", label: "JavaScript" } : Te;
}
function oe({
  node: e,
  depth: o,
  selectedPath: t,
  onSelect: r,
  expandedFolders: n,
  toggleFolder: s,
  showFileIcons: u = !0,
  showTreeLines: d = !1
}) {
  const p = n.has(e.path), m = t === e.path, i = o * 14;
  if (e.isFolder) {
    const b = je(e.name, p);
    return /* @__PURE__ */ l("div", { className: "relative", children: [
      d && o > 0 && /* @__PURE__ */ a(
        "div",
        {
          className: "absolute top-0 bottom-0 border-l border-border",
          style: { left: `${(o - 1) * 14 + 14}px` }
        }
      ),
      /* @__PURE__ */ l(
        "button",
        {
          onClick: () => s(e.path),
          className: g(
            "w-full flex items-center gap-1.5 px-2 py-1 text-xs hover:bg-accent/50 rounded-sm transition-colors relative whitespace-nowrap",
            "text-foreground"
          ),
          style: { paddingLeft: `${i + 6}px` },
          children: [
            p ? /* @__PURE__ */ a(re, { className: "h-3.5 w-3.5 text-muted-foreground flex-shrink-0" }) : /* @__PURE__ */ a(le, { className: "h-3.5 w-3.5 text-muted-foreground flex-shrink-0" }),
            /* @__PURE__ */ a(
              H,
              {
                name: b,
                size: 15,
                className: "text-muted-foreground flex-shrink-0",
                showSpinner: !1
              }
            ),
            /* @__PURE__ */ a("span", { children: e.name })
          ]
        }
      ),
      p && /* @__PURE__ */ l("div", { className: "relative", children: [
        d && /* @__PURE__ */ a(
          "div",
          {
            className: "absolute top-0 bottom-0 border-l border-border",
            style: { left: `${o * 14 + 14}px` }
          }
        ),
        e.children.map((f) => /* @__PURE__ */ a(
          oe,
          {
            node: f,
            depth: o + 1,
            selectedPath: t,
            onSelect: r,
            expandedFolders: n,
            toggleFolder: s,
            showFileIcons: u,
            showTreeLines: d
          },
          f.path
        ))
      ] })
    ] });
  }
  const h = ye(e.name);
  return /* @__PURE__ */ l("div", { className: "relative", children: [
    d && o > 0 && /* @__PURE__ */ a(
      "div",
      {
        className: "absolute top-0 bottom-0 border-l border-border",
        style: { left: `${(o - 1) * 14 + 14}px` }
      }
    ),
    /* @__PURE__ */ l(
      "button",
      {
        onClick: () => r(e.path),
        className: g(
          "w-full flex items-center gap-1.5 px-2 py-1 text-xs rounded-sm transition-colors relative whitespace-nowrap",
          m ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-accent/50"
        ),
        style: { paddingLeft: `${i + 24}px` },
        children: [
          u && /* @__PURE__ */ a(
            H,
            {
              name: h,
              size: 15,
              className: "text-muted-foreground flex-shrink-0",
              showSpinner: !1
            }
          ),
          /* @__PURE__ */ a("span", { children: e.name })
        ]
      }
    )
  ] });
}
function bo({
  filePaths: e,
  onFileItemClick: o,
  selectedPath: t,
  title: r = "Explorer",
  showFileIcons: n = !0,
  showTreeLines: s = !1
}) {
  const u = S(() => ve(e), [e]), [d, p] = y(() => {
    const i = /* @__PURE__ */ new Set();
    if (t) {
      const h = t.split("/");
      let b = "";
      for (let f = 0; f < h.length - 1; f++)
        b = b ? `${b}/${h[f]}` : h[f], i.add(b);
    }
    return i;
  }), m = (i) => {
    p((h) => {
      const b = new Set(h);
      return b.has(i) ? b.delete(i) : b.add(i), b;
    });
  };
  return /* @__PURE__ */ l("div", { className: "flex flex-col h-full border border-border rounded-lg overflow-hidden bg-background", children: [
    /* @__PURE__ */ a("div", { className: "px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b border-border bg-muted/20 flex-shrink-0", children: r }),
    /* @__PURE__ */ a("div", { className: "flex-1 min-h-0 overflow-hidden", children: /* @__PURE__ */ a("div", { className: "h-full w-full overflow-auto", children: /* @__PURE__ */ a("div", { className: "py-1 min-w-max", children: u.map((i) => /* @__PURE__ */ a(
      oe,
      {
        node: i,
        depth: 0,
        selectedPath: t ?? null,
        onSelect: o,
        expandedFolders: d,
        toggleFolder: m,
        showFileIcons: n,
        showTreeLines: s
      },
      i.path
    )) }) }) })
  ] });
}
function fo({
  name: e,
  icon: o,
  onClick: t,
  isActive: r = !1,
  onClose: n
}) {
  return /* @__PURE__ */ l(
    "div",
    {
      onClick: t,
      title: e,
      className: g(
        "flex items-center gap-1.5 px-3 py-1.5 text-xs border-r border-border flex-shrink-0 group cursor-pointer transition-colors",
        r ? "bg-background text-foreground" : "bg-muted/30 text-muted-foreground hover:bg-muted/50"
      ),
      children: [
        o && /* @__PURE__ */ a(o, { className: "h-3.5 w-3.5 text-muted-foreground flex-shrink-0" }),
        /* @__PURE__ */ a("span", { className: "max-w-32 truncate", children: e }),
        n && /* @__PURE__ */ a(
          "button",
          {
            onClick: (s) => {
              s.stopPropagation(), n();
            },
            className: "ml-1 p-0.5 rounded hover:bg-accent opacity-0 group-hover:opacity-100 transition-opacity",
            children: /* @__PURE__ */ a(ne, { className: "h-3 w-3" })
          }
        )
      ]
    }
  );
}
const E = {
  'code[class*="language-"]': {
    background: "hsl(220, 13%, 18%)",
    color: "hsl(220, 14%, 71%)",
    textShadow: "0 1px rgba(0, 0, 0, 0.3)",
    fontFamily: '"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "2",
    OTabSize: "2",
    tabSize: "2",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none"
  },
  'pre[class*="language-"]': {
    background: "hsl(220, 13%, 18%)",
    color: "hsl(220, 14%, 71%)",
    textShadow: "0 1px rgba(0, 0, 0, 0.3)",
    fontFamily: '"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "2",
    OTabSize: "2",
    tabSize: "2",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "1em",
    margin: "0.5em 0",
    overflow: "auto",
    borderRadius: "0.3em"
  },
  'code[class*="language-"]::-moz-selection': {
    background: "hsl(220, 13%, 28%)",
    color: "inherit",
    textShadow: "none"
  },
  'code[class*="language-"] *::-moz-selection': {
    background: "hsl(220, 13%, 28%)",
    color: "inherit",
    textShadow: "none"
  },
  'pre[class*="language-"] *::-moz-selection': {
    background: "hsl(220, 13%, 28%)",
    color: "inherit",
    textShadow: "none"
  },
  'code[class*="language-"]::selection': {
    background: "hsl(220, 13%, 28%)",
    color: "inherit",
    textShadow: "none"
  },
  'code[class*="language-"] *::selection': {
    background: "hsl(220, 13%, 28%)",
    color: "inherit",
    textShadow: "none"
  },
  'pre[class*="language-"] *::selection': {
    background: "hsl(220, 13%, 28%)",
    color: "inherit",
    textShadow: "none"
  },
  ':not(pre) > code[class*="language-"]': {
    padding: "0.2em 0.3em",
    borderRadius: "0.3em",
    whiteSpace: "normal"
  },
  comment: {
    color: "hsl(220, 10%, 40%)",
    fontStyle: "italic"
  },
  prolog: {
    color: "hsl(220, 10%, 40%)"
  },
  cdata: {
    color: "hsl(220, 10%, 40%)"
  },
  doctype: {
    color: "hsl(220, 14%, 71%)"
  },
  punctuation: {
    color: "hsl(220, 14%, 71%)"
  },
  entity: {
    color: "hsl(220, 14%, 71%)",
    cursor: "help"
  },
  "attr-name": {
    color: "hsl(29, 54%, 61%)"
  },
  "class-name": {
    color: "hsl(29, 54%, 61%)"
  },
  boolean: {
    color: "hsl(29, 54%, 61%)"
  },
  constant: {
    color: "hsl(29, 54%, 61%)"
  },
  number: {
    color: "hsl(29, 54%, 61%)"
  },
  atrule: {
    color: "hsl(29, 54%, 61%)"
  },
  keyword: {
    color: "hsl(286, 60%, 67%)"
  },
  property: {
    color: "hsl(355, 65%, 65%)"
  },
  tag: {
    color: "hsl(355, 65%, 65%)"
  },
  symbol: {
    color: "hsl(355, 65%, 65%)"
  },
  deleted: {
    color: "hsl(355, 65%, 65%)"
  },
  important: {
    color: "hsl(355, 65%, 65%)"
  },
  selector: {
    color: "hsl(95, 38%, 62%)"
  },
  string: {
    color: "hsl(95, 38%, 62%)"
  },
  char: {
    color: "hsl(95, 38%, 62%)"
  },
  builtin: {
    color: "hsl(95, 38%, 62%)"
  },
  inserted: {
    color: "hsl(95, 38%, 62%)"
  },
  regex: {
    color: "hsl(95, 38%, 62%)"
  },
  "attr-value": {
    color: "hsl(95, 38%, 62%)"
  },
  "attr-value > .token.punctuation": {
    color: "hsl(95, 38%, 62%)"
  },
  variable: {
    color: "hsl(207, 82%, 66%)"
  },
  operator: {
    color: "hsl(207, 82%, 66%)"
  },
  function: {
    color: "hsl(207, 82%, 66%)"
  },
  url: {
    color: "hsl(187, 47%, 55%)"
  },
  "attr-value > .token.punctuation.attr-equals": {
    color: "hsl(220, 14%, 71%)"
  },
  "special-attr > .token.attr-value > .token.value.css": {
    color: "hsl(220, 14%, 71%)"
  },
  ".language-css .token.selector": {
    color: "hsl(355, 65%, 65%)"
  },
  ".language-css .token.property": {
    color: "hsl(220, 14%, 71%)"
  },
  ".language-css .token.function": {
    color: "hsl(187, 47%, 55%)"
  },
  ".language-css .token.url > .token.function": {
    color: "hsl(187, 47%, 55%)"
  },
  ".language-css .token.url > .token.string.url": {
    color: "hsl(95, 38%, 62%)"
  },
  ".language-css .token.important": {
    color: "hsl(286, 60%, 67%)"
  },
  ".language-css .token.atrule .token.rule": {
    color: "hsl(286, 60%, 67%)"
  },
  ".language-javascript .token.operator": {
    color: "hsl(286, 60%, 67%)"
  },
  ".language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation": {
    color: "hsl(5, 48%, 51%)"
  },
  ".language-json .token.operator": {
    color: "hsl(220, 14%, 71%)"
  },
  ".language-json .token.null.keyword": {
    color: "hsl(29, 54%, 61%)"
  },
  ".language-markdown .token.url": {
    color: "hsl(220, 14%, 71%)"
  },
  ".language-markdown .token.url > .token.operator": {
    color: "hsl(220, 14%, 71%)"
  },
  ".language-markdown .token.url-reference.url > .token.string": {
    color: "hsl(220, 14%, 71%)"
  },
  ".language-markdown .token.url > .token.content": {
    color: "hsl(207, 82%, 66%)"
  },
  ".language-markdown .token.url > .token.url": {
    color: "hsl(187, 47%, 55%)"
  },
  ".language-markdown .token.url-reference.url": {
    color: "hsl(187, 47%, 55%)"
  },
  ".language-markdown .token.blockquote.punctuation": {
    color: "hsl(220, 10%, 40%)",
    fontStyle: "italic"
  },
  ".language-markdown .token.hr.punctuation": {
    color: "hsl(220, 10%, 40%)",
    fontStyle: "italic"
  },
  ".language-markdown .token.code-snippet": {
    color: "hsl(95, 38%, 62%)"
  },
  ".language-markdown .token.bold .token.content": {
    color: "hsl(29, 54%, 61%)"
  },
  ".language-markdown .token.italic .token.content": {
    color: "hsl(286, 60%, 67%)"
  },
  ".language-markdown .token.strike .token.content": {
    color: "hsl(355, 65%, 65%)"
  },
  ".language-markdown .token.strike .token.punctuation": {
    color: "hsl(355, 65%, 65%)"
  },
  ".language-markdown .token.list.punctuation": {
    color: "hsl(355, 65%, 65%)"
  },
  ".language-markdown .token.title.important > .token.punctuation": {
    color: "hsl(355, 65%, 65%)"
  },
  bold: {
    fontWeight: "bold"
  },
  italic: {
    fontStyle: "italic"
  },
  namespace: {
    Opacity: "0.8"
  },
  "token.tab:not(:empty):before": {
    color: "hsla(220, 14%, 71%, 0.15)",
    textShadow: "none"
  },
  "token.cr:before": {
    color: "hsla(220, 14%, 71%, 0.15)",
    textShadow: "none"
  },
  "token.lf:before": {
    color: "hsla(220, 14%, 71%, 0.15)",
    textShadow: "none"
  },
  "token.space:before": {
    color: "hsla(220, 14%, 71%, 0.15)",
    textShadow: "none"
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item": {
    marginRight: "0.4em"
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button": {
    background: "hsl(220, 13%, 26%)",
    color: "hsl(220, 9%, 55%)",
    padding: "0.1em 0.4em",
    borderRadius: "0.3em"
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a": {
    background: "hsl(220, 13%, 26%)",
    color: "hsl(220, 9%, 55%)",
    padding: "0.1em 0.4em",
    borderRadius: "0.3em"
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span": {
    background: "hsl(220, 13%, 26%)",
    color: "hsl(220, 9%, 55%)",
    padding: "0.1em 0.4em",
    borderRadius: "0.3em"
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover": {
    background: "hsl(220, 13%, 28%)",
    color: "hsl(220, 14%, 71%)"
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus": {
    background: "hsl(220, 13%, 28%)",
    color: "hsl(220, 14%, 71%)"
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover": {
    background: "hsl(220, 13%, 28%)",
    color: "hsl(220, 14%, 71%)"
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus": {
    background: "hsl(220, 13%, 28%)",
    color: "hsl(220, 14%, 71%)"
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover": {
    background: "hsl(220, 13%, 28%)",
    color: "hsl(220, 14%, 71%)"
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus": {
    background: "hsl(220, 13%, 28%)",
    color: "hsl(220, 14%, 71%)"
  },
  ".line-highlight.line-highlight": {
    background: "hsla(220, 100%, 80%, 0.04)"
  },
  ".line-highlight.line-highlight:before": {
    background: "hsl(220, 13%, 26%)",
    color: "hsl(220, 14%, 71%)",
    padding: "0.1em 0.6em",
    borderRadius: "0.3em",
    boxShadow: "0 2px 0 0 rgba(0, 0, 0, 0.2)"
  },
  ".line-highlight.line-highlight[data-end]:after": {
    background: "hsl(220, 13%, 26%)",
    color: "hsl(220, 14%, 71%)",
    padding: "0.1em 0.6em",
    borderRadius: "0.3em",
    boxShadow: "0 2px 0 0 rgba(0, 0, 0, 0.2)"
  },
  "pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before": {
    backgroundColor: "hsla(220, 100%, 80%, 0.04)"
  },
  ".line-numbers.line-numbers .line-numbers-rows": {
    borderRightColor: "hsla(220, 14%, 71%, 0.15)"
  },
  ".command-line .command-line-prompt": {
    borderRightColor: "hsla(220, 14%, 71%, 0.15)"
  },
  ".line-numbers .line-numbers-rows > span:before": {
    color: "hsl(220, 14%, 45%)"
  },
  ".command-line .command-line-prompt > span:before": {
    color: "hsl(220, 14%, 45%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-1": {
    color: "hsl(355, 65%, 65%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-5": {
    color: "hsl(355, 65%, 65%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-9": {
    color: "hsl(355, 65%, 65%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-2": {
    color: "hsl(95, 38%, 62%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-6": {
    color: "hsl(95, 38%, 62%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-10": {
    color: "hsl(95, 38%, 62%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-3": {
    color: "hsl(207, 82%, 66%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-7": {
    color: "hsl(207, 82%, 66%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-11": {
    color: "hsl(207, 82%, 66%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-4": {
    color: "hsl(286, 60%, 67%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-8": {
    color: "hsl(286, 60%, 67%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-12": {
    color: "hsl(286, 60%, 67%)"
  },
  "pre.diff-highlight > code .token.token.deleted:not(.prefix)": {
    backgroundColor: "hsla(353, 100%, 66%, 0.15)"
  },
  "pre > code.diff-highlight .token.token.deleted:not(.prefix)": {
    backgroundColor: "hsla(353, 100%, 66%, 0.15)"
  },
  "pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection": {
    backgroundColor: "hsla(353, 95%, 66%, 0.25)"
  },
  "pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection": {
    backgroundColor: "hsla(353, 95%, 66%, 0.25)"
  },
  "pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection": {
    backgroundColor: "hsla(353, 95%, 66%, 0.25)"
  },
  "pre > code.diff-highlight .token.token.deleted:not(.prefix) *::-moz-selection": {
    backgroundColor: "hsla(353, 95%, 66%, 0.25)"
  },
  "pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection": {
    backgroundColor: "hsla(353, 95%, 66%, 0.25)"
  },
  "pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection": {
    backgroundColor: "hsla(353, 95%, 66%, 0.25)"
  },
  "pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection": {
    backgroundColor: "hsla(353, 95%, 66%, 0.25)"
  },
  "pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection": {
    backgroundColor: "hsla(353, 95%, 66%, 0.25)"
  },
  "pre.diff-highlight > code .token.token.inserted:not(.prefix)": {
    backgroundColor: "hsla(137, 100%, 55%, 0.15)"
  },
  "pre > code.diff-highlight .token.token.inserted:not(.prefix)": {
    backgroundColor: "hsla(137, 100%, 55%, 0.15)"
  },
  "pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection": {
    backgroundColor: "hsla(135, 73%, 55%, 0.25)"
  },
  "pre.diff-highlight > code .token.token.inserted:not(.prefix) *::-moz-selection": {
    backgroundColor: "hsla(135, 73%, 55%, 0.25)"
  },
  "pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection": {
    backgroundColor: "hsla(135, 73%, 55%, 0.25)"
  },
  "pre > code.diff-highlight .token.token.inserted:not(.prefix) *::-moz-selection": {
    backgroundColor: "hsla(135, 73%, 55%, 0.25)"
  },
  "pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection": {
    backgroundColor: "hsla(135, 73%, 55%, 0.25)"
  },
  "pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection": {
    backgroundColor: "hsla(135, 73%, 55%, 0.25)"
  },
  "pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection": {
    backgroundColor: "hsla(135, 73%, 55%, 0.25)"
  },
  "pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection": {
    backgroundColor: "hsla(135, 73%, 55%, 0.25)"
  },
  ".prism-previewer.prism-previewer:before": {
    borderColor: "hsl(224, 13%, 17%)"
  },
  ".prism-previewer-gradient.prism-previewer-gradient div": {
    borderColor: "hsl(224, 13%, 17%)",
    borderRadius: "0.3em"
  },
  ".prism-previewer-color.prism-previewer-color:before": {
    borderRadius: "0.3em"
  },
  ".prism-previewer-easing.prism-previewer-easing:before": {
    borderRadius: "0.3em"
  },
  ".prism-previewer.prism-previewer:after": {
    borderTopColor: "hsl(224, 13%, 17%)"
  },
  ".prism-previewer-flipped.prism-previewer-flipped.after": {
    borderBottomColor: "hsl(224, 13%, 17%)"
  },
  ".prism-previewer-angle.prism-previewer-angle:before": {
    background: "hsl(219, 13%, 22%)"
  },
  ".prism-previewer-time.prism-previewer-time:before": {
    background: "hsl(219, 13%, 22%)"
  },
  ".prism-previewer-easing.prism-previewer-easing": {
    background: "hsl(219, 13%, 22%)"
  },
  ".prism-previewer-angle.prism-previewer-angle circle": {
    stroke: "hsl(220, 14%, 71%)",
    strokeOpacity: "1"
  },
  ".prism-previewer-time.prism-previewer-time circle": {
    stroke: "hsl(220, 14%, 71%)",
    strokeOpacity: "1"
  },
  ".prism-previewer-easing.prism-previewer-easing circle": {
    stroke: "hsl(220, 14%, 71%)",
    fill: "transparent"
  },
  ".prism-previewer-easing.prism-previewer-easing path": {
    stroke: "hsl(220, 14%, 71%)"
  },
  ".prism-previewer-easing.prism-previewer-easing line": {
    stroke: "hsl(220, 14%, 71%)"
  }
}, q = {
  'code[class*="language-"]': {
    background: "hsl(230, 1%, 98%)",
    color: "hsl(230, 8%, 24%)",
    fontFamily: '"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "2",
    OTabSize: "2",
    tabSize: "2",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none"
  },
  'pre[class*="language-"]': {
    background: "hsl(230, 1%, 98%)",
    color: "hsl(230, 8%, 24%)",
    fontFamily: '"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "2",
    OTabSize: "2",
    tabSize: "2",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "1em",
    margin: "0.5em 0",
    overflow: "auto",
    borderRadius: "0.3em"
  },
  'code[class*="language-"]::-moz-selection': {
    background: "hsl(230, 1%, 90%)",
    color: "inherit"
  },
  'code[class*="language-"] *::-moz-selection': {
    background: "hsl(230, 1%, 90%)",
    color: "inherit"
  },
  'pre[class*="language-"] *::-moz-selection': {
    background: "hsl(230, 1%, 90%)",
    color: "inherit"
  },
  'code[class*="language-"]::selection': {
    background: "hsl(230, 1%, 90%)",
    color: "inherit"
  },
  'code[class*="language-"] *::selection': {
    background: "hsl(230, 1%, 90%)",
    color: "inherit"
  },
  'pre[class*="language-"] *::selection': {
    background: "hsl(230, 1%, 90%)",
    color: "inherit"
  },
  ':not(pre) > code[class*="language-"]': {
    padding: "0.2em 0.3em",
    borderRadius: "0.3em",
    whiteSpace: "normal"
  },
  comment: {
    color: "hsl(230, 4%, 64%)",
    fontStyle: "italic"
  },
  prolog: {
    color: "hsl(230, 4%, 64%)"
  },
  cdata: {
    color: "hsl(230, 4%, 64%)"
  },
  doctype: {
    color: "hsl(230, 8%, 24%)"
  },
  punctuation: {
    color: "hsl(230, 8%, 24%)"
  },
  entity: {
    color: "hsl(230, 8%, 24%)",
    cursor: "help"
  },
  "attr-name": {
    color: "hsl(35, 99%, 36%)"
  },
  "class-name": {
    color: "hsl(35, 99%, 36%)"
  },
  boolean: {
    color: "hsl(35, 99%, 36%)"
  },
  constant: {
    color: "hsl(35, 99%, 36%)"
  },
  number: {
    color: "hsl(35, 99%, 36%)"
  },
  atrule: {
    color: "hsl(35, 99%, 36%)"
  },
  keyword: {
    color: "hsl(301, 63%, 40%)"
  },
  property: {
    color: "hsl(5, 74%, 59%)"
  },
  tag: {
    color: "hsl(5, 74%, 59%)"
  },
  symbol: {
    color: "hsl(5, 74%, 59%)"
  },
  deleted: {
    color: "hsl(5, 74%, 59%)"
  },
  important: {
    color: "hsl(5, 74%, 59%)"
  },
  selector: {
    color: "hsl(119, 34%, 47%)"
  },
  string: {
    color: "hsl(119, 34%, 47%)"
  },
  char: {
    color: "hsl(119, 34%, 47%)"
  },
  builtin: {
    color: "hsl(119, 34%, 47%)"
  },
  inserted: {
    color: "hsl(119, 34%, 47%)"
  },
  regex: {
    color: "hsl(119, 34%, 47%)"
  },
  "attr-value": {
    color: "hsl(119, 34%, 47%)"
  },
  "attr-value > .token.punctuation": {
    color: "hsl(119, 34%, 47%)"
  },
  variable: {
    color: "hsl(221, 87%, 60%)"
  },
  operator: {
    color: "hsl(221, 87%, 60%)"
  },
  function: {
    color: "hsl(221, 87%, 60%)"
  },
  url: {
    color: "hsl(198, 99%, 37%)"
  },
  "attr-value > .token.punctuation.attr-equals": {
    color: "hsl(230, 8%, 24%)"
  },
  "special-attr > .token.attr-value > .token.value.css": {
    color: "hsl(230, 8%, 24%)"
  },
  ".language-css .token.selector": {
    color: "hsl(5, 74%, 59%)"
  },
  ".language-css .token.property": {
    color: "hsl(230, 8%, 24%)"
  },
  ".language-css .token.function": {
    color: "hsl(198, 99%, 37%)"
  },
  ".language-css .token.url > .token.function": {
    color: "hsl(198, 99%, 37%)"
  },
  ".language-css .token.url > .token.string.url": {
    color: "hsl(119, 34%, 47%)"
  },
  ".language-css .token.important": {
    color: "hsl(301, 63%, 40%)"
  },
  ".language-css .token.atrule .token.rule": {
    color: "hsl(301, 63%, 40%)"
  },
  ".language-javascript .token.operator": {
    color: "hsl(301, 63%, 40%)"
  },
  ".language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation": {
    color: "hsl(344, 84%, 43%)"
  },
  ".language-json .token.operator": {
    color: "hsl(230, 8%, 24%)"
  },
  ".language-json .token.null.keyword": {
    color: "hsl(35, 99%, 36%)"
  },
  ".language-markdown .token.url": {
    color: "hsl(230, 8%, 24%)"
  },
  ".language-markdown .token.url > .token.operator": {
    color: "hsl(230, 8%, 24%)"
  },
  ".language-markdown .token.url-reference.url > .token.string": {
    color: "hsl(230, 8%, 24%)"
  },
  ".language-markdown .token.url > .token.content": {
    color: "hsl(221, 87%, 60%)"
  },
  ".language-markdown .token.url > .token.url": {
    color: "hsl(198, 99%, 37%)"
  },
  ".language-markdown .token.url-reference.url": {
    color: "hsl(198, 99%, 37%)"
  },
  ".language-markdown .token.blockquote.punctuation": {
    color: "hsl(230, 4%, 64%)",
    fontStyle: "italic"
  },
  ".language-markdown .token.hr.punctuation": {
    color: "hsl(230, 4%, 64%)",
    fontStyle: "italic"
  },
  ".language-markdown .token.code-snippet": {
    color: "hsl(119, 34%, 47%)"
  },
  ".language-markdown .token.bold .token.content": {
    color: "hsl(35, 99%, 36%)"
  },
  ".language-markdown .token.italic .token.content": {
    color: "hsl(301, 63%, 40%)"
  },
  ".language-markdown .token.strike .token.content": {
    color: "hsl(5, 74%, 59%)"
  },
  ".language-markdown .token.strike .token.punctuation": {
    color: "hsl(5, 74%, 59%)"
  },
  ".language-markdown .token.list.punctuation": {
    color: "hsl(5, 74%, 59%)"
  },
  ".language-markdown .token.title.important > .token.punctuation": {
    color: "hsl(5, 74%, 59%)"
  },
  bold: {
    fontWeight: "bold"
  },
  italic: {
    fontStyle: "italic"
  },
  namespace: {
    Opacity: "0.8"
  },
  "token.tab:not(:empty):before": {
    color: "hsla(230, 8%, 24%, 0.2)"
  },
  "token.cr:before": {
    color: "hsla(230, 8%, 24%, 0.2)"
  },
  "token.lf:before": {
    color: "hsla(230, 8%, 24%, 0.2)"
  },
  "token.space:before": {
    color: "hsla(230, 8%, 24%, 0.2)"
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item": {
    marginRight: "0.4em"
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button": {
    background: "hsl(230, 1%, 90%)",
    color: "hsl(230, 6%, 44%)",
    padding: "0.1em 0.4em",
    borderRadius: "0.3em"
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a": {
    background: "hsl(230, 1%, 90%)",
    color: "hsl(230, 6%, 44%)",
    padding: "0.1em 0.4em",
    borderRadius: "0.3em"
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span": {
    background: "hsl(230, 1%, 90%)",
    color: "hsl(230, 6%, 44%)",
    padding: "0.1em 0.4em",
    borderRadius: "0.3em"
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover": {
    background: "hsl(230, 1%, 78%)",
    color: "hsl(230, 8%, 24%)"
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus": {
    background: "hsl(230, 1%, 78%)",
    color: "hsl(230, 8%, 24%)"
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover": {
    background: "hsl(230, 1%, 78%)",
    color: "hsl(230, 8%, 24%)"
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus": {
    background: "hsl(230, 1%, 78%)",
    color: "hsl(230, 8%, 24%)"
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover": {
    background: "hsl(230, 1%, 78%)",
    color: "hsl(230, 8%, 24%)"
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus": {
    background: "hsl(230, 1%, 78%)",
    color: "hsl(230, 8%, 24%)"
  },
  ".line-highlight.line-highlight": {
    background: "hsla(230, 8%, 24%, 0.05)"
  },
  ".line-highlight.line-highlight:before": {
    background: "hsl(230, 1%, 90%)",
    color: "hsl(230, 8%, 24%)",
    padding: "0.1em 0.6em",
    borderRadius: "0.3em",
    boxShadow: "0 2px 0 0 rgba(0, 0, 0, 0.2)"
  },
  ".line-highlight.line-highlight[data-end]:after": {
    background: "hsl(230, 1%, 90%)",
    color: "hsl(230, 8%, 24%)",
    padding: "0.1em 0.6em",
    borderRadius: "0.3em",
    boxShadow: "0 2px 0 0 rgba(0, 0, 0, 0.2)"
  },
  "pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before": {
    backgroundColor: "hsla(230, 8%, 24%, 0.05)"
  },
  ".line-numbers.line-numbers .line-numbers-rows": {
    borderRightColor: "hsla(230, 8%, 24%, 0.2)"
  },
  ".command-line .command-line-prompt": {
    borderRightColor: "hsla(230, 8%, 24%, 0.2)"
  },
  ".line-numbers .line-numbers-rows > span:before": {
    color: "hsl(230, 1%, 62%)"
  },
  ".command-line .command-line-prompt > span:before": {
    color: "hsl(230, 1%, 62%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-1": {
    color: "hsl(5, 74%, 59%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-5": {
    color: "hsl(5, 74%, 59%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-9": {
    color: "hsl(5, 74%, 59%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-2": {
    color: "hsl(119, 34%, 47%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-6": {
    color: "hsl(119, 34%, 47%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-10": {
    color: "hsl(119, 34%, 47%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-3": {
    color: "hsl(221, 87%, 60%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-7": {
    color: "hsl(221, 87%, 60%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-11": {
    color: "hsl(221, 87%, 60%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-4": {
    color: "hsl(301, 63%, 40%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-8": {
    color: "hsl(301, 63%, 40%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-12": {
    color: "hsl(301, 63%, 40%)"
  },
  "pre.diff-highlight > code .token.token.deleted:not(.prefix)": {
    backgroundColor: "hsla(353, 100%, 66%, 0.15)"
  },
  "pre > code.diff-highlight .token.token.deleted:not(.prefix)": {
    backgroundColor: "hsla(353, 100%, 66%, 0.15)"
  },
  "pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection": {
    backgroundColor: "hsla(353, 95%, 66%, 0.25)"
  },
  "pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection": {
    backgroundColor: "hsla(353, 95%, 66%, 0.25)"
  },
  "pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection": {
    backgroundColor: "hsla(353, 95%, 66%, 0.25)"
  },
  "pre > code.diff-highlight .token.token.deleted:not(.prefix) *::-moz-selection": {
    backgroundColor: "hsla(353, 95%, 66%, 0.25)"
  },
  "pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection": {
    backgroundColor: "hsla(353, 95%, 66%, 0.25)"
  },
  "pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection": {
    backgroundColor: "hsla(353, 95%, 66%, 0.25)"
  },
  "pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection": {
    backgroundColor: "hsla(353, 95%, 66%, 0.25)"
  },
  "pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection": {
    backgroundColor: "hsla(353, 95%, 66%, 0.25)"
  },
  "pre.diff-highlight > code .token.token.inserted:not(.prefix)": {
    backgroundColor: "hsla(137, 100%, 55%, 0.15)"
  },
  "pre > code.diff-highlight .token.token.inserted:not(.prefix)": {
    backgroundColor: "hsla(137, 100%, 55%, 0.15)"
  },
  "pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection": {
    backgroundColor: "hsla(135, 73%, 55%, 0.25)"
  },
  "pre.diff-highlight > code .token.token.inserted:not(.prefix) *::-moz-selection": {
    backgroundColor: "hsla(135, 73%, 55%, 0.25)"
  },
  "pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection": {
    backgroundColor: "hsla(135, 73%, 55%, 0.25)"
  },
  "pre > code.diff-highlight .token.token.inserted:not(.prefix) *::-moz-selection": {
    backgroundColor: "hsla(135, 73%, 55%, 0.25)"
  },
  "pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection": {
    backgroundColor: "hsla(135, 73%, 55%, 0.25)"
  },
  "pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection": {
    backgroundColor: "hsla(135, 73%, 55%, 0.25)"
  },
  "pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection": {
    backgroundColor: "hsla(135, 73%, 55%, 0.25)"
  },
  "pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection": {
    backgroundColor: "hsla(135, 73%, 55%, 0.25)"
  },
  ".prism-previewer.prism-previewer:before": {
    borderColor: "hsl(0, 0, 95%)"
  },
  ".prism-previewer-gradient.prism-previewer-gradient div": {
    borderColor: "hsl(0, 0, 95%)",
    borderRadius: "0.3em"
  },
  ".prism-previewer-color.prism-previewer-color:before": {
    borderRadius: "0.3em"
  },
  ".prism-previewer-easing.prism-previewer-easing:before": {
    borderRadius: "0.3em"
  },
  ".prism-previewer.prism-previewer:after": {
    borderTopColor: "hsl(0, 0, 95%)"
  },
  ".prism-previewer-flipped.prism-previewer-flipped.after": {
    borderBottomColor: "hsl(0, 0, 95%)"
  },
  ".prism-previewer-angle.prism-previewer-angle:before": {
    background: "hsl(0, 0%, 100%)"
  },
  ".prism-previewer-time.prism-previewer-time:before": {
    background: "hsl(0, 0%, 100%)"
  },
  ".prism-previewer-easing.prism-previewer-easing": {
    background: "hsl(0, 0%, 100%)"
  },
  ".prism-previewer-angle.prism-previewer-angle circle": {
    stroke: "hsl(230, 8%, 24%)",
    strokeOpacity: "1"
  },
  ".prism-previewer-time.prism-previewer-time circle": {
    stroke: "hsl(230, 8%, 24%)",
    strokeOpacity: "1"
  },
  ".prism-previewer-easing.prism-previewer-easing circle": {
    stroke: "hsl(230, 8%, 24%)",
    fill: "transparent"
  },
  ".prism-previewer-easing.prism-previewer-easing path": {
    stroke: "hsl(230, 8%, 24%)"
  },
  ".prism-previewer-easing.prism-previewer-easing line": {
    stroke: "hsl(230, 8%, 24%)"
  }
}, ae = 15e3;
function Me({ content: e, language: o, showLineNumbers: t, wrapLines: r = !1 }) {
  const n = typeof document < "u" && document.documentElement.classList.contains("dark");
  return e.length > ae ? /* @__PURE__ */ l(
    "div",
    {
      className: "text-xs font-mono p-3",
      style: { background: "hsl(var(--muted))" },
      children: [
        /* @__PURE__ */ l("div", { className: "text-muted-foreground text-[10px] uppercase mb-2 pb-2 border-b border-border", children: [
          "Syntax highlighting disabled (",
          Math.round(e.length / 1e3),
          "KB)"
        ] }),
        /* @__PURE__ */ a("pre", { className: r ? "whitespace-pre-wrap break-all overflow-x-hidden" : "whitespace-pre", children: e })
      ]
    }
  ) : r ? /* @__PURE__ */ a(
    A,
    {
      language: o,
      style: n ? E : q,
      showLineNumbers: t,
      wrapLines: !0,
      wrapLongLines: !0,
      lineProps: {
        style: {
          display: "block",
          width: "100%"
        }
      },
      customStyle: {
        margin: 0,
        padding: "12px",
        background: "transparent",
        whiteSpace: "pre-wrap",
        wordBreak: "break-all",
        overflowWrap: "break-word"
      },
      codeTagProps: {
        className: "text-xs font-mono",
        style: {
          display: "block",
          whiteSpace: "pre-wrap",
          wordBreak: "break-all",
          background: "transparent"
        }
      },
      lineNumberStyle: {
        minWidth: "2.5em",
        paddingRight: "1em",
        color: "var(--muted-foreground)",
        userSelect: "none",
        display: "inline-block",
        textAlign: "right"
      },
      lineNumberContainerStyle: {
        float: "left",
        paddingRight: "10px"
      },
      children: e
    }
  ) : /* @__PURE__ */ a(
    A,
    {
      language: o,
      style: n ? E : q,
      showLineNumbers: t,
      customStyle: {
        margin: 0,
        padding: "12px",
        background: "transparent",
        minWidth: "max-content"
      },
      codeTagProps: {
        className: "text-xs font-mono",
        style: {
          background: "transparent"
        }
      },
      lineNumberStyle: {
        minWidth: "2.5em",
        paddingRight: "1em",
        color: "var(--muted-foreground)",
        userSelect: "none"
      },
      children: e
    }
  );
}
function ze(e) {
  if (e.length > ae) return { content: e, isJson: !1 };
  try {
    return { content: JSON.stringify(JSON.parse(e), null, 2), isJson: !0 };
  } catch {
    return { content: e, isJson: !1 };
  }
}
function te({
  filename: e,
  content: o,
  mimeType: t,
  showLineNumbers: r = !0,
  showFooter: n = !0,
  footer: s,
  wrapLines: u = !1,
  height: d,
  width: p,
  maxHeight: m,
  maxWidth: i,
  className: h
}) {
  const [b, f] = y(!1), w = ee(e), c = t ? Fe(t) : null, x = c?.language ?? w.language, k = c?.label ?? w.label, { content: v, isJson: C } = S(() => ze(o), [o]), T = C ? "json" : x, F = () => {
    navigator.clipboard.writeText(o), f(!0), setTimeout(() => f(!1), 2e3);
  }, P = s?.left ?? e, J = s?.right ?? (C ? "JSON" : k);
  return /* @__PURE__ */ l(
    "div",
    {
      className: `relative bg-background group ${h || ""}`,
      style: { height: d || "100%", width: p, maxHeight: m, maxWidth: i, overflow: "hidden", display: "flex", flexDirection: "column" },
      children: [
        /* @__PURE__ */ a(
          "button",
          {
            onClick: F,
            className: "absolute top-2 right-3 z-10 p-1.5 rounded bg-muted/90 hover:bg-muted text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity",
            children: b ? /* @__PURE__ */ a(j, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ a(M, { className: "h-3.5 w-3.5" })
          }
        ),
        /* @__PURE__ */ a("div", { style: { flex: 1, minHeight: 0, overflow: u ? "hidden auto" : "auto" }, children: /* @__PURE__ */ a(
          Me,
          {
            content: v,
            language: T,
            showLineNumbers: r,
            wrapLines: u
          }
        ) }),
        n && /* @__PURE__ */ l("div", { className: "flex items-center justify-between gap-4 px-3 py-1 border-t border-border bg-muted/20 text-xs text-muted-foreground", style: { flexShrink: 0 }, children: [
          /* @__PURE__ */ a("span", { className: "truncate", title: P, children: P }),
          /* @__PURE__ */ a("span", { className: "uppercase", style: { flexShrink: 0 }, children: J })
        ] })
      ]
    }
  );
}
function Pe({ className: e, ...o }) {
  return /* @__PURE__ */ a(
    "nav",
    {
      "aria-label": "breadcrumb",
      "data-slot": "breadcrumb",
      className: g(e),
      ...o
    }
  );
}
function Le({ className: e, ...o }) {
  return /* @__PURE__ */ a(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: g(
        "text-muted-foreground gap-1.5 text-xs flex flex-wrap items-center break-words",
        e
      ),
      ...o
    }
  );
}
function B({ className: e, ...o }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: g("gap-1 inline-flex items-center", e),
      ...o
    }
  );
}
function W({
  asChild: e,
  className: o,
  ...t
}) {
  const r = e ? he.Root : "a";
  return /* @__PURE__ */ a(
    r,
    {
      "data-slot": "breadcrumb-link",
      className: g("hover:text-foreground transition-colors", o),
      ...t
    }
  );
}
function _({ className: e, ...o }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: g("text-foreground font-normal", e),
      ...o
    }
  );
}
function K({
  children: e,
  className: o,
  ...t
}) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: g("[&>svg]:size-3.5", o),
      ...t,
      children: e ?? /* @__PURE__ */ a(
        ie,
        {}
      )
    }
  );
}
Q(
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
Q(
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
function Re({
  className: e,
  ...o
}) {
  return /* @__PURE__ */ a(
    z,
    {
      "data-slot": "command",
      className: g(
        "bg-popover text-popover-foreground rounded-none flex size-full flex-col overflow-hidden",
        e
      ),
      ...o
    }
  );
}
function Je({
  className: e,
  ...o
}) {
  return /* @__PURE__ */ a(
    z.List,
    {
      "data-slot": "command-list",
      className: g(
        "no-scrollbar max-h-72 scroll-py-0 outline-none overflow-x-hidden overflow-y-auto",
        e
      ),
      ...o
    }
  );
}
function Ie({
  className: e,
  ...o
}) {
  return /* @__PURE__ */ a(
    z.Empty,
    {
      "data-slot": "command-empty",
      className: g("py-6 text-center text-xs", e),
      ...o
    }
  );
}
function Be({
  className: e,
  ...o
}) {
  return /* @__PURE__ */ a(
    z.Group,
    {
      "data-slot": "command-group",
      className: g("text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs", e),
      ...o
    }
  );
}
function De({
  className: e,
  children: o,
  ...t
}) {
  return /* @__PURE__ */ l(
    z.Item,
    {
      "data-slot": "command-item",
      className: g(
        "data-selected:bg-muted data-selected:text-foreground data-selected:*:[svg]:text-foreground relative flex cursor-default items-center gap-2 rounded-none px-2 py-2 text-xs outline-hidden select-none [&_svg:not([class*='size-'])]:size-4 [[data-slot=dialog-content]_&]:rounded-none! group/command-item data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        e
      ),
      ...t,
      children: [
        o,
        /* @__PURE__ */ a(ce, { className: "ml-auto opacity-0 group-has-[[data-slot=command-shortcut]]/command-item:hidden group-data-[checked=true]/command-item:opacity-100" })
      ]
    }
  );
}
function Oe(e, o) {
  let t = e;
  for (const r of o) {
    if (t == null || typeof t != "object") return;
    t = t[r];
  }
  return t;
}
function He(e) {
  return e == null ? [] : Array.isArray(e) ? e.map((o, t) => t) : typeof e == "object" ? Object.keys(e) : [];
}
function D(e) {
  return typeof e == "number" ? `[${e}]` : e;
}
function Ae(e) {
  return e === null ? { type: "null", color: "text-muted-foreground/60" } : Array.isArray(e) ? { type: `array[${e.length}]`, color: "text-muted-foreground" } : typeof e == "object" ? { type: `object{${Object.keys(e).length}}`, color: "text-muted-foreground" } : typeof e == "number" ? { type: "number", color: "text-muted-foreground" } : typeof e == "boolean" ? { type: "bool", color: "text-muted-foreground" } : typeof e == "string" ? { type: "string", color: "text-muted-foreground" } : { type: typeof e, color: "text-muted-foreground" };
}
function Ve({ data: e, path: o, rootLabel: t, onPathChange: r, onCopyPath: n, pathCopied: s }) {
  const [u, d] = y(!1), p = S(() => Oe(e, o), [e, o]), m = S(() => He(p), [p]), i = p !== null && typeof p == "object" && m.length > 0, h = (c) => {
    r(o.slice(0, c));
  }, b = (c) => {
    r([...o, c]), d(!1);
  }, f = S(() => m.map((c) => {
    const x = p[c];
    return { key: c, ...Ae(x) };
  }), [m, p]), w = t || "root";
  return /* @__PURE__ */ a("div", { className: "px-3 py-2 flex-shrink-0 flex items-center gap-2 overflow-hidden", children: /* @__PURE__ */ a(Pe, { className: "whitespace-nowrap overflow-hidden text-ellipsis", children: /* @__PURE__ */ l(Le, { className: "flex-nowrap", children: [
    /* @__PURE__ */ a(B, { children: o.length === 0 ? /* @__PURE__ */ l(_, { className: "font-mono font-medium text-secondary-foreground bg-secondary px-1.5 py-0.5 rounded-sm flex items-center gap-1.5", children: [
      t && /* @__PURE__ */ a(
        "button",
        {
          onClick: n,
          className: "p-0.5 hover:bg-background/20 rounded-sm transition-colors text-secondary-foreground/80 hover:text-secondary-foreground",
          title: "Copy path",
          children: s ? /* @__PURE__ */ a(j, { className: "h-3 w-3" }) : /* @__PURE__ */ a(M, { className: "h-3 w-3" })
        }
      ),
      w
    ] }) : /* @__PURE__ */ a(
      W,
      {
        href: "#",
        onClick: (c) => {
          c.preventDefault(), h(0);
        },
        className: "font-mono hover:text-foreground transition-colors",
        children: w
      }
    ) }),
    o.map((c, x) => {
      const k = x === o.length - 1;
      return /* @__PURE__ */ l("span", { className: "contents", children: [
        /* @__PURE__ */ a(K, {}),
        /* @__PURE__ */ a(B, { children: k ? /* @__PURE__ */ l(_, { className: "font-mono font-medium text-secondary-foreground bg-secondary px-1.5 py-0.5 rounded-sm flex items-center gap-1.5", children: [
          /* @__PURE__ */ a(
            "button",
            {
              onClick: n,
              className: "p-0.5 hover:bg-background/20 rounded-sm transition-colors text-secondary-foreground/80 hover:text-secondary-foreground",
              title: "Copy path",
              children: s ? /* @__PURE__ */ a(j, { className: "h-3 w-3" }) : /* @__PURE__ */ a(M, { className: "h-3 w-3" })
            }
          ),
          D(c)
        ] }) : /* @__PURE__ */ a(
          W,
          {
            href: "#",
            onClick: (v) => {
              v.preventDefault(), h(x + 1);
            },
            className: "font-mono hover:text-foreground transition-colors",
            children: D(c)
          }
        ) })
      ] }, x);
    }),
    i && /* @__PURE__ */ l(L, { children: [
      /* @__PURE__ */ a(K, {}),
      /* @__PURE__ */ a(B, { children: /* @__PURE__ */ l(be, { open: u, onOpenChange: d, modal: !0, children: [
        /* @__PURE__ */ a(fe, { className: "flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer group", children: /* @__PURE__ */ a("span", { className: "font-mono text-xs group-hover:underline decoration-border/50 underline-offset-2", children: "..." }) }),
        /* @__PURE__ */ a(ke, { align: "start", className: "w-56 p-1", children: /* @__PURE__ */ a(Re, { children: /* @__PURE__ */ l(Je, { className: "max-h-[240px] overflow-y-auto", children: [
          /* @__PURE__ */ a(Ie, { className: "py-2 text-center text-xs text-muted-foreground", children: "No items." }),
          /* @__PURE__ */ a(Be, { children: f.map(({ key: c, type: x, color: k }) => /* @__PURE__ */ l(
            De,
            {
              value: String(c),
              onSelect: () => b(c),
              className: "flex items-center justify-between py-1.5 px-2 text-xs rounded-sm aria-selected:bg-accent aria-selected:text-accent-foreground cursor-pointer",
              children: [
                /* @__PURE__ */ a("span", { className: "font-mono truncate", children: D(c) }),
                /* @__PURE__ */ a("span", { className: `text-[10px] ${k} opacity-80 flex-shrink-0 ml-2`, children: x })
              ]
            },
            String(c)
          )) })
        ] }) }) })
      ] }) })
    ] })
  ] }) }) });
}
function Ge(e, o) {
  let t = e;
  for (const r of o) {
    if (t == null || typeof t != "object") return;
    t = t[r];
  }
  return t;
}
function $e(e, o) {
  const t = o ? [o, ...e] : [...e];
  return t.length === 0 ? "[]" : `[${t.map((n) => typeof n == "number" ? String(n) : `"${n}"`).join(", ")}]`;
}
function ko({
  filename: e,
  data: o,
  rootLabel: t,
  showFooter: r = !0,
  footer: n,
  height: s,
  width: u,
  maxHeight: d,
  maxWidth: p,
  className: m
}) {
  const [i, h] = y([]), [b, f] = y(!1), w = S(() => Ge(o, i), [o, i]), c = S(() => {
    try {
      return JSON.stringify(w, null, 2);
    } catch {
      return String(w ?? "undefined");
    }
  }, [w]), x = O((v) => {
    h(v);
  }, []), k = O(() => {
    navigator.clipboard.writeText($e(i, t)), f(!0), setTimeout(() => f(!1), 2e3);
  }, [i, t]);
  return /* @__PURE__ */ l(
    "div",
    {
      className: `flex flex-col bg-background overflow-hidden ${m || ""}`,
      style: { height: s || "100%", width: u, maxHeight: d, maxWidth: p },
      children: [
        /* @__PURE__ */ a("div", { className: "border-b border-border flex-shrink-0", children: /* @__PURE__ */ a(
          Ve,
          {
            data: o,
            path: i,
            rootLabel: t,
            onPathChange: x,
            onCopyPath: k,
            pathCopied: b
          }
        ) }),
        /* @__PURE__ */ a("div", { className: "flex-1 min-h-0 overflow-hidden", children: /* @__PURE__ */ a(
          te,
          {
            filename: e,
            content: c,
            mimeType: "application/json",
            showLineNumbers: !0,
            showFooter: r,
            footer: n,
            maxHeight: "100%"
          }
        ) })
      ]
    }
  );
}
function Ee({ className: e, ...o }) {
  return /* @__PURE__ */ a("div", { "data-slot": "table-container", className: "relative w-full overflow-x-auto", children: /* @__PURE__ */ a(
    "table",
    {
      "data-slot": "table",
      className: g("w-full caption-bottom text-xs", e),
      ...o
    }
  ) });
}
function qe({ className: e, ...o }) {
  return /* @__PURE__ */ a(
    "thead",
    {
      "data-slot": "table-header",
      className: g("[&_tr]:border-b", e),
      ...o
    }
  );
}
function We({ className: e, ...o }) {
  return /* @__PURE__ */ a(
    "tbody",
    {
      "data-slot": "table-body",
      className: g("[&_tr:last-child]:border-0", e),
      ...o
    }
  );
}
function X({ className: e, ...o }) {
  return /* @__PURE__ */ a(
    "tr",
    {
      "data-slot": "table-row",
      className: g("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", e),
      ...o
    }
  );
}
function U({ className: e, ...o }) {
  return /* @__PURE__ */ a(
    "th",
    {
      "data-slot": "table-head",
      className: g("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0", e),
      ...o
    }
  );
}
function Y({ className: e, ...o }) {
  return /* @__PURE__ */ a(
    "td",
    {
      "data-slot": "table-cell",
      className: g("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0", e),
      ...o
    }
  );
}
function _e(e) {
  return e === null ? { display: "null", className: "", wrapInCode: !0 } : e === void 0 ? { display: "undefined", className: "", wrapInCode: !0 } : typeof e == "boolean" ? { display: String(e), className: "", wrapInCode: !0 } : typeof e == "number" ? { display: String(e), className: "", wrapInCode: !0 } : typeof e == "string" ? e === "" ? { display: "(empty)", className: "text-muted-foreground", wrapInCode: !1 } : { display: e, className: "", wrapInCode: !1 } : Array.isArray(e) || typeof e == "object" ? { display: JSON.stringify(e), className: "", wrapInCode: !1 } : { display: String(e), className: "", wrapInCode: !1 };
}
function xo({
  data: e,
  keyLabel: o = "Name",
  valueLabel: t = "Value",
  showCopy: r = !1,
  showCopyJson: n = !1,
  hideHeader: s = !1
}) {
  const u = Object.entries(e ?? {}), [d, p] = y(null), [m, i] = y(null), h = (c) => {
    p(d === c ? null : c);
  };
  return /* @__PURE__ */ l("div", { className: "space-y-2", children: [
    (r || n) && /* @__PURE__ */ l(xe, { align: "end", gap: "sm", children: [
      r && /* @__PURE__ */ a(
        V,
        {
          label: m === "text" ? "Copied" : "Copy",
          icon: m === "text" ? j : M,
          onClick: () => {
            const c = u.map(([x, k]) => `${x}: ${typeof k == "object" ? JSON.stringify(k) : k}`).join(`
`);
            navigator.clipboard.writeText(c), i("text"), setTimeout(() => i(null), 2e3);
          },
          variant: "outline",
          size: "xs",
          tooltip: "Copy as text"
        }
      ),
      n && /* @__PURE__ */ a(
        V,
        {
          label: m === "json" ? "Copied" : "Copy JSON",
          icon: m === "json" ? j : se,
          onClick: () => {
            navigator.clipboard.writeText(JSON.stringify(e, null, 2)), i("json"), setTimeout(() => i(null), 2e3);
          },
          variant: "outline",
          size: "xs",
          tooltip: "Copy as JSON"
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "rounded border border-border overflow-hidden", children: /* @__PURE__ */ l(Ee, { className: "table-fixed w-full", children: [
      !s && /* @__PURE__ */ a(qe, { children: /* @__PURE__ */ l(X, { className: "bg-muted/30", children: [
        /* @__PURE__ */ a(U, { className: "w-[180px] text-xs font-medium", children: o }),
        /* @__PURE__ */ a(U, { className: "text-xs font-medium", children: t })
      ] }) }),
      /* @__PURE__ */ a(We, { children: u.map(([c, x]) => {
        const k = d === c, { display: v, className: C, wrapInCode: T } = _e(x);
        return /* @__PURE__ */ l(
          X,
          {
            onClick: () => h(c),
            className: g(
              "cursor-pointer transition-colors hover:bg-muted/50",
              k && "bg-muted/30"
            ),
            children: [
              /* @__PURE__ */ a(
                Y,
                {
                  className: g(
                    "font-mono text-xs py-2 text-muted-foreground align-top",
                    k ? "whitespace-pre-wrap break-all" : "truncate"
                  ),
                  children: c
                }
              ),
              /* @__PURE__ */ a(
                Y,
                {
                  className: g(
                    "font-mono text-xs py-2",
                    C,
                    k ? "whitespace-pre-wrap break-all" : "truncate"
                  ),
                  children: T ? /* @__PURE__ */ a("code", { className: "px-1.5 py-0.5 rounded bg-muted text-foreground border border-border", children: v }) : v
                }
              )
            ]
          },
          c
        );
      }) })
    ] }) })
  ] });
}
function Ke(e) {
  if (!e)
    return { protocol: "", host: "", path: "", isDataUrl: !1 };
  if (e.startsWith("data:")) {
    const o = e.indexOf(",");
    return {
      protocol: "data:",
      host: (o > 0 ? e.slice(5, Math.min(o, 50)) : "unknown") + (o > 50 ? "..." : ""),
      path: `[${((e.length - o) / 1024).toFixed(1)} KB payload]`,
      isDataUrl: !0
    };
  }
  try {
    const o = new URL(e);
    return {
      protocol: o.protocol,
      host: o.host,
      path: o.pathname + o.search + o.hash,
      isDataUrl: !1
    };
  } catch {
    return { protocol: "", host: "", path: e, isDataUrl: !1 };
  }
}
function Xe(e) {
  let o;
  if (typeof e == "number")
    o = e;
  else {
    const t = e.toString().match(/^\d+/);
    o = t ? parseInt(t[0], 10) : 0;
  }
  return o >= 200 && o < 300 ? "default" : o >= 400 ? "destructive" : "secondary";
}
function Ue(e, o) {
  return o ? `${e} ${o}` : e.toString();
}
function Ye(e) {
  if (e == null) return !1;
  if (typeof e == "number") return e > 0;
  if (typeof e == "string") {
    const o = e.match(/^\d+/);
    return o ? parseInt(o[0], 10) > 0 : e.length > 0;
  }
  return !1;
}
function Qe(e) {
  return e < 1e3 ? `${Math.round(e)}ms` : e < 6e4 ? `${(e / 1e3).toFixed(1)}s` : `${(e / 6e4).toFixed(1)}min`;
}
function Ze(e) {
  if (e === 0) return "0 B";
  const o = ["B", "KB", "MB", "GB"], t = Math.min(Math.floor(Math.log(e) / Math.log(1024)), o.length - 1), r = e / Math.pow(1024, t);
  return `${r < 10 ? r.toFixed(1) : Math.round(r)} ${o[t]}`;
}
function eo({
  variant: e,
  icon: o,
  title: t,
  description: r,
  ctaText: n,
  ctaOnClick: s,
  className: u
}) {
  const d = {
    success: "text-primary",
    warning: "text-amber-600 dark:text-amber-500",
    destructive: "text-destructive",
    neutral: "text-muted-foreground"
  };
  return /* @__PURE__ */ l(
    "div",
    {
      className: g(
        "flex items-start gap-2 p-2 rounded-md border",
        {
          success: "bg-card border-border",
          warning: "bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/20",
          destructive: "bg-destructive/10 border-destructive/20",
          neutral: "bg-card border-border"
        }[e],
        u
      ),
      children: [
        /* @__PURE__ */ a(o, { className: g("h-4 w-4 shrink-0 mt-0.5", d[e]) }),
        /* @__PURE__ */ l("div", { className: "space-y-1 min-w-0 flex-1", children: [
          t && /* @__PURE__ */ a("h4", { className: "font-medium text-sm leading-5 text-foreground", children: t }),
          (r || n && s) && /* @__PURE__ */ l("p", { className: "text-sm text-muted-foreground", children: [
            r,
            n && s && /* @__PURE__ */ l(L, { children: [
              r && " ",
              /* @__PURE__ */ a(
                R,
                {
                  variant: "link",
                  size: "sm",
                  onClick: s,
                  className: "h-auto p-0 text-sm text-primary hover:text-primary/80",
                  children: n
                }
              )
            ] })
          ] })
        ] })
      ]
    }
  );
}
function vo({
  method: e,
  url: o,
  status: t,
  statusText: r,
  mimeType: n,
  isRedirect: s,
  responseTimeMs: u,
  contentSizeBytes: d,
  failed: p,
  failureReason: m,
  showActionButton: i = !1,
  actionButtonText: h = "Action",
  actionButtonIcon: b,
  onActionButtonClick: f,
  actionButtonVariant: w = "outline",
  actionButtonTitle: c
}) {
  const [x, k] = y(!1), v = Ke(o), C = async () => {
    await navigator.clipboard.writeText(o), k(!0), setTimeout(() => k(!1), 2e3);
  }, T = (J) => {
    J.stopPropagation(), f?.();
  }, F = Ye(t), P = F ? Xe(t) : "secondary";
  return /* @__PURE__ */ l("div", { className: "space-y-2", children: [
    p && m && /* @__PURE__ */ a(eo, { variant: "destructive", icon: de, description: m }),
    /* @__PURE__ */ l("div", { className: "flex items-center gap-2 flex-wrap", children: [
      /* @__PURE__ */ a(
        N,
        {
          variant: "secondary",
          className: "font-mono font-bold text-xs px-2 py-0.5",
          children: e
        }
      ),
      F && /* @__PURE__ */ a(
        N,
        {
          variant: P,
          className: "font-mono text-xs px-2 py-0.5",
          children: Ue(t, r)
        }
      ),
      p && !F && /* @__PURE__ */ a(
        N,
        {
          variant: "destructive",
          className: "font-mono text-xs px-2 py-0.5",
          children: "Failed"
        }
      ),
      u !== void 0 && u > 0 && /* @__PURE__ */ l(N, { variant: "outline", className: "text-xs gap-1 text-muted-foreground", children: [
        /* @__PURE__ */ a(ue, { className: "h-3 w-3" }),
        Qe(u)
      ] }),
      d !== void 0 && d > 0 && /* @__PURE__ */ l(N, { variant: "outline", className: "text-xs gap-1 text-muted-foreground", children: [
        /* @__PURE__ */ a(ge, { className: "h-3 w-3" }),
        Ze(d)
      ] }),
      s && /* @__PURE__ */ l(N, { variant: "outline", className: "text-xs gap-1 text-amber-600 dark:text-amber-400 border-amber-300 dark:border-amber-700", children: [
        /* @__PURE__ */ a(pe, { className: "h-3 w-3" }),
        "Redirect"
      ] }),
      n && /* @__PURE__ */ a(N, { variant: "outline", className: "text-xs hidden sm:inline-flex", children: n }),
      /* @__PURE__ */ a("div", { className: "flex-1" }),
      i && /* @__PURE__ */ l(
        R,
        {
          size: "sm",
          variant: w,
          onClick: T,
          className: "shrink-0 gap-1.5 h-7 text-xs",
          title: c,
          children: [
            b && /* @__PURE__ */ a(b, { className: "h-3.5 w-3.5" }),
            h && /* @__PURE__ */ a("span", { className: "hidden sm:inline", children: h })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ l("div", { className: "flex items-center gap-2 min-w-0 bg-muted/40 p-2 rounded-md border border-border/50", children: [
      /* @__PURE__ */ a(me, { className: "h-4 w-4 shrink-0 text-primary" }),
      /* @__PURE__ */ a("p", { className: "font-mono text-xs text-foreground/80 truncate flex-1 leading-none", title: o, children: v.isDataUrl ? /* @__PURE__ */ l(L, { children: [
        /* @__PURE__ */ a("span", { className: "text-muted-foreground", children: v.protocol }),
        /* @__PURE__ */ a("span", { children: v.host }),
        /* @__PURE__ */ a("span", { className: "text-muted-foreground ml-1", children: v.path })
      ] }) : /* @__PURE__ */ l(L, { children: [
        /* @__PURE__ */ l("span", { className: "text-muted-foreground", children: [
          v.protocol,
          "//"
        ] }),
        /* @__PURE__ */ a("span", { className: "font-medium", children: v.host }),
        /* @__PURE__ */ a("span", { className: "text-foreground/60", children: v.path })
      ] }) }),
      /* @__PURE__ */ a(
        R,
        {
          size: "sm",
          variant: "ghost",
          onClick: C,
          className: "shrink-0 h-6 w-6 p-0 hover:bg-transparent",
          title: "Copy URL",
          children: x ? /* @__PURE__ */ a(j, { className: "h-3.5 w-3.5 text-green-500" }) : /* @__PURE__ */ a(M, { className: "h-3.5 w-3.5 text-muted-foreground hover:text-foreground" })
        }
      )
    ] })
  ] });
}
function wo({
  content: e,
  filename: o = "index.html",
  initialMode: t = "code",
  className: r,
  showFooter: n = !0,
  footer: s,
  height: u,
  width: d,
  maxHeight: p,
  maxWidth: m
}) {
  const [i, h] = y(t);
  return /* @__PURE__ */ l(
    "div",
    {
      className: `flex flex-col bg-background border border-border rounded-md overflow-hidden ${r || ""}`,
      style: { height: u || "100%", width: d, maxHeight: p, maxWidth: m },
      children: [
        /* @__PURE__ */ a("div", { className: "flex items-center justify-between border-b border-border px-3 py-1.5 text-sm", children: /* @__PURE__ */ l("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ a(
            "button",
            {
              onClick: () => h("code"),
              className: i === "code" ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground",
              children: "Code"
            }
          ),
          /* @__PURE__ */ a(
            "button",
            {
              onClick: () => h("preview"),
              className: i === "preview" ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground",
              children: "Preview"
            }
          )
        ] }) }),
        /* @__PURE__ */ a("div", { className: "flex-1 min-h-0", children: i === "code" ? /* @__PURE__ */ a(
          te,
          {
            filename: o,
            content: e,
            mimeType: "text/html",
            showLineNumbers: !0,
            showFooter: n,
            footer: s,
            maxHeight: "100%"
          }
        ) : /* @__PURE__ */ a("div", { className: "w-full h-full bg-white", children: e ? /* @__PURE__ */ a(
          "iframe",
          {
            srcDoc: e,
            title: "HTML Preview",
            className: "w-full h-full border-none block",
            sandbox: ""
          }
        ) : /* @__PURE__ */ a("div", { className: "flex items-center justify-center h-full text-muted-foreground text-sm", children: "Empty Preview" }) }) })
      ]
    }
  );
}
function yo({ items: e, className: o }) {
  const t = {
    primary: "bg-primary/10 text-primary border-primary/20",
    destructive: "bg-destructive/10 text-destructive border-destructive/20"
  };
  return /* @__PURE__ */ a("div", { className: g("relative", o), children: e.map((r, n) => {
    const s = r.icon, u = r.iconVariant ?? "primary", d = n === e.length - 1;
    return /* @__PURE__ */ l("div", { className: "relative flex gap-4", children: [
      !d && /* @__PURE__ */ a(
        "div",
        {
          className: "absolute left-[15px] top-[36px] bottom-0 w-px bg-border",
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ a(
        "div",
        {
          className: g(
            "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border",
            t[u]
          ),
          children: /* @__PURE__ */ a(s, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ l("div", { className: g("flex-1 pb-8", d && "pb-0"), children: [
        /* @__PURE__ */ a("h4", { className: "font-medium text-sm leading-8 text-foreground", children: r.title }),
        r.description && /* @__PURE__ */ a("p", { className: "text-sm text-muted-foreground mt-1", children: r.description }),
        r.children && /* @__PURE__ */ a("div", { className: "mt-3", children: r.children }),
        r.ctaText && r.ctaOnClick && /* @__PURE__ */ a(
          R,
          {
            variant: "outline",
            size: "sm",
            onClick: r.ctaOnClick,
            className: "mt-3",
            children: r.ctaText
          }
        )
      ] })
    ] }, n);
  }) });
}
export {
  yo as BasicTimeline,
  fo as ContentTab,
  te as FileCodeView,
  bo as FileTree,
  wo as HtmlCodeView,
  vo as HttpRequestMetadata,
  ko as JsonCodeView,
  xo as KeyValuePairTable,
  eo as StatusDisplay
};
