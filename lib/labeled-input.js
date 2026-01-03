import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { Children as u } from "react";
import { T as x, a as b, b as g, c as N } from "./tooltip-Cep25X0w.js";
import { c as i } from "./utils-B6yFEsav.js";
import { ExternalLink as v } from "lucide-react";
function j({
  label: o,
  icon: a,
  children: s,
  helpText: n,
  helpUrl: t
}) {
  const l = u.count(s) > 1, c = /* @__PURE__ */ r(
    "span",
    {
      className: i(
        "text-xs text-muted-foreground inline-flex items-center gap-1.5",
        (n || t) && "cursor-help"
      ),
      children: [
        a && /* @__PURE__ */ e(a, { className: "h-3.5 w-3.5" }),
        /* @__PURE__ */ e("span", { className: n || t ? "border-b border-dotted border-muted-foreground/50" : "", children: o })
      ]
    }
  ), p = n || t ? /* @__PURE__ */ e(x, { delayDuration: 200, children: /* @__PURE__ */ r(b, { children: [
    /* @__PURE__ */ e(g, { asChild: !0, children: c }),
    /* @__PURE__ */ r(N, { side: "top", className: "max-w-64 text-xs space-y-1.5", children: [
      n && /* @__PURE__ */ e("p", { children: n }),
      t && /* @__PURE__ */ r(
        "a",
        {
          href: t,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-1 text-chart-1 hover:underline",
          children: [
            "Learn more ",
            /* @__PURE__ */ e(v, { className: "h-3 w-3" })
          ]
        }
      )
    ] })
  ] }) }) : c, h = () => {
    if (!l)
      return s;
    const d = u.toArray(s);
    return d.map((f, m) => /* @__PURE__ */ r("div", { className: "flex items-center", children: [
      f,
      m < d.length - 1 && /* @__PURE__ */ e("div", { className: "w-px h-4 bg-border/50 mx-0.5" })
    ] }, m));
  };
  return /* @__PURE__ */ r("div", { className: i("flex items-center gap-3"), children: [
    /* @__PURE__ */ e("div", { className: "flex-shrink-0 w-20", children: p }),
    /* @__PURE__ */ e(
      "div",
      {
        className: i(
          "min-w-0 flex items-center gap-1",
          "flex-1",
          l && "rounded-md bg-muted/30 p-0.5"
        ),
        children: h()
      }
    )
  ] });
}
function A({ children: o, className: a }) {
  return /* @__PURE__ */ e("div", { className: i("space-y-2", a), children: o });
}
export {
  j as LabeledInput,
  A as LabeledInputGroup
};
