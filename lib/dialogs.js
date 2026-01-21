import { jsx as e, jsxs as s, Fragment as y } from "react/jsx-runtime";
import { useState as V } from "react";
import { CircleCheck as P, AlertTriangle as T, ChevronDown as A, CircleX as R, Info as F } from "lucide-react";
import { B as h } from "./button-DHQhRgTM.js";
import { S as G } from "./spinner-D5WcaOmH.js";
import { D as C, b, c as D, d as k, e as S, f as z } from "./dialog-CDPimJCA.js";
import { c as g } from "./utils-B6yFEsav.js";
import "radix-ui";
import "clsx";
import "tailwind-merge";
const E = {
  default: "bg-primary/10 text-primary",
  warning: "bg-amber-500/10 text-amber-500",
  error: "bg-destructive/10 text-destructive",
  info: "bg-blue-500/10 text-blue-500"
}, H = {
  sm: "sm:max-w-sm",
  // 384px
  md: "sm:max-w-md",
  // 448px
  lg: "sm:max-w-lg",
  // 512px
  xl: "sm:max-w-xl",
  // 576px
  full: "sm:max-w-[90vw]"
  // 90% viewport width
};
function v({
  open: o,
  onOpenChange: n,
  icon: r,
  iconVariant: a = "default",
  title: t,
  description: i,
  children: l,
  footer: c,
  size: d = "sm"
}) {
  return /* @__PURE__ */ e(C, { open: o, onOpenChange: n, children: /* @__PURE__ */ s(b, { showCloseButton: !0, className: H[d], children: [
    /* @__PURE__ */ e(D, { children: /* @__PURE__ */ s("div", { className: "flex items-start gap-3", children: [
      r && /* @__PURE__ */ e(
        "div",
        {
          className: g(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-md",
            E[a]
          ),
          children: r
        }
      ),
      /* @__PURE__ */ s("div", { className: "flex flex-col gap-1 pt-0.5", children: [
        /* @__PURE__ */ e(k, { children: t }),
        i && /* @__PURE__ */ e(S, { children: i })
      ] })
    ] }) }),
    l && /* @__PURE__ */ e("div", { className: "py-2 min-w-0 overflow-hidden", children: l }),
    /* @__PURE__ */ e(z, { children: c })
  ] }) });
}
function U({
  open: o,
  onOpenChange: n,
  onConfirm: r,
  onCancel: a,
  title: t,
  description: i,
  children: l,
  confirmText: c = "Confirm",
  cancelText: d = "Cancel",
  variant: f = "default",
  loading: u = !1,
  confirmDisabled: x = !1,
  size: w,
  icon: m = P
}) {
  return /* @__PURE__ */ e(
    v,
    {
      open: o,
      onOpenChange: (p) => {
        !p && a && a(), n(p);
      },
      icon: /* @__PURE__ */ e(m, { className: "h-4 w-4" }),
      iconVariant: f === "destructive" ? "error" : "default",
      title: t,
      description: i,
      size: w,
      footer: /* @__PURE__ */ s(y, { children: [
        /* @__PURE__ */ e(h, { variant: "outline", onClick: () => {
          a?.(), n(!1);
        }, disabled: u, children: d }),
        /* @__PURE__ */ s(
          h,
          {
            variant: f === "destructive" ? "destructive" : "default",
            onClick: () => {
              r(), n(!1);
            },
            disabled: u || x,
            children: [
              u && /* @__PURE__ */ e(G, { className: "mr-2 h-3 w-3" }),
              c
            ]
          }
        )
      ] }),
      children: l
    }
  );
}
function Y({
  open: o,
  onOpenChange: n,
  onProceed: r,
  onCancel: a,
  title: t,
  description: i,
  details: l,
  proceedText: c = "Proceed Anyway",
  cancelText: d = "Go Back",
  size: f
}) {
  return /* @__PURE__ */ e(
    v,
    {
      open: o,
      onOpenChange: (m) => {
        !m && a && a(), n(m);
      },
      icon: /* @__PURE__ */ e(T, { className: "h-4 w-4" }),
      iconVariant: "warning",
      title: t,
      description: i,
      size: f,
      footer: /* @__PURE__ */ s(y, { children: [
        /* @__PURE__ */ e(h, { variant: "outline", onClick: () => {
          a?.(), n(!1);
        }, children: d }),
        /* @__PURE__ */ e(h, { variant: "default", onClick: () => {
          r(), n(!1);
        }, children: c })
      ] }),
      children: l && l.length > 0 && /* @__PURE__ */ e("ul", { className: "list-disc pl-4 space-y-1 text-xs text-muted-foreground", children: l.map((m, N) => /* @__PURE__ */ e("li", { children: m }, N)) })
    }
  );
}
function Z({
  open: o,
  onOpenChange: n,
  onRetry: r,
  onDismiss: a,
  title: t = "Something went wrong",
  description: i,
  error: l,
  retryText: c = "Try Again",
  dismissText: d = "Dismiss",
  showRetry: f,
  size: u
}) {
  const [x, w] = V(!1);
  return /* @__PURE__ */ e(
    v,
    {
      open: o,
      onOpenChange: (p) => {
        !p && a && a(), n(p);
      },
      icon: /* @__PURE__ */ e(R, { className: "h-4 w-4" }),
      iconVariant: "error",
      title: t,
      description: i,
      size: u,
      footer: /* @__PURE__ */ s(y, { children: [
        (f ?? !!r) && /* @__PURE__ */ e(h, { variant: "outline", onClick: () => {
          r?.(), n(!1);
        }, children: c }),
        /* @__PURE__ */ e(h, { variant: "default", onClick: () => {
          a?.(), n(!1);
        }, children: d })
      ] }),
      children: l && /* @__PURE__ */ s("div", { className: "space-y-2", children: [
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            onClick: () => w(!x),
            className: "flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors",
            children: [
              /* @__PURE__ */ e(
                A,
                {
                  className: g(
                    "h-3 w-3 transition-transform",
                    !x && "-rotate-90"
                  )
                }
              ),
              /* @__PURE__ */ e("span", { children: "Technical Details" })
            ]
          }
        ),
        x && /* @__PURE__ */ e("div", { className: "rounded-md bg-muted p-3 font-mono text-xs text-muted-foreground overflow-auto max-h-32 break-all", children: /* @__PURE__ */ e("pre", { className: "whitespace-pre-wrap", children: l }) })
      ] })
    }
  );
}
function _({
  open: o,
  onOpenChange: n,
  title: r,
  description: a,
  children: t,
  dismissText: i = "Got it",
  size: l
}) {
  return /* @__PURE__ */ e(
    v,
    {
      open: o,
      onOpenChange: n,
      icon: /* @__PURE__ */ e(F, { className: "h-4 w-4" }),
      iconVariant: "info",
      title: r,
      description: a,
      size: l,
      footer: /* @__PURE__ */ e(h, { variant: "default", onClick: () => {
        n(!1);
      }, children: i }),
      children: t
    }
  );
}
function $({
  open: o,
  onOpenChange: n,
  title: r,
  description: a,
  icon: t,
  children: i
}) {
  const l = !!a;
  return /* @__PURE__ */ e(C, { open: o, onOpenChange: n, children: /* @__PURE__ */ s(
    b,
    {
      showCloseButton: !0,
      className: g(
        "sm:max-w-[98vw] sm:max-h-[98vh] h-[98vh]",
        "flex flex-col gap-0 p-0",
        // p-0 is the absolute minimum
        "overflow-hidden"
      ),
      children: [
        /* @__PURE__ */ s(
          D,
          {
            className: g(
              "shrink-0 border-b border-border px-3 flex flex-row items-center gap-3 space-y-0",
              l ? "py-2.5" : "py-1.5"
              // Ultra-compact toggle
            ),
            children: [
              t && /* @__PURE__ */ e("div", { className: g(
                "flex shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary",
                l ? "h-8 w-8" : "h-6 w-6"
                // Scale icon container
              ), children: /* @__PURE__ */ e(t, { className: l ? "h-4 w-4" : "h-3.5 w-3.5" }) }),
              /* @__PURE__ */ s("div", { className: "flex flex-col justify-center min-w-0", children: [
                /* @__PURE__ */ e(k, { className: "text-sm font-semibold leading-none truncate", children: r }),
                a && /* @__PURE__ */ e(S, { className: "text-[12px] leading-tight mt-1 line-clamp-1", children: a })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto p-2", children: i })
      ]
    }
  ) });
}
export {
  U as ConfirmDialog,
  Z as ErrorDialog,
  _ as InfoDialog,
  $ as PanelDialog,
  Y as WarningDialog
};
