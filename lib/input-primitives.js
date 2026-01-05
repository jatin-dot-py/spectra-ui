import { jsx as t, jsxs as i, Fragment as fe } from "react/jsx-runtime";
import * as He from "react";
import { useState as j, useRef as $, useEffect as R, useMemo as F, useCallback as A, memo as at, useImperativeHandle as st, createElement as Pe, useLayoutEffect as ke } from "react";
import { RadioGroup as we, Checkbox as Ee, Switch as Ve, Popover as se, Slider as le, Select as M } from "radix-ui";
import { c as v } from "./utils-B6yFEsav.js";
import { CircleIcon as it, CheckIcon as _e, ChevronDown as K, Code2 as Le, Check as X, Braces as lt, ToggleLeft as ct, Hash as Ne, Type as ye, CircleSlash as dt, ChevronDownIcon as Ue, ChevronUpIcon as ut, X as Ge, Minus as ft, Plus as mt, FileCode2 as Be, Globe as ht } from "lucide-react";
import Je from "@monaco-editor/react";
import { B as me } from "./button-DHQhRgTM.js";
import { D as Ke, a as Qe, b as Ze, c as qe, d as Xe } from "./dialog-CDPimJCA.js";
import { T as Ie, a as Se, b as ze, c as Oe } from "./tooltip-Cep25X0w.js";
import { f as pt, A as Re, g as gt, a as xt, B as Me } from "./badge-B1vpNSNG.js";
function bt({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    we.Root,
    {
      "data-slot": "radio-group",
      className: v("grid gap-2 w-full", e),
      ...r
    }
  );
}
function Ae({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    we.Item,
    {
      "data-slot": "radio-group-item",
      className: v(
        "border-input text-primary dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 data-checked:bg-primary data-checked:border-primary flex size-4 rounded-full focus-visible:ring-1 aria-invalid:ring-1 group/radio-group-item peer relative aspect-square shrink-0 border outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...r,
      children: /* @__PURE__ */ t(
        we.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "group-aria-invalid/radio-group-item:text-destructive flex size-4 items-center justify-center text-white",
          children: /* @__PURE__ */ t(it, { className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-current" })
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
            _e,
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
  ...n
}) {
  return /* @__PURE__ */ t(
    Ve.Root,
    {
      "data-slot": "switch",
      "data-size": r,
      className: v(
        "data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 dark:data-unchecked:bg-input/80 shrink-0 rounded-full border border-transparent focus-visible:ring-1 aria-invalid:ring-1 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] peer group/switch relative inline-flex items-center transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 data-disabled:cursor-not-allowed data-disabled:opacity-50",
        e
      ),
      ...n,
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
  className: n,
  variant: o = "checkbox",
  ...a
}) {
  const s = He.useId();
  return o === "switch" ? /* @__PURE__ */ t(
    wt,
    {
      checked: e,
      onCheckedChange: (c) => r(!!c),
      className: n,
      ...a
    }
  ) : o === "radio" ? /* @__PURE__ */ i(
    bt,
    {
      value: e ? "true" : "false",
      onValueChange: (c) => r(c === "true"),
      className: v("flex flex-row gap-4", n),
      ...a,
      children: [
        /* @__PURE__ */ i("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t(Ae, { value: "true", id: `${s}-true` }),
          /* @__PURE__ */ t("label", { htmlFor: `${s}-true`, className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: "True" })
        ] }),
        /* @__PURE__ */ i("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t(Ae, { value: "false", id: `${s}-false` }),
          /* @__PURE__ */ t("label", { htmlFor: `${s}-false`, className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: "False" })
        ] })
      ]
    }
  ) : /* @__PURE__ */ t(
    vt,
    {
      checked: e,
      onCheckedChange: (c) => r(!!c),
      className: v("h-3.5 w-3.5", n),
      ...a
    }
  );
}
function D({
  ...e
}) {
  return /* @__PURE__ */ t(se.Root, { "data-slot": "popover", ...e });
}
function te({
  ...e
}) {
  return /* @__PURE__ */ t(se.Trigger, { "data-slot": "popover-trigger", ...e });
}
function W({
  className: e,
  align: r = "center",
  sideOffset: n = 4,
  ...o
}) {
  return /* @__PURE__ */ t(se.Portal, { children: /* @__PURE__ */ t(
    se.Content,
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
function pe({
  ...e
}) {
  return /* @__PURE__ */ t(se.Anchor, { "data-slot": "popover-anchor", ...e });
}
function ge({ className: e, type: r, ...n }) {
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
function yt(e) {
  const r = e.split(/\s+/);
  return r[r.length - 1] || "";
}
function Ye({
  value: e,
  onChange: r,
  suggestions: n = [],
  noRing: o = !1,
  frozen: a = !1,
  className: s,
  ...c
}) {
  const [h, u] = j(!1), [l, d] = j(!a), m = $(null), N = yt(e), y = N ? n.filter((f) => f.toLowerCase().includes(N.toLowerCase())) : n, I = (f) => {
    const x = f.target.value;
    r(x), n.length > 0 && u(!0);
  }, C = (f) => {
    const x = e.split(/\s+/);
    x[x.length - 1] = f, r(x.join(" ")), u(!1), m.current?.focus();
  }, k = (f) => {
    n.length > 0 && u(!0), c.onFocus?.(f);
  }, S = (f) => {
    setTimeout(() => u(!1), 150), c.onBlur?.(f);
  }, w = () => {
    a && !l && (d(!0), setTimeout(() => m.current?.focus(), 0));
  }, g = n.length > 0, b = a && !l;
  return /* @__PURE__ */ i(D, { open: h && y.length > 0, onOpenChange: u, modal: !1, children: [
    /* @__PURE__ */ t(pe, { asChild: !0, children: /* @__PURE__ */ t("div", { className: "relative flex-1", children: /* @__PURE__ */ i("div", { className: "relative", children: [
      b && /* @__PURE__ */ t(
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
        ge,
        {
          ref: m,
          value: e,
          onChange: I,
          onFocus: k,
          onBlur: S,
          disabled: b || c.disabled,
          className: v(
            "h-7 text-xs bg-muted/30 border-transparent hover:border-border focus:border-border focus:bg-background transition-colors placeholder:text-muted-foreground/50",
            g && "pr-6",
            o && "focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-border",
            b && "opacity-60",
            s
          ),
          ...c
        }
      ),
      g && /* @__PURE__ */ t(K, { className: "absolute right-2 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground/50" })
    ] }) }) }),
    /* @__PURE__ */ t(
      W,
      {
        align: "start",
        sideOffset: 5,
        className: "p-1 min-w-[var(--radix-popover-trigger-width)] bg-popover border border-border rounded-md shadow-lg",
        onOpenAutoFocus: (f) => f.preventDefault(),
        children: /* @__PURE__ */ t("div", { className: "max-h-40 overflow-auto", children: y.map((f) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: v(
              "w-full px-2 py-1.5 text-xs text-left hover:bg-accent hover:text-accent-foreground",
              f === e && "bg-accent/50"
            ),
            onMouseDown: (x) => x.preventDefault(),
            onClick: () => C(f),
            title: f,
            children: /* @__PURE__ */ t("span", { className: "block truncate", children: f })
          },
          f
        )) })
      }
    )
  ] });
}
function et({
  className: e,
  defaultValue: r,
  value: n,
  min: o = 0,
  max: a = 100,
  ...s
}) {
  const c = He.useMemo(
    () => Array.isArray(n) ? n : Array.isArray(r) ? r : [o, a],
    [n, r, o, a]
  );
  return /* @__PURE__ */ i(
    le.Root,
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
        Array.from({ length: c.length }, (h, u) => /* @__PURE__ */ t(
          le.Thumb,
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
function Ct({
  value: e,
  onChange: r,
  placeholder: n = "0",
  disabled: o = !1,
  className: a,
  variant: s = "input",
  min: c = 0,
  max: h = 100,
  step: u = 1
}) {
  const [l, d] = j(String(e));
  return R(() => {
    d(String(e));
  }, [e]), s === "slider" ? /* @__PURE__ */ i("div", { className: v("flex items-center gap-3 flex-1", a), children: [
    /* @__PURE__ */ t(
      et,
      {
        value: [e],
        onValueChange: (y) => r(y[0]),
        min: c,
        max: h,
        step: u,
        disabled: o,
        className: "flex-1"
      }
    ),
    /* @__PURE__ */ t("span", { className: "text-xs font-mono text-muted-foreground w-10 text-right", children: e })
  ] }) : /* @__PURE__ */ t(
    ge,
    {
      type: "text",
      inputMode: "decimal",
      value: l,
      onChange: (y) => {
        const I = y.target.value;
        d(I);
        const C = parseFloat(I);
        isNaN(C) ? (I === "" || I === "-") && r(0) : r(C);
      },
      onBlur: () => {
        const y = parseFloat(l);
        isNaN(y) ? (d("0"), r(0)) : d(String(y));
      },
      placeholder: n,
      disabled: o,
      className: v(
        "h-7 text-xs flex-1 bg-muted/30 border-transparent hover:border-border focus:border-border focus:bg-background transition-colors font-mono",
        a
      )
    }
  );
}
function kt({
  value: e,
  onChange: r,
  label: n = "Edit JSON",
  disabled: o = !1,
  suggestions: a = []
}) {
  const [s, c] = j(!1), [h, u] = j(""), [l, d] = j(null), m = $(null), N = typeof e == "object" ? JSON.stringify(e, null, 2) : typeof e == "string" ? e : "";
  R(() => {
    s && (u(N), d(null));
  }, [s, N]), R(() => () => {
    m.current?.dispose();
  }, []);
  const y = (w, g) => {
    if (m.current?.dispose(), a.length === 0) return;
    const f = w.getModel()?.getLanguageId() ?? "json";
    m.current = g.languages.registerCompletionItemProvider(f, {
      provideCompletionItems: (x, O) => {
        const E = x.getWordUntilPosition(O), V = {
          startLineNumber: O.lineNumber,
          endLineNumber: O.lineNumber,
          startColumn: E.startColumn,
          endColumn: E.endColumn
        };
        return {
          suggestions: a.map((T, p) => ({
            label: T,
            kind: g.languages.CompletionItemKind.Text,
            insertText: T,
            range: V,
            sortText: String(p).padStart(5, "0")
          }))
        };
      }
    });
  }, I = (w) => {
    const g = w || "";
    u(g);
    try {
      JSON.parse(g), d(null);
    } catch (b) {
      d(b.message);
    }
  }, C = () => {
    try {
      const w = JSON.parse(h);
      r(w), c(!1);
    } catch (w) {
      d(w.message);
    }
  }, k = N.split(`
`).length;
  return /* @__PURE__ */ i(Ke, { open: s, onOpenChange: (w) => !o && c(w), children: [
    /* @__PURE__ */ t(Qe, { asChild: !0, children: /* @__PURE__ */ i(
      "button",
      {
        disabled: o,
        className: "w-full flex items-center justify-between gap-2 h-7 px-2 text-xs bg-muted/30 border border-transparent hover:border-border hover:bg-muted/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-transparent disabled:hover:bg-muted/30",
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
          /* @__PURE__ */ t(qe, { className: "px-4 py-3 flex-shrink-0 bg-muted/50 border-b border-border", children: /* @__PURE__ */ i(Xe, { className: "flex items-center gap-2 text-sm font-medium", children: [
            /* @__PURE__ */ t(Le, { className: "h-4 w-4 text-primary" }),
            n
          ] }) }),
          /* @__PURE__ */ t("div", { className: "flex-1 min-h-0 bg-background", children: /* @__PURE__ */ t(
            Je,
            {
              height: "100%",
              defaultLanguage: "json",
              value: h,
              onChange: I,
              onMount: y,
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
            /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: l ? /* @__PURE__ */ i(fe, { children: [
              /* @__PURE__ */ t("div", { className: "h-2 w-2 rounded-full bg-destructive" }),
              /* @__PURE__ */ t("p", { className: "text-xs text-destructive truncate max-w-[300px]", children: l })
            ] }) : /* @__PURE__ */ i(fe, { children: [
              /* @__PURE__ */ t("div", { className: "h-2 w-2 rounded-full bg-primary" }),
              /* @__PURE__ */ t("span", { className: "text-xs text-muted-foreground", children: "Valid JSON" })
            ] }) }),
            /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ t(
                me,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => c(!1),
                  className: "h-7 px-3 text-xs",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ i(
                me,
                {
                  size: "sm",
                  onClick: C,
                  disabled: !(l === null),
                  className: "h-7 px-4 text-xs",
                  children: [
                    /* @__PURE__ */ t(X, { className: "h-3.5 w-3.5 mr-1.5" }),
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
function mr({
  value: e,
  onChange: r,
  allowedTypes: n = ["null", "string", "number", "boolean", "object"],
  disabled: o = !1
}) {
  const [a, s] = j(!1), c = F(() => It(e), [e]), h = (d) => {
    if (d === c) {
      s(!1);
      return;
    }
    r(ce[d].default), s(!1);
  }, u = ce[c].icon, l = () => {
    switch (c) {
      case "null":
        return /* @__PURE__ */ t("div", { className: "flex-1 h-7 flex items-center px-3 text-xs text-muted-foreground italic bg-muted/20", children: "null" });
      case "string":
        return /* @__PURE__ */ t(
          Ye,
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
          Ct,
          {
            value: e,
            onChange: r,
            disabled: o,
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
            disabled: o
          }
        ) });
      case "object":
        return /* @__PURE__ */ t(
          kt,
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
    /* @__PURE__ */ i(D, { open: a, onOpenChange: s, children: [
      /* @__PURE__ */ t(te, { asChild: !0, children: /* @__PURE__ */ i(
        "button",
        {
          disabled: o,
          className: v(
            "inline-flex items-center justify-center gap-1 h-7 px-2",
            "bg-muted/30 border border-border/50 hover:border-border hover:bg-muted/50 transition-colors",
            o && "cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ t(u, { className: "h-4 w-4" }),
            /* @__PURE__ */ t(K, { className: "h-3 w-3 opacity-50" })
          ]
        }
      ) }),
      /* @__PURE__ */ t(W, { align: "start", className: "w-36 p-1 gap-0", children: n.map((d) => {
        const m = ce[d].icon;
        return /* @__PURE__ */ i(
          "button",
          {
            onClick: () => h(d),
            className: v(
              "w-full flex items-center gap-2 px-2 py-1.5 text-xs rounded-sm transition-colors",
              d === c ? "bg-accent text-accent-foreground" : "hover:bg-muted"
            ),
            children: [
              /* @__PURE__ */ t(m, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ t("span", { className: "flex-1 text-left", children: ce[d].label })
            ]
          },
          d
        );
      }) })
    ] }),
    l()
  ] });
}
function St({
  ...e
}) {
  return /* @__PURE__ */ t(M.Root, { "data-slot": "select", ...e });
}
function zt({
  ...e
}) {
  return /* @__PURE__ */ t(M.Value, { "data-slot": "select-value", ...e });
}
function Ot({
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
        /* @__PURE__ */ t(M.Icon, { asChild: !0, children: /* @__PURE__ */ t(Ue, { className: "text-muted-foreground size-4 pointer-events-none" }) })
      ]
    }
  );
}
function Tt({
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
        /* @__PURE__ */ t(Pt, {}),
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
function jt({
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
        /* @__PURE__ */ t("span", { className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center", children: /* @__PURE__ */ t(M.ItemIndicator, { children: /* @__PURE__ */ t(_e, { className: "pointer-events-none" }) }) }),
        /* @__PURE__ */ t(M.ItemText, { children: r })
      ]
    }
  );
}
function Pt({
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
        ut,
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
        Ue,
        {}
      )
    }
  );
}
function hr({
  value: e,
  onChange: r,
  options: n,
  variant: o,
  buttonDisplay: a = "text",
  maxInline: s,
  placeholder: c = "Select...",
  dropdownTitle: h,
  iconTrigger: u,
  disabled: l = !1,
  borderless: d = !1
}) {
  const [m, N] = j(!1), [y, I] = j(!1), C = A(
    (x) => {
      l || r(x);
    },
    [r, l]
  );
  if ((o ?? (n.length > 5 ? "dropdown" : "buttons")) === "dropdown")
    return u ? /* @__PURE__ */ i(D, { open: y, onOpenChange: I, children: [
      /* @__PURE__ */ t(te, { asChild: !0, children: /* @__PURE__ */ i(
        "button",
        {
          disabled: l,
          className: v(
            "inline-flex items-center justify-center gap-1 h-7 px-2",
            !d && "bg-muted/30 border border-transparent hover:border-border hover:bg-muted/50",
            d && "hover:bg-muted/30",
            "transition-colors",
            l && "opacity-50 cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ t(u, { className: "h-4 w-4" }),
            /* @__PURE__ */ t(K, { className: "h-3 w-3 opacity-50" })
          ]
        }
      ) }),
      /* @__PURE__ */ i(W, { align: "start", className: "w-48 p-1 gap-0", children: [
        h && /* @__PURE__ */ t("div", { className: "px-2 py-1.5 text-xs font-medium text-muted-foreground border-b border-border mb-1", children: h }),
        n.map((x) => {
          const O = x.icon, E = e === x.value;
          return /* @__PURE__ */ i(
            "button",
            {
              onClick: () => {
                C(x.value), I(!1);
              },
              className: v(
                "w-full flex items-center gap-2 px-2 py-1.5 text-xs transition-colors",
                E ? "bg-accent text-accent-foreground" : "hover:bg-muted"
              ),
              children: [
                O && /* @__PURE__ */ t(O, { className: "h-3.5 w-3.5" }),
                /* @__PURE__ */ t("span", { className: "flex-1 text-left", children: x.label }),
                E && /* @__PURE__ */ t(X, { className: "h-3.5 w-3.5" })
              ]
            },
            x.value
          );
        })
      ] })
    ] }) : /* @__PURE__ */ i(St, { value: e || "", onValueChange: C, disabled: l, children: [
      /* @__PURE__ */ t(Ot, { className: "h-7 text-xs bg-muted/30 border-transparent hover:border-border focus:border-border transition-colors", children: /* @__PURE__ */ t(zt, { placeholder: c }) }),
      /* @__PURE__ */ i(Tt, { children: [
        h && /* @__PURE__ */ t("div", { className: "px-2 py-1.5 text-xs font-medium text-muted-foreground border-b border-border mb-1", children: h }),
        n.map((x) => {
          const O = x.icon;
          return /* @__PURE__ */ t(jt, { value: x.value, className: "text-xs", children: /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
            O && /* @__PURE__ */ t(O, { className: "h-3.5 w-3.5" }),
            x.label
          ] }) }, x.value);
        })
      ] })
    ] });
  const S = s !== void 0 && n.length > s, w = S ? n.slice(0, s - 1) : n, g = S ? n.slice(s - 1) : [], b = g.find((x) => x.value === e), f = (x, O, E) => {
    const V = e === x.value, T = x.icon, p = T && (a === "icon" || a === "both"), z = a === "text" || a === "both", P = /* @__PURE__ */ i(
      "button",
      {
        onClick: () => C(x.value),
        disabled: l,
        className: v(
          "flex items-center justify-center gap-1.5 font-medium transition-all",
          "h-full px-2.5 text-xs",
          O && "rounded-l-md",
          E && !S && "rounded-r-md",
          !O && !E && "rounded-none",
          V ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
          l && "opacity-50 cursor-not-allowed"
        ),
        children: [
          p && /* @__PURE__ */ t(T, { className: "h-3.5 w-3.5" }),
          z && /* @__PURE__ */ t("span", { className: "truncate", children: x.label })
        ]
      },
      x.value
    ), L = x.hoverText || (a === "icon" ? x.label : void 0);
    return L && !l ? /* @__PURE__ */ t(Ie, { delayDuration: 200, children: /* @__PURE__ */ i(Se, { children: [
      /* @__PURE__ */ t(ze, { asChild: !0, children: P }),
      /* @__PURE__ */ t(Oe, { side: "bottom", className: "text-xs", children: L })
    ] }) }, x.value) : P;
  };
  return /* @__PURE__ */ i("div", { className: v(
    "inline-flex h-7 items-center box-border",
    !d && "border border-border/40 bg-muted/30 p-0.5 shadow-sm",
    l && "opacity-50"
  ), children: [
    w.map(
      (x, O) => f(x, O === 0, O === w.length - 1)
    ),
    S && /* @__PURE__ */ i(D, { open: m, onOpenChange: N, children: [
      /* @__PURE__ */ t(te, { asChild: !0, children: /* @__PURE__ */ i(
        "button",
        {
          disabled: l,
          className: v(
            "flex items-center justify-center gap-1 font-medium transition-all rounded-r-md",
            "h-full px-2.5 text-xs",
            b ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
            l && "cursor-not-allowed"
          ),
          children: [
            b ? /* @__PURE__ */ i(fe, { children: [
              b.icon && a !== "text" && /* @__PURE__ */ t(b.icon, { className: "h-3.5 w-3.5" }),
              a !== "icon" && /* @__PURE__ */ t("span", { className: "truncate", children: b.label })
            ] }) : /* @__PURE__ */ t("span", { children: "More" }),
            /* @__PURE__ */ t(K, { className: "h-3 w-3" })
          ]
        }
      ) }),
      /* @__PURE__ */ t(W, { align: "end", className: "w-44 p-1 gap-0", children: g.map((x) => {
        const O = x.icon, E = e === x.value;
        return /* @__PURE__ */ i(
          "button",
          {
            onClick: () => {
              C(x.value), N(!1);
            },
            className: v(
              "w-full flex items-center gap-2 px-2 py-1.5 text-xs transition-colors",
              E ? "bg-accent text-accent-foreground" : "hover:bg-muted"
            ),
            children: [
              O && /* @__PURE__ */ t(O, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", children: x.label }),
              E && /* @__PURE__ */ t(X, { className: "h-3.5 w-3.5" })
            ]
          },
          x.value
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
function Lt(e, r) {
  const [n, o] = j(r === "rtl");
  return ke(() => {
    e && (r || o(Vt(e)));
  }, [r, e]), n;
}
const he = typeof window < "u" ? ke : R;
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
function Bt({
  box: e,
  defaultHeight: r,
  defaultWidth: n,
  disabled: o,
  element: a,
  mode: s,
  style: c
}) {
  const { styleHeight: h, styleWidth: u } = F(
    () => ({
      styleHeight: De(c?.height),
      styleWidth: De(c?.width)
    }),
    [c?.height, c?.width]
  ), [l, d] = j({
    height: r,
    width: n
  }), m = o || s === "only-height" && h !== void 0 || s === "only-width" && u !== void 0 || h !== void 0 && u !== void 0;
  return he(() => {
    if (a === null || m)
      return;
    const N = new ResizeObserver((y) => {
      for (const I of y) {
        const { contentRect: C, target: k } = I;
        a === k && d((S) => S.height === C.height && S.width === C.width ? S : {
          height: C.height,
          width: C.width
        });
      }
    });
    return N.observe(a, { box: e }), () => {
      N?.unobserve(a);
    };
  }, [e, m, a, h, u]), F(
    () => ({
      height: h ?? l.height,
      width: u ?? l.width
    }),
    [l, h, u]
  );
}
function Rt(e) {
  const r = $(() => {
    throw new Error("Cannot call during render.");
  });
  return he(() => {
    r.current = e;
  }, [e]), A((n) => r.current?.(n), [r]);
}
let ee = null;
function Mt(e = !1) {
  if (ee === null || e) {
    const r = document.createElement("div"), n = r.style;
    n.width = "50px", n.height = "50px", n.overflow = "scroll", n.direction = "rtl";
    const o = document.createElement("div"), a = o.style;
    return a.width = "100px", a.height = "100px", r.appendChild(o), document.body.appendChild(r), r.scrollLeft > 0 ? ee = "positive-descending" : (r.scrollLeft = 1, r.scrollLeft === 0 ? ee = "negative" : ee = "positive-ascending"), document.body.removeChild(r), ee;
  }
  return ee;
}
function xe({
  containerElement: e,
  direction: r,
  isRtl: n,
  scrollOffset: o
}) {
  if (r === "horizontal" && n)
    switch (Mt()) {
      case "negative":
        return -o;
      case "positive-descending": {
        if (e) {
          const { clientWidth: a, scrollLeft: s, scrollWidth: c } = e;
          return c - a - s;
        }
        break;
      }
    }
  return o;
}
function Q(e, r = "Assertion error") {
  if (!e)
    throw console.error(r), Error(r);
}
function oe(e, r) {
  if (e === r)
    return !0;
  if (!!e != !!r || (Q(e !== void 0), Q(r !== void 0), Object.keys(e).length !== Object.keys(r).length))
    return !1;
  for (const n in e)
    if (!Object.is(r[n], e[n]))
      return !1;
  return !0;
}
function tt({
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
    Q(o !== void 0, "Unexpected bounds cache miss");
    const a = (o.scrollOffset + o.size) / e.size;
    return r * a;
  }
}
function At({
  align: e,
  cachedBounds: r,
  index: n,
  itemCount: o,
  itemSize: a,
  containerScrollOffset: s,
  containerSize: c
}) {
  if (n < 0 || n >= o)
    throw RangeError(`Invalid index specified: ${n}`, {
      cause: `Index ${n} is not within the range of 0 - ${o - 1}`
    });
  const h = tt({
    cachedBounds: r,
    itemCount: o,
    itemSize: a
  }), u = r.get(n), l = Math.max(
    0,
    Math.min(h - c, u.scrollOffset)
  ), d = Math.max(
    0,
    u.scrollOffset - c + u.size
  );
  switch (e === "smart" && (s >= d && s <= l ? e = "auto" : e = "center"), e) {
    case "start":
      return l;
    case "end":
      return d;
    case "center":
      return u.scrollOffset <= c / 2 ? 0 : u.scrollOffset + u.size / 2 >= h - c / 2 ? h - c : u.scrollOffset + u.size / 2 - c / 2;
    default:
      return s >= d && s <= l ? s : s < d ? d : l;
  }
}
function We({
  cachedBounds: e,
  containerScrollOffset: r,
  containerSize: n,
  itemCount: o,
  overscanCount: a
}) {
  const s = o - 1;
  let c = 0, h = -1, u = 0, l = -1, d = 0;
  for (; d < s; ) {
    const m = e.get(d);
    if (m.scrollOffset + m.size > r)
      break;
    d++;
  }
  for (c = d, u = Math.max(0, c - a); d < s; ) {
    const m = e.get(d);
    if (m.scrollOffset + m.size >= r + n)
      break;
    d++;
  }
  return h = Math.min(s, d), l = Math.min(o - 1, h + a), c < 0 && (c = 0, h = -1, u = 0, l = -1), {
    startIndexVisible: c,
    stopIndexVisible: h,
    startIndexOverscan: u,
    stopIndexOverscan: l
  };
}
function Dt({
  itemCount: e,
  itemProps: r,
  itemSize: n
}) {
  const o = /* @__PURE__ */ new Map();
  return {
    get(a) {
      for (Q(a < e, `Invalid index ${a}`); o.size - 1 < a; ) {
        const c = o.size;
        let h;
        switch (typeof n) {
          case "function": {
            h = n(c, r);
            break;
          }
          case "number": {
            h = n;
            break;
          }
        }
        if (c === 0)
          o.set(c, {
            size: h,
            scrollOffset: 0
          });
        else {
          const u = o.get(c - 1);
          Q(
            u !== void 0,
            `Unexpected bounds cache miss for index ${a}`
          ), o.set(c, {
            scrollOffset: u.scrollOffset + u.size,
            size: h
          });
        }
      }
      const s = o.get(a);
      return Q(
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
function Wt({
  itemCount: e,
  itemProps: r,
  itemSize: n
}) {
  return F(
    () => Dt({
      itemCount: e,
      itemProps: r,
      itemSize: n
    }),
    [e, r, n]
  );
}
function $t({
  containerSize: e,
  itemSize: r
}) {
  let n;
  return typeof r === "string" ? (Q(
    r.endsWith("%"),
    `Invalid item size: "${r}"; string values must be percentages (e.g. "100%")`
  ), Q(
    e !== void 0,
    "Container size must be defined if a percentage item size is specified"
  ), n = e * parseInt(r) / 100) : n = r, n;
}
function $e({
  containerElement: e,
  containerStyle: r,
  defaultContainerSize: n = 0,
  direction: o,
  isRtl: a = !1,
  itemCount: s,
  itemProps: c,
  itemSize: h,
  onResize: u,
  overscanCount: l
}) {
  const [d, m] = j({
    startIndexVisible: 0,
    startIndexOverscan: 0,
    stopIndexVisible: -1,
    stopIndexOverscan: -1
  }), {
    startIndexVisible: N,
    startIndexOverscan: y,
    stopIndexVisible: I,
    stopIndexOverscan: C
  } = {
    startIndexVisible: Math.min(s - 1, d.startIndexVisible),
    startIndexOverscan: Math.min(s - 1, d.startIndexOverscan),
    stopIndexVisible: Math.min(s - 1, d.stopIndexVisible),
    stopIndexOverscan: Math.min(s - 1, d.stopIndexOverscan)
  }, { height: k = n, width: S = n } = Bt({
    defaultHeight: o === "vertical" ? n : void 0,
    defaultWidth: o === "horizontal" ? n : void 0,
    element: e,
    mode: o === "vertical" ? "only-height" : "only-width",
    style: r
  }), w = $({
    height: 0,
    width: 0
  }), g = o === "vertical" ? k : S, b = $t({ containerSize: g, itemSize: h });
  ke(() => {
    if (typeof u == "function") {
      const T = w.current;
      (T.height !== k || T.width !== S) && (u({ height: k, width: S }, { ...T }), T.height = k, T.width = S);
    }
  }, [k, u, S]);
  const f = Wt({
    itemCount: s,
    itemProps: c,
    itemSize: b
  }), x = A(
    (T) => f.get(T),
    [f]
  ), O = A(
    () => tt({
      cachedBounds: f,
      itemCount: s,
      itemSize: b
    }),
    [f, s, b]
  ), E = A(
    (T) => {
      const p = xe({
        containerElement: e,
        direction: o,
        isRtl: a,
        scrollOffset: T
      });
      return We({
        cachedBounds: f,
        containerScrollOffset: p,
        containerSize: g,
        itemCount: s,
        overscanCount: l
      });
    },
    [
      f,
      e,
      g,
      o,
      a,
      s,
      l
    ]
  );
  he(() => {
    const T = (o === "vertical" ? e?.scrollTop : e?.scrollLeft) ?? 0;
    m(E(T));
  }, [e, o, E]), he(() => {
    if (!e)
      return;
    const T = () => {
      m((p) => {
        const { scrollLeft: z, scrollTop: P } = e, L = xe({
          containerElement: e,
          direction: o,
          isRtl: a,
          scrollOffset: o === "vertical" ? P : z
        }), Z = We({
          cachedBounds: f,
          containerScrollOffset: L,
          containerSize: g,
          itemCount: s,
          overscanCount: l
        });
        return oe(Z, p) ? p : Z;
      });
    };
    return e.addEventListener("scroll", T), () => {
      e.removeEventListener("scroll", T);
    };
  }, [
    f,
    e,
    g,
    o,
    s,
    l
  ]);
  const V = Rt(
    ({
      align: T = "auto",
      containerScrollOffset: p,
      index: z
    }) => {
      let P = At({
        align: T,
        cachedBounds: f,
        containerScrollOffset: p,
        containerSize: g,
        index: z,
        itemCount: s,
        itemSize: b
      });
      if (e) {
        if (P = xe({
          containerElement: e,
          direction: o,
          isRtl: a,
          scrollOffset: P
        }), typeof e.scrollTo != "function") {
          const L = E(P);
          oe(d, L) || m(L);
        }
        return P;
      }
    }
  );
  return {
    getCellBounds: x,
    getEstimatedSize: O,
    scrollToIndex: V,
    startIndexOverscan: y,
    startIndexVisible: N,
    stopIndexOverscan: C,
    stopIndexVisible: I
  };
}
function Ft(e) {
  return F(() => e, Object.values(e));
}
function Ht(e, r) {
  const {
    ariaAttributes: n,
    style: o,
    ...a
  } = e, {
    ariaAttributes: s,
    style: c,
    ...h
  } = r;
  return oe(n, s) && oe(o, c) && oe(a, h);
}
function _t({
  cellComponent: e,
  cellProps: r,
  children: n,
  className: o,
  columnCount: a,
  columnWidth: s,
  defaultHeight: c = 0,
  defaultWidth: h = 0,
  dir: u,
  gridRef: l,
  onCellsRendered: d,
  onResize: m,
  overscanCount: N = 3,
  rowCount: y,
  rowHeight: I,
  style: C,
  tagName: k = "div",
  ...S
}) {
  const w = Ft(r), g = F(
    () => at(e, Ht),
    [e]
  ), [b, f] = j(null), x = Lt(b, u), {
    getCellBounds: O,
    getEstimatedSize: E,
    startIndexOverscan: V,
    startIndexVisible: T,
    scrollToIndex: p,
    stopIndexOverscan: z,
    stopIndexVisible: P
  } = $e({
    containerElement: b,
    containerStyle: C,
    defaultContainerSize: h,
    direction: "horizontal",
    isRtl: x,
    itemCount: a,
    itemProps: w,
    itemSize: s,
    onResize: m,
    overscanCount: N
  }), {
    getCellBounds: L,
    getEstimatedSize: Z,
    startIndexOverscan: q,
    startIndexVisible: ie,
    scrollToIndex: Y,
    stopIndexOverscan: H,
    stopIndexVisible: je
  } = $e({
    containerElement: b,
    containerStyle: C,
    defaultContainerSize: c,
    direction: "vertical",
    itemCount: y,
    itemProps: w,
    itemSize: I,
    onResize: m,
    overscanCount: N
  });
  st(
    l,
    () => ({
      get element() {
        return b;
      },
      scrollToCell({
        behavior: _ = "auto",
        columnAlign: B = "auto",
        columnIndex: U,
        rowAlign: G = "auto",
        rowIndex: J
      }) {
        const re = p({
          align: B,
          containerScrollOffset: b?.scrollLeft ?? 0,
          index: U
        }), ot = Y({
          align: G,
          containerScrollOffset: b?.scrollTop ?? 0,
          index: J
        });
        typeof b?.scrollTo == "function" && b.scrollTo({
          behavior: _,
          left: re,
          top: ot
        });
      },
      scrollToColumn({
        align: _ = "auto",
        behavior: B = "auto",
        index: U
      }) {
        const G = p({
          align: _,
          containerScrollOffset: b?.scrollLeft ?? 0,
          index: U
        });
        typeof b?.scrollTo == "function" && b.scrollTo({
          behavior: B,
          left: G
        });
      },
      scrollToRow({
        align: _ = "auto",
        behavior: B = "auto",
        index: U
      }) {
        const G = Y({
          align: _,
          containerScrollOffset: b?.scrollTop ?? 0,
          index: U
        });
        typeof b?.scrollTo == "function" && b.scrollTo({
          behavior: B,
          top: G
        });
      }
    }),
    [b, p, Y]
  ), R(() => {
    V >= 0 && z >= 0 && q >= 0 && H >= 0 && d && d(
      {
        columnStartIndex: T,
        columnStopIndex: P,
        rowStartIndex: ie,
        rowStopIndex: je
      },
      {
        columnStartIndex: V,
        columnStopIndex: z,
        rowStartIndex: q,
        rowStopIndex: H
      }
    );
  }, [
    d,
    V,
    T,
    z,
    P,
    q,
    ie,
    H,
    je
  ]);
  const rt = F(() => {
    const _ = [];
    if (a > 0 && y > 0)
      for (let B = q; B <= H; B++) {
        const U = L(B), G = [];
        for (let J = V; J <= z; J++) {
          const re = O(J);
          G.push(
            /* @__PURE__ */ Pe(
              g,
              {
                ...w,
                ariaAttributes: {
                  "aria-colindex": J + 1,
                  role: "gridcell"
                },
                columnIndex: J,
                key: J,
                rowIndex: B,
                style: {
                  position: "absolute",
                  left: x ? void 0 : 0,
                  right: x ? 0 : void 0,
                  transform: `translate(${x ? -re.scrollOffset : re.scrollOffset}px, ${U.scrollOffset}px)`,
                  height: U.size,
                  width: re.size
                }
              }
            )
          );
        }
        _.push(
          /* @__PURE__ */ t("div", { role: "row", "aria-rowindex": B + 1, children: G }, B)
        );
      }
    return _;
  }, [
    g,
    w,
    a,
    V,
    z,
    O,
    L,
    x,
    y,
    q,
    H
  ]), nt = /* @__PURE__ */ t(
    "div",
    {
      "aria-hidden": !0,
      style: {
        height: Z(),
        width: E(),
        zIndex: -1
      }
    }
  );
  return Pe(
    k,
    {
      "aria-colcount": a,
      "aria-rowcount": y,
      role: "grid",
      ...S,
      className: o,
      dir: u,
      ref: f,
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
    n,
    nt
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
], ae = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Set();
let ne = null;
function Ut() {
  return Te;
}
async function Gt(e) {
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
    const o = e[r];
    return typeof o == "function" || typeof o == "object";
  });
}
async function Kt(e) {
  if (ae.has(e))
    return ae.get(e);
  if (Ce.has(e))
    return [];
  if (de.has(e))
    return de.get(e);
  const r = (async () => {
    try {
      const n = await Gt(e), a = Jt(n).map((s) => pt(e, s));
      return ae.set(e, a), ne = null, a;
    } catch (n) {
      return console.warn(`Failed to enumerate icons in pack "${e}":`, n), Ce.add(e), [];
    } finally {
      de.delete(e);
    }
  })();
  return de.set(e, r), r;
}
async function Qt() {
  return ne || (ne = (await Promise.all(
    Te.map((r) => Kt(r))
  )).flat(), ne);
}
function Zt() {
  return ae.size;
}
function qt() {
  return ae.size + Ce.size >= Te.length;
}
function Xt(e, r = 150) {
  const [n, o] = j(e), [a, s] = j(!1), [c, h] = j(!0), [u, l] = j([]), [d, m] = j(0), N = $(null);
  return R(() => {
    let I = !0;
    return (async () => {
      h(!0);
      try {
        const k = await Qt();
        I && (l(k), h(!1), m(100));
      } catch (k) {
        console.error("Failed to load icons:", k), I && h(!1);
      }
    })(), () => {
      I = !1;
    };
  }, []), R(() => {
    if (c) {
      const I = setInterval(() => {
        const C = Zt(), k = Ut().length;
        m(Math.round(C / k * 100)), qt() && clearInterval(I);
      }, 100);
      return () => clearInterval(I);
    }
  }, [c]), R(() => (s(!0), N.current && clearTimeout(N.current), N.current = setTimeout(() => {
    o(e), s(!1);
  }, r), () => {
    N.current && clearTimeout(N.current);
  }), [e, r]), {
    results: F(() => {
      if (!n.trim())
        return u.slice(0, 500);
      const I = n.toLowerCase();
      return u.filter((C) => {
        const k = C.indexOf(":");
        return (k !== -1 ? C.slice(k + 1) : C).toLowerCase().includes(I);
      });
    }, [n, u]),
    isSearching: a,
    isLoading: c,
    loadProgress: d,
    totalCount: u.length
  };
}
const Yt = 20, be = 40, ve = 280, ue = 6;
function pr({
  value: e,
  onChange: r,
  placeholder: n = "Search icons...",
  disabled: o = !1
}) {
  const [a, s] = j(e || ""), [c, h] = j(!1), u = $(null), l = $(null);
  R(() => {
    s(e || "");
  }, [e]);
  const d = a.includes(":") ? a.split(":")[1] || "" : a, { results: m } = Xt(d), N = m.includes(a), y = c && a.length > 0 && !N && m.length > 0, I = (f) => {
    const x = f.target.value;
    s(x), r(x);
  }, C = A((f) => {
    s(f), r(f), h(!1), l.current?.focus();
  }, [r]), [k, S] = j(300);
  R(() => {
    y && u.current && S(u.current.offsetWidth);
  }, [y]);
  const w = Math.floor(k / ue), g = Math.ceil(m.length / ue), b = A(({ columnIndex: f, rowIndex: x, style: O }) => {
    const E = x * ue + f;
    if (E >= m.length)
      return /* @__PURE__ */ t("div", { style: O });
    const V = m[E];
    return /* @__PURE__ */ t("div", { style: O, className: "p-0.5", children: /* @__PURE__ */ t(Ie, { delayDuration: 300, children: /* @__PURE__ */ i(Se, { children: [
      /* @__PURE__ */ t(ze, { asChild: !0, children: /* @__PURE__ */ t(
        "button",
        {
          onMouseDown: (T) => {
            T.preventDefault(), C(V);
          },
          className: v(
            "w-full h-full flex items-center justify-center transition-all rounded-sm",
            "bg-muted/30 hover:bg-muted border border-transparent hover:border-border"
          ),
          children: /* @__PURE__ */ t(Re, { name: V, size: Yt, className: "text-foreground" })
        }
      ) }),
      /* @__PURE__ */ i(Oe, { side: "bottom", className: "text-xs max-w-[200px] z-[60]", children: [
        /* @__PURE__ */ t("div", { className: "font-medium truncate", children: gt(V) }),
        /* @__PURE__ */ t("div", { className: "text-muted-foreground text-xs", children: xt(V) })
      ] })
    ] }) }) });
  }, [m, C]);
  return /* @__PURE__ */ t("div", { ref: u, children: /* @__PURE__ */ i(D, { open: y, modal: !1, children: [
    /* @__PURE__ */ t(pe, { asChild: !0, children: /* @__PURE__ */ i("div", { className: "relative", children: [
      N && /* @__PURE__ */ t("div", { className: "absolute left-2 top-1/2 -translate-y-1/2 z-10 pointer-events-none", children: /* @__PURE__ */ t(Re, { name: a, size: 14, className: "text-foreground" }) }),
      /* @__PURE__ */ t(
        ge,
        {
          ref: l,
          value: a,
          onChange: I,
          onFocus: () => h(!0),
          onBlur: () => setTimeout(() => h(!1), 150),
          placeholder: n,
          disabled: o,
          className: v(
            "h-7 text-xs font-mono bg-muted/30 border-transparent hover:border-border focus:border-border focus:bg-background transition-colors",
            N ? "pl-7 text-foreground" : "text-muted-foreground"
          )
        }
      )
    ] }) }),
    /* @__PURE__ */ i(
      W,
      {
        className: "p-0 overflow-hidden",
        align: "start",
        sideOffset: 5,
        onOpenAutoFocus: (f) => f.preventDefault(),
        style: { width: k },
        children: [
          /* @__PURE__ */ i("div", { className: "px-2 py-1 text-xs text-muted-foreground border-b border-border bg-muted/30", children: [
            m.length.toLocaleString(),
            " matches"
          ] }),
          /* @__PURE__ */ i(
            "div",
            {
              className: "icon-picker-grid",
              style: { height: Math.min(ve, g * be) },
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
                  _t,
                  {
                    columnCount: ue,
                    columnWidth: w,
                    defaultHeight: ve,
                    defaultWidth: k,
                    rowCount: g,
                    rowHeight: be,
                    cellComponent: b,
                    cellProps: {},
                    style: {
                      height: Math.min(ve, g * be),
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
function gr({
  value: e,
  onChange: r,
  options: n,
  variant: o,
  buttonDisplay: a = "text",
  maxInline: s,
  placeholder: c = "Select...",
  dropdownTitle: h,
  iconTrigger: u,
  disabled: l = !1,
  borderless: d = !1
}) {
  const m = Array.isArray(e) ? e : [], [N, y] = j(!1), [I, C] = j(!1), k = A((p) => m.includes(p), [m]), S = A(
    (p) => {
      l || (m.includes(p) ? r(m.filter((z) => z !== p)) : r([...m, p]));
    },
    [m, r, l]
  ), w = A(
    (p, z) => {
      z.stopPropagation(), !l && r(m.filter((P) => P !== p));
    },
    [m, r, l]
  ), g = A(() => {
    l || r([]);
  }, [r, l]), b = o ?? (n.length > 5 ? "dropdown" : "buttons"), f = n.filter((p) => m.includes(p.value));
  if (b === "dropdown")
    return u ? /* @__PURE__ */ i(D, { open: N, onOpenChange: y, children: [
      /* @__PURE__ */ t(te, { asChild: !0, children: /* @__PURE__ */ i(
        "button",
        {
          disabled: l,
          className: v(
            "inline-flex items-center justify-center gap-1 h-7 px-2",
            "bg-muted/30 border border-transparent hover:border-border hover:bg-muted/50 transition-colors",
            l && "opacity-50 cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ t(u, { className: "h-4 w-4" }),
            f.length > 0 && /* @__PURE__ */ t("span", { className: "min-w-[18px] h-[18px] rounded-full bg-primary text-primary-foreground text-[10px] font-medium flex items-center justify-center", children: f.length }),
            /* @__PURE__ */ t(K, { className: "h-3 w-3 opacity-50" })
          ]
        }
      ) }),
      /* @__PURE__ */ i(W, { align: "start", className: "w-[220px] p-0 gap-0", sideOffset: 4, children: [
        /* @__PURE__ */ i("div", { className: "px-3 py-2 border-b border-border flex items-center justify-between", children: [
          /* @__PURE__ */ t("span", { className: "text-xs font-medium text-muted-foreground", children: h || `${f.length} selected` }),
          f.length > 0 && /* @__PURE__ */ t(
            "button",
            {
              onClick: g,
              className: "text-[10px] text-muted-foreground hover:text-foreground transition-colors",
              children: "Clear"
            }
          )
        ] }),
        /* @__PURE__ */ t("div", { className: "max-h-[200px] overflow-y-auto p-1", children: n.map((p) => {
          const z = p.icon, P = k(p.value);
          return /* @__PURE__ */ i(
            "button",
            {
              onClick: () => S(p.value),
              className: v(
                "w-full flex items-center gap-2 px-2 py-1.5 text-xs transition-colors",
                P ? "bg-primary/10 text-foreground" : "hover:bg-muted text-muted-foreground hover:text-foreground"
              ),
              children: [
                /* @__PURE__ */ t("div", { className: v(
                  "h-4 w-4 rounded border flex items-center justify-center shrink-0 transition-colors",
                  P ? "bg-primary border-primary" : "border-border bg-background"
                ), children: P && /* @__PURE__ */ t(X, { className: "h-3 w-3 text-primary-foreground" }) }),
                z && /* @__PURE__ */ t(z, { className: "h-3.5 w-3.5 shrink-0" }),
                /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", children: p.label })
              ]
            },
            p.value
          );
        }) })
      ] })
    ] }) : /* @__PURE__ */ i(D, { open: N, onOpenChange: y, children: [
      /* @__PURE__ */ t(te, { asChild: !0, children: /* @__PURE__ */ i(
        "button",
        {
          disabled: l,
          className: v(
            "inline-flex items-center justify-between gap-2 h-7 px-3 text-xs w-full min-w-[180px]",
            "bg-muted/30 border border-transparent hover:border-border transition-colors",
            l && "opacity-50 cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5 flex-1 overflow-hidden", children: f.length > 0 ? /* @__PURE__ */ i(fe, { children: [
              f.slice(0, 2).map((p) => /* @__PURE__ */ i(
                Me,
                {
                  variant: "secondary",
                  className: "h-5 px-1.5 text-[10px] font-normal gap-1 shrink-0",
                  children: [
                    p.icon && /* @__PURE__ */ t(p.icon, { className: "h-3 w-3" }),
                    /* @__PURE__ */ t("span", { className: "truncate max-w-[50px]", children: p.label })
                  ]
                },
                p.value
              )),
              f.length > 2 && /* @__PURE__ */ i("span", { className: "text-muted-foreground text-[10px]", children: [
                "+",
                f.length - 2
              ] })
            ] }) : /* @__PURE__ */ t("span", { className: "text-muted-foreground", children: c }) }),
            /* @__PURE__ */ t(K, { className: "h-3.5 w-3.5 opacity-50 shrink-0" })
          ]
        }
      ) }),
      /* @__PURE__ */ i(W, { align: "start", className: "w-[220px] p-0 gap-0", sideOffset: 4, children: [
        (h || f.length > 0) && /* @__PURE__ */ i("div", { className: "px-3 py-2 border-b border-border flex items-center justify-between", children: [
          /* @__PURE__ */ t("span", { className: "text-xs font-medium text-muted-foreground", children: h || `${f.length} selected` }),
          f.length > 0 && /* @__PURE__ */ t(
            "button",
            {
              onClick: g,
              className: "text-[10px] text-muted-foreground hover:text-foreground transition-colors",
              children: "Clear all"
            }
          )
        ] }),
        /* @__PURE__ */ t("div", { className: "max-h-[200px] overflow-y-auto p-1", children: n.map((p) => {
          const z = p.icon, P = k(p.value);
          return /* @__PURE__ */ i(
            "button",
            {
              onClick: () => S(p.value),
              className: v(
                "w-full flex items-center gap-2 px-2 py-1.5 text-xs transition-colors",
                P ? "bg-primary/10 text-foreground" : "hover:bg-muted text-muted-foreground hover:text-foreground"
              ),
              children: [
                /* @__PURE__ */ t("div", { className: v(
                  "h-4 w-4 rounded border flex items-center justify-center shrink-0 transition-colors",
                  P ? "bg-primary border-primary" : "border-border bg-background"
                ), children: P && /* @__PURE__ */ t(X, { className: "h-3 w-3 text-primary-foreground" }) }),
                z && /* @__PURE__ */ t(z, { className: "h-3.5 w-3.5 shrink-0" }),
                /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", children: p.label })
              ]
            },
            p.value
          );
        }) }),
        f.length > 0 && /* @__PURE__ */ t("div", { className: "border-t border-border p-2", children: /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-1", children: f.map((p) => /* @__PURE__ */ i(
          Me,
          {
            variant: "secondary",
            className: "h-5 px-1.5 text-[10px] font-normal gap-1 pr-0.5",
            children: [
              p.icon && /* @__PURE__ */ t(p.icon, { className: "h-3 w-3" }),
              /* @__PURE__ */ t("span", { className: "truncate max-w-[60px]", children: p.label }),
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: (z) => w(p.value, z),
                  className: "ml-0.5 p-0.5 rounded hover:bg-muted-foreground/20 transition-colors",
                  children: /* @__PURE__ */ t(Ge, { className: "h-3 w-3" })
                }
              )
            ]
          },
          p.value
        )) }) })
      ] })
    ] });
  const x = s !== void 0 && n.length > s, O = x ? n.slice(0, s - 1) : n, E = x ? n.slice(s - 1) : [], V = E.filter((p) => m.includes(p.value)), T = (p, z, P) => {
    const L = k(p.value), Z = p.icon, q = Z && (a === "icon" || a === "both"), ie = a === "text" || a === "both", Y = /* @__PURE__ */ i(
      "button",
      {
        onClick: () => S(p.value),
        disabled: l,
        className: v(
          "flex items-center justify-center gap-1.5 font-medium transition-all",
          "h-full px-2.5 text-xs",
          z && "rounded-l-md",
          P && !x && "rounded-r-md",
          !z && !P && "rounded-none",
          L ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
          l && "opacity-50 cursor-not-allowed"
        ),
        children: [
          q && /* @__PURE__ */ t(Z, { className: "h-3.5 w-3.5" }),
          ie && /* @__PURE__ */ t("span", { className: "truncate", children: p.label })
        ]
      },
      p.value
    ), H = p.hoverText || (a === "icon" ? p.label : void 0);
    return H && !l ? /* @__PURE__ */ t(Ie, { delayDuration: 200, children: /* @__PURE__ */ i(Se, { children: [
      /* @__PURE__ */ t(ze, { asChild: !0, children: Y }),
      /* @__PURE__ */ t(Oe, { side: "bottom", className: "text-xs", children: H })
    ] }) }, p.value) : Y;
  };
  return /* @__PURE__ */ i("div", { className: v(
    "inline-flex h-7 items-center box-border",
    !d && "border border-border/40 bg-muted/30 p-0.5 shadow-sm",
    l && "opacity-50"
  ), children: [
    O.map(
      (p, z) => T(p, z === 0, z === O.length - 1)
    ),
    x && /* @__PURE__ */ i(D, { open: I, onOpenChange: C, children: [
      /* @__PURE__ */ t(te, { asChild: !0, children: /* @__PURE__ */ i(
        "button",
        {
          disabled: l,
          className: v(
            "flex items-center justify-center gap-1 font-medium transition-all rounded-r-md",
            "h-full px-2.5 text-xs",
            V.length > 0 ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
            l && "cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ t("span", { children: V.length > 0 ? `+${V.length}` : "More" }),
            /* @__PURE__ */ t(K, { className: "h-3 w-3" })
          ]
        }
      ) }),
      /* @__PURE__ */ t(W, { align: "end", className: "w-44 p-1 gap-0", children: E.map((p) => {
        const z = p.icon, P = k(p.value);
        return /* @__PURE__ */ i(
          "button",
          {
            onClick: () => S(p.value),
            className: v(
              "w-full flex items-center gap-2 px-2 py-1 text-xs rounded-sm transition-colors",
              P ? "bg-accent text-accent-foreground" : "hover:bg-muted"
            ),
            children: [
              z && /* @__PURE__ */ t(z, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", children: p.label }),
              P && /* @__PURE__ */ t(X, { className: "h-3.5 w-3.5" })
            ]
          },
          p.value
        );
      }) })
    ] })
  ] });
}
function xr({
  value: e,
  onChange: r,
  min: n = 0,
  max: o = 100,
  step: a = 1,
  disabled: s = !1,
  className: c,
  variant: h = "stepper"
}) {
  if (h === "slider")
    return /* @__PURE__ */ i("div", { className: v("flex items-center gap-3 flex-1", c), children: [
      /* @__PURE__ */ t(
        et,
        {
          value: [e],
          onValueChange: (m) => r(m[0]),
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
    const m = e + a;
    (o === void 0 || m <= o) && r(m);
  }, l = () => {
    if (s) return;
    const m = e - a;
    (n === void 0 || m >= n) && r(m);
  }, d = (m) => {
    const N = parseInt(m.target.value, 10);
    if (!isNaN(N)) {
      let y = N;
      n !== void 0 && (y = Math.max(n, y)), o !== void 0 && (y = Math.min(o, y)), r(y);
    }
  };
  return /* @__PURE__ */ i("div", { className: v("flex items-center gap-0.5 flex-1", c), children: [
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        onClick: l,
        disabled: s || n !== void 0 && e <= n,
        className: "h-7 w-7 flex items-center justify-center bg-muted/30 hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors",
        children: /* @__PURE__ */ t(ft, { className: "h-3 w-3" })
      }
    ),
    /* @__PURE__ */ t(
      ge,
      {
        type: "number",
        value: e,
        min: n,
        max: o,
        step: a,
        disabled: s,
        onChange: d,
        className: "h-7 text-center text-xs bg-muted/30 border-transparent hover:border-border focus:border-border focus:bg-background transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      }
    ),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        onClick: u,
        disabled: s || o !== void 0 && e >= o,
        className: "h-7 w-7 flex items-center justify-center bg-muted/30 hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors",
        children: /* @__PURE__ */ t(mt, { className: "h-3 w-3" })
      }
    )
  ] });
}
function er({ className: e, ...r }) {
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
function tr(e) {
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
  className: c,
  ...h
}) {
  const [u, l] = j(!1), d = $(null), m = tr(e), N = m ? n.filter((w) => w.toLowerCase().includes(m.toLowerCase())) : n, y = (w) => {
    const g = w.target.value;
    r(g), n.length > 0 && l(!0);
  }, I = (w) => {
    const g = e.split(/\s+/);
    g[g.length - 1] = w, r(g.join(" ")), l(!1), d.current?.focus();
  }, C = (w) => {
    n.length > 0 && l(!0), h.onFocus?.(w);
  }, k = (w) => {
    setTimeout(() => l(!1), 150), h.onBlur?.(w);
  }, S = n.length > 0;
  return /* @__PURE__ */ i(D, { open: u && N.length > 0, onOpenChange: l, modal: !1, children: [
    /* @__PURE__ */ t(pe, { asChild: !0, children: /* @__PURE__ */ t("div", { className: "relative flex-1", children: /* @__PURE__ */ i("div", { className: "relative", children: [
      /* @__PURE__ */ t(
        er,
        {
          ref: d,
          value: e,
          onChange: y,
          onFocus: C,
          onBlur: k,
          className: v(
            "min-h-[60px] text-xs bg-muted/30 border-transparent hover:border-border focus:border-border focus:bg-background transition-colors placeholder:text-muted-foreground/50 scrollbar-none",
            S && "pr-6",
            o && "focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-border",
            a ? "resize-none" : "resize-y",
            !s && "field-sizing-fixed",
            c
          ),
          ...h
        }
      ),
      S && /* @__PURE__ */ t(K, { className: "absolute right-2 top-3 h-3 w-3 text-muted-foreground/50" })
    ] }) }) }),
    /* @__PURE__ */ t(
      W,
      {
        align: "start",
        sideOffset: 5,
        className: "p-1 min-w-[var(--radix-popover-trigger-width)] bg-popover border border-border rounded-md shadow-lg",
        onOpenAutoFocus: (w) => w.preventDefault(),
        children: /* @__PURE__ */ t("div", { className: "max-h-40 overflow-auto", children: N.map((w) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: v(
              "w-full px-2 py-1.5 text-xs text-left hover:bg-accent hover:text-accent-foreground",
              w === e && "bg-accent/50"
            ),
            onMouseDown: (g) => g.preventDefault(),
            onClick: () => I(w),
            title: w,
            children: /* @__PURE__ */ t("span", { className: "block truncate", children: w })
          },
          w
        )) })
      }
    )
  ] });
}
function vr({
  value: e,
  onChange: r,
  label: n = "Edit Python",
  disabled: o = !1,
  suggestions: a = []
}) {
  const [s, c] = j(!1), [h, u] = j(""), l = $(null), d = typeof e == "string" ? e : "";
  R(() => {
    s && u(d);
  }, [s, d]), R(() => () => {
    l.current?.dispose();
  }, []);
  const m = (C, k) => {
    l.current?.dispose(), a.length !== 0 && (l.current = k.languages.registerCompletionItemProvider("python", {
      provideCompletionItems: (S, w) => {
        const g = S.getWordUntilPosition(w), b = {
          startLineNumber: w.lineNumber,
          endLineNumber: w.lineNumber,
          startColumn: g.startColumn,
          endColumn: g.endColumn
        };
        return {
          suggestions: a.map((f, x) => ({
            label: f,
            kind: k.languages.CompletionItemKind.Text,
            insertText: f,
            range: b,
            sortText: String(x).padStart(5, "0")
          }))
        };
      }
    }));
  }, N = (C) => {
    u(C || "");
  }, y = () => {
    r(h), c(!1);
  }, I = d.split(`
`).length;
  return /* @__PURE__ */ i(Ke, { open: s, onOpenChange: (C) => !o && c(C), children: [
    /* @__PURE__ */ t(Qe, { asChild: !0, children: /* @__PURE__ */ i(
      "button",
      {
        disabled: o,
        className: "w-full flex items-center justify-between gap-2 h-7 px-2 text-xs bg-muted/30 border border-transparent hover:border-border hover:bg-muted/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-transparent disabled:hover:bg-muted/30",
        children: [
          /* @__PURE__ */ i("span", { className: "flex items-center gap-1.5 text-muted-foreground", children: [
            /* @__PURE__ */ t(Be, { className: "h-3.5 w-3.5" }),
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
          /* @__PURE__ */ t(qe, { className: "px-4 py-3 flex-shrink-0 bg-muted/50 border-b border-border", children: /* @__PURE__ */ i(Xe, { className: "flex items-center gap-2 text-sm font-medium", children: [
            /* @__PURE__ */ t(Be, { className: "h-4 w-4 text-primary" }),
            n
          ] }) }),
          /* @__PURE__ */ t("div", { className: "flex-1 min-h-0 bg-background", children: /* @__PURE__ */ t(
            Je,
            {
              height: "100%",
              defaultLanguage: "python",
              value: h,
              onChange: N,
              onMount: m,
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
                me,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => c(!1),
                  className: "h-7 px-3 text-xs",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ i(
                me,
                {
                  size: "sm",
                  onClick: y,
                  className: "h-7 px-4 text-xs",
                  children: [
                    /* @__PURE__ */ t(X, { className: "h-3.5 w-3.5 mr-1.5" }),
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
function Fe(e) {
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
function wr({
  value: e,
  onChange: r,
  placeholder: n = "Type and press Enter...",
  disabled: o = !1,
  className: a
}) {
  const [s, c] = j(""), [h, u] = j(!1), [l, d] = j(""), m = $(null), N = (g) => {
    r([...e, g]), c(""), u(!1), d("");
  }, y = (g) => {
    r([...e, ...g]), c(""), u(!1), d("");
  }, I = (g) => {
    o || r(e.filter((b, f) => f !== g));
  }, C = (g) => {
    const b = g.clipboardData.getData("text"), f = Fe(b);
    f && f.length > 0 && (g.preventDefault(), y(f));
  }, k = (g) => {
    const b = s.trim();
    if (g.key === "Enter" && b) {
      g.preventDefault();
      const f = Fe(b);
      if (f && f.length > 0) {
        y(f);
        return;
      }
      /^\d+$/.test(b) ? (d(b), u(!0), c("")) : N(b);
    }
    g.key === "Backspace" && !s && e.length > 0 && I(e.length - 1), g.key === "Escape" && h && (u(!1), d(""));
  }, S = () => {
    N(l);
  }, w = () => {
    N(parseInt(l, 10));
  };
  return /* @__PURE__ */ i(D, { open: h, onOpenChange: (g) => !g && u(!1), modal: !1, children: [
    /* @__PURE__ */ t(pe, { asChild: !0, children: /* @__PURE__ */ t("div", { className: v("relative flex-1", a), children: /* @__PURE__ */ i(
      "div",
      {
        className: v(
          "flex flex-wrap items-center gap-1.5 min-h-7 px-2 py-1",
          "bg-muted/30 border border-transparent transition-colors",
          "focus-within:border-border",
          !o && "hover:border-border",
          o && "opacity-50 cursor-not-allowed"
        ),
        onClick: () => m.current?.focus(),
        children: [
          e.map((g, b) => /* @__PURE__ */ i(
            "span",
            {
              className: v(
                "inline-flex items-center gap-1 h-5 px-1.5 rounded text-xs font-mono",
                typeof g == "number" ? "bg-primary/20 text-primary" : "bg-accent text-accent-foreground"
              ),
              children: [
                typeof g == "number" ? /* @__PURE__ */ t(Ne, { className: "h-2.5 w-2.5" }) : /* @__PURE__ */ t(ye, { className: "h-2.5 w-2.5" }),
                String(g),
                !o && /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    onClick: (f) => {
                      f.stopPropagation(), I(b);
                    },
                    className: "opacity-50 hover:opacity-100 hover:text-destructive",
                    children: /* @__PURE__ */ t(Ge, { className: "h-2.5 w-2.5" })
                  }
                )
              ]
            },
            b
          )),
          !o && /* @__PURE__ */ t(
            "input",
            {
              ref: m,
              type: "text",
              value: s,
              onChange: (g) => c(g.target.value),
              onKeyDown: k,
              onPaste: C,
              placeholder: e.length === 0 ? n : "",
              className: "flex-1 min-w-[80px] h-5 bg-transparent text-xs outline-none placeholder:text-muted-foreground/50"
            }
          )
        ]
      }
    ) }) }),
    /* @__PURE__ */ i(
      W,
      {
        align: "start",
        sideOffset: 5,
        className: "p-1 min-w-[180px] bg-popover border border-border rounded-md shadow-lg",
        onOpenAutoFocus: (g) => g.preventDefault(),
        children: [
          /* @__PURE__ */ i("div", { className: "px-2 py-1 text-[10px] text-muted-foreground border-b border-border mb-1", children: [
            '"',
            l,
            '" — choose type:'
          ] }),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              onClick: S,
              className: "w-full flex items-center gap-2 px-2 py-1.5 text-xs rounded hover:bg-accent text-left",
              children: [
                /* @__PURE__ */ t(ye, { className: "h-3.5 w-3.5 text-muted-foreground" }),
                /* @__PURE__ */ i("code", { className: "text-foreground", children: [
                  '"',
                  l,
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
                /* @__PURE__ */ t(Ne, { className: "h-3.5 w-3.5 text-primary" }),
                /* @__PURE__ */ i("code", { className: "text-primary", children: [
                  "[",
                  l,
                  "]"
                ] }),
                /* @__PURE__ */ t("span", { className: "text-muted-foreground text-[10px] ml-auto", children: "index" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function rr(e) {
  const r = e.trim();
  if (!r) return null;
  try {
    const n = r.match(/^https?:\/\//) ? r : `https://${r}`, a = new URL(n).hostname;
    return a.includes(".") ? a : null;
  } catch {
    return null;
  }
}
function Nr({
  value: e,
  onChange: r,
  faviconSize: n = 16,
  className: o,
  ...a
}) {
  const s = F(() => rr(e), [e]), c = s ? `https://www.google.com/s2/favicons?domain=${s}&sz=${n}` : null;
  return /* @__PURE__ */ i("div", { className: v("relative flex items-center flex-1", o), children: [
    /* @__PURE__ */ t("div", { className: "absolute left-2 flex items-center justify-center w-4 h-4 pointer-events-none z-10", children: c ? /* @__PURE__ */ t(
      "img",
      {
        src: c,
        alt: "",
        width: n,
        height: n,
        className: "w-4 h-4 rounded-sm",
        onError: (h) => {
          h.target.style.display = "none";
        }
      }
    ) : /* @__PURE__ */ t(ht, { className: "w-3.5 h-3.5 text-muted-foreground/50" }) }),
    /* @__PURE__ */ t(
      Ye,
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
  Nt as BooleanInput,
  mr as DynamicInput,
  hr as EnumInput,
  pr as IconInput,
  wr as JsonPathInput,
  gr as MultiEnumSelect,
  xr as NumberInput,
  Ct as NumericalInput,
  kt as ObjectInput,
  vr as PythonInput,
  br as TextAreaInput,
  Ye as TextInput,
  Nr as UrlInput
};
