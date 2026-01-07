import { jsxs as s, jsx as t } from "react/jsx-runtime";
import T, { useState as v, isValidElement as N, Children as C } from "react";
import { c as o } from "./utils-B6yFEsav.js";
import { ChevronDown as k } from "lucide-react";
import { I } from "./InfoPopover-CfMOxnPa.js";
const h = {
  sm: {
    text: "text-xs",
    badgeText: "text-[10px]",
    iconSm: "h-3 w-3",
    icon: "h-3.5 w-3.5",
    gap: "gap-1.5",
    headerPy: "py-1.5",
    tabPx: "px-3",
    tabPy: "py-2",
    badgePx: "px-1.5",
    badgePy: "py-0.5",
    contentPt: "pt-1",
    contentPb: "pb-3",
    contentPadding: "p-3",
    indent: "pl-4",
    sidebarMinW: "min-w-[120px]"
  },
  md: {
    text: "text-sm",
    badgeText: "text-xs",
    iconSm: "h-4 w-4",
    icon: "h-4 w-4",
    gap: "gap-2",
    headerPy: "py-2",
    tabPx: "px-4",
    tabPy: "py-2.5",
    badgePx: "px-2",
    badgePy: "py-0.5",
    contentPt: "pt-2",
    contentPb: "pb-4",
    contentPadding: "p-4",
    indent: "pl-5",
    sidebarMinW: "min-w-[140px]"
  },
  lg: {
    text: "text-base",
    badgeText: "text-sm",
    iconSm: "h-5 w-5",
    icon: "h-5 w-5",
    gap: "gap-2.5",
    headerPy: "py-2.5",
    tabPx: "px-5",
    tabPy: "py-3",
    badgePx: "px-2.5",
    badgePy: "py-1",
    contentPt: "pt-3",
    contentPb: "pb-5",
    contentPadding: "p-5",
    indent: "pl-6",
    sidebarMinW: "min-w-[160px]"
  }
};
function A({
  title: d,
  icon: a,
  children: p,
  collapsible: e = !0,
  defaultExpanded: x = !0,
  indentChildren: m = !0,
  actionIcon: l,
  onActionIconClick: g,
  badgeText: n,
  alwaysShowAction: f = !1,
  size: r = "sm",
  info: i
}) {
  const [b, y] = v(x), c = h[r], P = e ? b : !0;
  return /* @__PURE__ */ s("div", { children: [
    /* @__PURE__ */ s(
      "div",
      {
        role: e ? "button" : void 0,
        tabIndex: e ? 0 : void 0,
        onClick: () => {
          e && y(!b);
        },
        onKeyDown: (u) => {
          (u.key === "Enter" || u.key === " ") && e && (u.preventDefault(), y(!b));
        },
        className: o(
          "w-full flex items-center justify-between font-medium text-muted-foreground transition-colors group  tracking-wider select-none",
          c.headerPy,
          c.text,
          e && "hover:text-foreground cursor-pointer"
        ),
        children: [
          /* @__PURE__ */ s("div", { className: o("flex items-center", c.gap), children: [
            /* @__PURE__ */ t(
              k,
              {
                className: o(
                  "transition-transform",
                  c.iconSm,
                  !P && "-rotate-90",
                  !e && "opacity-30"
                )
              }
            ),
            a && /* @__PURE__ */ t(a, { className: c.icon }),
            /* @__PURE__ */ t("span", { children: d }),
            n && /* @__PURE__ */ t("span", { className: o("font-normal normal-case rounded-sm bg-muted text-muted-foreground/70", c.badgeText, c.badgePx, c.badgePy), children: n }),
            i && /* @__PURE__ */ t("span", { onClick: (u) => u.stopPropagation(), children: /* @__PURE__ */ t(
              I,
              {
                description: i.description,
                referenceUrl: i.referenceUrl,
                referenceLabel: i.referenceLabel
              }
            ) })
          ] }),
          l && /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: (u) => {
                u.stopPropagation(), g?.();
              },
              className: o(
                "p-0.5 rounded-sm hover:bg-muted transition-all",
                f ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              ),
              children: /* @__PURE__ */ t(l, { className: c.icon })
            }
          )
        ]
      }
    ),
    P && /* @__PURE__ */ t("div", { className: o(c.contentPb, c.contentPt, m && c.indent), children: p })
  ] });
}
function w(d) {
  return C.toArray(d).flatMap((a) => N(a) && a.type === T.Fragment ? w(a.props.children) : a);
}
function E({ children: d, description: a, size: p = "sm" }) {
  const e = w(d).filter(N), x = h[p];
  return /* @__PURE__ */ s("div", { className: "space-y-1", children: [
    a && /* @__PURE__ */ t("div", { className: o("text-muted-foreground mb-2 px-1", x.text), children: a }),
    e.map((m, l) => /* @__PURE__ */ s("div", { children: [
      l > 0 && /* @__PURE__ */ t("div", { className: "border-t border-border my-2" }),
      m
    ] }, l))
  ] });
}
function z({ items: d, description: a, size: p = "sm" }) {
  return /* @__PURE__ */ t(E, { description: a, size: p, children: d.map((e, x) => /* @__PURE__ */ t(
    A,
    {
      title: e.title,
      icon: e.icon,
      collapsible: e.collapsible,
      defaultExpanded: e.defaultExpanded,
      indentChildren: e.indentChildren,
      actionIcon: e.actionIcon,
      onActionIconClick: e.onActionIconClick,
      badgeText: e.badgeText,
      info: e.info,
      size: p,
      children: e.children
    },
    e.title + x
  )) });
}
function L({
  items: d,
  orientation: a = "horizontal",
  defaultTab: p,
  description: e,
  className: x,
  size: m = "sm"
}) {
  const [l, g] = v(
    p || (d.length > 0 ? d[0].title : "")
  ), n = h[m], f = d.find((r) => r.title === l);
  return a === "horizontal" ? /* @__PURE__ */ s("div", { className: o("flex flex-col", x), children: [
    e && /* @__PURE__ */ t("div", { className: o("text-muted-foreground mb-2 px-1", n.text), children: e }),
    /* @__PURE__ */ t("div", { className: "flex border-b border-border shrink-0", children: d.map((r) => {
      const i = r.icon, b = r.title === l;
      return /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          onClick: () => g(r.title),
          className: o(
            "flex items-center font-medium transition-colors border-b-2 -mb-px",
            n.gap,
            n.tabPx,
            n.tabPy,
            n.text,
            b ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/30"
          ),
          children: [
            i && /* @__PURE__ */ t(i, { className: n.icon }),
            /* @__PURE__ */ t("span", { children: r.title }),
            r.badgeText && /* @__PURE__ */ t("span", { className: o("font-normal rounded-sm bg-muted text-muted-foreground/70", n.badgeText, n.badgePx, n.badgePy), children: r.badgeText })
          ]
        },
        r.title
      );
    }) }),
    /* @__PURE__ */ t("div", { className: o("flex-1 min-h-0 overflow-auto", n.contentPadding), children: f?.children })
  ] }) : /* @__PURE__ */ s("div", { className: o("flex gap-0", x), children: [
    e && /* @__PURE__ */ t("div", { className: o("text-muted-foreground mb-2 px-1 col-span-2", n.text), children: e }),
    /* @__PURE__ */ t("div", { className: o("flex flex-col border-r border-border pr-0 shrink-0", n.sidebarMinW), children: d.map((r) => {
      const i = r.icon, b = r.title === l;
      return /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          onClick: () => g(r.title),
          className: o(
            "flex items-center font-medium transition-colors border-r-2 -mr-px text-left",
            n.gap,
            n.tabPx,
            n.tabPy,
            n.text,
            b ? "border-primary text-foreground bg-muted/30" : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/20"
          ),
          children: [
            i && /* @__PURE__ */ t(i, { className: n.icon }),
            /* @__PURE__ */ t("span", { children: r.title }),
            r.badgeText && /* @__PURE__ */ t("span", { className: o("font-normal rounded-sm bg-muted text-muted-foreground/70 ml-auto", n.badgeText, n.badgePx, n.badgePy), children: r.badgeText })
          ]
        },
        r.title
      );
    }) }),
    /* @__PURE__ */ t("div", { className: o("flex-1 min-w-0 overflow-auto", n.contentPadding), children: f?.children })
  ] });
}
export {
  E as Group,
  z as GroupConfig,
  A as GroupItem,
  L as GroupTab
};
