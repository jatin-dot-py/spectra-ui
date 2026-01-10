import { jsx as e, jsxs as i, Fragment as N } from "react/jsx-runtime";
import { useState as T } from "react";
import { CircleCheck as A, AlertTriangle as E, ChevronDown as F, CircleX as G, Info as z } from "lucide-react";
import { B as h } from "./button-DHQhRgTM.js";
import { S as H } from "./spinner-D5WcaOmH.js";
import { D as S, b as B, c as V, d as j, e as P, f as I } from "./dialog-CDPimJCA.js";
import { c as C } from "./utils-B6yFEsav.js";
import "radix-ui";
import "clsx";
import "tailwind-merge";
const M = {
  default: "bg-primary/10 text-primary",
  warning: "bg-amber-500/10 text-amber-500",
  error: "bg-destructive/10 text-destructive",
  info: "bg-blue-500/10 text-blue-500"
}, R = {
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
function w({
  open: o,
  onOpenChange: a,
  icon: n,
  iconVariant: r = "default",
  title: l,
  description: s,
  children: t,
  footer: c,
  size: m = "sm"
}) {
  return /* @__PURE__ */ e(S, { open: o, onOpenChange: a, children: /* @__PURE__ */ i(B, { showCloseButton: !0, className: R[m], children: [
    /* @__PURE__ */ e(V, { children: /* @__PURE__ */ i("div", { className: "flex items-start gap-3", children: [
      n && /* @__PURE__ */ e(
        "div",
        {
          className: C(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-md",
            M[r]
          ),
          children: n
        }
      ),
      /* @__PURE__ */ i("div", { className: "flex flex-col gap-1 pt-0.5", children: [
        /* @__PURE__ */ e(j, { children: l }),
        s && /* @__PURE__ */ e(P, { children: s })
      ] })
    ] }) }),
    t && /* @__PURE__ */ e("div", { className: "py-2", children: t }),
    /* @__PURE__ */ e(I, { children: c })
  ] }) });
}
function Z({
  open: o,
  onOpenChange: a,
  onConfirm: n,
  onCancel: r,
  title: l,
  description: s,
  children: t,
  confirmText: c = "Confirm",
  cancelText: m = "Cancel",
  variant: f = "default",
  loading: u = !1,
  confirmDisabled: x = !1,
  size: p,
  icon: d = A
}) {
  return /* @__PURE__ */ e(
    w,
    {
      open: o,
      onOpenChange: (g) => {
        !g && r && r(), a(g);
      },
      icon: /* @__PURE__ */ e(d, { className: "h-4 w-4" }),
      iconVariant: f === "destructive" ? "error" : "default",
      title: l,
      description: s,
      size: p,
      footer: /* @__PURE__ */ i(N, { children: [
        /* @__PURE__ */ e(h, { variant: "outline", onClick: () => {
          r?.(), a(!1);
        }, disabled: u, children: m }),
        /* @__PURE__ */ i(
          h,
          {
            variant: f === "destructive" ? "destructive" : "default",
            onClick: () => {
              n(), a(!1);
            },
            disabled: u || x,
            children: [
              u && /* @__PURE__ */ e(H, { className: "mr-2 h-3 w-3" }),
              c
            ]
          }
        )
      ] }),
      children: t
    }
  );
}
function _({
  open: o,
  onOpenChange: a,
  onProceed: n,
  onCancel: r,
  title: l,
  description: s,
  details: t,
  proceedText: c = "Proceed Anyway",
  cancelText: m = "Go Back",
  size: f
}) {
  return /* @__PURE__ */ e(
    w,
    {
      open: o,
      onOpenChange: (d) => {
        !d && r && r(), a(d);
      },
      icon: /* @__PURE__ */ e(E, { className: "h-4 w-4" }),
      iconVariant: "warning",
      title: l,
      description: s,
      size: f,
      footer: /* @__PURE__ */ i(N, { children: [
        /* @__PURE__ */ e(h, { variant: "outline", onClick: () => {
          r?.(), a(!1);
        }, children: m }),
        /* @__PURE__ */ e(h, { variant: "default", onClick: () => {
          n(), a(!1);
        }, children: c })
      ] }),
      children: t && t.length > 0 && /* @__PURE__ */ e("ul", { className: "list-disc pl-4 space-y-1 text-xs text-muted-foreground", children: t.map((d, v) => /* @__PURE__ */ e("li", { children: d }, v)) })
    }
  );
}
function $({
  open: o,
  onOpenChange: a,
  onRetry: n,
  onDismiss: r,
  title: l = "Something went wrong",
  description: s,
  error: t,
  retryText: c = "Try Again",
  dismissText: m = "Dismiss",
  showRetry: f,
  size: u
}) {
  const [x, p] = T(!1), d = f ?? !!n, v = (k) => {
    !k && r && r(), a(k);
  }, b = () => {
    n?.(), a(!1);
  }, y = () => {
    r?.(), a(!1);
  }, g = t instanceof Error ? t.message : t, D = t instanceof Error ? t.stack : void 0;
  return /* @__PURE__ */ e(
    w,
    {
      open: o,
      onOpenChange: v,
      icon: /* @__PURE__ */ e(G, { className: "h-4 w-4" }),
      iconVariant: "error",
      title: l,
      description: s,
      size: u,
      footer: /* @__PURE__ */ i(N, { children: [
        d && /* @__PURE__ */ e(h, { variant: "outline", onClick: b, children: c }),
        /* @__PURE__ */ e(h, { variant: "default", onClick: y, children: m })
      ] }),
      children: g && /* @__PURE__ */ i("div", { className: "space-y-2", children: [
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            onClick: () => p(!x),
            className: "flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors",
            children: [
              /* @__PURE__ */ e(
                F,
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
        x && /* @__PURE__ */ i("div", { className: "rounded-md bg-muted p-3 font-mono text-xs text-muted-foreground overflow-auto max-h-32", children: [
          /* @__PURE__ */ e("p", { children: g }),
          D && /* @__PURE__ */ e("pre", { className: "mt-2 text-[10px] opacity-70 whitespace-pre-wrap", children: D })
        ] })
      ] })
    }
  );
}
function ee({
  open: o,
  onOpenChange: a,
  title: n,
  description: r,
  children: l,
  dismissText: s = "Got it",
  size: t
}) {
  return /* @__PURE__ */ e(
    w,
    {
      open: o,
      onOpenChange: a,
      icon: /* @__PURE__ */ e(z, { className: "h-4 w-4" }),
      iconVariant: "info",
      title: n,
      description: r,
      size: t,
      footer: /* @__PURE__ */ e(h, { variant: "default", onClick: () => {
        a(!1);
      }, children: s }),
      children: l
    }
  );
}
function ae({
  open: o,
  onOpenChange: a,
  title: n,
  description: r,
  icon: l,
  children: s
}) {
  return /* @__PURE__ */ e(S, { open: o, onOpenChange: a, children: /* @__PURE__ */ i(
    B,
    {
      showCloseButton: !0,
      className: C(
        // Near full-screen dimensions
        "sm:max-w-[90vw] sm:max-h-[90vh] h-[90vh]",
        // Fixed layout - no content wrapping
        "flex flex-col",
        // Remove default gap since we handle our own spacing
        "gap-0"
      ),
      children: [
        /* @__PURE__ */ e(V, { className: "shrink-0 pb-4 border-b border-border", children: /* @__PURE__ */ i("div", { className: "flex items-start gap-3", children: [
          l && /* @__PURE__ */ e("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary", children: /* @__PURE__ */ e(l, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ i("div", { className: "flex flex-col gap-1 pt-0.5", children: [
            /* @__PURE__ */ e(j, { children: n }),
            r && /* @__PURE__ */ e(P, { children: r })
          ] })
        ] }) }),
        /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto overflow-x-hidden py-4", children: s })
      ]
    }
  ) });
}
export {
  Z as ConfirmDialog,
  $ as ErrorDialog,
  ee as InfoDialog,
  ae as PanelDialog,
  _ as WarningDialog
};
