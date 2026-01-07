import { jsx as t } from "react/jsx-runtime";
import "react";
import { Popover as e } from "radix-ui";
import { c as n } from "./utils-B6yFEsav.js";
function l({
  ...o
}) {
  return /* @__PURE__ */ t(e.Root, { "data-slot": "popover", ...o });
}
function f({
  ...o
}) {
  return /* @__PURE__ */ t(e.Trigger, { "data-slot": "popover-trigger", ...o });
}
function m({
  className: o,
  align: r = "center",
  sideOffset: a = 4,
  ...i
}) {
  return /* @__PURE__ */ t(e.Portal, { children: /* @__PURE__ */ t(
    e.Content,
    {
      "data-slot": "popover-content",
      align: r,
      sideOffset: a,
      className: n(
        "bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 flex flex-col gap-2.5 rounded-none p-2.5 text-xs shadow-md ring-1 duration-100 z-50 w-72 origin-(--radix-popover-content-transform-origin) outline-hidden",
        o
      ),
      ...i
    }
  ) });
}
function u({
  ...o
}) {
  return /* @__PURE__ */ t(e.Anchor, { "data-slot": "popover-anchor", ...o });
}
function g({
  className: o,
  ...r
}) {
  return /* @__PURE__ */ t(
    "p",
    {
      "data-slot": "popover-description",
      className: n("text-muted-foreground text-xs/relaxed", o),
      ...r
    }
  );
}
export {
  l as P,
  u as a,
  m as b,
  f as c,
  g as d
};
