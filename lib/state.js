import { jsxs as r, jsx as t } from "react/jsx-runtime";
import { AlertCircle as g, ExternalLink as h, Inbox as x } from "lucide-react";
import { c as e } from "./utils-B6yFEsav.js";
import { B as f } from "./button-DHQhRgTM.js";
import { S as p } from "./spinner-D5WcaOmH.js";
const m = {
  sm: {
    // Container
    padding: "p-3",
    gap: "gap-1.5",
    // Icon container
    iconContainer: "h-8 w-8",
    icon: "h-4 w-4",
    // Text
    text: "text-xs",
    titleText: "text-sm",
    linkText: "text-[10px]",
    linkIcon: "h-2.5 w-2.5",
    // Button
    buttonMargin: "mt-0.5",
    // Skeleton
    skeletonGap: "gap-2",
    avatarSize: "h-8 w-8",
    lineHeight: "h-3",
    inputHeight: "h-6",
    labelWidth: "w-16"
  },
  md: {
    // Container
    padding: "p-4",
    gap: "gap-2",
    // Icon container
    iconContainer: "h-10 w-10",
    icon: "h-5 w-5",
    // Text
    text: "text-sm",
    titleText: "text-sm",
    linkText: "text-xs",
    linkIcon: "h-3 w-3",
    // Button
    buttonMargin: "mt-1",
    // Skeleton
    skeletonGap: "gap-3",
    avatarSize: "h-10 w-10",
    lineHeight: "h-4",
    inputHeight: "h-8",
    labelWidth: "w-20"
  },
  lg: {
    // Container
    padding: "p-5",
    gap: "gap-2.5",
    // Icon container
    iconContainer: "h-12 w-12",
    icon: "h-6 w-6",
    // Text
    text: "text-base",
    titleText: "text-base",
    linkText: "text-sm",
    linkIcon: "h-3.5 w-3.5",
    // Button
    buttonMargin: "mt-2",
    // Skeleton
    skeletonGap: "gap-4",
    avatarSize: "h-12 w-12",
    lineHeight: "h-5",
    inputHeight: "h-10",
    labelWidth: "w-24"
  }
};
function H({
  icon: a = g,
  title: d,
  actionLabel: c,
  onAction: l,
  learnMoreUrl: o,
  size: n = "md"
}) {
  const i = m[n];
  return /* @__PURE__ */ r("div", { className: e("flex flex-col items-center justify-center text-center", i.padding, i.gap), children: [
    /* @__PURE__ */ t("div", { className: e("flex items-center justify-center rounded-full bg-destructive/10", i.iconContainer), children: /* @__PURE__ */ t(a, { className: e("text-destructive", i.icon) }) }),
    /* @__PURE__ */ t("p", { className: e("font-medium text-foreground", i.titleText), children: d }),
    /* @__PURE__ */ t(
      f,
      {
        variant: "default",
        size: n === "lg" ? "default" : "sm",
        onClick: l,
        className: i.buttonMargin,
        children: c
      }
    ),
    o && /* @__PURE__ */ r(
      "a",
      {
        href: o,
        target: "_blank",
        rel: "noopener noreferrer",
        className: e("inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors", i.linkText),
        children: [
          "Learn more ",
          /* @__PURE__ */ t(h, { className: i.linkIcon })
        ]
      }
    )
  ] });
}
function T({
  icon: a = x,
  title: d,
  actionLabel: c,
  onAction: l,
  learnMoreUrl: o,
  size: n = "md"
}) {
  const i = m[n];
  return /* @__PURE__ */ r("div", { className: e("flex flex-col items-center justify-center text-center", i.padding, i.gap), children: [
    /* @__PURE__ */ r("div", { className: e("flex items-center", i.gap), children: [
      /* @__PURE__ */ t("div", { className: e("flex items-center justify-center rounded-full bg-muted shrink-0", i.iconContainer), children: /* @__PURE__ */ t(a, { className: e("text-muted-foreground", i.icon) }) }),
      /* @__PURE__ */ t("p", { className: e("font-medium text-foreground", i.titleText), children: d })
    ] }),
    c && l || o ? /* @__PURE__ */ r("div", { className: "flex items-center gap-3", children: [
      c && l && /* @__PURE__ */ t(
        f,
        {
          variant: "default",
          size: n === "lg" ? "default" : "sm",
          onClick: l,
          children: c
        }
      ),
      o && /* @__PURE__ */ r(
        "a",
        {
          href: o,
          target: "_blank",
          rel: "noopener noreferrer",
          className: e("inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors", i.linkText),
          children: [
            "Learn more ",
            /* @__PURE__ */ t(h, { className: i.linkIcon })
          ]
        }
      )
    ] }) : null
  ] });
}
function s({ className: a }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: e(
        "animate-pulse rounded-md bg-muted",
        a
      )
    }
  );
}
function y({
  variant: a = "spinner",
  lines: d = 3,
  title: c,
  className: l,
  size: o = "md"
}) {
  const n = m[o];
  return a === "spinner" ? /* @__PURE__ */ r("div", { className: e("flex items-center justify-center", n.padding, n.gap, l), children: [
    /* @__PURE__ */ t(p, { className: e("text-muted-foreground", n.icon) }),
    c && /* @__PURE__ */ t("p", { className: e("font-medium text-muted-foreground", n.titleText), children: c })
  ] }) : a === "input" ? /* @__PURE__ */ r("div", { className: e("flex items-center", n.skeletonGap, l), children: [
    /* @__PURE__ */ t(s, { className: e(n.lineHeight, n.labelWidth) }),
    /* @__PURE__ */ t(s, { className: e(n.inputHeight, "flex-1") })
  ] }) : a === "text" ? /* @__PURE__ */ t("div", { className: e("space-y-2", l), children: Array.from({ length: d }).map((i, u) => /* @__PURE__ */ t(
    s,
    {
      className: e(
        n.lineHeight,
        u === d - 1 ? "w-3/4" : "w-full"
      )
    },
    u
  )) }) : a === "card" ? /* @__PURE__ */ r("div", { className: e("space-y-3 rounded-lg border border-border", n.padding, l), children: [
    /* @__PURE__ */ r("div", { className: e("flex items-center", n.skeletonGap), children: [
      /* @__PURE__ */ t(s, { className: e("rounded-full", n.avatarSize) }),
      /* @__PURE__ */ r("div", { className: "space-y-1.5 flex-1", children: [
        /* @__PURE__ */ t(s, { className: e(n.lineHeight, "w-1/3") }),
        /* @__PURE__ */ t(s, { className: e(n.lineHeight, "w-1/2") })
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "space-y-2", children: [
      /* @__PURE__ */ t(s, { className: e(n.lineHeight, "w-full") }),
      /* @__PURE__ */ t(s, { className: e(n.lineHeight, "w-full") }),
      /* @__PURE__ */ t(s, { className: e(n.lineHeight, "w-2/3") })
    ] })
  ] }) : /* @__PURE__ */ t(s, { className: e("h-20 w-full", l) });
}
export {
  H as Error,
  y as Loading,
  T as NoContent
};
