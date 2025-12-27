import { jsxs as a, jsx as e } from "react/jsx-runtime";
import { useState as b, Children as g, isValidElement as v } from "react";
import { ChevronDown as y } from "lucide-react";
import { c as s } from "./utils-B6yFEsav.js";
function N({
  title: o,
  icon: d,
  children: r,
  collapsible: n = !0,
  defaultExpanded: c = !0,
  indentChildren: x = !0,
  actionIcon: i,
  onActionIconClick: t,
  badgeText: l,
  alwaysShowAction: u = !1
}) {
  const [m, f] = b(c), h = n ? m : !0;
  return /* @__PURE__ */ a("div", { children: [
    /* @__PURE__ */ a(
      "div",
      {
        role: n ? "button" : void 0,
        tabIndex: n ? 0 : void 0,
        onClick: () => {
          n && f(!m);
        },
        onKeyDown: (p) => {
          (p.key === "Enter" || p.key === " ") && n && (p.preventDefault(), f(!m));
        },
        className: s(
          "w-full flex items-center justify-between py-1.5 text-xs font-medium text-muted-foreground transition-colors group uppercase tracking-wider select-none",
          n && "hover:text-foreground cursor-pointer"
        ),
        children: [
          /* @__PURE__ */ a("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ e(
              y,
              {
                className: s(
                  "h-3 w-3 transition-transform",
                  !h && "-rotate-90",
                  !n && "opacity-30"
                )
              }
            ),
            d && /* @__PURE__ */ e(d, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ e("span", { children: o }),
            l && /* @__PURE__ */ e("span", { className: "text-[10px] font-normal normal-case px-1.5 py-0.5 rounded-sm bg-muted text-muted-foreground/70", children: l })
          ] }),
          i && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: (p) => {
                p.stopPropagation(), t?.();
              },
              className: s(
                "p-0.5 rounded-sm hover:bg-muted transition-all",
                u ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              ),
              children: /* @__PURE__ */ e(i, { className: "h-3.5 w-3.5" })
            }
          )
        ]
      }
    ),
    h && /* @__PURE__ */ e("div", { className: s("pb-3 pt-1", x && "pl-4"), children: r })
  ] });
}
function w({ children: o, description: d }) {
  const r = g.toArray(o).filter(v);
  return /* @__PURE__ */ a("div", { className: "space-y-1", children: [
    d && /* @__PURE__ */ e("div", { className: "text-xs text-muted-foreground mb-2 px-1", children: d }),
    r.map((n, c) => /* @__PURE__ */ a("div", { children: [
      c > 0 && /* @__PURE__ */ e("div", { className: "border-t border-border my-2" }),
      n
    ] }, c))
  ] });
}
function D({ items: o, description: d }) {
  return /* @__PURE__ */ e(w, { description: d, children: o.map((r, n) => /* @__PURE__ */ e(
    N,
    {
      title: r.title,
      icon: r.icon,
      collapsible: r.collapsible,
      defaultExpanded: r.defaultExpanded,
      indentChildren: r.indentChildren,
      actionIcon: r.actionIcon,
      onActionIconClick: r.onActionIconClick,
      badgeText: r.badgeText,
      children: r.children
    },
    r.title + n
  )) });
}
function G({
  items: o,
  orientation: d = "horizontal",
  defaultTab: r,
  description: n
}) {
  const [c, x] = b(
    r || (o.length > 0 ? o[0].title : "")
  ), i = o.find((t) => t.title === c);
  return d === "horizontal" ? /* @__PURE__ */ a("div", { className: "space-y-0", children: [
    n && /* @__PURE__ */ e("div", { className: "text-xs text-muted-foreground mb-2 px-1", children: n }),
    /* @__PURE__ */ e("div", { className: "flex border-b border-border", children: o.map((t) => {
      const l = t.icon, u = t.title === c;
      return /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          onClick: () => x(t.title),
          className: s(
            "flex items-center gap-1.5 px-3 py-2 text-xs font-medium transition-colors border-b-2 -mb-px",
            u ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/30"
          ),
          children: [
            l && /* @__PURE__ */ e(l, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ e("span", { children: t.title }),
            t.badgeText && /* @__PURE__ */ e("span", { className: "text-[10px] font-normal px-1.5 py-0.5 rounded-sm bg-muted text-muted-foreground/70", children: t.badgeText })
          ]
        },
        t.title
      );
    }) }),
    /* @__PURE__ */ e("div", { className: "pt-3", children: i?.children })
  ] }) : /* @__PURE__ */ a("div", { className: "flex gap-0", children: [
    n && /* @__PURE__ */ e("div", { className: "text-xs text-muted-foreground mb-2 px-1 col-span-2", children: n }),
    /* @__PURE__ */ e("div", { className: "flex flex-col border-r border-border pr-0 min-w-[120px]", children: o.map((t) => {
      const l = t.icon, u = t.title === c;
      return /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          onClick: () => x(t.title),
          className: s(
            "flex items-center gap-1.5 px-3 py-2 text-xs font-medium transition-colors border-r-2 -mr-px text-left",
            u ? "border-primary text-foreground bg-muted/30" : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/20"
          ),
          children: [
            l && /* @__PURE__ */ e(l, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ e("span", { children: t.title }),
            t.badgeText && /* @__PURE__ */ e("span", { className: "text-[10px] font-normal px-1.5 py-0.5 rounded-sm bg-muted text-muted-foreground/70 ml-auto", children: t.badgeText })
          ]
        },
        t.title
      );
    }) }),
    /* @__PURE__ */ e("div", { className: "flex-1 pl-4", children: i?.children })
  ] });
}
export {
  w as Group,
  D as GroupConfig,
  N as GroupItem,
  G as GroupTab
};
