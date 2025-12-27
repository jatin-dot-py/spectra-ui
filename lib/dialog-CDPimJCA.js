import { jsx as t, jsxs as r } from "react/jsx-runtime";
import "react";
import { Dialog as e } from "radix-ui";
import { c as l } from "./utils-B6yFEsav.js";
import { B as s } from "./button-DHQhRgTM.js";
import { XIcon as d } from "lucide-react";
function D({
  ...a
}) {
  return /* @__PURE__ */ t(e.Root, { "data-slot": "dialog", ...a });
}
function b({
  ...a
}) {
  return /* @__PURE__ */ t(e.Trigger, { "data-slot": "dialog-trigger", ...a });
}
function c({
  ...a
}) {
  return /* @__PURE__ */ t(e.Portal, { "data-slot": "dialog-portal", ...a });
}
function u({
  className: a,
  ...o
}) {
  return /* @__PURE__ */ t(
    e.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: l("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 isolate z-50", a),
      ...o
    }
  );
}
function v({
  className: a,
  children: o,
  showCloseButton: i = !0,
  ...n
}) {
  return /* @__PURE__ */ r(c, { children: [
    /* @__PURE__ */ t(u, {}),
    /* @__PURE__ */ r(
      e.Content,
      {
        "data-slot": "dialog-content",
        className: l(
          "bg-background data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 ring-foreground/10 grid max-w-[calc(100%-2rem)] gap-4 rounded-none p-4 text-xs/relaxed ring-1 duration-100 sm:max-w-sm fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2",
          a
        ),
        ...n,
        children: [
          o,
          i && /* @__PURE__ */ t(e.Close, { "data-slot": "dialog-close", asChild: !0, children: /* @__PURE__ */ r(s, { variant: "ghost", className: "absolute top-2 right-2", size: "icon-sm", children: [
            /* @__PURE__ */ t(
              d,
              {}
            ),
            /* @__PURE__ */ t("span", { className: "sr-only", children: "Close" })
          ] }) })
        ]
      }
    )
  ] });
}
function C({ className: a, ...o }) {
  return /* @__PURE__ */ t(
    "div",
    {
      "data-slot": "dialog-header",
      className: l("gap-1 text-left flex flex-col", a),
      ...o
    }
  );
}
function N({
  className: a,
  showCloseButton: o = !1,
  children: i,
  ...n
}) {
  return /* @__PURE__ */ r(
    "div",
    {
      "data-slot": "dialog-footer",
      className: l(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        a
      ),
      ...n,
      children: [
        i,
        o && /* @__PURE__ */ t(e.Close, { asChild: !0, children: /* @__PURE__ */ t(s, { variant: "outline", children: "Close" }) })
      ]
    }
  );
}
function y({
  className: a,
  ...o
}) {
  return /* @__PURE__ */ t(
    e.Title,
    {
      "data-slot": "dialog-title",
      className: l("text-sm font-medium", a),
      ...o
    }
  );
}
function z({
  className: a,
  ...o
}) {
  return /* @__PURE__ */ t(
    e.Description,
    {
      "data-slot": "dialog-description",
      className: l("text-muted-foreground *:[a]:hover:text-foreground text-xs/relaxed *:[a]:underline *:[a]:underline-offset-3", a),
      ...o
    }
  );
}
export {
  D,
  b as a,
  v as b,
  C as c,
  y as d,
  z as e,
  N as f
};
