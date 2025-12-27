import { jsxs as s, jsx as e } from "react/jsx-runtime";
import { AlertCircle as f, ExternalLink as o, Inbox as u } from "lucide-react";
import { B as d } from "./button-DHQhRgTM.js";
import { c as a } from "./utils-B6yFEsav.js";
import { S as h } from "./spinner-D5WcaOmH.js";
function v({
  icon: r = f,
  title: c,
  actionLabel: l,
  onAction: t,
  learnMoreUrl: i
}) {
  return /* @__PURE__ */ s("div", { className: "flex flex-col items-center justify-center gap-3 p-6 text-center", children: [
    /* @__PURE__ */ e("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ e(r, { className: "h-5 w-5 text-destructive" }) }),
    /* @__PURE__ */ e("p", { className: "text-sm font-medium text-foreground", children: c }),
    /* @__PURE__ */ e(
      d,
      {
        variant: "default",
        size: "sm",
        onClick: t,
        className: "mt-1",
        children: l
      }
    ),
    i && /* @__PURE__ */ s(
      "a",
      {
        href: i,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors",
        children: [
          "Learn more ",
          /* @__PURE__ */ e(o, { className: "h-3 w-3" })
        ]
      }
    )
  ] });
}
function y({
  icon: r = u,
  title: c,
  actionLabel: l,
  onAction: t,
  learnMoreUrl: i
}) {
  return /* @__PURE__ */ s("div", { className: "flex flex-col items-center justify-center gap-3 p-6 text-center", children: [
    /* @__PURE__ */ e("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-muted", children: /* @__PURE__ */ e(r, { className: "h-5 w-5 text-muted-foreground" }) }),
    /* @__PURE__ */ e("p", { className: "text-sm font-medium text-foreground", children: c }),
    l && t && /* @__PURE__ */ e(
      d,
      {
        variant: "default",
        size: "sm",
        onClick: t,
        className: "mt-1",
        children: l
      }
    ),
    i && /* @__PURE__ */ s(
      "a",
      {
        href: i,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors",
        children: [
          "Learn more ",
          /* @__PURE__ */ e(o, { className: "h-3 w-3" })
        ]
      }
    )
  ] });
}
function n({ className: r }) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: a(
        "animate-pulse rounded-md bg-muted",
        r
      )
    }
  );
}
function b({
  variant: r = "spinner",
  lines: c = 3,
  title: l,
  className: t
}) {
  return r === "spinner" ? /* @__PURE__ */ s("div", { className: a("flex flex-col items-center justify-center gap-3 p-6 text-center", t), children: [
    /* @__PURE__ */ e(h, { className: "h-6 w-6 text-muted-foreground" }),
    l && /* @__PURE__ */ e("p", { className: "text-sm font-medium text-muted-foreground", children: l })
  ] }) : r === "input" ? /* @__PURE__ */ s("div", { className: a("flex items-center gap-3", t), children: [
    /* @__PURE__ */ e(n, { className: "h-4 w-20" }),
    /* @__PURE__ */ e(n, { className: "h-8 flex-1" })
  ] }) : r === "text" ? /* @__PURE__ */ e("div", { className: a("space-y-2", t), children: Array.from({ length: c }).map((i, m) => /* @__PURE__ */ e(
    n,
    {
      className: a(
        "h-4",
        m === c - 1 ? "w-3/4" : "w-full"
      )
    },
    m
  )) }) : r === "card" ? /* @__PURE__ */ s("div", { className: a("space-y-3 p-4 rounded-lg border border-border", t), children: [
    /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ e(n, { className: "h-10 w-10 rounded-full" }),
      /* @__PURE__ */ s("div", { className: "space-y-1.5 flex-1", children: [
        /* @__PURE__ */ e(n, { className: "h-4 w-1/3" }),
        /* @__PURE__ */ e(n, { className: "h-3 w-1/2" })
      ] })
    ] }),
    /* @__PURE__ */ s("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e(n, { className: "h-4 w-full" }),
      /* @__PURE__ */ e(n, { className: "h-4 w-full" }),
      /* @__PURE__ */ e(n, { className: "h-4 w-2/3" })
    ] })
  ] }) : /* @__PURE__ */ e(n, { className: a("h-20 w-full", t) });
}
export {
  v as Error,
  b as Loading,
  y as NoContent
};
