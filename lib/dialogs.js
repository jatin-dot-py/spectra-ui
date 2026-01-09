import { jsx as e, jsxs as l, Fragment as C } from "react/jsx-runtime";
import { useState as y } from "react";
import { CircleCheck as S, AlertTriangle as B, ChevronDown as V, CircleX as T, Info as j } from "lucide-react";
import { B as f } from "./button-DHQhRgTM.js";
import { S as A } from "./spinner-D5WcaOmH.js";
import { D as E, b as P, c as F, d as G, e as I, f as H } from "./dialog-CDPimJCA.js";
import { c as b } from "./utils-B6yFEsav.js";
const M = {
  default: "bg-primary/10 text-primary",
  warning: "bg-amber-500/10 text-amber-500",
  error: "bg-destructive/10 text-destructive",
  info: "bg-blue-500/10 text-blue-500"
};
function x({
  open: o,
  onOpenChange: t,
  icon: r,
  iconVariant: a = "default",
  title: s,
  description: i,
  children: n,
  footer: d
}) {
  return /* @__PURE__ */ e(E, { open: o, onOpenChange: t, children: /* @__PURE__ */ l(P, { showCloseButton: !0, children: [
    /* @__PURE__ */ e(F, { children: /* @__PURE__ */ l("div", { className: "flex items-start gap-3", children: [
      r && /* @__PURE__ */ e(
        "div",
        {
          className: b(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-md",
            M[a]
          ),
          children: r
        }
      ),
      /* @__PURE__ */ l("div", { className: "flex flex-col gap-1 pt-0.5", children: [
        /* @__PURE__ */ e(G, { children: s }),
        i && /* @__PURE__ */ e(I, { children: i })
      ] })
    ] }) }),
    n && /* @__PURE__ */ e("div", { className: "py-2", children: n }),
    /* @__PURE__ */ e(H, { children: d })
  ] }) });
}
function L({
  open: o,
  onOpenChange: t,
  onConfirm: r,
  onCancel: a,
  title: s,
  description: i,
  children: n,
  confirmText: d = "Confirm",
  cancelText: m = "Cancel",
  variant: u = "default",
  loading: c = !1
}) {
  return /* @__PURE__ */ e(
    x,
    {
      open: o,
      onOpenChange: (p) => {
        !p && a && a(), t(p);
      },
      icon: /* @__PURE__ */ e(S, { className: "h-4 w-4" }),
      iconVariant: u === "destructive" ? "error" : "default",
      title: s,
      description: i,
      footer: /* @__PURE__ */ l(C, { children: [
        /* @__PURE__ */ e(f, { variant: "outline", onClick: () => {
          a?.(), t(!1);
        }, disabled: c, children: m }),
        /* @__PURE__ */ l(
          f,
          {
            variant: u === "destructive" ? "destructive" : "default",
            onClick: () => {
              r(), t(!1);
            },
            disabled: c,
            children: [
              c && /* @__PURE__ */ e(A, { className: "mr-2 h-3 w-3" }),
              d
            ]
          }
        )
      ] }),
      children: n
    }
  );
}
function O({
  open: o,
  onOpenChange: t,
  onProceed: r,
  onCancel: a,
  title: s,
  description: i,
  details: n,
  proceedText: d = "Proceed Anyway",
  cancelText: m = "Go Back"
}) {
  return /* @__PURE__ */ e(
    x,
    {
      open: o,
      onOpenChange: (h) => {
        !h && a && a(), t(h);
      },
      icon: /* @__PURE__ */ e(B, { className: "h-4 w-4" }),
      iconVariant: "warning",
      title: s,
      description: i,
      footer: /* @__PURE__ */ l(C, { children: [
        /* @__PURE__ */ e(f, { variant: "outline", onClick: () => {
          a?.(), t(!1);
        }, children: m }),
        /* @__PURE__ */ e(f, { variant: "default", onClick: () => {
          r(), t(!1);
        }, children: d })
      ] }),
      children: n && n.length > 0 && /* @__PURE__ */ e("ul", { className: "list-disc pl-4 space-y-1 text-xs text-muted-foreground", children: n.map((h, g) => /* @__PURE__ */ e("li", { children: h }, g)) })
    }
  );
}
function Q({
  open: o,
  onOpenChange: t,
  onRetry: r,
  onDismiss: a,
  title: s = "Something went wrong",
  description: i,
  error: n,
  retryText: d = "Try Again",
  dismissText: m = "Dismiss",
  showRetry: u
}) {
  const [c, v] = y(!1), h = u ?? !!r, g = (N) => {
    !N && a && a(), t(N);
  }, p = () => {
    r?.(), t(!1);
  }, k = () => {
    a?.(), t(!1);
  }, D = n instanceof Error ? n.message : n, w = n instanceof Error ? n.stack : void 0;
  return /* @__PURE__ */ e(
    x,
    {
      open: o,
      onOpenChange: g,
      icon: /* @__PURE__ */ e(T, { className: "h-4 w-4" }),
      iconVariant: "error",
      title: s,
      description: i,
      footer: /* @__PURE__ */ l(C, { children: [
        h && /* @__PURE__ */ e(f, { variant: "outline", onClick: p, children: d }),
        /* @__PURE__ */ e(f, { variant: "default", onClick: k, children: m })
      ] }),
      children: D && /* @__PURE__ */ l("div", { className: "space-y-2", children: [
        /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            onClick: () => v(!c),
            className: "flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors",
            children: [
              /* @__PURE__ */ e(
                V,
                {
                  className: b(
                    "h-3 w-3 transition-transform",
                    !c && "-rotate-90"
                  )
                }
              ),
              /* @__PURE__ */ e("span", { children: "Technical Details" })
            ]
          }
        ),
        c && /* @__PURE__ */ l("div", { className: "rounded-md bg-muted p-3 font-mono text-xs text-muted-foreground overflow-auto max-h-32", children: [
          /* @__PURE__ */ e("p", { children: D }),
          w && /* @__PURE__ */ e("pre", { className: "mt-2 text-[10px] opacity-70 whitespace-pre-wrap", children: w })
        ] })
      ] })
    }
  );
}
function U({
  open: o,
  onOpenChange: t,
  title: r,
  description: a,
  children: s,
  dismissText: i = "Got it"
}) {
  return /* @__PURE__ */ e(
    x,
    {
      open: o,
      onOpenChange: t,
      icon: /* @__PURE__ */ e(j, { className: "h-4 w-4" }),
      iconVariant: "info",
      title: r,
      description: a,
      footer: /* @__PURE__ */ e(f, { variant: "default", onClick: () => {
        t(!1);
      }, children: i }),
      children: s
    }
  );
}
export {
  L as ConfirmDialog,
  Q as ErrorDialog,
  U as InfoDialog,
  O as WarningDialog
};
