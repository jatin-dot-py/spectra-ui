import { jsx as t, jsxs as d, Fragment as ue } from "react/jsx-runtime";
import * as $e from "react";
import { useState as V, useRef as te, useEffect as $, useMemo as U, useCallback as P, memo as Ue, useImperativeHandle as Je, createElement as Se, useLayoutEffect as we } from "react";
import { RadioGroup as xe, Checkbox as Oe, Switch as Te, Popover as fe, Slider as se, Select as M, Slot as Qe } from "radix-ui";
import { c as b } from "./utils-B6yFEsav.js";
import { CircleIcon as Ze, CheckIcon as We, ChevronDown as _, Code2 as je, Check as Y, Braces as Xe, ToggleLeft as Ye, Hash as Ke, Type as qe, CircleSlash as et, ChevronDownIcon as Ae, ChevronUpIcon as tt, X as rt, Minus as nt, Plus as ot } from "lucide-react";
import at from "@monaco-editor/react";
import { B as Ve } from "./button-DHQhRgTM.js";
import { D as it, a as st, b as lt, c as ct, d as dt } from "./dialog-CDPimJCA.js";
import { T as Ne, a as ye, b as ke, c as Ie } from "./tooltip-Cep25X0w.js";
import { f as ut, A as Ee, g as ft, a as mt } from "./LazyIcon-C_lOuP2P.js";
import { cva as ht } from "class-variance-authority";
function pt({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    xe.Root,
    {
      "data-slot": "radio-group",
      className: b("grid gap-2 w-full", e),
      ...r
    }
  );
}
function Re({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    xe.Item,
    {
      "data-slot": "radio-group-item",
      className: b(
        "border-input text-primary dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 data-checked:bg-primary data-checked:border-primary flex size-4 rounded-full focus-visible:ring-1 aria-invalid:ring-1 group/radio-group-item peer relative aspect-square shrink-0 border outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...r,
      children: /* @__PURE__ */ t(
        xe.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "group-aria-invalid/radio-group-item:text-destructive flex size-4 items-center justify-center text-white",
          children: /* @__PURE__ */ t(Ze, { className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-current" })
        }
      )
    }
  );
}
function gt({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    Oe.Root,
    {
      "data-slot": "checkbox",
      className: b(
        "border-input dark:bg-input/30 data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary data-checked:border-primary aria-invalid:aria-checked:border-primary aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 flex size-4 items-center justify-center rounded-none border transition-colors group-has-disabled/field:opacity-50 focus-visible:ring-1 aria-invalid:ring-1 peer relative shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...r,
      children: /* @__PURE__ */ t(
        Oe.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "[&>svg]:size-3.5 grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ t(
            We,
            {}
          )
        }
      )
    }
  );
}
function bt({
  className: e,
  size: r = "default",
  ...n
}) {
  return /* @__PURE__ */ t(
    Te.Root,
    {
      "data-slot": "switch",
      "data-size": r,
      className: b(
        "data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 dark:data-unchecked:bg-input/80 shrink-0 rounded-full border border-transparent focus-visible:ring-1 aria-invalid:ring-1 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] peer group/switch relative inline-flex items-center transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 data-disabled:cursor-not-allowed data-disabled:opacity-50",
        e
      ),
      ...n,
      children: /* @__PURE__ */ t(
        Te.Thumb,
        {
          "data-slot": "switch-thumb",
          className: "bg-background dark:data-unchecked:bg-foreground dark:data-checked:bg-primary-foreground rounded-full group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 pointer-events-none block ring-0 transition-transform"
        }
      )
    }
  );
}
function xt({
  value: e,
  onChange: r,
  className: n,
  variant: o = "checkbox",
  ...a
}) {
  const i = $e.useId();
  return o === "switch" ? /* @__PURE__ */ t(
    bt,
    {
      checked: e,
      onCheckedChange: (l) => r(!!l),
      className: n,
      ...a
    }
  ) : o === "radio" ? /* @__PURE__ */ d(
    pt,
    {
      value: e ? "true" : "false",
      onValueChange: (l) => r(l === "true"),
      className: b("flex flex-row gap-4", n),
      ...a,
      children: [
        /* @__PURE__ */ d("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t(Re, { value: "true", id: `${i}-true` }),
          /* @__PURE__ */ t("label", { htmlFor: `${i}-true`, className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: "True" })
        ] }),
        /* @__PURE__ */ d("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t(Re, { value: "false", id: `${i}-false` }),
          /* @__PURE__ */ t("label", { htmlFor: `${i}-false`, className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: "False" })
        ] })
      ]
    }
  ) : /* @__PURE__ */ t(
    gt,
    {
      checked: e,
      onCheckedChange: (l) => r(!!l),
      className: b("h-3.5 w-3.5", n),
      ...a
    }
  );
}
function K({
  ...e
}) {
  return /* @__PURE__ */ t(fe.Root, { "data-slot": "popover", ...e });
}
function q({
  ...e
}) {
  return /* @__PURE__ */ t(fe.Trigger, { "data-slot": "popover-trigger", ...e });
}
function ee({
  className: e,
  align: r = "center",
  sideOffset: n = 4,
  ...o
}) {
  return /* @__PURE__ */ t(fe.Portal, { children: /* @__PURE__ */ t(
    fe.Content,
    {
      "data-slot": "popover-content",
      align: r,
      sideOffset: n,
      className: b(
        "bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 flex flex-col gap-2.5 rounded-none p-2.5 text-xs shadow-md ring-1 duration-100 z-50 w-72 origin-(--radix-popover-content-transform-origin) outline-hidden",
        e
      ),
      ...o
    }
  ) });
}
function he({ className: e, type: r, ...n }) {
  return /* @__PURE__ */ t(
    "input",
    {
      type: r,
      "data-slot": "input",
      className: b(
        "dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-none border bg-transparent px-2.5 py-1 text-xs transition-colors file:h-6 file:text-xs file:font-medium focus-visible:ring-1 aria-invalid:ring-1 md:text-xs file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...n
    }
  );
}
function vt(e) {
  const r = e.split(/\s+/);
  return r[r.length - 1] || "";
}
function wt({
  value: e,
  onChange: r,
  suggestions: n = [],
  noRing: o = !1,
  frozen: a = !1,
  className: i,
  ...l
}) {
  const [m, f] = V(!1), [s, c] = V(!a), h = te(null), N = vt(e), w = N ? n.filter((g) => g.toLowerCase().includes(N.toLowerCase())) : n, I = (g) => {
    const p = g.target.value;
    r(p), n.length > 0 && f(!0);
  }, x = (g) => {
    const p = e.split(/\s+/);
    p[p.length - 1] = g, r(p.join(" ")), f(!1), h.current?.focus();
  }, y = (g) => {
    n.length > 0 && f(!0), l.onFocus?.(g);
  }, C = (g) => {
    setTimeout(() => f(!1), 150), l.onBlur?.(g);
  }, k = () => {
    a && !s && (c(!0), setTimeout(() => h.current?.focus(), 0));
  }, S = n.length > 0, v = a && !s;
  return /* @__PURE__ */ d("div", { className: "relative flex-1", children: [
    /* @__PURE__ */ d("div", { className: "relative", children: [
      v && /* @__PURE__ */ t(
        "div",
        {
          onClick: k,
          className: b(
            "absolute inset-0 z-10 cursor-pointer rounded-md",
            "bg-muted/50 border border-border/50",
            "flex items-center justify-center",
            "hover:bg-accent/50 hover:border-border transition-colors duration-150"
          ),
          children: /* @__PURE__ */ t("span", { className: "text-[10px] text-muted-foreground" })
        }
      ),
      /* @__PURE__ */ t(
        he,
        {
          ref: h,
          value: e,
          onChange: I,
          onFocus: y,
          onBlur: C,
          disabled: v || l.disabled,
          className: b(
            "h-7 text-xs bg-muted/30 border-transparent hover:border-border focus:border-border focus:bg-background transition-colors placeholder:text-muted-foreground/50",
            S && "pr-6",
            o && "focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-border",
            v && "opacity-60",
            i
          ),
          ...l
        }
      ),
      S && /* @__PURE__ */ t(_, { className: "absolute right-2 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground/50" })
    ] }),
    m && w.length > 0 && /* @__PURE__ */ t("div", { className: "absolute top-full left-0 right-0 z-50 mt-1 bg-popover border border-border rounded-md shadow-md py-1", children: /* @__PURE__ */ t("div", { className: "max-h-40 overflow-auto", children: w.map((g) => /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: b(
          "w-full px-2 py-1.5 text-xs text-left hover:bg-accent hover:text-accent-foreground",
          g === e && "bg-accent/50"
        ),
        onMouseDown: (p) => p.preventDefault(),
        onClick: () => x(g),
        title: g,
        children: /* @__PURE__ */ t("span", { className: "block truncate", children: g })
      },
      g
    )) }) })
  ] });
}
function De({
  className: e,
  defaultValue: r,
  value: n,
  min: o = 0,
  max: a = 100,
  ...i
}) {
  const l = $e.useMemo(
    () => Array.isArray(n) ? n : Array.isArray(r) ? r : [o, a],
    [n, r, o, a]
  );
  return /* @__PURE__ */ d(
    se.Root,
    {
      "data-slot": "slider",
      defaultValue: r,
      value: n,
      min: o,
      max: a,
      className: b(
        "data-vertical:min-h-40 relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:w-auto data-vertical:flex-col",
        e
      ),
      ...i,
      children: [
        /* @__PURE__ */ t(
          se.Track,
          {
            "data-slot": "slider-track",
            className: "bg-muted rounded-none data-horizontal:h-1 data-horizontal:w-full data-vertical:h-full data-vertical:w-1 bg-muted relative grow overflow-hidden data-horizontal:w-full data-vertical:h-full",
            children: /* @__PURE__ */ t(
              se.Range,
              {
                "data-slot": "slider-range",
                className: "bg-primary absolute select-none data-horizontal:h-full data-vertical:w-full"
              }
            )
          }
        ),
        Array.from({ length: l.length }, (m, f) => /* @__PURE__ */ t(
          se.Thumb,
          {
            "data-slot": "slider-thumb",
            className: "border-ring ring-ring/50 relative size-3 rounded-none border bg-white transition-[color,box-shadow] after:absolute after:-inset-2 hover:ring-1 focus-visible:ring-1 focus-visible:outline-hidden active:ring-1 block shrink-0 select-none disabled:pointer-events-none disabled:opacity-50"
          },
          f
        ))
      ]
    }
  );
}
function Nt({
  value: e,
  onChange: r,
  placeholder: n = "0",
  disabled: o = !1,
  className: a,
  variant: i = "input",
  min: l = 0,
  max: m = 100,
  step: f = 1
}) {
  const [s, c] = V(String(e));
  return $(() => {
    c(String(e));
  }, [e]), i === "slider" ? /* @__PURE__ */ d("div", { className: b("flex items-center gap-3 flex-1", a), children: [
    /* @__PURE__ */ t(
      De,
      {
        value: [e],
        onValueChange: (w) => r(w[0]),
        min: l,
        max: m,
        step: f,
        disabled: o,
        className: "flex-1"
      }
    ),
    /* @__PURE__ */ t("span", { className: "text-xs font-mono text-muted-foreground w-10 text-right", children: e })
  ] }) : /* @__PURE__ */ t(
    he,
    {
      type: "text",
      inputMode: "decimal",
      value: s,
      onChange: (w) => {
        const I = w.target.value;
        c(I);
        const x = parseFloat(I);
        isNaN(x) ? (I === "" || I === "-") && r(0) : r(x);
      },
      onBlur: () => {
        const w = parseFloat(s);
        isNaN(w) ? (c("0"), r(0)) : c(String(w));
      },
      placeholder: n,
      disabled: o,
      className: b(
        "h-8 text-xs flex-1 bg-muted/30 border-transparent hover:border-border focus:border-border focus:bg-background transition-colors font-mono",
        a
      )
    }
  );
}
function yt({
  value: e,
  onChange: r,
  label: n = "Edit JSON",
  disabled: o = !1
}) {
  const [a, i] = V(!1), [l, m] = V(""), [f, s] = V(null), c = typeof e == "object" ? JSON.stringify(e, null, 2) : typeof e == "string" ? e : "";
  $(() => {
    a && (m(c), s(null));
  }, [a, c]);
  const h = (x) => {
    const y = x || "";
    m(y);
    try {
      JSON.parse(y), s(null);
    } catch (C) {
      s(C.message);
    }
  }, N = () => {
    try {
      const x = JSON.parse(l);
      r(x), i(!1);
    } catch (x) {
      s(x.message);
    }
  }, w = c.split(`
`).length;
  return /* @__PURE__ */ d(it, { open: a, onOpenChange: (x) => !o && i(x), children: [
    /* @__PURE__ */ t(st, { asChild: !0, children: /* @__PURE__ */ d(
      "button",
      {
        disabled: o,
        className: "flex-1 flex items-center justify-between gap-2 h-8 px-2 text-xs rounded-md bg-muted/30 border border-transparent hover:border-border hover:bg-muted/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-transparent disabled:hover:bg-muted/30",
        children: [
          /* @__PURE__ */ d("span", { className: "flex items-center gap-1.5 text-muted-foreground", children: [
            /* @__PURE__ */ t(je, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ t("span", { children: n })
          ] }),
          /* @__PURE__ */ d("span", { className: "text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground", children: [
            w,
            " lines"
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ d(
      lt,
      {
        className: "p-0 gap-0 flex flex-col overflow-hidden",
        style: {
          width: "calc(100vw - 120px)",
          maxWidth: "800px",
          height: "calc(100vh - 120px)",
          maxHeight: "600px"
        },
        children: [
          /* @__PURE__ */ t(ct, { className: "px-4 py-3 flex-shrink-0 bg-muted/50 border-b border-border", children: /* @__PURE__ */ d(dt, { className: "flex items-center gap-2 text-sm font-medium", children: [
            /* @__PURE__ */ t(je, { className: "h-4 w-4 text-primary" }),
            n
          ] }) }),
          /* @__PURE__ */ t("div", { className: "flex-1 min-h-0 bg-background", children: /* @__PURE__ */ t(
            at,
            {
              height: "100%",
              defaultLanguage: "json",
              value: l,
              onChange: h,
              theme: "vs-dark",
              options: {
                minimap: { enabled: !1 },
                fontSize: 13,
                fontFamily: "JetBrains Mono, Fira Code, Consolas, monospace",
                lineNumbers: "on",
                scrollBeyondLastLine: !1,
                wordWrap: "on",
                tabSize: 2,
                automaticLayout: !0,
                padding: { top: 16, bottom: 16 },
                scrollbar: {
                  horizontal: "hidden",
                  verticalScrollbarSize: 8
                },
                renderLineHighlight: "line",
                cursorBlinking: "smooth",
                smoothScrolling: !0
              }
            }
          ) }),
          /* @__PURE__ */ d("div", { className: "px-4 py-3 flex-shrink-0 bg-muted/50 border-t border-border flex items-center justify-between", children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: f ? /* @__PURE__ */ d(ue, { children: [
              /* @__PURE__ */ t("div", { className: "h-2 w-2 rounded-full bg-destructive" }),
              /* @__PURE__ */ t("p", { className: "text-xs text-destructive truncate max-w-[300px]", children: f })
            ] }) : /* @__PURE__ */ d(ue, { children: [
              /* @__PURE__ */ t("div", { className: "h-2 w-2 rounded-full bg-primary" }),
              /* @__PURE__ */ t("span", { className: "text-xs text-muted-foreground", children: "Valid JSON" })
            ] }) }),
            /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ t(
                Ve,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => i(!1),
                  className: "h-7 px-3 text-xs",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ d(
                Ve,
                {
                  size: "sm",
                  onClick: N,
                  disabled: !(f === null),
                  className: "h-7 px-4 text-xs",
                  children: [
                    /* @__PURE__ */ t(Y, { className: "h-3.5 w-3.5 mr-1.5" }),
                    "Save"
                  ]
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] });
}
const le = {
  null: { label: "Null", icon: et, default: null },
  string: { label: "String", icon: qe, default: "" },
  number: { label: "Number", icon: Ke, default: 0 },
  boolean: { label: "Boolean", icon: Ye, default: !1 },
  object: { label: "Object", icon: Xe, default: {} }
};
function kt(e) {
  return e == null ? "null" : typeof e == "string" ? "string" : typeof e == "number" ? "number" : typeof e == "boolean" ? "boolean" : typeof e == "object" ? "object" : "null";
}
function fr({
  value: e,
  onChange: r,
  allowedTypes: n = ["null", "string", "number", "boolean", "object"],
  disabled: o = !1
}) {
  const [a, i] = V(!1), l = U(() => kt(e), [e]), m = (c) => {
    if (c === l) {
      i(!1);
      return;
    }
    r(le[c].default), i(!1);
  }, f = le[l].icon, s = () => {
    switch (l) {
      case "null":
        return /* @__PURE__ */ t("div", { className: "flex-1 h-8 flex items-center px-3 text-xs text-muted-foreground italic bg-muted/20 rounded-md", children: "null" });
      case "string":
        return /* @__PURE__ */ t(
          wt,
          {
            value: e,
            onChange: r,
            placeholder: "Enter text...",
            disabled: o,
            className: "flex-1"
          }
        );
      case "number":
        return /* @__PURE__ */ t(
          Nt,
          {
            value: e,
            onChange: r,
            disabled: o,
            className: "flex-1"
          }
        );
      case "boolean":
        return /* @__PURE__ */ t("div", { className: "flex-1 flex items-center", children: /* @__PURE__ */ t(
          xt,
          {
            variant: "radio",
            value: e,
            onChange: r,
            disabled: o
          }
        ) });
      case "object":
        return /* @__PURE__ */ t(
          yt,
          {
            value: e,
            onChange: (c) => r(c),
            disabled: o,
            label: "Edit Object"
          }
        );
      default:
        return null;
    }
  };
  return /* @__PURE__ */ d("div", { className: b(
    "inline-flex items-center gap-2",
    o && "opacity-50"
  ), children: [
    /* @__PURE__ */ d(K, { open: a, onOpenChange: i, children: [
      /* @__PURE__ */ t(q, { asChild: !0, children: /* @__PURE__ */ d(
        "button",
        {
          disabled: o,
          className: b(
            "inline-flex items-center justify-center gap-1 h-8 px-2 rounded-md",
            "bg-muted/30 border border-border/50 hover:border-border hover:bg-muted/50 transition-colors",
            o && "cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ t(f, { className: "h-4 w-4" }),
            /* @__PURE__ */ t(_, { className: "h-3 w-3 opacity-50" })
          ]
        }
      ) }),
      /* @__PURE__ */ t(ee, { align: "start", className: "w-36 p-1 gap-0", children: n.map((c) => {
        const h = le[c].icon;
        return /* @__PURE__ */ d(
          "button",
          {
            onClick: () => m(c),
            className: b(
              "w-full flex items-center gap-2 px-2 py-1.5 text-xs rounded-sm transition-colors",
              c === l ? "bg-accent text-accent-foreground" : "hover:bg-muted"
            ),
            children: [
              /* @__PURE__ */ t(h, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ t("span", { className: "flex-1 text-left", children: le[c].label })
            ]
          },
          c
        );
      }) })
    ] }),
    s()
  ] });
}
function It({
  ...e
}) {
  return /* @__PURE__ */ t(M.Root, { "data-slot": "select", ...e });
}
function zt({
  ...e
}) {
  return /* @__PURE__ */ t(M.Value, { "data-slot": "select-value", ...e });
}
function Ct({
  className: e,
  size: r = "default",
  children: n,
  ...o
}) {
  return /* @__PURE__ */ d(
    M.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": r,
      className: b(
        "border-input data-[placeholder]:text-muted-foreground dark:bg-input/30 dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 gap-1.5 rounded-none border bg-transparent py-2 pr-2 pl-2.5 text-xs transition-colors select-none focus-visible:ring-1 aria-invalid:ring-1 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-none *:data-[slot=select-value]:flex *:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 flex w-fit items-center justify-between whitespace-nowrap outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
        e
      ),
      ...o,
      children: [
        n,
        /* @__PURE__ */ t(M.Icon, { asChild: !0, children: /* @__PURE__ */ t(Ae, { className: "text-muted-foreground size-4 pointer-events-none" }) })
      ]
    }
  );
}
function St({
  className: e,
  children: r,
  position: n = "item-aligned",
  align: o = "center",
  ...a
}) {
  return /* @__PURE__ */ t(M.Portal, { children: /* @__PURE__ */ d(
    M.Content,
    {
      "data-slot": "select-content",
      className: b("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 min-w-36 rounded-none shadow-md ring-1 duration-100 relative z-50 max-h-(--radix-select-content-available-height) origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
      position: n,
      align: o,
      ...a,
      children: [
        /* @__PURE__ */ t(Tt, {}),
        /* @__PURE__ */ t(
          M.Viewport,
          {
            "data-position": n,
            className: b(
              "data-[position=popper]:h-[var(--radix-select-trigger-height)] data-[position=popper]:w-full data-[position=popper]:min-w-[var(--radix-select-trigger-width)]",
              n === "popper" && ""
            ),
            children: r
          }
        ),
        /* @__PURE__ */ t(jt, {})
      ]
    }
  ) });
}
function Ot({
  className: e,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ d(
    M.Item,
    {
      "data-slot": "select-item",
      className: b(
        "focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground gap-2 rounded-none py-2 pr-8 pl-2 text-xs [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 relative flex w-full cursor-default items-center outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ t("span", { className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center", children: /* @__PURE__ */ t(M.ItemIndicator, { children: /* @__PURE__ */ t(We, { className: "pointer-events-none" }) }) }),
        /* @__PURE__ */ t(M.ItemText, { children: r })
      ]
    }
  );
}
function Tt({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    M.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: b("bg-popover z-10 flex cursor-default items-center justify-center py-1 [&_svg:not([class*='size-'])]:size-4", e),
      ...r,
      children: /* @__PURE__ */ t(
        tt,
        {}
      )
    }
  );
}
function jt({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    M.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: b("bg-popover z-10 flex cursor-default items-center justify-center py-1 [&_svg:not([class*='size-'])]:size-4", e),
      ...r,
      children: /* @__PURE__ */ t(
        Ae,
        {}
      )
    }
  );
}
function mr({
  value: e,
  onChange: r,
  options: n,
  variant: o,
  buttonDisplay: a = "text",
  maxInline: i,
  placeholder: l = "Select...",
  dropdownTitle: m,
  iconTrigger: f,
  disabled: s = !1,
  borderless: c = !1
}) {
  const [h, N] = V(!1), [w, I] = V(!1), x = P(
    (p) => {
      s || r(p);
    },
    [r, s]
  );
  if ((o ?? (n.length > 5 ? "dropdown" : "buttons")) === "dropdown")
    return f ? /* @__PURE__ */ d(K, { open: w, onOpenChange: I, children: [
      /* @__PURE__ */ t(q, { asChild: !0, children: /* @__PURE__ */ d(
        "button",
        {
          disabled: s,
          className: b(
            "inline-flex items-center justify-center gap-1 h-8 px-2",
            !c && "rounded-md bg-muted/30 border border-transparent hover:border-border hover:bg-muted/50",
            c && "hover:bg-muted/30",
            "transition-colors",
            s && "opacity-50 cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ t(f, { className: "h-4 w-4" }),
            /* @__PURE__ */ t(_, { className: "h-3 w-3 opacity-50" })
          ]
        }
      ) }),
      /* @__PURE__ */ d(ee, { align: "start", className: "w-48 p-1 gap-0", children: [
        m && /* @__PURE__ */ t("div", { className: "px-2 py-1.5 text-xs font-medium text-muted-foreground border-b border-border mb-1", children: m }),
        n.map((p) => {
          const T = p.icon, E = e === p.value;
          return /* @__PURE__ */ d(
            "button",
            {
              onClick: () => {
                x(p.value), I(!1);
              },
              className: b(
                "w-full flex items-center gap-2 px-2 py-1.5 text-xs rounded-md transition-colors",
                E ? "bg-accent text-accent-foreground" : "hover:bg-muted"
              ),
              children: [
                T && /* @__PURE__ */ t(T, { className: "h-3.5 w-3.5" }),
                /* @__PURE__ */ t("span", { className: "flex-1 text-left", children: p.label }),
                E && /* @__PURE__ */ t(Y, { className: "h-3.5 w-3.5" })
              ]
            },
            p.value
          );
        })
      ] })
    ] }) : /* @__PURE__ */ d(It, { value: e || "", onValueChange: x, disabled: s, children: [
      /* @__PURE__ */ t(Ct, { className: "h-8 text-xs bg-muted/30 border-transparent hover:border-border focus:border-border transition-colors", children: /* @__PURE__ */ t(zt, { placeholder: l }) }),
      /* @__PURE__ */ d(St, { children: [
        m && /* @__PURE__ */ t("div", { className: "px-2 py-1.5 text-xs font-medium text-muted-foreground border-b border-border mb-1", children: m }),
        n.map((p) => {
          const T = p.icon;
          return /* @__PURE__ */ t(Ot, { value: p.value, className: "text-xs", children: /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
            T && /* @__PURE__ */ t(T, { className: "h-3.5 w-3.5" }),
            p.label
          ] }) }, p.value);
        })
      ] })
    ] });
  const C = i !== void 0 && n.length > i, k = C ? n.slice(0, i - 1) : n, S = C ? n.slice(i - 1) : [], v = S.find((p) => p.value === e), g = (p, T, E) => {
    const R = e === p.value, j = p.icon, u = j && (a === "icon" || a === "both"), z = a === "text" || a === "both", O = /* @__PURE__ */ d(
      "button",
      {
        onClick: () => x(p.value),
        disabled: s,
        className: b(
          "flex items-center justify-center gap-1.5 font-medium transition-all",
          "h-8 px-2.5 text-xs",
          T && "rounded-l-md",
          E && !C && "rounded-r-md",
          !T && !E && "rounded-none",
          R ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
          s && "opacity-50 cursor-not-allowed"
        ),
        children: [
          u && /* @__PURE__ */ t(j, { className: "h-3.5 w-3.5" }),
          z && /* @__PURE__ */ t("span", { className: "truncate", children: p.label })
        ]
      },
      p.value
    ), B = p.hoverText || (a === "icon" ? p.label : void 0);
    return B && !s ? /* @__PURE__ */ t(Ne, { delayDuration: 200, children: /* @__PURE__ */ d(ye, { children: [
      /* @__PURE__ */ t(ke, { asChild: !0, children: O }),
      /* @__PURE__ */ t(Ie, { side: "bottom", className: "text-xs", children: B })
    ] }) }, p.value) : O;
  };
  return /* @__PURE__ */ d("div", { className: b(
    "inline-flex",
    !c && "rounded-md border border-border/40 bg-muted/30 p-0.5 shadow-sm",
    s && "opacity-50"
  ), children: [
    k.map(
      (p, T) => g(p, T === 0, T === k.length - 1)
    ),
    C && /* @__PURE__ */ d(K, { open: h, onOpenChange: N, children: [
      /* @__PURE__ */ t(q, { asChild: !0, children: /* @__PURE__ */ d(
        "button",
        {
          disabled: s,
          className: b(
            "flex items-center justify-center gap-1 font-medium transition-all rounded-r-md",
            "h-8 px-2.5 text-xs",
            v ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
            s && "cursor-not-allowed"
          ),
          children: [
            v ? /* @__PURE__ */ d(ue, { children: [
              v.icon && a !== "text" && /* @__PURE__ */ t(v.icon, { className: "h-3.5 w-3.5" }),
              a !== "icon" && /* @__PURE__ */ t("span", { className: "truncate", children: v.label })
            ] }) : /* @__PURE__ */ t("span", { children: "More" }),
            /* @__PURE__ */ t(_, { className: "h-3 w-3" })
          ]
        }
      ) }),
      /* @__PURE__ */ t(ee, { align: "end", className: "w-44 p-1 gap-0", children: S.map((p) => {
        const T = p.icon, E = e === p.value;
        return /* @__PURE__ */ d(
          "button",
          {
            onClick: () => {
              x(p.value), N(!1);
            },
            className: b(
              "w-full flex items-center gap-2 px-2 py-1.5 text-xs rounded-md transition-colors",
              E ? "bg-accent text-accent-foreground" : "hover:bg-muted"
            ),
            children: [
              T && /* @__PURE__ */ t(T, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", children: p.label }),
              E && /* @__PURE__ */ t(Y, { className: "h-3.5 w-3.5" })
            ]
          },
          p.value
        );
      }) })
    ] })
  ] });
}
function Vt(e) {
  let r = e;
  for (; r; ) {
    if (r.dir)
      return r.dir === "rtl";
    r = r.parentElement;
  }
  return !1;
}
function Et(e, r) {
  const [n, o] = V(r === "rtl");
  return we(() => {
    e && (r || o(Vt(e)));
  }, [r, e]), n;
}
const me = typeof window < "u" ? we : $;
function Be(e) {
  if (e !== void 0)
    switch (typeof e) {
      case "number":
        return e;
      case "string": {
        if (e.endsWith("px"))
          return parseFloat(e);
        break;
      }
    }
}
function Rt({
  box: e,
  defaultHeight: r,
  defaultWidth: n,
  disabled: o,
  element: a,
  mode: i,
  style: l
}) {
  const { styleHeight: m, styleWidth: f } = U(
    () => ({
      styleHeight: Be(l?.height),
      styleWidth: Be(l?.width)
    }),
    [l?.height, l?.width]
  ), [s, c] = V({
    height: r,
    width: n
  }), h = o || i === "only-height" && m !== void 0 || i === "only-width" && f !== void 0 || m !== void 0 && f !== void 0;
  return me(() => {
    if (a === null || h)
      return;
    const N = new ResizeObserver((w) => {
      for (const I of w) {
        const { contentRect: x, target: y } = I;
        a === y && c((C) => C.height === x.height && C.width === x.width ? C : {
          height: x.height,
          width: x.width
        });
      }
    });
    return N.observe(a, { box: e }), () => {
      N?.unobserve(a);
    };
  }, [e, h, a, m, f]), U(
    () => ({
      height: m ?? s.height,
      width: f ?? s.width
    }),
    [s, m, f]
  );
}
function Bt(e) {
  const r = te(() => {
    throw new Error("Cannot call during render.");
  });
  return me(() => {
    r.current = e;
  }, [e]), P((n) => r.current?.(n), [r]);
}
let X = null;
function Lt(e = !1) {
  if (X === null || e) {
    const r = document.createElement("div"), n = r.style;
    n.width = "50px", n.height = "50px", n.overflow = "scroll", n.direction = "rtl";
    const o = document.createElement("div"), a = o.style;
    return a.width = "100px", a.height = "100px", r.appendChild(o), document.body.appendChild(r), r.scrollLeft > 0 ? X = "positive-descending" : (r.scrollLeft = 1, r.scrollLeft === 0 ? X = "negative" : X = "positive-ascending"), document.body.removeChild(r), X;
  }
  return X;
}
function pe({
  containerElement: e,
  direction: r,
  isRtl: n,
  scrollOffset: o
}) {
  if (r === "horizontal" && n)
    switch (Lt()) {
      case "negative":
        return -o;
      case "positive-descending": {
        if (e) {
          const { clientWidth: a, scrollLeft: i, scrollWidth: l } = e;
          return l - a - i;
        }
        break;
      }
    }
  return o;
}
function G(e, r = "Assertion error") {
  if (!e)
    throw console.error(r), Error(r);
}
function oe(e, r) {
  if (e === r)
    return !0;
  if (!!e != !!r || (G(e !== void 0), G(r !== void 0), Object.keys(e).length !== Object.keys(r).length))
    return !1;
  for (const n in e)
    if (!Object.is(r[n], e[n]))
      return !1;
  return !0;
}
function Fe({
  cachedBounds: e,
  itemCount: r,
  itemSize: n
}) {
  if (r === 0)
    return 0;
  if (typeof n == "number")
    return r * n;
  {
    const o = e.get(
      e.size === 0 ? 0 : e.size - 1
    );
    G(o !== void 0, "Unexpected bounds cache miss");
    const a = (o.scrollOffset + o.size) / e.size;
    return r * a;
  }
}
function Mt({
  align: e,
  cachedBounds: r,
  index: n,
  itemCount: o,
  itemSize: a,
  containerScrollOffset: i,
  containerSize: l
}) {
  if (n < 0 || n >= o)
    throw RangeError(`Invalid index specified: ${n}`, {
      cause: `Index ${n} is not within the range of 0 - ${o - 1}`
    });
  const m = Fe({
    cachedBounds: r,
    itemCount: o,
    itemSize: a
  }), f = r.get(n), s = Math.max(
    0,
    Math.min(m - l, f.scrollOffset)
  ), c = Math.max(
    0,
    f.scrollOffset - l + f.size
  );
  switch (e === "smart" && (i >= c && i <= s ? e = "auto" : e = "center"), e) {
    case "start":
      return s;
    case "end":
      return c;
    case "center":
      return f.scrollOffset <= l / 2 ? 0 : f.scrollOffset + f.size / 2 >= m - l / 2 ? m - l : f.scrollOffset + f.size / 2 - l / 2;
    default:
      return i >= c && i <= s ? i : i < c ? c : s;
  }
}
function Le({
  cachedBounds: e,
  containerScrollOffset: r,
  containerSize: n,
  itemCount: o,
  overscanCount: a
}) {
  const i = o - 1;
  let l = 0, m = -1, f = 0, s = -1, c = 0;
  for (; c < i; ) {
    const h = e.get(c);
    if (h.scrollOffset + h.size > r)
      break;
    c++;
  }
  for (l = c, f = Math.max(0, l - a); c < i; ) {
    const h = e.get(c);
    if (h.scrollOffset + h.size >= r + n)
      break;
    c++;
  }
  return m = Math.min(i, c), s = Math.min(o - 1, m + a), l < 0 && (l = 0, m = -1, f = 0, s = -1), {
    startIndexVisible: l,
    stopIndexVisible: m,
    startIndexOverscan: f,
    stopIndexOverscan: s
  };
}
function Pt({
  itemCount: e,
  itemProps: r,
  itemSize: n
}) {
  const o = /* @__PURE__ */ new Map();
  return {
    get(a) {
      for (G(a < e, `Invalid index ${a}`); o.size - 1 < a; ) {
        const l = o.size;
        let m;
        switch (typeof n) {
          case "function": {
            m = n(l, r);
            break;
          }
          case "number": {
            m = n;
            break;
          }
        }
        if (l === 0)
          o.set(l, {
            size: m,
            scrollOffset: 0
          });
        else {
          const f = o.get(l - 1);
          G(
            f !== void 0,
            `Unexpected bounds cache miss for index ${a}`
          ), o.set(l, {
            scrollOffset: f.scrollOffset + f.size,
            size: m
          });
        }
      }
      const i = o.get(a);
      return G(
        i !== void 0,
        `Unexpected bounds cache miss for index ${a}`
      ), i;
    },
    set(a, i) {
      o.set(a, i);
    },
    get size() {
      return o.size;
    }
  };
}
function $t({
  itemCount: e,
  itemProps: r,
  itemSize: n
}) {
  return U(
    () => Pt({
      itemCount: e,
      itemProps: r,
      itemSize: n
    }),
    [e, r, n]
  );
}
function Wt({
  containerSize: e,
  itemSize: r
}) {
  let n;
  return typeof r === "string" ? (G(
    r.endsWith("%"),
    `Invalid item size: "${r}"; string values must be percentages (e.g. "100%")`
  ), G(
    e !== void 0,
    "Container size must be defined if a percentage item size is specified"
  ), n = e * parseInt(r) / 100) : n = r, n;
}
function Me({
  containerElement: e,
  containerStyle: r,
  defaultContainerSize: n = 0,
  direction: o,
  isRtl: a = !1,
  itemCount: i,
  itemProps: l,
  itemSize: m,
  onResize: f,
  overscanCount: s
}) {
  const [c, h] = V({
    startIndexVisible: 0,
    startIndexOverscan: 0,
    stopIndexVisible: -1,
    stopIndexOverscan: -1
  }), {
    startIndexVisible: N,
    startIndexOverscan: w,
    stopIndexVisible: I,
    stopIndexOverscan: x
  } = {
    startIndexVisible: Math.min(i - 1, c.startIndexVisible),
    startIndexOverscan: Math.min(i - 1, c.startIndexOverscan),
    stopIndexVisible: Math.min(i - 1, c.stopIndexVisible),
    stopIndexOverscan: Math.min(i - 1, c.stopIndexOverscan)
  }, { height: y = n, width: C = n } = Rt({
    defaultHeight: o === "vertical" ? n : void 0,
    defaultWidth: o === "horizontal" ? n : void 0,
    element: e,
    mode: o === "vertical" ? "only-height" : "only-width",
    style: r
  }), k = te({
    height: 0,
    width: 0
  }), S = o === "vertical" ? y : C, v = Wt({ containerSize: S, itemSize: m });
  we(() => {
    if (typeof f == "function") {
      const j = k.current;
      (j.height !== y || j.width !== C) && (f({ height: y, width: C }, { ...j }), j.height = y, j.width = C);
    }
  }, [y, f, C]);
  const g = $t({
    itemCount: i,
    itemProps: l,
    itemSize: v
  }), p = P(
    (j) => g.get(j),
    [g]
  ), T = P(
    () => Fe({
      cachedBounds: g,
      itemCount: i,
      itemSize: v
    }),
    [g, i, v]
  ), E = P(
    (j) => {
      const u = pe({
        containerElement: e,
        direction: o,
        isRtl: a,
        scrollOffset: j
      });
      return Le({
        cachedBounds: g,
        containerScrollOffset: u,
        containerSize: S,
        itemCount: i,
        overscanCount: s
      });
    },
    [
      g,
      e,
      S,
      o,
      a,
      i,
      s
    ]
  );
  me(() => {
    const j = (o === "vertical" ? e?.scrollTop : e?.scrollLeft) ?? 0;
    h(E(j));
  }, [e, o, E]), me(() => {
    if (!e)
      return;
    const j = () => {
      h((u) => {
        const { scrollLeft: z, scrollTop: O } = e, B = pe({
          containerElement: e,
          direction: o,
          isRtl: a,
          scrollOffset: o === "vertical" ? O : z
        }), J = Le({
          cachedBounds: g,
          containerScrollOffset: B,
          containerSize: S,
          itemCount: i,
          overscanCount: s
        });
        return oe(J, u) ? u : J;
      });
    };
    return e.addEventListener("scroll", j), () => {
      e.removeEventListener("scroll", j);
    };
  }, [
    g,
    e,
    S,
    o,
    i,
    s
  ]);
  const R = Bt(
    ({
      align: j = "auto",
      containerScrollOffset: u,
      index: z
    }) => {
      let O = Mt({
        align: j,
        cachedBounds: g,
        containerScrollOffset: u,
        containerSize: S,
        index: z,
        itemCount: i,
        itemSize: v
      });
      if (e) {
        if (O = pe({
          containerElement: e,
          direction: o,
          isRtl: a,
          scrollOffset: O
        }), typeof e.scrollTo != "function") {
          const B = E(O);
          oe(c, B) || h(B);
        }
        return O;
      }
    }
  );
  return {
    getCellBounds: p,
    getEstimatedSize: T,
    scrollToIndex: R,
    startIndexOverscan: w,
    startIndexVisible: N,
    stopIndexOverscan: x,
    stopIndexVisible: I
  };
}
function At(e) {
  return U(() => e, Object.values(e));
}
function Dt(e, r) {
  const {
    ariaAttributes: n,
    style: o,
    ...a
  } = e, {
    ariaAttributes: i,
    style: l,
    ...m
  } = r;
  return oe(n, i) && oe(o, l) && oe(a, m);
}
function Ft({
  cellComponent: e,
  cellProps: r,
  children: n,
  className: o,
  columnCount: a,
  columnWidth: i,
  defaultHeight: l = 0,
  defaultWidth: m = 0,
  dir: f,
  gridRef: s,
  onCellsRendered: c,
  onResize: h,
  overscanCount: N = 3,
  rowCount: w,
  rowHeight: I,
  style: x,
  tagName: y = "div",
  ...C
}) {
  const k = At(r), S = U(
    () => Ue(e, Dt),
    [e]
  ), [v, g] = V(null), p = Et(v, f), {
    getCellBounds: T,
    getEstimatedSize: E,
    startIndexOverscan: R,
    startIndexVisible: j,
    scrollToIndex: u,
    stopIndexOverscan: z,
    stopIndexVisible: O
  } = Me({
    containerElement: v,
    containerStyle: x,
    defaultContainerSize: m,
    direction: "horizontal",
    isRtl: p,
    itemCount: a,
    itemProps: k,
    itemSize: i,
    onResize: h,
    overscanCount: N
  }), {
    getCellBounds: B,
    getEstimatedSize: J,
    startIndexOverscan: Q,
    startIndexVisible: ie,
    scrollToIndex: Z,
    stopIndexOverscan: W,
    stopIndexVisible: Ce
  } = Me({
    containerElement: v,
    containerStyle: x,
    defaultContainerSize: l,
    direction: "vertical",
    itemCount: w,
    itemProps: k,
    itemSize: I,
    onResize: h,
    overscanCount: N
  });
  Je(
    s,
    () => ({
      get element() {
        return v;
      },
      scrollToCell({
        behavior: A = "auto",
        columnAlign: L = "auto",
        columnIndex: D,
        rowAlign: F = "auto",
        rowIndex: H
      }) {
        const re = u({
          align: L,
          containerScrollOffset: v?.scrollLeft ?? 0,
          index: D
        }), Ge = Z({
          align: F,
          containerScrollOffset: v?.scrollTop ?? 0,
          index: H
        });
        typeof v?.scrollTo == "function" && v.scrollTo({
          behavior: A,
          left: re,
          top: Ge
        });
      },
      scrollToColumn({
        align: A = "auto",
        behavior: L = "auto",
        index: D
      }) {
        const F = u({
          align: A,
          containerScrollOffset: v?.scrollLeft ?? 0,
          index: D
        });
        typeof v?.scrollTo == "function" && v.scrollTo({
          behavior: L,
          left: F
        });
      },
      scrollToRow({
        align: A = "auto",
        behavior: L = "auto",
        index: D
      }) {
        const F = Z({
          align: A,
          containerScrollOffset: v?.scrollTop ?? 0,
          index: D
        });
        typeof v?.scrollTo == "function" && v.scrollTo({
          behavior: L,
          top: F
        });
      }
    }),
    [v, u, Z]
  ), $(() => {
    R >= 0 && z >= 0 && Q >= 0 && W >= 0 && c && c(
      {
        columnStartIndex: j,
        columnStopIndex: O,
        rowStartIndex: ie,
        rowStopIndex: Ce
      },
      {
        columnStartIndex: R,
        columnStopIndex: z,
        rowStartIndex: Q,
        rowStopIndex: W
      }
    );
  }, [
    c,
    R,
    j,
    z,
    O,
    Q,
    ie,
    W,
    Ce
  ]);
  const He = U(() => {
    const A = [];
    if (a > 0 && w > 0)
      for (let L = Q; L <= W; L++) {
        const D = B(L), F = [];
        for (let H = R; H <= z; H++) {
          const re = T(H);
          F.push(
            /* @__PURE__ */ Se(
              S,
              {
                ...k,
                ariaAttributes: {
                  "aria-colindex": H + 1,
                  role: "gridcell"
                },
                columnIndex: H,
                key: H,
                rowIndex: L,
                style: {
                  position: "absolute",
                  left: p ? void 0 : 0,
                  right: p ? 0 : void 0,
                  transform: `translate(${p ? -re.scrollOffset : re.scrollOffset}px, ${D.scrollOffset}px)`,
                  height: D.size,
                  width: re.size
                }
              }
            )
          );
        }
        A.push(
          /* @__PURE__ */ t("div", { role: "row", "aria-rowindex": L + 1, children: F }, L)
        );
      }
    return A;
  }, [
    S,
    k,
    a,
    R,
    z,
    T,
    B,
    p,
    w,
    Q,
    W
  ]), _e = /* @__PURE__ */ t(
    "div",
    {
      "aria-hidden": !0,
      style: {
        height: J(),
        width: E(),
        zIndex: -1
      }
    }
  );
  return Se(
    y,
    {
      "aria-colcount": a,
      "aria-rowcount": w,
      role: "grid",
      ...C,
      className: o,
      dir: f,
      ref: g,
      style: {
        position: "relative",
        width: "100%",
        height: "100%",
        maxHeight: "100%",
        maxWidth: "100%",
        flexGrow: 1,
        overflow: "auto",
        ...x
      }
    },
    He,
    n,
    _e
  );
}
const ze = [
  "lucide-react",
  "react-icons/ai",
  "react-icons/bi",
  "react-icons/bs",
  "react-icons/cg",
  "react-icons/ci",
  "react-icons/di",
  "react-icons/fa",
  "react-icons/fa6",
  "react-icons/fc",
  "react-icons/fi",
  "react-icons/gi",
  "react-icons/go",
  "react-icons/gr",
  "react-icons/hi",
  "react-icons/hi2",
  "react-icons/im",
  "react-icons/io",
  "react-icons/io5",
  "react-icons/lia",
  "react-icons/lu",
  "react-icons/md",
  "react-icons/pi",
  "react-icons/ri",
  "react-icons/rx",
  "react-icons/si",
  "react-icons/sl",
  "react-icons/tb",
  "react-icons/tfi",
  "react-icons/ti",
  "react-icons/vsc",
  "react-icons/wi"
], ae = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Set();
let ne = null;
function Ht() {
  return ze;
}
async function _t(e) {
  if (e === "lucide-react")
    return await import("lucide-react");
  if (e.startsWith("react-icons/")) {
    const r = e.replace("react-icons/", "");
    switch (r) {
      case "ai":
        return await import("react-icons/ai");
      case "bi":
        return await import("react-icons/bi");
      case "bs":
        return await import("react-icons/bs");
      case "cg":
        return await import("react-icons/cg");
      case "ci":
        return await import("react-icons/ci");
      case "di":
        return await import("react-icons/di");
      case "fa":
        return await import("react-icons/fa");
      case "fa6":
        return await import("react-icons/fa6");
      case "fc":
        return await import("react-icons/fc");
      case "fi":
        return await import("react-icons/fi");
      case "gi":
        return await import("react-icons/gi");
      case "go":
        return await import("react-icons/go");
      case "gr":
        return await import("react-icons/gr");
      case "hi":
        return await import("react-icons/hi");
      case "hi2":
        return await import("react-icons/hi2");
      case "im":
        return await import("react-icons/im");
      case "io":
        return await import("react-icons/io");
      case "io5":
        return await import("react-icons/io5");
      case "lia":
        return await import("react-icons/lia");
      case "lu":
        return await import("react-icons/lu");
      case "md":
        return await import("react-icons/md");
      case "pi":
        return await import("react-icons/pi");
      case "ri":
        return await import("react-icons/ri");
      case "rx":
        return await import("react-icons/rx");
      case "si":
        return await import("react-icons/si");
      case "sl":
        return await import("react-icons/sl");
      case "tb":
        return await import("react-icons/tb");
      case "tfi":
        return await import("react-icons/tfi");
      case "ti":
        return await import("react-icons/ti");
      case "vsc":
        return await import("react-icons/vsc");
      case "wi":
        return await import("react-icons/wi");
      default:
        throw new Error(`Unknown react-icons pack: ${r}`);
    }
  }
  throw new Error(`Unknown icon pack: ${e}`);
}
function Gt(e) {
  return Object.keys(e).filter((r) => {
    if (!/^[A-Z]/.test(r) || ["createLucideIcon", "Icon", "IconNode", "LucideIcon"].includes(r)) return !1;
    const o = e[r];
    return typeof o == "function" || typeof o == "object";
  });
}
async function Ut(e) {
  if (ae.has(e))
    return ae.get(e);
  if (ve.has(e))
    return [];
  if (ce.has(e))
    return ce.get(e);
  const r = (async () => {
    try {
      const n = await _t(e), a = Gt(n).map((i) => ut(e, i));
      return ae.set(e, a), ne = null, a;
    } catch (n) {
      return console.warn(`Failed to enumerate icons in pack "${e}":`, n), ve.add(e), [];
    } finally {
      ce.delete(e);
    }
  })();
  return ce.set(e, r), r;
}
async function Jt() {
  return ne || (ne = (await Promise.all(
    ze.map((r) => Ut(r))
  )).flat(), ne);
}
function Qt() {
  return ae.size;
}
function Zt() {
  return ae.size + ve.size >= ze.length;
}
function Xt(e, r = 150) {
  const [n, o] = V(e), [a, i] = V(!1), [l, m] = V(!0), [f, s] = V([]), [c, h] = V(0), N = te(null);
  return $(() => {
    let I = !0;
    return (async () => {
      m(!0);
      try {
        const y = await Jt();
        I && (s(y), m(!1), h(100));
      } catch (y) {
        console.error("Failed to load icons:", y), I && m(!1);
      }
    })(), () => {
      I = !1;
    };
  }, []), $(() => {
    if (l) {
      const I = setInterval(() => {
        const x = Qt(), y = Ht().length;
        h(Math.round(x / y * 100)), Zt() && clearInterval(I);
      }, 100);
      return () => clearInterval(I);
    }
  }, [l]), $(() => (i(!0), N.current && clearTimeout(N.current), N.current = setTimeout(() => {
    o(e), i(!1);
  }, r), () => {
    N.current && clearTimeout(N.current);
  }), [e, r]), {
    results: U(() => {
      if (!n.trim())
        return f.slice(0, 500);
      const I = n.toLowerCase();
      return f.filter((x) => {
        const y = x.indexOf(":");
        return (y !== -1 ? x.slice(y + 1) : x).toLowerCase().includes(I);
      });
    }, [n, f]),
    isSearching: a,
    isLoading: l,
    loadProgress: c,
    totalCount: f.length
  };
}
const Yt = 20, ge = 40, be = 280, de = 6;
function hr({
  value: e,
  onChange: r,
  placeholder: n = "Search icons...",
  disabled: o = !1
}) {
  const [a, i] = V(e || ""), [l, m] = V(!1), f = te(null);
  $(() => {
    i(e || "");
  }, [e]);
  const s = a.includes(":") ? a.split(":")[1] || "" : a, { results: c } = Xt(s), h = c.includes(a), N = l && a.length > 0 && !h && c.length > 0, w = (v) => {
    const g = v.target.value;
    i(g), r(g);
  }, I = P((v) => {
    i(v), r(v), m(!1);
  }, [r]), [x, y] = V(300);
  $(() => {
    f.current && y(f.current.offsetWidth);
  }, [N]);
  const C = Math.floor(x / de), k = Math.ceil(c.length / de), S = P(({ columnIndex: v, rowIndex: g, style: p }) => {
    const T = g * de + v;
    if (T >= c.length)
      return /* @__PURE__ */ t("div", { style: p });
    const E = c[T];
    return /* @__PURE__ */ t("div", { style: p, className: "p-0.5", children: /* @__PURE__ */ t(Ne, { delayDuration: 300, children: /* @__PURE__ */ d(ye, { children: [
      /* @__PURE__ */ t(ke, { asChild: !0, children: /* @__PURE__ */ t(
        "button",
        {
          onMouseDown: (R) => {
            R.preventDefault(), I(E);
          },
          className: b(
            "w-full h-full flex items-center justify-center rounded-md transition-all",
            "bg-muted/30 hover:bg-muted border border-transparent hover:border-border"
          ),
          children: /* @__PURE__ */ t(Ee, { name: E, size: Yt, className: "text-foreground" })
        }
      ) }),
      /* @__PURE__ */ d(Ie, { side: "bottom", className: "text-xs max-w-[200px]", children: [
        /* @__PURE__ */ t("div", { className: "font-medium truncate", children: ft(E) }),
        /* @__PURE__ */ t("div", { className: "text-muted-foreground text-xs", children: mt(E) })
      ] })
    ] }) }) });
  }, [c, I]);
  return /* @__PURE__ */ t("div", { ref: f, children: /* @__PURE__ */ d("div", { className: "relative", children: [
    h && /* @__PURE__ */ t("div", { className: "absolute left-2 top-1/2 -translate-y-1/2 z-10", children: /* @__PURE__ */ t(Ee, { name: a, size: 14, className: "text-foreground" }) }),
    /* @__PURE__ */ t(
      he,
      {
        value: a,
        onChange: w,
        onFocus: () => m(!0),
        onBlur: () => setTimeout(() => m(!1), 150),
        placeholder: n,
        disabled: o,
        className: b(
          "h-8 text-xs font-mono bg-muted/30 border-transparent hover:border-border focus:border-border focus:bg-background transition-colors",
          h ? "pl-7 text-foreground" : "text-muted-foreground"
        )
      }
    ),
    N && /* @__PURE__ */ d("div", { className: "absolute left-0 right-0 top-full mt-1 z-50 rounded-md border border-border bg-popover shadow-lg overflow-hidden", children: [
      /* @__PURE__ */ d("div", { className: "px-2 py-1 text-xs text-muted-foreground border-b border-border bg-muted/30", children: [
        c.length.toLocaleString(),
        " matches"
      ] }),
      /* @__PURE__ */ d(
        "div",
        {
          className: "icon-picker-grid",
          style: { height: Math.min(be, k * ge) },
          children: [
            /* @__PURE__ */ t("style", { children: `
                                .icon-picker-grid > div::-webkit-scrollbar {
                                    display: none;
                                }
                                .icon-picker-grid > div {
                                    scrollbar-width: none;
                                    -ms-overflow-style: none;
                                }
                            ` }),
            /* @__PURE__ */ t(
              Ft,
              {
                columnCount: de,
                columnWidth: C,
                defaultHeight: be,
                defaultWidth: x,
                rowCount: k,
                rowHeight: ge,
                cellComponent: S,
                cellProps: {},
                style: {
                  height: Math.min(be, k * ge),
                  width: "100%",
                  overflowX: "hidden"
                }
              }
            )
          ]
        }
      )
    ] })
  ] }) });
}
const Kt = ht(
  "h-5 gap-1 rounded-none border border-transparent px-2 py-0.5 text-xs font-medium transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:size-3! inline-flex items-center justify-center w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-colors overflow-hidden group/badge",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        destructive: "bg-destructive/10 [a]:hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive dark:bg-destructive/20",
        outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Pe({
  className: e,
  variant: r = "default",
  asChild: n = !1,
  ...o
}) {
  const a = n ? Qe.Root : "span";
  return /* @__PURE__ */ t(
    a,
    {
      "data-slot": "badge",
      "data-variant": r,
      className: b(Kt({ variant: r }), e),
      ...o
    }
  );
}
function pr({
  value: e,
  onChange: r,
  options: n,
  variant: o,
  buttonDisplay: a = "text",
  maxInline: i,
  placeholder: l = "Select...",
  dropdownTitle: m,
  iconTrigger: f,
  disabled: s = !1,
  borderless: c = !1
}) {
  const h = Array.isArray(e) ? e : [], [N, w] = V(!1), [I, x] = V(!1), y = P((u) => h.includes(u), [h]), C = P(
    (u) => {
      s || (h.includes(u) ? r(h.filter((z) => z !== u)) : r([...h, u]));
    },
    [h, r, s]
  ), k = P(
    (u, z) => {
      z.stopPropagation(), !s && r(h.filter((O) => O !== u));
    },
    [h, r, s]
  ), S = P(() => {
    s || r([]);
  }, [r, s]), v = o ?? (n.length > 5 ? "dropdown" : "buttons"), g = n.filter((u) => h.includes(u.value));
  if (v === "dropdown")
    return f ? /* @__PURE__ */ d(K, { open: N, onOpenChange: w, children: [
      /* @__PURE__ */ t(q, { asChild: !0, children: /* @__PURE__ */ d(
        "button",
        {
          disabled: s,
          className: b(
            "inline-flex items-center justify-center gap-1 h-8 px-2 rounded-md",
            "bg-muted/30 border border-transparent hover:border-border hover:bg-muted/50 transition-colors",
            s && "opacity-50 cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ t(f, { className: "h-4 w-4" }),
            g.length > 0 && /* @__PURE__ */ t("span", { className: "min-w-[18px] h-[18px] rounded-full bg-primary text-primary-foreground text-[10px] font-medium flex items-center justify-center", children: g.length }),
            /* @__PURE__ */ t(_, { className: "h-3 w-3 opacity-50" })
          ]
        }
      ) }),
      /* @__PURE__ */ d(ee, { align: "start", className: "w-[220px] p-0 gap-0", sideOffset: 4, children: [
        /* @__PURE__ */ d("div", { className: "px-3 py-2 border-b border-border flex items-center justify-between", children: [
          /* @__PURE__ */ t("span", { className: "text-xs font-medium text-muted-foreground", children: m || `${g.length} selected` }),
          g.length > 0 && /* @__PURE__ */ t(
            "button",
            {
              onClick: S,
              className: "text-[10px] text-muted-foreground hover:text-foreground transition-colors",
              children: "Clear"
            }
          )
        ] }),
        /* @__PURE__ */ t("div", { className: "max-h-[200px] overflow-y-auto p-1", children: n.map((u) => {
          const z = u.icon, O = y(u.value);
          return /* @__PURE__ */ d(
            "button",
            {
              onClick: () => C(u.value),
              className: b(
                "w-full flex items-center gap-2 px-2 py-1.5 text-xs rounded-md transition-colors",
                O ? "bg-primary/10 text-foreground" : "hover:bg-muted text-muted-foreground hover:text-foreground"
              ),
              children: [
                /* @__PURE__ */ t("div", { className: b(
                  "h-4 w-4 rounded border flex items-center justify-center shrink-0 transition-colors",
                  O ? "bg-primary border-primary" : "border-border bg-background"
                ), children: O && /* @__PURE__ */ t(Y, { className: "h-3 w-3 text-primary-foreground" }) }),
                z && /* @__PURE__ */ t(z, { className: "h-3.5 w-3.5 shrink-0" }),
                /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", children: u.label })
              ]
            },
            u.value
          );
        }) })
      ] })
    ] }) : /* @__PURE__ */ d(K, { open: N, onOpenChange: w, children: [
      /* @__PURE__ */ t(q, { asChild: !0, children: /* @__PURE__ */ d(
        "button",
        {
          disabled: s,
          className: b(
            "inline-flex items-center justify-between gap-2 h-8 px-3 text-xs rounded-md w-full min-w-[180px]",
            "bg-muted/30 border border-transparent hover:border-border transition-colors",
            s && "opacity-50 cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5 flex-1 overflow-hidden", children: g.length > 0 ? /* @__PURE__ */ d(ue, { children: [
              g.slice(0, 2).map((u) => /* @__PURE__ */ d(
                Pe,
                {
                  variant: "secondary",
                  className: "h-5 px-1.5 text-[10px] font-normal gap-1 shrink-0",
                  children: [
                    u.icon && /* @__PURE__ */ t(u.icon, { className: "h-3 w-3" }),
                    /* @__PURE__ */ t("span", { className: "truncate max-w-[50px]", children: u.label })
                  ]
                },
                u.value
              )),
              g.length > 2 && /* @__PURE__ */ d("span", { className: "text-muted-foreground text-[10px]", children: [
                "+",
                g.length - 2
              ] })
            ] }) : /* @__PURE__ */ t("span", { className: "text-muted-foreground", children: l }) }),
            /* @__PURE__ */ t(_, { className: "h-3.5 w-3.5 opacity-50 shrink-0" })
          ]
        }
      ) }),
      /* @__PURE__ */ d(ee, { align: "start", className: "w-[220px] p-0 gap-0", sideOffset: 4, children: [
        (m || g.length > 0) && /* @__PURE__ */ d("div", { className: "px-3 py-2 border-b border-border flex items-center justify-between", children: [
          /* @__PURE__ */ t("span", { className: "text-xs font-medium text-muted-foreground", children: m || `${g.length} selected` }),
          g.length > 0 && /* @__PURE__ */ t(
            "button",
            {
              onClick: S,
              className: "text-[10px] text-muted-foreground hover:text-foreground transition-colors",
              children: "Clear all"
            }
          )
        ] }),
        /* @__PURE__ */ t("div", { className: "max-h-[200px] overflow-y-auto p-1", children: n.map((u) => {
          const z = u.icon, O = y(u.value);
          return /* @__PURE__ */ d(
            "button",
            {
              onClick: () => C(u.value),
              className: b(
                "w-full flex items-center gap-2 px-2 py-1.5 text-xs rounded-md transition-colors",
                O ? "bg-primary/10 text-foreground" : "hover:bg-muted text-muted-foreground hover:text-foreground"
              ),
              children: [
                /* @__PURE__ */ t("div", { className: b(
                  "h-4 w-4 rounded border flex items-center justify-center shrink-0 transition-colors",
                  O ? "bg-primary border-primary" : "border-border bg-background"
                ), children: O && /* @__PURE__ */ t(Y, { className: "h-3 w-3 text-primary-foreground" }) }),
                z && /* @__PURE__ */ t(z, { className: "h-3.5 w-3.5 shrink-0" }),
                /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", children: u.label })
              ]
            },
            u.value
          );
        }) }),
        g.length > 0 && /* @__PURE__ */ t("div", { className: "border-t border-border p-2", children: /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-1", children: g.map((u) => /* @__PURE__ */ d(
          Pe,
          {
            variant: "secondary",
            className: "h-5 px-1.5 text-[10px] font-normal gap-1 pr-0.5",
            children: [
              u.icon && /* @__PURE__ */ t(u.icon, { className: "h-3 w-3" }),
              /* @__PURE__ */ t("span", { className: "truncate max-w-[60px]", children: u.label }),
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: (z) => k(u.value, z),
                  className: "ml-0.5 p-0.5 rounded hover:bg-muted-foreground/20 transition-colors",
                  children: /* @__PURE__ */ t(rt, { className: "h-3 w-3" })
                }
              )
            ]
          },
          u.value
        )) }) })
      ] })
    ] });
  const p = i !== void 0 && n.length > i, T = p ? n.slice(0, i - 1) : n, E = p ? n.slice(i - 1) : [], R = E.filter((u) => h.includes(u.value)), j = (u, z, O) => {
    const B = y(u.value), J = u.icon, Q = J && (a === "icon" || a === "both"), ie = a === "text" || a === "both", Z = /* @__PURE__ */ d(
      "button",
      {
        onClick: () => C(u.value),
        disabled: s,
        className: b(
          "flex items-center justify-center gap-1.5 font-medium transition-all",
          "h-8 px-2.5 text-xs",
          z && "rounded-l-md",
          O && !p && "rounded-r-md",
          !z && !O && "rounded-none",
          B ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
          s && "opacity-50 cursor-not-allowed"
        ),
        children: [
          Q && /* @__PURE__ */ t(J, { className: "h-3.5 w-3.5" }),
          ie && /* @__PURE__ */ t("span", { className: "truncate", children: u.label })
        ]
      },
      u.value
    ), W = u.hoverText || (a === "icon" ? u.label : void 0);
    return W && !s ? /* @__PURE__ */ t(Ne, { delayDuration: 200, children: /* @__PURE__ */ d(ye, { children: [
      /* @__PURE__ */ t(ke, { asChild: !0, children: Z }),
      /* @__PURE__ */ t(Ie, { side: "bottom", className: "text-xs", children: W })
    ] }) }, u.value) : Z;
  };
  return /* @__PURE__ */ d("div", { className: b(
    "inline-flex",
    !c && "rounded-md border border-border/40 bg-muted/30 p-0.5 shadow-sm",
    s && "opacity-50"
  ), children: [
    T.map(
      (u, z) => j(u, z === 0, z === T.length - 1)
    ),
    p && /* @__PURE__ */ d(K, { open: I, onOpenChange: x, children: [
      /* @__PURE__ */ t(q, { asChild: !0, children: /* @__PURE__ */ d(
        "button",
        {
          disabled: s,
          className: b(
            "flex items-center justify-center gap-1 font-medium transition-all rounded-r-md",
            "h-8 px-2.5 text-xs",
            R.length > 0 ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
            s && "cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ t("span", { children: R.length > 0 ? `+${R.length}` : "More" }),
            /* @__PURE__ */ t(_, { className: "h-3 w-3" })
          ]
        }
      ) }),
      /* @__PURE__ */ t(ee, { align: "end", className: "w-44 p-1 gap-0", children: E.map((u) => {
        const z = u.icon, O = y(u.value);
        return /* @__PURE__ */ d(
          "button",
          {
            onClick: () => C(u.value),
            className: b(
              "w-full flex items-center gap-2 px-2 py-1 text-xs rounded-sm transition-colors",
              O ? "bg-accent text-accent-foreground" : "hover:bg-muted"
            ),
            children: [
              z && /* @__PURE__ */ t(z, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", children: u.label }),
              O && /* @__PURE__ */ t(Y, { className: "h-3.5 w-3.5" })
            ]
          },
          u.value
        );
      }) })
    ] })
  ] });
}
function gr({
  value: e,
  onChange: r,
  min: n = 0,
  max: o = 100,
  step: a = 1,
  disabled: i = !1,
  className: l,
  variant: m = "stepper"
}) {
  if (m === "slider")
    return /* @__PURE__ */ d("div", { className: b("flex items-center gap-3 flex-1", l), children: [
      /* @__PURE__ */ t(
        De,
        {
          value: [e],
          onValueChange: (h) => r(h[0]),
          min: n,
          max: o,
          step: a,
          disabled: i,
          className: "flex-1"
        }
      ),
      /* @__PURE__ */ t("span", { className: "text-xs font-mono text-muted-foreground w-8 text-right", children: e })
    ] });
  const f = () => {
    if (i) return;
    const h = e + a;
    (o === void 0 || h <= o) && r(h);
  }, s = () => {
    if (i) return;
    const h = e - a;
    (n === void 0 || h >= n) && r(h);
  }, c = (h) => {
    const N = parseInt(h.target.value, 10);
    if (!isNaN(N)) {
      let w = N;
      n !== void 0 && (w = Math.max(n, w)), o !== void 0 && (w = Math.min(o, w)), r(w);
    }
  };
  return /* @__PURE__ */ d("div", { className: b("flex items-center gap-0.5 flex-1", l), children: [
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        onClick: s,
        disabled: i || n !== void 0 && e <= n,
        className: "h-8 w-8 flex items-center justify-center rounded-md bg-muted/30 hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors",
        children: /* @__PURE__ */ t(nt, { className: "h-3 w-3" })
      }
    ),
    /* @__PURE__ */ t(
      he,
      {
        type: "number",
        value: e,
        min: n,
        max: o,
        step: a,
        disabled: i,
        onChange: c,
        className: "h-8 text-center text-xs bg-muted/30 border-transparent hover:border-border focus:border-border focus:bg-background transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      }
    ),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        onClick: f,
        disabled: i || o !== void 0 && e >= o,
        className: "h-8 w-8 flex items-center justify-center rounded-md bg-muted/30 hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors",
        children: /* @__PURE__ */ t(ot, { className: "h-3 w-3" })
      }
    )
  ] });
}
function qt({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    "textarea",
    {
      "data-slot": "textarea",
      className: b(
        "border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 rounded-none border bg-transparent px-2.5 py-2 text-xs transition-colors focus-visible:ring-1 aria-invalid:ring-1 md:text-xs placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...r
    }
  );
}
function er(e) {
  const r = e.split(/\s+/);
  return r[r.length - 1] || "";
}
function br({
  value: e,
  onChange: r,
  suggestions: n = [],
  noRing: o = !1,
  noResize: a = !1,
  autoGrow: i = !0,
  className: l,
  ...m
}) {
  const [f, s] = V(!1), c = te(null), h = er(e), N = h ? n.filter((k) => k.toLowerCase().includes(h.toLowerCase())) : n, w = (k) => {
    const S = k.target.value;
    r(S), n.length > 0 && s(!0);
  }, I = (k) => {
    const S = e.split(/\s+/);
    S[S.length - 1] = k, r(S.join(" ")), s(!1), c.current?.focus();
  }, x = (k) => {
    n.length > 0 && s(!0), m.onFocus?.(k);
  }, y = (k) => {
    setTimeout(() => s(!1), 150), m.onBlur?.(k);
  }, C = n.length > 0;
  return /* @__PURE__ */ d("div", { className: "relative flex-1", children: [
    /* @__PURE__ */ d("div", { className: "relative", children: [
      /* @__PURE__ */ t(
        qt,
        {
          ref: c,
          value: e,
          onChange: w,
          onFocus: x,
          onBlur: y,
          className: b(
            "min-h-[60px] text-xs bg-muted/30 border-transparent hover:border-border focus:border-border focus:bg-background transition-colors placeholder:text-muted-foreground/50 scrollbar-none",
            C && "pr-6",
            o && "focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-border",
            a ? "resize-none" : "resize-y",
            !i && "field-sizing-fixed",
            l
          ),
          ...m
        }
      ),
      C && /* @__PURE__ */ t(_, { className: "absolute right-2 top-3 h-3 w-3 text-muted-foreground/50" })
    ] }),
    f && N.length > 0 && /* @__PURE__ */ t("div", { className: "absolute top-full left-0 right-0 z-50 mt-1 bg-popover border border-border rounded-md shadow-md py-1", children: /* @__PURE__ */ t("div", { className: "max-h-40 overflow-auto", children: N.map((k) => /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: b(
          "w-full px-2 py-1.5 text-xs text-left hover:bg-accent hover:text-accent-foreground",
          k === e && "bg-accent/50"
        ),
        onMouseDown: (S) => S.preventDefault(),
        onClick: () => I(k),
        title: k,
        children: /* @__PURE__ */ t("span", { className: "block truncate", children: k })
      },
      k
    )) }) })
  ] });
}
export {
  xt as BooleanInput,
  fr as DynamicInput,
  mr as EnumInput,
  hr as IconInput,
  pr as MultiEnumSelect,
  gr as NumberInput,
  Nt as NumericalInput,
  yt as ObjectInput,
  br as TextAreaInput,
  wt as TextInput
};
