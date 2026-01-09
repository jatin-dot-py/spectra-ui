import { jsx as a, jsxs as r } from "react/jsx-runtime";
import "react";
import { Tooltip as o } from "radix-ui";
import { c as d } from "./utils-B6yFEsav.js";
function l({
  delayDuration: t = 0,
  ...e
}) {
  return /* @__PURE__ */ a(
    o.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration: t,
      ...e
    }
  );
}
function f({
  ...t
}) {
  return /* @__PURE__ */ a(l, { children: /* @__PURE__ */ a(o.Root, { "data-slot": "tooltip", ...t }) });
}
function u({
  ...t
}) {
  return /* @__PURE__ */ a(o.Trigger, { "data-slot": "tooltip-trigger", ...t });
}
function g({
  className: t,
  sideOffset: e = 0,
  children: i,
  ...n
}) {
  return /* @__PURE__ */ a(o.Portal, { children: /* @__PURE__ */ r(
    o.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset: e,
      className: d(
        "data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 rounded-none px-3 py-1.5 text-xs bg-foreground text-background z-50 w-fit max-w-xs origin-(--radix-tooltip-content-transform-origin)",
        t
      ),
      ...n,
      children: [
        i,
        /* @__PURE__ */ a(o.Arrow, { className: "size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-none bg-foreground fill-foreground z-50 translate-y-[calc(-50%_-_2px)]" })
      ]
    }
  ) });
}
export {
  l as T,
  f as a,
  u as b,
  g as c
};
