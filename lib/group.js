import { jsxs as c, jsx as e } from "react/jsx-runtime";
import k, { useState as w, isValidElement as C, Children as I } from "react";
import { c as o } from "./utils-B6yFEsav.js";
import { ChevronDown as A, AlertTriangle as S } from "lucide-react";
import { I as E } from "./InfoPopover-AXgz4W_4.js";
const h = {
  text: "text-xs",
  badgeText: "text-[10px]",
  iconSm: "h-3 w-3",
  icon: "h-3.5 w-3.5",
  gap: "gap-2",
  headerPy: "py-2",
  tabPx: "px-3",
  tabPy: "py-2",
  badgePx: "px-1.5",
  badgePy: "py-0.5",
  contentPt: "pt-2",
  contentPb: "pb-4",
  contentPadding: "p-3",
  indent: "pl-5",
  sidebarMinW: "min-w-[120px]"
};
function D({
  title: d,
  icon: a,
  children: i,
  collapsible: r = !0,
  defaultExpanded: u = !0,
  indentChildren: p = !0,
  actionIcon: m,
  onActionIconClick: n,
  badgeText: b,
  alwaysShowAction: t = !1,
  info: s,
  disabled: x = !1,
  disabledReason: v
}) {
  const [g, y] = w(u), l = h, N = r ? g : !0;
  return /* @__PURE__ */ c("div", { children: [
    /* @__PURE__ */ c(
      "div",
      {
        role: r ? "button" : void 0,
        tabIndex: r ? 0 : void 0,
        onClick: () => {
          r && y(!g);
        },
        onKeyDown: (f) => {
          (f.key === "Enter" || f.key === " ") && r && (f.preventDefault(), y(!g));
        },
        className: o(
          "w-full flex items-center justify-between font-medium text-muted-foreground transition-colors group  tracking-wider select-none",
          l.headerPy,
          l.text,
          r && "hover:text-foreground cursor-pointer"
        ),
        children: [
          /* @__PURE__ */ c("div", { className: o("flex items-center", l.gap), children: [
            /* @__PURE__ */ e(
              A,
              {
                className: o(
                  "transition-transform",
                  l.iconSm,
                  !N && "-rotate-90",
                  !r && "opacity-30"
                )
              }
            ),
            a && /* @__PURE__ */ e(a, { className: l.icon }),
            /* @__PURE__ */ e("span", { children: d }),
            b && /* @__PURE__ */ e("span", { className: o("font-normal normal-case rounded-sm bg-muted text-muted-foreground/70", l.badgeText, l.badgePx, l.badgePy), children: b }),
            s && /* @__PURE__ */ e("span", { onClick: (f) => f.stopPropagation(), children: /* @__PURE__ */ e(
              E,
              {
                description: s.description,
                referenceUrl: s.referenceUrl,
                referenceLabel: s.referenceLabel
              }
            ) })
          ] }),
          m && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: (f) => {
                f.stopPropagation(), n?.();
              },
              className: o(
                "p-0.5 rounded-sm hover:bg-muted transition-all",
                t ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              ),
              children: /* @__PURE__ */ e(m, { className: l.icon })
            }
          )
        ]
      }
    ),
    N && /* @__PURE__ */ c("div", { className: o("relative", l.contentPb, l.contentPt, p && l.indent), children: [
      /* @__PURE__ */ e("div", { className: o("transition-opacity duration-200", x && "opacity-50 pointer-events-none select-none"), children: i }),
      x && /* @__PURE__ */ e(
        "div",
        {
          className: "absolute inset-0 z-10 cursor-not-allowed",
          title: v || "Content is disabled",
          role: "alert",
          "aria-label": v || "Content is disabled"
        }
      )
    ] })
  ] });
}
function T(d) {
  return I.toArray(d).flatMap((a) => C(a) && a.type === k.Fragment ? T(a.props.children) : a);
}
function j({ children: d, description: a }) {
  const i = T(d).filter(C);
  return /* @__PURE__ */ c("div", { className: "space-y-1", children: [
    a && /* @__PURE__ */ e("div", { className: o("text-muted-foreground mb-2 px-1", h.text), children: a }),
    i.map((u, p) => /* @__PURE__ */ c("div", { children: [
      p > 0 && /* @__PURE__ */ e("div", { className: "border-t border-border my-2" }),
      u
    ] }, p))
  ] });
}
function _({ items: d, description: a }) {
  return /* @__PURE__ */ e(j, { description: a, children: d.map((i, r) => /* @__PURE__ */ e(
    D,
    {
      title: i.title,
      icon: i.icon,
      collapsible: i.collapsible,
      defaultExpanded: i.defaultExpanded,
      indentChildren: i.indentChildren,
      actionIcon: i.actionIcon,
      onActionIconClick: i.onActionIconClick,
      badgeText: i.badgeText,
      info: i.info,
      children: i.children
    },
    i.title + r
  )) });
}
function P({
  warning: d,
  notification: a
}) {
  const i = "h-3.5 w-3.5";
  if (d)
    return /* @__PURE__ */ e(
      S,
      {
        className: o(i, "text-amber-500"),
        "aria-label": "Warning"
      }
    );
  if (a !== void 0 && a !== !1) {
    const r = typeof a == "number" ? a : null, u = r !== null ? r > 99 ? "99+" : r.toString() : null;
    return u ? /* @__PURE__ */ e(
      "span",
      {
        className: "inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground font-medium min-w-[16px] h-4 px-1 text-[10px]",
        "aria-label": `${r} notifications`,
        children: u
      }
    ) : /* @__PURE__ */ e(
      "span",
      {
        className: "rounded-full bg-primary h-2 w-2",
        "aria-label": "New notification"
      }
    );
  }
  return null;
}
function F({
  items: d,
  orientation: a = "horizontal",
  defaultTab: i,
  description: r,
  className: u
}) {
  const [p, m] = w(
    i || (d.length > 0 ? d[0].title : "")
  ), n = h, b = d.find((t) => t.title === p);
  return a === "horizontal" ? /* @__PURE__ */ c("div", { className: o("flex flex-col", u), children: [
    r && /* @__PURE__ */ e("div", { className: o("text-muted-foreground mb-2 px-1", n.text), children: r }),
    /* @__PURE__ */ e("div", { className: "flex border-b border-border shrink-0", children: d.map((t) => {
      const s = t.icon, x = t.title === p;
      return /* @__PURE__ */ c(
        "button",
        {
          type: "button",
          onClick: () => m(t.title),
          className: o(
            "flex items-center font-medium transition-colors border-b-2 -mb-px",
            n.gap,
            n.tabPx,
            n.tabPy,
            n.text,
            x ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/30"
          ),
          children: [
            s && /* @__PURE__ */ e(s, { className: n.icon }),
            /* @__PURE__ */ e("span", { children: t.title }),
            t.badgeText && /* @__PURE__ */ e("span", { className: o("font-normal rounded-sm bg-muted text-muted-foreground/70", n.badgeText, n.badgePx, n.badgePy), children: t.badgeText }),
            /* @__PURE__ */ e(
              P,
              {
                warning: t.warning,
                notification: t.notification
              }
            )
          ]
        },
        t.title
      );
    }) }),
    /* @__PURE__ */ e("div", { className: o("flex-1 min-h-0 overflow-auto", n.contentPadding), children: b?.children })
  ] }) : /* @__PURE__ */ c("div", { className: o("flex gap-0", u), children: [
    r && /* @__PURE__ */ e("div", { className: o("text-muted-foreground mb-2 px-1 col-span-2", n.text), children: r }),
    /* @__PURE__ */ e("div", { className: o("flex flex-col border-r border-border pr-0 shrink-0", n.sidebarMinW), children: d.map((t) => {
      const s = t.icon, x = t.title === p;
      return /* @__PURE__ */ c(
        "button",
        {
          type: "button",
          onClick: () => m(t.title),
          className: o(
            "flex items-center font-medium transition-colors border-r-2 -mr-px text-left",
            n.gap,
            n.tabPx,
            n.tabPy,
            n.text,
            x ? "border-primary text-foreground bg-muted/30" : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/20"
          ),
          children: [
            s && /* @__PURE__ */ e(s, { className: n.icon }),
            /* @__PURE__ */ e("span", { children: t.title }),
            /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5 ml-auto", children: [
              t.badgeText && /* @__PURE__ */ e("span", { className: o("font-normal rounded-sm bg-muted text-muted-foreground/70", n.badgeText, n.badgePx, n.badgePy), children: t.badgeText }),
              /* @__PURE__ */ e(
                P,
                {
                  warning: t.warning,
                  notification: t.notification
                }
              )
            ] })
          ]
        },
        t.title
      );
    }) }),
    /* @__PURE__ */ e("div", { className: o("flex-1 min-w-0 overflow-auto", n.contentPadding), children: b?.children })
  ] });
}
export {
  j as Group,
  _ as GroupConfig,
  D as GroupItem,
  F as GroupTab
};
