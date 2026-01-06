import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { Children as N } from "react";
import { T as y, a as T, b as A, c as L } from "./tooltip-Cep25X0w.js";
import { c as t } from "./utils-B6yFEsav.js";
import { AlertCircle as j, AlertTriangle as E, HelpCircle as W, ExternalLink as M } from "lucide-react";
function _({
  label: s,
  icon: n,
  children: a,
  helpText: l,
  helpUrl: i,
  error: d,
  warning: m
}) {
  const h = N.count(a) > 1, c = !!d, p = !c && !!m, x = d || m, o = s.split(" "), v = o.length > 0 ? o.pop() : s, f = o.join(" "), w = f ? `${f} ` : "", b = /* @__PURE__ */ r("span", { className: "text-xs text-muted-foreground block leading-snug", children: [
    n && /* @__PURE__ */ e(n, { className: "h-3.5 w-3.5 inline-block align-middle mr-1.5 -mt-0.5" }),
    /* @__PURE__ */ r("span", { className: "align-middle", children: [
      w,
      /* @__PURE__ */ r("span", { className: "whitespace-nowrap inline-flex items-center gap-1", children: [
        v,
        (l || i) && /* @__PURE__ */ e(y, { delayDuration: 200, children: /* @__PURE__ */ r(T, { children: [
          /* @__PURE__ */ e(A, { asChild: !0, children: /* @__PURE__ */ e(W, { className: "h-3 w-3 cursor-help text-muted-foreground/50 hover:text-muted-foreground transition-colors flex-shrink-0" }) }),
          /* @__PURE__ */ r(L, { side: "top", className: "max-w-64 text-xs space-y-1.5", children: [
            l && /* @__PURE__ */ e("p", { children: l }),
            i && /* @__PURE__ */ r(
              "a",
              {
                href: i,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center gap-1 text-chart-1 hover:underline",
                children: [
                  "Learn more ",
                  /* @__PURE__ */ e(M, { className: "h-3 w-3" })
                ]
              }
            )
          ] })
        ] }) })
      ] })
    ] })
  ] }), k = () => {
    if (!h)
      return a;
    const u = N.toArray(a);
    return u.map((C, g) => /* @__PURE__ */ r("div", { className: "flex items-center", children: [
      C,
      g < u.length - 1 && /* @__PURE__ */ e("div", { className: "w-px h-4 bg-border/50 mx-0.5" })
    ] }, g));
  };
  return /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
    /* @__PURE__ */ r("div", { className: t("flex items-center gap-3"), children: [
      /* @__PURE__ */ e("div", { className: "flex-shrink-0 w-20", children: b }),
      /* @__PURE__ */ e(
        "div",
        {
          className: t(
            "min-w-0 flex items-center gap-1 flex-1 rounded-md transition-colors",
            h && "bg-muted/30 p-0.5"
          ),
          children: k()
        }
      )
    ] }),
    x && /* @__PURE__ */ r("div", { className: t("flex items-start gap-3"), children: [
      /* @__PURE__ */ e("div", { className: "flex-shrink-0 w-20" }),
      /* @__PURE__ */ r(
        "div",
        {
          className: t(
            "flex items-center gap-1.5 text-xs",
            c && "text-destructive",
            p && "text-yellow-600 dark:text-yellow-500"
          ),
          children: [
            c && /* @__PURE__ */ e(j, { className: "h-3 w-3 flex-shrink-0" }),
            p && /* @__PURE__ */ e(E, { className: "h-3 w-3 flex-shrink-0" }),
            /* @__PURE__ */ e("span", { children: x })
          ]
        }
      )
    ] })
  ] });
}
function $({ children: s, className: n }) {
  return /* @__PURE__ */ e("div", { className: t("space-y-2", n), children: s });
}
export {
  _ as LabeledInput,
  $ as LabeledInputGroup
};
