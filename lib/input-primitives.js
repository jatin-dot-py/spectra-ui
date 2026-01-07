import { jsx as t, jsxs as l, Fragment as fe } from "react/jsx-runtime";
import * as Ue from "react";
import { useState as E, useRef as W, useEffect as M, useMemo as U, useCallback as D, memo as at, useImperativeHandle as it, createElement as Ee, useLayoutEffect as Ce } from "react";
import { RadioGroup as we, Checkbox as Be, Switch as Ve, Slider as le, Select as F } from "radix-ui";
import { c as u } from "./utils-B6yFEsav.js";
import { CircleIcon as st, CheckIcon as $e, ChevronDown as Q, Code2 as je, Check as Y, Braces as lt, ToggleLeft as ct, Hash as Ne, Type as ye, CircleSlash as dt, ChevronDownIcon as Ge, ChevronUpIcon as ut, X as _e, Minus as ft, Plus as ht, FileCode2 as Le, Globe as mt } from "lucide-react";
import { P as H, a as pe, b as A, c as ne, f as pt, A as Re, g as gt, d as bt, B as Me } from "./badge-BnV_A10r.js";
import Je from "@monaco-editor/react";
import { B as he } from "./button-DHQhRgTM.js";
import { D as Ke, a as Qe, b as Ze, c as qe, d as Xe } from "./dialog-CDPimJCA.js";
import { T as Ie, a as ke, b as ze, c as Oe } from "./tooltip-Cep25X0w.js";
function xt({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    we.Root,
    {
      "data-slot": "radio-group",
      className: u("grid gap-2 w-full", e),
      ...r
    }
  );
}
function Fe({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    we.Item,
    {
      "data-slot": "radio-group-item",
      className: u(
        "border-input text-primary dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 data-checked:bg-primary data-checked:border-primary flex size-4 rounded-full focus-visible:ring-1 aria-invalid:ring-1 group/radio-group-item peer relative aspect-square shrink-0 border outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...r,
      children: /* @__PURE__ */ t(
        we.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "group-aria-invalid/radio-group-item:text-destructive flex size-4 items-center justify-center text-white",
          children: /* @__PURE__ */ t(st, { className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-current" })
        }
      )
    }
  );
}
function vt({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    Be.Root,
    {
      "data-slot": "checkbox",
      className: u(
        "border-input dark:bg-input/30 data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary data-checked:border-primary aria-invalid:aria-checked:border-primary aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 flex size-4 items-center justify-center rounded-none border transition-colors group-has-disabled/field:opacity-50 focus-visible:ring-1 aria-invalid:ring-1 peer relative shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...r,
      children: /* @__PURE__ */ t(
        Be.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "[&>svg]:size-3.5 grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ t(
            $e,
            {}
          )
        }
      )
    }
  );
}
function wt({
  className: e,
  size: r = "default",
  ...o
}) {
  return /* @__PURE__ */ t(
    Ve.Root,
    {
      "data-slot": "switch",
      "data-size": r,
      className: u(
        "data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 dark:data-unchecked:bg-input/80 shrink-0 rounded-full border border-transparent focus-visible:ring-1 aria-invalid:ring-1 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] peer group/switch relative inline-flex items-center transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 data-disabled:cursor-not-allowed data-disabled:opacity-50",
        e
      ),
      ...o,
      children: /* @__PURE__ */ t(
        Ve.Thumb,
        {
          "data-slot": "switch-thumb",
          className: "bg-background dark:data-unchecked:bg-foreground dark:data-checked:bg-primary-foreground rounded-full group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 pointer-events-none block ring-0 transition-transform"
        }
      )
    }
  );
}
function Nt({
  value: e,
  onChange: r,
  className: o,
  variant: a = "checkbox",
  ...i
}) {
  const s = Ue.useId();
  return a === "switch" ? /* @__PURE__ */ t(
    wt,
    {
      checked: e,
      onCheckedChange: (d) => r(!!d),
      className: o,
      ...i
    }
  ) : a === "radio" ? /* @__PURE__ */ l(
    xt,
    {
      value: e ? "true" : "false",
      onValueChange: (d) => r(d === "true"),
      className: u("flex flex-row gap-4", o),
      ...i,
      children: [
        /* @__PURE__ */ l("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t(Fe, { value: "true", id: `${s}-true` }),
          /* @__PURE__ */ t("label", { htmlFor: `${s}-true`, className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: "True" })
        ] }),
        /* @__PURE__ */ l("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t(Fe, { value: "false", id: `${s}-false` }),
          /* @__PURE__ */ t("label", { htmlFor: `${s}-false`, className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: "False" })
        ] })
      ]
    }
  ) : /* @__PURE__ */ t(
    vt,
    {
      checked: e,
      onCheckedChange: (d) => r(!!d),
      className: u("h-3.5 w-3.5", o),
      ...i
    }
  );
}
function ge({ className: e, type: r, ...o }) {
  return /* @__PURE__ */ t(
    "input",
    {
      type: r,
      "data-slot": "input",
      className: u(
        "dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 rounded-none border bg-transparent px-2.5 py-1 text-xs transition-colors file:h-6 file:text-xs file:font-medium focus-visible:ring-1 aria-invalid:ring-1 md:text-xs file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...o
    }
  );
}
const n = {
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
function yt(e) {
  const r = e.split(/\s+/);
  return r[r.length - 1] || "";
}
function Ye({
  value: e,
  onChange: r,
  suggestions: o = [],
  noRing: a = !1,
  frozen: i = !1,
  className: s,
  ...d
}) {
  const [g, f] = E(!1), [c, h] = E(!i), p = W(null), y = yt(e), S = y ? o.filter((m) => m.toLowerCase().includes(y.toLowerCase())) : o, k = (m) => {
    const v = m.target.value;
    r(v), o.length > 0 && f(!0);
  }, C = (m) => {
    const v = e.split(/\s+/);
    v[v.length - 1] = m, r(v.join(" ")), f(!1), p.current?.focus();
  }, I = (m) => {
    o.length > 0 && f(!0), d.onFocus?.(m);
  }, z = (m) => {
    setTimeout(() => f(!1), 150), d.onBlur?.(m);
  }, N = () => {
    i && !c && (h(!0), setTimeout(() => p.current?.focus(), 0));
  }, x = o.length > 0, w = i && !c;
  return /* @__PURE__ */ l(H, { open: g && S.length > 0, onOpenChange: f, modal: !1, children: [
    /* @__PURE__ */ t(pe, { asChild: !0, children: /* @__PURE__ */ t("div", { className: "relative flex-1", children: /* @__PURE__ */ l("div", { className: "relative", children: [
      w && /* @__PURE__ */ t(
        "div",
        {
          onClick: N,
          className: u(
            "absolute inset-0 z-10 cursor-pointer",
            "bg-muted/50 border border-border/50",
            "flex items-center justify-center",
            "hover:bg-accent/50 hover:border-border transition-colors duration-150"
          ),
          children: /* @__PURE__ */ t("span", { className: "text-[10px] text-muted-foreground" })
        }
      ),
      /* @__PURE__ */ t(
        ge,
        {
          ref: p,
          value: e,
          onChange: k,
          onFocus: I,
          onBlur: z,
          disabled: w || d.disabled,
          className: u(
            n.height,
            n.text,
            n.bg,
            "border-transparent",
            n.borderHover,
            n.borderFocus,
            "focus:bg-background",
            n.transition,
            n.placeholder,
            x && "pr-6",
            a && "focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-border",
            w && "opacity-60",
            s
          ),
          ...d
        }
      ),
      x && /* @__PURE__ */ t(Q, { className: u("absolute right-2 top-1/2 -translate-y-1/2", n.iconSmall, "text-muted-foreground/50") })
    ] }) }) }),
    /* @__PURE__ */ t(
      A,
      {
        align: "start",
        sideOffset: 5,
        className: u(n.dropdownPadding, "min-w-[var(--radix-popover-trigger-width)] bg-popover border border-border rounded-md shadow-lg"),
        onOpenAutoFocus: (m) => m.preventDefault(),
        children: /* @__PURE__ */ t("div", { className: "max-h-40 overflow-auto", children: S.map((m) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: u(
              n.dropdownItem,
              "text-left",
              m === e ? n.dropdownSelected : n.dropdownUnselected
            ),
            onMouseDown: (v) => v.preventDefault(),
            onClick: () => C(m),
            title: m,
            children: /* @__PURE__ */ t("span", { className: "block truncate", children: m })
          },
          m
        )) })
      }
    )
  ] });
}
function et({
  className: e,
  defaultValue: r,
  value: o,
  min: a = 0,
  max: i = 100,
  ...s
}) {
  const d = Ue.useMemo(
    () => Array.isArray(o) ? o : Array.isArray(r) ? r : [a, i],
    [o, r, a, i]
  );
  return /* @__PURE__ */ l(
    le.Root,
    {
      "data-slot": "slider",
      defaultValue: r,
      value: o,
      min: a,
      max: i,
      className: u(
        "data-vertical:min-h-40 relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:w-auto data-vertical:flex-col",
        e
      ),
      ...s,
      children: [
        /* @__PURE__ */ t(
          le.Track,
          {
            "data-slot": "slider-track",
            className: "bg-muted rounded-none data-horizontal:h-1 data-horizontal:w-full data-vertical:h-full data-vertical:w-1 bg-muted relative grow overflow-hidden data-horizontal:w-full data-vertical:h-full",
            children: /* @__PURE__ */ t(
              le.Range,
              {
                "data-slot": "slider-range",
                className: "bg-primary absolute select-none data-horizontal:h-full data-vertical:w-full"
              }
            )
          }
        ),
        Array.from({ length: d.length }, (g, f) => /* @__PURE__ */ t(
          le.Thumb,
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
function St({
  value: e,
  onChange: r,
  placeholder: o = "0",
  disabled: a = !1,
  className: i,
  variant: s = "input",
  min: d = 0,
  max: g = 100,
  step: f = 1
}) {
  const [c, h] = E(String(e));
  return M(() => {
    h(String(e));
  }, [e]), s === "slider" ? /* @__PURE__ */ l("div", { className: u("flex items-center gap-3 flex-1", i), children: [
    /* @__PURE__ */ t(
      et,
      {
        value: [e],
        onValueChange: (S) => r(S[0]),
        min: d,
        max: g,
        step: f,
        disabled: a,
        className: "flex-1"
      }
    ),
    /* @__PURE__ */ t("span", { className: u(n.text, "font-mono text-muted-foreground w-10 text-right"), children: e })
  ] }) : /* @__PURE__ */ t(
    ge,
    {
      type: "text",
      inputMode: "decimal",
      value: c,
      onChange: (S) => {
        const k = S.target.value;
        h(k);
        const C = parseFloat(k);
        isNaN(C) ? (k === "" || k === "-") && r(0) : r(C);
      },
      onBlur: () => {
        const S = parseFloat(c);
        isNaN(S) ? (h("0"), r(0)) : h(String(S));
      },
      placeholder: o,
      disabled: a,
      className: u(
        n.height,
        n.text,
        "flex-1",
        n.bg,
        "border-transparent",
        n.borderHover,
        n.borderFocus,
        "focus:bg-background",
        n.transition,
        "font-mono",
        i
      )
    }
  );
}
function Ct({
  value: e,
  onChange: r,
  label: o = "Edit JSON",
  disabled: a = !1,
  suggestions: i = []
}) {
  const [s, d] = E(!1), [g, f] = E(""), [c, h] = E(null), p = W(null), y = typeof e == "object" ? JSON.stringify(e, null, 2) : typeof e == "string" ? e : "";
  M(() => {
    s && (f(y), h(null));
  }, [s, y]), M(() => () => {
    p.current?.dispose();
  }, []);
  const S = (N, x) => {
    if (p.current?.dispose(), i.length === 0) return;
    const m = N.getModel()?.getLanguageId() ?? "json";
    p.current = x.languages.registerCompletionItemProvider(m, {
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
  }, k = (N) => {
    const x = N || "";
    f(x);
    try {
      JSON.parse(x), h(null);
    } catch (w) {
      h(w.message);
    }
  }, C = () => {
    try {
      const N = JSON.parse(g);
      r(N), d(!1);
    } catch (N) {
      h(N.message);
    }
  }, I = y.split(`
`).length, z = c === null;
  return /* @__PURE__ */ l(Ke, { open: s, onOpenChange: (N) => !a && d(N), children: [
    /* @__PURE__ */ t(Qe, { asChild: !0, children: /* @__PURE__ */ l(
      "button",
      {
        disabled: a,
        className: u(
          n.triggerButton,
          n.triggerButtonDisabled
        ),
        children: [
          /* @__PURE__ */ l("span", { className: "flex items-center gap-1.5 text-muted-foreground", children: [
            /* @__PURE__ */ t(je, { className: n.iconSize }),
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
      Ze,
      {
        className: "p-0 gap-0 flex flex-col overflow-hidden",
        style: {
          width: "calc(100vw - 120px)",
          maxWidth: "800px",
          height: "calc(100vh - 120px)",
          maxHeight: "600px"
        },
        children: [
          /* @__PURE__ */ t(qe, { className: "px-4 py-3 flex-shrink-0 bg-muted/50 border-b border-border", children: /* @__PURE__ */ l(Xe, { className: "flex items-center gap-2 text-sm font-medium", children: [
            /* @__PURE__ */ t(je, { className: "h-4 w-4 text-primary" }),
            o
          ] }) }),
          /* @__PURE__ */ t("div", { className: "flex-1 min-h-0 bg-background", children: /* @__PURE__ */ t(
            Je,
            {
              height: "100%",
              defaultLanguage: "json",
              value: g,
              onChange: k,
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
            /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: c ? /* @__PURE__ */ l(fe, { children: [
              /* @__PURE__ */ t("div", { className: "h-2 w-2 rounded-full bg-destructive" }),
              /* @__PURE__ */ t("p", { className: "text-xs text-destructive truncate max-w-[300px]", children: c })
            ] }) : /* @__PURE__ */ l(fe, { children: [
              /* @__PURE__ */ t("div", { className: "h-2 w-2 rounded-full bg-primary" }),
              /* @__PURE__ */ t("span", { className: "text-xs text-muted-foreground", children: "Valid JSON" })
            ] }) }),
            /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ t(
                he,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => d(!1),
                  className: "h-7 px-3 text-xs",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ l(
                he,
                {
                  size: "sm",
                  onClick: C,
                  disabled: !z,
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
const ce = {
  null: { label: "Null", icon: dt, default: null },
  string: { label: "String", icon: ye, default: "" },
  number: { label: "Number", icon: Ne, default: 0 },
  boolean: { label: "Boolean", icon: ct, default: !1 },
  object: { label: "Object", icon: lt, default: {} }
};
function It(e) {
  return e == null ? "null" : typeof e == "string" ? "string" : typeof e == "number" ? "number" : typeof e == "boolean" ? "boolean" : typeof e == "object" ? "object" : "null";
}
function mn({
  value: e,
  onChange: r,
  allowedTypes: o = ["null", "string", "number", "boolean", "object"],
  disabled: a = !1
}) {
  const [i, s] = E(!1), d = U(() => It(e), [e]), g = (h) => {
    if (h === d) {
      s(!1);
      return;
    }
    r(ce[h].default), s(!1);
  }, f = ce[d].icon, c = () => {
    switch (d) {
      case "null":
        return /* @__PURE__ */ t("div", { className: u("flex-1 flex items-center px-3 italic text-muted-foreground", n.height, n.text, n.bg), children: "null" });
      case "string":
        return /* @__PURE__ */ t(
          Ye,
          {
            value: e,
            onChange: r,
            placeholder: "Enter text...",
            disabled: a,
            className: "flex-1"
          }
        );
      case "number":
        return /* @__PURE__ */ t(
          St,
          {
            value: e,
            onChange: r,
            disabled: a,
            className: "flex-1"
          }
        );
      case "boolean":
        return /* @__PURE__ */ t("div", { className: "flex-1 flex items-center", children: /* @__PURE__ */ t(
          Nt,
          {
            variant: "radio",
            value: e,
            onChange: r,
            disabled: a
          }
        ) });
      case "object":
        return /* @__PURE__ */ t(
          Ct,
          {
            value: e,
            onChange: (h) => r(h),
            disabled: a,
            label: "Edit Object"
          }
        );
      default:
        return null;
    }
  };
  return /* @__PURE__ */ l("div", { className: u(
    "flex flex-1 items-center gap-2",
    a && "opacity-50"
  ), children: [
    /* @__PURE__ */ l(H, { open: i, onOpenChange: s, children: [
      /* @__PURE__ */ t(ne, { asChild: !0, children: /* @__PURE__ */ l(
        "button",
        {
          disabled: a,
          className: u(
            n.iconTrigger,
            a && "cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ t(f, { className: "h-4 w-4" }),
            /* @__PURE__ */ t(Q, { className: n.chevron })
          ]
        }
      ) }),
      /* @__PURE__ */ t(A, { align: "start", className: u("w-36", n.dropdownPadding, n.dropdownGap), children: o.map((h) => {
        const p = ce[h].icon, y = h === d;
        return /* @__PURE__ */ l(
          "button",
          {
            onClick: () => g(h),
            className: u(
              n.dropdownItem,
              y ? n.dropdownSelected : n.dropdownUnselected
            ),
            children: [
              /* @__PURE__ */ t(p, { className: n.iconSize }),
              /* @__PURE__ */ t("span", { className: "flex-1 text-left", children: ce[h].label })
            ]
          },
          h
        );
      }) })
    ] }),
    c()
  ] });
}
function kt({
  ...e
}) {
  return /* @__PURE__ */ t(F.Root, { "data-slot": "select", ...e });
}
function zt({
  ...e
}) {
  return /* @__PURE__ */ t(F.Value, { "data-slot": "select-value", ...e });
}
function Ot({
  className: e,
  size: r = "default",
  children: o,
  ...a
}) {
  return /* @__PURE__ */ l(
    F.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": r,
      className: u(
        "border-input data-[placeholder]:text-muted-foreground dark:bg-input/30 dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 gap-1.5 rounded-none border bg-transparent py-2 pr-2 pl-2.5 text-xs transition-colors select-none focus-visible:ring-1 aria-invalid:ring-1 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-none *:data-[slot=select-value]:flex *:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 flex w-fit items-center justify-between whitespace-nowrap outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
        e
      ),
      ...a,
      children: [
        o,
        /* @__PURE__ */ t(F.Icon, { asChild: !0, children: /* @__PURE__ */ t(Ge, { className: "text-muted-foreground size-4 pointer-events-none" }) })
      ]
    }
  );
}
function Tt({
  className: e,
  children: r,
  position: o = "item-aligned",
  align: a = "center",
  ...i
}) {
  return /* @__PURE__ */ t(F.Portal, { children: /* @__PURE__ */ l(
    F.Content,
    {
      "data-slot": "select-content",
      className: u("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 min-w-36 rounded-none shadow-md ring-1 duration-100 relative z-50 max-h-(--radix-select-content-available-height) origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto", o === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
      position: o,
      align: a,
      ...i,
      children: [
        /* @__PURE__ */ t(Et, {}),
        /* @__PURE__ */ t(
          F.Viewport,
          {
            "data-position": o,
            className: u(
              "data-[position=popper]:h-[var(--radix-select-trigger-height)] data-[position=popper]:w-full data-[position=popper]:min-w-[var(--radix-select-trigger-width)]",
              o === "popper" && ""
            ),
            children: r
          }
        ),
        /* @__PURE__ */ t(Bt, {})
      ]
    }
  ) });
}
function Pt({
  className: e,
  children: r,
  ...o
}) {
  return /* @__PURE__ */ l(
    F.Item,
    {
      "data-slot": "select-item",
      className: u(
        "focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground gap-2 rounded-none py-2 pr-8 pl-2 text-xs [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 relative flex w-full cursor-default items-center outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        e
      ),
      ...o,
      children: [
        /* @__PURE__ */ t("span", { className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center", children: /* @__PURE__ */ t(F.ItemIndicator, { children: /* @__PURE__ */ t($e, { className: "pointer-events-none" }) }) }),
        /* @__PURE__ */ t(F.ItemText, { children: r })
      ]
    }
  );
}
function Et({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    F.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: u("bg-popover z-10 flex cursor-default items-center justify-center py-1 [&_svg:not([class*='size-'])]:size-4", e),
      ...r,
      children: /* @__PURE__ */ t(
        ut,
        {}
      )
    }
  );
}
function Bt({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    F.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: u("bg-popover z-10 flex cursor-default items-center justify-center py-1 [&_svg:not([class*='size-'])]:size-4", e),
      ...r,
      children: /* @__PURE__ */ t(
        Ge,
        {}
      )
    }
  );
}
function pn({
  value: e,
  onChange: r,
  options: o,
  variant: a,
  buttonDisplay: i = "text",
  maxInline: s,
  placeholder: d = "Select...",
  dropdownTitle: g,
  iconTrigger: f,
  disabled: c = !1,
  borderless: h = !1
}) {
  const [p, y] = E(!1), [S, k] = E(!1), C = D(
    (v) => {
      c || r(v);
    },
    [r, c]
  );
  if ((a ?? (o.length > 5 ? "dropdown" : "buttons")) === "dropdown")
    return f ? /* @__PURE__ */ l(H, { open: S, onOpenChange: k, children: [
      /* @__PURE__ */ t(ne, { asChild: !0, children: /* @__PURE__ */ l(
        "button",
        {
          disabled: c,
          className: u(
            n.iconTrigger,
            h && "bg-transparent border-transparent hover:bg-muted/30",
            c && n.disabledContainer
          ),
          children: [
            /* @__PURE__ */ t(f, { className: "h-4 w-4" }),
            /* @__PURE__ */ t(Q, { className: n.chevron })
          ]
        }
      ) }),
      /* @__PURE__ */ l(A, { align: "start", className: u("w-48", n.dropdownPadding, n.dropdownGap), children: [
        g && /* @__PURE__ */ t("div", { className: u(n.dropdownHeader, "mb-1"), children: g }),
        o.map((v) => {
          const T = v.icon, V = e === v.value;
          return /* @__PURE__ */ l(
            "button",
            {
              onClick: () => {
                C(v.value), k(!1);
              },
              className: u(
                n.dropdownItem,
                V ? n.dropdownSelected : n.dropdownUnselected
              ),
              children: [
                T && /* @__PURE__ */ t(T, { className: n.iconSize }),
                /* @__PURE__ */ t("span", { className: "flex-1 text-left", children: v.label }),
                V && /* @__PURE__ */ t(Y, { className: n.iconSize })
              ]
            },
            v.value
          );
        })
      ] })
    ] }) : /* @__PURE__ */ l(kt, { value: e || "", onValueChange: C, disabled: c, children: [
      /* @__PURE__ */ t(Ot, { size: "sm", className: u(n.text, n.bg, "border-transparent", n.borderHover, n.borderFocus, n.transition), children: /* @__PURE__ */ t(zt, { placeholder: d }) }),
      /* @__PURE__ */ l(Tt, { children: [
        g && /* @__PURE__ */ t("div", { className: u(n.dropdownHeader, "mb-1"), children: g }),
        o.map((v) => {
          const T = v.icon;
          return /* @__PURE__ */ t(Pt, { value: v.value, className: n.text, children: /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
            T && /* @__PURE__ */ t(T, { className: n.iconSize }),
            v.label
          ] }) }, v.value);
        })
      ] })
    ] });
  const z = s !== void 0 && o.length > s, N = z ? o.slice(0, s - 1) : o, x = z ? o.slice(s - 1) : [], w = x.find((v) => v.value === e), m = (v, T, V) => {
    const j = e === v.value, P = v.icon, b = P && (i === "icon" || i === "both"), O = i === "text" || i === "both", B = /* @__PURE__ */ l(
      "button",
      {
        onClick: () => C(v.value),
        disabled: c,
        className: u(
          n.buttonGroupItem,
          T && "rounded-l-md",
          V && !z && "rounded-r-md",
          !T && !V && "rounded-none",
          j ? n.buttonSelected : n.buttonUnselected,
          c && n.disabledContainer
        ),
        children: [
          b && /* @__PURE__ */ t(P, { className: n.iconSize }),
          O && /* @__PURE__ */ t("span", { className: "truncate", children: v.label })
        ]
      },
      v.value
    ), L = v.hoverText || (i === "icon" ? v.label : void 0);
    return L && !c ? /* @__PURE__ */ t(Ie, { delayDuration: 200, children: /* @__PURE__ */ l(ke, { children: [
      /* @__PURE__ */ t(ze, { asChild: !0, children: B }),
      /* @__PURE__ */ t(Oe, { side: "bottom", className: "text-xs", children: L })
    ] }) }, v.value) : B;
  };
  return /* @__PURE__ */ l("div", { className: u(
    n.buttonGroupContainer,
    h && "bg-transparent border-transparent",
    c && "opacity-50"
  ), children: [
    N.map(
      (v, T) => m(v, T === 0, T === N.length - 1)
    ),
    z && /* @__PURE__ */ l(H, { open: p, onOpenChange: y, children: [
      /* @__PURE__ */ t(ne, { asChild: !0, children: /* @__PURE__ */ l(
        "button",
        {
          disabled: c,
          className: u(
            n.buttonGroupItem,
            "rounded-r-md",
            w ? n.buttonSelected : n.buttonUnselected,
            c && "cursor-not-allowed"
          ),
          children: [
            w ? /* @__PURE__ */ l(fe, { children: [
              w.icon && i !== "text" && /* @__PURE__ */ t(w.icon, { className: n.iconSize }),
              i !== "icon" && /* @__PURE__ */ t("span", { className: "truncate", children: w.label })
            ] }) : /* @__PURE__ */ t("span", { children: "More" }),
            /* @__PURE__ */ t(Q, { className: n.iconSmall })
          ]
        }
      ) }),
      /* @__PURE__ */ t(A, { align: "end", className: u("w-44", n.dropdownPadding, n.dropdownGap), children: x.map((v) => {
        const T = v.icon, V = e === v.value;
        return /* @__PURE__ */ l(
          "button",
          {
            onClick: () => {
              C(v.value), y(!1);
            },
            className: u(
              n.dropdownItem,
              V ? n.dropdownSelected : n.dropdownUnselected
            ),
            children: [
              T && /* @__PURE__ */ t(T, { className: n.iconSize }),
              /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", children: v.label }),
              V && /* @__PURE__ */ t(Y, { className: n.iconSize })
            ]
          },
          v.value
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
function jt(e, r) {
  const [o, a] = E(r === "rtl");
  return Ce(() => {
    e && (r || a(Vt(e)));
  }, [r, e]), o;
}
const me = typeof window < "u" ? Ce : M;
function De(e) {
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
  defaultWidth: o,
  disabled: a,
  element: i,
  mode: s,
  style: d
}) {
  const { styleHeight: g, styleWidth: f } = U(
    () => ({
      styleHeight: De(d?.height),
      styleWidth: De(d?.width)
    }),
    [d?.height, d?.width]
  ), [c, h] = E({
    height: r,
    width: o
  }), p = a || s === "only-height" && g !== void 0 || s === "only-width" && f !== void 0 || g !== void 0 && f !== void 0;
  return me(() => {
    if (i === null || p)
      return;
    const y = new ResizeObserver((S) => {
      for (const k of S) {
        const { contentRect: C, target: I } = k;
        i === I && h((z) => z.height === C.height && z.width === C.width ? z : {
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
function Rt(e) {
  const r = W(() => {
    throw new Error("Cannot call during render.");
  });
  return me(() => {
    r.current = e;
  }, [e]), D((o) => r.current?.(o), [r]);
}
let te = null;
function Mt(e = !1) {
  if (te === null || e) {
    const r = document.createElement("div"), o = r.style;
    o.width = "50px", o.height = "50px", o.overflow = "scroll", o.direction = "rtl";
    const a = document.createElement("div"), i = a.style;
    return i.width = "100px", i.height = "100px", r.appendChild(a), document.body.appendChild(r), r.scrollLeft > 0 ? te = "positive-descending" : (r.scrollLeft = 1, r.scrollLeft === 0 ? te = "negative" : te = "positive-ascending"), document.body.removeChild(r), te;
  }
  return te;
}
function be({
  containerElement: e,
  direction: r,
  isRtl: o,
  scrollOffset: a
}) {
  if (r === "horizontal" && o)
    switch (Mt()) {
      case "negative":
        return -a;
      case "positive-descending": {
        if (e) {
          const { clientWidth: i, scrollLeft: s, scrollWidth: d } = e;
          return d - i - s;
        }
        break;
      }
    }
  return a;
}
function Z(e, r = "Assertion error") {
  if (!e)
    throw console.error(r), Error(r);
}
function ae(e, r) {
  if (e === r)
    return !0;
  if (!!e != !!r || (Z(e !== void 0), Z(r !== void 0), Object.keys(e).length !== Object.keys(r).length))
    return !1;
  for (const o in e)
    if (!Object.is(r[o], e[o]))
      return !1;
  return !0;
}
function tt({
  cachedBounds: e,
  itemCount: r,
  itemSize: o
}) {
  if (r === 0)
    return 0;
  if (typeof o == "number")
    return r * o;
  {
    const a = e.get(
      e.size === 0 ? 0 : e.size - 1
    );
    Z(a !== void 0, "Unexpected bounds cache miss");
    const i = (a.scrollOffset + a.size) / e.size;
    return r * i;
  }
}
function Ft({
  align: e,
  cachedBounds: r,
  index: o,
  itemCount: a,
  itemSize: i,
  containerScrollOffset: s,
  containerSize: d
}) {
  if (o < 0 || o >= a)
    throw RangeError(`Invalid index specified: ${o}`, {
      cause: `Index ${o} is not within the range of 0 - ${a - 1}`
    });
  const g = tt({
    cachedBounds: r,
    itemCount: a,
    itemSize: i
  }), f = r.get(o), c = Math.max(
    0,
    Math.min(g - d, f.scrollOffset)
  ), h = Math.max(
    0,
    f.scrollOffset - d + f.size
  );
  switch (e === "smart" && (s >= h && s <= c ? e = "auto" : e = "center"), e) {
    case "start":
      return c;
    case "end":
      return h;
    case "center":
      return f.scrollOffset <= d / 2 ? 0 : f.scrollOffset + f.size / 2 >= g - d / 2 ? g - d : f.scrollOffset + f.size / 2 - d / 2;
    default:
      return s >= h && s <= c ? s : s < h ? h : c;
  }
}
function He({
  cachedBounds: e,
  containerScrollOffset: r,
  containerSize: o,
  itemCount: a,
  overscanCount: i
}) {
  const s = a - 1;
  let d = 0, g = -1, f = 0, c = -1, h = 0;
  for (; h < s; ) {
    const p = e.get(h);
    if (p.scrollOffset + p.size > r)
      break;
    h++;
  }
  for (d = h, f = Math.max(0, d - i); h < s; ) {
    const p = e.get(h);
    if (p.scrollOffset + p.size >= r + o)
      break;
    h++;
  }
  return g = Math.min(s, h), c = Math.min(a - 1, g + i), d < 0 && (d = 0, g = -1, f = 0, c = -1), {
    startIndexVisible: d,
    stopIndexVisible: g,
    startIndexOverscan: f,
    stopIndexOverscan: c
  };
}
function Dt({
  itemCount: e,
  itemProps: r,
  itemSize: o
}) {
  const a = /* @__PURE__ */ new Map();
  return {
    get(i) {
      for (Z(i < e, `Invalid index ${i}`); a.size - 1 < i; ) {
        const d = a.size;
        let g;
        switch (typeof o) {
          case "function": {
            g = o(d, r);
            break;
          }
          case "number": {
            g = o;
            break;
          }
        }
        if (d === 0)
          a.set(d, {
            size: g,
            scrollOffset: 0
          });
        else {
          const f = a.get(d - 1);
          Z(
            f !== void 0,
            `Unexpected bounds cache miss for index ${i}`
          ), a.set(d, {
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
  itemProps: r,
  itemSize: o
}) {
  return U(
    () => Dt({
      itemCount: e,
      itemProps: r,
      itemSize: o
    }),
    [e, r, o]
  );
}
function At({
  containerSize: e,
  itemSize: r
}) {
  let o;
  return typeof r === "string" ? (Z(
    r.endsWith("%"),
    `Invalid item size: "${r}"; string values must be percentages (e.g. "100%")`
  ), Z(
    e !== void 0,
    "Container size must be defined if a percentage item size is specified"
  ), o = e * parseInt(r) / 100) : o = r, o;
}
function Ae({
  containerElement: e,
  containerStyle: r,
  defaultContainerSize: o = 0,
  direction: a,
  isRtl: i = !1,
  itemCount: s,
  itemProps: d,
  itemSize: g,
  onResize: f,
  overscanCount: c
}) {
  const [h, p] = E({
    startIndexVisible: 0,
    startIndexOverscan: 0,
    stopIndexVisible: -1,
    stopIndexOverscan: -1
  }), {
    startIndexVisible: y,
    startIndexOverscan: S,
    stopIndexVisible: k,
    stopIndexOverscan: C
  } = {
    startIndexVisible: Math.min(s - 1, h.startIndexVisible),
    startIndexOverscan: Math.min(s - 1, h.startIndexOverscan),
    stopIndexVisible: Math.min(s - 1, h.stopIndexVisible),
    stopIndexOverscan: Math.min(s - 1, h.stopIndexOverscan)
  }, { height: I = o, width: z = o } = Lt({
    defaultHeight: a === "vertical" ? o : void 0,
    defaultWidth: a === "horizontal" ? o : void 0,
    element: e,
    mode: a === "vertical" ? "only-height" : "only-width",
    style: r
  }), N = W({
    height: 0,
    width: 0
  }), x = a === "vertical" ? I : z, w = At({ containerSize: x, itemSize: g });
  Ce(() => {
    if (typeof f == "function") {
      const P = N.current;
      (P.height !== I || P.width !== z) && (f({ height: I, width: z }, { ...P }), P.height = I, P.width = z);
    }
  }, [I, f, z]);
  const m = Ht({
    itemCount: s,
    itemProps: d,
    itemSize: w
  }), v = D(
    (P) => m.get(P),
    [m]
  ), T = D(
    () => tt({
      cachedBounds: m,
      itemCount: s,
      itemSize: w
    }),
    [m, s, w]
  ), V = D(
    (P) => {
      const b = be({
        containerElement: e,
        direction: a,
        isRtl: i,
        scrollOffset: P
      });
      return He({
        cachedBounds: m,
        containerScrollOffset: b,
        containerSize: x,
        itemCount: s,
        overscanCount: c
      });
    },
    [
      m,
      e,
      x,
      a,
      i,
      s,
      c
    ]
  );
  me(() => {
    const P = (a === "vertical" ? e?.scrollTop : e?.scrollLeft) ?? 0;
    p(V(P));
  }, [e, a, V]), me(() => {
    if (!e)
      return;
    const P = () => {
      p((b) => {
        const { scrollLeft: O, scrollTop: B } = e, L = be({
          containerElement: e,
          direction: a,
          isRtl: i,
          scrollOffset: a === "vertical" ? B : O
        }), q = He({
          cachedBounds: m,
          containerScrollOffset: L,
          containerSize: x,
          itemCount: s,
          overscanCount: c
        });
        return ae(q, b) ? b : q;
      });
    };
    return e.addEventListener("scroll", P), () => {
      e.removeEventListener("scroll", P);
    };
  }, [
    m,
    e,
    x,
    a,
    s,
    c
  ]);
  const j = Rt(
    ({
      align: P = "auto",
      containerScrollOffset: b,
      index: O
    }) => {
      let B = Ft({
        align: P,
        cachedBounds: m,
        containerScrollOffset: b,
        containerSize: x,
        index: O,
        itemCount: s,
        itemSize: w
      });
      if (e) {
        if (B = be({
          containerElement: e,
          direction: a,
          isRtl: i,
          scrollOffset: B
        }), typeof e.scrollTo != "function") {
          const L = V(B);
          ae(h, L) || p(L);
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
    stopIndexVisible: k
  };
}
function Wt(e) {
  return U(() => e, Object.values(e));
}
function Ut(e, r) {
  const {
    ariaAttributes: o,
    style: a,
    ...i
  } = e, {
    ariaAttributes: s,
    style: d,
    ...g
  } = r;
  return ae(o, s) && ae(a, d) && ae(i, g);
}
function $t({
  cellComponent: e,
  cellProps: r,
  children: o,
  className: a,
  columnCount: i,
  columnWidth: s,
  defaultHeight: d = 0,
  defaultWidth: g = 0,
  dir: f,
  gridRef: c,
  onCellsRendered: h,
  onResize: p,
  overscanCount: y = 3,
  rowCount: S,
  rowHeight: k,
  style: C,
  tagName: I = "div",
  ...z
}) {
  const N = Wt(r), x = U(
    () => at(e, Ut),
    [e]
  ), [w, m] = E(null), v = jt(w, f), {
    getCellBounds: T,
    getEstimatedSize: V,
    startIndexOverscan: j,
    startIndexVisible: P,
    scrollToIndex: b,
    stopIndexOverscan: O,
    stopIndexVisible: B
  } = Ae({
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
    startIndexVisible: se,
    scrollToIndex: ee,
    stopIndexOverscan: $,
    stopIndexVisible: Pe
  } = Ae({
    containerElement: w,
    containerStyle: C,
    defaultContainerSize: d,
    direction: "vertical",
    itemCount: S,
    itemProps: N,
    itemSize: k,
    onResize: p,
    overscanCount: y
  });
  it(
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
        const re = b({
          align: R,
          containerScrollOffset: w?.scrollLeft ?? 0,
          index: _
        }), ot = ee({
          align: J,
          containerScrollOffset: w?.scrollTop ?? 0,
          index: K
        });
        typeof w?.scrollTo == "function" && w.scrollTo({
          behavior: G,
          left: re,
          top: ot
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
    j >= 0 && O >= 0 && X >= 0 && $ >= 0 && h && h(
      {
        columnStartIndex: P,
        columnStopIndex: B,
        rowStartIndex: se,
        rowStopIndex: Pe
      },
      {
        columnStartIndex: j,
        columnStopIndex: O,
        rowStartIndex: X,
        rowStopIndex: $
      }
    );
  }, [
    h,
    j,
    P,
    O,
    B,
    X,
    se,
    $,
    Pe
  ]);
  const nt = U(() => {
    const G = [];
    if (i > 0 && S > 0)
      for (let R = X; R <= $; R++) {
        const _ = L(R), J = [];
        for (let K = j; K <= O; K++) {
          const re = T(K);
          J.push(
            /* @__PURE__ */ Ee(
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
                  transform: `translate(${v ? -re.scrollOffset : re.scrollOffset}px, ${_.scrollOffset}px)`,
                  height: _.size,
                  width: re.size
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
  ]), rt = /* @__PURE__ */ t(
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
  return Ee(
    I,
    {
      "aria-colcount": i,
      "aria-rowcount": S,
      role: "grid",
      ...z,
      className: a,
      dir: f,
      ref: m,
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
    nt,
    o,
    rt
  );
}
const Te = [
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
], ie = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Set();
let oe = null;
function Gt() {
  return Te;
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
function Jt(e) {
  return Object.keys(e).filter((r) => {
    if (!/^[A-Z]/.test(r) || ["createLucideIcon", "Icon", "IconNode", "LucideIcon"].includes(r)) return !1;
    const a = e[r];
    return typeof a == "function" || typeof a == "object";
  });
}
async function Kt(e) {
  if (ie.has(e))
    return ie.get(e);
  if (Se.has(e))
    return [];
  if (de.has(e))
    return de.get(e);
  const r = (async () => {
    try {
      const o = await _t(e), i = Jt(o).map((s) => pt(e, s));
      return ie.set(e, i), oe = null, i;
    } catch (o) {
      return console.warn(`Failed to enumerate icons in pack "${e}":`, o), Se.add(e), [];
    } finally {
      de.delete(e);
    }
  })();
  return de.set(e, r), r;
}
async function Qt() {
  return oe || (oe = (await Promise.all(
    Te.map((r) => Kt(r))
  )).flat(), oe);
}
function Zt() {
  return ie.size;
}
function qt() {
  return ie.size + Se.size >= Te.length;
}
function Xt(e, r = 150) {
  const [o, a] = E(e), [i, s] = E(!1), [d, g] = E(!0), [f, c] = E([]), [h, p] = E(0), y = W(null);
  return M(() => {
    let k = !0;
    return (async () => {
      g(!0);
      try {
        const I = await Qt();
        k && (c(I), g(!1), p(100));
      } catch (I) {
        console.error("Failed to load icons:", I), k && g(!1);
      }
    })(), () => {
      k = !1;
    };
  }, []), M(() => {
    if (d) {
      const k = setInterval(() => {
        const C = Zt(), I = Gt().length;
        p(Math.round(C / I * 100)), qt() && clearInterval(k);
      }, 100);
      return () => clearInterval(k);
    }
  }, [d]), M(() => (s(!0), y.current && clearTimeout(y.current), y.current = setTimeout(() => {
    a(e), s(!1);
  }, r), () => {
    y.current && clearTimeout(y.current);
  }), [e, r]), {
    results: U(() => {
      if (!o.trim())
        return f.slice(0, 500);
      const k = o.toLowerCase();
      return f.filter((C) => {
        const I = C.indexOf(":");
        return (I !== -1 ? C.slice(I + 1) : C).toLowerCase().includes(k);
      });
    }, [o, f]),
    isSearching: i,
    isLoading: d,
    loadProgress: h,
    totalCount: f.length
  };
}
const Yt = 20, xe = 40, ve = 280, ue = 6;
function gn({
  value: e,
  onChange: r,
  placeholder: o = "Search icons...",
  disabled: a = !1
}) {
  const [i, s] = E(e || ""), [d, g] = E(!1), f = W(null), c = W(null);
  M(() => {
    s(e || "");
  }, [e]);
  const h = i.includes(":") ? i.split(":")[1] || "" : i, { results: p } = Xt(h), y = p.includes(i), S = d && i.length > 0 && !y && p.length > 0, k = (m) => {
    const v = m.target.value;
    s(v), r(v);
  }, C = D((m) => {
    s(m), r(m), g(!1), c.current?.focus();
  }, [r]), [I, z] = E(300);
  M(() => {
    S && f.current && z(f.current.offsetWidth);
  }, [S]);
  const N = Math.floor(I / ue), x = Math.ceil(p.length / ue), w = D(({ columnIndex: m, rowIndex: v, style: T }) => {
    const V = v * ue + m;
    if (V >= p.length)
      return /* @__PURE__ */ t("div", { style: T });
    const j = p[V];
    return /* @__PURE__ */ t("div", { style: T, className: "p-0.5", children: /* @__PURE__ */ t(Ie, { delayDuration: 300, children: /* @__PURE__ */ l(ke, { children: [
      /* @__PURE__ */ t(ze, { asChild: !0, children: /* @__PURE__ */ t(
        "button",
        {
          onMouseDown: (P) => {
            P.preventDefault(), C(j);
          },
          className: u(
            "w-full h-full flex items-center justify-center transition-all rounded-sm",
            n.bg,
            "hover:bg-muted",
            n.border,
            n.borderHover
          ),
          children: /* @__PURE__ */ t(Re, { name: j, size: Yt, className: "text-foreground" })
        }
      ) }),
      /* @__PURE__ */ l(Oe, { side: "bottom", className: "text-xs max-w-[200px] z-[60]", children: [
        /* @__PURE__ */ t("div", { className: "font-medium truncate", children: gt(j) }),
        /* @__PURE__ */ t("div", { className: "text-muted-foreground text-xs", children: bt(j) })
      ] })
    ] }) }) });
  }, [p, C]);
  return /* @__PURE__ */ t("div", { ref: f, className: "flex-1", children: /* @__PURE__ */ l(H, { open: S, modal: !1, children: [
    /* @__PURE__ */ t(pe, { asChild: !0, children: /* @__PURE__ */ l("div", { className: "relative flex-1", children: [
      y && /* @__PURE__ */ t("div", { className: "absolute left-2 top-1/2 -translate-y-1/2 z-10 pointer-events-none", children: /* @__PURE__ */ t(Re, { name: i, size: 14, className: "text-foreground" }) }),
      /* @__PURE__ */ t(
        ge,
        {
          ref: c,
          value: i,
          onChange: k,
          onFocus: () => g(!0),
          onBlur: () => setTimeout(() => g(!1), 150),
          placeholder: o,
          disabled: a,
          className: u(
            n.height,
            n.text,
            "font-mono",
            n.bg,
            "border-transparent",
            n.borderHover,
            n.borderFocus,
            "focus:bg-background",
            n.transition,
            y ? "pl-7 text-foreground" : "text-muted-foreground"
          )
        }
      )
    ] }) }),
    /* @__PURE__ */ l(
      A,
      {
        className: u(n.dropdownPadding, "overflow-hidden"),
        align: "start",
        sideOffset: 5,
        onOpenAutoFocus: (m) => m.preventDefault(),
        style: { width: I },
        children: [
          /* @__PURE__ */ l("div", { className: u(n.dropdownHeader), children: [
            p.length.toLocaleString(),
            " matches"
          ] }),
          /* @__PURE__ */ l(
            "div",
            {
              className: "icon-picker-grid",
              style: { height: Math.min(ve, x * xe) },
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
                  $t,
                  {
                    columnCount: ue,
                    columnWidth: N,
                    defaultHeight: ve,
                    defaultWidth: I,
                    rowCount: x,
                    rowHeight: xe,
                    cellComponent: w,
                    cellProps: {},
                    style: {
                      height: Math.min(ve, x * xe),
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
function bn({
  value: e,
  onChange: r,
  options: o,
  variant: a,
  buttonDisplay: i = "text",
  maxInline: s,
  placeholder: d = "Select...",
  dropdownTitle: g,
  iconTrigger: f,
  disabled: c = !1,
  borderless: h = !1
}) {
  const p = Array.isArray(e) ? e : [], [y, S] = E(!1), [k, C] = E(!1), I = D((b) => p.includes(b), [p]), z = D(
    (b) => {
      c || (p.includes(b) ? r(p.filter((O) => O !== b)) : r([...p, b]));
    },
    [p, r, c]
  ), N = D(
    (b, O) => {
      O.stopPropagation(), !c && r(p.filter((B) => B !== b));
    },
    [p, r, c]
  ), x = D(() => {
    c || r([]);
  }, [r, c]), w = a ?? (o.length > 5 ? "dropdown" : "buttons"), m = o.filter((b) => p.includes(b.value));
  if (w === "dropdown")
    return f ? /* @__PURE__ */ l(H, { open: y, onOpenChange: S, children: [
      /* @__PURE__ */ t(ne, { asChild: !0, children: /* @__PURE__ */ l(
        "button",
        {
          disabled: c,
          className: u(
            n.iconTrigger,
            c && n.disabledContainer
          ),
          children: [
            /* @__PURE__ */ t(f, { className: "h-4 w-4" }),
            m.length > 0 && /* @__PURE__ */ t("span", { className: "min-w-[18px] h-[18px] rounded-full bg-primary text-primary-foreground text-[10px] font-medium flex items-center justify-center", children: m.length }),
            /* @__PURE__ */ t(Q, { className: n.chevron })
          ]
        }
      ) }),
      /* @__PURE__ */ l(A, { align: "start", className: u("w-[220px]", n.dropdownPadding, n.dropdownGap), sideOffset: 4, children: [
        /* @__PURE__ */ l("div", { className: u(n.dropdownHeader, "flex items-center justify-between"), children: [
          /* @__PURE__ */ t("span", { children: g || `${m.length} selected` }),
          m.length > 0 && /* @__PURE__ */ t(
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
              onClick: () => z(b.value),
              className: u(
                n.dropdownItem,
                B ? n.dropdownSelected : n.dropdownUnselected
              ),
              children: [
                /* @__PURE__ */ t("div", { className: u(
                  "h-4 w-4 rounded border flex items-center justify-center shrink-0 transition-colors",
                  B ? "bg-primary border-primary" : "border-border bg-background"
                ), children: B && /* @__PURE__ */ t(Y, { className: n.iconSmall }) }),
                O && /* @__PURE__ */ t(O, { className: n.iconSize }),
                /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", children: b.label })
              ]
            },
            b.value
          );
        }) })
      ] })
    ] }) : /* @__PURE__ */ l(H, { open: y, onOpenChange: S, children: [
      /* @__PURE__ */ t(ne, { asChild: !0, children: /* @__PURE__ */ l(
        "button",
        {
          disabled: c,
          className: u(
            "inline-flex items-center justify-between gap-2 w-full min-w-[180px] px-3",
            n.height,
            n.text,
            n.bg,
            n.border,
            n.borderHover,
            n.borderFocus,
            n.transition,
            c && n.disabledContainer
          ),
          children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5 flex-1 overflow-hidden", children: m.length > 0 ? /* @__PURE__ */ l(fe, { children: [
              m.slice(0, 2).map((b) => /* @__PURE__ */ l(
                Me,
                {
                  variant: "secondary",
                  className: "h-5 px-1.5 text-[10px] font-normal gap-1 shrink-0",
                  children: [
                    b.icon && /* @__PURE__ */ t(b.icon, { className: n.iconSmall }),
                    /* @__PURE__ */ t("span", { className: "truncate max-w-[50px]", children: b.label })
                  ]
                },
                b.value
              )),
              m.length > 2 && /* @__PURE__ */ l("span", { className: "text-muted-foreground text-[10px]", children: [
                "+",
                m.length - 2
              ] })
            ] }) : /* @__PURE__ */ t("span", { className: "text-muted-foreground", children: d }) }),
            /* @__PURE__ */ t(Q, { className: u(n.chevron, "shrink-0") })
          ]
        }
      ) }),
      /* @__PURE__ */ l(A, { align: "start", className: u("w-[220px]", n.dropdownPadding, n.dropdownGap), sideOffset: 4, children: [
        (g || m.length > 0) && /* @__PURE__ */ l("div", { className: u(n.dropdownHeader, "flex items-center justify-between"), children: [
          /* @__PURE__ */ t("span", { children: g || `${m.length} selected` }),
          m.length > 0 && /* @__PURE__ */ t(
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
              onClick: () => z(b.value),
              className: u(
                n.dropdownItem,
                B ? n.dropdownSelected : n.dropdownUnselected
              ),
              children: [
                /* @__PURE__ */ t("div", { className: u(
                  "h-4 w-4 rounded border flex items-center justify-center shrink-0 transition-colors",
                  B ? "bg-primary border-primary" : "border-border bg-background"
                ), children: B && /* @__PURE__ */ t(Y, { className: n.iconSmall }) }),
                O && /* @__PURE__ */ t(O, { className: n.iconSize }),
                /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", children: b.label })
              ]
            },
            b.value
          );
        }) }),
        m.length > 0 && /* @__PURE__ */ t("div", { className: "border-t border-border p-2", children: /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-1", children: m.map((b) => /* @__PURE__ */ l(
          Me,
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
                  children: /* @__PURE__ */ t(_e, { className: "h-3 w-3" })
                }
              )
            ]
          },
          b.value
        )) }) })
      ] })
    ] });
  const v = s !== void 0 && o.length > s, T = v ? o.slice(0, s - 1) : o, V = v ? o.slice(s - 1) : [], j = V.filter((b) => p.includes(b.value)), P = (b, O, B) => {
    const L = I(b.value), q = b.icon, X = q && (i === "icon" || i === "both"), se = i === "text" || i === "both", ee = /* @__PURE__ */ l(
      "button",
      {
        onClick: () => z(b.value),
        disabled: c,
        className: u(
          n.buttonGroupItem,
          O && "rounded-l-md",
          B && !v && "rounded-r-md",
          !O && !B && "rounded-none",
          L ? n.buttonSelected : n.buttonUnselected,
          c && n.disabledContainer
        ),
        children: [
          X && /* @__PURE__ */ t(q, { className: n.iconSize }),
          se && /* @__PURE__ */ t("span", { className: "truncate", children: b.label })
        ]
      },
      b.value
    ), $ = b.hoverText || (i === "icon" ? b.label : void 0);
    return $ && !c ? /* @__PURE__ */ t(Ie, { delayDuration: 200, children: /* @__PURE__ */ l(ke, { children: [
      /* @__PURE__ */ t(ze, { asChild: !0, children: ee }),
      /* @__PURE__ */ t(Oe, { side: "bottom", className: "text-xs", children: $ })
    ] }) }, b.value) : ee;
  };
  return /* @__PURE__ */ l("div", { className: u(
    n.buttonGroupContainer,
    h && "bg-transparent border-transparent",
    c && "opacity-50"
  ), children: [
    T.map(
      (b, O) => P(b, O === 0, O === T.length - 1)
    ),
    v && /* @__PURE__ */ l(H, { open: k, onOpenChange: C, children: [
      /* @__PURE__ */ t(ne, { asChild: !0, children: /* @__PURE__ */ l(
        "button",
        {
          disabled: c,
          className: u(
            n.buttonGroupItem,
            "rounded-r-md",
            j.length > 0 ? n.buttonSelected : n.buttonUnselected,
            c && "cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ t("span", { children: j.length > 0 ? `+${j.length}` : "More" }),
            /* @__PURE__ */ t(Q, { className: n.iconSmall })
          ]
        }
      ) }),
      /* @__PURE__ */ t(A, { align: "end", className: u("w-44", n.dropdownPadding, n.dropdownGap), children: V.map((b) => {
        const O = b.icon, B = I(b.value);
        return /* @__PURE__ */ l(
          "button",
          {
            onClick: () => z(b.value),
            className: u(
              n.dropdownItem,
              B ? n.dropdownSelected : n.dropdownUnselected
            ),
            children: [
              O && /* @__PURE__ */ t(O, { className: n.iconSize }),
              /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", children: b.label }),
              B && /* @__PURE__ */ t(Y, { className: n.iconSize })
            ]
          },
          b.value
        );
      }) })
    ] })
  ] });
}
function xn({
  value: e,
  onChange: r,
  min: o = 0,
  max: a = 100,
  step: i = 1,
  disabled: s = !1,
  className: d,
  variant: g = "stepper"
}) {
  if (g === "slider")
    return /* @__PURE__ */ l("div", { className: u("flex items-center gap-3 flex-1", d), children: [
      /* @__PURE__ */ t(
        et,
        {
          value: [e],
          onValueChange: (p) => r(p[0]),
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
    (a === void 0 || p <= a) && r(p);
  }, c = () => {
    if (s) return;
    const p = e - i;
    (o === void 0 || p >= o) && r(p);
  }, h = (p) => {
    const y = parseInt(p.target.value, 10);
    if (!isNaN(y)) {
      let S = y;
      o !== void 0 && (S = Math.max(o, S)), a !== void 0 && (S = Math.min(a, S)), r(S);
    }
  };
  return /* @__PURE__ */ l("div", { className: u("flex items-center gap-0.5 flex-1", d), children: [
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        onClick: c,
        disabled: s || o !== void 0 && e <= o,
        className: u(n.height, "w-7 flex items-center justify-center", n.bg, "hover:bg-muted", n.disabled, n.transition),
        children: /* @__PURE__ */ t(ft, { className: n.iconSmall })
      }
    ),
    /* @__PURE__ */ t(
      ge,
      {
        type: "number",
        value: e,
        min: o,
        max: a,
        step: i,
        disabled: s,
        onChange: h,
        className: u(n.height, "text-center", n.text, n.bg, "border-transparent", n.borderHover, n.borderFocus, "focus:bg-background", n.transition, "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none")
      }
    ),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        onClick: f,
        disabled: s || a !== void 0 && e >= a,
        className: u(n.height, "w-7 flex items-center justify-center", n.bg, "hover:bg-muted", n.disabled, n.transition),
        children: /* @__PURE__ */ t(ht, { className: n.iconSmall })
      }
    )
  ] });
}
function en({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    "textarea",
    {
      "data-slot": "textarea",
      className: u(
        "border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 rounded-none border bg-transparent px-2.5 py-2 text-xs transition-colors focus-visible:ring-1 aria-invalid:ring-1 md:text-xs placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...r
    }
  );
}
function tn(e) {
  const r = e.split(/\s+/);
  return r[r.length - 1] || "";
}
function vn({
  value: e,
  onChange: r,
  suggestions: o = [],
  noRing: a = !1,
  noResize: i = !1,
  autoGrow: s = !0,
  className: d,
  ...g
}) {
  const [f, c] = E(!1), h = W(null), p = tn(e), y = p ? o.filter((N) => N.toLowerCase().includes(p.toLowerCase())) : o, S = (N) => {
    const x = N.target.value;
    r(x), o.length > 0 && c(!0);
  }, k = (N) => {
    const x = e.split(/\s+/);
    x[x.length - 1] = N, r(x.join(" ")), c(!1), h.current?.focus();
  }, C = (N) => {
    o.length > 0 && c(!0), g.onFocus?.(N);
  }, I = (N) => {
    setTimeout(() => c(!1), 150), g.onBlur?.(N);
  }, z = o.length > 0;
  return /* @__PURE__ */ l(H, { open: f && y.length > 0, onOpenChange: c, modal: !1, children: [
    /* @__PURE__ */ t(pe, { asChild: !0, children: /* @__PURE__ */ t("div", { className: "relative flex-1", children: /* @__PURE__ */ l("div", { className: "relative", children: [
      /* @__PURE__ */ t(
        en,
        {
          ref: h,
          value: e,
          onChange: S,
          onFocus: C,
          onBlur: I,
          className: u(
            "min-h-[60px]",
            n.text,
            n.bg,
            "border-transparent",
            n.borderHover,
            n.borderFocus,
            "focus:bg-background",
            n.transition,
            n.placeholder,
            "scrollbar-none",
            z && "pr-6",
            a && "focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-border",
            i ? "resize-none" : "resize-y",
            !s && "field-sizing-fixed",
            d
          ),
          ...g
        }
      ),
      z && /* @__PURE__ */ t(Q, { className: u("absolute right-2 top-3", n.iconSmall, "text-muted-foreground/50") })
    ] }) }) }),
    /* @__PURE__ */ t(
      A,
      {
        align: "start",
        sideOffset: 5,
        className: u(n.dropdownPadding, "min-w-[var(--radix-popover-trigger-width)] bg-popover border border-border rounded-md shadow-lg"),
        onOpenAutoFocus: (N) => N.preventDefault(),
        children: /* @__PURE__ */ t("div", { className: "max-h-40 overflow-auto", children: y.map((N) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: u(
              n.dropdownItem,
              "text-left",
              N === e ? n.dropdownSelected : n.dropdownUnselected
            ),
            onMouseDown: (x) => x.preventDefault(),
            onClick: () => k(N),
            title: N,
            children: /* @__PURE__ */ t("span", { className: "block truncate", children: N })
          },
          N
        )) })
      }
    )
  ] });
}
function wn({
  value: e,
  onChange: r,
  label: o = "Edit Python",
  disabled: a = !1,
  suggestions: i = []
}) {
  const [s, d] = E(!1), [g, f] = E(""), c = W(null), h = typeof e == "string" ? e : "";
  M(() => {
    s && f(h);
  }, [s, h]), M(() => () => {
    c.current?.dispose();
  }, []);
  const p = (C, I) => {
    c.current?.dispose(), i.length !== 0 && (c.current = I.languages.registerCompletionItemProvider("python", {
      provideCompletionItems: (z, N) => {
        const x = z.getWordUntilPosition(N), w = {
          startLineNumber: N.lineNumber,
          endLineNumber: N.lineNumber,
          startColumn: x.startColumn,
          endColumn: x.endColumn
        };
        return {
          suggestions: i.map((m, v) => ({
            label: m,
            kind: I.languages.CompletionItemKind.Text,
            insertText: m,
            range: w,
            sortText: String(v).padStart(5, "0")
          }))
        };
      }
    }));
  }, y = (C) => {
    f(C || "");
  }, S = () => {
    r(g), d(!1);
  }, k = h.split(`
`).length;
  return /* @__PURE__ */ l(Ke, { open: s, onOpenChange: (C) => !a && d(C), children: [
    /* @__PURE__ */ t(Qe, { asChild: !0, children: /* @__PURE__ */ l(
      "button",
      {
        disabled: a,
        className: u(
          n.triggerButton,
          n.triggerButtonDisabled
        ),
        children: [
          /* @__PURE__ */ l("span", { className: "flex items-center gap-1.5 text-muted-foreground", children: [
            /* @__PURE__ */ t(Le, { className: n.iconSize }),
            /* @__PURE__ */ t("span", { children: o })
          ] }),
          /* @__PURE__ */ l("span", { className: "text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground", children: [
            k,
            " lines"
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ l(
      Ze,
      {
        className: "p-0 gap-0 flex flex-col overflow-hidden",
        style: {
          width: "calc(100vw - 120px)",
          maxWidth: "800px",
          height: "calc(100vh - 120px)",
          maxHeight: "600px"
        },
        children: [
          /* @__PURE__ */ t(qe, { className: "px-4 py-3 flex-shrink-0 bg-muted/50 border-b border-border", children: /* @__PURE__ */ l(Xe, { className: "flex items-center gap-2 text-sm font-medium", children: [
            /* @__PURE__ */ t(Le, { className: "h-4 w-4 text-primary" }),
            o
          ] }) }),
          /* @__PURE__ */ t("div", { className: "flex-1 min-h-0 bg-background", children: /* @__PURE__ */ t(
            Je,
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
                  onClick: () => d(!1),
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
function We(e) {
  const r = e.trim();
  if (!r.startsWith("[") || !r.endsWith("]")) return null;
  try {
    const o = JSON.parse(r);
    return !Array.isArray(o) || !o.every(
      (i) => typeof i == "string" || typeof i == "number"
    ) ? null : o;
  } catch {
    return null;
  }
}
function Nn({
  value: e,
  onChange: r,
  placeholder: o = "Type and press Enter...",
  disabled: a = !1,
  className: i
}) {
  const [s, d] = E(""), [g, f] = E(!1), [c, h] = E(""), p = W(null), y = (x) => {
    r([...e, x]), d(""), f(!1), h("");
  }, S = (x) => {
    r([...e, ...x]), d(""), f(!1), h("");
  }, k = (x) => {
    a || r(e.filter((w, m) => m !== x));
  }, C = (x) => {
    const w = x.clipboardData.getData("text"), m = We(w);
    m && m.length > 0 && (x.preventDefault(), S(m));
  }, I = (x) => {
    const w = s.trim();
    if (x.key === "Enter" && w) {
      x.preventDefault();
      const m = We(w);
      if (m && m.length > 0) {
        S(m);
        return;
      }
      /^\d+$/.test(w) ? (h(w), f(!0), d("")) : y(w);
    }
    x.key === "Backspace" && !s && e.length > 0 && k(e.length - 1), x.key === "Escape" && g && (f(!1), h(""));
  }, z = () => {
    y(c);
  }, N = () => {
    y(parseInt(c, 10));
  };
  return /* @__PURE__ */ l(H, { open: g, onOpenChange: (x) => !x && f(!1), modal: !1, children: [
    /* @__PURE__ */ t(pe, { asChild: !0, children: /* @__PURE__ */ t("div", { className: u("relative flex-1", i), children: /* @__PURE__ */ l(
      "div",
      {
        className: u(
          "flex flex-wrap items-center gap-1.5 min-h-7 px-2 py-1",
          n.bg,
          n.border,
          n.transition,
          n.borderFocusWithin,
          !a && n.borderHover,
          a && n.disabledContainer
        ),
        onClick: () => p.current?.focus(),
        children: [
          e.map((x, w) => /* @__PURE__ */ l(
            "span",
            {
              className: u(
                "inline-flex items-center gap-1 h-5 px-1.5 rounded text-xs font-mono",
                typeof x == "number" ? "bg-primary/20 text-primary" : "bg-accent text-accent-foreground"
              ),
              children: [
                typeof x == "number" ? /* @__PURE__ */ t(Ne, { className: "h-2.5 w-2.5" }) : /* @__PURE__ */ t(ye, { className: "h-2.5 w-2.5" }),
                String(x),
                !a && /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    onClick: (m) => {
                      m.stopPropagation(), k(w);
                    },
                    className: "opacity-50 hover:opacity-100 hover:text-destructive",
                    children: /* @__PURE__ */ t(_e, { className: "h-2.5 w-2.5" })
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
              onChange: (x) => d(x.target.value),
              onKeyDown: I,
              onPaste: C,
              placeholder: e.length === 0 ? o : "",
              className: u("flex-1 min-w-[80px] h-5 bg-transparent outline-none", n.text, n.placeholder)
            }
          )
        ]
      }
    ) }) }),
    /* @__PURE__ */ l(
      A,
      {
        align: "start",
        sideOffset: 5,
        className: u(n.dropdownPadding, n.dropdownGap, "w-auto min-w-[200px]"),
        onOpenAutoFocus: (x) => x.preventDefault(),
        children: [
          /* @__PURE__ */ l("div", { className: u(n.dropdownHeader, "mb-1"), children: [
            'Choose type for "',
            c,
            '"'
          ] }),
          /* @__PURE__ */ l(
            "button",
            {
              type: "button",
              onClick: z,
              className: u(n.dropdownItem, n.dropdownUnselected),
              children: [
                /* @__PURE__ */ t(ye, { className: n.iconSize }),
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
              className: u(n.dropdownItem, n.dropdownUnselected),
              children: [
                /* @__PURE__ */ t(Ne, { className: u(n.iconSize, "text-primary") }),
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
function nn(e) {
  const r = e.trim();
  if (!r) return null;
  try {
    const o = r.match(/^https?:\/\//) ? r : `https://${r}`, i = new URL(o).hostname;
    return i.includes(".") ? i : null;
  } catch {
    return null;
  }
}
function yn({
  value: e,
  onChange: r,
  faviconSize: o = 16,
  className: a,
  ...i
}) {
  const s = U(() => nn(e), [e]), d = s ? `https://www.google.com/s2/favicons?domain=${s}&sz=${o}` : null;
  return /* @__PURE__ */ l("div", { className: u("relative flex items-center flex-1", a), children: [
    /* @__PURE__ */ t("div", { className: "absolute left-2 flex items-center justify-center w-4 h-4 pointer-events-none z-10", children: d ? /* @__PURE__ */ t(
      "img",
      {
        src: d,
        alt: "",
        width: o,
        height: o,
        className: "w-4 h-4 rounded-sm",
        onError: (g) => {
          g.target.style.display = "none";
        }
      }
    ) : /* @__PURE__ */ t(mt, { className: "w-3.5 h-3.5 text-muted-foreground/50" }) }),
    /* @__PURE__ */ t(
      Ye,
      {
        value: e,
        onChange: r,
        className: "pl-7",
        ...i
      }
    )
  ] });
}
export {
  Nt as BooleanInput,
  mn as DynamicInput,
  pn as EnumInput,
  gn as IconInput,
  Nn as JsonPathInput,
  bn as MultiEnumSelect,
  xn as NumberInput,
  St as NumericalInput,
  Ct as ObjectInput,
  wn as PythonInput,
  vn as TextAreaInput,
  Ye as TextInput,
  yn as UrlInput
};
