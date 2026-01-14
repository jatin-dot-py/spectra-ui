import { jsx as e, jsxs as s, Fragment as N } from "react/jsx-runtime";
import { useState as j } from "react";
import { CircleCheck as P, AlertTriangle as T, ChevronDown as A, CircleX as R, Info as F } from "lucide-react";
import { B as h } from "./button-DHQhRgTM.js";
import { S as G } from "./spinner-D5WcaOmH.js";
import { D as b, b as y, c as D, d as k, e as S, f as z } from "./dialog-CDPimJCA.js";
import { c as C } from "./utils-B6yFEsav.js";
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
  onOpenChange: a,
  icon: l,
  iconVariant: r = "default",
  title: t,
  description: i,
  children: n,
  footer: c,
  size: d = "sm"
}) {
  return /* @__PURE__ */ e(b, { open: o, onOpenChange: a, children: /* @__PURE__ */ s(y, { showCloseButton: !0, className: H[d], children: [
    /* @__PURE__ */ e(D, { children: /* @__PURE__ */ s("div", { className: "flex items-start gap-3", children: [
      l && /* @__PURE__ */ e(
        "div",
        {
          className: C(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-md",
            E[r]
          ),
          children: l
        }
      ),
      /* @__PURE__ */ s("div", { className: "flex flex-col gap-1 pt-0.5", children: [
        /* @__PURE__ */ e(k, { children: t }),
        i && /* @__PURE__ */ e(S, { children: i })
      ] })
    ] }) }),
    n && /* @__PURE__ */ e("div", { className: "py-2 min-w-0 overflow-hidden", children: n }),
    /* @__PURE__ */ e(z, { children: c })
  ] }) });
}
function U({
  open: o,
  onOpenChange: a,
  onConfirm: l,
  onCancel: r,
  title: t,
  description: i,
  children: n,
  confirmText: c = "Confirm",
  cancelText: d = "Cancel",
  variant: f = "default",
  loading: u = !1,
  confirmDisabled: x = !1,
  size: p,
  icon: m = P
}) {
  return /* @__PURE__ */ e(
    v,
    {
      open: o,
      onOpenChange: (g) => {
        !g && r && r(), a(g);
      },
      icon: /* @__PURE__ */ e(m, { className: "h-4 w-4" }),
      iconVariant: f === "destructive" ? "error" : "default",
      title: t,
      description: i,
      size: p,
      footer: /* @__PURE__ */ s(N, { children: [
        /* @__PURE__ */ e(h, { variant: "outline", onClick: () => {
          r?.(), a(!1);
        }, disabled: u, children: d }),
        /* @__PURE__ */ s(
          h,
          {
            variant: f === "destructive" ? "destructive" : "default",
            onClick: () => {
              l(), a(!1);
            },
            disabled: u || x,
            children: [
              u && /* @__PURE__ */ e(G, { className: "mr-2 h-3 w-3" }),
              c
            ]
          }
        )
      ] }),
      children: n
    }
  );
}
function Y({
  open: o,
  onOpenChange: a,
  onProceed: l,
  onCancel: r,
  title: t,
  description: i,
  details: n,
  proceedText: c = "Proceed Anyway",
  cancelText: d = "Go Back",
  size: f
}) {
  return /* @__PURE__ */ e(
    v,
    {
      open: o,
      onOpenChange: (m) => {
        !m && r && r(), a(m);
      },
      icon: /* @__PURE__ */ e(T, { className: "h-4 w-4" }),
      iconVariant: "warning",
      title: t,
      description: i,
      size: f,
      footer: /* @__PURE__ */ s(N, { children: [
        /* @__PURE__ */ e(h, { variant: "outline", onClick: () => {
          r?.(), a(!1);
        }, children: d }),
        /* @__PURE__ */ e(h, { variant: "default", onClick: () => {
          l(), a(!1);
        }, children: c })
      ] }),
      children: n && n.length > 0 && /* @__PURE__ */ e("ul", { className: "list-disc pl-4 space-y-1 text-xs text-muted-foreground", children: n.map((m, w) => /* @__PURE__ */ e("li", { children: m }, w)) })
    }
  );
}
function Z({
  open: o,
  onOpenChange: a,
  onRetry: l,
  onDismiss: r,
  title: t = "Something went wrong",
  description: i,
  error: n,
  retryText: c = "Try Again",
  dismissText: d = "Dismiss",
  showRetry: f,
  size: u
}) {
  const [x, p] = j(!1);
  return /* @__PURE__ */ e(
    v,
    {
      open: o,
      onOpenChange: (g) => {
        !g && r && r(), a(g);
      },
      icon: /* @__PURE__ */ e(R, { className: "h-4 w-4" }),
      iconVariant: "error",
      title: t,
      description: i,
      size: u,
      footer: /* @__PURE__ */ s(N, { children: [
        (f ?? !!l) && /* @__PURE__ */ e(h, { variant: "outline", onClick: () => {
          l?.(), a(!1);
        }, children: c }),
        /* @__PURE__ */ e(h, { variant: "default", onClick: () => {
          r?.(), a(!1);
        }, children: d })
      ] }),
      children: n && /* @__PURE__ */ s("div", { className: "space-y-2", children: [
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            onClick: () => p(!x),
            className: "flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors",
            children: [
              /* @__PURE__ */ e(
                A,
                {
                  className: C(
                    "h-3 w-3 transition-transform",
                    !x && "-rotate-90"
                  )
                }
              ),
              /* @__PURE__ */ e("span", { children: "Technical Details" })
            ]
          }
        ),
        x && /* @__PURE__ */ e("div", { className: "rounded-md bg-muted p-3 font-mono text-xs text-muted-foreground overflow-auto max-h-32 break-all", children: /* @__PURE__ */ e("pre", { className: "whitespace-pre-wrap", children: n }) })
      ] })
    }
  );
}
function _({
  open: o,
  onOpenChange: a,
  title: l,
  description: r,
  children: t,
  dismissText: i = "Got it",
  size: n
}) {
  return /* @__PURE__ */ e(
    v,
    {
      open: o,
      onOpenChange: a,
      icon: /* @__PURE__ */ e(F, { className: "h-4 w-4" }),
      iconVariant: "info",
      title: l,
      description: r,
      size: n,
      footer: /* @__PURE__ */ e(h, { variant: "default", onClick: () => {
        a(!1);
      }, children: i }),
      children: t
    }
  );
}
function $({
  open: o,
  onOpenChange: a,
  title: l,
  description: r,
  icon: t,
  children: i
}) {
  return /* @__PURE__ */ e(b, { open: o, onOpenChange: a, children: /* @__PURE__ */ s(
    y,
    {
      showCloseButton: !0,
      className: C(
        // Near full-screen dimensions
        "sm:max-w-[98vw] sm:max-h-[98vh] h-[98vh]",
        // Fixed layout - no content wrapping
        "flex flex-col",
        // Remove default gap since we handle our own spacing
        "gap-0"
      ),
      children: [
        /* @__PURE__ */ e(D, { className: "shrink-0 pb-4 border-b border-border", children: /* @__PURE__ */ s("div", { className: "flex items-start gap-3", children: [
          t && /* @__PURE__ */ e("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary", children: /* @__PURE__ */ e(t, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ s("div", { className: "flex flex-col gap-1 pt-0.5", children: [
            /* @__PURE__ */ e(k, { children: l }),
            r && /* @__PURE__ */ e(S, { children: r })
          ] })
        ] }) }),
        /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto overflow-x-hidden py-4", children: i })
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
