import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { Children as N } from "react";
import { T as w, a as C, b as k, c as y } from "./tooltip-Cep25X0w.js";
import { c as s } from "./utils-B6yFEsav.js";
import { AlertCircle as A, AlertTriangle as L, ExternalLink as T } from "lucide-react";
function I({
  label: i,
  icon: n,
  children: l,
  helpText: t,
  helpUrl: a,
  error: o,
  warning: d
}) {
  const m = N.count(l) > 1, c = !!o, h = !c && !!d, x = o || d, f = /* @__PURE__ */ r(
    "span",
    {
      className: s(
        "text-xs text-muted-foreground inline-flex items-center gap-1.5",
        (t || a) && "cursor-help"
      ),
      children: [
        n && /* @__PURE__ */ e(n, { className: "h-3.5 w-3.5" }),
        /* @__PURE__ */ e("span", { className: t || a ? "border-b border-dotted border-muted-foreground/50" : "", children: i })
      ]
    }
  ), g = t || a ? /* @__PURE__ */ e(w, { delayDuration: 200, children: /* @__PURE__ */ r(C, { children: [
    /* @__PURE__ */ e(k, { asChild: !0, children: f }),
    /* @__PURE__ */ r(y, { side: "top", className: "max-w-64 text-xs space-y-1.5", children: [
      t && /* @__PURE__ */ e("p", { children: t }),
      a && /* @__PURE__ */ r(
        "a",
        {
          href: a,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-1 text-chart-1 hover:underline",
          children: [
            "Learn more ",
            /* @__PURE__ */ e(T, { className: "h-3 w-3" })
          ]
        }
      )
    ] })
  ] }) }) : f, v = () => {
    if (!m)
      return l;
    const p = N.toArray(l);
    return p.map((b, u) => /* @__PURE__ */ r("div", { className: "flex items-center", children: [
      b,
      u < p.length - 1 && /* @__PURE__ */ e("div", { className: "w-px h-4 bg-border/50 mx-0.5" })
    ] }, u));
  };
  return /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
    /* @__PURE__ */ r("div", { className: s("flex items-center gap-3"), children: [
      /* @__PURE__ */ e("div", { className: "flex-shrink-0 w-20", children: g }),
      /* @__PURE__ */ e(
        "div",
        {
          className: s(
            "min-w-0 flex items-center gap-1 flex-1 rounded-md transition-colors",
            m && "bg-muted/30 p-0.5"
          ),
          children: v()
        }
      )
    ] }),
    x && /* @__PURE__ */ r("div", { className: s("flex items-start gap-3"), children: [
      /* @__PURE__ */ e("div", { className: "flex-shrink-0 w-20" }),
      /* @__PURE__ */ r(
        "div",
        {
          className: s(
            "flex items-center gap-1.5 text-xs",
            c && "text-destructive",
            h && "text-yellow-600 dark:text-yellow-500"
          ),
          children: [
            c && /* @__PURE__ */ e(A, { className: "h-3 w-3 flex-shrink-0" }),
            h && /* @__PURE__ */ e(L, { className: "h-3 w-3 flex-shrink-0" }),
            /* @__PURE__ */ e("span", { children: x })
          ]
        }
      )
    ] })
  ] });
}
function P({ children: i, className: n }) {
  return /* @__PURE__ */ e("div", { className: s("space-y-2", n), children: i });
}
export {
  I as LabeledInput,
  P as LabeledInputGroup
};
