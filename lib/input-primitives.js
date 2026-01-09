import { jsx as t, jsxs as l, Fragment as me } from "react/jsx-runtime";
import * as $e from "react";
import { useState as E, useRef as W, useEffect as M, useMemo as U, useCallback as D, memo as it, useImperativeHandle as st, createElement as Be, useLayoutEffect as ze } from "react";
import { RadioGroup as ye, Checkbox as Ve, Switch as je, Slider as ce, Tooltip as ne, Select as F } from "radix-ui";
import { c as d } from "./utils-B6yFEsav.js";
import { CircleIcon as lt, CheckIcon as Ge, ChevronDown as Q, Code2 as Le, Check as Y, Braces as ct, ToggleLeft as dt, Hash as Se, Type as Ce, CircleSlash as ut, ChevronDownIcon as _e, ChevronUpIcon as ft, X as Je, Minus as mt, Plus as ht, FileCode2 as Re, Globe as pt } from "lucide-react";
import { P as A, a as ge, b as H, c as re } from "./popover-BC-4GKqp.js";
import Ke from "@monaco-editor/react";
import { B as he } from "./button-DHQhRgTM.js";
import { D as Qe, a as Ze, b as qe, c as Xe, d as Ye } from "./dialog-CDPimJCA.js";
import { f as gt, A as Me, g as bt, a as xt, B as Fe } from "./badge-B1vpNSNG.js";
function vt({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ t(
    ye.Root,
    {
      "data-slot": "radio-group",
      className: d("grid gap-2 w-full", e),
      ...n
    }
  );
}
function De({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ t(
    ye.Item,
    {
      "data-slot": "radio-group-item",
      className: d(
        "border-input text-primary dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 data-checked:bg-primary data-checked:border-primary flex size-4 rounded-full focus-visible:ring-1 aria-invalid:ring-1 group/radio-group-item peer relative aspect-square shrink-0 border outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...n,
      children: /* @__PURE__ */ t(
        ye.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "group-aria-invalid/radio-group-item:text-destructive flex size-4 items-center justify-center text-white",
          children: /* @__PURE__ */ t(lt, { className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-current" })
        }
      )
    }
  );
}
function wt({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ t(
    Ve.Root,
    {
      "data-slot": "checkbox",
      className: d(
        "border-input dark:bg-input/30 data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary data-checked:border-primary aria-invalid:aria-checked:border-primary aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 flex size-4 items-center justify-center rounded-none border transition-colors group-has-disabled/field:opacity-50 focus-visible:ring-1 aria-invalid:ring-1 peer relative shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...n,
      children: /* @__PURE__ */ t(
        Ve.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "[&>svg]:size-3.5 grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ t(
            Ge,
            {}
          )
        }
      )
    }
  );
}
function Nt({
  className: e,
  size: n = "default",
  ...o
}) {
  return /* @__PURE__ */ t(
    je.Root,
    {
      "data-slot": "switch",
      "data-size": n,
      className: d(
        "data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 dark:data-unchecked:bg-input/80 shrink-0 rounded-full border border-transparent focus-visible:ring-1 aria-invalid:ring-1 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] peer group/switch relative inline-flex items-center transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 data-disabled:cursor-not-allowed data-disabled:opacity-50",
        e
      ),
      ...o,
      children: /* @__PURE__ */ t(
        je.Thumb,
        {
          "data-slot": "switch-thumb",
          className: "bg-background dark:data-unchecked:bg-foreground dark:data-checked:bg-primary-foreground rounded-full group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 pointer-events-none block ring-0 transition-transform"
        }
      )
    }
  );
}
function yt({
  value: e,
  onChange: n,
  className: o,
  variant: a = "checkbox",
  ...i
}) {
  const s = $e.useId();
  return a === "switch" ? /* @__PURE__ */ t(
    Nt,
    {
      checked: e,
      onCheckedChange: (u) => n(!!u),
      className: o,
      ...i
    }
  ) : a === "radio" ? /* @__PURE__ */ l(
    vt,
    {
      value: e ? "true" : "false",
      onValueChange: (u) => n(u === "true"),
      className: d("flex flex-row gap-4", o),
      ...i,
      children: [
        /* @__PURE__ */ l("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t(De, { value: "true", id: `${s}-true` }),
          /* @__PURE__ */ t("label", { htmlFor: `${s}-true`, className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: "True" })
        ] }),
        /* @__PURE__ */ l("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t(De, { value: "false", id: `${s}-false` }),
          /* @__PURE__ */ t("label", { htmlFor: `${s}-false`, className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: "False" })
        ] })
      ]
    }
  ) : /* @__PURE__ */ t(
    wt,
    {
      checked: e,
      onCheckedChange: (u) => n(!!u),
      className: d("h-3.5 w-3.5", o),
      ...i
    }
  );
}
function be({ className: e, type: n, ...o }) {
  return /* @__PURE__ */ t(
    "input",
    {
      type: n,
      "data-slot": "input",
      className: d(
        "dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 rounded-none border bg-transparent px-2.5 py-1 text-xs transition-colors file:h-6 file:text-xs file:font-medium focus-visible:ring-1 aria-invalid:ring-1 md:text-xs file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...o
    }
  );
}
const r = {
  // ============================================
  // Base Input Appearance
  // ============================================
  /** Standard height for all inline inputs (28px) */
  height: "h-7",
  /** Background color - matches Shadcn Input for consistency */
  bg: "bg-transparent dark:bg-input/30",
  /** Border behavior */
  border: "border border-transparent",
  borderHover: "hover:border-border",
  borderFocus: "focus:border-border",
  borderFocusWithin: "focus-within:border-border",
  // ============================================
  // Text Styles
  // ============================================
  /** Standard text size */
  text: "text-xs",
  /** Placeholder text */
  placeholder: "placeholder:text-muted-foreground/50",
  // ============================================
  // States
  // ============================================
  /** Disabled state */
  disabled: "disabled:opacity-50 disabled:cursor-not-allowed",
  disabledContainer: "opacity-50 cursor-not-allowed",
  /** Transition */
  transition: "transition-colors",
  // ============================================
  // Icons
  // ============================================
  /** Standard icon size (14px) */
  iconSize: "h-3.5 w-3.5",
  /** Small icon size (12px) */
  iconSmall: "h-3 w-3",
  /** Chevron (dropdown indicator) */
  chevron: "h-3 w-3 opacity-50",
  // ============================================
  // Dropdown/Popover Content
  // ============================================
  /** Dropdown container padding */
  dropdownPadding: "p-1",
  /** Dropdown gap override (removes default popover gap) */
  dropdownGap: "gap-0",
  /** Dropdown item base styles */
  dropdownItem: "w-full flex items-center gap-2 px-2 py-1.5 text-xs transition-colors",
  /** Dropdown selected state */
  dropdownSelected: "bg-accent text-accent-foreground",
  /** Dropdown unselected state */
  dropdownUnselected: "hover:bg-muted text-muted-foreground hover:text-foreground",
  /** Dropdown header */
  dropdownHeader: "px-2 py-1.5 text-xs font-medium text-muted-foreground border-b border-border",
  // ============================================
  // Button Group (EnumInput, MultiEnumSelect buttons variant)
  // ============================================
  /** Button group container */
  buttonGroupContainer: "inline-flex h-7 items-center bg-transparent dark:bg-input/30 border border-transparent hover:border-border",
  /** Individual button in group */
  buttonGroupItem: "flex items-center justify-center gap-1.5 font-medium transition-colors h-full px-2.5 text-xs",
  /** Button selected state */
  buttonSelected: "bg-accent text-accent-foreground",
  /** Button unselected state */
  buttonUnselected: "text-muted-foreground hover:text-foreground hover:bg-muted/50",
  // ============================================
  // Trigger Buttons (ObjectInput, PythonInput, etc.)
  // ============================================
  /** Full-width trigger button */
  triggerButton: "w-full flex items-center justify-between gap-2 h-7 px-2 text-xs bg-transparent dark:bg-input/30 border border-transparent hover:border-border hover:bg-muted/50 focus:border-border transition-colors",
  /** Trigger button disabled overrides */
  triggerButtonDisabled: "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-transparent disabled:hover:bg-transparent dark:disabled:hover:bg-input/30",
  /** Compact icon trigger (for iconTrigger prop) */
  iconTrigger: "inline-flex items-center justify-center gap-1 h-7 px-2 bg-transparent dark:bg-input/30 border border-transparent hover:border-border hover:bg-muted/50 focus:border-border transition-colors"
};
function St(e) {
  const n = e.split(/\s+/);
  return n[n.length - 1] || "";
}
function et({
  value: e,
  onChange: n,
  suggestions: o = [],
  noRing: a = !1,
  frozen: i = !1,
  className: s,
  ...u
}) {
  const [g, f] = E(!1), [c, m] = E(!i), p = W(null), y = St(e), S = y ? o.filter((h) => h.toLowerCase().includes(y.toLowerCase())) : o, z = (h) => {
    const v = h.target.value;
    n(v), o.length > 0 && f(!0);
  }, C = (h) => {
    const v = e.split(/\s+/);
    v[v.length - 1] = h, n(v.join(" ")), f(!1), p.current?.focus();
  }, I = (h) => {
    o.length > 0 && f(!0), u.onFocus?.(h);
  }, k = (h) => {
    setTimeout(() => f(!1), 150), u.onBlur?.(h);
  }, N = () => {
    i && !c && (m(!0), setTimeout(() => p.current?.focus(), 0));
  }, x = o.length > 0, w = i && !c;
  return /* @__PURE__ */ l(A, { open: g && S.length > 0, onOpenChange: f, modal: !1, children: [
    /* @__PURE__ */ t(ge, { asChild: !0, children: /* @__PURE__ */ t("div", { className: "relative flex-1", children: /* @__PURE__ */ l("div", { className: "relative", children: [
      w && /* @__PURE__ */ t(
        "div",
        {
          onClick: N,
          className: d(
            "absolute inset-0 z-10 cursor-pointer",
            "bg-muted/50 border border-border/50",
            "flex items-center justify-center",
            "hover:bg-accent/50 hover:border-border transition-colors duration-150"
          ),
          children: /* @__PURE__ */ t("span", { className: "text-[10px] text-muted-foreground" })
        }
      ),
      /* @__PURE__ */ t(
        be,
        {
          ref: p,
          value: e,
          onChange: z,
          onFocus: I,
          onBlur: k,
          disabled: w || u.disabled,
          className: d(
            r.height,
            r.text,
            r.bg,
            "border-transparent",
            r.borderHover,
            r.borderFocus,
            "focus:bg-background",
            r.transition,
            r.placeholder,
            x && "pr-6",
            a && "focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-border",
            w && "opacity-60",
            s
          ),
          ...u
        }
      ),
      x && /* @__PURE__ */ t(Q, { className: d("absolute right-2 top-1/2 -translate-y-1/2", r.iconSmall, "text-muted-foreground/50") })
    ] }) }) }),
    /* @__PURE__ */ t(
      H,
      {
        align: "start",
        sideOffset: 5,
        className: d(r.dropdownPadding, "min-w-[var(--radix-popover-trigger-width)] bg-popover border border-border rounded-md shadow-lg"),
        onOpenAutoFocus: (h) => h.preventDefault(),
        children: /* @__PURE__ */ t("div", { className: "max-h-40 overflow-auto", children: S.map((h) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: d(
              r.dropdownItem,
              "text-left",
              h === e ? r.dropdownSelected : r.dropdownUnselected
            ),
            onMouseDown: (v) => v.preventDefault(),
            onClick: () => C(h),
            title: h,
            children: /* @__PURE__ */ t("span", { className: "block truncate", children: h })
          },
          h
        )) })
      }
    )
  ] });
}
function tt({
  className: e,
  defaultValue: n,
  value: o,
  min: a = 0,
  max: i = 100,
  ...s
}) {
  const u = $e.useMemo(
    () => Array.isArray(o) ? o : Array.isArray(n) ? n : [a, i],
    [o, n, a, i]
  );
  return /* @__PURE__ */ l(
    ce.Root,
    {
      "data-slot": "slider",
      defaultValue: n,
      value: o,
      min: a,
      max: i,
      className: d(
        "data-vertical:min-h-40 relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:w-auto data-vertical:flex-col",
        e
      ),
      ...s,
      children: [
        /* @__PURE__ */ t(
          ce.Track,
          {
            "data-slot": "slider-track",
            className: "bg-muted rounded-none data-horizontal:h-1 data-horizontal:w-full data-vertical:h-full data-vertical:w-1 bg-muted relative grow overflow-hidden data-horizontal:w-full data-vertical:h-full",
            children: /* @__PURE__ */ t(
              ce.Range,
              {
                "data-slot": "slider-range",
                className: "bg-primary absolute select-none data-horizontal:h-full data-vertical:w-full"
              }
            )
          }
        ),
        Array.from({ length: u.length }, (g, f) => /* @__PURE__ */ t(
          ce.Thumb,
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
function Ct({
  value: e,
  onChange: n,
  placeholder: o = "0",
  disabled: a = !1,
  className: i,
  variant: s = "input",
  min: u = 0,
  max: g = 100,
  step: f = 1
}) {
  const [c, m] = E(String(e));
  return M(() => {
    m(String(e));
  }, [e]), s === "slider" ? /* @__PURE__ */ l("div", { className: d("flex items-center gap-3 flex-1", i), children: [
    /* @__PURE__ */ t(
      tt,
      {
        value: [e],
        onValueChange: (S) => n(S[0]),
        min: u,
        max: g,
        step: f,
        disabled: a,
        className: "flex-1"
      }
    ),
    /* @__PURE__ */ t("span", { className: d(r.text, "font-mono text-muted-foreground w-10 text-right"), children: e })
  ] }) : /* @__PURE__ */ t(
    be,
    {
      type: "text",
      inputMode: "decimal",
      value: c,
      onChange: (S) => {
        const z = S.target.value;
        m(z);
        const C = parseFloat(z);
        isNaN(C) ? (z === "" || z === "-") && n(0) : n(C);
      },
      onBlur: () => {
        const S = parseFloat(c);
        isNaN(S) ? (m("0"), n(0)) : m(String(S));
      },
      placeholder: o,
      disabled: a,
      className: d(
        r.height,
        r.text,
        "flex-1",
        r.bg,
        "border-transparent",
        r.borderHover,
        r.borderFocus,
        "focus:bg-background",
        r.transition,
        "font-mono",
        i
      )
    }
  );
}
function It({
  value: e,
  onChange: n,
  label: o = "Edit JSON",
  disabled: a = !1,
  suggestions: i = []
}) {
  const [s, u] = E(!1), [g, f] = E(""), [c, m] = E(null), p = W(null), y = typeof e == "object" ? JSON.stringify(e, null, 2) : typeof e == "string" ? e : "";
  M(() => {
    s && (f(y), m(null));
  }, [s, y]), M(() => () => {
    p.current?.dispose();
  }, []);
  const S = (N, x) => {
    if (p.current?.dispose(), i.length === 0) return;
    const h = N.getModel()?.getLanguageId() ?? "json";
    p.current = x.languages.registerCompletionItemProvider(h, {
      provideCompletionItems: (v, T) => {
        const V = v.getWordUntilPosition(T), j = {
          startLineNumber: T.lineNumber,
          endLineNumber: T.lineNumber,
          startColumn: V.startColumn,
          endColumn: V.endColumn
        };
        return {
          suggestions: i.map((P, b) => ({
            label: P,
            kind: x.languages.CompletionItemKind.Text,
            insertText: P,
            range: j,
            sortText: String(b).padStart(5, "0")
          }))
        };
      }
    });
  }, z = (N) => {
    const x = N || "";
    f(x);
    try {
      JSON.parse(x), m(null);
    } catch (w) {
      m(w.message);
    }
  }, C = () => {
    try {
      const N = JSON.parse(g);
      n(N), u(!1);
    } catch (N) {
      m(N.message);
    }
  }, I = y.split(`
`).length, k = c === null;
  return /* @__PURE__ */ l(Qe, { open: s, onOpenChange: (N) => !a && u(N), children: [
    /* @__PURE__ */ t(Ze, { asChild: !0, children: /* @__PURE__ */ l(
      "button",
      {
        disabled: a,
        className: d(
          r.triggerButton,
          r.triggerButtonDisabled
        ),
        children: [
          /* @__PURE__ */ l("span", { className: "flex items-center gap-1.5 text-muted-foreground", children: [
            /* @__PURE__ */ t(Le, { className: r.iconSize }),
            /* @__PURE__ */ t("span", { children: o })
          ] }),
          /* @__PURE__ */ l("span", { className: "text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground", children: [
            I,
            " lines"
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ l(
      qe,
      {
        className: "p-0 gap-0 flex flex-col overflow-hidden",
        style: {
          width: "calc(100vw - 120px)",
          maxWidth: "800px",
          height: "calc(100vh - 120px)",
          maxHeight: "600px"
        },
        children: [
          /* @__PURE__ */ t(Xe, { className: "px-4 py-3 flex-shrink-0 bg-muted/50 border-b border-border", children: /* @__PURE__ */ l(Ye, { className: "flex items-center gap-2 text-sm font-medium", children: [
            /* @__PURE__ */ t(Le, { className: "h-4 w-4 text-primary" }),
            o
          ] }) }),
          /* @__PURE__ */ t("div", { className: "flex-1 min-h-0 bg-background", children: /* @__PURE__ */ t(
            Ke,
            {
              height: "100%",
              defaultLanguage: "json",
              value: g,
              onChange: z,
              onMount: S,
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
          /* @__PURE__ */ l("div", { className: "px-4 py-3 flex-shrink-0 bg-muted/50 border-t border-border flex items-center justify-between", children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: c ? /* @__PURE__ */ l(me, { children: [
              /* @__PURE__ */ t("div", { className: "h-2 w-2 rounded-full bg-destructive" }),
              /* @__PURE__ */ t("p", { className: "text-xs text-destructive truncate max-w-[300px]", children: c })
            ] }) : /* @__PURE__ */ l(me, { children: [
              /* @__PURE__ */ t("div", { className: "h-2 w-2 rounded-full bg-primary" }),
              /* @__PURE__ */ t("span", { className: "text-xs text-muted-foreground", children: "Valid JSON" })
            ] }) }),
            /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ t(
                he,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => u(!1),
                  className: "h-7 px-3 text-xs",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ l(
                he,
                {
                  size: "sm",
                  onClick: C,
                  disabled: !k,
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
const de = {
  null: { label: "Null", icon: ut, default: null },
  string: { label: "String", icon: Ce, default: "" },
  number: { label: "Number", icon: Se, default: 0 },
  boolean: { label: "Boolean", icon: dt, default: !1 },
  object: { label: "Object", icon: ct, default: {} }
};
function zt(e) {
  return e == null ? "null" : typeof e == "string" ? "string" : typeof e == "number" ? "number" : typeof e == "boolean" ? "boolean" : typeof e == "object" ? "object" : "null";
}
function pn({
  value: e,
  onChange: n,
  allowedTypes: o = ["null", "string", "number", "boolean", "object"],
  disabled: a = !1
}) {
  const [i, s] = E(!1), u = U(() => zt(e), [e]), g = (m) => {
    if (m === u) {
      s(!1);
      return;
    }
    n(de[m].default), s(!1);
  }, f = de[u].icon, c = () => {
    switch (u) {
      case "null":
        return /* @__PURE__ */ t("div", { className: d("flex-1 flex items-center px-3 italic text-muted-foreground", r.height, r.text, r.bg), children: "null" });
      case "string":
        return /* @__PURE__ */ t(
          et,
          {
            value: e,
            onChange: n,
            placeholder: "Enter text...",
            disabled: a,
            className: "flex-1"
          }
        );
      case "number":
        return /* @__PURE__ */ t(
          Ct,
          {
            value: e,
            onChange: n,
            disabled: a,
            className: "flex-1"
          }
        );
      case "boolean":
        return /* @__PURE__ */ t("div", { className: "flex-1 flex items-center", children: /* @__PURE__ */ t(
          yt,
          {
            variant: "radio",
            value: e,
            onChange: n,
            disabled: a
          }
        ) });
      case "object":
        return /* @__PURE__ */ t(
          It,
          {
            value: e,
            onChange: (m) => n(m),
            disabled: a,
            label: "Edit Object"
          }
        );
      default:
        return null;
    }
  };
  return /* @__PURE__ */ l("div", { className: d(
    "flex flex-1 items-center gap-2",
    a && "opacity-50"
  ), children: [
    /* @__PURE__ */ l(A, { open: i, onOpenChange: s, children: [
      /* @__PURE__ */ t(re, { asChild: !0, children: /* @__PURE__ */ l(
        "button",
        {
          disabled: a,
          className: d(
            r.iconTrigger,
            a && "cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ t(f, { className: "h-4 w-4" }),
            /* @__PURE__ */ t(Q, { className: r.chevron })
          ]
        }
      ) }),
      /* @__PURE__ */ t(H, { align: "start", className: d("w-36", r.dropdownPadding, r.dropdownGap), children: o.map((m) => {
        const p = de[m].icon, y = m === u;
        return /* @__PURE__ */ l(
          "button",
          {
            onClick: () => g(m),
            className: d(
              r.dropdownItem,
              y ? r.dropdownSelected : r.dropdownUnselected
            ),
            children: [
              /* @__PURE__ */ t(p, { className: r.iconSize }),
              /* @__PURE__ */ t("span", { className: "flex-1 text-left", children: de[m].label })
            ]
          },
          m
        );
      }) })
    ] }),
    c()
  ] });
}
function xe({
  delayDuration: e = 0,
  ...n
}) {
  return /* @__PURE__ */ t(
    ne.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...n
    }
  );
}
function ke({
  ...e
}) {
  return /* @__PURE__ */ t(xe, { children: /* @__PURE__ */ t(ne.Root, { "data-slot": "tooltip", ...e }) });
}
function Oe({
  ...e
}) {
  return /* @__PURE__ */ t(ne.Trigger, { "data-slot": "tooltip-trigger", ...e });
}
function Te({
  className: e,
  sideOffset: n = 0,
  children: o,
  ...a
}) {
  return /* @__PURE__ */ t(ne.Portal, { children: /* @__PURE__ */ l(
    ne.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset: n,
      className: d(
        "data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 rounded-none px-3 py-1.5 text-xs bg-foreground text-background z-50 w-fit max-w-xs origin-(--radix-tooltip-content-transform-origin)",
        e
      ),
      ...a,
      children: [
        o,
        /* @__PURE__ */ t(ne.Arrow, { className: "size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-none bg-foreground fill-foreground z-50 translate-y-[calc(-50%_-_2px)]" })
      ]
    }
  ) });
}
function kt({
  ...e
}) {
  return /* @__PURE__ */ t(F.Root, { "data-slot": "select", ...e });
}
function Ot({
  ...e
}) {
  return /* @__PURE__ */ t(F.Value, { "data-slot": "select-value", ...e });
}
function Tt({
  className: e,
  size: n = "default",
  children: o,
  ...a
}) {
  return /* @__PURE__ */ l(
    F.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": n,
      className: d(
        "border-input data-[placeholder]:text-muted-foreground dark:bg-input/30 dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 gap-1.5 rounded-none border bg-transparent py-2 pr-2 pl-2.5 text-xs transition-colors select-none focus-visible:ring-1 aria-invalid:ring-1 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-none *:data-[slot=select-value]:flex *:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 flex w-fit items-center justify-between whitespace-nowrap outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
        e
      ),
      ...a,
      children: [
        o,
        /* @__PURE__ */ t(F.Icon, { asChild: !0, children: /* @__PURE__ */ t(_e, { className: "text-muted-foreground size-4 pointer-events-none" }) })
      ]
    }
  );
}
function Pt({
  className: e,
  children: n,
  position: o = "item-aligned",
  align: a = "center",
  ...i
}) {
  return /* @__PURE__ */ t(F.Portal, { children: /* @__PURE__ */ l(
    F.Content,
    {
      "data-slot": "select-content",
      className: d("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 min-w-36 rounded-none shadow-md ring-1 duration-100 relative z-50 max-h-(--radix-select-content-available-height) origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto", o === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
      position: o,
      align: a,
      ...i,
      children: [
        /* @__PURE__ */ t(Bt, {}),
        /* @__PURE__ */ t(
          F.Viewport,
          {
            "data-position": o,
            className: d(
              "data-[position=popper]:h-[var(--radix-select-trigger-height)] data-[position=popper]:w-full data-[position=popper]:min-w-[var(--radix-select-trigger-width)]",
              o === "popper" && ""
            ),
            children: n
          }
        ),
        /* @__PURE__ */ t(Vt, {})
      ]
    }
  ) });
}
function Et({
  className: e,
  children: n,
  ...o
}) {
  return /* @__PURE__ */ l(
    F.Item,
    {
      "data-slot": "select-item",
      className: d(
        "focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground gap-2 rounded-none py-2 pr-8 pl-2 text-xs [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 relative flex w-full cursor-default items-center outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        e
      ),
      ...o,
      children: [
        /* @__PURE__ */ t("span", { className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center", children: /* @__PURE__ */ t(F.ItemIndicator, { children: /* @__PURE__ */ t(Ge, { className: "pointer-events-none" }) }) }),
        /* @__PURE__ */ t(F.ItemText, { children: n })
      ]
    }
  );
}
function Bt({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ t(
    F.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: d("bg-popover z-10 flex cursor-default items-center justify-center py-1 [&_svg:not([class*='size-'])]:size-4", e),
      ...n,
      children: /* @__PURE__ */ t(
        ft,
        {}
      )
    }
  );
}
function Vt({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ t(
    F.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: d("bg-popover z-10 flex cursor-default items-center justify-center py-1 [&_svg:not([class*='size-'])]:size-4", e),
      ...n,
      children: /* @__PURE__ */ t(
        _e,
        {}
      )
    }
  );
}
function gn({
  value: e,
  onChange: n,
  options: o,
  variant: a,
  buttonDisplay: i = "text",
  maxInline: s,
  placeholder: u = "Select...",
  dropdownTitle: g,
  iconTrigger: f,
  disabled: c = !1,
  borderless: m = !1
}) {
  const [p, y] = E(!1), [S, z] = E(!1), C = D(
    (v) => {
      c || n(v);
    },
    [n, c]
  );
  if ((a ?? (o.length > 5 ? "dropdown" : "buttons")) === "dropdown")
    return f ? /* @__PURE__ */ l(A, { open: S, onOpenChange: z, children: [
      /* @__PURE__ */ t(re, { asChild: !0, children: /* @__PURE__ */ l(
        "button",
        {
          disabled: c,
          className: d(
            r.iconTrigger,
            m && "bg-transparent border-transparent hover:bg-muted/30",
            c && r.disabledContainer
          ),
          children: [
            /* @__PURE__ */ t(f, { className: "h-4 w-4" }),
            /* @__PURE__ */ t(Q, { className: r.chevron })
          ]
        }
      ) }),
      /* @__PURE__ */ l(H, { align: "start", className: d("w-48", r.dropdownPadding, r.dropdownGap), children: [
        g && /* @__PURE__ */ t("div", { className: d(r.dropdownHeader, "mb-1"), children: g }),
        o.map((v) => {
          const T = v.icon, V = e === v.value;
          return /* @__PURE__ */ l(
            "button",
            {
              onClick: () => {
                C(v.value), z(!1);
              },
              className: d(
                r.dropdownItem,
                V ? r.dropdownSelected : r.dropdownUnselected
              ),
              children: [
                T && /* @__PURE__ */ t(T, { className: r.iconSize }),
                /* @__PURE__ */ t("span", { className: "flex-1 text-left", children: v.label }),
                V && /* @__PURE__ */ t(Y, { className: r.iconSize })
              ]
            },
            v.value
          );
        })
      ] })
    ] }) : /* @__PURE__ */ l(kt, { value: e || "", onValueChange: C, disabled: c, children: [
      /* @__PURE__ */ t(Tt, { size: "sm", className: d(r.text, r.bg, "border-transparent", r.borderHover, r.borderFocus, r.transition), children: /* @__PURE__ */ t(Ot, { placeholder: u }) }),
      /* @__PURE__ */ l(Pt, { children: [
        g && /* @__PURE__ */ t("div", { className: d(r.dropdownHeader, "mb-1"), children: g }),
        o.map((v) => {
          const T = v.icon;
          return /* @__PURE__ */ t(Et, { value: v.value, className: r.text, children: /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
            T && /* @__PURE__ */ t(T, { className: r.iconSize }),
            v.label
          ] }) }, v.value);
        })
      ] })
    ] });
  const k = s !== void 0 && o.length > s, N = k ? o.slice(0, s - 1) : o, x = k ? o.slice(s - 1) : [], w = x.find((v) => v.value === e), h = (v, T, V) => {
    const j = e === v.value, P = v.icon, b = P && (i === "icon" || i === "both"), O = i === "text" || i === "both", B = /* @__PURE__ */ l(
      "button",
      {
        onClick: () => C(v.value),
        disabled: c,
        className: d(
          r.buttonGroupItem,
          T && "rounded-l-md",
          V && !k && "rounded-r-md",
          !T && !V && "rounded-none",
          j ? r.buttonSelected : r.buttonUnselected,
          c && r.disabledContainer
        ),
        children: [
          b && /* @__PURE__ */ t(P, { className: r.iconSize }),
          O && /* @__PURE__ */ t("span", { className: "truncate", children: v.label })
        ]
      },
      v.value
    ), L = v.hoverText || (i === "icon" ? v.label : void 0);
    return L && !c ? /* @__PURE__ */ t(xe, { delayDuration: 200, children: /* @__PURE__ */ l(ke, { children: [
      /* @__PURE__ */ t(Oe, { asChild: !0, children: B }),
      /* @__PURE__ */ t(Te, { side: "bottom", className: "text-xs", children: L })
    ] }) }, v.value) : B;
  };
  return /* @__PURE__ */ l("div", { className: d(
    r.buttonGroupContainer,
    m && "bg-transparent border-transparent",
    c && "opacity-50"
  ), children: [
    N.map(
      (v, T) => h(v, T === 0, T === N.length - 1)
    ),
    k && /* @__PURE__ */ l(A, { open: p, onOpenChange: y, children: [
      /* @__PURE__ */ t(re, { asChild: !0, children: /* @__PURE__ */ l(
        "button",
        {
          disabled: c,
          className: d(
            r.buttonGroupItem,
            "rounded-r-md",
            w ? r.buttonSelected : r.buttonUnselected,
            c && "cursor-not-allowed"
          ),
          children: [
            w ? /* @__PURE__ */ l(me, { children: [
              w.icon && i !== "text" && /* @__PURE__ */ t(w.icon, { className: r.iconSize }),
              i !== "icon" && /* @__PURE__ */ t("span", { className: "truncate", children: w.label })
            ] }) : /* @__PURE__ */ t("span", { children: "More" }),
            /* @__PURE__ */ t(Q, { className: r.iconSmall })
          ]
        }
      ) }),
      /* @__PURE__ */ t(H, { align: "end", className: d("w-44", r.dropdownPadding, r.dropdownGap), children: x.map((v) => {
        const T = v.icon, V = e === v.value;
        return /* @__PURE__ */ l(
          "button",
          {
            onClick: () => {
              C(v.value), y(!1);
            },
            className: d(
              r.dropdownItem,
              V ? r.dropdownSelected : r.dropdownUnselected
            ),
            children: [
              T && /* @__PURE__ */ t(T, { className: r.iconSize }),
              /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", children: v.label }),
              V && /* @__PURE__ */ t(Y, { className: r.iconSize })
            ]
          },
          v.value
        );
      }) })
    ] })
  ] });
}
function jt(e) {
  let n = e;
  for (; n; ) {
    if (n.dir)
      return n.dir === "rtl";
    n = n.parentElement;
  }
  return !1;
}
function Lt(e, n) {
  const [o, a] = E(n === "rtl");
  return ze(() => {
    e && (n || a(jt(e)));
  }, [n, e]), o;
}
const pe = typeof window < "u" ? ze : M;
function Ae(e) {
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
  defaultHeight: n,
  defaultWidth: o,
  disabled: a,
  element: i,
  mode: s,
  style: u
}) {
  const { styleHeight: g, styleWidth: f } = U(
    () => ({
      styleHeight: Ae(u?.height),
      styleWidth: Ae(u?.width)
    }),
    [u?.height, u?.width]
  ), [c, m] = E({
    height: n,
    width: o
  }), p = a || s === "only-height" && g !== void 0 || s === "only-width" && f !== void 0 || g !== void 0 && f !== void 0;
  return pe(() => {
    if (i === null || p)
      return;
    const y = new ResizeObserver((S) => {
      for (const z of S) {
        const { contentRect: C, target: I } = z;
        i === I && m((k) => k.height === C.height && k.width === C.width ? k : {
          height: C.height,
          width: C.width
        });
      }
    });
    return y.observe(i, { box: e }), () => {
      y?.unobserve(i);
    };
  }, [e, p, i, g, f]), U(
    () => ({
      height: g ?? c.height,
      width: f ?? c.width
    }),
    [c, g, f]
  );
}
function Mt(e) {
  const n = W(() => {
    throw new Error("Cannot call during render.");
  });
  return pe(() => {
    n.current = e;
  }, [e]), D((o) => n.current?.(o), [n]);
}
let te = null;
function Ft(e = !1) {
  if (te === null || e) {
    const n = document.createElement("div"), o = n.style;
    o.width = "50px", o.height = "50px", o.overflow = "scroll", o.direction = "rtl";
    const a = document.createElement("div"), i = a.style;
    return i.width = "100px", i.height = "100px", n.appendChild(a), document.body.appendChild(n), n.scrollLeft > 0 ? te = "positive-descending" : (n.scrollLeft = 1, n.scrollLeft === 0 ? te = "negative" : te = "positive-ascending"), document.body.removeChild(n), te;
  }
  return te;
}
function ve({
  containerElement: e,
  direction: n,
  isRtl: o,
  scrollOffset: a
}) {
  if (n === "horizontal" && o)
    switch (Ft()) {
      case "negative":
        return -a;
      case "positive-descending": {
        if (e) {
          const { clientWidth: i, scrollLeft: s, scrollWidth: u } = e;
          return u - i - s;
        }
        break;
      }
    }
  return a;
}
function Z(e, n = "Assertion error") {
  if (!e)
    throw console.error(n), Error(n);
}
function ie(e, n) {
  if (e === n)
    return !0;
  if (!!e != !!n || (Z(e !== void 0), Z(n !== void 0), Object.keys(e).length !== Object.keys(n).length))
    return !1;
  for (const o in e)
    if (!Object.is(n[o], e[o]))
      return !1;
  return !0;
}
function nt({
  cachedBounds: e,
  itemCount: n,
  itemSize: o
}) {
  if (n === 0)
    return 0;
  if (typeof o == "number")
    return n * o;
  {
    const a = e.get(
      e.size === 0 ? 0 : e.size - 1
    );
    Z(a !== void 0, "Unexpected bounds cache miss");
    const i = (a.scrollOffset + a.size) / e.size;
    return n * i;
  }
}
function Dt({
  align: e,
  cachedBounds: n,
  index: o,
  itemCount: a,
  itemSize: i,
  containerScrollOffset: s,
  containerSize: u
}) {
  if (o < 0 || o >= a)
    throw RangeError(`Invalid index specified: ${o}`, {
      cause: `Index ${o} is not within the range of 0 - ${a - 1}`
    });
  const g = nt({
    cachedBounds: n,
    itemCount: a,
    itemSize: i
  }), f = n.get(o), c = Math.max(
    0,
    Math.min(g - u, f.scrollOffset)
  ), m = Math.max(
    0,
    f.scrollOffset - u + f.size
  );
  switch (e === "smart" && (s >= m && s <= c ? e = "auto" : e = "center"), e) {
    case "start":
      return c;
    case "end":
      return m;
    case "center":
      return f.scrollOffset <= u / 2 ? 0 : f.scrollOffset + f.size / 2 >= g - u / 2 ? g - u : f.scrollOffset + f.size / 2 - u / 2;
    default:
      return s >= m && s <= c ? s : s < m ? m : c;
  }
}
function He({
  cachedBounds: e,
  containerScrollOffset: n,
  containerSize: o,
  itemCount: a,
  overscanCount: i
}) {
  const s = a - 1;
  let u = 0, g = -1, f = 0, c = -1, m = 0;
  for (; m < s; ) {
    const p = e.get(m);
    if (p.scrollOffset + p.size > n)
      break;
    m++;
  }
  for (u = m, f = Math.max(0, u - i); m < s; ) {
    const p = e.get(m);
    if (p.scrollOffset + p.size >= n + o)
      break;
    m++;
  }
  return g = Math.min(s, m), c = Math.min(a - 1, g + i), u < 0 && (u = 0, g = -1, f = 0, c = -1), {
    startIndexVisible: u,
    stopIndexVisible: g,
    startIndexOverscan: f,
    stopIndexOverscan: c
  };
}
function At({
  itemCount: e,
  itemProps: n,
  itemSize: o
}) {
  const a = /* @__PURE__ */ new Map();
  return {
    get(i) {
      for (Z(i < e, `Invalid index ${i}`); a.size - 1 < i; ) {
        const u = a.size;
        let g;
        switch (typeof o) {
          case "function": {
            g = o(u, n);
            break;
          }
          case "number": {
            g = o;
            break;
          }
        }
        if (u === 0)
          a.set(u, {
            size: g,
            scrollOffset: 0
          });
        else {
          const f = a.get(u - 1);
          Z(
            f !== void 0,
            `Unexpected bounds cache miss for index ${i}`
          ), a.set(u, {
            scrollOffset: f.scrollOffset + f.size,
            size: g
          });
        }
      }
      const s = a.get(i);
      return Z(
        s !== void 0,
        `Unexpected bounds cache miss for index ${i}`
      ), s;
    },
    set(i, s) {
      a.set(i, s);
    },
    get size() {
      return a.size;
    }
  };
}
function Ht({
  itemCount: e,
  itemProps: n,
  itemSize: o
}) {
  return U(
    () => At({
      itemCount: e,
      itemProps: n,
      itemSize: o
    }),
    [e, n, o]
  );
}
function Wt({
  containerSize: e,
  itemSize: n
}) {
  let o;
  return typeof n === "string" ? (Z(
    n.endsWith("%"),
    `Invalid item size: "${n}"; string values must be percentages (e.g. "100%")`
  ), Z(
    e !== void 0,
    "Container size must be defined if a percentage item size is specified"
  ), o = e * parseInt(n) / 100) : o = n, o;
}
function We({
  containerElement: e,
  containerStyle: n,
  defaultContainerSize: o = 0,
  direction: a,
  isRtl: i = !1,
  itemCount: s,
  itemProps: u,
  itemSize: g,
  onResize: f,
  overscanCount: c
}) {
  const [m, p] = E({
    startIndexVisible: 0,
    startIndexOverscan: 0,
    stopIndexVisible: -1,
    stopIndexOverscan: -1
  }), {
    startIndexVisible: y,
    startIndexOverscan: S,
    stopIndexVisible: z,
    stopIndexOverscan: C
  } = {
    startIndexVisible: Math.min(s - 1, m.startIndexVisible),
    startIndexOverscan: Math.min(s - 1, m.startIndexOverscan),
    stopIndexVisible: Math.min(s - 1, m.stopIndexVisible),
    stopIndexOverscan: Math.min(s - 1, m.stopIndexOverscan)
  }, { height: I = o, width: k = o } = Rt({
    defaultHeight: a === "vertical" ? o : void 0,
    defaultWidth: a === "horizontal" ? o : void 0,
    element: e,
    mode: a === "vertical" ? "only-height" : "only-width",
    style: n
  }), N = W({
    height: 0,
    width: 0
  }), x = a === "vertical" ? I : k, w = Wt({ containerSize: x, itemSize: g });
  ze(() => {
    if (typeof f == "function") {
      const P = N.current;
      (P.height !== I || P.width !== k) && (f({ height: I, width: k }, { ...P }), P.height = I, P.width = k);
    }
  }, [I, f, k]);
  const h = Ht({
    itemCount: s,
    itemProps: u,
    itemSize: w
  }), v = D(
    (P) => h.get(P),
    [h]
  ), T = D(
    () => nt({
      cachedBounds: h,
      itemCount: s,
      itemSize: w
    }),
    [h, s, w]
  ), V = D(
    (P) => {
      const b = ve({
        containerElement: e,
        direction: a,
        isRtl: i,
        scrollOffset: P
      });
      return He({
        cachedBounds: h,
        containerScrollOffset: b,
        containerSize: x,
        itemCount: s,
        overscanCount: c
      });
    },
    [
      h,
      e,
      x,
      a,
      i,
      s,
      c
    ]
  );
  pe(() => {
    const P = (a === "vertical" ? e?.scrollTop : e?.scrollLeft) ?? 0;
    p(V(P));
  }, [e, a, V]), pe(() => {
    if (!e)
      return;
    const P = () => {
      p((b) => {
        const { scrollLeft: O, scrollTop: B } = e, L = ve({
          containerElement: e,
          direction: a,
          isRtl: i,
          scrollOffset: a === "vertical" ? B : O
        }), q = He({
          cachedBounds: h,
          containerScrollOffset: L,
          containerSize: x,
          itemCount: s,
          overscanCount: c
        });
        return ie(q, b) ? b : q;
      });
    };
    return e.addEventListener("scroll", P), () => {
      e.removeEventListener("scroll", P);
    };
  }, [
    h,
    e,
    x,
    a,
    s,
    c
  ]);
  const j = Mt(
    ({
      align: P = "auto",
      containerScrollOffset: b,
      index: O
    }) => {
      let B = Dt({
        align: P,
        cachedBounds: h,
        containerScrollOffset: b,
        containerSize: x,
        index: O,
        itemCount: s,
        itemSize: w
      });
      if (e) {
        if (B = ve({
          containerElement: e,
          direction: a,
          isRtl: i,
          scrollOffset: B
        }), typeof e.scrollTo != "function") {
          const L = V(B);
          ie(m, L) || p(L);
        }
        return B;
      }
    }
  );
  return {
    getCellBounds: v,
    getEstimatedSize: T,
    scrollToIndex: j,
    startIndexOverscan: S,
    startIndexVisible: y,
    stopIndexOverscan: C,
    stopIndexVisible: z
  };
}
function Ut(e) {
  return U(() => e, Object.values(e));
}
function $t(e, n) {
  const {
    ariaAttributes: o,
    style: a,
    ...i
  } = e, {
    ariaAttributes: s,
    style: u,
    ...g
  } = n;
  return ie(o, s) && ie(a, u) && ie(i, g);
}
function Gt({
  cellComponent: e,
  cellProps: n,
  children: o,
  className: a,
  columnCount: i,
  columnWidth: s,
  defaultHeight: u = 0,
  defaultWidth: g = 0,
  dir: f,
  gridRef: c,
  onCellsRendered: m,
  onResize: p,
  overscanCount: y = 3,
  rowCount: S,
  rowHeight: z,
  style: C,
  tagName: I = "div",
  ...k
}) {
  const N = Ut(n), x = U(
    () => it(e, $t),
    [e]
  ), [w, h] = E(null), v = Lt(w, f), {
    getCellBounds: T,
    getEstimatedSize: V,
    startIndexOverscan: j,
    startIndexVisible: P,
    scrollToIndex: b,
    stopIndexOverscan: O,
    stopIndexVisible: B
  } = We({
    containerElement: w,
    containerStyle: C,
    defaultContainerSize: g,
    direction: "horizontal",
    isRtl: v,
    itemCount: i,
    itemProps: N,
    itemSize: s,
    onResize: p,
    overscanCount: y
  }), {
    getCellBounds: L,
    getEstimatedSize: q,
    startIndexOverscan: X,
    startIndexVisible: le,
    scrollToIndex: ee,
    stopIndexOverscan: $,
    stopIndexVisible: Ee
  } = We({
    containerElement: w,
    containerStyle: C,
    defaultContainerSize: u,
    direction: "vertical",
    itemCount: S,
    itemProps: N,
    itemSize: z,
    onResize: p,
    overscanCount: y
  });
  st(
    c,
    () => ({
      get element() {
        return w;
      },
      scrollToCell({
        behavior: G = "auto",
        columnAlign: R = "auto",
        columnIndex: _,
        rowAlign: J = "auto",
        rowIndex: K
      }) {
        const oe = b({
          align: R,
          containerScrollOffset: w?.scrollLeft ?? 0,
          index: _
        }), at = ee({
          align: J,
          containerScrollOffset: w?.scrollTop ?? 0,
          index: K
        });
        typeof w?.scrollTo == "function" && w.scrollTo({
          behavior: G,
          left: oe,
          top: at
        });
      },
      scrollToColumn({
        align: G = "auto",
        behavior: R = "auto",
        index: _
      }) {
        const J = b({
          align: G,
          containerScrollOffset: w?.scrollLeft ?? 0,
          index: _
        });
        typeof w?.scrollTo == "function" && w.scrollTo({
          behavior: R,
          left: J
        });
      },
      scrollToRow({
        align: G = "auto",
        behavior: R = "auto",
        index: _
      }) {
        const J = ee({
          align: G,
          containerScrollOffset: w?.scrollTop ?? 0,
          index: _
        });
        typeof w?.scrollTo == "function" && w.scrollTo({
          behavior: R,
          top: J
        });
      }
    }),
    [w, b, ee]
  ), M(() => {
    j >= 0 && O >= 0 && X >= 0 && $ >= 0 && m && m(
      {
        columnStartIndex: P,
        columnStopIndex: B,
        rowStartIndex: le,
        rowStopIndex: Ee
      },
      {
        columnStartIndex: j,
        columnStopIndex: O,
        rowStartIndex: X,
        rowStopIndex: $
      }
    );
  }, [
    m,
    j,
    P,
    O,
    B,
    X,
    le,
    $,
    Ee
  ]);
  const rt = U(() => {
    const G = [];
    if (i > 0 && S > 0)
      for (let R = X; R <= $; R++) {
        const _ = L(R), J = [];
        for (let K = j; K <= O; K++) {
          const oe = T(K);
          J.push(
            /* @__PURE__ */ Be(
              x,
              {
                ...N,
                ariaAttributes: {
                  "aria-colindex": K + 1,
                  role: "gridcell"
                },
                columnIndex: K,
                key: K,
                rowIndex: R,
                style: {
                  position: "absolute",
                  left: v ? void 0 : 0,
                  right: v ? 0 : void 0,
                  transform: `translate(${v ? -oe.scrollOffset : oe.scrollOffset}px, ${_.scrollOffset}px)`,
                  height: _.size,
                  width: oe.size
                }
              }
            )
          );
        }
        G.push(
          /* @__PURE__ */ t("div", { role: "row", "aria-rowindex": R + 1, children: J }, R)
        );
      }
    return G;
  }, [
    x,
    N,
    i,
    j,
    O,
    T,
    L,
    v,
    S,
    X,
    $
  ]), ot = /* @__PURE__ */ t(
    "div",
    {
      "aria-hidden": !0,
      style: {
        height: q(),
        width: V(),
        zIndex: -1
      }
    }
  );
  return Be(
    I,
    {
      "aria-colcount": i,
      "aria-rowcount": S,
      role: "grid",
      ...k,
      className: a,
      dir: f,
      ref: h,
      style: {
        position: "relative",
        width: "100%",
        height: "100%",
        maxHeight: "100%",
        maxWidth: "100%",
        flexGrow: 1,
        overflow: "auto",
        ...C
      }
    },
    rt,
    o,
    ot
  );
}
const Pe = [
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
], se = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Set();
let ae = null;
function _t() {
  return Pe;
}
async function Jt(e) {
  if (e === "lucide-react")
    return await import("lucide-react");
  if (e.startsWith("react-icons/")) {
    const n = e.replace("react-icons/", "");
    switch (n) {
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
        throw new Error(`Unknown react-icons pack: ${n}`);
    }
  }
  throw new Error(`Unknown icon pack: ${e}`);
}
function Kt(e) {
  return Object.keys(e).filter((n) => {
    if (!/^[A-Z]/.test(n) || ["createLucideIcon", "Icon", "IconNode", "LucideIcon"].includes(n)) return !1;
    const a = e[n];
    return typeof a == "function" || typeof a == "object";
  });
}
async function Qt(e) {
  if (se.has(e))
    return se.get(e);
  if (Ie.has(e))
    return [];
  if (ue.has(e))
    return ue.get(e);
  const n = (async () => {
    try {
      const o = await Jt(e), i = Kt(o).map((s) => gt(e, s));
      return se.set(e, i), ae = null, i;
    } catch (o) {
      return console.warn(`Failed to enumerate icons in pack "${e}":`, o), Ie.add(e), [];
    } finally {
      ue.delete(e);
    }
  })();
  return ue.set(e, n), n;
}
async function Zt() {
  return ae || (ae = (await Promise.all(
    Pe.map((n) => Qt(n))
  )).flat(), ae);
}
function qt() {
  return se.size;
}
function Xt() {
  return se.size + Ie.size >= Pe.length;
}
function Yt(e, n = 150) {
  const [o, a] = E(e), [i, s] = E(!1), [u, g] = E(!0), [f, c] = E([]), [m, p] = E(0), y = W(null);
  return M(() => {
    let z = !0;
    return (async () => {
      g(!0);
      try {
        const I = await Zt();
        z && (c(I), g(!1), p(100));
      } catch (I) {
        console.error("Failed to load icons:", I), z && g(!1);
      }
    })(), () => {
      z = !1;
    };
  }, []), M(() => {
    if (u) {
      const z = setInterval(() => {
        const C = qt(), I = _t().length;
        p(Math.round(C / I * 100)), Xt() && clearInterval(z);
      }, 100);
      return () => clearInterval(z);
    }
  }, [u]), M(() => (s(!0), y.current && clearTimeout(y.current), y.current = setTimeout(() => {
    a(e), s(!1);
  }, n), () => {
    y.current && clearTimeout(y.current);
  }), [e, n]), {
    results: U(() => {
      if (!o.trim())
        return f.slice(0, 500);
      const z = o.toLowerCase();
      return f.filter((C) => {
        const I = C.indexOf(":");
        return (I !== -1 ? C.slice(I + 1) : C).toLowerCase().includes(z);
      });
    }, [o, f]),
    isSearching: i,
    isLoading: u,
    loadProgress: m,
    totalCount: f.length
  };
}
const en = 20, we = 40, Ne = 280, fe = 6;
function bn({
  value: e,
  onChange: n,
  placeholder: o = "Search icons...",
  disabled: a = !1
}) {
  const [i, s] = E(e || ""), [u, g] = E(!1), f = W(null), c = W(null);
  M(() => {
    s(e || "");
  }, [e]);
  const m = i.includes(":") ? i.split(":")[1] || "" : i, { results: p } = Yt(m), y = p.includes(i), S = u && i.length > 0 && !y && p.length > 0, z = (h) => {
    const v = h.target.value;
    s(v), n(v);
  }, C = D((h) => {
    s(h), n(h), g(!1), c.current?.focus();
  }, [n]), [I, k] = E(300);
  M(() => {
    S && f.current && k(f.current.offsetWidth);
  }, [S]);
  const N = Math.floor(I / fe), x = Math.ceil(p.length / fe), w = D(({ columnIndex: h, rowIndex: v, style: T }) => {
    const V = v * fe + h;
    if (V >= p.length)
      return /* @__PURE__ */ t("div", { style: T });
    const j = p[V];
    return /* @__PURE__ */ t("div", { style: T, className: "p-0.5", children: /* @__PURE__ */ t(xe, { delayDuration: 300, children: /* @__PURE__ */ l(ke, { children: [
      /* @__PURE__ */ t(Oe, { asChild: !0, children: /* @__PURE__ */ t(
        "button",
        {
          onMouseDown: (P) => {
            P.preventDefault(), C(j);
          },
          className: d(
            "w-full h-full flex items-center justify-center transition-all rounded-sm",
            r.bg,
            "hover:bg-muted",
            r.border,
            r.borderHover
          ),
          children: /* @__PURE__ */ t(Me, { name: j, size: en, className: "text-foreground" })
        }
      ) }),
      /* @__PURE__ */ l(Te, { side: "bottom", className: "text-xs max-w-[200px] z-[60]", children: [
        /* @__PURE__ */ t("div", { className: "font-medium truncate", children: bt(j) }),
        /* @__PURE__ */ t("div", { className: "text-muted-foreground text-xs", children: xt(j) })
      ] })
    ] }) }) });
  }, [p, C]);
  return /* @__PURE__ */ t("div", { ref: f, className: "flex-1", children: /* @__PURE__ */ l(A, { open: S, modal: !1, children: [
    /* @__PURE__ */ t(ge, { asChild: !0, children: /* @__PURE__ */ l("div", { className: "relative flex-1", children: [
      y && /* @__PURE__ */ t("div", { className: "absolute left-2 top-1/2 -translate-y-1/2 z-10 pointer-events-none", children: /* @__PURE__ */ t(Me, { name: i, size: 14, className: "text-foreground" }) }),
      /* @__PURE__ */ t(
        be,
        {
          ref: c,
          value: i,
          onChange: z,
          onFocus: () => g(!0),
          onBlur: () => setTimeout(() => g(!1), 150),
          placeholder: o,
          disabled: a,
          className: d(
            r.height,
            r.text,
            "font-mono",
            r.bg,
            "border-transparent",
            r.borderHover,
            r.borderFocus,
            "focus:bg-background",
            r.transition,
            y ? "pl-7 text-foreground" : "text-muted-foreground"
          )
        }
      )
    ] }) }),
    /* @__PURE__ */ l(
      H,
      {
        className: d(r.dropdownPadding, "overflow-hidden"),
        align: "start",
        sideOffset: 5,
        onOpenAutoFocus: (h) => h.preventDefault(),
        style: { width: I },
        children: [
          /* @__PURE__ */ l("div", { className: d(r.dropdownHeader), children: [
            p.length.toLocaleString(),
            " matches"
          ] }),
          /* @__PURE__ */ l(
            "div",
            {
              className: "icon-picker-grid",
              style: { height: Math.min(Ne, x * we) },
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
                  Gt,
                  {
                    columnCount: fe,
                    columnWidth: N,
                    defaultHeight: Ne,
                    defaultWidth: I,
                    rowCount: x,
                    rowHeight: we,
                    cellComponent: w,
                    cellProps: {},
                    style: {
                      height: Math.min(Ne, x * we),
                      width: "100%",
                      overflowX: "hidden"
                    }
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] }) });
}
function xn({
  value: e,
  onChange: n,
  options: o,
  variant: a,
  buttonDisplay: i = "text",
  maxInline: s,
  placeholder: u = "Select...",
  dropdownTitle: g,
  iconTrigger: f,
  disabled: c = !1,
  borderless: m = !1
}) {
  const p = Array.isArray(e) ? e : [], [y, S] = E(!1), [z, C] = E(!1), I = D((b) => p.includes(b), [p]), k = D(
    (b) => {
      c || (p.includes(b) ? n(p.filter((O) => O !== b)) : n([...p, b]));
    },
    [p, n, c]
  ), N = D(
    (b, O) => {
      O.stopPropagation(), !c && n(p.filter((B) => B !== b));
    },
    [p, n, c]
  ), x = D(() => {
    c || n([]);
  }, [n, c]), w = a ?? (o.length > 5 ? "dropdown" : "buttons"), h = o.filter((b) => p.includes(b.value));
  if (w === "dropdown")
    return f ? /* @__PURE__ */ l(A, { open: y, onOpenChange: S, children: [
      /* @__PURE__ */ t(re, { asChild: !0, children: /* @__PURE__ */ l(
        "button",
        {
          disabled: c,
          className: d(
            r.iconTrigger,
            c && r.disabledContainer
          ),
          children: [
            /* @__PURE__ */ t(f, { className: "h-4 w-4" }),
            h.length > 0 && /* @__PURE__ */ t("span", { className: "min-w-[18px] h-[18px] rounded-full bg-primary text-primary-foreground text-[10px] font-medium flex items-center justify-center", children: h.length }),
            /* @__PURE__ */ t(Q, { className: r.chevron })
          ]
        }
      ) }),
      /* @__PURE__ */ l(H, { align: "start", className: d("w-[220px]", r.dropdownPadding, r.dropdownGap), sideOffset: 4, children: [
        /* @__PURE__ */ l("div", { className: d(r.dropdownHeader, "flex items-center justify-between"), children: [
          /* @__PURE__ */ t("span", { children: g || `${h.length} selected` }),
          h.length > 0 && /* @__PURE__ */ t(
            "button",
            {
              onClick: x,
              className: "text-[10px] text-muted-foreground hover:text-foreground transition-colors",
              children: "Clear"
            }
          )
        ] }),
        /* @__PURE__ */ t("div", { className: "max-h-[200px] overflow-y-auto", children: o.map((b) => {
          const O = b.icon, B = I(b.value);
          return /* @__PURE__ */ l(
            "button",
            {
              onClick: () => k(b.value),
              className: d(
                r.dropdownItem,
                B ? r.dropdownSelected : r.dropdownUnselected
              ),
              children: [
                /* @__PURE__ */ t("div", { className: d(
                  "h-4 w-4 rounded border flex items-center justify-center shrink-0 transition-colors",
                  B ? "bg-primary border-primary" : "border-border bg-background"
                ), children: B && /* @__PURE__ */ t(Y, { className: d(r.iconSmall, "text-primary-foreground") }) }),
                O && /* @__PURE__ */ t(O, { className: r.iconSize }),
                /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", children: b.label })
              ]
            },
            b.value
          );
        }) })
      ] })
    ] }) : /* @__PURE__ */ l(A, { open: y, onOpenChange: S, children: [
      /* @__PURE__ */ t(re, { asChild: !0, children: /* @__PURE__ */ l(
        "button",
        {
          disabled: c,
          className: d(
            "inline-flex items-center justify-between gap-2 w-full min-w-[180px] px-3",
            r.height,
            r.text,
            r.bg,
            r.border,
            r.borderHover,
            r.borderFocus,
            r.transition,
            c && r.disabledContainer
          ),
          children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5 flex-1 overflow-hidden", children: h.length > 0 ? /* @__PURE__ */ l(me, { children: [
              h.slice(0, 2).map((b) => /* @__PURE__ */ l(
                Fe,
                {
                  variant: "secondary",
                  className: "h-5 px-1.5 text-[10px] font-normal gap-1 shrink-0",
                  children: [
                    b.icon && /* @__PURE__ */ t(b.icon, { className: r.iconSmall }),
                    /* @__PURE__ */ t("span", { className: "truncate max-w-[50px]", children: b.label })
                  ]
                },
                b.value
              )),
              h.length > 2 && /* @__PURE__ */ l("span", { className: "text-muted-foreground text-[10px]", children: [
                "+",
                h.length - 2
              ] })
            ] }) : /* @__PURE__ */ t("span", { className: "text-muted-foreground", children: u }) }),
            /* @__PURE__ */ t(Q, { className: d(r.chevron, "shrink-0") })
          ]
        }
      ) }),
      /* @__PURE__ */ l(H, { align: "start", className: d("w-[220px]", r.dropdownPadding, r.dropdownGap), sideOffset: 4, children: [
        (g || h.length > 0) && /* @__PURE__ */ l("div", { className: d(r.dropdownHeader, "flex items-center justify-between"), children: [
          /* @__PURE__ */ t("span", { children: g || `${h.length} selected` }),
          h.length > 0 && /* @__PURE__ */ t(
            "button",
            {
              onClick: x,
              className: "text-[10px] text-muted-foreground hover:text-foreground transition-colors",
              children: "Clear all"
            }
          )
        ] }),
        /* @__PURE__ */ t("div", { className: "max-h-[200px] overflow-y-auto", children: o.map((b) => {
          const O = b.icon, B = I(b.value);
          return /* @__PURE__ */ l(
            "button",
            {
              onClick: () => k(b.value),
              className: d(
                r.dropdownItem,
                B ? r.dropdownSelected : r.dropdownUnselected
              ),
              children: [
                /* @__PURE__ */ t("div", { className: d(
                  "h-4 w-4 rounded border flex items-center justify-center shrink-0 transition-colors",
                  B ? "bg-primary border-primary" : "border-border bg-background"
                ), children: B && /* @__PURE__ */ t(Y, { className: d(r.iconSmall, "text-primary-foreground") }) }),
                O && /* @__PURE__ */ t(O, { className: r.iconSize }),
                /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", children: b.label })
              ]
            },
            b.value
          );
        }) }),
        h.length > 0 && /* @__PURE__ */ t("div", { className: "border-t border-border p-2", children: /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-1", children: h.map((b) => /* @__PURE__ */ l(
          Fe,
          {
            variant: "secondary",
            className: "h-5 px-1.5 text-[10px] font-normal gap-1 pr-0.5",
            children: [
              b.icon && /* @__PURE__ */ t(b.icon, { className: "h-3 w-3" }),
              /* @__PURE__ */ t("span", { className: "truncate max-w-[60px]", children: b.label }),
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: (O) => N(b.value, O),
                  className: "ml-0.5 p-0.5 rounded hover:bg-muted-foreground/20 transition-colors",
                  children: /* @__PURE__ */ t(Je, { className: "h-3 w-3" })
                }
              )
            ]
          },
          b.value
        )) }) })
      ] })
    ] });
  const v = s !== void 0 && o.length > s, T = v ? o.slice(0, s - 1) : o, V = v ? o.slice(s - 1) : [], j = V.filter((b) => p.includes(b.value)), P = (b, O, B) => {
    const L = I(b.value), q = b.icon, X = q && (i === "icon" || i === "both"), le = i === "text" || i === "both", ee = /* @__PURE__ */ l(
      "button",
      {
        onClick: () => k(b.value),
        disabled: c,
        className: d(
          r.buttonGroupItem,
          O && "rounded-l-md",
          B && !v && "rounded-r-md",
          !O && !B && "rounded-none",
          L ? r.buttonSelected : r.buttonUnselected,
          c && r.disabledContainer
        ),
        children: [
          X && /* @__PURE__ */ t(q, { className: r.iconSize }),
          le && /* @__PURE__ */ t("span", { className: "truncate", children: b.label })
        ]
      },
      b.value
    ), $ = b.hoverText || (i === "icon" ? b.label : void 0);
    return $ && !c ? /* @__PURE__ */ t(xe, { delayDuration: 200, children: /* @__PURE__ */ l(ke, { children: [
      /* @__PURE__ */ t(Oe, { asChild: !0, children: ee }),
      /* @__PURE__ */ t(Te, { side: "bottom", className: "text-xs", children: $ })
    ] }) }, b.value) : ee;
  };
  return /* @__PURE__ */ l("div", { className: d(
    r.buttonGroupContainer,
    m && "bg-transparent border-transparent",
    c && "opacity-50"
  ), children: [
    T.map(
      (b, O) => P(b, O === 0, O === T.length - 1)
    ),
    v && /* @__PURE__ */ l(A, { open: z, onOpenChange: C, children: [
      /* @__PURE__ */ t(re, { asChild: !0, children: /* @__PURE__ */ l(
        "button",
        {
          disabled: c,
          className: d(
            r.buttonGroupItem,
            "rounded-r-md",
            j.length > 0 ? r.buttonSelected : r.buttonUnselected,
            c && "cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ t("span", { children: j.length > 0 ? `+${j.length}` : "More" }),
            /* @__PURE__ */ t(Q, { className: r.iconSmall })
          ]
        }
      ) }),
      /* @__PURE__ */ t(H, { align: "end", className: d("w-44", r.dropdownPadding, r.dropdownGap), children: V.map((b) => {
        const O = b.icon, B = I(b.value);
        return /* @__PURE__ */ l(
          "button",
          {
            onClick: () => k(b.value),
            className: d(
              r.dropdownItem,
              B ? r.dropdownSelected : r.dropdownUnselected
            ),
            children: [
              O && /* @__PURE__ */ t(O, { className: r.iconSize }),
              /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", children: b.label }),
              B && /* @__PURE__ */ t(Y, { className: r.iconSize })
            ]
          },
          b.value
        );
      }) })
    ] })
  ] });
}
function vn({
  value: e,
  onChange: n,
  min: o = 0,
  max: a = 100,
  step: i = 1,
  disabled: s = !1,
  className: u,
  variant: g = "stepper"
}) {
  if (g === "slider")
    return /* @__PURE__ */ l("div", { className: d("flex items-center gap-3 flex-1", u), children: [
      /* @__PURE__ */ t(
        tt,
        {
          value: [e],
          onValueChange: (p) => n(p[0]),
          min: o,
          max: a,
          step: i,
          disabled: s,
          className: "flex-1"
        }
      ),
      /* @__PURE__ */ t("span", { className: "text-xs font-mono text-muted-foreground w-8 text-right", children: e })
    ] });
  const f = () => {
    if (s) return;
    const p = e + i;
    (a === void 0 || p <= a) && n(p);
  }, c = () => {
    if (s) return;
    const p = e - i;
    (o === void 0 || p >= o) && n(p);
  }, m = (p) => {
    const y = parseInt(p.target.value, 10);
    if (!isNaN(y)) {
      let S = y;
      o !== void 0 && (S = Math.max(o, S)), a !== void 0 && (S = Math.min(a, S)), n(S);
    }
  };
  return /* @__PURE__ */ l("div", { className: d("flex items-center gap-0.5 flex-1", u), children: [
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        onClick: c,
        disabled: s || o !== void 0 && e <= o,
        className: d(r.height, "w-7 flex items-center justify-center", r.bg, "hover:bg-muted", r.disabled, r.transition),
        children: /* @__PURE__ */ t(mt, { className: r.iconSmall })
      }
    ),
    /* @__PURE__ */ t(
      be,
      {
        type: "number",
        value: e,
        min: o,
        max: a,
        step: i,
        disabled: s,
        onChange: m,
        className: d(r.height, "text-center", r.text, r.bg, "border-transparent", r.borderHover, r.borderFocus, "focus:bg-background", r.transition, "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none")
      }
    ),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        onClick: f,
        disabled: s || a !== void 0 && e >= a,
        className: d(r.height, "w-7 flex items-center justify-center", r.bg, "hover:bg-muted", r.disabled, r.transition),
        children: /* @__PURE__ */ t(ht, { className: r.iconSmall })
      }
    )
  ] });
}
function tn({ className: e, ...n }) {
  return /* @__PURE__ */ t(
    "textarea",
    {
      "data-slot": "textarea",
      className: d(
        "border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 rounded-none border bg-transparent px-2.5 py-2 text-xs transition-colors focus-visible:ring-1 aria-invalid:ring-1 md:text-xs placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...n
    }
  );
}
function nn(e) {
  const n = e.split(/\s+/);
  return n[n.length - 1] || "";
}
function wn({
  value: e,
  onChange: n,
  suggestions: o = [],
  noRing: a = !1,
  noResize: i = !1,
  autoGrow: s = !0,
  className: u,
  ...g
}) {
  const [f, c] = E(!1), m = W(null), p = nn(e), y = p ? o.filter((N) => N.toLowerCase().includes(p.toLowerCase())) : o, S = (N) => {
    const x = N.target.value;
    n(x), o.length > 0 && c(!0);
  }, z = (N) => {
    const x = e.split(/\s+/);
    x[x.length - 1] = N, n(x.join(" ")), c(!1), m.current?.focus();
  }, C = (N) => {
    o.length > 0 && c(!0), g.onFocus?.(N);
  }, I = (N) => {
    setTimeout(() => c(!1), 150), g.onBlur?.(N);
  }, k = o.length > 0;
  return /* @__PURE__ */ l(A, { open: f && y.length > 0, onOpenChange: c, modal: !1, children: [
    /* @__PURE__ */ t(ge, { asChild: !0, children: /* @__PURE__ */ t("div", { className: "relative flex-1", children: /* @__PURE__ */ l("div", { className: "relative", children: [
      /* @__PURE__ */ t(
        tn,
        {
          ref: m,
          value: e,
          onChange: S,
          onFocus: C,
          onBlur: I,
          className: d(
            "min-h-[60px]",
            r.text,
            r.bg,
            "border-transparent",
            r.borderHover,
            r.borderFocus,
            "focus:bg-background",
            r.transition,
            r.placeholder,
            "scrollbar-none",
            k && "pr-6",
            a && "focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-border",
            i ? "resize-none" : "resize-y",
            !s && "field-sizing-fixed",
            u
          ),
          ...g
        }
      ),
      k && /* @__PURE__ */ t(Q, { className: d("absolute right-2 top-3", r.iconSmall, "text-muted-foreground/50") })
    ] }) }) }),
    /* @__PURE__ */ t(
      H,
      {
        align: "start",
        sideOffset: 5,
        className: d(r.dropdownPadding, "min-w-[var(--radix-popover-trigger-width)] bg-popover border border-border rounded-md shadow-lg"),
        onOpenAutoFocus: (N) => N.preventDefault(),
        children: /* @__PURE__ */ t("div", { className: "max-h-40 overflow-auto", children: y.map((N) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: d(
              r.dropdownItem,
              "text-left",
              N === e ? r.dropdownSelected : r.dropdownUnselected
            ),
            onMouseDown: (x) => x.preventDefault(),
            onClick: () => z(N),
            title: N,
            children: /* @__PURE__ */ t("span", { className: "block truncate", children: N })
          },
          N
        )) })
      }
    )
  ] });
}
function Nn({
  value: e,
  onChange: n,
  label: o = "Edit Python",
  disabled: a = !1,
  suggestions: i = []
}) {
  const [s, u] = E(!1), [g, f] = E(""), c = W(null), m = typeof e == "string" ? e : "";
  M(() => {
    s && f(m);
  }, [s, m]), M(() => () => {
    c.current?.dispose();
  }, []);
  const p = (C, I) => {
    c.current?.dispose(), i.length !== 0 && (c.current = I.languages.registerCompletionItemProvider("python", {
      provideCompletionItems: (k, N) => {
        const x = k.getWordUntilPosition(N), w = {
          startLineNumber: N.lineNumber,
          endLineNumber: N.lineNumber,
          startColumn: x.startColumn,
          endColumn: x.endColumn
        };
        return {
          suggestions: i.map((h, v) => ({
            label: h,
            kind: I.languages.CompletionItemKind.Text,
            insertText: h,
            range: w,
            sortText: String(v).padStart(5, "0")
          }))
        };
      }
    }));
  }, y = (C) => {
    f(C || "");
  }, S = () => {
    n(g), u(!1);
  }, z = m.split(`
`).length;
  return /* @__PURE__ */ l(Qe, { open: s, onOpenChange: (C) => !a && u(C), children: [
    /* @__PURE__ */ t(Ze, { asChild: !0, children: /* @__PURE__ */ l(
      "button",
      {
        disabled: a,
        className: d(
          r.triggerButton,
          r.triggerButtonDisabled
        ),
        children: [
          /* @__PURE__ */ l("span", { className: "flex items-center gap-1.5 text-muted-foreground", children: [
            /* @__PURE__ */ t(Re, { className: r.iconSize }),
            /* @__PURE__ */ t("span", { children: o })
          ] }),
          /* @__PURE__ */ l("span", { className: "text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground", children: [
            z,
            " lines"
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ l(
      qe,
      {
        className: "p-0 gap-0 flex flex-col overflow-hidden",
        style: {
          width: "calc(100vw - 120px)",
          maxWidth: "800px",
          height: "calc(100vh - 120px)",
          maxHeight: "600px"
        },
        children: [
          /* @__PURE__ */ t(Xe, { className: "px-4 py-3 flex-shrink-0 bg-muted/50 border-b border-border", children: /* @__PURE__ */ l(Ye, { className: "flex items-center gap-2 text-sm font-medium", children: [
            /* @__PURE__ */ t(Re, { className: "h-4 w-4 text-primary" }),
            o
          ] }) }),
          /* @__PURE__ */ t("div", { className: "flex-1 min-h-0 bg-background", children: /* @__PURE__ */ t(
            Ke,
            {
              height: "100%",
              defaultLanguage: "python",
              value: g,
              onChange: y,
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
          /* @__PURE__ */ l("div", { className: "px-4 py-3 flex-shrink-0 bg-muted/50 border-t border-border flex items-center justify-between", children: [
            /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ t("div", { className: "h-2 w-2 rounded-full bg-primary" }),
              /* @__PURE__ */ t("span", { className: "text-xs text-muted-foreground", children: "Python" })
            ] }),
            /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ t(
                he,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => u(!1),
                  className: "h-7 px-3 text-xs",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ l(
                he,
                {
                  size: "sm",
                  onClick: S,
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
function Ue(e) {
  const n = e.trim();
  if (!n.startsWith("[") || !n.endsWith("]")) return null;
  try {
    const o = JSON.parse(n);
    return !Array.isArray(o) || !o.every(
      (i) => typeof i == "string" || typeof i == "number"
    ) ? null : o;
  } catch {
    return null;
  }
}
function yn({
  value: e,
  onChange: n,
  placeholder: o = "Type and press Enter...",
  disabled: a = !1,
  className: i
}) {
  const [s, u] = E(""), [g, f] = E(!1), [c, m] = E(""), p = W(null), y = (x) => {
    n([...e, x]), u(""), f(!1), m("");
  }, S = (x) => {
    n([...e, ...x]), u(""), f(!1), m("");
  }, z = (x) => {
    a || n(e.filter((w, h) => h !== x));
  }, C = (x) => {
    const w = x.clipboardData.getData("text"), h = Ue(w);
    h && h.length > 0 && (x.preventDefault(), S(h));
  }, I = (x) => {
    const w = s.trim();
    if (x.key === "Enter" && w) {
      x.preventDefault();
      const h = Ue(w);
      if (h && h.length > 0) {
        S(h);
        return;
      }
      /^\d+$/.test(w) ? (m(w), f(!0), u("")) : y(w);
    }
    x.key === "Backspace" && !s && e.length > 0 && z(e.length - 1), x.key === "Escape" && g && (f(!1), m(""));
  }, k = () => {
    y(c);
  }, N = () => {
    y(parseInt(c, 10));
  };
  return /* @__PURE__ */ l(A, { open: g, onOpenChange: (x) => !x && f(!1), modal: !1, children: [
    /* @__PURE__ */ t(ge, { asChild: !0, children: /* @__PURE__ */ t("div", { className: d("relative flex-1", i), children: /* @__PURE__ */ l(
      "div",
      {
        className: d(
          "flex flex-wrap items-center gap-1.5 min-h-7 px-2 py-1",
          r.bg,
          r.border,
          r.transition,
          r.borderFocusWithin,
          !a && r.borderHover,
          a && r.disabledContainer
        ),
        onClick: () => p.current?.focus(),
        children: [
          e.map((x, w) => /* @__PURE__ */ l(
            "span",
            {
              className: d(
                "inline-flex items-center gap-1 h-5 px-1.5 rounded text-xs font-mono",
                typeof x == "number" ? "bg-primary/20 text-primary" : "bg-accent text-accent-foreground"
              ),
              children: [
                typeof x == "number" ? /* @__PURE__ */ t(Se, { className: "h-2.5 w-2.5" }) : /* @__PURE__ */ t(Ce, { className: "h-2.5 w-2.5" }),
                String(x),
                !a && /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    onClick: (h) => {
                      h.stopPropagation(), z(w);
                    },
                    className: "opacity-50 hover:opacity-100 hover:text-destructive",
                    children: /* @__PURE__ */ t(Je, { className: "h-2.5 w-2.5" })
                  }
                )
              ]
            },
            w
          )),
          !a && /* @__PURE__ */ t(
            "input",
            {
              ref: p,
              type: "text",
              value: s,
              onChange: (x) => u(x.target.value),
              onKeyDown: I,
              onPaste: C,
              placeholder: e.length === 0 ? o : "",
              className: d("flex-1 min-w-[80px] h-5 bg-transparent outline-none", r.text, r.placeholder)
            }
          )
        ]
      }
    ) }) }),
    /* @__PURE__ */ l(
      H,
      {
        align: "start",
        sideOffset: 5,
        className: d(r.dropdownPadding, r.dropdownGap, "w-auto min-w-[200px]"),
        onOpenAutoFocus: (x) => x.preventDefault(),
        children: [
          /* @__PURE__ */ l("div", { className: d(r.dropdownHeader, "mb-1"), children: [
            'Choose type for "',
            c,
            '"'
          ] }),
          /* @__PURE__ */ l(
            "button",
            {
              type: "button",
              onClick: k,
              className: d(r.dropdownItem, r.dropdownUnselected),
              children: [
                /* @__PURE__ */ t(Ce, { className: r.iconSize }),
                /* @__PURE__ */ t("span", { className: "flex-1 text-left", children: "String key" }),
                /* @__PURE__ */ l("code", { className: "text-muted-foreground font-mono", children: [
                  '"',
                  c,
                  '"'
                ] })
              ]
            }
          ),
          /* @__PURE__ */ l(
            "button",
            {
              type: "button",
              onClick: N,
              className: d(r.dropdownItem, r.dropdownUnselected),
              children: [
                /* @__PURE__ */ t(Se, { className: d(r.iconSize, "text-primary") }),
                /* @__PURE__ */ t("span", { className: "flex-1 text-left", children: "Array index" }),
                /* @__PURE__ */ l("code", { className: "text-primary font-mono", children: [
                  "[",
                  c,
                  "]"
                ] })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function rn(e) {
  const n = e.trim();
  if (!n) return null;
  try {
    const o = n.match(/^https?:\/\//) ? n : `https://${n}`, i = new URL(o).hostname;
    return i.includes(".") ? i : null;
  } catch {
    return null;
  }
}
function Sn({
  value: e,
  onChange: n,
  faviconSize: o = 16,
  className: a,
  ...i
}) {
  const s = U(() => rn(e), [e]), u = s ? `https://www.google.com/s2/favicons?domain=${s}&sz=${o}` : null;
  return /* @__PURE__ */ l("div", { className: d("relative flex items-center flex-1", a), children: [
    /* @__PURE__ */ t("div", { className: "absolute left-2 flex items-center justify-center w-4 h-4 pointer-events-none z-10", children: u ? /* @__PURE__ */ t(
      "img",
      {
        src: u,
        alt: "",
        width: o,
        height: o,
        className: "w-4 h-4 rounded-sm",
        onError: (g) => {
          g.target.style.display = "none";
        }
      }
    ) : /* @__PURE__ */ t(pt, { className: "w-3.5 h-3.5 text-muted-foreground/50" }) }),
    /* @__PURE__ */ t(
      et,
      {
        value: e,
        onChange: n,
        className: "pl-7",
        ...i
      }
    )
  ] });
}
export {
  yt as BooleanInput,
  pn as DynamicInput,
  gn as EnumInput,
  bn as IconInput,
  yn as JsonPathInput,
  xn as MultiEnumSelect,
  vn as NumberInput,
  Ct as NumericalInput,
  It as ObjectInput,
  Nn as PythonInput,
  wn as TextAreaInput,
  et as TextInput,
  Sn as UrlInput
};
