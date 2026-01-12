import { jsxs as s, jsx as e } from "react/jsx-runtime";
import I, { useState as T, isValidElement as C, Children as S } from "react";
import { c as o } from "./utils-B6yFEsav.js";
import { ChevronDown as A, AlertTriangle as E } from "lucide-react";
import { I as D } from "./InfoPopover-CfMOxnPa.js";
const y = {
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
function M({
  title: d,
  icon: a,
  children: i,
  collapsible: t = !0,
  defaultExpanded: c = !0,
  indentChildren: p = !0,
  actionIcon: x,
  onActionIconClick: f,
  badgeText: n,
  alwaysShowAction: g = !1,
  size: r = "sm",
  info: u,
  disabled: b = !1,
  disabledReason: P
}) {
  const [h, v] = T(c), l = y[r], w = t ? h : !0;
  return /* @__PURE__ */ s("div", { children: [
    /* @__PURE__ */ s(
      "div",
      {
        role: t ? "button" : void 0,
        tabIndex: t ? 0 : void 0,
        onClick: () => {
          t && v(!h);
        },
        onKeyDown: (m) => {
          (m.key === "Enter" || m.key === " ") && t && (m.preventDefault(), v(!h));
        },
        className: o(
          "w-full flex items-center justify-between font-medium text-muted-foreground transition-colors group  tracking-wider select-none",
          l.headerPy,
          l.text,
          t && "hover:text-foreground cursor-pointer"
        ),
        children: [
          /* @__PURE__ */ s("div", { className: o("flex items-center", l.gap), children: [
            /* @__PURE__ */ e(
              A,
              {
                className: o(
                  "transition-transform",
                  l.iconSm,
                  !w && "-rotate-90",
                  !t && "opacity-30"
                )
              }
            ),
            a && /* @__PURE__ */ e(a, { className: l.icon }),
            /* @__PURE__ */ e("span", { children: d }),
            n && /* @__PURE__ */ e("span", { className: o("font-normal normal-case rounded-sm bg-muted text-muted-foreground/70", l.badgeText, l.badgePx, l.badgePy), children: n }),
            u && /* @__PURE__ */ e("span", { onClick: (m) => m.stopPropagation(), children: /* @__PURE__ */ e(
              D,
              {
                description: u.description,
                referenceUrl: u.referenceUrl,
                referenceLabel: u.referenceLabel
              }
            ) })
          ] }),
          x && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: (m) => {
                m.stopPropagation(), f?.();
              },
              className: o(
                "p-0.5 rounded-sm hover:bg-muted transition-all",
                g ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              ),
              children: /* @__PURE__ */ e(x, { className: l.icon })
            }
          )
        ]
      }
    ),
    w && /* @__PURE__ */ s("div", { className: o("relative", l.contentPb, l.contentPt, p && l.indent), children: [
      /* @__PURE__ */ e("div", { className: o("transition-opacity duration-200", b && "opacity-50 pointer-events-none select-none"), children: i }),
      b && /* @__PURE__ */ e(
        "div",
        {
          className: "absolute inset-0 z-10 cursor-not-allowed",
          title: P || "Content is disabled",
          role: "alert",
          "aria-label": P || "Content is disabled"
        }
      )
    ] })
  ] });
}
function k(d) {
  return S.toArray(d).flatMap((a) => C(a) && a.type === I.Fragment ? k(a.props.children) : a);
}
function W({ children: d, description: a, size: i = "sm" }) {
  const t = k(d).filter(C), c = y[i];
  return /* @__PURE__ */ s("div", { className: "space-y-1", children: [
    a && /* @__PURE__ */ e("div", { className: o("text-muted-foreground mb-2 px-1", c.text), children: a }),
    t.map((p, x) => /* @__PURE__ */ s("div", { children: [
      x > 0 && /* @__PURE__ */ e("div", { className: "border-t border-border my-2" }),
      p
    ] }, x))
  ] });
}
function V({ items: d, description: a, size: i = "sm" }) {
  return /* @__PURE__ */ e(W, { description: a, size: i, children: d.map((t, c) => /* @__PURE__ */ e(
    M,
    {
      title: t.title,
      icon: t.icon,
      collapsible: t.collapsible,
      defaultExpanded: t.defaultExpanded,
      indentChildren: t.indentChildren,
      actionIcon: t.actionIcon,
      onActionIconClick: t.onActionIconClick,
      badgeText: t.badgeText,
      info: t.info,
      size: i,
      children: t.children
    },
    t.title + c
  )) });
}
function N({
  warning: d,
  notification: a,
  size: i
}) {
  const t = i === "sm" ? "h-3.5 w-3.5" : i === "md" ? "h-4 w-4" : "h-[18px] w-[18px]";
  if (d)
    return /* @__PURE__ */ e(
      E,
      {
        className: o(t, "text-amber-500"),
        "aria-label": "Warning"
      }
    );
  if (a !== void 0 && a !== !1) {
    const c = typeof a == "number" ? a : null, p = c !== null ? c > 99 ? "99+" : c.toString() : null;
    return p ? /* @__PURE__ */ e(
      "span",
      {
        className: o(
          "inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground font-medium",
          i === "sm" ? "min-w-[16px] h-4 px-1 text-[10px]" : "min-w-[18px] h-[18px] px-1.5 text-[11px]"
        ),
        "aria-label": `${c} notifications`,
        children: p
      }
    ) : /* @__PURE__ */ e(
      "span",
      {
        className: o(
          "rounded-full bg-primary",
          i === "sm" ? "h-2 w-2" : "h-2.5 w-2.5"
        ),
        "aria-label": "New notification"
      }
    );
  }
  return null;
}
function $({
  items: d,
  orientation: a = "horizontal",
  defaultTab: i,
  description: t,
  className: c,
  size: p = "sm"
}) {
  const [x, f] = T(
    i || (d.length > 0 ? d[0].title : "")
  ), n = y[p], g = d.find((r) => r.title === x);
  return a === "horizontal" ? /* @__PURE__ */ s("div", { className: o("flex flex-col", c), children: [
    t && /* @__PURE__ */ e("div", { className: o("text-muted-foreground mb-2 px-1", n.text), children: t }),
    /* @__PURE__ */ e("div", { className: "flex border-b border-border shrink-0", children: d.map((r) => {
      const u = r.icon, b = r.title === x;
      return /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          onClick: () => f(r.title),
          className: o(
            "flex items-center font-medium transition-colors border-b-2 -mb-px",
            n.gap,
            n.tabPx,
            n.tabPy,
            n.text,
            b ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/30"
          ),
          children: [
            u && /* @__PURE__ */ e(u, { className: n.icon }),
            /* @__PURE__ */ e("span", { children: r.title }),
            r.badgeText && /* @__PURE__ */ e("span", { className: o("font-normal rounded-sm bg-muted text-muted-foreground/70", n.badgeText, n.badgePx, n.badgePy), children: r.badgeText }),
            /* @__PURE__ */ e(
              N,
              {
                warning: r.warning,
                notification: r.notification,
                size: p
              }
            )
          ]
        },
        r.title
      );
    }) }),
    /* @__PURE__ */ e("div", { className: o("flex-1 min-h-0 overflow-auto", n.contentPadding), children: g?.children })
  ] }) : /* @__PURE__ */ s("div", { className: o("flex gap-0", c), children: [
    t && /* @__PURE__ */ e("div", { className: o("text-muted-foreground mb-2 px-1 col-span-2", n.text), children: t }),
    /* @__PURE__ */ e("div", { className: o("flex flex-col border-r border-border pr-0 shrink-0", n.sidebarMinW), children: d.map((r) => {
      const u = r.icon, b = r.title === x;
      return /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          onClick: () => f(r.title),
          className: o(
            "flex items-center font-medium transition-colors border-r-2 -mr-px text-left",
            n.gap,
            n.tabPx,
            n.tabPy,
            n.text,
            b ? "border-primary text-foreground bg-muted/30" : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/20"
          ),
          children: [
            u && /* @__PURE__ */ e(u, { className: n.icon }),
            /* @__PURE__ */ e("span", { children: r.title }),
            /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5 ml-auto", children: [
              r.badgeText && /* @__PURE__ */ e("span", { className: o("font-normal rounded-sm bg-muted text-muted-foreground/70", n.badgeText, n.badgePx, n.badgePy), children: r.badgeText }),
              /* @__PURE__ */ e(
                N,
                {
                  warning: r.warning,
                  notification: r.notification,
                  size: p
                }
              )
            ] })
          ]
        },
        r.title
      );
    }) }),
    /* @__PURE__ */ e("div", { className: o("flex-1 min-w-0 overflow-auto", n.contentPadding), children: g?.children })
  ] });
}
export {
  W as Group,
  V as GroupConfig,
  M as GroupItem,
  $ as GroupTab
};
