import { jsxs as c, jsx as t } from "react/jsx-runtime";
import { B as m } from "./button-DHQhRgTM.js";
import { S as u } from "./spinner-D5WcaOmH.js";
import { a as h, b as g, c as x } from "./tooltip-Cep25X0w.js";
import { c as j } from "./utils-B6yFEsav.js";
function C({
  label: e,
  icon: r,
  tooltip: s,
  variant: a = "default",
  size: n = "default",
  onClick: f,
  disabled: p = !1,
  loading: i = !1,
  iconOnly: o = !1
}) {
  const d = p || i, l = /* @__PURE__ */ c(
    m,
    {
      variant: a,
      size: o ? `icon-${n === "default" ? "sm" : n}` : n,
      onClick: f,
      disabled: d,
      "aria-label": o ? e : void 0,
      children: [
        i ? /* @__PURE__ */ t(u, { className: "h-3.5 w-3.5" }) : r && /* @__PURE__ */ t(r, { className: "shrink-0" }),
        !o && /* @__PURE__ */ t("span", { children: e })
      ]
    }
  );
  return s ? /* @__PURE__ */ c(h, { children: [
    /* @__PURE__ */ t(g, { asChild: !0, children: l }),
    /* @__PURE__ */ t(x, { children: /* @__PURE__ */ t("p", { children: s }) })
  ] }) : l;
}
const b = {
  none: "gap-0",
  sm: "gap-1",
  md: "gap-2",
  lg: "gap-3"
}, B = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end"
};
function N({
  children: e,
  orientation: r = "horizontal",
  gap: s = "sm",
  align: a = "start"
}) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: j(
        "flex flex-wrap",
        r === "vertical" ? "flex-col" : "flex-row",
        b[s],
        B[a]
      ),
      children: e
    }
  );
}
export {
  C as ActionButton,
  N as ActionButtonGroup
};
