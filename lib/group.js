import { jsxs as x, jsx as t } from "react/jsx-runtime";
import C, { useState as w, isValidElement as N, Children as k } from "react";
import { c as o } from "./utils-B6yFEsav.js";
import { ChevronDown as I, AlertCircle as A, AlertTriangle as S } from "lucide-react";
import { I as E } from "./InfoPopover-CfMOxnPa.js";
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
function D({
  title: d,
  icon: a,
  children: i,
  collapsible: e = !0,
  defaultExpanded: p = !0,
  indentChildren: c = !0,
  actionIcon: l,
  onActionIconClick: f,
  badgeText: r,
  alwaysShowAction: g = !1,
  size: n = "sm",
  info: u
}) {
  const [b, y] = w(p), s = h[n], P = e ? b : !0;
  return /* @__PURE__ */ x("div", { children: [
    /* @__PURE__ */ x(
      "div",
      {
        role: e ? "button" : void 0,
        tabIndex: e ? 0 : void 0,
        onClick: () => {
          e && y(!b);
        },
        onKeyDown: (m) => {
          (m.key === "Enter" || m.key === " ") && e && (m.preventDefault(), y(!b));
        },
        className: o(
          "w-full flex items-center justify-between font-medium text-muted-foreground transition-colors group  tracking-wider select-none",
          s.headerPy,
          s.text,
          e && "hover:text-foreground cursor-pointer"
        ),
        children: [
          /* @__PURE__ */ x("div", { className: o("flex items-center", s.gap), children: [
            /* @__PURE__ */ t(
              I,
              {
                className: o(
                  "transition-transform",
                  s.iconSm,
                  !P && "-rotate-90",
                  !e && "opacity-30"
                )
              }
            ),
            a && /* @__PURE__ */ t(a, { className: s.icon }),
            /* @__PURE__ */ t("span", { children: d }),
            r && /* @__PURE__ */ t("span", { className: o("font-normal normal-case rounded-sm bg-muted text-muted-foreground/70", s.badgeText, s.badgePx, s.badgePy), children: r }),
            u && /* @__PURE__ */ t("span", { onClick: (m) => m.stopPropagation(), children: /* @__PURE__ */ t(
              E,
              {
                description: u.description,
                referenceUrl: u.referenceUrl,
                referenceLabel: u.referenceLabel
              }
            ) })
          ] }),
          l && /* @__PURE__ */ t(
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
              children: /* @__PURE__ */ t(l, { className: s.icon })
            }
          )
        ]
      }
    ),
    P && /* @__PURE__ */ t("div", { className: o(s.contentPb, s.contentPt, c && s.indent), children: i })
  ] });
}
function T(d) {
  return k.toArray(d).flatMap((a) => N(a) && a.type === C.Fragment ? T(a.props.children) : a);
}
function M({ children: d, description: a, size: i = "sm" }) {
  const e = T(d).filter(N), p = h[i];
  return /* @__PURE__ */ x("div", { className: "space-y-1", children: [
    a && /* @__PURE__ */ t("div", { className: o("text-muted-foreground mb-2 px-1", p.text), children: a }),
    e.map((c, l) => /* @__PURE__ */ x("div", { children: [
      l > 0 && /* @__PURE__ */ t("div", { className: "border-t border-border my-2" }),
      c
    ] }, l))
  ] });
}
function F({ items: d, description: a, size: i = "sm" }) {
  return /* @__PURE__ */ t(M, { description: a, size: i, children: d.map((e, p) => /* @__PURE__ */ t(
    D,
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
      size: i,
      children: e.children
    },
    e.title + p
  )) });
}
function v({
  warning: d,
  error: a,
  notification: i,
  size: e
}) {
  const p = e === "sm" ? "h-3 w-3" : e === "md" ? "h-3.5 w-3.5" : "h-4 w-4";
  if (a)
    return /* @__PURE__ */ t(
      A,
      {
        className: o(p, "text-destructive"),
        "aria-label": "Error"
      }
    );
  if (d)
    return /* @__PURE__ */ t(
      S,
      {
        className: o(p, "text-amber-500"),
        "aria-label": "Warning"
      }
    );
  if (i !== void 0 && i !== !1) {
    const c = typeof i == "number" ? i : null, l = c !== null ? c > 99 ? "99+" : c.toString() : null;
    return l ? /* @__PURE__ */ t(
      "span",
      {
        className: o(
          "inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground font-medium",
          e === "sm" ? "min-w-[16px] h-4 px-1 text-[10px]" : "min-w-[18px] h-[18px] px-1.5 text-[11px]"
        ),
        "aria-label": `${c} notifications`,
        children: l
      }
    ) : /* @__PURE__ */ t(
      "span",
      {
        className: o(
          "rounded-full bg-primary",
          e === "sm" ? "h-2 w-2" : "h-2.5 w-2.5"
        ),
        "aria-label": "New notification"
      }
    );
  }
  return null;
}
function R({
  items: d,
  orientation: a = "horizontal",
  defaultTab: i,
  description: e,
  className: p,
  size: c = "sm"
}) {
  const [l, f] = w(
    i || (d.length > 0 ? d[0].title : "")
  ), r = h[c], g = d.find((n) => n.title === l);
  return a === "horizontal" ? /* @__PURE__ */ x("div", { className: o("flex flex-col", p), children: [
    e && /* @__PURE__ */ t("div", { className: o("text-muted-foreground mb-2 px-1", r.text), children: e }),
    /* @__PURE__ */ t("div", { className: "flex border-b border-border shrink-0", children: d.map((n) => {
      const u = n.icon, b = n.title === l;
      return /* @__PURE__ */ x(
        "button",
        {
          type: "button",
          onClick: () => f(n.title),
          className: o(
            "flex items-center font-medium transition-colors border-b-2 -mb-px",
            r.gap,
            r.tabPx,
            r.tabPy,
            r.text,
            b ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/30"
          ),
          children: [
            u && /* @__PURE__ */ t(u, { className: r.icon }),
            /* @__PURE__ */ t("span", { children: n.title }),
            n.badgeText && /* @__PURE__ */ t("span", { className: o("font-normal rounded-sm bg-muted text-muted-foreground/70", r.badgeText, r.badgePx, r.badgePy), children: n.badgeText }),
            /* @__PURE__ */ t(
              v,
              {
                warning: n.warning,
                error: n.error,
                notification: n.notification,
                size: c
              }
            )
          ]
        },
        n.title
      );
    }) }),
    /* @__PURE__ */ t("div", { className: o("flex-1 min-h-0 overflow-auto", r.contentPadding), children: g?.children })
  ] }) : /* @__PURE__ */ x("div", { className: o("flex gap-0", p), children: [
    e && /* @__PURE__ */ t("div", { className: o("text-muted-foreground mb-2 px-1 col-span-2", r.text), children: e }),
    /* @__PURE__ */ t("div", { className: o("flex flex-col border-r border-border pr-0 shrink-0", r.sidebarMinW), children: d.map((n) => {
      const u = n.icon, b = n.title === l;
      return /* @__PURE__ */ x(
        "button",
        {
          type: "button",
          onClick: () => f(n.title),
          className: o(
            "flex items-center font-medium transition-colors border-r-2 -mr-px text-left",
            r.gap,
            r.tabPx,
            r.tabPy,
            r.text,
            b ? "border-primary text-foreground bg-muted/30" : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/20"
          ),
          children: [
            u && /* @__PURE__ */ t(u, { className: r.icon }),
            /* @__PURE__ */ t("span", { children: n.title }),
            /* @__PURE__ */ x("div", { className: "flex items-center gap-1.5 ml-auto", children: [
              n.badgeText && /* @__PURE__ */ t("span", { className: o("font-normal rounded-sm bg-muted text-muted-foreground/70", r.badgeText, r.badgePx, r.badgePy), children: n.badgeText }),
              /* @__PURE__ */ t(
                v,
                {
                  warning: n.warning,
                  error: n.error,
                  notification: n.notification,
                  size: c
                }
              )
            ] })
          ]
        },
        n.title
      );
    }) }),
    /* @__PURE__ */ t("div", { className: o("flex-1 min-w-0 overflow-auto", r.contentPadding), children: g?.children })
  ] });
}
export {
  M as Group,
  F as GroupConfig,
  D as GroupItem,
  R as GroupTab
};
