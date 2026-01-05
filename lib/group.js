import { jsxs as s, jsx as n } from "react/jsx-runtime";
import { useState as P, isValidElement as v, Children as w, Fragment as T } from "react";
import { c as o } from "./utils-B6yFEsav.js";
import { ChevronDown as C } from "lucide-react";
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
function k({
  title: d,
  icon: a,
  children: x,
  collapsible: e = !0,
  defaultExpanded: p = !0,
  indentChildren: u = !0,
  actionIcon: i,
  onActionIconClick: g,
  badgeText: t,
  alwaysShowAction: f = !1,
  size: r = "sm"
}) {
  const [l, b] = P(p), c = h[r], y = e ? l : !0;
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
        className: o(
          "w-full flex items-center justify-between font-medium text-muted-foreground transition-colors group  tracking-wider select-none",
          c.headerPy,
          c.text,
          e && "hover:text-foreground cursor-pointer"
        ),
        children: [
          /* @__PURE__ */ s("div", { className: o("flex items-center", c.gap), children: [
            /* @__PURE__ */ n(
              C,
              {
                className: o(
                  "transition-transform",
                  c.iconSm,
                  !y && "-rotate-90",
                  !e && "opacity-30"
                )
              }
            ),
            a && /* @__PURE__ */ n(a, { className: c.icon }),
            /* @__PURE__ */ n("span", { children: d }),
            t && /* @__PURE__ */ n("span", { className: o("font-normal normal-case rounded-sm bg-muted text-muted-foreground/70", c.badgeText, c.badgePx, c.badgePy), children: t })
          ] }),
          i && /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              onClick: (m) => {
                m.stopPropagation(), g?.();
              },
              className: o(
                "p-0.5 rounded-sm hover:bg-muted transition-all",
                f ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              ),
              children: /* @__PURE__ */ n(i, { className: c.icon })
            }
          )
        ]
      }
    ),
    y && /* @__PURE__ */ n("div", { className: o(c.contentPb, c.contentPt, u && c.indent), children: x })
  ] });
}
function N(d) {
  return w.toArray(d).flatMap((a) => v(a) && a.type === T ? N(a.props.children) : a);
}
function I({ children: d, description: a, size: x = "sm" }) {
  const e = N(d).filter(v), p = h[x];
  return /* @__PURE__ */ s("div", { className: "space-y-1", children: [
    a && /* @__PURE__ */ n("div", { className: o("text-muted-foreground mb-2 px-1", p.text), children: a }),
    e.map((u, i) => /* @__PURE__ */ s("div", { children: [
      i > 0 && /* @__PURE__ */ n("div", { className: "border-t border-border my-2" }),
      u
    ] }, i))
  ] });
}
function W({ items: d, description: a, size: x = "sm" }) {
  return /* @__PURE__ */ n(I, { description: a, size: x, children: d.map((e, p) => /* @__PURE__ */ n(
    k,
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
function j({
  items: d,
  orientation: a = "horizontal",
  defaultTab: x,
  description: e,
  className: p,
  size: u = "sm"
}) {
  const [i, g] = P(
    x || (d.length > 0 ? d[0].title : "")
  ), t = h[u], f = d.find((r) => r.title === i);
  return a === "horizontal" ? /* @__PURE__ */ s("div", { className: o("flex flex-col", p), children: [
    e && /* @__PURE__ */ n("div", { className: o("text-muted-foreground mb-2 px-1", t.text), children: e }),
    /* @__PURE__ */ n("div", { className: "flex border-b border-border shrink-0", children: d.map((r) => {
      const l = r.icon, b = r.title === i;
      return /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          onClick: () => g(r.title),
          className: o(
            "flex items-center font-medium transition-colors border-b-2 -mb-px",
            t.gap,
            t.tabPx,
            t.tabPy,
            t.text,
            b ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/30"
          ),
          children: [
            l && /* @__PURE__ */ n(l, { className: t.icon }),
            /* @__PURE__ */ n("span", { children: r.title }),
            r.badgeText && /* @__PURE__ */ n("span", { className: o("font-normal rounded-sm bg-muted text-muted-foreground/70", t.badgeText, t.badgePx, t.badgePy), children: r.badgeText })
          ]
        },
        r.title
      );
    }) }),
    /* @__PURE__ */ n("div", { className: o("flex-1 min-h-0 overflow-auto", t.contentPadding), children: f?.children })
  ] }) : /* @__PURE__ */ s("div", { className: o("flex gap-0", p), children: [
    e && /* @__PURE__ */ n("div", { className: o("text-muted-foreground mb-2 px-1 col-span-2", t.text), children: e }),
    /* @__PURE__ */ n("div", { className: o("flex flex-col border-r border-border pr-0 shrink-0", t.sidebarMinW), children: d.map((r) => {
      const l = r.icon, b = r.title === i;
      return /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          onClick: () => g(r.title),
          className: o(
            "flex items-center font-medium transition-colors border-r-2 -mr-px text-left",
            t.gap,
            t.tabPx,
            t.tabPy,
            t.text,
            b ? "border-primary text-foreground bg-muted/30" : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/20"
          ),
          children: [
            l && /* @__PURE__ */ n(l, { className: t.icon }),
            /* @__PURE__ */ n("span", { children: r.title }),
            r.badgeText && /* @__PURE__ */ n("span", { className: o("font-normal rounded-sm bg-muted text-muted-foreground/70 ml-auto", t.badgeText, t.badgePx, t.badgePy), children: r.badgeText })
          ]
        },
        r.title
      );
    }) }),
    /* @__PURE__ */ n("div", { className: o("flex-1 min-w-0 overflow-auto", t.contentPadding), children: f?.children })
  ] });
}
export {
  I as Group,
  W as GroupConfig,
  k as GroupItem,
  j as GroupTab
};
