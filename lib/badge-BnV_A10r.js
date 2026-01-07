import { jsx as o } from "react/jsx-runtime";
import { memo as y, useState as p, useEffect as k, Component as P } from "react";
import { Popover as s, Slot as I } from "radix-ui";
import { c as n } from "./utils-B6yFEsav.js";
import { Loader2 as E } from "lucide-react";
import { cva as $ } from "class-variance-authority";
function T({
  ...t
}) {
  return /* @__PURE__ */ o(s.Root, { "data-slot": "popover", ...t });
}
function U({
  ...t
}) {
  return /* @__PURE__ */ o(s.Trigger, { "data-slot": "popover-trigger", ...t });
}
function V({
  className: t,
  align: r = "center",
  sideOffset: e = 4,
  ...a
}) {
  return /* @__PURE__ */ o(s.Portal, { children: /* @__PURE__ */ o(
    s.Content,
    {
      "data-slot": "popover-content",
      align: r,
      sideOffset: e,
      className: n(
        "bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 flex flex-col gap-2.5 rounded-none p-2.5 text-xs shadow-md ring-1 duration-100 z-50 w-72 origin-(--radix-popover-content-transform-origin) outline-hidden",
        t
      ),
      ...a
    }
  ) });
}
function O({
  ...t
}) {
  return /* @__PURE__ */ o(s.Anchor, { "data-slot": "popover-anchor", ...t });
}
const f = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map();
async function A(t) {
  const [r, e] = m(t);
  if (!r || !e) return null;
  try {
    return (await C(r))[e] ?? null;
  } catch (a) {
    return console.warn(`Failed to load icon: ${t}`, a), null;
  }
}
async function C(t) {
  if (f.has(t))
    return f.get(t);
  if (d.has(t))
    return d.get(t);
  const r = N(t);
  d.set(t, r);
  try {
    const e = await r;
    return f.set(t, e), e;
  } finally {
    d.delete(t);
  }
}
async function N(t) {
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
function m(t) {
  const r = t.indexOf(":");
  return r === -1 ? [null, null] : [t.slice(0, r), t.slice(r + 1)];
}
function W(t, r) {
  return `${t}:${r}`;
}
class j extends P {
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
const q = y(function({
  name: r,
  size: e = 20,
  className: a,
  showSpinner: l = !0
}) {
  const [g, h] = p(null), [v, c] = p(!1), [b, i] = p(!0);
  if (k(() => {
    let u = !0;
    if (i(!0), c(!1), h(null), !r || !r.includes(":")) {
      i(!1), c(!0);
      return;
    }
    return A(r).then((w) => {
      u && w ? (h(() => w), i(!1)) : u && (c(!0), i(!1));
    }).catch(() => {
      u && (c(!0), i(!1));
    }), () => {
      u = !1;
    };
  }, [r]), b)
    return l ? /* @__PURE__ */ o(
      E,
      {
        className: n("animate-spin text-muted-foreground", a),
        style: { width: e, height: e }
      }
    ) : /* @__PURE__ */ o(
      "div",
      {
        className: n("animate-pulse bg-muted rounded", a),
        style: { width: e, height: e }
      }
    );
  if (v || !g)
    return /* @__PURE__ */ o(
      "div",
      {
        className: n("flex items-center justify-center text-muted-foreground/50 text-xs", a),
        style: { width: e, height: e },
        children: "?"
      }
    );
  const x = /* @__PURE__ */ o(
    "div",
    {
      className: n("flex items-center justify-center text-muted-foreground/50 text-xs", a),
      style: { width: e, height: e },
      children: "!"
    }
  );
  return /* @__PURE__ */ o(j, { fallback: x, children: /* @__PURE__ */ o(g, { size: e, className: a }) });
});
function G(t) {
  const [, r] = m(t);
  return r ?? t;
}
function H(t) {
  const [r] = m(t);
  return r ?? "unknown";
}
const L = $(
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
function J({
  className: t,
  variant: r = "default",
  asChild: e = !1,
  ...a
}) {
  const l = e ? I.Root : "span";
  return /* @__PURE__ */ o(
    l,
    {
      "data-slot": "badge",
      "data-variant": r,
      className: n(L({ variant: r }), t),
      ...a
    }
  );
}
export {
  q as A,
  J as B,
  T as P,
  O as a,
  V as b,
  U as c,
  H as d,
  W as f,
  G as g
};
