import { jsx as t, jsxs as i, Fragment as ue } from "react/jsx-runtime";
import * as Fe from "react";
import { useState as T, useRef as D, useEffect as R, useMemo as $, useCallback as W, memo as ot, useImperativeHandle as at, createElement as je, useLayoutEffect as Ce } from "react";
import { RadioGroup as ve, Checkbox as Ee, Switch as Pe, Popover as me, Slider as ie, Select as M } from "radix-ui";
import { c as v } from "./utils-B6yFEsav.js";
import { CircleIcon as st, CheckIcon as He, ChevronDown as G, Code2 as Ve, Check as Z, Braces as it, ToggleLeft as lt, Hash as we, Type as Ne, CircleSlash as ct, ChevronDownIcon as _e, ChevronUpIcon as dt, X as Ue, Minus as ut, Plus as mt, FileCode2 as Le, Globe as ft } from "lucide-react";
import Ge from "@monaco-editor/react";
import { B as fe } from "./button-DHQhRgTM.js";
import { D as Je, a as Ke, b as Qe, c as Ze, d as qe } from "./dialog-CDPimJCA.js";
import { T as ke, a as Ie, b as Se, c as ze } from "./tooltip-Cep25X0w.js";
import { f as ht, A as Be, g as pt, a as gt, B as Re } from "./badge-B1vpNSNG.js";
function bt({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    ve.Root,
    {
      "data-slot": "radio-group",
      className: v("grid gap-2 w-full", e),
      ...r
    }
  );
}
function Me({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    ve.Item,
    {
      "data-slot": "radio-group-item",
      className: v(
        "border-input text-primary dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 data-checked:bg-primary data-checked:border-primary flex size-4 rounded-full focus-visible:ring-1 aria-invalid:ring-1 group/radio-group-item peer relative aspect-square shrink-0 border outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...r,
      children: /* @__PURE__ */ t(
        ve.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "group-aria-invalid/radio-group-item:text-destructive flex size-4 items-center justify-center text-white",
          children: /* @__PURE__ */ t(st, { className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-current" })
        }
      )
    }
  );
}
function xt({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    Ee.Root,
    {
      "data-slot": "checkbox",
      className: v(
        "border-input dark:bg-input/30 data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary data-checked:border-primary aria-invalid:aria-checked:border-primary aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 flex size-4 items-center justify-center rounded-none border transition-colors group-has-disabled/field:opacity-50 focus-visible:ring-1 aria-invalid:ring-1 peer relative shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...r,
      children: /* @__PURE__ */ t(
        Ee.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "[&>svg]:size-3.5 grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ t(
            He,
            {}
          )
        }
      )
    }
  );
}
function vt({
  className: e,
  size: r = "default",
  ...n
}) {
  return /* @__PURE__ */ t(
    Pe.Root,
    {
      "data-slot": "switch",
      "data-size": r,
      className: v(
        "data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 dark:data-unchecked:bg-input/80 shrink-0 rounded-full border border-transparent focus-visible:ring-1 aria-invalid:ring-1 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] peer group/switch relative inline-flex items-center transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 data-disabled:cursor-not-allowed data-disabled:opacity-50",
        e
      ),
      ...n,
      children: /* @__PURE__ */ t(
        Pe.Thumb,
        {
          "data-slot": "switch-thumb",
          className: "bg-background dark:data-unchecked:bg-foreground dark:data-checked:bg-primary-foreground rounded-full group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 pointer-events-none block ring-0 transition-transform"
        }
      )
    }
  );
}
function wt({
  value: e,
  onChange: r,
  className: n,
  variant: o = "checkbox",
  ...a
}) {
  const s = Fe.useId();
  return o === "switch" ? /* @__PURE__ */ t(
    vt,
    {
      checked: e,
      onCheckedChange: (l) => r(!!l),
      className: n,
      ...a
    }
  ) : o === "radio" ? /* @__PURE__ */ i(
    bt,
    {
      value: e ? "true" : "false",
      onValueChange: (l) => r(l === "true"),
      className: v("flex flex-row gap-4", n),
      ...a,
      children: [
        /* @__PURE__ */ i("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t(Me, { value: "true", id: `${s}-true` }),
          /* @__PURE__ */ t("label", { htmlFor: `${s}-true`, className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: "True" })
        ] }),
        /* @__PURE__ */ i("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t(Me, { value: "false", id: `${s}-false` }),
          /* @__PURE__ */ t("label", { htmlFor: `${s}-false`, className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: "False" })
        ] })
      ]
    }
  ) : /* @__PURE__ */ t(
    xt,
    {
      checked: e,
      onCheckedChange: (l) => r(!!l),
      className: v("h-3.5 w-3.5", n),
      ...a
    }
  );
}
function Y({
  ...e
}) {
  return /* @__PURE__ */ t(me.Root, { "data-slot": "popover", ...e });
}
function ee({
  ...e
}) {
  return /* @__PURE__ */ t(me.Trigger, { "data-slot": "popover-trigger", ...e });
}
function te({
  className: e,
  align: r = "center",
  sideOffset: n = 4,
  ...o
}) {
  return /* @__PURE__ */ t(me.Portal, { children: /* @__PURE__ */ t(
    me.Content,
    {
      "data-slot": "popover-content",
      align: r,
      sideOffset: n,
      className: v(
        "bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 flex flex-col gap-2.5 rounded-none p-2.5 text-xs shadow-md ring-1 duration-100 z-50 w-72 origin-(--radix-popover-content-transform-origin) outline-hidden",
        e
      ),
      ...o
    }
  ) });
}
function pe({ className: e, type: r, ...n }) {
  return /* @__PURE__ */ t(
    "input",
    {
      type: r,
      "data-slot": "input",
      className: v(
        "dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-none border bg-transparent px-2.5 py-1 text-xs transition-colors file:h-6 file:text-xs file:font-medium focus-visible:ring-1 aria-invalid:ring-1 md:text-xs file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...n
    }
  );
}
function Nt(e) {
  const r = e.split(/\s+/);
  return r[r.length - 1] || "";
}
function Xe({
  value: e,
  onChange: r,
  suggestions: n = [],
  noRing: o = !1,
  frozen: a = !1,
  className: s,
  ...l
}) {
  const [m, u] = T(!1), [c, d] = T(!a), p = D(null), N = Nt(e), C = N ? n.filter((h) => h.toLowerCase().includes(N.toLowerCase())) : n, k = (h) => {
    const g = h.target.value;
    r(g), n.length > 0 && u(!0);
  }, y = (h) => {
    const g = e.split(/\s+/);
    g[g.length - 1] = h, r(g.join(" ")), u(!1), p.current?.focus();
  }, I = (h) => {
    n.length > 0 && u(!0), l.onFocus?.(h);
  }, S = (h) => {
    setTimeout(() => u(!1), 150), l.onBlur?.(h);
  }, w = () => {
    a && !c && (d(!0), setTimeout(() => p.current?.focus(), 0));
  }, b = n.length > 0, x = a && !c;
  return /* @__PURE__ */ i("div", { className: "relative flex-1", children: [
    /* @__PURE__ */ i("div", { className: "relative", children: [
      x && /* @__PURE__ */ t(
        "div",
        {
          onClick: w,
          className: v(
            "absolute inset-0 z-10 cursor-pointer",
            "bg-muted/50 border border-border/50",
            "flex items-center justify-center",
            "hover:bg-accent/50 hover:border-border transition-colors duration-150"
          ),
          children: /* @__PURE__ */ t("span", { className: "text-[10px] text-muted-foreground" })
        }
      ),
      /* @__PURE__ */ t(
        pe,
        {
          ref: p,
          value: e,
          onChange: k,
          onFocus: I,
          onBlur: S,
          disabled: x || l.disabled,
          className: v(
            "h-7 text-xs bg-muted/30 border-transparent hover:border-border focus:border-border focus:bg-background transition-colors placeholder:text-muted-foreground/50",
            b && "pr-6",
            o && "focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-border",
            x && "opacity-60",
            s
          ),
          ...l
        }
      ),
      b && /* @__PURE__ */ t(G, { className: "absolute right-2 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground/50" })
    ] }),
    m && C.length > 0 && /* @__PURE__ */ t("div", { className: "absolute top-full left-0 right-0 z-50 mt-1 bg-popover border border-border rounded-md shadow-md py-1", children: /* @__PURE__ */ t("div", { className: "max-h-40 overflow-auto", children: C.map((h) => /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: v(
          "w-full px-2 py-1.5 text-xs text-left hover:bg-accent hover:text-accent-foreground",
          h === e && "bg-accent/50"
        ),
        onMouseDown: (g) => g.preventDefault(),
        onClick: () => y(h),
        title: h,
        children: /* @__PURE__ */ t("span", { className: "block truncate", children: h })
      },
      h
    )) }) })
  ] });
}
function Ye({
  className: e,
  defaultValue: r,
  value: n,
  min: o = 0,
  max: a = 100,
  ...s
}) {
  const l = Fe.useMemo(
    () => Array.isArray(n) ? n : Array.isArray(r) ? r : [o, a],
    [n, r, o, a]
  );
  return /* @__PURE__ */ i(
    ie.Root,
    {
      "data-slot": "slider",
      defaultValue: r,
      value: n,
      min: o,
      max: a,
      className: v(
        "data-vertical:min-h-40 relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:w-auto data-vertical:flex-col",
        e
      ),
      ...s,
      children: [
        /* @__PURE__ */ t(
          ie.Track,
          {
            "data-slot": "slider-track",
            className: "bg-muted rounded-none data-horizontal:h-1 data-horizontal:w-full data-vertical:h-full data-vertical:w-1 bg-muted relative grow overflow-hidden data-horizontal:w-full data-vertical:h-full",
            children: /* @__PURE__ */ t(
              ie.Range,
              {
                "data-slot": "slider-range",
                className: "bg-primary absolute select-none data-horizontal:h-full data-vertical:w-full"
              }
            )
          }
        ),
        Array.from({ length: l.length }, (m, u) => /* @__PURE__ */ t(
          ie.Thumb,
          {
            "data-slot": "slider-thumb",
            className: "border-ring ring-ring/50 relative size-3 rounded-none border bg-white transition-[color,box-shadow] after:absolute after:-inset-2 hover:ring-1 focus-visible:ring-1 focus-visible:outline-hidden active:ring-1 block shrink-0 select-none disabled:pointer-events-none disabled:opacity-50"
          },
          u
        ))
      ]
    }
  );
}
function yt({
  value: e,
  onChange: r,
  placeholder: n = "0",
  disabled: o = !1,
  className: a,
  variant: s = "input",
  min: l = 0,
  max: m = 100,
  step: u = 1
}) {
  const [c, d] = T(String(e));
  return R(() => {
    d(String(e));
  }, [e]), s === "slider" ? /* @__PURE__ */ i("div", { className: v("flex items-center gap-3 flex-1", a), children: [
    /* @__PURE__ */ t(
      Ye,
      {
        value: [e],
        onValueChange: (C) => r(C[0]),
        min: l,
        max: m,
        step: u,
        disabled: o,
        className: "flex-1"
      }
    ),
    /* @__PURE__ */ t("span", { className: "text-xs font-mono text-muted-foreground w-10 text-right", children: e })
  ] }) : /* @__PURE__ */ t(
    pe,
    {
      type: "text",
      inputMode: "decimal",
      value: c,
      onChange: (C) => {
        const k = C.target.value;
        d(k);
        const y = parseFloat(k);
        isNaN(y) ? (k === "" || k === "-") && r(0) : r(y);
      },
      onBlur: () => {
        const C = parseFloat(c);
        isNaN(C) ? (d("0"), r(0)) : d(String(C));
      },
      placeholder: n,
      disabled: o,
      className: v(
        "h-8 text-xs flex-1 bg-muted/30 border-transparent hover:border-border focus:border-border focus:bg-background transition-colors font-mono",
        a
      )
    }
  );
}
function Ct({
  value: e,
  onChange: r,
  label: n = "Edit JSON",
  disabled: o = !1,
  suggestions: a = []
}) {
  const [s, l] = T(!1), [m, u] = T(""), [c, d] = T(null), p = D(null), N = typeof e == "object" ? JSON.stringify(e, null, 2) : typeof e == "string" ? e : "";
  R(() => {
    s && (u(N), d(null));
  }, [s, N]), R(() => () => {
    p.current?.dispose();
  }, []);
  const C = (w, b) => {
    if (p.current?.dispose(), a.length === 0) return;
    const h = w.getModel()?.getLanguageId() ?? "json";
    p.current = b.languages.registerCompletionItemProvider(h, {
      provideCompletionItems: (g, O) => {
        const P = g.getWordUntilPosition(O), V = {
          startLineNumber: O.lineNumber,
          endLineNumber: O.lineNumber,
          startColumn: P.startColumn,
          endColumn: P.endColumn
        };
        return {
          suggestions: a.map((E, f) => ({
            label: E,
            kind: b.languages.CompletionItemKind.Text,
            insertText: E,
            range: V,
            sortText: String(f).padStart(5, "0")
          }))
        };
      }
    });
  }, k = (w) => {
    const b = w || "";
    u(b);
    try {
      JSON.parse(b), d(null);
    } catch (x) {
      d(x.message);
    }
  }, y = () => {
    try {
      const w = JSON.parse(m);
      r(w), l(!1);
    } catch (w) {
      d(w.message);
    }
  }, I = N.split(`
`).length;
  return /* @__PURE__ */ i(Je, { open: s, onOpenChange: (w) => !o && l(w), children: [
    /* @__PURE__ */ t(Ke, { asChild: !0, children: /* @__PURE__ */ i(
      "button",
      {
        disabled: o,
        className: "flex-1 flex items-center justify-between gap-2 h-8 px-2 text-xs bg-muted/30 border border-transparent hover:border-border hover:bg-muted/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-transparent disabled:hover:bg-muted/30",
        children: [
          /* @__PURE__ */ i("span", { className: "flex items-center gap-1.5 text-muted-foreground", children: [
            /* @__PURE__ */ t(Ve, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ t("span", { children: n })
          ] }),
          /* @__PURE__ */ i("span", { className: "text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground", children: [
            I,
            " lines"
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ i(
      Qe,
      {
        className: "p-0 gap-0 flex flex-col overflow-hidden",
        style: {
          width: "calc(100vw - 120px)",
          maxWidth: "800px",
          height: "calc(100vh - 120px)",
          maxHeight: "600px"
        },
        children: [
          /* @__PURE__ */ t(Ze, { className: "px-4 py-3 flex-shrink-0 bg-muted/50 border-b border-border", children: /* @__PURE__ */ i(qe, { className: "flex items-center gap-2 text-sm font-medium", children: [
            /* @__PURE__ */ t(Ve, { className: "h-4 w-4 text-primary" }),
            n
          ] }) }),
          /* @__PURE__ */ t("div", { className: "flex-1 min-h-0 bg-background", children: /* @__PURE__ */ t(
            Ge,
            {
              height: "100%",
              defaultLanguage: "json",
              value: m,
              onChange: k,
              onMount: C,
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
                smoothScrolling: !0,
                // Enable suggestions inside strings (normally disabled for JSON)
                quickSuggestions: {
                  strings: !0,
                  other: !0,
                  comments: !1
                },
                // Show suggestions on trigger characters immediately
                suggestOnTriggerCharacters: !0
              }
            }
          ) }),
          /* @__PURE__ */ i("div", { className: "px-4 py-3 flex-shrink-0 bg-muted/50 border-t border-border flex items-center justify-between", children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: c ? /* @__PURE__ */ i(ue, { children: [
              /* @__PURE__ */ t("div", { className: "h-2 w-2 rounded-full bg-destructive" }),
              /* @__PURE__ */ t("p", { className: "text-xs text-destructive truncate max-w-[300px]", children: c })
            ] }) : /* @__PURE__ */ i(ue, { children: [
              /* @__PURE__ */ t("div", { className: "h-2 w-2 rounded-full bg-primary" }),
              /* @__PURE__ */ t("span", { className: "text-xs text-muted-foreground", children: "Valid JSON" })
            ] }) }),
            /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ t(
                fe,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => l(!1),
                  className: "h-7 px-3 text-xs",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ i(
                fe,
                {
                  size: "sm",
                  onClick: y,
                  disabled: !(c === null),
                  className: "h-7 px-4 text-xs",
                  children: [
                    /* @__PURE__ */ t(Z, { className: "h-3.5 w-3.5 mr-1.5" }),
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
  null: { label: "Null", icon: ct, default: null },
  string: { label: "String", icon: Ne, default: "" },
  number: { label: "Number", icon: we, default: 0 },
  boolean: { label: "Boolean", icon: lt, default: !1 },
  object: { label: "Object", icon: it, default: {} }
};
function kt(e) {
  return e == null ? "null" : typeof e == "string" ? "string" : typeof e == "number" ? "number" : typeof e == "boolean" ? "boolean" : typeof e == "object" ? "object" : "null";
}
function mr({
  value: e,
  onChange: r,
  allowedTypes: n = ["null", "string", "number", "boolean", "object"],
  disabled: o = !1
}) {
  const [a, s] = T(!1), l = $(() => kt(e), [e]), m = (d) => {
    if (d === l) {
      s(!1);
      return;
    }
    r(le[d].default), s(!1);
  }, u = le[l].icon, c = () => {
    switch (l) {
      case "null":
        return /* @__PURE__ */ t("div", { className: "flex-1 h-8 flex items-center px-3 text-xs text-muted-foreground italic bg-muted/20", children: "null" });
      case "string":
        return /* @__PURE__ */ t(
          Xe,
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
          yt,
          {
            value: e,
            onChange: r,
            disabled: o,
            className: "flex-1"
          }
        );
      case "boolean":
        return /* @__PURE__ */ t("div", { className: "flex-1 flex items-center", children: /* @__PURE__ */ t(
          wt,
          {
            variant: "radio",
            value: e,
            onChange: r,
            disabled: o
          }
        ) });
      case "object":
        return /* @__PURE__ */ t(
          Ct,
          {
            value: e,
            onChange: (d) => r(d),
            disabled: o,
            label: "Edit Object"
          }
        );
      default:
        return null;
    }
  };
  return /* @__PURE__ */ i("div", { className: v(
    "inline-flex items-center gap-2",
    o && "opacity-50"
  ), children: [
    /* @__PURE__ */ i(Y, { open: a, onOpenChange: s, children: [
      /* @__PURE__ */ t(ee, { asChild: !0, children: /* @__PURE__ */ i(
        "button",
        {
          disabled: o,
          className: v(
            "inline-flex items-center justify-center gap-1 h-8 px-2",
            "bg-muted/30 border border-border/50 hover:border-border hover:bg-muted/50 transition-colors",
            o && "cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ t(u, { className: "h-4 w-4" }),
            /* @__PURE__ */ t(G, { className: "h-3 w-3 opacity-50" })
          ]
        }
      ) }),
      /* @__PURE__ */ t(te, { align: "start", className: "w-36 p-1 gap-0", children: n.map((d) => {
        const p = le[d].icon;
        return /* @__PURE__ */ i(
          "button",
          {
            onClick: () => m(d),
            className: v(
              "w-full flex items-center gap-2 px-2 py-1.5 text-xs rounded-sm transition-colors",
              d === l ? "bg-accent text-accent-foreground" : "hover:bg-muted"
            ),
            children: [
              /* @__PURE__ */ t(p, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ t("span", { className: "flex-1 text-left", children: le[d].label })
            ]
          },
          d
        );
      }) })
    ] }),
    c()
  ] });
}
function It({
  ...e
}) {
  return /* @__PURE__ */ t(M.Root, { "data-slot": "select", ...e });
}
function St({
  ...e
}) {
  return /* @__PURE__ */ t(M.Value, { "data-slot": "select-value", ...e });
}
function zt({
  className: e,
  size: r = "default",
  children: n,
  ...o
}) {
  return /* @__PURE__ */ i(
    M.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": r,
      className: v(
        "border-input data-[placeholder]:text-muted-foreground dark:bg-input/30 dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 gap-1.5 rounded-none border bg-transparent py-2 pr-2 pl-2.5 text-xs transition-colors select-none focus-visible:ring-1 aria-invalid:ring-1 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-none *:data-[slot=select-value]:flex *:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 flex w-fit items-center justify-between whitespace-nowrap outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
        e
      ),
      ...o,
      children: [
        n,
        /* @__PURE__ */ t(M.Icon, { asChild: !0, children: /* @__PURE__ */ t(_e, { className: "text-muted-foreground size-4 pointer-events-none" }) })
      ]
    }
  );
}
function Ot({
  className: e,
  children: r,
  position: n = "item-aligned",
  align: o = "center",
  ...a
}) {
  return /* @__PURE__ */ t(M.Portal, { children: /* @__PURE__ */ i(
    M.Content,
    {
      "data-slot": "select-content",
      className: v("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 min-w-36 rounded-none shadow-md ring-1 duration-100 relative z-50 max-h-(--radix-select-content-available-height) origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
      position: n,
      align: o,
      ...a,
      children: [
        /* @__PURE__ */ t(jt, {}),
        /* @__PURE__ */ t(
          M.Viewport,
          {
            "data-position": n,
            className: v(
              "data-[position=popper]:h-[var(--radix-select-trigger-height)] data-[position=popper]:w-full data-[position=popper]:min-w-[var(--radix-select-trigger-width)]",
              n === "popper" && ""
            ),
            children: r
          }
        ),
        /* @__PURE__ */ t(Et, {})
      ]
    }
  ) });
}
function Tt({
  className: e,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ i(
    M.Item,
    {
      "data-slot": "select-item",
      className: v(
        "focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground gap-2 rounded-none py-2 pr-8 pl-2 text-xs [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 relative flex w-full cursor-default items-center outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ t("span", { className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center", children: /* @__PURE__ */ t(M.ItemIndicator, { children: /* @__PURE__ */ t(He, { className: "pointer-events-none" }) }) }),
        /* @__PURE__ */ t(M.ItemText, { children: r })
      ]
    }
  );
}
function jt({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    M.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: v("bg-popover z-10 flex cursor-default items-center justify-center py-1 [&_svg:not([class*='size-'])]:size-4", e),
      ...r,
      children: /* @__PURE__ */ t(
        dt,
        {}
      )
    }
  );
}
function Et({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    M.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: v("bg-popover z-10 flex cursor-default items-center justify-center py-1 [&_svg:not([class*='size-'])]:size-4", e),
      ...r,
      children: /* @__PURE__ */ t(
        _e,
        {}
      )
    }
  );
}
function fr({
  value: e,
  onChange: r,
  options: n,
  variant: o,
  buttonDisplay: a = "text",
  maxInline: s,
  placeholder: l = "Select...",
  dropdownTitle: m,
  iconTrigger: u,
  disabled: c = !1,
  borderless: d = !1
}) {
  const [p, N] = T(!1), [C, k] = T(!1), y = W(
    (g) => {
      c || r(g);
    },
    [r, c]
  );
  if ((o ?? (n.length > 5 ? "dropdown" : "buttons")) === "dropdown")
    return u ? /* @__PURE__ */ i(Y, { open: C, onOpenChange: k, children: [
      /* @__PURE__ */ t(ee, { asChild: !0, children: /* @__PURE__ */ i(
        "button",
        {
          disabled: c,
          className: v(
            "inline-flex items-center justify-center gap-1 h-8 px-2",
            !d && "bg-muted/30 border border-transparent hover:border-border hover:bg-muted/50",
            d && "hover:bg-muted/30",
            "transition-colors",
            c && "opacity-50 cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ t(u, { className: "h-4 w-4" }),
            /* @__PURE__ */ t(G, { className: "h-3 w-3 opacity-50" })
          ]
        }
      ) }),
      /* @__PURE__ */ i(te, { align: "start", className: "w-48 p-1 gap-0", children: [
        m && /* @__PURE__ */ t("div", { className: "px-2 py-1.5 text-xs font-medium text-muted-foreground border-b border-border mb-1", children: m }),
        n.map((g) => {
          const O = g.icon, P = e === g.value;
          return /* @__PURE__ */ i(
            "button",
            {
              onClick: () => {
                y(g.value), k(!1);
              },
              className: v(
                "w-full flex items-center gap-2 px-2 py-1.5 text-xs transition-colors",
                P ? "bg-accent text-accent-foreground" : "hover:bg-muted"
              ),
              children: [
                O && /* @__PURE__ */ t(O, { className: "h-3.5 w-3.5" }),
                /* @__PURE__ */ t("span", { className: "flex-1 text-left", children: g.label }),
                P && /* @__PURE__ */ t(Z, { className: "h-3.5 w-3.5" })
              ]
            },
            g.value
          );
        })
      ] })
    ] }) : /* @__PURE__ */ i(It, { value: e || "", onValueChange: y, disabled: c, children: [
      /* @__PURE__ */ t(zt, { className: "h-8 text-xs bg-muted/30 border-transparent hover:border-border focus:border-border transition-colors", children: /* @__PURE__ */ t(St, { placeholder: l }) }),
      /* @__PURE__ */ i(Ot, { children: [
        m && /* @__PURE__ */ t("div", { className: "px-2 py-1.5 text-xs font-medium text-muted-foreground border-b border-border mb-1", children: m }),
        n.map((g) => {
          const O = g.icon;
          return /* @__PURE__ */ t(Tt, { value: g.value, className: "text-xs", children: /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
            O && /* @__PURE__ */ t(O, { className: "h-3.5 w-3.5" }),
            g.label
          ] }) }, g.value);
        })
      ] })
    ] });
  const S = s !== void 0 && n.length > s, w = S ? n.slice(0, s - 1) : n, b = S ? n.slice(s - 1) : [], x = b.find((g) => g.value === e), h = (g, O, P) => {
    const V = e === g.value, E = g.icon, f = E && (a === "icon" || a === "both"), z = a === "text" || a === "both", j = /* @__PURE__ */ i(
      "button",
      {
        onClick: () => y(g.value),
        disabled: c,
        className: v(
          "flex items-center justify-center gap-1.5 font-medium transition-all",
          "h-8 px-2.5 text-xs",
          O && "rounded-l-md",
          P && !S && "rounded-r-md",
          !O && !P && "rounded-none",
          V ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
          c && "opacity-50 cursor-not-allowed"
        ),
        children: [
          f && /* @__PURE__ */ t(E, { className: "h-3.5 w-3.5" }),
          z && /* @__PURE__ */ t("span", { className: "truncate", children: g.label })
        ]
      },
      g.value
    ), L = g.hoverText || (a === "icon" ? g.label : void 0);
    return L && !c ? /* @__PURE__ */ t(ke, { delayDuration: 200, children: /* @__PURE__ */ i(Ie, { children: [
      /* @__PURE__ */ t(Se, { asChild: !0, children: j }),
      /* @__PURE__ */ t(ze, { side: "bottom", className: "text-xs", children: L })
    ] }) }, g.value) : j;
  };
  return /* @__PURE__ */ i("div", { className: v(
    "inline-flex",
    !d && "border border-border/40 bg-muted/30 p-0.5 shadow-sm",
    c && "opacity-50"
  ), children: [
    w.map(
      (g, O) => h(g, O === 0, O === w.length - 1)
    ),
    S && /* @__PURE__ */ i(Y, { open: p, onOpenChange: N, children: [
      /* @__PURE__ */ t(ee, { asChild: !0, children: /* @__PURE__ */ i(
        "button",
        {
          disabled: c,
          className: v(
            "flex items-center justify-center gap-1 font-medium transition-all rounded-r-md",
            "h-8 px-2.5 text-xs",
            x ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
            c && "cursor-not-allowed"
          ),
          children: [
            x ? /* @__PURE__ */ i(ue, { children: [
              x.icon && a !== "text" && /* @__PURE__ */ t(x.icon, { className: "h-3.5 w-3.5" }),
              a !== "icon" && /* @__PURE__ */ t("span", { className: "truncate", children: x.label })
            ] }) : /* @__PURE__ */ t("span", { children: "More" }),
            /* @__PURE__ */ t(G, { className: "h-3 w-3" })
          ]
        }
      ) }),
      /* @__PURE__ */ t(te, { align: "end", className: "w-44 p-1 gap-0", children: b.map((g) => {
        const O = g.icon, P = e === g.value;
        return /* @__PURE__ */ i(
          "button",
          {
            onClick: () => {
              y(g.value), N(!1);
            },
            className: v(
              "w-full flex items-center gap-2 px-2 py-1.5 text-xs transition-colors",
              P ? "bg-accent text-accent-foreground" : "hover:bg-muted"
            ),
            children: [
              O && /* @__PURE__ */ t(O, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", children: g.label }),
              P && /* @__PURE__ */ t(Z, { className: "h-3.5 w-3.5" })
            ]
          },
          g.value
        );
      }) })
    ] })
  ] });
}
function Pt(e) {
  let r = e;
  for (; r; ) {
    if (r.dir)
      return r.dir === "rtl";
    r = r.parentElement;
  }
  return !1;
}
function Vt(e, r) {
  const [n, o] = T(r === "rtl");
  return Ce(() => {
    e && (r || o(Pt(e)));
  }, [r, e]), n;
}
const he = typeof window < "u" ? Ce : R;
function We(e) {
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
function Lt({
  box: e,
  defaultHeight: r,
  defaultWidth: n,
  disabled: o,
  element: a,
  mode: s,
  style: l
}) {
  const { styleHeight: m, styleWidth: u } = $(
    () => ({
      styleHeight: We(l?.height),
      styleWidth: We(l?.width)
    }),
    [l?.height, l?.width]
  ), [c, d] = T({
    height: r,
    width: n
  }), p = o || s === "only-height" && m !== void 0 || s === "only-width" && u !== void 0 || m !== void 0 && u !== void 0;
  return he(() => {
    if (a === null || p)
      return;
    const N = new ResizeObserver((C) => {
      for (const k of C) {
        const { contentRect: y, target: I } = k;
        a === I && d((S) => S.height === y.height && S.width === y.width ? S : {
          height: y.height,
          width: y.width
        });
      }
    });
    return N.observe(a, { box: e }), () => {
      N?.unobserve(a);
    };
  }, [e, p, a, m, u]), $(
    () => ({
      height: m ?? c.height,
      width: u ?? c.width
    }),
    [c, m, u]
  );
}
function Bt(e) {
  const r = D(() => {
    throw new Error("Cannot call during render.");
  });
  return he(() => {
    r.current = e;
  }, [e]), W((n) => r.current?.(n), [r]);
}
let X = null;
function Rt(e = !1) {
  if (X === null || e) {
    const r = document.createElement("div"), n = r.style;
    n.width = "50px", n.height = "50px", n.overflow = "scroll", n.direction = "rtl";
    const o = document.createElement("div"), a = o.style;
    return a.width = "100px", a.height = "100px", r.appendChild(o), document.body.appendChild(r), r.scrollLeft > 0 ? X = "positive-descending" : (r.scrollLeft = 1, r.scrollLeft === 0 ? X = "negative" : X = "positive-ascending"), document.body.removeChild(r), X;
  }
  return X;
}
function ge({
  containerElement: e,
  direction: r,
  isRtl: n,
  scrollOffset: o
}) {
  if (r === "horizontal" && n)
    switch (Rt()) {
      case "negative":
        return -o;
      case "positive-descending": {
        if (e) {
          const { clientWidth: a, scrollLeft: s, scrollWidth: l } = e;
          return l - a - s;
        }
        break;
      }
    }
  return o;
}
function J(e, r = "Assertion error") {
  if (!e)
    throw console.error(r), Error(r);
}
function oe(e, r) {
  if (e === r)
    return !0;
  if (!!e != !!r || (J(e !== void 0), J(r !== void 0), Object.keys(e).length !== Object.keys(r).length))
    return !1;
  for (const n in e)
    if (!Object.is(r[n], e[n]))
      return !1;
  return !0;
}
function et({
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
    J(o !== void 0, "Unexpected bounds cache miss");
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
  containerScrollOffset: s,
  containerSize: l
}) {
  if (n < 0 || n >= o)
    throw RangeError(`Invalid index specified: ${n}`, {
      cause: `Index ${n} is not within the range of 0 - ${o - 1}`
    });
  const m = et({
    cachedBounds: r,
    itemCount: o,
    itemSize: a
  }), u = r.get(n), c = Math.max(
    0,
    Math.min(m - l, u.scrollOffset)
  ), d = Math.max(
    0,
    u.scrollOffset - l + u.size
  );
  switch (e === "smart" && (s >= d && s <= c ? e = "auto" : e = "center"), e) {
    case "start":
      return c;
    case "end":
      return d;
    case "center":
      return u.scrollOffset <= l / 2 ? 0 : u.scrollOffset + u.size / 2 >= m - l / 2 ? m - l : u.scrollOffset + u.size / 2 - l / 2;
    default:
      return s >= d && s <= c ? s : s < d ? d : c;
  }
}
function $e({
  cachedBounds: e,
  containerScrollOffset: r,
  containerSize: n,
  itemCount: o,
  overscanCount: a
}) {
  const s = o - 1;
  let l = 0, m = -1, u = 0, c = -1, d = 0;
  for (; d < s; ) {
    const p = e.get(d);
    if (p.scrollOffset + p.size > r)
      break;
    d++;
  }
  for (l = d, u = Math.max(0, l - a); d < s; ) {
    const p = e.get(d);
    if (p.scrollOffset + p.size >= r + n)
      break;
    d++;
  }
  return m = Math.min(s, d), c = Math.min(o - 1, m + a), l < 0 && (l = 0, m = -1, u = 0, c = -1), {
    startIndexVisible: l,
    stopIndexVisible: m,
    startIndexOverscan: u,
    stopIndexOverscan: c
  };
}
function Wt({
  itemCount: e,
  itemProps: r,
  itemSize: n
}) {
  const o = /* @__PURE__ */ new Map();
  return {
    get(a) {
      for (J(a < e, `Invalid index ${a}`); o.size - 1 < a; ) {
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
          const u = o.get(l - 1);
          J(
            u !== void 0,
            `Unexpected bounds cache miss for index ${a}`
          ), o.set(l, {
            scrollOffset: u.scrollOffset + u.size,
            size: m
          });
        }
      }
      const s = o.get(a);
      return J(
        s !== void 0,
        `Unexpected bounds cache miss for index ${a}`
      ), s;
    },
    set(a, s) {
      o.set(a, s);
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
  return $(
    () => Wt({
      itemCount: e,
      itemProps: r,
      itemSize: n
    }),
    [e, r, n]
  );
}
function Dt({
  containerSize: e,
  itemSize: r
}) {
  let n;
  return typeof r === "string" ? (J(
    r.endsWith("%"),
    `Invalid item size: "${r}"; string values must be percentages (e.g. "100%")`
  ), J(
    e !== void 0,
    "Container size must be defined if a percentage item size is specified"
  ), n = e * parseInt(r) / 100) : n = r, n;
}
function De({
  containerElement: e,
  containerStyle: r,
  defaultContainerSize: n = 0,
  direction: o,
  isRtl: a = !1,
  itemCount: s,
  itemProps: l,
  itemSize: m,
  onResize: u,
  overscanCount: c
}) {
  const [d, p] = T({
    startIndexVisible: 0,
    startIndexOverscan: 0,
    stopIndexVisible: -1,
    stopIndexOverscan: -1
  }), {
    startIndexVisible: N,
    startIndexOverscan: C,
    stopIndexVisible: k,
    stopIndexOverscan: y
  } = {
    startIndexVisible: Math.min(s - 1, d.startIndexVisible),
    startIndexOverscan: Math.min(s - 1, d.startIndexOverscan),
    stopIndexVisible: Math.min(s - 1, d.stopIndexVisible),
    stopIndexOverscan: Math.min(s - 1, d.stopIndexOverscan)
  }, { height: I = n, width: S = n } = Lt({
    defaultHeight: o === "vertical" ? n : void 0,
    defaultWidth: o === "horizontal" ? n : void 0,
    element: e,
    mode: o === "vertical" ? "only-height" : "only-width",
    style: r
  }), w = D({
    height: 0,
    width: 0
  }), b = o === "vertical" ? I : S, x = Dt({ containerSize: b, itemSize: m });
  Ce(() => {
    if (typeof u == "function") {
      const E = w.current;
      (E.height !== I || E.width !== S) && (u({ height: I, width: S }, { ...E }), E.height = I, E.width = S);
    }
  }, [I, u, S]);
  const h = $t({
    itemCount: s,
    itemProps: l,
    itemSize: x
  }), g = W(
    (E) => h.get(E),
    [h]
  ), O = W(
    () => et({
      cachedBounds: h,
      itemCount: s,
      itemSize: x
    }),
    [h, s, x]
  ), P = W(
    (E) => {
      const f = ge({
        containerElement: e,
        direction: o,
        isRtl: a,
        scrollOffset: E
      });
      return $e({
        cachedBounds: h,
        containerScrollOffset: f,
        containerSize: b,
        itemCount: s,
        overscanCount: c
      });
    },
    [
      h,
      e,
      b,
      o,
      a,
      s,
      c
    ]
  );
  he(() => {
    const E = (o === "vertical" ? e?.scrollTop : e?.scrollLeft) ?? 0;
    p(P(E));
  }, [e, o, P]), he(() => {
    if (!e)
      return;
    const E = () => {
      p((f) => {
        const { scrollLeft: z, scrollTop: j } = e, L = ge({
          containerElement: e,
          direction: o,
          isRtl: a,
          scrollOffset: o === "vertical" ? j : z
        }), K = $e({
          cachedBounds: h,
          containerScrollOffset: L,
          containerSize: b,
          itemCount: s,
          overscanCount: c
        });
        return oe(K, f) ? f : K;
      });
    };
    return e.addEventListener("scroll", E), () => {
      e.removeEventListener("scroll", E);
    };
  }, [
    h,
    e,
    b,
    o,
    s,
    c
  ]);
  const V = Bt(
    ({
      align: E = "auto",
      containerScrollOffset: f,
      index: z
    }) => {
      let j = Mt({
        align: E,
        cachedBounds: h,
        containerScrollOffset: f,
        containerSize: b,
        index: z,
        itemCount: s,
        itemSize: x
      });
      if (e) {
        if (j = ge({
          containerElement: e,
          direction: o,
          isRtl: a,
          scrollOffset: j
        }), typeof e.scrollTo != "function") {
          const L = P(j);
          oe(d, L) || p(L);
        }
        return j;
      }
    }
  );
  return {
    getCellBounds: g,
    getEstimatedSize: O,
    scrollToIndex: V,
    startIndexOverscan: C,
    startIndexVisible: N,
    stopIndexOverscan: y,
    stopIndexVisible: k
  };
}
function At(e) {
  return $(() => e, Object.values(e));
}
function Ft(e, r) {
  const {
    ariaAttributes: n,
    style: o,
    ...a
  } = e, {
    ariaAttributes: s,
    style: l,
    ...m
  } = r;
  return oe(n, s) && oe(o, l) && oe(a, m);
}
function Ht({
  cellComponent: e,
  cellProps: r,
  children: n,
  className: o,
  columnCount: a,
  columnWidth: s,
  defaultHeight: l = 0,
  defaultWidth: m = 0,
  dir: u,
  gridRef: c,
  onCellsRendered: d,
  onResize: p,
  overscanCount: N = 3,
  rowCount: C,
  rowHeight: k,
  style: y,
  tagName: I = "div",
  ...S
}) {
  const w = At(r), b = $(
    () => ot(e, Ft),
    [e]
  ), [x, h] = T(null), g = Vt(x, u), {
    getCellBounds: O,
    getEstimatedSize: P,
    startIndexOverscan: V,
    startIndexVisible: E,
    scrollToIndex: f,
    stopIndexOverscan: z,
    stopIndexVisible: j
  } = De({
    containerElement: x,
    containerStyle: y,
    defaultContainerSize: m,
    direction: "horizontal",
    isRtl: g,
    itemCount: a,
    itemProps: w,
    itemSize: s,
    onResize: p,
    overscanCount: N
  }), {
    getCellBounds: L,
    getEstimatedSize: K,
    startIndexOverscan: Q,
    startIndexVisible: se,
    scrollToIndex: q,
    stopIndexOverscan: A,
    stopIndexVisible: Te
  } = De({
    containerElement: x,
    containerStyle: y,
    defaultContainerSize: l,
    direction: "vertical",
    itemCount: C,
    itemProps: w,
    itemSize: k,
    onResize: p,
    overscanCount: N
  });
  at(
    c,
    () => ({
      get element() {
        return x;
      },
      scrollToCell({
        behavior: F = "auto",
        columnAlign: B = "auto",
        columnIndex: H,
        rowAlign: _ = "auto",
        rowIndex: U
      }) {
        const re = f({
          align: B,
          containerScrollOffset: x?.scrollLeft ?? 0,
          index: H
        }), nt = q({
          align: _,
          containerScrollOffset: x?.scrollTop ?? 0,
          index: U
        });
        typeof x?.scrollTo == "function" && x.scrollTo({
          behavior: F,
          left: re,
          top: nt
        });
      },
      scrollToColumn({
        align: F = "auto",
        behavior: B = "auto",
        index: H
      }) {
        const _ = f({
          align: F,
          containerScrollOffset: x?.scrollLeft ?? 0,
          index: H
        });
        typeof x?.scrollTo == "function" && x.scrollTo({
          behavior: B,
          left: _
        });
      },
      scrollToRow({
        align: F = "auto",
        behavior: B = "auto",
        index: H
      }) {
        const _ = q({
          align: F,
          containerScrollOffset: x?.scrollTop ?? 0,
          index: H
        });
        typeof x?.scrollTo == "function" && x.scrollTo({
          behavior: B,
          top: _
        });
      }
    }),
    [x, f, q]
  ), R(() => {
    V >= 0 && z >= 0 && Q >= 0 && A >= 0 && d && d(
      {
        columnStartIndex: E,
        columnStopIndex: j,
        rowStartIndex: se,
        rowStopIndex: Te
      },
      {
        columnStartIndex: V,
        columnStopIndex: z,
        rowStartIndex: Q,
        rowStopIndex: A
      }
    );
  }, [
    d,
    V,
    E,
    z,
    j,
    Q,
    se,
    A,
    Te
  ]);
  const tt = $(() => {
    const F = [];
    if (a > 0 && C > 0)
      for (let B = Q; B <= A; B++) {
        const H = L(B), _ = [];
        for (let U = V; U <= z; U++) {
          const re = O(U);
          _.push(
            /* @__PURE__ */ je(
              b,
              {
                ...w,
                ariaAttributes: {
                  "aria-colindex": U + 1,
                  role: "gridcell"
                },
                columnIndex: U,
                key: U,
                rowIndex: B,
                style: {
                  position: "absolute",
                  left: g ? void 0 : 0,
                  right: g ? 0 : void 0,
                  transform: `translate(${g ? -re.scrollOffset : re.scrollOffset}px, ${H.scrollOffset}px)`,
                  height: H.size,
                  width: re.size
                }
              }
            )
          );
        }
        F.push(
          /* @__PURE__ */ t("div", { role: "row", "aria-rowindex": B + 1, children: _ }, B)
        );
      }
    return F;
  }, [
    b,
    w,
    a,
    V,
    z,
    O,
    L,
    g,
    C,
    Q,
    A
  ]), rt = /* @__PURE__ */ t(
    "div",
    {
      "aria-hidden": !0,
      style: {
        height: K(),
        width: P(),
        zIndex: -1
      }
    }
  );
  return je(
    I,
    {
      "aria-colcount": a,
      "aria-rowcount": C,
      role: "grid",
      ...S,
      className: o,
      dir: u,
      ref: h,
      style: {
        position: "relative",
        width: "100%",
        height: "100%",
        maxHeight: "100%",
        maxWidth: "100%",
        flexGrow: 1,
        overflow: "auto",
        ...y
      }
    },
    tt,
    n,
    rt
  );
}
const Oe = [
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
], ae = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Set();
let ne = null;
function _t() {
  return Oe;
}
async function Ut(e) {
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
async function Jt(e) {
  if (ae.has(e))
    return ae.get(e);
  if (ye.has(e))
    return [];
  if (ce.has(e))
    return ce.get(e);
  const r = (async () => {
    try {
      const n = await Ut(e), a = Gt(n).map((s) => ht(e, s));
      return ae.set(e, a), ne = null, a;
    } catch (n) {
      return console.warn(`Failed to enumerate icons in pack "${e}":`, n), ye.add(e), [];
    } finally {
      ce.delete(e);
    }
  })();
  return ce.set(e, r), r;
}
async function Kt() {
  return ne || (ne = (await Promise.all(
    Oe.map((r) => Jt(r))
  )).flat(), ne);
}
function Qt() {
  return ae.size;
}
function Zt() {
  return ae.size + ye.size >= Oe.length;
}
function qt(e, r = 150) {
  const [n, o] = T(e), [a, s] = T(!1), [l, m] = T(!0), [u, c] = T([]), [d, p] = T(0), N = D(null);
  return R(() => {
    let k = !0;
    return (async () => {
      m(!0);
      try {
        const I = await Kt();
        k && (c(I), m(!1), p(100));
      } catch (I) {
        console.error("Failed to load icons:", I), k && m(!1);
      }
    })(), () => {
      k = !1;
    };
  }, []), R(() => {
    if (l) {
      const k = setInterval(() => {
        const y = Qt(), I = _t().length;
        p(Math.round(y / I * 100)), Zt() && clearInterval(k);
      }, 100);
      return () => clearInterval(k);
    }
  }, [l]), R(() => (s(!0), N.current && clearTimeout(N.current), N.current = setTimeout(() => {
    o(e), s(!1);
  }, r), () => {
    N.current && clearTimeout(N.current);
  }), [e, r]), {
    results: $(() => {
      if (!n.trim())
        return u.slice(0, 500);
      const k = n.toLowerCase();
      return u.filter((y) => {
        const I = y.indexOf(":");
        return (I !== -1 ? y.slice(I + 1) : y).toLowerCase().includes(k);
      });
    }, [n, u]),
    isSearching: a,
    isLoading: l,
    loadProgress: d,
    totalCount: u.length
  };
}
const Xt = 20, be = 40, xe = 280, de = 6;
function hr({
  value: e,
  onChange: r,
  placeholder: n = "Search icons...",
  disabled: o = !1
}) {
  const [a, s] = T(e || ""), [l, m] = T(!1), u = D(null);
  R(() => {
    s(e || "");
  }, [e]);
  const c = a.includes(":") ? a.split(":")[1] || "" : a, { results: d } = qt(c), p = d.includes(a), N = l && a.length > 0 && !p && d.length > 0, C = (x) => {
    const h = x.target.value;
    s(h), r(h);
  }, k = W((x) => {
    s(x), r(x), m(!1);
  }, [r]), [y, I] = T(300);
  R(() => {
    u.current && I(u.current.offsetWidth);
  }, [N]);
  const S = Math.floor(y / de), w = Math.ceil(d.length / de), b = W(({ columnIndex: x, rowIndex: h, style: g }) => {
    const O = h * de + x;
    if (O >= d.length)
      return /* @__PURE__ */ t("div", { style: g });
    const P = d[O];
    return /* @__PURE__ */ t("div", { style: g, className: "p-0.5", children: /* @__PURE__ */ t(ke, { delayDuration: 300, children: /* @__PURE__ */ i(Ie, { children: [
      /* @__PURE__ */ t(Se, { asChild: !0, children: /* @__PURE__ */ t(
        "button",
        {
          onMouseDown: (V) => {
            V.preventDefault(), k(P);
          },
          className: v(
            "w-full h-full flex items-center justify-center transition-all",
            "bg-muted/30 hover:bg-muted border border-transparent hover:border-border"
          ),
          children: /* @__PURE__ */ t(Be, { name: P, size: Xt, className: "text-foreground" })
        }
      ) }),
      /* @__PURE__ */ i(ze, { side: "bottom", className: "text-xs max-w-[200px]", children: [
        /* @__PURE__ */ t("div", { className: "font-medium truncate", children: pt(P) }),
        /* @__PURE__ */ t("div", { className: "text-muted-foreground text-xs", children: gt(P) })
      ] })
    ] }) }) });
  }, [d, k]);
  return /* @__PURE__ */ t("div", { ref: u, children: /* @__PURE__ */ i("div", { className: "relative", children: [
    p && /* @__PURE__ */ t("div", { className: "absolute left-2 top-1/2 -translate-y-1/2 z-10", children: /* @__PURE__ */ t(Be, { name: a, size: 14, className: "text-foreground" }) }),
    /* @__PURE__ */ t(
      pe,
      {
        value: a,
        onChange: C,
        onFocus: () => m(!0),
        onBlur: () => setTimeout(() => m(!1), 150),
        placeholder: n,
        disabled: o,
        className: v(
          "h-8 text-xs font-mono bg-muted/30 border-transparent hover:border-border focus:border-border focus:bg-background transition-colors",
          p ? "pl-7 text-foreground" : "text-muted-foreground"
        )
      }
    ),
    N && /* @__PURE__ */ i("div", { className: "absolute left-0 right-0 top-full mt-1 z-50 rounded-md border border-border bg-popover shadow-lg overflow-hidden", children: [
      /* @__PURE__ */ i("div", { className: "px-2 py-1 text-xs text-muted-foreground border-b border-border bg-muted/30", children: [
        d.length.toLocaleString(),
        " matches"
      ] }),
      /* @__PURE__ */ i(
        "div",
        {
          className: "icon-picker-grid",
          style: { height: Math.min(xe, w * be) },
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
              Ht,
              {
                columnCount: de,
                columnWidth: S,
                defaultHeight: xe,
                defaultWidth: y,
                rowCount: w,
                rowHeight: be,
                cellComponent: b,
                cellProps: {},
                style: {
                  height: Math.min(xe, w * be),
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
function pr({
  value: e,
  onChange: r,
  options: n,
  variant: o,
  buttonDisplay: a = "text",
  maxInline: s,
  placeholder: l = "Select...",
  dropdownTitle: m,
  iconTrigger: u,
  disabled: c = !1,
  borderless: d = !1
}) {
  const p = Array.isArray(e) ? e : [], [N, C] = T(!1), [k, y] = T(!1), I = W((f) => p.includes(f), [p]), S = W(
    (f) => {
      c || (p.includes(f) ? r(p.filter((z) => z !== f)) : r([...p, f]));
    },
    [p, r, c]
  ), w = W(
    (f, z) => {
      z.stopPropagation(), !c && r(p.filter((j) => j !== f));
    },
    [p, r, c]
  ), b = W(() => {
    c || r([]);
  }, [r, c]), x = o ?? (n.length > 5 ? "dropdown" : "buttons"), h = n.filter((f) => p.includes(f.value));
  if (x === "dropdown")
    return u ? /* @__PURE__ */ i(Y, { open: N, onOpenChange: C, children: [
      /* @__PURE__ */ t(ee, { asChild: !0, children: /* @__PURE__ */ i(
        "button",
        {
          disabled: c,
          className: v(
            "inline-flex items-center justify-center gap-1 h-8 px-2",
            "bg-muted/30 border border-transparent hover:border-border hover:bg-muted/50 transition-colors",
            c && "opacity-50 cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ t(u, { className: "h-4 w-4" }),
            h.length > 0 && /* @__PURE__ */ t("span", { className: "min-w-[18px] h-[18px] rounded-full bg-primary text-primary-foreground text-[10px] font-medium flex items-center justify-center", children: h.length }),
            /* @__PURE__ */ t(G, { className: "h-3 w-3 opacity-50" })
          ]
        }
      ) }),
      /* @__PURE__ */ i(te, { align: "start", className: "w-[220px] p-0 gap-0", sideOffset: 4, children: [
        /* @__PURE__ */ i("div", { className: "px-3 py-2 border-b border-border flex items-center justify-between", children: [
          /* @__PURE__ */ t("span", { className: "text-xs font-medium text-muted-foreground", children: m || `${h.length} selected` }),
          h.length > 0 && /* @__PURE__ */ t(
            "button",
            {
              onClick: b,
              className: "text-[10px] text-muted-foreground hover:text-foreground transition-colors",
              children: "Clear"
            }
          )
        ] }),
        /* @__PURE__ */ t("div", { className: "max-h-[200px] overflow-y-auto p-1", children: n.map((f) => {
          const z = f.icon, j = I(f.value);
          return /* @__PURE__ */ i(
            "button",
            {
              onClick: () => S(f.value),
              className: v(
                "w-full flex items-center gap-2 px-2 py-1.5 text-xs transition-colors",
                j ? "bg-primary/10 text-foreground" : "hover:bg-muted text-muted-foreground hover:text-foreground"
              ),
              children: [
                /* @__PURE__ */ t("div", { className: v(
                  "h-4 w-4 rounded border flex items-center justify-center shrink-0 transition-colors",
                  j ? "bg-primary border-primary" : "border-border bg-background"
                ), children: j && /* @__PURE__ */ t(Z, { className: "h-3 w-3 text-primary-foreground" }) }),
                z && /* @__PURE__ */ t(z, { className: "h-3.5 w-3.5 shrink-0" }),
                /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", children: f.label })
              ]
            },
            f.value
          );
        }) })
      ] })
    ] }) : /* @__PURE__ */ i(Y, { open: N, onOpenChange: C, children: [
      /* @__PURE__ */ t(ee, { asChild: !0, children: /* @__PURE__ */ i(
        "button",
        {
          disabled: c,
          className: v(
            "inline-flex items-center justify-between gap-2 h-8 px-3 text-xs w-full min-w-[180px]",
            "bg-muted/30 border border-transparent hover:border-border transition-colors",
            c && "opacity-50 cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5 flex-1 overflow-hidden", children: h.length > 0 ? /* @__PURE__ */ i(ue, { children: [
              h.slice(0, 2).map((f) => /* @__PURE__ */ i(
                Re,
                {
                  variant: "secondary",
                  className: "h-5 px-1.5 text-[10px] font-normal gap-1 shrink-0",
                  children: [
                    f.icon && /* @__PURE__ */ t(f.icon, { className: "h-3 w-3" }),
                    /* @__PURE__ */ t("span", { className: "truncate max-w-[50px]", children: f.label })
                  ]
                },
                f.value
              )),
              h.length > 2 && /* @__PURE__ */ i("span", { className: "text-muted-foreground text-[10px]", children: [
                "+",
                h.length - 2
              ] })
            ] }) : /* @__PURE__ */ t("span", { className: "text-muted-foreground", children: l }) }),
            /* @__PURE__ */ t(G, { className: "h-3.5 w-3.5 opacity-50 shrink-0" })
          ]
        }
      ) }),
      /* @__PURE__ */ i(te, { align: "start", className: "w-[220px] p-0 gap-0", sideOffset: 4, children: [
        (m || h.length > 0) && /* @__PURE__ */ i("div", { className: "px-3 py-2 border-b border-border flex items-center justify-between", children: [
          /* @__PURE__ */ t("span", { className: "text-xs font-medium text-muted-foreground", children: m || `${h.length} selected` }),
          h.length > 0 && /* @__PURE__ */ t(
            "button",
            {
              onClick: b,
              className: "text-[10px] text-muted-foreground hover:text-foreground transition-colors",
              children: "Clear all"
            }
          )
        ] }),
        /* @__PURE__ */ t("div", { className: "max-h-[200px] overflow-y-auto p-1", children: n.map((f) => {
          const z = f.icon, j = I(f.value);
          return /* @__PURE__ */ i(
            "button",
            {
              onClick: () => S(f.value),
              className: v(
                "w-full flex items-center gap-2 px-2 py-1.5 text-xs transition-colors",
                j ? "bg-primary/10 text-foreground" : "hover:bg-muted text-muted-foreground hover:text-foreground"
              ),
              children: [
                /* @__PURE__ */ t("div", { className: v(
                  "h-4 w-4 rounded border flex items-center justify-center shrink-0 transition-colors",
                  j ? "bg-primary border-primary" : "border-border bg-background"
                ), children: j && /* @__PURE__ */ t(Z, { className: "h-3 w-3 text-primary-foreground" }) }),
                z && /* @__PURE__ */ t(z, { className: "h-3.5 w-3.5 shrink-0" }),
                /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", children: f.label })
              ]
            },
            f.value
          );
        }) }),
        h.length > 0 && /* @__PURE__ */ t("div", { className: "border-t border-border p-2", children: /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-1", children: h.map((f) => /* @__PURE__ */ i(
          Re,
          {
            variant: "secondary",
            className: "h-5 px-1.5 text-[10px] font-normal gap-1 pr-0.5",
            children: [
              f.icon && /* @__PURE__ */ t(f.icon, { className: "h-3 w-3" }),
              /* @__PURE__ */ t("span", { className: "truncate max-w-[60px]", children: f.label }),
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: (z) => w(f.value, z),
                  className: "ml-0.5 p-0.5 rounded hover:bg-muted-foreground/20 transition-colors",
                  children: /* @__PURE__ */ t(Ue, { className: "h-3 w-3" })
                }
              )
            ]
          },
          f.value
        )) }) })
      ] })
    ] });
  const g = s !== void 0 && n.length > s, O = g ? n.slice(0, s - 1) : n, P = g ? n.slice(s - 1) : [], V = P.filter((f) => p.includes(f.value)), E = (f, z, j) => {
    const L = I(f.value), K = f.icon, Q = K && (a === "icon" || a === "both"), se = a === "text" || a === "both", q = /* @__PURE__ */ i(
      "button",
      {
        onClick: () => S(f.value),
        disabled: c,
        className: v(
          "flex items-center justify-center gap-1.5 font-medium transition-all",
          "h-8 px-2.5 text-xs",
          z && "rounded-l-md",
          j && !g && "rounded-r-md",
          !z && !j && "rounded-none",
          L ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
          c && "opacity-50 cursor-not-allowed"
        ),
        children: [
          Q && /* @__PURE__ */ t(K, { className: "h-3.5 w-3.5" }),
          se && /* @__PURE__ */ t("span", { className: "truncate", children: f.label })
        ]
      },
      f.value
    ), A = f.hoverText || (a === "icon" ? f.label : void 0);
    return A && !c ? /* @__PURE__ */ t(ke, { delayDuration: 200, children: /* @__PURE__ */ i(Ie, { children: [
      /* @__PURE__ */ t(Se, { asChild: !0, children: q }),
      /* @__PURE__ */ t(ze, { side: "bottom", className: "text-xs", children: A })
    ] }) }, f.value) : q;
  };
  return /* @__PURE__ */ i("div", { className: v(
    "inline-flex",
    !d && "border border-border/40 bg-muted/30 p-0.5 shadow-sm",
    c && "opacity-50"
  ), children: [
    O.map(
      (f, z) => E(f, z === 0, z === O.length - 1)
    ),
    g && /* @__PURE__ */ i(Y, { open: k, onOpenChange: y, children: [
      /* @__PURE__ */ t(ee, { asChild: !0, children: /* @__PURE__ */ i(
        "button",
        {
          disabled: c,
          className: v(
            "flex items-center justify-center gap-1 font-medium transition-all rounded-r-md",
            "h-8 px-2.5 text-xs",
            V.length > 0 ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
            c && "cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ t("span", { children: V.length > 0 ? `+${V.length}` : "More" }),
            /* @__PURE__ */ t(G, { className: "h-3 w-3" })
          ]
        }
      ) }),
      /* @__PURE__ */ t(te, { align: "end", className: "w-44 p-1 gap-0", children: P.map((f) => {
        const z = f.icon, j = I(f.value);
        return /* @__PURE__ */ i(
          "button",
          {
            onClick: () => S(f.value),
            className: v(
              "w-full flex items-center gap-2 px-2 py-1 text-xs rounded-sm transition-colors",
              j ? "bg-accent text-accent-foreground" : "hover:bg-muted"
            ),
            children: [
              z && /* @__PURE__ */ t(z, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", children: f.label }),
              j && /* @__PURE__ */ t(Z, { className: "h-3.5 w-3.5" })
            ]
          },
          f.value
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
  disabled: s = !1,
  className: l,
  variant: m = "stepper"
}) {
  if (m === "slider")
    return /* @__PURE__ */ i("div", { className: v("flex items-center gap-3 flex-1", l), children: [
      /* @__PURE__ */ t(
        Ye,
        {
          value: [e],
          onValueChange: (p) => r(p[0]),
          min: n,
          max: o,
          step: a,
          disabled: s,
          className: "flex-1"
        }
      ),
      /* @__PURE__ */ t("span", { className: "text-xs font-mono text-muted-foreground w-8 text-right", children: e })
    ] });
  const u = () => {
    if (s) return;
    const p = e + a;
    (o === void 0 || p <= o) && r(p);
  }, c = () => {
    if (s) return;
    const p = e - a;
    (n === void 0 || p >= n) && r(p);
  }, d = (p) => {
    const N = parseInt(p.target.value, 10);
    if (!isNaN(N)) {
      let C = N;
      n !== void 0 && (C = Math.max(n, C)), o !== void 0 && (C = Math.min(o, C)), r(C);
    }
  };
  return /* @__PURE__ */ i("div", { className: v("flex items-center gap-0.5 flex-1", l), children: [
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        onClick: c,
        disabled: s || n !== void 0 && e <= n,
        className: "h-8 w-8 flex items-center justify-center bg-muted/30 hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors",
        children: /* @__PURE__ */ t(ut, { className: "h-3 w-3" })
      }
    ),
    /* @__PURE__ */ t(
      pe,
      {
        type: "number",
        value: e,
        min: n,
        max: o,
        step: a,
        disabled: s,
        onChange: d,
        className: "h-8 text-center text-xs bg-muted/30 border-transparent hover:border-border focus:border-border focus:bg-background transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      }
    ),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        onClick: u,
        disabled: s || o !== void 0 && e >= o,
        className: "h-8 w-8 flex items-center justify-center bg-muted/30 hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors",
        children: /* @__PURE__ */ t(mt, { className: "h-3 w-3" })
      }
    )
  ] });
}
function Yt({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    "textarea",
    {
      "data-slot": "textarea",
      className: v(
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
  autoGrow: s = !0,
  className: l,
  ...m
}) {
  const [u, c] = T(!1), d = D(null), p = er(e), N = p ? n.filter((w) => w.toLowerCase().includes(p.toLowerCase())) : n, C = (w) => {
    const b = w.target.value;
    r(b), n.length > 0 && c(!0);
  }, k = (w) => {
    const b = e.split(/\s+/);
    b[b.length - 1] = w, r(b.join(" ")), c(!1), d.current?.focus();
  }, y = (w) => {
    n.length > 0 && c(!0), m.onFocus?.(w);
  }, I = (w) => {
    setTimeout(() => c(!1), 150), m.onBlur?.(w);
  }, S = n.length > 0;
  return /* @__PURE__ */ i("div", { className: "relative flex-1", children: [
    /* @__PURE__ */ i("div", { className: "relative", children: [
      /* @__PURE__ */ t(
        Yt,
        {
          ref: d,
          value: e,
          onChange: C,
          onFocus: y,
          onBlur: I,
          className: v(
            "min-h-[60px] text-xs bg-muted/30 border-transparent hover:border-border focus:border-border focus:bg-background transition-colors placeholder:text-muted-foreground/50 scrollbar-none",
            S && "pr-6",
            o && "focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-border",
            a ? "resize-none" : "resize-y",
            !s && "field-sizing-fixed",
            l
          ),
          ...m
        }
      ),
      S && /* @__PURE__ */ t(G, { className: "absolute right-2 top-3 h-3 w-3 text-muted-foreground/50" })
    ] }),
    u && N.length > 0 && /* @__PURE__ */ t("div", { className: "absolute top-full left-0 right-0 z-50 mt-1 bg-popover border border-border rounded-md shadow-md py-1", children: /* @__PURE__ */ t("div", { className: "max-h-40 overflow-auto", children: N.map((w) => /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: v(
          "w-full px-2 py-1.5 text-xs text-left hover:bg-accent hover:text-accent-foreground",
          w === e && "bg-accent/50"
        ),
        onMouseDown: (b) => b.preventDefault(),
        onClick: () => k(w),
        title: w,
        children: /* @__PURE__ */ t("span", { className: "block truncate", children: w })
      },
      w
    )) }) })
  ] });
}
function xr({
  value: e,
  onChange: r,
  label: n = "Edit Python",
  disabled: o = !1,
  suggestions: a = []
}) {
  const [s, l] = T(!1), [m, u] = T(""), c = D(null), d = typeof e == "string" ? e : "";
  R(() => {
    s && u(d);
  }, [s, d]), R(() => () => {
    c.current?.dispose();
  }, []);
  const p = (y, I) => {
    c.current?.dispose(), a.length !== 0 && (c.current = I.languages.registerCompletionItemProvider("python", {
      provideCompletionItems: (S, w) => {
        const b = S.getWordUntilPosition(w), x = {
          startLineNumber: w.lineNumber,
          endLineNumber: w.lineNumber,
          startColumn: b.startColumn,
          endColumn: b.endColumn
        };
        return {
          suggestions: a.map((h, g) => ({
            label: h,
            kind: I.languages.CompletionItemKind.Text,
            insertText: h,
            range: x,
            sortText: String(g).padStart(5, "0")
          }))
        };
      }
    }));
  }, N = (y) => {
    u(y || "");
  }, C = () => {
    r(m), l(!1);
  }, k = d.split(`
`).length;
  return /* @__PURE__ */ i(Je, { open: s, onOpenChange: (y) => !o && l(y), children: [
    /* @__PURE__ */ t(Ke, { asChild: !0, children: /* @__PURE__ */ i(
      "button",
      {
        disabled: o,
        className: "flex-1 flex items-center justify-between gap-2 h-8 px-2 text-xs bg-muted/30 border border-transparent hover:border-border hover:bg-muted/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-transparent disabled:hover:bg-muted/30",
        children: [
          /* @__PURE__ */ i("span", { className: "flex items-center gap-1.5 text-muted-foreground", children: [
            /* @__PURE__ */ t(Le, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ t("span", { children: n })
          ] }),
          /* @__PURE__ */ i("span", { className: "text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground", children: [
            k,
            " lines"
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ i(
      Qe,
      {
        className: "p-0 gap-0 flex flex-col overflow-hidden",
        style: {
          width: "calc(100vw - 120px)",
          maxWidth: "800px",
          height: "calc(100vh - 120px)",
          maxHeight: "600px"
        },
        children: [
          /* @__PURE__ */ t(Ze, { className: "px-4 py-3 flex-shrink-0 bg-muted/50 border-b border-border", children: /* @__PURE__ */ i(qe, { className: "flex items-center gap-2 text-sm font-medium", children: [
            /* @__PURE__ */ t(Le, { className: "h-4 w-4 text-primary" }),
            n
          ] }) }),
          /* @__PURE__ */ t("div", { className: "flex-1 min-h-0 bg-background", children: /* @__PURE__ */ t(
            Ge,
            {
              height: "100%",
              defaultLanguage: "python",
              value: m,
              onChange: N,
              onMount: p,
              theme: "vs-dark",
              options: {
                minimap: { enabled: !1 },
                fontSize: 13,
                fontFamily: "JetBrains Mono, Fira Code, Consolas, monospace",
                lineNumbers: "on",
                scrollBeyondLastLine: !1,
                wordWrap: "on",
                tabSize: 4,
                automaticLayout: !0,
                padding: { top: 16, bottom: 16 },
                scrollbar: {
                  horizontal: "hidden",
                  verticalScrollbarSize: 8
                },
                renderLineHighlight: "line",
                cursorBlinking: "smooth",
                smoothScrolling: !0,
                quickSuggestions: {
                  strings: !0,
                  other: !0,
                  comments: !1
                },
                suggestOnTriggerCharacters: !0
              }
            }
          ) }),
          /* @__PURE__ */ i("div", { className: "px-4 py-3 flex-shrink-0 bg-muted/50 border-t border-border flex items-center justify-between", children: [
            /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ t("div", { className: "h-2 w-2 rounded-full bg-primary" }),
              /* @__PURE__ */ t("span", { className: "text-xs text-muted-foreground", children: "Python" })
            ] }),
            /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ t(
                fe,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => l(!1),
                  className: "h-7 px-3 text-xs",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ i(
                fe,
                {
                  size: "sm",
                  onClick: C,
                  className: "h-7 px-4 text-xs",
                  children: [
                    /* @__PURE__ */ t(Z, { className: "h-3.5 w-3.5 mr-1.5" }),
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
function Ae(e) {
  const r = e.trim();
  if (!r.startsWith("[") || !r.endsWith("]")) return null;
  try {
    const n = JSON.parse(r);
    return !Array.isArray(n) || !n.every(
      (a) => typeof a == "string" || typeof a == "number"
    ) ? null : n;
  } catch {
    return null;
  }
}
function vr({
  value: e,
  onChange: r,
  placeholder: n = "Type and press Enter...",
  disabled: o = !1,
  className: a
}) {
  const [s, l] = T(""), [m, u] = T(!1), [c, d] = T(""), p = D(null), N = (b) => {
    r([...e, b]), l(""), u(!1), d("");
  }, C = (b) => {
    r([...e, ...b]), l(""), u(!1), d("");
  }, k = (b) => {
    o || r(e.filter((x, h) => h !== b));
  }, y = (b) => {
    const x = b.clipboardData.getData("text"), h = Ae(x);
    h && h.length > 0 && (b.preventDefault(), C(h));
  }, I = (b) => {
    const x = s.trim();
    if (b.key === "Enter" && x) {
      b.preventDefault();
      const h = Ae(x);
      if (h && h.length > 0) {
        C(h);
        return;
      }
      /^\d+$/.test(x) ? (d(x), u(!0), l("")) : N(x);
    }
    b.key === "Backspace" && !s && e.length > 0 && k(e.length - 1), b.key === "Escape" && m && (u(!1), d(""));
  }, S = () => {
    N(c);
  }, w = () => {
    N(parseInt(c, 10));
  };
  return /* @__PURE__ */ i("div", { className: v("relative flex-1", a), children: [
    /* @__PURE__ */ i(
      "div",
      {
        className: v(
          "flex flex-wrap items-center gap-1.5 min-h-8 px-2 py-1",
          "bg-muted/30 border border-transparent transition-colors",
          "focus-within:border-border",
          !o && "hover:border-border",
          o && "opacity-50 cursor-not-allowed"
        ),
        onClick: () => p.current?.focus(),
        children: [
          e.map((b, x) => /* @__PURE__ */ i(
            "span",
            {
              className: v(
                "inline-flex items-center gap-1 h-5 px-1.5 rounded text-xs font-mono",
                typeof b == "number" ? "bg-primary/20 text-primary" : "bg-accent text-accent-foreground"
              ),
              children: [
                typeof b == "number" ? /* @__PURE__ */ t(we, { className: "h-2.5 w-2.5" }) : /* @__PURE__ */ t(Ne, { className: "h-2.5 w-2.5" }),
                String(b),
                !o && /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    onClick: (h) => {
                      h.stopPropagation(), k(x);
                    },
                    className: "opacity-50 hover:opacity-100 hover:text-destructive",
                    children: /* @__PURE__ */ t(Ue, { className: "h-2.5 w-2.5" })
                  }
                )
              ]
            },
            x
          )),
          !o && /* @__PURE__ */ t(
            "input",
            {
              ref: p,
              type: "text",
              value: s,
              onChange: (b) => l(b.target.value),
              onKeyDown: I,
              onPaste: y,
              placeholder: e.length === 0 ? n : "",
              className: "flex-1 min-w-[80px] h-5 bg-transparent text-xs outline-none placeholder:text-muted-foreground/50"
            }
          )
        ]
      }
    ),
    m && /* @__PURE__ */ i("div", { className: "absolute left-0 top-full mt-1 z-50 bg-popover border border-border rounded-md shadow-lg p-1 min-w-[180px]", children: [
      /* @__PURE__ */ i("div", { className: "px-2 py-1 text-[10px] text-muted-foreground border-b border-border mb-1", children: [
        '"',
        c,
        '" — choose type:'
      ] }),
      /* @__PURE__ */ i(
        "button",
        {
          type: "button",
          onClick: S,
          className: "w-full flex items-center gap-2 px-2 py-1.5 text-xs rounded hover:bg-accent text-left",
          children: [
            /* @__PURE__ */ t(Ne, { className: "h-3.5 w-3.5 text-muted-foreground" }),
            /* @__PURE__ */ i("code", { className: "text-foreground", children: [
              '"',
              c,
              '"'
            ] }),
            /* @__PURE__ */ t("span", { className: "text-muted-foreground text-[10px] ml-auto", children: "string" })
          ]
        }
      ),
      /* @__PURE__ */ i(
        "button",
        {
          type: "button",
          onClick: w,
          className: "w-full flex items-center gap-2 px-2 py-1.5 text-xs rounded hover:bg-accent text-left",
          children: [
            /* @__PURE__ */ t(we, { className: "h-3.5 w-3.5 text-primary" }),
            /* @__PURE__ */ i("code", { className: "text-primary", children: [
              "[",
              c,
              "]"
            ] }),
            /* @__PURE__ */ t("span", { className: "text-muted-foreground text-[10px] ml-auto", children: "index" })
          ]
        }
      )
    ] })
  ] });
}
function tr(e) {
  const r = e.trim();
  if (!r) return null;
  try {
    const n = r.match(/^https?:\/\//) ? r : `https://${r}`, a = new URL(n).hostname;
    return a.includes(".") ? a : null;
  } catch {
    return null;
  }
}
function wr({
  value: e,
  onChange: r,
  faviconSize: n = 16,
  className: o,
  ...a
}) {
  const s = $(() => tr(e), [e]), l = s ? `https://www.google.com/s2/favicons?domain=${s}&sz=${n}` : null;
  return /* @__PURE__ */ i("div", { className: v("relative flex items-center flex-1", o), children: [
    /* @__PURE__ */ t("div", { className: "absolute left-2 flex items-center justify-center w-4 h-4 pointer-events-none z-10", children: l ? /* @__PURE__ */ t(
      "img",
      {
        src: l,
        alt: "",
        width: n,
        height: n,
        className: "w-4 h-4 rounded-sm",
        onError: (m) => {
          m.target.style.display = "none";
        }
      }
    ) : /* @__PURE__ */ t(ft, { className: "w-3.5 h-3.5 text-muted-foreground/50" }) }),
    /* @__PURE__ */ t(
      Xe,
      {
        value: e,
        onChange: r,
        className: "pl-7",
        ...a
      }
    )
  ] });
}
export {
  wt as BooleanInput,
  mr as DynamicInput,
  fr as EnumInput,
  hr as IconInput,
  vr as JsonPathInput,
  pr as MultiEnumSelect,
  gr as NumberInput,
  yt as NumericalInput,
  Ct as ObjectInput,
  xr as PythonInput,
  br as TextAreaInput,
  Xe as TextInput,
  wr as UrlInput
};
