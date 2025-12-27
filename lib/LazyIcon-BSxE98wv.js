import { jsxs as y, jsx as a } from "react/jsx-runtime";
import { memo as I, useState as d, useEffect as S, Component as E } from "react";
import { ScrollArea as s } from "radix-ui";
import { c as n } from "./utils-B6yFEsav.js";
import { Loader2 as A } from "lucide-react";
function F({
  className: r,
  children: t,
  ...e
}) {
  return /* @__PURE__ */ y(
    s.Root,
    {
      "data-slot": "scroll-area",
      className: n("relative", r),
      ...e,
      children: [
        /* @__PURE__ */ a(
          s.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children: t
          }
        ),
        /* @__PURE__ */ a(N, {}),
        /* @__PURE__ */ a(s.Corner, {})
      ]
    }
  );
}
function N({
  className: r,
  orientation: t = "vertical",
  ...e
}) {
  return /* @__PURE__ */ a(
    s.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      "data-orientation": t,
      orientation: t,
      className: n(
        "data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent flex touch-none p-px transition-colors select-none",
        r
      ),
      ...e,
      children: /* @__PURE__ */ a(
        s.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "rounded-none bg-border relative flex-1"
        }
      )
    }
  );
}
const m = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
async function k(r) {
  const [t, e] = f(r);
  if (!t || !e) return null;
  try {
    return (await $(t))[e] ?? null;
  } catch (o) {
    return console.warn(`Failed to load icon: ${r}`, o), null;
  }
}
async function $(r) {
  if (m.has(r))
    return m.get(r);
  if (u.has(r))
    return u.get(r);
  const t = j(r);
  u.set(r, t);
  try {
    const e = await t;
    return m.set(r, e), e;
  } finally {
    u.delete(r);
  }
}
async function j(r) {
  if (r === "lucide-react")
    return await import("lucide-react");
  if (r.startsWith("react-icons/")) {
    const t = r.replace("react-icons/", "");
    switch (t) {
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
        throw new Error(`Unknown react-icons pack: ${t}`);
    }
  }
  throw new Error(`Unknown icon pack: ${r}`);
}
function f(r) {
  const t = r.indexOf(":");
  return t === -1 ? [null, null] : [r.slice(0, t), r.slice(t + 1)];
}
function U(r, t) {
  return `${r}:${t}`;
}
class L extends E {
  constructor(t) {
    super(t), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}
const O = I(function({
  name: t,
  size: e = 20,
  className: o,
  showSpinner: g = !0
}) {
  const [p, w] = d(null), [x, c] = d(!1), [b, i] = d(!0);
  if (S(() => {
    let l = !0;
    if (i(!0), c(!1), w(null), !t || !t.includes(":")) {
      i(!1), c(!0);
      return;
    }
    return k(t).then((h) => {
      l && h ? (w(() => h), i(!1)) : l && (c(!0), i(!1));
    }).catch(() => {
      l && (c(!0), i(!1));
    }), () => {
      l = !1;
    };
  }, [t]), b)
    return g ? /* @__PURE__ */ a(
      A,
      {
        className: n("animate-spin text-muted-foreground", o),
        style: { width: e, height: e }
      }
    ) : /* @__PURE__ */ a(
      "div",
      {
        className: n("animate-pulse bg-muted rounded", o),
        style: { width: e, height: e }
      }
    );
  if (x || !p)
    return /* @__PURE__ */ a(
      "div",
      {
        className: n("flex items-center justify-center text-muted-foreground/50 text-xs", o),
        style: { width: e, height: e },
        children: "?"
      }
    );
  const v = /* @__PURE__ */ a(
    "div",
    {
      className: n("flex items-center justify-center text-muted-foreground/50 text-xs", o),
      style: { width: e, height: e },
      children: "!"
    }
  );
  return /* @__PURE__ */ a(L, { fallback: v, children: /* @__PURE__ */ a(p, { size: e, className: o }) });
});
function R(r) {
  const [, t] = f(r);
  return t ?? r;
}
function T(r) {
  const [t] = f(r);
  return t ?? "unknown";
}
export {
  O as A,
  F as S,
  T as a,
  N as b,
  U as f,
  R as g
};
