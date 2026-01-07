import { jsxs as s, jsx as e } from "react/jsx-runtime";
import { Children as g } from "react";
import { c as l } from "./utils-B6yFEsav.js";
import { AlertCircle as y, AlertTriangle as A } from "lucide-react";
import { I as j } from "./InfoPopover-CfMOxnPa.js";
function T({
  label: n,
  icon: t,
  children: a,
  helpText: c,
  helpUrl: N,
  error: o,
  warning: m
}) {
  const d = g.count(a) > 1, r = !!o, p = !r && !!m, h = o || m, i = n.split(" "), v = i.length > 0 ? i.pop() : n, x = i.join(" "), w = x ? `${x} ` : "", b = /* @__PURE__ */ s("span", { className: "text-xs text-muted-foreground block leading-snug", children: [
    t && /* @__PURE__ */ e(t, { className: "h-3.5 w-3.5 inline-block align-middle mr-1.5 -mt-0.5" }),
    /* @__PURE__ */ s("span", { className: "align-middle", children: [
      w,
      /* @__PURE__ */ s("span", { className: "whitespace-nowrap inline-flex items-center gap-1", children: [
        v,
        c && /* @__PURE__ */ e(
          j,
          {
            description: c,
            referenceUrl: N,
            className: "flex-shrink-0"
          }
        )
      ] })
    ] })
  ] }), k = () => {
    if (!d)
      return a;
    const f = g.toArray(a);
    return f.map((C, u) => /* @__PURE__ */ s("div", { className: "flex items-center", children: [
      C,
      u < f.length - 1 && /* @__PURE__ */ e("div", { className: "w-px h-4 bg-border/50 mx-0.5" })
    ] }, u));
  };
  return /* @__PURE__ */ s("div", { className: "flex flex-col gap-1", children: [
    /* @__PURE__ */ s("div", { className: l("flex items-center gap-3"), children: [
      /* @__PURE__ */ e("div", { className: "flex-shrink-0 w-20", children: b }),
      /* @__PURE__ */ e(
        "div",
        {
          className: l(
            "min-w-0 flex items-center gap-1 flex-1 rounded-md transition-colors",
            d && "bg-muted/30 p-0.5"
          ),
          children: k()
        }
      )
    ] }),
    h && /* @__PURE__ */ s("div", { className: l("flex items-start gap-3"), children: [
      /* @__PURE__ */ e("div", { className: "flex-shrink-0 w-20" }),
      /* @__PURE__ */ s(
        "div",
        {
          className: l(
            "flex items-center gap-1.5 text-xs",
            r && "text-destructive",
            p && "text-yellow-600 dark:text-yellow-500"
          ),
          children: [
            r && /* @__PURE__ */ e(y, { className: "h-3 w-3 flex-shrink-0" }),
            p && /* @__PURE__ */ e(A, { className: "h-3 w-3 flex-shrink-0" }),
            /* @__PURE__ */ e("span", { children: h })
          ]
        }
      )
    ] })
  ] });
}
function G({ children: n, className: t }) {
  return /* @__PURE__ */ e("div", { className: l("space-y-2", t), children: n });
}
export {
  T as LabeledInput,
  G as LabeledInputGroup
};
