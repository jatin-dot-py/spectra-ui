import { jsx as n } from "react/jsx-runtime";
import { memo as I, useState as m, useEffect as E, Component as b } from "react";
import { c as s } from "./utils-B6yFEsav.js";
import { Loader2 as k } from "lucide-react";
const l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
async function v(t) {
  const [r, e] = p(t);
  if (!r || !e) return null;
  try {
    return (await $(r))[e] ?? null;
  } catch (a) {
    return console.warn(`Failed to load icon: ${t}`, a), null;
  }
}
async function $(t) {
  if (l.has(t))
    return l.get(t);
  if (u.has(t))
    return u.get(t);
  const r = L(t);
  u.set(t, r);
  try {
    const e = await r;
    return l.set(t, e), e;
  } finally {
    u.delete(t);
  }
}
async function L(t) {
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
function p(t) {
  const r = t.indexOf(":");
  return r === -1 ? [null, null] : [t.slice(0, r), t.slice(r + 1)];
}
function C(t, r) {
  return `${t}:${r}`;
}
class M extends b {
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
const D = I(function({
  name: r,
  size: e = 20,
  className: a,
  showSpinner: h = !0
}) {
  const [f, w] = m(null), [g, o] = m(!1), [y, i] = m(!0);
  if (E(() => {
    let c = !0;
    if (i(!0), o(!1), w(null), !r || !r.includes(":")) {
      i(!1), o(!0);
      return;
    }
    return v(r).then((d) => {
      c && d ? (w(() => d), i(!1)) : c && (o(!0), i(!1));
    }).catch(() => {
      c && (o(!0), i(!1));
    }), () => {
      c = !1;
    };
  }, [r]), y)
    return h ? /* @__PURE__ */ n(
      k,
      {
        className: s("animate-spin text-muted-foreground", a),
        style: { width: e, height: e }
      }
    ) : /* @__PURE__ */ n(
      "div",
      {
        className: s("animate-pulse bg-muted rounded", a),
        style: { width: e, height: e }
      }
    );
  if (g || !f)
    return /* @__PURE__ */ n(
      "div",
      {
        className: s("flex items-center justify-center text-muted-foreground/50 text-xs", a),
        style: { width: e, height: e },
        children: "?"
      }
    );
  const x = /* @__PURE__ */ n(
    "div",
    {
      className: s("flex items-center justify-center text-muted-foreground/50 text-xs", a),
      style: { width: e, height: e },
      children: "!"
    }
  );
  return /* @__PURE__ */ n(M, { fallback: x, children: /* @__PURE__ */ n(f, { size: e, className: a }) });
});
function F(t) {
  const [, r] = p(t);
  return r ?? t;
}
function S(t) {
  const [r] = p(t);
  return r ?? "unknown";
}
export {
  D as A,
  S as a,
  C as f,
  F as g
};
