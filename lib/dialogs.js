import { jsx as e, jsxs as l, Fragment as v } from "react/jsx-runtime";
import { CircleCheck as y, AlertTriangle as S, ChevronDown as B, CircleX as V, Info as T } from "lucide-react";
import { B as h } from "./button-DHQhRgTM.js";
import { S as j } from "./spinner-D5WcaOmH.js";
import { useState as A } from "react";
import { D as E, b as P, c as F, d as G, e as I, f as H } from "./dialog-CDPimJCA.js";
import { c as N } from "./utils-B6yFEsav.js";
const M = {
  default: "bg-primary/10 text-primary",
  warning: "bg-amber-500/10 text-amber-500",
  error: "bg-destructive/10 text-destructive",
  info: "bg-blue-500/10 text-blue-500"
};
function p({
  open: o,
  onOpenChange: t,
  icon: r,
  iconVariant: a = "default",
  title: s,
  description: i,
  children: n,
  footer: c
}) {
  return /* @__PURE__ */ e(E, { open: o, onOpenChange: t, children: /* @__PURE__ */ l(P, { showCloseButton: !0, children: [
    /* @__PURE__ */ e(F, { children: /* @__PURE__ */ l("div", { className: "flex items-start gap-3", children: [
      r && /* @__PURE__ */ e(
        "div",
        {
          className: N(
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
    /* @__PURE__ */ e(H, { children: c })
  ] }) });
}
function L({
  open: o,
  onOpenChange: t,
  onConfirm: r,
  onCancel: a,
  title: s,
  description: i,
  confirmText: n = "Confirm",
  cancelText: c = "Cancel",
  variant: f = "default",
  loading: m = !1
}) {
  return /* @__PURE__ */ e(
    p,
    {
      open: o,
      onOpenChange: (u) => {
        !u && a && a(), t(u);
      },
      icon: /* @__PURE__ */ e(y, { className: "h-4 w-4" }),
      iconVariant: f === "destructive" ? "error" : "default",
      title: s,
      description: i,
      footer: /* @__PURE__ */ l(v, { children: [
        /* @__PURE__ */ e(h, { variant: "outline", onClick: () => {
          a?.(), t(!1);
        }, disabled: m, children: c }),
        /* @__PURE__ */ l(
          h,
          {
            variant: f === "destructive" ? "destructive" : "default",
            onClick: () => {
              r(), t(!1);
            },
            disabled: m,
            children: [
              m && /* @__PURE__ */ e(j, { className: "mr-2 h-3 w-3" }),
              n
            ]
          }
        )
      ] })
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
  proceedText: c = "Proceed Anyway",
  cancelText: f = "Go Back"
}) {
  return /* @__PURE__ */ e(
    p,
    {
      open: o,
      onOpenChange: (d) => {
        !d && a && a(), t(d);
      },
      icon: /* @__PURE__ */ e(S, { className: "h-4 w-4" }),
      iconVariant: "warning",
      title: s,
      description: i,
      footer: /* @__PURE__ */ l(v, { children: [
        /* @__PURE__ */ e(h, { variant: "outline", onClick: () => {
          a?.(), t(!1);
        }, children: f }),
        /* @__PURE__ */ e(h, { variant: "default", onClick: () => {
          r(), t(!1);
        }, children: c })
      ] }),
      children: n && n.length > 0 && /* @__PURE__ */ e("ul", { className: "list-disc pl-4 space-y-1 text-xs text-muted-foreground", children: n.map((d, u) => /* @__PURE__ */ e("li", { children: d }, u)) })
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
  retryText: c = "Try Again",
  dismissText: f = "Dismiss",
  showRetry: m
}) {
  const [g, x] = A(!1), d = m ?? !!r, u = (w) => {
    !w && a && a(), t(w);
  }, b = () => {
    r?.(), t(!1);
  }, k = () => {
    a?.(), t(!1);
  }, C = n instanceof Error ? n.message : n, D = n instanceof Error ? n.stack : void 0;
  return /* @__PURE__ */ e(
    p,
    {
      open: o,
      onOpenChange: u,
      icon: /* @__PURE__ */ e(V, { className: "h-4 w-4" }),
      iconVariant: "error",
      title: s,
      description: i,
      footer: /* @__PURE__ */ l(v, { children: [
        d && /* @__PURE__ */ e(h, { variant: "outline", onClick: b, children: c }),
        /* @__PURE__ */ e(h, { variant: "default", onClick: k, children: f })
      ] }),
      children: C && /* @__PURE__ */ l("div", { className: "space-y-2", children: [
        /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            onClick: () => x(!g),
            className: "flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors",
            children: [
              /* @__PURE__ */ e(
                B,
                {
                  className: N(
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
          /* @__PURE__ */ e("p", { children: C }),
          D && /* @__PURE__ */ e("pre", { className: "mt-2 text-[10px] opacity-70 whitespace-pre-wrap", children: D })
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
    p,
    {
      open: o,
      onOpenChange: t,
      icon: /* @__PURE__ */ e(T, { className: "h-4 w-4" }),
      iconVariant: "info",
      title: r,
      description: a,
      footer: /* @__PURE__ */ e(h, { variant: "default", onClick: () => {
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
