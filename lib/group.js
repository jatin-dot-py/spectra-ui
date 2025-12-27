import { jsxs as s, jsx as n } from "react/jsx-runtime";
import { useState as P, Children as v, isValidElement as N } from "react";
import { c as r } from "./utils-B6yFEsav.js";
import { ChevronDown as w } from "lucide-react";
const f = {
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
function T({
  title: d,
  icon: c,
  children: x,
  collapsible: e = !0,
  defaultExpanded: p = !0,
  indentChildren: u = !0,
  actionIcon: i,
  onActionIconClick: g,
  badgeText: t,
  alwaysShowAction: h = !1,
  size: o = "sm"
}) {
  const [l, b] = P(p), a = f[o], y = e ? l : !0;
  return /* @__PURE__ */ s("div", { children: [
    /* @__PURE__ */ s(
      "div",
      {
        role: e ? "button" : void 0,
        tabIndex: e ? 0 : void 0,
        onClick: () => {
          e && b(!l);
        },
        onKeyDown: (m) => {
          (m.key === "Enter" || m.key === " ") && e && (m.preventDefault(), b(!l));
        },
        className: r(
          "w-full flex items-center justify-between font-medium text-muted-foreground transition-colors group  tracking-wider select-none",
          a.headerPy,
          a.text,
          e && "hover:text-foreground cursor-pointer"
        ),
        children: [
          /* @__PURE__ */ s("div", { className: r("flex items-center", a.gap), children: [
            /* @__PURE__ */ n(
              w,
              {
                className: r(
                  "transition-transform",
                  a.iconSm,
                  !y && "-rotate-90",
                  !e && "opacity-30"
                )
              }
            ),
            c && /* @__PURE__ */ n(c, { className: a.icon }),
            /* @__PURE__ */ n("span", { children: d }),
            t && /* @__PURE__ */ n("span", { className: r("font-normal normal-case rounded-sm bg-muted text-muted-foreground/70", a.badgeText, a.badgePx, a.badgePy), children: t })
          ] }),
          i && /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              onClick: (m) => {
                m.stopPropagation(), g?.();
              },
              className: r(
                "p-0.5 rounded-sm hover:bg-muted transition-all",
                h ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              ),
              children: /* @__PURE__ */ n(i, { className: a.icon })
            }
          )
        ]
      }
    ),
    y && /* @__PURE__ */ n("div", { className: r(a.contentPb, a.contentPt, u && a.indent), children: x })
  ] });
}
function C({ children: d, description: c, size: x = "sm" }) {
  const e = v.toArray(d).filter(N), p = f[x];
  return /* @__PURE__ */ s("div", { className: "space-y-1", children: [
    c && /* @__PURE__ */ n("div", { className: r("text-muted-foreground mb-2 px-1", p.text), children: c }),
    e.map((u, i) => /* @__PURE__ */ s("div", { children: [
      i > 0 && /* @__PURE__ */ n("div", { className: "border-t border-border my-2" }),
      u
    ] }, i))
  ] });
}
function G({ items: d, description: c, size: x = "sm" }) {
  return /* @__PURE__ */ n(C, { description: c, size: x, children: d.map((e, p) => /* @__PURE__ */ n(
    T,
    {
      title: e.title,
      icon: e.icon,
      collapsible: e.collapsible,
      defaultExpanded: e.defaultExpanded,
      indentChildren: e.indentChildren,
      actionIcon: e.actionIcon,
      onActionIconClick: e.onActionIconClick,
      badgeText: e.badgeText,
      size: x,
      children: e.children
    },
    e.title + p
  )) });
}
function M({
  items: d,
  orientation: c = "horizontal",
  defaultTab: x,
  description: e,
  className: p,
  size: u = "sm"
}) {
  const [i, g] = P(
    x || (d.length > 0 ? d[0].title : "")
  ), t = f[u], h = d.find((o) => o.title === i);
  return c === "horizontal" ? /* @__PURE__ */ s("div", { className: r("flex flex-col", p), children: [
    e && /* @__PURE__ */ n("div", { className: r("text-muted-foreground mb-2 px-1", t.text), children: e }),
    /* @__PURE__ */ n("div", { className: "flex border-b border-border shrink-0", children: d.map((o) => {
      const l = o.icon, b = o.title === i;
      return /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          onClick: () => g(o.title),
          className: r(
            "flex items-center font-medium transition-colors border-b-2 -mb-px",
            t.gap,
            t.tabPx,
            t.tabPy,
            t.text,
            b ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/30"
          ),
          children: [
            l && /* @__PURE__ */ n(l, { className: t.icon }),
            /* @__PURE__ */ n("span", { children: o.title }),
            o.badgeText && /* @__PURE__ */ n("span", { className: r("font-normal rounded-sm bg-muted text-muted-foreground/70", t.badgeText, t.badgePx, t.badgePy), children: o.badgeText })
          ]
        },
        o.title
      );
    }) }),
    /* @__PURE__ */ n("div", { className: r("flex-1 min-h-0 overflow-auto", t.contentPadding), children: h?.children })
  ] }) : /* @__PURE__ */ s("div", { className: r("flex gap-0", p), children: [
    e && /* @__PURE__ */ n("div", { className: r("text-muted-foreground mb-2 px-1 col-span-2", t.text), children: e }),
    /* @__PURE__ */ n("div", { className: r("flex flex-col border-r border-border pr-0 shrink-0", t.sidebarMinW), children: d.map((o) => {
      const l = o.icon, b = o.title === i;
      return /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          onClick: () => g(o.title),
          className: r(
            "flex items-center font-medium transition-colors border-r-2 -mr-px text-left",
            t.gap,
            t.tabPx,
            t.tabPy,
            t.text,
            b ? "border-primary text-foreground bg-muted/30" : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/20"
          ),
          children: [
            l && /* @__PURE__ */ n(l, { className: t.icon }),
            /* @__PURE__ */ n("span", { children: o.title }),
            o.badgeText && /* @__PURE__ */ n("span", { className: r("font-normal rounded-sm bg-muted text-muted-foreground/70 ml-auto", t.badgeText, t.badgePx, t.badgePy), children: o.badgeText })
          ]
        },
        o.title
      );
    }) }),
    /* @__PURE__ */ n("div", { className: r("flex-1 min-w-0 overflow-auto", t.contentPadding), children: h?.children })
  ] });
}
export {
  C as Group,
  G as GroupConfig,
  T as GroupItem,
  M as GroupTab
};
