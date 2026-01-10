import { jsx as e, jsxs as l, Fragment as C } from "react/jsx-runtime";
import { useState as S } from "react";
import { CircleCheck as B, AlertTriangle as V, ChevronDown as T, CircleX as j, Info as A } from "lucide-react";
import { B as h } from "./button-DHQhRgTM.js";
import { S as E } from "./spinner-D5WcaOmH.js";
import { D as P, b as F, c as G, d as I, e as z, f as H } from "./dialog-CDPimJCA.js";
import { c as y } from "./utils-B6yFEsav.js";
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
function v({
  open: s,
  onOpenChange: t,
  icon: r,
  iconVariant: n = "default",
  title: o,
  description: i,
  children: a,
  footer: c,
  size: d = "sm"
}) {
  return /* @__PURE__ */ e(P, { open: s, onOpenChange: t, children: /* @__PURE__ */ l(F, { showCloseButton: !0, className: R[d], children: [
    /* @__PURE__ */ e(G, { children: /* @__PURE__ */ l("div", { className: "flex items-start gap-3", children: [
      r && /* @__PURE__ */ e(
        "div",
        {
          className: y(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-md",
            M[n]
          ),
          children: r
        }
      ),
      /* @__PURE__ */ l("div", { className: "flex flex-col gap-1 pt-0.5", children: [
        /* @__PURE__ */ e(I, { children: o }),
        i && /* @__PURE__ */ e(z, { children: i })
      ] })
    ] }) }),
    a && /* @__PURE__ */ e("div", { className: "py-2", children: a }),
    /* @__PURE__ */ e(H, { children: c })
  ] }) });
}
function Z({
  open: s,
  onOpenChange: t,
  onConfirm: r,
  onCancel: n,
  title: o,
  description: i,
  children: a,
  confirmText: c = "Confirm",
  cancelText: d = "Cancel",
  variant: f = "default",
  loading: u = !1,
  size: g
}) {
  return /* @__PURE__ */ e(
    v,
    {
      open: s,
      onOpenChange: (x) => {
        !x && n && n(), t(x);
      },
      icon: /* @__PURE__ */ e(B, { className: "h-4 w-4" }),
      iconVariant: f === "destructive" ? "error" : "default",
      title: o,
      description: i,
      size: g,
      footer: /* @__PURE__ */ l(C, { children: [
        /* @__PURE__ */ e(h, { variant: "outline", onClick: () => {
          n?.(), t(!1);
        }, disabled: u, children: d }),
        /* @__PURE__ */ l(
          h,
          {
            variant: f === "destructive" ? "destructive" : "default",
            onClick: () => {
              r(), t(!1);
            },
            disabled: u,
            children: [
              u && /* @__PURE__ */ e(E, { className: "mr-2 h-3 w-3" }),
              c
            ]
          }
        )
      ] }),
      children: a
    }
  );
}
function _({
  open: s,
  onOpenChange: t,
  onProceed: r,
  onCancel: n,
  title: o,
  description: i,
  details: a,
  proceedText: c = "Proceed Anyway",
  cancelText: d = "Go Back",
  size: f
}) {
  return /* @__PURE__ */ e(
    v,
    {
      open: s,
      onOpenChange: (m) => {
        !m && n && n(), t(m);
      },
      icon: /* @__PURE__ */ e(V, { className: "h-4 w-4" }),
      iconVariant: "warning",
      title: o,
      description: i,
      size: f,
      footer: /* @__PURE__ */ l(C, { children: [
        /* @__PURE__ */ e(h, { variant: "outline", onClick: () => {
          n?.(), t(!1);
        }, children: d }),
        /* @__PURE__ */ e(h, { variant: "default", onClick: () => {
          r(), t(!1);
        }, children: c })
      ] }),
      children: a && a.length > 0 && /* @__PURE__ */ e("ul", { className: "list-disc pl-4 space-y-1 text-xs text-muted-foreground", children: a.map((m, p) => /* @__PURE__ */ e("li", { children: m }, p)) })
    }
  );
}
function $({
  open: s,
  onOpenChange: t,
  onRetry: r,
  onDismiss: n,
  title: o = "Something went wrong",
  description: i,
  error: a,
  retryText: c = "Try Again",
  dismissText: d = "Dismiss",
  showRetry: f,
  size: u
}) {
  const [g, w] = S(!1), m = f ?? !!r, p = (b) => {
    !b && n && n(), t(b);
  }, x = () => {
    r?.(), t(!1);
  }, k = () => {
    n?.(), t(!1);
  }, D = a instanceof Error ? a.message : a, N = a instanceof Error ? a.stack : void 0;
  return /* @__PURE__ */ e(
    v,
    {
      open: s,
      onOpenChange: p,
      icon: /* @__PURE__ */ e(j, { className: "h-4 w-4" }),
      iconVariant: "error",
      title: o,
      description: i,
      size: u,
      footer: /* @__PURE__ */ l(C, { children: [
        m && /* @__PURE__ */ e(h, { variant: "outline", onClick: x, children: c }),
        /* @__PURE__ */ e(h, { variant: "default", onClick: k, children: d })
      ] }),
      children: D && /* @__PURE__ */ l("div", { className: "space-y-2", children: [
        /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            onClick: () => w(!g),
            className: "flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors",
            children: [
              /* @__PURE__ */ e(
                T,
                {
                  className: y(
                    "h-3 w-3 transition-transform",
                    !g && "-rotate-90"
                  )
                }
              ),
              /* @__PURE__ */ e("span", { children: "Technical Details" })
            ]
          }
        ),
        g && /* @__PURE__ */ l("div", { className: "rounded-md bg-muted p-3 font-mono text-xs text-muted-foreground overflow-auto max-h-32", children: [
          /* @__PURE__ */ e("p", { children: D }),
          N && /* @__PURE__ */ e("pre", { className: "mt-2 text-[10px] opacity-70 whitespace-pre-wrap", children: N })
        ] })
      ] })
    }
  );
}
function ee({
  open: s,
  onOpenChange: t,
  title: r,
  description: n,
  children: o,
  dismissText: i = "Got it",
  size: a
}) {
  return /* @__PURE__ */ e(
    v,
    {
      open: s,
      onOpenChange: t,
      icon: /* @__PURE__ */ e(A, { className: "h-4 w-4" }),
      iconVariant: "info",
      title: r,
      description: n,
      size: a,
      footer: /* @__PURE__ */ e(h, { variant: "default", onClick: () => {
        t(!1);
      }, children: i }),
      children: o
    }
  );
}
export {
  Z as ConfirmDialog,
  $ as ErrorDialog,
  ee as InfoDialog,
  _ as WarningDialog
};
