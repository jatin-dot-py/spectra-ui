import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { AlertCircle as f, ExternalLink as o, Inbox as u } from "lucide-react";
import { B as d } from "./button-DHQhRgTM.js";
import { c as l } from "./utils-B6yFEsav.js";
import { S as h } from "./spinner-D5WcaOmH.js";
function v({
  icon: r = f,
  title: a,
  actionLabel: c,
  onAction: s,
  learnMoreUrl: i
}) {
  return /* @__PURE__ */ n("div", { className: "flex flex-col items-center justify-center gap-3 p-6 text-center", children: [
    /* @__PURE__ */ e("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ e(r, { className: "h-5 w-5 text-destructive" }) }),
    /* @__PURE__ */ e("p", { className: "text-sm font-medium text-foreground", children: a }),
    /* @__PURE__ */ e(
      d,
      {
        variant: "default",
        size: "sm",
        onClick: s,
        className: "mt-1",
        children: c
      }
    ),
    i && /* @__PURE__ */ n(
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
  title: a,
  actionLabel: c,
  onAction: s,
  learnMoreUrl: i
}) {
  return /* @__PURE__ */ n("div", { className: "flex flex-col items-center justify-center gap-3 p-6 text-center", children: [
    /* @__PURE__ */ e("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-muted", children: /* @__PURE__ */ e(r, { className: "h-5 w-5 text-muted-foreground" }) }),
    /* @__PURE__ */ e("p", { className: "text-sm font-medium text-foreground", children: a }),
    /* @__PURE__ */ e(
      d,
      {
        variant: "default",
        size: "sm",
        onClick: s,
        className: "mt-1",
        children: c
      }
    ),
    i && /* @__PURE__ */ n(
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
function t({ className: r }) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: l(
        "animate-pulse rounded-md bg-muted",
        r
      )
    }
  );
}
function b({
  variant: r = "spinner",
  lines: a = 3,
  title: c,
  className: s
}) {
  return r === "spinner" ? /* @__PURE__ */ n("div", { className: l("flex flex-col items-center justify-center gap-3 p-6 text-center", s), children: [
    /* @__PURE__ */ e(h, { className: "h-6 w-6 text-muted-foreground" }),
    c && /* @__PURE__ */ e("p", { className: "text-sm font-medium text-muted-foreground", children: c })
  ] }) : r === "input" ? /* @__PURE__ */ n("div", { className: l("flex items-center gap-3", s), children: [
    /* @__PURE__ */ e(t, { className: "h-4 w-20" }),
    /* @__PURE__ */ e(t, { className: "h-8 flex-1" })
  ] }) : r === "text" ? /* @__PURE__ */ e("div", { className: l("space-y-2", s), children: Array.from({ length: a }).map((i, m) => /* @__PURE__ */ e(
    t,
    {
      className: l(
        "h-4",
        m === a - 1 ? "w-3/4" : "w-full"
      )
    },
    m
  )) }) : r === "card" ? /* @__PURE__ */ n("div", { className: l("space-y-3 p-4 rounded-lg border border-border", s), children: [
    /* @__PURE__ */ n("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ e(t, { className: "h-10 w-10 rounded-full" }),
      /* @__PURE__ */ n("div", { className: "space-y-1.5 flex-1", children: [
        /* @__PURE__ */ e(t, { className: "h-4 w-1/3" }),
        /* @__PURE__ */ e(t, { className: "h-3 w-1/2" })
      ] })
    ] }),
    /* @__PURE__ */ n("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e(t, { className: "h-4 w-full" }),
      /* @__PURE__ */ e(t, { className: "h-4 w-full" }),
      /* @__PURE__ */ e(t, { className: "h-4 w-2/3" })
    ] })
  ] }) : /* @__PURE__ */ e(t, { className: l("h-20 w-full", s) });
}
export {
  v as Error,
  b as Loading,
  y as NoContent
};
