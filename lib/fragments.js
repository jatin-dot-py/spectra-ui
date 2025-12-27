import { jsxs as u, jsx as a } from "react/jsx-runtime";
import { useMemo as j, useState as T } from "react";
import { ChevronDown as O, ChevronRight as D, X as G, Check as B, Copy as A } from "lucide-react";
import { c as k } from "./utils-B6yFEsav.js";
import { A as f } from "./LazyIcon-C_lOuP2P.js";
import { Prism as w } from "react-syntax-highlighter";
function V(e) {
  const o = [];
  if (!Array.isArray(e)) return o;
  for (const l of e) {
    if (typeof l != "string") continue;
    const t = l.split("/").filter(Boolean);
    if (t.length === 0) continue;
    let r = o, i = "";
    for (let g = 0; g < t.length; g++) {
      const s = t[g];
      i = i ? `${i}/${s}` : s;
      const d = g === t.length - 1;
      let p = r.find((n) => n.name === s);
      p || (p = {
        name: s,
        path: i,
        isFolder: !d,
        children: []
      }, r.push(p)), d || (r = p.children);
    }
  }
  return F(o);
}
function F(e) {
  return e.map((o) => ({ ...o, children: F(o.children) })).sort((o, l) => o.isFolder && !l.isFolder ? -1 : !o.isFolder && l.isFolder ? 1 : o.name.localeCompare(l.name));
}
const b = {
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
}, S = {
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
}, q = {
  iconName: "lucide-react:File",
  language: "text",
  label: "File"
};
function M(e) {
  const o = e.split("/").pop()?.toLowerCase() || "";
  if (S[o])
    return S[o];
  const l = o.split(".");
  if (l.length > 2) {
    const r = l.slice(-2).join(".");
    if (b[r])
      return b[r];
  }
  const t = l.pop() || "";
  return b[t] || q;
}
function W(e) {
  return M(e).iconName;
}
const E = {
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
}, X = "lucide-react:Folder", $ = "lucide-react:FolderOpen";
function Y(e, o = !1) {
  const l = e.toLowerCase(), t = E[l];
  return t || (o ? $ : X);
}
const y = {
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
}, _ = { language: "text", label: "Plain Text" };
function Q(e) {
  const o = e.split(";")[0].trim().toLowerCase();
  return y[o] ? y[o] : o.startsWith("text/") ? { language: "text", label: "Text" } : o.includes("json") ? { language: "json", label: "JSON" } : o.includes("xml") ? { language: "xml", label: "XML" } : o.includes("javascript") ? { language: "javascript", label: "JavaScript" } : _;
}
function z({
  node: e,
  depth: o,
  selectedPath: l,
  onSelect: t,
  expandedFolders: r,
  toggleFolder: i,
  showFileIcons: g = !0,
  showTreeLines: s = !1
}) {
  const d = r.has(e.path), p = l === e.path, n = o * 14;
  if (e.isFolder) {
    const c = Y(e.name, d);
    return /* @__PURE__ */ u("div", { className: "relative", children: [
      s && o > 0 && /* @__PURE__ */ a(
        "div",
        {
          className: "absolute top-0 bottom-0 border-l border-border",
          style: { left: `${(o - 1) * 14 + 14}px` }
        }
      ),
      /* @__PURE__ */ u(
        "button",
        {
          onClick: () => i(e.path),
          className: k(
            "w-full flex items-center gap-1.5 px-2 py-1 text-xs hover:bg-accent/50 rounded-sm transition-colors relative whitespace-nowrap",
            "text-foreground"
          ),
          style: { paddingLeft: `${n + 6}px` },
          children: [
            d ? /* @__PURE__ */ a(O, { className: "h-3.5 w-3.5 text-muted-foreground flex-shrink-0" }) : /* @__PURE__ */ a(D, { className: "h-3.5 w-3.5 text-muted-foreground flex-shrink-0" }),
            /* @__PURE__ */ a(
              f,
              {
                name: c,
                size: 15,
                className: "text-muted-foreground flex-shrink-0",
                showSpinner: !1
              }
            ),
            /* @__PURE__ */ a("span", { children: e.name })
          ]
        }
      ),
      d && /* @__PURE__ */ u("div", { className: "relative", children: [
        s && /* @__PURE__ */ a(
          "div",
          {
            className: "absolute top-0 bottom-0 border-l border-border",
            style: { left: `${o * 14 + 14}px` }
          }
        ),
        e.children.map((m) => /* @__PURE__ */ a(
          z,
          {
            node: m,
            depth: o + 1,
            selectedPath: l,
            onSelect: t,
            expandedFolders: r,
            toggleFolder: i,
            showFileIcons: g,
            showTreeLines: s
          },
          m.path
        ))
      ] })
    ] });
  }
  const h = W(e.name);
  return /* @__PURE__ */ u("div", { className: "relative", children: [
    s && o > 0 && /* @__PURE__ */ a(
      "div",
      {
        className: "absolute top-0 bottom-0 border-l border-border",
        style: { left: `${(o - 1) * 14 + 14}px` }
      }
    ),
    /* @__PURE__ */ u(
      "button",
      {
        onClick: () => t(e.path),
        className: k(
          "w-full flex items-center gap-1.5 px-2 py-1 text-xs rounded-sm transition-colors relative whitespace-nowrap",
          p ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-accent/50"
        ),
        style: { paddingLeft: `${n + 24}px` },
        children: [
          g && /* @__PURE__ */ a(
            f,
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
function re({
  filePaths: e,
  onFileItemClick: o,
  selectedPath: l,
  title: t = "Explorer",
  showFileIcons: r = !0,
  showTreeLines: i = !1
}) {
  const g = j(() => V(e), [e]), [s, d] = T(() => {
    const n = /* @__PURE__ */ new Set();
    if (l) {
      const h = l.split("/");
      let c = "";
      for (let m = 0; m < h.length - 1; m++)
        c = c ? `${c}/${h[m]}` : h[m], n.add(c);
    }
    return n;
  }), p = (n) => {
    d((h) => {
      const c = new Set(h);
      return c.has(n) ? c.delete(n) : c.add(n), c;
    });
  };
  return /* @__PURE__ */ u("div", { className: "flex flex-col h-full border border-border rounded-lg overflow-hidden bg-background", children: [
    /* @__PURE__ */ a("div", { className: "px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b border-border bg-muted/20 flex-shrink-0", children: t }),
    /* @__PURE__ */ a("div", { className: "flex-1 min-h-0 overflow-hidden", children: /* @__PURE__ */ a("div", { className: "h-full w-full overflow-auto", children: /* @__PURE__ */ a("div", { className: "py-1 min-w-max", children: g.map((n) => /* @__PURE__ */ a(
      z,
      {
        node: n,
        depth: 0,
        selectedPath: l ?? null,
        onSelect: o,
        expandedFolders: s,
        toggleFolder: p,
        showFileIcons: r,
        showTreeLines: i
      },
      n.path
    )) }) }) })
  ] });
}
function ne({
  name: e,
  icon: o,
  onClick: l,
  isActive: t = !1,
  onClose: r
}) {
  return /* @__PURE__ */ u(
    "div",
    {
      onClick: l,
      title: e,
      className: k(
        "flex items-center gap-1.5 px-3 py-1.5 text-xs border-r border-border flex-shrink-0 group cursor-pointer transition-colors",
        t ? "bg-background text-foreground" : "bg-muted/30 text-muted-foreground hover:bg-muted/50"
      ),
      children: [
        /* @__PURE__ */ a(
          f,
          {
            name: o,
            size: 14,
            className: "text-muted-foreground flex-shrink-0",
            showSpinner: !1
          }
        ),
        /* @__PURE__ */ a("span", { className: "max-w-32 truncate", children: e }),
        r && /* @__PURE__ */ a(
          "button",
          {
            onClick: (i) => {
              i.stopPropagation(), r();
            },
            className: "ml-1 p-0.5 rounded hover:bg-accent opacity-0 group-hover:opacity-100 transition-opacity",
            children: /* @__PURE__ */ a(G, { className: "h-3 w-3" })
          }
        )
      ]
    }
  );
}
const N = {
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
}, C = {
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
}, L = 5e4;
function K({ content: e, language: o, showLineNumbers: l, wrapLines: t = !1 }) {
  const r = typeof document < "u" && document.documentElement.classList.contains("dark");
  return e.length > L ? /* @__PURE__ */ u(
    "div",
    {
      className: "text-xs font-mono p-3",
      style: { background: "hsl(var(--muted))" },
      children: [
        /* @__PURE__ */ u("div", { className: "text-muted-foreground text-[10px] uppercase mb-2 pb-2 border-b border-border", children: [
          "Syntax highlighting disabled (",
          Math.round(e.length / 1e3),
          "KB)"
        ] }),
        /* @__PURE__ */ a("pre", { className: t ? "whitespace-pre-wrap break-all overflow-x-hidden" : "whitespace-pre", children: e })
      ]
    }
  ) : t ? /* @__PURE__ */ a(
    w,
    {
      language: o,
      style: r ? N : C,
      showLineNumbers: l,
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
    w,
    {
      language: o,
      style: r ? N : C,
      showLineNumbers: l,
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
function Z(e) {
  if (e.length > L) return { content: e, isJson: !1 };
  try {
    return { content: JSON.stringify(JSON.parse(e), null, 2), isJson: !0 };
  } catch {
    return { content: e, isJson: !1 };
  }
}
function ie({
  filename: e,
  content: o,
  mimeType: l,
  showLineNumbers: t = !0,
  showFooter: r = !0,
  footer: i,
  wrapLines: g = !1,
  maxHeight: s,
  maxWidth: d
}) {
  const [p, n] = T(!1), h = M(e), c = l ? Q(l) : null, m = c?.language ?? h.language, R = c?.label ?? h.label, { content: J, isJson: x } = j(() => Z(o), [o]), P = x ? "json" : m, I = () => {
    navigator.clipboard.writeText(o), n(!0), setTimeout(() => n(!1), 2e3);
  }, v = i?.left ?? e, H = i?.right ?? (x ? "JSON" : R);
  return /* @__PURE__ */ u(
    "div",
    {
      className: "relative bg-background group",
      style: { maxHeight: s, maxWidth: d, overflow: "hidden", display: "flex", flexDirection: "column" },
      children: [
        /* @__PURE__ */ a(
          "button",
          {
            onClick: I,
            className: "absolute top-2 right-2 z-10 p-1.5 rounded bg-muted/90 hover:bg-muted text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity",
            children: p ? /* @__PURE__ */ a(B, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ a(A, { className: "h-3.5 w-3.5" })
          }
        ),
        /* @__PURE__ */ a("div", { style: { flex: 1, minHeight: 0, overflow: g ? "hidden auto" : "auto" }, children: /* @__PURE__ */ a(
          K,
          {
            content: J,
            language: P,
            showLineNumbers: t,
            wrapLines: g
          }
        ) }),
        r && /* @__PURE__ */ u("div", { className: "flex items-center justify-between gap-4 px-3 py-1 border-t border-border bg-muted/20 text-xs text-muted-foreground", style: { flexShrink: 0 }, children: [
          /* @__PURE__ */ a("span", { className: "truncate", title: v, children: v }),
          /* @__PURE__ */ a("span", { className: "uppercase", style: { flexShrink: 0 }, children: H })
        ] })
      ]
    }
  );
}
export {
  ne as ContentTab,
  ie as FileCodeView,
  re as FileTree
};
