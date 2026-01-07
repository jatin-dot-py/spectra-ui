import { jsxs as r, jsx as a, Fragment as J } from "react/jsx-runtime";
import { useMemo as C, useState as N, useCallback as I } from "react";
import { ChevronDown as ae, ChevronRight as te, X as le, Check as F, Copy as z, ChevronRightIcon as re, SearchIcon as ne, CheckIcon as ie, Braces as ce, AlertCircle as se, Clock as de, Package as ue, ArrowRightLeft as ge, Globe as pe } from "lucide-react";
import { c as s } from "./utils-B6yFEsav.js";
import { A as B, P as he, c as me, b as be, B as S } from "./badge-BnV_A10r.js";
import { Prism as D } from "react-syntax-highlighter";
import { Slot as fe } from "radix-ui";
import { Command as j } from "cmdk";
import { B as O } from "./button-DHQhRgTM.js";
import { cva as X } from "class-variance-authority";
function ke(e) {
  const o = [];
  if (!Array.isArray(e)) return o;
  for (const t of e) {
    if (typeof t != "string") continue;
    const l = t.split("/").filter(Boolean);
    if (l.length === 0) continue;
    let n = o, p = "";
    for (let h = 0; h < l.length; h++) {
      const c = l[h];
      p = p ? `${p}/${c}` : c;
      const d = h === l.length - 1;
      let u = n.find((i) => i.name === c);
      u || (u = {
        name: c,
        path: p,
        isFolder: !d,
        children: []
      }, n.push(u)), d || (n = u.children);
    }
  }
  return U(o);
}
function U(e) {
  return e.map((o) => ({ ...o, children: U(o.children) })).sort((o, t) => o.isFolder && !t.isFolder ? -1 : !o.isFolder && t.isFolder ? 1 : o.name.localeCompare(t.name));
}
const L = {
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
}, A = {
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
}, xe = {
  iconName: "lucide-react:File",
  language: "text",
  label: "File"
};
function Y(e) {
  const o = e.split("/").pop()?.toLowerCase() || "";
  if (A[o])
    return A[o];
  const t = o.split(".");
  if (t.length > 2) {
    const n = t.slice(-2).join(".");
    if (L[n])
      return L[n];
  }
  const l = t.pop() || "";
  return L[l] || xe;
}
function ve(e) {
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
}, ye = "lucide-react:Folder", Ne = "lucide-react:FolderOpen";
function Se(e, o = !1) {
  const t = e.toLowerCase(), l = we[t];
  return l || (o ? Ne : ye);
}
const H = {
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
}, Ce = { language: "text", label: "Plain Text" };
function je(e) {
  const o = e.split(";")[0].trim().toLowerCase();
  return H[o] ? H[o] : o.startsWith("text/") ? { language: "text", label: "Text" } : o.includes("json") ? { language: "json", label: "JSON" } : o.includes("xml") ? { language: "xml", label: "XML" } : o.includes("javascript") ? { language: "javascript", label: "JavaScript" } : Ce;
}
function Q({
  node: e,
  depth: o,
  selectedPath: t,
  onSelect: l,
  expandedFolders: n,
  toggleFolder: p,
  showFileIcons: h = !0,
  showTreeLines: c = !1
}) {
  const d = n.has(e.path), u = t === e.path, i = o * 14;
  if (e.isFolder) {
    const g = Se(e.name, d);
    return /* @__PURE__ */ r("div", { className: "relative", children: [
      c && o > 0 && /* @__PURE__ */ a(
        "div",
        {
          className: "absolute top-0 bottom-0 border-l border-border",
          style: { left: `${(o - 1) * 14 + 14}px` }
        }
      ),
      /* @__PURE__ */ r(
        "button",
        {
          onClick: () => p(e.path),
          className: s(
            "w-full flex items-center gap-1.5 px-2 py-1 text-xs hover:bg-accent/50 rounded-sm transition-colors relative whitespace-nowrap",
            "text-foreground"
          ),
          style: { paddingLeft: `${i + 6}px` },
          children: [
            d ? /* @__PURE__ */ a(ae, { className: "h-3.5 w-3.5 text-muted-foreground flex-shrink-0" }) : /* @__PURE__ */ a(te, { className: "h-3.5 w-3.5 text-muted-foreground flex-shrink-0" }),
            /* @__PURE__ */ a(
              B,
              {
                name: g,
                size: 15,
                className: "text-muted-foreground flex-shrink-0",
                showSpinner: !1
              }
            ),
            /* @__PURE__ */ a("span", { children: e.name })
          ]
        }
      ),
      d && /* @__PURE__ */ r("div", { className: "relative", children: [
        c && /* @__PURE__ */ a(
          "div",
          {
            className: "absolute top-0 bottom-0 border-l border-border",
            style: { left: `${o * 14 + 14}px` }
          }
        ),
        e.children.map((k) => /* @__PURE__ */ a(
          Q,
          {
            node: k,
            depth: o + 1,
            selectedPath: t,
            onSelect: l,
            expandedFolders: n,
            toggleFolder: p,
            showFileIcons: h,
            showTreeLines: c
          },
          k.path
        ))
      ] })
    ] });
  }
  const m = ve(e.name);
  return /* @__PURE__ */ r("div", { className: "relative", children: [
    c && o > 0 && /* @__PURE__ */ a(
      "div",
      {
        className: "absolute top-0 bottom-0 border-l border-border",
        style: { left: `${(o - 1) * 14 + 14}px` }
      }
    ),
    /* @__PURE__ */ r(
      "button",
      {
        onClick: () => l(e.path),
        className: s(
          "w-full flex items-center gap-1.5 px-2 py-1 text-xs rounded-sm transition-colors relative whitespace-nowrap",
          u ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-accent/50"
        ),
        style: { paddingLeft: `${i + 24}px` },
        children: [
          h && /* @__PURE__ */ a(
            B,
            {
              name: m,
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
function po({
  filePaths: e,
  onFileItemClick: o,
  selectedPath: t,
  title: l = "Explorer",
  showFileIcons: n = !0,
  showTreeLines: p = !1
}) {
  const h = C(() => ke(e), [e]), [c, d] = N(() => {
    const i = /* @__PURE__ */ new Set();
    if (t) {
      const m = t.split("/");
      let g = "";
      for (let k = 0; k < m.length - 1; k++)
        g = g ? `${g}/${m[k]}` : m[k], i.add(g);
    }
    return i;
  }), u = (i) => {
    d((m) => {
      const g = new Set(m);
      return g.has(i) ? g.delete(i) : g.add(i), g;
    });
  };
  return /* @__PURE__ */ r("div", { className: "flex flex-col h-full border border-border rounded-lg overflow-hidden bg-background", children: [
    /* @__PURE__ */ a("div", { className: "px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b border-border bg-muted/20 flex-shrink-0", children: l }),
    /* @__PURE__ */ a("div", { className: "flex-1 min-h-0 overflow-hidden", children: /* @__PURE__ */ a("div", { className: "h-full w-full overflow-auto", children: /* @__PURE__ */ a("div", { className: "py-1 min-w-max", children: h.map((i) => /* @__PURE__ */ a(
      Q,
      {
        node: i,
        depth: 0,
        selectedPath: t ?? null,
        onSelect: o,
        expandedFolders: c,
        toggleFolder: u,
        showFileIcons: n,
        showTreeLines: p
      },
      i.path
    )) }) }) })
  ] });
}
function ho({
  name: e,
  icon: o,
  onClick: t,
  isActive: l = !1,
  onClose: n
}) {
  return /* @__PURE__ */ r(
    "div",
    {
      onClick: t,
      title: e,
      className: s(
        "flex items-center gap-1.5 px-3 py-1.5 text-xs border-r border-border flex-shrink-0 group cursor-pointer transition-colors",
        l ? "bg-background text-foreground" : "bg-muted/30 text-muted-foreground hover:bg-muted/50"
      ),
      children: [
        o && /* @__PURE__ */ a(o, { className: "h-3.5 w-3.5 text-muted-foreground flex-shrink-0" }),
        /* @__PURE__ */ a("span", { className: "max-w-32 truncate", children: e }),
        n && /* @__PURE__ */ a(
          "button",
          {
            onClick: (p) => {
              p.stopPropagation(), n();
            },
            className: "ml-1 p-0.5 rounded hover:bg-accent opacity-0 group-hover:opacity-100 transition-opacity",
            children: /* @__PURE__ */ a(le, { className: "h-3 w-3" })
          }
        )
      ]
    }
  );
}
const V = {
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
}, G = {
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
}, Z = 15e3;
function Te({ content: e, language: o, showLineNumbers: t, wrapLines: l = !1 }) {
  const n = typeof document < "u" && document.documentElement.classList.contains("dark");
  return e.length > Z ? /* @__PURE__ */ r(
    "div",
    {
      className: "text-xs font-mono p-3",
      style: { background: "hsl(var(--muted))" },
      children: [
        /* @__PURE__ */ r("div", { className: "text-muted-foreground text-[10px] uppercase mb-2 pb-2 border-b border-border", children: [
          "Syntax highlighting disabled (",
          Math.round(e.length / 1e3),
          "KB)"
        ] }),
        /* @__PURE__ */ a("pre", { className: l ? "whitespace-pre-wrap break-all overflow-x-hidden" : "whitespace-pre", children: e })
      ]
    }
  ) : l ? /* @__PURE__ */ a(
    D,
    {
      language: o,
      style: n ? V : G,
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
        background: "hsl(var(--muted))",
        whiteSpace: "pre-wrap",
        wordBreak: "break-all",
        overflowWrap: "break-word"
      },
      codeTagProps: {
        className: "text-xs font-mono",
        style: {
          display: "block",
          whiteSpace: "pre-wrap",
          wordBreak: "break-all"
        }
      },
      lineNumberStyle: {
        minWidth: "2.5em",
        paddingRight: "1em",
        color: "hsl(var(--muted-foreground))",
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
    D,
    {
      language: o,
      style: n ? V : G,
      showLineNumbers: t,
      customStyle: {
        margin: 0,
        padding: "12px",
        background: "hsl(var(--muted))",
        minWidth: "max-content"
      },
      codeTagProps: {
        className: "text-xs font-mono"
      },
      lineNumberStyle: {
        minWidth: "2.5em",
        paddingRight: "1em",
        color: "hsl(var(--muted-foreground))",
        userSelect: "none"
      },
      children: e
    }
  );
}
function Fe(e) {
  if (e.length > Z) return { content: e, isJson: !1 };
  try {
    return { content: JSON.stringify(JSON.parse(e), null, 2), isJson: !0 };
  } catch {
    return { content: e, isJson: !1 };
  }
}
function Me({
  filename: e,
  content: o,
  mimeType: t,
  showLineNumbers: l = !0,
  showFooter: n = !0,
  footer: p,
  wrapLines: h = !1,
  maxHeight: c,
  maxWidth: d
}) {
  const [u, i] = N(!1), m = Y(e), g = t ? je(t) : null, k = g?.language ?? m.language, w = g?.label ?? m.label, { content: b, isJson: v } = C(() => Fe(o), [o]), f = v ? "json" : k, x = () => {
    navigator.clipboard.writeText(o), i(!0), setTimeout(() => i(!1), 2e3);
  }, y = p?.left ?? e, T = p?.right ?? (v ? "JSON" : w);
  return /* @__PURE__ */ r(
    "div",
    {
      className: "relative bg-background group",
      style: { maxHeight: c, maxWidth: d, overflow: "hidden", display: "flex", flexDirection: "column" },
      children: [
        /* @__PURE__ */ a(
          "button",
          {
            onClick: x,
            className: "absolute top-2 right-3 z-10 p-1.5 rounded bg-muted/90 hover:bg-muted text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity",
            children: u ? /* @__PURE__ */ a(F, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ a(z, { className: "h-3.5 w-3.5" })
          }
        ),
        /* @__PURE__ */ a("div", { style: { flex: 1, minHeight: 0, overflow: h ? "hidden auto" : "auto" }, children: /* @__PURE__ */ a(
          Te,
          {
            content: b,
            language: f,
            showLineNumbers: l,
            wrapLines: h
          }
        ) }),
        n && /* @__PURE__ */ r("div", { className: "flex items-center justify-between gap-4 px-3 py-1 border-t border-border bg-muted/20 text-xs text-muted-foreground", style: { flexShrink: 0 }, children: [
          /* @__PURE__ */ a("span", { className: "truncate", title: y, children: y }),
          /* @__PURE__ */ a("span", { className: "uppercase", style: { flexShrink: 0 }, children: T })
        ] })
      ]
    }
  );
}
function ze({ className: e, ...o }) {
  return /* @__PURE__ */ a(
    "nav",
    {
      "aria-label": "breadcrumb",
      "data-slot": "breadcrumb",
      className: s(e),
      ...o
    }
  );
}
function Pe({ className: e, ...o }) {
  return /* @__PURE__ */ a(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: s(
        "text-muted-foreground gap-1.5 text-xs flex flex-wrap items-center break-words",
        e
      ),
      ...o
    }
  );
}
function R({ className: e, ...o }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: s("gap-1 inline-flex items-center", e),
      ...o
    }
  );
}
function $({
  asChild: e,
  className: o,
  ...t
}) {
  const l = e ? fe.Root : "a";
  return /* @__PURE__ */ a(
    l,
    {
      "data-slot": "breadcrumb-link",
      className: s("hover:text-foreground transition-colors", o),
      ...t
    }
  );
}
function q({ className: e, ...o }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: s("text-foreground font-normal", e),
      ...o
    }
  );
}
function E({
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
      className: s("[&>svg]:size-3.5", o),
      ...t,
      children: e ?? /* @__PURE__ */ a(
        re,
        {}
      )
    }
  );
}
function Le({ className: e, ...o }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "input-group",
      role: "group",
      className: s(
        "border-input dark:bg-input/30 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-disabled:bg-input/50 dark:has-disabled:bg-input/80 h-8 rounded-none border transition-colors has-disabled:opacity-50 has-[[data-slot=input-group-control]:focus-visible]:ring-1 has-[[data-slot][aria-invalid=true]]:ring-1 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 [[data-slot=combobox-content]_&]:focus-within:border-inherit [[data-slot=combobox-content]_&]:focus-within:ring-0 group/input-group relative flex w-full min-w-0 items-center outline-none has-[>textarea]:h-auto",
        e
      ),
      ...o
    }
  );
}
const Re = X(
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
function Je({
  className: e,
  align: o = "inline-start",
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": o,
      className: s(Re({ align: o }), e),
      onClick: (l) => {
        l.target.closest("button") || l.currentTarget.parentElement?.querySelector("input")?.focus();
      },
      ...t
    }
  );
}
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
function Ie({
  className: e,
  ...o
}) {
  return /* @__PURE__ */ a(
    j,
    {
      "data-slot": "command",
      className: s(
        "bg-popover text-popover-foreground rounded-none flex size-full flex-col overflow-hidden",
        e
      ),
      ...o
    }
  );
}
function Be({
  className: e,
  ...o
}) {
  return /* @__PURE__ */ a("div", { "data-slot": "command-input-wrapper", className: "border-b pb-0", children: /* @__PURE__ */ r(Le, { className: "bg-input/30 border-input/30 h-8 border-none shadow-none! *:data-[slot=input-group-addon]:pl-2!", children: [
    /* @__PURE__ */ a(
      j.Input,
      {
        "data-slot": "command-input",
        className: s(
          "w-full text-xs outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          e
        ),
        ...o
      }
    ),
    /* @__PURE__ */ a(Je, { children: /* @__PURE__ */ a(ne, { className: "size-4 shrink-0 opacity-50" }) })
  ] }) });
}
function De({
  className: e,
  ...o
}) {
  return /* @__PURE__ */ a(
    j.List,
    {
      "data-slot": "command-list",
      className: s(
        "no-scrollbar max-h-72 scroll-py-0 outline-none overflow-x-hidden overflow-y-auto",
        e
      ),
      ...o
    }
  );
}
function Oe({
  className: e,
  ...o
}) {
  return /* @__PURE__ */ a(
    j.Empty,
    {
      "data-slot": "command-empty",
      className: s("py-6 text-center text-xs", e),
      ...o
    }
  );
}
function Ae({
  className: e,
  ...o
}) {
  return /* @__PURE__ */ a(
    j.Group,
    {
      "data-slot": "command-group",
      className: s("text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs", e),
      ...o
    }
  );
}
function He({
  className: e,
  children: o,
  ...t
}) {
  return /* @__PURE__ */ r(
    j.Item,
    {
      "data-slot": "command-item",
      className: s(
        "data-selected:bg-muted data-selected:text-foreground data-selected:*:[svg]:text-foreground relative flex cursor-default items-center gap-2 rounded-none px-2 py-2 text-xs outline-hidden select-none [&_svg:not([class*='size-'])]:size-4 [[data-slot=dialog-content]_&]:rounded-none! group/command-item data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        e
      ),
      ...t,
      children: [
        o,
        /* @__PURE__ */ a(ie, { className: "ml-auto opacity-0 group-has-[[data-slot=command-shortcut]]/command-item:hidden group-data-[checked=true]/command-item:opacity-100" })
      ]
    }
  );
}
function Ve(e, o) {
  let t = e;
  for (const l of o) {
    if (t == null || typeof t != "object") return;
    t = t[l];
  }
  return t;
}
function Ge(e) {
  return e == null ? [] : Array.isArray(e) ? e.map((o, t) => t) : typeof e == "object" ? Object.keys(e) : [];
}
function M(e) {
  return typeof e == "number" ? `[${e}]` : e;
}
function $e(e) {
  return e === null ? { type: "null", color: "secondary" } : Array.isArray(e) ? { type: `array[${e.length}]`, color: "default" } : typeof e == "object" ? { type: `object{${Object.keys(e).length}}`, color: "default" } : typeof e == "number" ? { type: "number", color: "secondary" } : typeof e == "boolean" ? { type: "bool", color: "secondary" } : typeof e == "string" ? { type: "string", color: "secondary" } : { type: typeof e, color: "secondary" };
}
function qe({ data: e, path: o, rootLabel: t = "root", onPathChange: l, onCopyPath: n, pathCopied: p }) {
  const [h, c] = N(!1), d = C(() => Ve(e, o), [e, o]), u = C(() => Ge(d), [d]), i = Array.isArray(d), m = d !== null && typeof d == "object" && u.length > 0, g = (b) => {
    l(o.slice(0, b));
  }, k = (b) => {
    l([...o, b]), c(!1);
  }, w = C(() => u.map((b) => {
    const v = d[b];
    return { key: b, ...$e(v) };
  }), [u, d]);
  return /* @__PURE__ */ r("div", { className: "px-3 py-2 flex-shrink-0 flex items-center gap-2", children: [
    /* @__PURE__ */ a(ze, { className: "flex-1 min-w-0", children: /* @__PURE__ */ r(Pe, { children: [
      /* @__PURE__ */ a(R, { children: o.length === 0 && !m ? /* @__PURE__ */ a(q, { className: "font-mono", children: t }) : /* @__PURE__ */ a(
        $,
        {
          href: "#",
          onClick: (b) => {
            b.preventDefault(), g(0);
          },
          className: "font-mono",
          children: t
        }
      ) }),
      o.map((b, v) => {
        const f = v === o.length - 1 && !m;
        return /* @__PURE__ */ r("span", { className: "contents", children: [
          /* @__PURE__ */ a(E, {}),
          /* @__PURE__ */ a(R, { children: f ? /* @__PURE__ */ a(q, { className: "font-mono", children: M(b) }) : /* @__PURE__ */ a(
            $,
            {
              href: "#",
              onClick: (x) => {
                x.preventDefault(), g(v + 1);
              },
              className: "font-mono",
              children: M(b)
            }
          ) })
        ] }, v);
      }),
      m && /* @__PURE__ */ r(J, { children: [
        /* @__PURE__ */ a(E, {}),
        /* @__PURE__ */ a(R, { children: /* @__PURE__ */ r(he, { open: h, onOpenChange: c, children: [
          /* @__PURE__ */ a(me, { className: "flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer", children: /* @__PURE__ */ a("span", { className: "font-mono text-xs", children: "..." }) }),
          /* @__PURE__ */ a(be, { align: "start", className: "w-48 p-0", children: /* @__PURE__ */ r(Ie, { children: [
            /* @__PURE__ */ a(Be, { placeholder: i ? "Index..." : "Key...", className: "h-7 text-xs" }),
            /* @__PURE__ */ r(De, { className: "max-h-48", children: [
              /* @__PURE__ */ a(Oe, { className: "py-2 text-xs", children: "No results." }),
              /* @__PURE__ */ a(Ae, { heading: i ? `${u.length} items` : `${u.length} keys`, children: w.map(({ key: b, type: v }) => /* @__PURE__ */ r(
                He,
                {
                  value: M(b),
                  onSelect: () => k(b),
                  className: "flex items-center justify-between py-1 text-xs",
                  children: [
                    /* @__PURE__ */ a("span", { className: "font-mono", children: M(b) }),
                    /* @__PURE__ */ a("span", { className: "text-[9px] text-muted-foreground/70", children: v })
                  ]
                },
                String(b)
              )) })
            ] })
          ] }) })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ a(
      "button",
      {
        onClick: n,
        className: "flex-shrink-0 p-1 text-muted-foreground/50 hover:text-foreground transition-colors",
        title: "Copy path",
        children: p ? /* @__PURE__ */ a(F, { className: "h-3 w-3" }) : /* @__PURE__ */ a(z, { className: "h-3 w-3" })
      }
    )
  ] });
}
function Ee(e, o) {
  let t = e;
  for (const l of o) {
    if (t == null || typeof t != "object") return;
    t = t[l];
  }
  return t;
}
function _e(e, o) {
  const t = o ? [o, ...e] : [...e];
  return t.length === 0 ? "[]" : `[${t.map((n) => typeof n == "number" ? String(n) : `"${n}"`).join(", ")}]`;
}
function mo({
  filename: e,
  data: o,
  rootLabel: t,
  showFooter: l = !0,
  footer: n,
  maxHeight: p,
  maxWidth: h
}) {
  const [c, d] = N([]), [u, i] = N(!1), m = C(() => Ee(o, c), [o, c]), g = C(() => {
    try {
      return JSON.stringify(m, null, 2);
    } catch {
      return String(m ?? "undefined");
    }
  }, [m]), k = I((b) => {
    d(b);
  }, []), w = I(() => {
    navigator.clipboard.writeText(_e(c, t)), i(!0), setTimeout(() => i(!1), 2e3);
  }, [c, t]);
  return /* @__PURE__ */ r(
    "div",
    {
      className: "flex flex-col bg-background overflow-hidden",
      style: { maxHeight: p, maxWidth: h, height: "100%" },
      children: [
        /* @__PURE__ */ a("div", { className: "border-b border-border flex-shrink-0", children: /* @__PURE__ */ a(
          qe,
          {
            data: o,
            path: c,
            rootLabel: t || "root",
            onPathChange: k,
            onCopyPath: w,
            pathCopied: u
          }
        ) }),
        /* @__PURE__ */ a("div", { className: "flex-1 min-h-0 overflow-hidden", children: /* @__PURE__ */ a(
          Me,
          {
            filename: e,
            content: g,
            mimeType: "application/json",
            showLineNumbers: !0,
            showFooter: l,
            footer: n,
            maxHeight: "100%"
          }
        ) })
      ]
    }
  );
}
function We({ className: e, ...o }) {
  return /* @__PURE__ */ a("div", { "data-slot": "table-container", className: "relative w-full overflow-x-auto", children: /* @__PURE__ */ a(
    "table",
    {
      "data-slot": "table",
      className: s("w-full caption-bottom text-xs", e),
      ...o
    }
  ) });
}
function Ke({ className: e, ...o }) {
  return /* @__PURE__ */ a(
    "thead",
    {
      "data-slot": "table-header",
      className: s("[&_tr]:border-b", e),
      ...o
    }
  );
}
function Xe({ className: e, ...o }) {
  return /* @__PURE__ */ a(
    "tbody",
    {
      "data-slot": "table-body",
      className: s("[&_tr:last-child]:border-0", e),
      ...o
    }
  );
}
function _({ className: e, ...o }) {
  return /* @__PURE__ */ a(
    "tr",
    {
      "data-slot": "table-row",
      className: s("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", e),
      ...o
    }
  );
}
function W({ className: e, ...o }) {
  return /* @__PURE__ */ a(
    "th",
    {
      "data-slot": "table-head",
      className: s("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0", e),
      ...o
    }
  );
}
function K({ className: e, ...o }) {
  return /* @__PURE__ */ a(
    "td",
    {
      "data-slot": "table-cell",
      className: s("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0", e),
      ...o
    }
  );
}
function bo({
  data: e,
  keyLabel: o = "Name",
  valueLabel: t = "Value",
  showCopy: l = !1,
  showCopyJson: n = !1,
  hideHeader: p = !1
}) {
  const h = Object.entries(e ?? {}), [c, d] = N(null), [u, i] = N(null), m = (f) => {
    d(c === f ? null : f);
  }, g = (f) => {
    f.stopPropagation();
    const x = h.map(([y, T]) => `${y}: ${T}`).join(`
`);
    navigator.clipboard.writeText(x), i("text"), setTimeout(() => i(null), 2e3);
  }, k = (f) => {
    f.stopPropagation(), navigator.clipboard.writeText(JSON.stringify(e, null, 2)), i("json"), setTimeout(() => i(null), 2e3);
  }, w = l || n;
  return /* @__PURE__ */ a("div", { className: "rounded border border-border overflow-hidden", children: /* @__PURE__ */ r(We, { className: "table-fixed w-full", children: [
    !p && /* @__PURE__ */ a(Ke, { children: /* @__PURE__ */ r(_, { className: "bg-muted/30", children: [
      /* @__PURE__ */ a(W, { className: "w-[180px] text-xs font-medium", children: w ? "" : o }),
      /* @__PURE__ */ a(W, { className: "text-xs font-medium", children: /* @__PURE__ */ r("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ a("span", { children: w ? "" : t }),
        w && /* @__PURE__ */ r("div", { className: "flex items-center gap-1", children: [
          l && /* @__PURE__ */ a(
            "button",
            {
              onClick: g,
              className: "p-1 rounded text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors",
              title: "Copy as text",
              children: u === "text" ? /* @__PURE__ */ a(F, { className: "h-3.5 w-3.5 text-green-500" }) : /* @__PURE__ */ a(z, { className: "h-3.5 w-3.5" })
            }
          ),
          n && /* @__PURE__ */ a(
            "button",
            {
              onClick: k,
              className: "p-1 rounded text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors",
              title: "Copy as JSON",
              children: u === "json" ? /* @__PURE__ */ a(F, { className: "h-3.5 w-3.5 text-green-500" }) : /* @__PURE__ */ a(ce, { className: "h-3.5 w-3.5" })
            }
          )
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ a(Xe, { children: h.map(([f, x]) => {
      const y = c === f;
      return /* @__PURE__ */ r(
        _,
        {
          onClick: () => m(f),
          className: s(
            "cursor-pointer transition-colors hover:bg-muted/50",
            y && "bg-muted/30"
          ),
          children: [
            /* @__PURE__ */ a(
              K,
              {
                className: s(
                  "font-mono text-xs py-2 text-muted-foreground align-top",
                  y ? "whitespace-pre-wrap break-all" : "truncate"
                ),
                children: f
              }
            ),
            /* @__PURE__ */ a(
              K,
              {
                className: s(
                  "font-mono text-xs py-2",
                  y ? "whitespace-pre-wrap break-all" : "truncate"
                ),
                children: x
              }
            )
          ]
        },
        f
      );
    }) })
  ] }) });
}
function Ue(e) {
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
function Ye(e) {
  let o;
  if (typeof e == "number")
    o = e;
  else {
    const t = e.toString().match(/^\d+/);
    o = t ? parseInt(t[0], 10) : 0;
  }
  return o >= 200 && o < 300 ? "default" : o >= 400 ? "destructive" : "secondary";
}
function Qe(e, o) {
  return o ? `${e} ${o}` : e.toString();
}
function Ze(e) {
  if (e == null) return !1;
  if (typeof e == "number") return e > 0;
  if (typeof e == "string") {
    const o = e.match(/^\d+/);
    return o ? parseInt(o[0], 10) > 0 : e.length > 0;
  }
  return !1;
}
function eo(e) {
  return e < 1e3 ? `${Math.round(e)}ms` : e < 6e4 ? `${(e / 1e3).toFixed(1)}s` : `${(e / 6e4).toFixed(1)}min`;
}
function oo(e) {
  if (e === 0) return "0 B";
  const o = ["B", "KB", "MB", "GB"], t = Math.min(Math.floor(Math.log(e) / Math.log(1024)), o.length - 1), l = e / Math.pow(1024, t);
  return `${l < 10 ? l.toFixed(1) : Math.round(l)} ${o[t]}`;
}
function fo({
  method: e,
  url: o,
  status: t,
  statusText: l,
  mimeType: n,
  isRedirect: p,
  responseTimeMs: h,
  contentSizeBytes: c,
  failed: d,
  failureReason: u,
  showActionButton: i = !1,
  actionButtonText: m = "Action",
  actionButtonIcon: g,
  onActionButtonClick: k,
  actionButtonVariant: w = "outline",
  actionButtonTitle: b
}) {
  const [v, f] = N(!1), x = Ue(o), y = async () => {
    await navigator.clipboard.writeText(o), f(!0), setTimeout(() => f(!1), 2e3);
  }, T = (oe) => {
    oe.stopPropagation(), k?.();
  }, P = Ze(t), ee = P ? Ye(t) : "secondary";
  return /* @__PURE__ */ r("div", { className: "space-y-2", children: [
    d && u && /* @__PURE__ */ r("div", { className: "flex items-center gap-2 p-2.5 rounded-md bg-destructive/10 border border-destructive/20 text-destructive", children: [
      /* @__PURE__ */ a(se, { className: "h-4 w-4 shrink-0" }),
      /* @__PURE__ */ a("span", { className: "text-sm font-medium truncate", children: u })
    ] }),
    /* @__PURE__ */ r("div", { className: "flex items-center gap-2 flex-wrap", children: [
      /* @__PURE__ */ a(
        S,
        {
          variant: "secondary",
          className: "font-mono font-bold text-xs px-2 py-0.5",
          children: e
        }
      ),
      P && /* @__PURE__ */ a(
        S,
        {
          variant: ee,
          className: "font-mono text-xs px-2 py-0.5",
          children: Qe(t, l)
        }
      ),
      d && !P && /* @__PURE__ */ a(
        S,
        {
          variant: "destructive",
          className: "font-mono text-xs px-2 py-0.5",
          children: "Failed"
        }
      ),
      h !== void 0 && h > 0 && /* @__PURE__ */ r(S, { variant: "outline", className: "text-xs gap-1 text-muted-foreground", children: [
        /* @__PURE__ */ a(de, { className: "h-3 w-3" }),
        eo(h)
      ] }),
      c !== void 0 && c > 0 && /* @__PURE__ */ r(S, { variant: "outline", className: "text-xs gap-1 text-muted-foreground", children: [
        /* @__PURE__ */ a(ue, { className: "h-3 w-3" }),
        oo(c)
      ] }),
      p && /* @__PURE__ */ r(S, { variant: "outline", className: "text-xs gap-1 text-amber-600 dark:text-amber-400 border-amber-300 dark:border-amber-700", children: [
        /* @__PURE__ */ a(ge, { className: "h-3 w-3" }),
        "Redirect"
      ] }),
      n && /* @__PURE__ */ a(S, { variant: "outline", className: "text-xs hidden sm:inline-flex", children: n }),
      /* @__PURE__ */ a("div", { className: "flex-1" }),
      i && /* @__PURE__ */ r(
        O,
        {
          size: "sm",
          variant: w,
          onClick: T,
          className: "shrink-0 gap-1.5 h-7 text-xs",
          title: b,
          children: [
            g && /* @__PURE__ */ a(g, { className: "h-3.5 w-3.5" }),
            m && /* @__PURE__ */ a("span", { className: "hidden sm:inline", children: m })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ r("div", { className: "flex items-center gap-2 min-w-0 bg-muted/40 p-2 rounded-md border border-border/50", children: [
      /* @__PURE__ */ a(pe, { className: "h-4 w-4 shrink-0 text-primary" }),
      /* @__PURE__ */ a("p", { className: "font-mono text-xs text-foreground/80 truncate flex-1 leading-none", title: o, children: x.isDataUrl ? /* @__PURE__ */ r(J, { children: [
        /* @__PURE__ */ a("span", { className: "text-muted-foreground", children: x.protocol }),
        /* @__PURE__ */ a("span", { children: x.host }),
        /* @__PURE__ */ a("span", { className: "text-muted-foreground ml-1", children: x.path })
      ] }) : /* @__PURE__ */ r(J, { children: [
        /* @__PURE__ */ r("span", { className: "text-muted-foreground", children: [
          x.protocol,
          "//"
        ] }),
        /* @__PURE__ */ a("span", { className: "font-medium", children: x.host }),
        /* @__PURE__ */ a("span", { className: "text-foreground/60", children: x.path })
      ] }) }),
      /* @__PURE__ */ a(
        O,
        {
          size: "sm",
          variant: "ghost",
          onClick: y,
          className: "shrink-0 h-6 w-6 p-0 hover:bg-transparent",
          title: "Copy URL",
          children: v ? /* @__PURE__ */ a(F, { className: "h-3.5 w-3.5 text-green-500" }) : /* @__PURE__ */ a(z, { className: "h-3.5 w-3.5 text-muted-foreground hover:text-foreground" })
        }
      )
    ] })
  ] });
}
export {
  ho as ContentTab,
  Me as FileCodeView,
  po as FileTree,
  fo as HttpRequestMetadata,
  mo as JsonCodeView,
  bo as KeyValuePairTable
};
