import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { Children as m } from "react";
import { T as x, a as b, b as g, c as N } from "./tooltip-Cep25X0w.js";
import { c as a } from "./utils-B6yFEsav.js";
import { ExternalLink as v } from "lucide-react";
function j({
  label: h,
  icon: o,
  children: i,
  helpText: n,
  helpUrl: t
}) {
  const s = m.count(i) > 1, l = /* @__PURE__ */ r(
    "span",
    {
      className: a(
        "text-xs text-muted-foreground inline-flex items-center gap-1.5",
        (n || t) && "cursor-help"
      ),
      children: [
        o && /* @__PURE__ */ e(o, { className: "h-3.5 w-3.5" }),
        /* @__PURE__ */ e("span", { className: n || t ? "border-b border-dotted border-muted-foreground/50" : "", children: h })
      ]
    }
  ), p = n || t ? /* @__PURE__ */ e(x, { delayDuration: 200, children: /* @__PURE__ */ r(b, { children: [
    /* @__PURE__ */ e(g, { asChild: !0, children: l }),
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
  ] }) }) : l, u = () => {
    if (!s)
      return i;
    const c = m.toArray(i);
    return c.map((f, d) => /* @__PURE__ */ r("div", { className: "flex items-center", children: [
      f,
      d < c.length - 1 && /* @__PURE__ */ e("div", { className: "w-px h-4 bg-border/50 mx-0.5" })
    ] }, d));
  };
  return /* @__PURE__ */ r("div", { className: a("flex items-center gap-3"), children: [
    /* @__PURE__ */ e("div", { className: "flex-shrink-0 w-20", children: p }),
    /* @__PURE__ */ e(
      "div",
      {
        className: a(
          "min-w-0 flex items-center gap-1",
          "flex-1",
          s && "rounded-md bg-muted/30 p-0.5"
        ),
        children: u()
      }
    )
  ] });
}
export {
  j as LabeledInput
};
