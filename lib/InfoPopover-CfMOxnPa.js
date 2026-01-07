import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { HelpCircle as s, ExternalLink as a } from "lucide-react";
import { P as l, c, b as m, d } from "./popover-BC-4GKqp.js";
import { c as p } from "./utils-B6yFEsav.js";
function g({
  description: n,
  referenceUrl: o,
  referenceLabel: t = "Learn more",
  className: i
}) {
  return /* @__PURE__ */ r(l, { children: [
    /* @__PURE__ */ e(c, { asChild: !0, children: /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: p(
          "inline-flex items-center justify-center rounded-sm p-0.5 transition-colors",
          "text-muted-foreground/50 hover:text-muted-foreground hover:bg-muted/50",
          "focus:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          i
        ),
        "aria-label": "More information",
        children: /* @__PURE__ */ e(s, { className: "h-3 w-3" })
      }
    ) }),
    /* @__PURE__ */ r(m, { side: "top", align: "start", className: "max-w-64", children: [
      /* @__PURE__ */ e(d, { children: n }),
      o && /* @__PURE__ */ r(
        "a",
        {
          href: o,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-1 text-xs text-chart-1 hover:underline",
          children: [
            t,
            /* @__PURE__ */ e(a, { className: "h-3 w-3" })
          ]
        }
      )
    ] })
  ] });
}
export {
  g as I
};
