import { jsxs as c, jsx as t } from "react/jsx-runtime";
import { B as p } from "./button-DHQhRgTM.js";
import { S as u } from "./spinner-D5WcaOmH.js";
import { a as h, b as g, c as x } from "./tooltip-Cep25X0w.js";
import { c as j } from "./utils-B6yFEsav.js";
function C({
  label: s,
  icon: r,
  tooltip: a,
  variant: n = "default",
  size: e = "default",
  onClick: m,
  disabled: f = !1,
  loading: o = !1,
  iconOnly: i = !1
}) {
  const d = f || o, l = /* @__PURE__ */ c(
    p,
    {
      variant: n,
      size: i ? `icon-${e === "default" ? "sm" : e}` : e,
      onClick: m,
      disabled: d,
      "aria-label": i ? s : void 0,
      children: [
        o ? /* @__PURE__ */ t(u, { className: "h-3.5 w-3.5" }) : r && /* @__PURE__ */ t(r, { className: "shrink-0" }),
        !i && /* @__PURE__ */ t("span", { children: s })
      ]
    }
  );
  return a ? /* @__PURE__ */ c(h, { children: [
    /* @__PURE__ */ t(g, { asChild: !0, children: l }),
    /* @__PURE__ */ t(x, { children: /* @__PURE__ */ t("p", { children: a }) })
  ] }) : l;
}
const S = {
  none: "gap-0",
  sm: "gap-1",
  md: "gap-2",
  lg: "gap-3"
}, b = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end"
}, y = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch"
};
function N({
  children: s,
  orientation: r = "horizontal",
  gap: a = "sm",
  align: n = "start",
  itemsAlign: e = "start"
}) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: j(
        "flex",
        r === "vertical" ? "flex-col" : "flex-row flex-wrap",
        S[a],
        b[n],
        y[e]
      ),
      children: s
    }
  );
}
export {
  N as A,
  C as a
};
