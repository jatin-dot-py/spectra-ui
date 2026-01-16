import { a as k, A } from "./ActionButtonGroup-D1TNSW-7.js";
import { jsx as o, jsxs as d } from "react/jsx-runtime";
import "react";
import { DropdownMenu as r } from "radix-ui";
import { c as i } from "./utils-B6yFEsav.js";
import { ChevronDown as s } from "lucide-react";
import { B as u } from "./button-DHQhRgTM.js";
import "clsx";
import "tailwind-merge";
function c({
  ...t
}) {
  return /* @__PURE__ */ o(r.Root, { "data-slot": "dropdown-menu", ...t });
}
function l({
  ...t
}) {
  return /* @__PURE__ */ o(
    r.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...t
    }
  );
}
function p({
  className: t,
  align: n = "start",
  sideOffset: e = 4,
  ...a
}) {
  return /* @__PURE__ */ o(r.Portal, { children: /* @__PURE__ */ o(
    r.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: e,
      align: n,
      className: i("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground min-w-32 rounded-none shadow-md ring-1 duration-100 z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto data-[state=closed]:overflow-hidden", t),
      ...a
    }
  ) });
}
function m({
  className: t,
  inset: n,
  variant: e = "default",
  ...a
}) {
  return /* @__PURE__ */ o(
    r.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": n,
      "data-variant": e,
      className: i(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive not-data-[variant=destructive]:focus:**:text-accent-foreground gap-2 rounded-none px-2 py-2 text-xs [&_svg:not([class*='size-'])]:size-4 group/dropdown-menu-item relative flex cursor-default items-center outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        t
      ),
      ...a
    }
  );
}
function z({ label: t, items: n }) {
  return /* @__PURE__ */ d(c, { children: [
    /* @__PURE__ */ o(l, { asChild: !0, children: /* @__PURE__ */ d(u, { variant: "outline", size: "xs", children: [
      t && /* @__PURE__ */ o("span", { children: t }),
      /* @__PURE__ */ o(s, { className: "h-3 w-3" })
    ] }) }),
    /* @__PURE__ */ o(p, { align: "start", children: n.map((e) => /* @__PURE__ */ d(m, { onClick: e.onClick, children: [
      e.icon && /* @__PURE__ */ o(e.icon, { className: "h-4 w-4 mr-2" }),
      e.label
    ] }, e.label)) })
  ] });
}
export {
  k as ActionButton,
  A as ActionButtonGroup,
  z as ActionDropdown
};
