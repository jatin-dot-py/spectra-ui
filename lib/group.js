import { jsxs as c, jsx as e } from "react/jsx-runtime";
import A, { useState as w, isValidElement as C, Children as S } from "react";
import { c as o } from "./utils-B6yFEsav.js";
import { ChevronDown as E, AlertTriangle as T } from "lucide-react";
import { I as D } from "./InfoPopover-AXgz4W_4.js";
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
function j({
  title: d,
  icon: a,
  children: i,
  collapsible: r = !0,
  defaultExpanded: u = !0,
  indentChildren: f = !0,
  actionIcon: b,
  onActionIconClick: t,
  badgeText: m,
  alwaysShowAction: n = !1,
  info: s,
  disabled: x = !1,
  disabledReason: v,
  warning: I = !1
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
        onKeyDown: (p) => {
          (p.key === "Enter" || p.key === " ") && r && (p.preventDefault(), y(!g));
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
              E,
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
            m && /* @__PURE__ */ e("span", { className: o("font-normal normal-case rounded-sm bg-muted text-muted-foreground/70", l.badgeText, l.badgePx, l.badgePy), children: m }),
            I && /* @__PURE__ */ e(
              T,
              {
                className: "h-3.5 w-3.5 text-amber-500",
                "aria-label": "Warning"
              }
            ),
            s && /* @__PURE__ */ e("span", { onClick: (p) => p.stopPropagation(), children: /* @__PURE__ */ e(
              D,
              {
                description: s.description,
                referenceUrl: s.referenceUrl,
                referenceLabel: s.referenceLabel
              }
            ) })
          ] }),
          b && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: (p) => {
                p.stopPropagation(), t?.();
              },
              className: o(
                "p-0.5 rounded-sm hover:bg-muted transition-all",
                n ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              ),
              children: /* @__PURE__ */ e(b, { className: l.icon })
            }
          )
        ]
      }
    ),
    N && /* @__PURE__ */ c("div", { className: o("relative", l.contentPb, l.contentPt, f && l.indent), children: [
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
function k(d) {
  return S.toArray(d).flatMap((a) => C(a) && a.type === A.Fragment ? k(a.props.children) : a);
}
function z({ children: d, description: a }) {
  const i = k(d).filter(C);
  return /* @__PURE__ */ c("div", { className: "space-y-1", children: [
    a && /* @__PURE__ */ e("div", { className: o("text-muted-foreground mb-2 px-1", h.text), children: a }),
    i.map((u, f) => /* @__PURE__ */ c("div", { children: [
      f > 0 && /* @__PURE__ */ e("div", { className: "border-t border-border my-2" }),
      u
    ] }, f))
  ] });
}
function F({ items: d, description: a }) {
  return /* @__PURE__ */ e(z, { description: a, children: d.map((i, r) => /* @__PURE__ */ e(
    j,
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
      T,
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
function V({
  items: d,
  orientation: a = "horizontal",
  defaultTab: i,
  description: r,
  className: u
}) {
  const [f, b] = w(
    i || (d.length > 0 ? d[0].title : "")
  ), t = h, m = d.find((n) => n.title === f);
  return a === "horizontal" ? /* @__PURE__ */ c("div", { className: o("flex flex-col", u), children: [
    r && /* @__PURE__ */ e("div", { className: o("text-muted-foreground mb-2 px-1", t.text), children: r }),
    /* @__PURE__ */ e("div", { className: "flex border-b border-border shrink-0", children: d.map((n) => {
      const s = n.icon, x = n.title === f;
      return /* @__PURE__ */ c(
        "button",
        {
          type: "button",
          onClick: () => {
            n.onClick?.(), n.children && b(n.title);
          },
          className: o(
            "flex items-center font-medium transition-colors border-b-2 -mb-px",
            t.gap,
            t.tabPx,
            t.tabPy,
            t.text,
            x ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/30"
          ),
          children: [
            s && /* @__PURE__ */ e(s, { className: t.icon }),
            /* @__PURE__ */ e("span", { children: n.title }),
            n.badgeText && /* @__PURE__ */ e("span", { className: o("font-normal rounded-sm bg-muted text-muted-foreground/70", t.badgeText, t.badgePx, t.badgePy), children: n.badgeText }),
            /* @__PURE__ */ e(
              P,
              {
                warning: n.warning,
                notification: n.notification
              }
            )
          ]
        },
        n.title
      );
    }) }),
    /* @__PURE__ */ e("div", { className: o("flex-1 min-h-0 overflow-auto", t.contentPadding), children: m?.children })
  ] }) : /* @__PURE__ */ c("div", { className: o("flex gap-0", u), children: [
    r && /* @__PURE__ */ e("div", { className: o("text-muted-foreground mb-2 px-1 col-span-2", t.text), children: r }),
    /* @__PURE__ */ e("div", { className: o("flex flex-col border-r border-border pr-0 shrink-0", t.sidebarMinW), children: d.map((n) => {
      const s = n.icon, x = n.title === f;
      return /* @__PURE__ */ c(
        "button",
        {
          type: "button",
          onClick: () => {
            n.onClick?.(), n.children && b(n.title);
          },
          className: o(
            "flex items-center font-medium transition-colors border-r-2 -mr-px text-left",
            t.gap,
            t.tabPx,
            t.tabPy,
            t.text,
            x ? "border-primary text-foreground bg-muted/30" : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/20"
          ),
          children: [
            s && /* @__PURE__ */ e(s, { className: t.icon }),
            /* @__PURE__ */ e("span", { children: n.title }),
            /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5 ml-auto", children: [
              n.badgeText && /* @__PURE__ */ e("span", { className: o("font-normal rounded-sm bg-muted text-muted-foreground/70", t.badgeText, t.badgePx, t.badgePy), children: n.badgeText }),
              /* @__PURE__ */ e(
                P,
                {
                  warning: n.warning,
                  notification: n.notification
                }
              )
            ] })
          ]
        },
        n.title
      );
    }) }),
    /* @__PURE__ */ e("div", { className: o("flex-1 min-w-0 overflow-auto", t.contentPadding), children: m?.children })
  ] });
}
export {
  z as Group,
  F as GroupConfig,
  j as GroupItem,
  V as GroupTab
};
