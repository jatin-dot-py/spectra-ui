import { jsx as i } from "react/jsx-runtime";
import { memo as x, useState as l, useEffect as y, Component as k } from "react";
import { c as o } from "./utils-B6yFEsav.js";
import { Loader2 as I } from "lucide-react";
import { cva as E } from "class-variance-authority";
import { Slot as $ } from "radix-ui";
const m = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
async function j(t) {
  const [r, e] = f(t);
  if (!r || !e) return null;
  try {
    return (await L(r))[e] ?? null;
  } catch (a) {
    return console.warn(`Failed to load icon: ${t}`, a), null;
  }
}
async function L(t) {
  if (m.has(t))
    return m.get(t);
  if (u.has(t))
    return u.get(t);
  const r = M(t);
  u.set(t, r);
  try {
    const e = await r;
    return m.set(t, e), e;
  } finally {
    u.delete(t);
  }
}
async function M(t) {
  if (t === "lucide-react")
    return await import("lucide-react");
  if (t.startsWith("react-icons/")) {
    const r = t.replace("react-icons/", "");
    switch (r) {
      case "ai":
        return await import("react-icons/ai");
      case "bi":
        return await import("react-icons/bi");
      case "bs":
        return await import("react-icons/bs");
      case "cg":
        return await import("react-icons/cg");
      case "ci":
        return await import("react-icons/ci");
      case "di":
        return await import("react-icons/di");
      case "fa":
        return await import("react-icons/fa");
      case "fa6":
        return await import("react-icons/fa6");
      case "fc":
        return await import("react-icons/fc");
      case "fi":
        return await import("react-icons/fi");
      case "gi":
        return await import("react-icons/gi");
      case "go":
        return await import("react-icons/go");
      case "gr":
        return await import("react-icons/gr");
      case "hi":
        return await import("react-icons/hi");
      case "hi2":
        return await import("react-icons/hi2");
      case "im":
        return await import("react-icons/im");
      case "io":
        return await import("react-icons/io");
      case "io5":
        return await import("react-icons/io5");
      case "lia":
        return await import("react-icons/lia");
      case "lu":
        return await import("react-icons/lu");
      case "md":
        return await import("react-icons/md");
      case "pi":
        return await import("react-icons/pi");
      case "ri":
        return await import("react-icons/ri");
      case "rx":
        return await import("react-icons/rx");
      case "si":
        return await import("react-icons/si");
      case "sl":
        return await import("react-icons/sl");
      case "tb":
        return await import("react-icons/tb");
      case "tfi":
        return await import("react-icons/tfi");
      case "ti":
        return await import("react-icons/ti");
      case "vsc":
        return await import("react-icons/vsc");
      case "wi":
        return await import("react-icons/wi");
      default:
        throw new Error(`Unknown react-icons pack: ${r}`);
    }
  }
  throw new Error(`Unknown icon pack: ${t}`);
}
function f(t) {
  const r = t.indexOf(":");
  return r === -1 ? [null, null] : [t.slice(0, r), t.slice(r + 1)];
}
function U(t, r) {
  return `${t}:${r}`;
}
class N extends k {
  constructor(r) {
    super(r), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}
const V = x(function({
  name: r,
  size: e = 20,
  className: a,
  showSpinner: d = !0
}) {
  const [p, w] = l(null), [h, s] = l(!1), [v, n] = l(!0);
  if (y(() => {
    let c = !0;
    if (n(!0), s(!1), w(null), !r || !r.includes(":")) {
      n(!1), s(!0);
      return;
    }
    return j(r).then((g) => {
      c && g ? (w(() => g), n(!1)) : c && (s(!0), n(!1));
    }).catch(() => {
      c && (s(!0), n(!1));
    }), () => {
      c = !1;
    };
  }, [r]), v)
    return d ? /* @__PURE__ */ i(
      I,
      {
        className: o("animate-spin text-muted-foreground", a),
        style: { width: e, height: e }
      }
    ) : /* @__PURE__ */ i(
      "div",
      {
        className: o("animate-pulse bg-muted rounded", a),
        style: { width: e, height: e }
      }
    );
  if (h || !p)
    return /* @__PURE__ */ i(
      "div",
      {
        className: o("flex items-center justify-center text-muted-foreground/50 text-xs", a),
        style: { width: e, height: e },
        children: "?"
      }
    );
  const b = /* @__PURE__ */ i(
    "div",
    {
      className: o("flex items-center justify-center text-muted-foreground/50 text-xs", a),
      style: { width: e, height: e },
      children: "!"
    }
  );
  return /* @__PURE__ */ i(N, { fallback: b, children: /* @__PURE__ */ i(p, { size: e, className: a }) });
});
function O(t) {
  const [, r] = f(t);
  return r ?? t;
}
function R(t) {
  const [r] = f(t);
  return r ?? "unknown";
}
const P = E(
  "h-5 gap-1 rounded-none border border-transparent px-2 py-0.5 text-xs font-medium transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:size-3! inline-flex items-center justify-center w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-colors overflow-hidden group/badge",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        destructive: "bg-destructive/10 [a]:hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive dark:bg-destructive/20",
        outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function W({
  className: t,
  variant: r = "default",
  asChild: e = !1,
  ...a
}) {
  const d = e ? $.Root : "span";
  return /* @__PURE__ */ i(
    d,
    {
      "data-slot": "badge",
      "data-variant": r,
      className: o(P({ variant: r }), t),
      ...a
    }
  );
}
export {
  V as A,
  W as B,
  R as a,
  U as f,
  O as g
};
