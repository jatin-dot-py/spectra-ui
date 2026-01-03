import { jsx as t, jsxs as d, Fragment as ue } from "react/jsx-runtime";
import * as We from "react";
import { useState as V, useRef as Z, useEffect as W, useMemo as G, useCallback as P, memo as Ge, useImperativeHandle as Je, createElement as Se, useLayoutEffect as we } from "react";
import { RadioGroup as xe, Checkbox as Oe, Switch as Te, Popover as fe, Slider as se, Select as M } from "radix-ui";
import { c as b } from "./utils-B6yFEsav.js";
import { CircleIcon as Qe, CheckIcon as $e, ChevronDown as _, Code2 as je, Check as Y, Braces as Ze, ToggleLeft as Ke, Hash as Xe, Type as Ye, CircleSlash as qe, ChevronDownIcon as Ae, ChevronUpIcon as et, X as tt, Minus as rt, Plus as nt } from "lucide-react";
import ot from "@monaco-editor/react";
import { B as Ee } from "./button-DHQhRgTM.js";
import { D as at, a as it, b as st, c as lt, d as ct } from "./dialog-CDPimJCA.js";
import { T as Ne, a as ye, b as Ie, c as Ce } from "./tooltip-Cep25X0w.js";
import { f as dt, A as Ve, g as ut, a as ft, B as Be } from "./badge-B1vpNSNG.js";
function mt({
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
          children: /* @__PURE__ */ t(Qe, { className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-current" })
        }
      )
    }
  );
}
function ht({
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
            $e,
            {}
          )
        }
      )
    }
  );
}
function pt({
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
function gt({
  value: e,
  onChange: r,
  className: n,
  variant: o = "checkbox",
  ...a
}) {
  const i = We.useId();
  return o === "switch" ? /* @__PURE__ */ t(
    pt,
    {
      checked: e,
      onCheckedChange: (l) => r(!!l),
      className: n,
      ...a
    }
  ) : o === "radio" ? /* @__PURE__ */ d(
    mt,
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
    ht,
    {
      checked: e,
      onCheckedChange: (l) => r(!!l),
      className: b("h-3.5 w-3.5", n),
      ...a
    }
  );
}
function q({
  ...e
}) {
  return /* @__PURE__ */ t(fe.Root, { "data-slot": "popover", ...e });
}
function ee({
  ...e
}) {
  return /* @__PURE__ */ t(fe.Trigger, { "data-slot": "popover-trigger", ...e });
}
function te({
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
function bt(e) {
  const r = e.split(/\s+/);
  return r[r.length - 1] || "";
}
function xt({
  value: e,
  onChange: r,
  suggestions: n = [],
  noRing: o = !1,
  frozen: a = !1,
  className: i,
  ...l
}) {
  const [h, f] = V(!1), [s, c] = V(!a), m = Z(null), w = bt(e), N = w ? n.filter((g) => g.toLowerCase().includes(w.toLowerCase())) : n, C = (g) => {
    const p = g.target.value;
    r(p), n.length > 0 && f(!0);
  }, y = (g) => {
    const p = e.split(/\s+/);
    p[p.length - 1] = g, r(p.join(" ")), f(!1), m.current?.focus();
  }, k = (g) => {
    n.length > 0 && f(!0), l.onFocus?.(g);
  }, S = (g) => {
    setTimeout(() => f(!1), 150), l.onBlur?.(g);
  }, x = () => {
    a && !s && (c(!0), setTimeout(() => m.current?.focus(), 0));
  }, I = n.length > 0, v = a && !s;
  return /* @__PURE__ */ d("div", { className: "relative flex-1", children: [
    /* @__PURE__ */ d("div", { className: "relative", children: [
      v && /* @__PURE__ */ t(
        "div",
        {
          onClick: x,
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
          ref: m,
          value: e,
          onChange: C,
          onFocus: k,
          onBlur: S,
          disabled: v || l.disabled,
          className: b(
            "h-7 text-xs bg-muted/30 border-transparent hover:border-border focus:border-border focus:bg-background transition-colors placeholder:text-muted-foreground/50",
            I && "pr-6",
            o && "focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-border",
            v && "opacity-60",
            i
          ),
          ...l
        }
      ),
      I && /* @__PURE__ */ t(_, { className: "absolute right-2 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground/50" })
    ] }),
    h && N.length > 0 && /* @__PURE__ */ t("div", { className: "absolute top-full left-0 right-0 z-50 mt-1 bg-popover border border-border rounded-md shadow-md py-1", children: /* @__PURE__ */ t("div", { className: "max-h-40 overflow-auto", children: N.map((g) => /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: b(
          "w-full px-2 py-1.5 text-xs text-left hover:bg-accent hover:text-accent-foreground",
          g === e && "bg-accent/50"
        ),
        onMouseDown: (p) => p.preventDefault(),
        onClick: () => y(g),
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
  const l = We.useMemo(
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
        Array.from({ length: l.length }, (h, f) => /* @__PURE__ */ t(
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
function vt({
  value: e,
  onChange: r,
  placeholder: n = "0",
  disabled: o = !1,
  className: a,
  variant: i = "input",
  min: l = 0,
  max: h = 100,
  step: f = 1
}) {
  const [s, c] = V(String(e));
  return W(() => {
    c(String(e));
  }, [e]), i === "slider" ? /* @__PURE__ */ d("div", { className: b("flex items-center gap-3 flex-1", a), children: [
    /* @__PURE__ */ t(
      De,
      {
        value: [e],
        onValueChange: (N) => r(N[0]),
        min: l,
        max: h,
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
      onChange: (N) => {
        const C = N.target.value;
        c(C);
        const y = parseFloat(C);
        isNaN(y) ? (C === "" || C === "-") && r(0) : r(y);
      },
      onBlur: () => {
        const N = parseFloat(s);
        isNaN(N) ? (c("0"), r(0)) : c(String(N));
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
function wt({
  value: e,
  onChange: r,
  label: n = "Edit JSON",
  disabled: o = !1,
  suggestions: a = []
}) {
  const [i, l] = V(!1), [h, f] = V(""), [s, c] = V(null), m = Z(null), w = typeof e == "object" ? JSON.stringify(e, null, 2) : typeof e == "string" ? e : "";
  W(() => {
    i && (f(w), c(null));
  }, [i, w]), W(() => () => {
    m.current?.dispose();
  }, []);
  const N = (x, I) => {
    if (m.current?.dispose(), a.length === 0) return;
    const g = x.getModel()?.getLanguageId() ?? "json";
    m.current = I.languages.registerCompletionItemProvider(g, {
      provideCompletionItems: (p, O) => {
        const E = p.getWordUntilPosition(O), B = {
          startLineNumber: O.lineNumber,
          endLineNumber: O.lineNumber,
          startColumn: E.startColumn,
          endColumn: E.endColumn
        };
        return {
          suggestions: a.map((j, u) => ({
            label: j,
            kind: I.languages.CompletionItemKind.Text,
            insertText: j,
            range: B,
            sortText: String(u).padStart(5, "0")
          }))
        };
      }
    });
  }, C = (x) => {
    const I = x || "";
    f(I);
    try {
      JSON.parse(I), c(null);
    } catch (v) {
      c(v.message);
    }
  }, y = () => {
    try {
      const x = JSON.parse(h);
      r(x), l(!1);
    } catch (x) {
      c(x.message);
    }
  }, k = w.split(`
`).length;
  return /* @__PURE__ */ d(at, { open: i, onOpenChange: (x) => !o && l(x), children: [
    /* @__PURE__ */ t(it, { asChild: !0, children: /* @__PURE__ */ d(
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
            k,
            " lines"
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ d(
      st,
      {
        className: "p-0 gap-0 flex flex-col overflow-hidden",
        style: {
          width: "calc(100vw - 120px)",
          maxWidth: "800px",
          height: "calc(100vh - 120px)",
          maxHeight: "600px"
        },
        children: [
          /* @__PURE__ */ t(lt, { className: "px-4 py-3 flex-shrink-0 bg-muted/50 border-b border-border", children: /* @__PURE__ */ d(ct, { className: "flex items-center gap-2 text-sm font-medium", children: [
            /* @__PURE__ */ t(je, { className: "h-4 w-4 text-primary" }),
            n
          ] }) }),
          /* @__PURE__ */ t("div", { className: "flex-1 min-h-0 bg-background", children: /* @__PURE__ */ t(
            ot,
            {
              height: "100%",
              defaultLanguage: "json",
              value: h,
              onChange: C,
              onMount: N,
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
          /* @__PURE__ */ d("div", { className: "px-4 py-3 flex-shrink-0 bg-muted/50 border-t border-border flex items-center justify-between", children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: s ? /* @__PURE__ */ d(ue, { children: [
              /* @__PURE__ */ t("div", { className: "h-2 w-2 rounded-full bg-destructive" }),
              /* @__PURE__ */ t("p", { className: "text-xs text-destructive truncate max-w-[300px]", children: s })
            ] }) : /* @__PURE__ */ d(ue, { children: [
              /* @__PURE__ */ t("div", { className: "h-2 w-2 rounded-full bg-primary" }),
              /* @__PURE__ */ t("span", { className: "text-xs text-muted-foreground", children: "Valid JSON" })
            ] }) }),
            /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ t(
                Ee,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => l(!1),
                  className: "h-7 px-3 text-xs",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ d(
                Ee,
                {
                  size: "sm",
                  onClick: y,
                  disabled: !(s === null),
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
  null: { label: "Null", icon: qe, default: null },
  string: { label: "String", icon: Ye, default: "" },
  number: { label: "Number", icon: Xe, default: 0 },
  boolean: { label: "Boolean", icon: Ke, default: !1 },
  object: { label: "Object", icon: Ze, default: {} }
};
function Nt(e) {
  return e == null ? "null" : typeof e == "string" ? "string" : typeof e == "number" ? "number" : typeof e == "boolean" ? "boolean" : typeof e == "object" ? "object" : "null";
}
function lr({
  value: e,
  onChange: r,
  allowedTypes: n = ["null", "string", "number", "boolean", "object"],
  disabled: o = !1
}) {
  const [a, i] = V(!1), l = G(() => Nt(e), [e]), h = (c) => {
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
          xt,
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
          vt,
          {
            value: e,
            onChange: r,
            disabled: o,
            className: "flex-1"
          }
        );
      case "boolean":
        return /* @__PURE__ */ t("div", { className: "flex-1 flex items-center", children: /* @__PURE__ */ t(
          gt,
          {
            variant: "radio",
            value: e,
            onChange: r,
            disabled: o
          }
        ) });
      case "object":
        return /* @__PURE__ */ t(
          wt,
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
    /* @__PURE__ */ d(q, { open: a, onOpenChange: i, children: [
      /* @__PURE__ */ t(ee, { asChild: !0, children: /* @__PURE__ */ d(
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
      /* @__PURE__ */ t(te, { align: "start", className: "w-36 p-1 gap-0", children: n.map((c) => {
        const m = le[c].icon;
        return /* @__PURE__ */ d(
          "button",
          {
            onClick: () => h(c),
            className: b(
              "w-full flex items-center gap-2 px-2 py-1.5 text-xs rounded-sm transition-colors",
              c === l ? "bg-accent text-accent-foreground" : "hover:bg-muted"
            ),
            children: [
              /* @__PURE__ */ t(m, { className: "h-3.5 w-3.5" }),
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
function yt({
  ...e
}) {
  return /* @__PURE__ */ t(M.Root, { "data-slot": "select", ...e });
}
function It({
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
function kt({
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
        /* @__PURE__ */ t(St, {}),
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
        /* @__PURE__ */ t(Ot, {})
      ]
    }
  ) });
}
function zt({
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
        /* @__PURE__ */ t("span", { className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center", children: /* @__PURE__ */ t(M.ItemIndicator, { children: /* @__PURE__ */ t($e, { className: "pointer-events-none" }) }) }),
        /* @__PURE__ */ t(M.ItemText, { children: r })
      ]
    }
  );
}
function St({
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
        et,
        {}
      )
    }
  );
}
function Ot({
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
function cr({
  value: e,
  onChange: r,
  options: n,
  variant: o,
  buttonDisplay: a = "text",
  maxInline: i,
  placeholder: l = "Select...",
  dropdownTitle: h,
  iconTrigger: f,
  disabled: s = !1,
  borderless: c = !1
}) {
  const [m, w] = V(!1), [N, C] = V(!1), y = P(
    (p) => {
      s || r(p);
    },
    [r, s]
  );
  if ((o ?? (n.length > 5 ? "dropdown" : "buttons")) === "dropdown")
    return f ? /* @__PURE__ */ d(q, { open: N, onOpenChange: C, children: [
      /* @__PURE__ */ t(ee, { asChild: !0, children: /* @__PURE__ */ d(
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
      /* @__PURE__ */ d(te, { align: "start", className: "w-48 p-1 gap-0", children: [
        h && /* @__PURE__ */ t("div", { className: "px-2 py-1.5 text-xs font-medium text-muted-foreground border-b border-border mb-1", children: h }),
        n.map((p) => {
          const O = p.icon, E = e === p.value;
          return /* @__PURE__ */ d(
            "button",
            {
              onClick: () => {
                y(p.value), C(!1);
              },
              className: b(
                "w-full flex items-center gap-2 px-2 py-1.5 text-xs rounded-md transition-colors",
                E ? "bg-accent text-accent-foreground" : "hover:bg-muted"
              ),
              children: [
                O && /* @__PURE__ */ t(O, { className: "h-3.5 w-3.5" }),
                /* @__PURE__ */ t("span", { className: "flex-1 text-left", children: p.label }),
                E && /* @__PURE__ */ t(Y, { className: "h-3.5 w-3.5" })
              ]
            },
            p.value
          );
        })
      ] })
    ] }) : /* @__PURE__ */ d(yt, { value: e || "", onValueChange: y, disabled: s, children: [
      /* @__PURE__ */ t(Ct, { className: "h-8 text-xs bg-muted/30 border-transparent hover:border-border focus:border-border transition-colors", children: /* @__PURE__ */ t(It, { placeholder: l }) }),
      /* @__PURE__ */ d(kt, { children: [
        h && /* @__PURE__ */ t("div", { className: "px-2 py-1.5 text-xs font-medium text-muted-foreground border-b border-border mb-1", children: h }),
        n.map((p) => {
          const O = p.icon;
          return /* @__PURE__ */ t(zt, { value: p.value, className: "text-xs", children: /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
            O && /* @__PURE__ */ t(O, { className: "h-3.5 w-3.5" }),
            p.label
          ] }) }, p.value);
        })
      ] })
    ] });
  const S = i !== void 0 && n.length > i, x = S ? n.slice(0, i - 1) : n, I = S ? n.slice(i - 1) : [], v = I.find((p) => p.value === e), g = (p, O, E) => {
    const B = e === p.value, j = p.icon, u = j && (a === "icon" || a === "both"), z = a === "text" || a === "both", T = /* @__PURE__ */ d(
      "button",
      {
        onClick: () => y(p.value),
        disabled: s,
        className: b(
          "flex items-center justify-center gap-1.5 font-medium transition-all",
          "h-8 px-2.5 text-xs",
          O && "rounded-l-md",
          E && !S && "rounded-r-md",
          !O && !E && "rounded-none",
          B ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
          s && "opacity-50 cursor-not-allowed"
        ),
        children: [
          u && /* @__PURE__ */ t(j, { className: "h-3.5 w-3.5" }),
          z && /* @__PURE__ */ t("span", { className: "truncate", children: p.label })
        ]
      },
      p.value
    ), R = p.hoverText || (a === "icon" ? p.label : void 0);
    return R && !s ? /* @__PURE__ */ t(Ne, { delayDuration: 200, children: /* @__PURE__ */ d(ye, { children: [
      /* @__PURE__ */ t(Ie, { asChild: !0, children: T }),
      /* @__PURE__ */ t(Ce, { side: "bottom", className: "text-xs", children: R })
    ] }) }, p.value) : T;
  };
  return /* @__PURE__ */ d("div", { className: b(
    "inline-flex",
    !c && "rounded-md border border-border/40 bg-muted/30 p-0.5 shadow-sm",
    s && "opacity-50"
  ), children: [
    x.map(
      (p, O) => g(p, O === 0, O === x.length - 1)
    ),
    S && /* @__PURE__ */ d(q, { open: m, onOpenChange: w, children: [
      /* @__PURE__ */ t(ee, { asChild: !0, children: /* @__PURE__ */ d(
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
      /* @__PURE__ */ t(te, { align: "end", className: "w-44 p-1 gap-0", children: I.map((p) => {
        const O = p.icon, E = e === p.value;
        return /* @__PURE__ */ d(
          "button",
          {
            onClick: () => {
              y(p.value), w(!1);
            },
            className: b(
              "w-full flex items-center gap-2 px-2 py-1.5 text-xs rounded-md transition-colors",
              E ? "bg-accent text-accent-foreground" : "hover:bg-muted"
            ),
            children: [
              O && /* @__PURE__ */ t(O, { className: "h-3.5 w-3.5" }),
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
function Tt(e) {
  let r = e;
  for (; r; ) {
    if (r.dir)
      return r.dir === "rtl";
    r = r.parentElement;
  }
  return !1;
}
function jt(e, r) {
  const [n, o] = V(r === "rtl");
  return we(() => {
    e && (r || o(Tt(e)));
  }, [r, e]), n;
}
const me = typeof window < "u" ? we : W;
function Le(e) {
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
function Et({
  box: e,
  defaultHeight: r,
  defaultWidth: n,
  disabled: o,
  element: a,
  mode: i,
  style: l
}) {
  const { styleHeight: h, styleWidth: f } = G(
    () => ({
      styleHeight: Le(l?.height),
      styleWidth: Le(l?.width)
    }),
    [l?.height, l?.width]
  ), [s, c] = V({
    height: r,
    width: n
  }), m = o || i === "only-height" && h !== void 0 || i === "only-width" && f !== void 0 || h !== void 0 && f !== void 0;
  return me(() => {
    if (a === null || m)
      return;
    const w = new ResizeObserver((N) => {
      for (const C of N) {
        const { contentRect: y, target: k } = C;
        a === k && c((S) => S.height === y.height && S.width === y.width ? S : {
          height: y.height,
          width: y.width
        });
      }
    });
    return w.observe(a, { box: e }), () => {
      w?.unobserve(a);
    };
  }, [e, m, a, h, f]), G(
    () => ({
      height: h ?? s.height,
      width: f ?? s.width
    }),
    [s, h, f]
  );
}
function Vt(e) {
  const r = Z(() => {
    throw new Error("Cannot call during render.");
  });
  return me(() => {
    r.current = e;
  }, [e]), P((n) => r.current?.(n), [r]);
}
let X = null;
function Bt(e = !1) {
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
    switch (Bt()) {
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
function U(e, r = "Assertion error") {
  if (!e)
    throw console.error(r), Error(r);
}
function oe(e, r) {
  if (e === r)
    return !0;
  if (!!e != !!r || (U(e !== void 0), U(r !== void 0), Object.keys(e).length !== Object.keys(r).length))
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
    U(o !== void 0, "Unexpected bounds cache miss");
    const a = (o.scrollOffset + o.size) / e.size;
    return r * a;
  }
}
function Rt({
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
  const h = Fe({
    cachedBounds: r,
    itemCount: o,
    itemSize: a
  }), f = r.get(n), s = Math.max(
    0,
    Math.min(h - l, f.scrollOffset)
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
      return f.scrollOffset <= l / 2 ? 0 : f.scrollOffset + f.size / 2 >= h - l / 2 ? h - l : f.scrollOffset + f.size / 2 - l / 2;
    default:
      return i >= c && i <= s ? i : i < c ? c : s;
  }
}
function Me({
  cachedBounds: e,
  containerScrollOffset: r,
  containerSize: n,
  itemCount: o,
  overscanCount: a
}) {
  const i = o - 1;
  let l = 0, h = -1, f = 0, s = -1, c = 0;
  for (; c < i; ) {
    const m = e.get(c);
    if (m.scrollOffset + m.size > r)
      break;
    c++;
  }
  for (l = c, f = Math.max(0, l - a); c < i; ) {
    const m = e.get(c);
    if (m.scrollOffset + m.size >= r + n)
      break;
    c++;
  }
  return h = Math.min(i, c), s = Math.min(o - 1, h + a), l < 0 && (l = 0, h = -1, f = 0, s = -1), {
    startIndexVisible: l,
    stopIndexVisible: h,
    startIndexOverscan: f,
    stopIndexOverscan: s
  };
}
function Lt({
  itemCount: e,
  itemProps: r,
  itemSize: n
}) {
  const o = /* @__PURE__ */ new Map();
  return {
    get(a) {
      for (U(a < e, `Invalid index ${a}`); o.size - 1 < a; ) {
        const l = o.size;
        let h;
        switch (typeof n) {
          case "function": {
            h = n(l, r);
            break;
          }
          case "number": {
            h = n;
            break;
          }
        }
        if (l === 0)
          o.set(l, {
            size: h,
            scrollOffset: 0
          });
        else {
          const f = o.get(l - 1);
          U(
            f !== void 0,
            `Unexpected bounds cache miss for index ${a}`
          ), o.set(l, {
            scrollOffset: f.scrollOffset + f.size,
            size: h
          });
        }
      }
      const i = o.get(a);
      return U(
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
function Mt({
  itemCount: e,
  itemProps: r,
  itemSize: n
}) {
  return G(
    () => Lt({
      itemCount: e,
      itemProps: r,
      itemSize: n
    }),
    [e, r, n]
  );
}
function Pt({
  containerSize: e,
  itemSize: r
}) {
  let n;
  return typeof r === "string" ? (U(
    r.endsWith("%"),
    `Invalid item size: "${r}"; string values must be percentages (e.g. "100%")`
  ), U(
    e !== void 0,
    "Container size must be defined if a percentage item size is specified"
  ), n = e * parseInt(r) / 100) : n = r, n;
}
function Pe({
  containerElement: e,
  containerStyle: r,
  defaultContainerSize: n = 0,
  direction: o,
  isRtl: a = !1,
  itemCount: i,
  itemProps: l,
  itemSize: h,
  onResize: f,
  overscanCount: s
}) {
  const [c, m] = V({
    startIndexVisible: 0,
    startIndexOverscan: 0,
    stopIndexVisible: -1,
    stopIndexOverscan: -1
  }), {
    startIndexVisible: w,
    startIndexOverscan: N,
    stopIndexVisible: C,
    stopIndexOverscan: y
  } = {
    startIndexVisible: Math.min(i - 1, c.startIndexVisible),
    startIndexOverscan: Math.min(i - 1, c.startIndexOverscan),
    stopIndexVisible: Math.min(i - 1, c.stopIndexVisible),
    stopIndexOverscan: Math.min(i - 1, c.stopIndexOverscan)
  }, { height: k = n, width: S = n } = Et({
    defaultHeight: o === "vertical" ? n : void 0,
    defaultWidth: o === "horizontal" ? n : void 0,
    element: e,
    mode: o === "vertical" ? "only-height" : "only-width",
    style: r
  }), x = Z({
    height: 0,
    width: 0
  }), I = o === "vertical" ? k : S, v = Pt({ containerSize: I, itemSize: h });
  we(() => {
    if (typeof f == "function") {
      const j = x.current;
      (j.height !== k || j.width !== S) && (f({ height: k, width: S }, { ...j }), j.height = k, j.width = S);
    }
  }, [k, f, S]);
  const g = Mt({
    itemCount: i,
    itemProps: l,
    itemSize: v
  }), p = P(
    (j) => g.get(j),
    [g]
  ), O = P(
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
      return Me({
        cachedBounds: g,
        containerScrollOffset: u,
        containerSize: I,
        itemCount: i,
        overscanCount: s
      });
    },
    [
      g,
      e,
      I,
      o,
      a,
      i,
      s
    ]
  );
  me(() => {
    const j = (o === "vertical" ? e?.scrollTop : e?.scrollLeft) ?? 0;
    m(E(j));
  }, [e, o, E]), me(() => {
    if (!e)
      return;
    const j = () => {
      m((u) => {
        const { scrollLeft: z, scrollTop: T } = e, R = pe({
          containerElement: e,
          direction: o,
          isRtl: a,
          scrollOffset: o === "vertical" ? T : z
        }), J = Me({
          cachedBounds: g,
          containerScrollOffset: R,
          containerSize: I,
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
    I,
    o,
    i,
    s
  ]);
  const B = Vt(
    ({
      align: j = "auto",
      containerScrollOffset: u,
      index: z
    }) => {
      let T = Rt({
        align: j,
        cachedBounds: g,
        containerScrollOffset: u,
        containerSize: I,
        index: z,
        itemCount: i,
        itemSize: v
      });
      if (e) {
        if (T = pe({
          containerElement: e,
          direction: o,
          isRtl: a,
          scrollOffset: T
        }), typeof e.scrollTo != "function") {
          const R = E(T);
          oe(c, R) || m(R);
        }
        return T;
      }
    }
  );
  return {
    getCellBounds: p,
    getEstimatedSize: O,
    scrollToIndex: B,
    startIndexOverscan: N,
    startIndexVisible: w,
    stopIndexOverscan: y,
    stopIndexVisible: C
  };
}
function Wt(e) {
  return G(() => e, Object.values(e));
}
function $t(e, r) {
  const {
    ariaAttributes: n,
    style: o,
    ...a
  } = e, {
    ariaAttributes: i,
    style: l,
    ...h
  } = r;
  return oe(n, i) && oe(o, l) && oe(a, h);
}
function At({
  cellComponent: e,
  cellProps: r,
  children: n,
  className: o,
  columnCount: a,
  columnWidth: i,
  defaultHeight: l = 0,
  defaultWidth: h = 0,
  dir: f,
  gridRef: s,
  onCellsRendered: c,
  onResize: m,
  overscanCount: w = 3,
  rowCount: N,
  rowHeight: C,
  style: y,
  tagName: k = "div",
  ...S
}) {
  const x = Wt(r), I = G(
    () => Ge(e, $t),
    [e]
  ), [v, g] = V(null), p = jt(v, f), {
    getCellBounds: O,
    getEstimatedSize: E,
    startIndexOverscan: B,
    startIndexVisible: j,
    scrollToIndex: u,
    stopIndexOverscan: z,
    stopIndexVisible: T
  } = Pe({
    containerElement: v,
    containerStyle: y,
    defaultContainerSize: h,
    direction: "horizontal",
    isRtl: p,
    itemCount: a,
    itemProps: x,
    itemSize: i,
    onResize: m,
    overscanCount: w
  }), {
    getCellBounds: R,
    getEstimatedSize: J,
    startIndexOverscan: Q,
    startIndexVisible: ie,
    scrollToIndex: K,
    stopIndexOverscan: $,
    stopIndexVisible: ze
  } = Pe({
    containerElement: v,
    containerStyle: y,
    defaultContainerSize: l,
    direction: "vertical",
    itemCount: N,
    itemProps: x,
    itemSize: C,
    onResize: m,
    overscanCount: w
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
        }), Ue = K({
          align: F,
          containerScrollOffset: v?.scrollTop ?? 0,
          index: H
        });
        typeof v?.scrollTo == "function" && v.scrollTo({
          behavior: A,
          left: re,
          top: Ue
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
        const F = K({
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
    [v, u, K]
  ), W(() => {
    B >= 0 && z >= 0 && Q >= 0 && $ >= 0 && c && c(
      {
        columnStartIndex: j,
        columnStopIndex: T,
        rowStartIndex: ie,
        rowStopIndex: ze
      },
      {
        columnStartIndex: B,
        columnStopIndex: z,
        rowStartIndex: Q,
        rowStopIndex: $
      }
    );
  }, [
    c,
    B,
    j,
    z,
    T,
    Q,
    ie,
    $,
    ze
  ]);
  const He = G(() => {
    const A = [];
    if (a > 0 && N > 0)
      for (let L = Q; L <= $; L++) {
        const D = R(L), F = [];
        for (let H = B; H <= z; H++) {
          const re = O(H);
          F.push(
            /* @__PURE__ */ Se(
              I,
              {
                ...x,
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
    I,
    x,
    a,
    B,
    z,
    O,
    R,
    p,
    N,
    Q,
    $
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
    k,
    {
      "aria-colcount": a,
      "aria-rowcount": N,
      role: "grid",
      ...S,
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
        ...y
      }
    },
    He,
    n,
    _e
  );
}
const ke = [
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
function Dt() {
  return ke;
}
async function Ft(e) {
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
function Ht(e) {
  return Object.keys(e).filter((r) => {
    if (!/^[A-Z]/.test(r) || ["createLucideIcon", "Icon", "IconNode", "LucideIcon"].includes(r)) return !1;
    const o = e[r];
    return typeof o == "function" || typeof o == "object";
  });
}
async function _t(e) {
  if (ae.has(e))
    return ae.get(e);
  if (ve.has(e))
    return [];
  if (ce.has(e))
    return ce.get(e);
  const r = (async () => {
    try {
      const n = await Ft(e), a = Ht(n).map((i) => dt(e, i));
      return ae.set(e, a), ne = null, a;
    } catch (n) {
      return console.warn(`Failed to enumerate icons in pack "${e}":`, n), ve.add(e), [];
    } finally {
      ce.delete(e);
    }
  })();
  return ce.set(e, r), r;
}
async function Ut() {
  return ne || (ne = (await Promise.all(
    ke.map((r) => _t(r))
  )).flat(), ne);
}
function Gt() {
  return ae.size;
}
function Jt() {
  return ae.size + ve.size >= ke.length;
}
function Qt(e, r = 150) {
  const [n, o] = V(e), [a, i] = V(!1), [l, h] = V(!0), [f, s] = V([]), [c, m] = V(0), w = Z(null);
  return W(() => {
    let C = !0;
    return (async () => {
      h(!0);
      try {
        const k = await Ut();
        C && (s(k), h(!1), m(100));
      } catch (k) {
        console.error("Failed to load icons:", k), C && h(!1);
      }
    })(), () => {
      C = !1;
    };
  }, []), W(() => {
    if (l) {
      const C = setInterval(() => {
        const y = Gt(), k = Dt().length;
        m(Math.round(y / k * 100)), Jt() && clearInterval(C);
      }, 100);
      return () => clearInterval(C);
    }
  }, [l]), W(() => (i(!0), w.current && clearTimeout(w.current), w.current = setTimeout(() => {
    o(e), i(!1);
  }, r), () => {
    w.current && clearTimeout(w.current);
  }), [e, r]), {
    results: G(() => {
      if (!n.trim())
        return f.slice(0, 500);
      const C = n.toLowerCase();
      return f.filter((y) => {
        const k = y.indexOf(":");
        return (k !== -1 ? y.slice(k + 1) : y).toLowerCase().includes(C);
      });
    }, [n, f]),
    isSearching: a,
    isLoading: l,
    loadProgress: c,
    totalCount: f.length
  };
}
const Zt = 20, ge = 40, be = 280, de = 6;
function dr({
  value: e,
  onChange: r,
  placeholder: n = "Search icons...",
  disabled: o = !1
}) {
  const [a, i] = V(e || ""), [l, h] = V(!1), f = Z(null);
  W(() => {
    i(e || "");
  }, [e]);
  const s = a.includes(":") ? a.split(":")[1] || "" : a, { results: c } = Qt(s), m = c.includes(a), w = l && a.length > 0 && !m && c.length > 0, N = (v) => {
    const g = v.target.value;
    i(g), r(g);
  }, C = P((v) => {
    i(v), r(v), h(!1);
  }, [r]), [y, k] = V(300);
  W(() => {
    f.current && k(f.current.offsetWidth);
  }, [w]);
  const S = Math.floor(y / de), x = Math.ceil(c.length / de), I = P(({ columnIndex: v, rowIndex: g, style: p }) => {
    const O = g * de + v;
    if (O >= c.length)
      return /* @__PURE__ */ t("div", { style: p });
    const E = c[O];
    return /* @__PURE__ */ t("div", { style: p, className: "p-0.5", children: /* @__PURE__ */ t(Ne, { delayDuration: 300, children: /* @__PURE__ */ d(ye, { children: [
      /* @__PURE__ */ t(Ie, { asChild: !0, children: /* @__PURE__ */ t(
        "button",
        {
          onMouseDown: (B) => {
            B.preventDefault(), C(E);
          },
          className: b(
            "w-full h-full flex items-center justify-center rounded-md transition-all",
            "bg-muted/30 hover:bg-muted border border-transparent hover:border-border"
          ),
          children: /* @__PURE__ */ t(Ve, { name: E, size: Zt, className: "text-foreground" })
        }
      ) }),
      /* @__PURE__ */ d(Ce, { side: "bottom", className: "text-xs max-w-[200px]", children: [
        /* @__PURE__ */ t("div", { className: "font-medium truncate", children: ut(E) }),
        /* @__PURE__ */ t("div", { className: "text-muted-foreground text-xs", children: ft(E) })
      ] })
    ] }) }) });
  }, [c, C]);
  return /* @__PURE__ */ t("div", { ref: f, children: /* @__PURE__ */ d("div", { className: "relative", children: [
    m && /* @__PURE__ */ t("div", { className: "absolute left-2 top-1/2 -translate-y-1/2 z-10", children: /* @__PURE__ */ t(Ve, { name: a, size: 14, className: "text-foreground" }) }),
    /* @__PURE__ */ t(
      he,
      {
        value: a,
        onChange: N,
        onFocus: () => h(!0),
        onBlur: () => setTimeout(() => h(!1), 150),
        placeholder: n,
        disabled: o,
        className: b(
          "h-8 text-xs font-mono bg-muted/30 border-transparent hover:border-border focus:border-border focus:bg-background transition-colors",
          m ? "pl-7 text-foreground" : "text-muted-foreground"
        )
      }
    ),
    w && /* @__PURE__ */ d("div", { className: "absolute left-0 right-0 top-full mt-1 z-50 rounded-md border border-border bg-popover shadow-lg overflow-hidden", children: [
      /* @__PURE__ */ d("div", { className: "px-2 py-1 text-xs text-muted-foreground border-b border-border bg-muted/30", children: [
        c.length.toLocaleString(),
        " matches"
      ] }),
      /* @__PURE__ */ d(
        "div",
        {
          className: "icon-picker-grid",
          style: { height: Math.min(be, x * ge) },
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
              At,
              {
                columnCount: de,
                columnWidth: S,
                defaultHeight: be,
                defaultWidth: y,
                rowCount: x,
                rowHeight: ge,
                cellComponent: I,
                cellProps: {},
                style: {
                  height: Math.min(be, x * ge),
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
function ur({
  value: e,
  onChange: r,
  options: n,
  variant: o,
  buttonDisplay: a = "text",
  maxInline: i,
  placeholder: l = "Select...",
  dropdownTitle: h,
  iconTrigger: f,
  disabled: s = !1,
  borderless: c = !1
}) {
  const m = Array.isArray(e) ? e : [], [w, N] = V(!1), [C, y] = V(!1), k = P((u) => m.includes(u), [m]), S = P(
    (u) => {
      s || (m.includes(u) ? r(m.filter((z) => z !== u)) : r([...m, u]));
    },
    [m, r, s]
  ), x = P(
    (u, z) => {
      z.stopPropagation(), !s && r(m.filter((T) => T !== u));
    },
    [m, r, s]
  ), I = P(() => {
    s || r([]);
  }, [r, s]), v = o ?? (n.length > 5 ? "dropdown" : "buttons"), g = n.filter((u) => m.includes(u.value));
  if (v === "dropdown")
    return f ? /* @__PURE__ */ d(q, { open: w, onOpenChange: N, children: [
      /* @__PURE__ */ t(ee, { asChild: !0, children: /* @__PURE__ */ d(
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
      /* @__PURE__ */ d(te, { align: "start", className: "w-[220px] p-0 gap-0", sideOffset: 4, children: [
        /* @__PURE__ */ d("div", { className: "px-3 py-2 border-b border-border flex items-center justify-between", children: [
          /* @__PURE__ */ t("span", { className: "text-xs font-medium text-muted-foreground", children: h || `${g.length} selected` }),
          g.length > 0 && /* @__PURE__ */ t(
            "button",
            {
              onClick: I,
              className: "text-[10px] text-muted-foreground hover:text-foreground transition-colors",
              children: "Clear"
            }
          )
        ] }),
        /* @__PURE__ */ t("div", { className: "max-h-[200px] overflow-y-auto p-1", children: n.map((u) => {
          const z = u.icon, T = k(u.value);
          return /* @__PURE__ */ d(
            "button",
            {
              onClick: () => S(u.value),
              className: b(
                "w-full flex items-center gap-2 px-2 py-1.5 text-xs rounded-md transition-colors",
                T ? "bg-primary/10 text-foreground" : "hover:bg-muted text-muted-foreground hover:text-foreground"
              ),
              children: [
                /* @__PURE__ */ t("div", { className: b(
                  "h-4 w-4 rounded border flex items-center justify-center shrink-0 transition-colors",
                  T ? "bg-primary border-primary" : "border-border bg-background"
                ), children: T && /* @__PURE__ */ t(Y, { className: "h-3 w-3 text-primary-foreground" }) }),
                z && /* @__PURE__ */ t(z, { className: "h-3.5 w-3.5 shrink-0" }),
                /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", children: u.label })
              ]
            },
            u.value
          );
        }) })
      ] })
    ] }) : /* @__PURE__ */ d(q, { open: w, onOpenChange: N, children: [
      /* @__PURE__ */ t(ee, { asChild: !0, children: /* @__PURE__ */ d(
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
                Be,
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
      /* @__PURE__ */ d(te, { align: "start", className: "w-[220px] p-0 gap-0", sideOffset: 4, children: [
        (h || g.length > 0) && /* @__PURE__ */ d("div", { className: "px-3 py-2 border-b border-border flex items-center justify-between", children: [
          /* @__PURE__ */ t("span", { className: "text-xs font-medium text-muted-foreground", children: h || `${g.length} selected` }),
          g.length > 0 && /* @__PURE__ */ t(
            "button",
            {
              onClick: I,
              className: "text-[10px] text-muted-foreground hover:text-foreground transition-colors",
              children: "Clear all"
            }
          )
        ] }),
        /* @__PURE__ */ t("div", { className: "max-h-[200px] overflow-y-auto p-1", children: n.map((u) => {
          const z = u.icon, T = k(u.value);
          return /* @__PURE__ */ d(
            "button",
            {
              onClick: () => S(u.value),
              className: b(
                "w-full flex items-center gap-2 px-2 py-1.5 text-xs rounded-md transition-colors",
                T ? "bg-primary/10 text-foreground" : "hover:bg-muted text-muted-foreground hover:text-foreground"
              ),
              children: [
                /* @__PURE__ */ t("div", { className: b(
                  "h-4 w-4 rounded border flex items-center justify-center shrink-0 transition-colors",
                  T ? "bg-primary border-primary" : "border-border bg-background"
                ), children: T && /* @__PURE__ */ t(Y, { className: "h-3 w-3 text-primary-foreground" }) }),
                z && /* @__PURE__ */ t(z, { className: "h-3.5 w-3.5 shrink-0" }),
                /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", children: u.label })
              ]
            },
            u.value
          );
        }) }),
        g.length > 0 && /* @__PURE__ */ t("div", { className: "border-t border-border p-2", children: /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-1", children: g.map((u) => /* @__PURE__ */ d(
          Be,
          {
            variant: "secondary",
            className: "h-5 px-1.5 text-[10px] font-normal gap-1 pr-0.5",
            children: [
              u.icon && /* @__PURE__ */ t(u.icon, { className: "h-3 w-3" }),
              /* @__PURE__ */ t("span", { className: "truncate max-w-[60px]", children: u.label }),
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: (z) => x(u.value, z),
                  className: "ml-0.5 p-0.5 rounded hover:bg-muted-foreground/20 transition-colors",
                  children: /* @__PURE__ */ t(tt, { className: "h-3 w-3" })
                }
              )
            ]
          },
          u.value
        )) }) })
      ] })
    ] });
  const p = i !== void 0 && n.length > i, O = p ? n.slice(0, i - 1) : n, E = p ? n.slice(i - 1) : [], B = E.filter((u) => m.includes(u.value)), j = (u, z, T) => {
    const R = k(u.value), J = u.icon, Q = J && (a === "icon" || a === "both"), ie = a === "text" || a === "both", K = /* @__PURE__ */ d(
      "button",
      {
        onClick: () => S(u.value),
        disabled: s,
        className: b(
          "flex items-center justify-center gap-1.5 font-medium transition-all",
          "h-8 px-2.5 text-xs",
          z && "rounded-l-md",
          T && !p && "rounded-r-md",
          !z && !T && "rounded-none",
          R ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
          s && "opacity-50 cursor-not-allowed"
        ),
        children: [
          Q && /* @__PURE__ */ t(J, { className: "h-3.5 w-3.5" }),
          ie && /* @__PURE__ */ t("span", { className: "truncate", children: u.label })
        ]
      },
      u.value
    ), $ = u.hoverText || (a === "icon" ? u.label : void 0);
    return $ && !s ? /* @__PURE__ */ t(Ne, { delayDuration: 200, children: /* @__PURE__ */ d(ye, { children: [
      /* @__PURE__ */ t(Ie, { asChild: !0, children: K }),
      /* @__PURE__ */ t(Ce, { side: "bottom", className: "text-xs", children: $ })
    ] }) }, u.value) : K;
  };
  return /* @__PURE__ */ d("div", { className: b(
    "inline-flex",
    !c && "rounded-md border border-border/40 bg-muted/30 p-0.5 shadow-sm",
    s && "opacity-50"
  ), children: [
    O.map(
      (u, z) => j(u, z === 0, z === O.length - 1)
    ),
    p && /* @__PURE__ */ d(q, { open: C, onOpenChange: y, children: [
      /* @__PURE__ */ t(ee, { asChild: !0, children: /* @__PURE__ */ d(
        "button",
        {
          disabled: s,
          className: b(
            "flex items-center justify-center gap-1 font-medium transition-all rounded-r-md",
            "h-8 px-2.5 text-xs",
            B.length > 0 ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
            s && "cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ t("span", { children: B.length > 0 ? `+${B.length}` : "More" }),
            /* @__PURE__ */ t(_, { className: "h-3 w-3" })
          ]
        }
      ) }),
      /* @__PURE__ */ t(te, { align: "end", className: "w-44 p-1 gap-0", children: E.map((u) => {
        const z = u.icon, T = k(u.value);
        return /* @__PURE__ */ d(
          "button",
          {
            onClick: () => S(u.value),
            className: b(
              "w-full flex items-center gap-2 px-2 py-1 text-xs rounded-sm transition-colors",
              T ? "bg-accent text-accent-foreground" : "hover:bg-muted"
            ),
            children: [
              z && /* @__PURE__ */ t(z, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", children: u.label }),
              T && /* @__PURE__ */ t(Y, { className: "h-3.5 w-3.5" })
            ]
          },
          u.value
        );
      }) })
    ] })
  ] });
}
function fr({
  value: e,
  onChange: r,
  min: n = 0,
  max: o = 100,
  step: a = 1,
  disabled: i = !1,
  className: l,
  variant: h = "stepper"
}) {
  if (h === "slider")
    return /* @__PURE__ */ d("div", { className: b("flex items-center gap-3 flex-1", l), children: [
      /* @__PURE__ */ t(
        De,
        {
          value: [e],
          onValueChange: (m) => r(m[0]),
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
    const m = e + a;
    (o === void 0 || m <= o) && r(m);
  }, s = () => {
    if (i) return;
    const m = e - a;
    (n === void 0 || m >= n) && r(m);
  }, c = (m) => {
    const w = parseInt(m.target.value, 10);
    if (!isNaN(w)) {
      let N = w;
      n !== void 0 && (N = Math.max(n, N)), o !== void 0 && (N = Math.min(o, N)), r(N);
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
        children: /* @__PURE__ */ t(rt, { className: "h-3 w-3" })
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
        children: /* @__PURE__ */ t(nt, { className: "h-3 w-3" })
      }
    )
  ] });
}
function Kt({ className: e, ...r }) {
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
function Xt(e) {
  const r = e.split(/\s+/);
  return r[r.length - 1] || "";
}
function mr({
  value: e,
  onChange: r,
  suggestions: n = [],
  noRing: o = !1,
  noResize: a = !1,
  autoGrow: i = !0,
  className: l,
  ...h
}) {
  const [f, s] = V(!1), c = Z(null), m = Xt(e), w = m ? n.filter((x) => x.toLowerCase().includes(m.toLowerCase())) : n, N = (x) => {
    const I = x.target.value;
    r(I), n.length > 0 && s(!0);
  }, C = (x) => {
    const I = e.split(/\s+/);
    I[I.length - 1] = x, r(I.join(" ")), s(!1), c.current?.focus();
  }, y = (x) => {
    n.length > 0 && s(!0), h.onFocus?.(x);
  }, k = (x) => {
    setTimeout(() => s(!1), 150), h.onBlur?.(x);
  }, S = n.length > 0;
  return /* @__PURE__ */ d("div", { className: "relative flex-1", children: [
    /* @__PURE__ */ d("div", { className: "relative", children: [
      /* @__PURE__ */ t(
        Kt,
        {
          ref: c,
          value: e,
          onChange: N,
          onFocus: y,
          onBlur: k,
          className: b(
            "min-h-[60px] text-xs bg-muted/30 border-transparent hover:border-border focus:border-border focus:bg-background transition-colors placeholder:text-muted-foreground/50 scrollbar-none",
            S && "pr-6",
            o && "focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-border",
            a ? "resize-none" : "resize-y",
            !i && "field-sizing-fixed",
            l
          ),
          ...h
        }
      ),
      S && /* @__PURE__ */ t(_, { className: "absolute right-2 top-3 h-3 w-3 text-muted-foreground/50" })
    ] }),
    f && w.length > 0 && /* @__PURE__ */ t("div", { className: "absolute top-full left-0 right-0 z-50 mt-1 bg-popover border border-border rounded-md shadow-md py-1", children: /* @__PURE__ */ t("div", { className: "max-h-40 overflow-auto", children: w.map((x) => /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: b(
          "w-full px-2 py-1.5 text-xs text-left hover:bg-accent hover:text-accent-foreground",
          x === e && "bg-accent/50"
        ),
        onMouseDown: (I) => I.preventDefault(),
        onClick: () => C(x),
        title: x,
        children: /* @__PURE__ */ t("span", { className: "block truncate", children: x })
      },
      x
    )) }) })
  ] });
}
export {
  gt as BooleanInput,
  lr as DynamicInput,
  cr as EnumInput,
  dr as IconInput,
  ur as MultiEnumSelect,
  fr as NumberInput,
  vt as NumericalInput,
  wt as ObjectInput,
  mr as TextAreaInput,
  xt as TextInput
};
