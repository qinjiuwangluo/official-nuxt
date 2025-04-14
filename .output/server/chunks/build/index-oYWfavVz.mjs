import { e as buildAssetsURL } from '../_/nitro.mjs';
import { defineComponent, createVNode, renderSlot, h, ref, provide, watch, unref, computed, openBlock, createElementBlock, mergeProps, useSlots, createBlock, withCtx, Transition, withDirectives, createElementVNode, withModifiers, normalizeClass, toDisplayString, createCommentVNode, vShow, withAsyncContext, Fragment, renderList, useSSRContext, inject, getCurrentInstance, nextTick, warn, isRef, onScopeDispose, Teleport as Teleport$1 } from 'vue';
import { NOOP, isString, isObject, hasOwn, camelize } from '@vue/shared';
import { isNil, fromPairs, isUndefined as isUndefined$1, get } from 'lodash-unified';
import { d as useNamespace, h as isUndefined, u as useRouter, i as isElement, e as isNumber, f as isStringNumber, k as useZIndex, l as useId, j as isBoolean, t as throwError, m as defaultNamespace } from './server.mjs';
import { isClient, useTimeoutFn } from '@vueuse/core';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderAttrs, ssrRenderClass } from 'vue/server-renderer';
import { u as useMock } from './useMockData-DXUquf-K.mjs';
import { _ as _export_sfc$1 } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'node:path';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';
import 'deep-pick-omit';
import '@intlify/shared';
import '@intlify/core-base';

/*! Element Plus Icons Vue v2.3.1 */
var close_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Close",
  __name: "close",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
});
var close_default = close_vue_vue_type_script_setup_true_lang_default;
const useSameTarget = (handleClick) => {
  if (!handleClick) {
    return { onClick: NOOP, onMousedown: NOOP, onMouseup: NOOP };
  }
  let mousedownTarget = false;
  let mouseupTarget = false;
  const onClick = (e) => {
    if (mousedownTarget && mouseupTarget) {
      handleClick(e);
    }
    mousedownTarget = mouseupTarget = false;
  };
  const onMousedown = (e) => {
    mousedownTarget = e.target === e.currentTarget;
  };
  const onMouseup = (e) => {
    mouseupTarget = e.target === e.currentTarget;
  };
  return { onClick, onMousedown, onMouseup };
};
var PatchFlags = /* @__PURE__ */ ((PatchFlags2) => {
  PatchFlags2[PatchFlags2["TEXT"] = 1] = "TEXT";
  PatchFlags2[PatchFlags2["CLASS"] = 2] = "CLASS";
  PatchFlags2[PatchFlags2["STYLE"] = 4] = "STYLE";
  PatchFlags2[PatchFlags2["PROPS"] = 8] = "PROPS";
  PatchFlags2[PatchFlags2["FULL_PROPS"] = 16] = "FULL_PROPS";
  PatchFlags2[PatchFlags2["HYDRATE_EVENTS"] = 32] = "HYDRATE_EVENTS";
  PatchFlags2[PatchFlags2["STABLE_FRAGMENT"] = 64] = "STABLE_FRAGMENT";
  PatchFlags2[PatchFlags2["KEYED_FRAGMENT"] = 128] = "KEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["UNKEYED_FRAGMENT"] = 256] = "UNKEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["NEED_PATCH"] = 512] = "NEED_PATCH";
  PatchFlags2[PatchFlags2["DYNAMIC_SLOTS"] = 1024] = "DYNAMIC_SLOTS";
  PatchFlags2[PatchFlags2["HOISTED"] = -1] = "HOISTED";
  PatchFlags2[PatchFlags2["BAIL"] = -2] = "BAIL";
  return PatchFlags2;
})(PatchFlags || {});
const epPropKey = "__epPropKey";
const definePropType = (val) => val;
const isEpProp = (val) => isObject(val) && !!val[epPropKey];
const buildProp = (prop, key) => {
  if (!isObject(prop) || isEpProp(prop))
    return prop;
  const { values, required, default: defaultValue, type, validator } = prop;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = Array.from(values);
      if (hasOwn(prop, "default")) {
        allowedValues.push(defaultValue);
      }
      valid || (valid = allowedValues.includes(val));
    }
    if (validator)
      valid || (valid = validator(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
    }
    return valid;
  } : undefined;
  const epProp = {
    type,
    required: !!required,
    validator: _validator,
    [epPropKey]: true
  };
  if (hasOwn(prop, "default"))
    epProp.default = defaultValue;
  return epProp;
};
const buildProps = (props) => fromPairs(Object.entries(props).map(([key, option]) => [
  key,
  buildProp(option, key)
]));
const overlayProps = buildProps({
  mask: {
    type: Boolean,
    default: true
  },
  customMaskEvent: Boolean,
  overlayClass: {
    type: definePropType([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: definePropType([String, Number])
  }
});
const overlayEmits = {
  click: (evt) => evt instanceof MouseEvent
};
const BLOCK = "overlay";
var Overlay = defineComponent({
  name: "ElOverlay",
  props: overlayProps,
  emits: overlayEmits,
  setup(props, { slots, emit }) {
    const ns = useNamespace(BLOCK);
    const onMaskClick = (e) => {
      emit("click", e);
    };
    const { onClick, onMousedown, onMouseup } = useSameTarget(props.customMaskEvent ? undefined : onMaskClick);
    return () => {
      return props.mask ? createVNode("div", {
        class: [ns.b(), props.overlayClass],
        style: {
          zIndex: props.zIndex
        },
        onClick,
        onMousedown,
        onMouseup
      }, [renderSlot(slots, "default")], PatchFlags.STYLE | PatchFlags.CLASS | PatchFlags.PROPS, ["onClick", "onMouseup", "onMousedown"]) : h("div", {
        class: props.overlayClass,
        style: {
          zIndex: props.zIndex,
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        }
      }, [renderSlot(slots, "default")]);
    };
  }
});
const ElOverlay = Overlay;
const FOCUSOUT_PREVENTED = "focus-trap.focusout-prevented";
const FOCUSOUT_PREVENTED_OPTS = {
  cancelable: true,
  bubbles: false
};
const ON_TRAP_FOCUS_EVT = "focusAfterTrapped";
const ON_RELEASE_FOCUS_EVT = "focusAfterReleased";
const FOCUS_TRAP_INJECTION_KEY = Symbol("elFocusTrap");
const isFocusable = (element) => {
  if (element.tabIndex > 0 || element.tabIndex === 0 && element.getAttribute("tabIndex") !== null) {
    return true;
  }
  if (element.tabIndex < 0 || element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true") {
    return false;
  }
  switch (element.nodeName) {
    case "A": {
      return !!element.href && element.rel !== "ignore";
    }
    case "INPUT": {
      return !(element.type === "hidden" || element.type === "file");
    }
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA": {
      return true;
    }
    default: {
      return false;
    }
  }
};
const focusReason = ref();
const lastUserFocusTimestamp = ref(0);
const lastAutomatedFocusTimestamp = ref(0);
const obtainAllFocusableElements = (element) => {
  const nodes = [];
  const walker = (undefined).createTreeWalker(element, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 || node === (undefined).activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
};
const getVisibleElement = (elements, container) => {
  for (const element of elements) {
    if (!isHidden(element, container))
      return element;
  }
};
const isHidden = (element, container) => {
  if (getComputedStyle(element).visibility === "hidden")
    return true;
  while (element) {
    if (container && element === container)
      return false;
    if (getComputedStyle(element).display === "none")
      return true;
    element = element.parentElement;
  }
  return false;
};
const getEdges = (container) => {
  const focusable = obtainAllFocusableElements(container);
  const first = getVisibleElement(focusable, container);
  const last = getVisibleElement(focusable.reverse(), container);
  return [first, last];
};
const isSelectable = (element) => {
  return element instanceof HTMLInputElement && "select" in element;
};
const tryFocus = (element, shouldSelect) => {
  if (element && element.focus) {
    const prevFocusedElement = (undefined).activeElement;
    let cleanup = false;
    if (isElement(element) && !isFocusable(element) && !element.getAttribute("tabindex")) {
      element.setAttribute("tabindex", "-1");
      cleanup = true;
    }
    element.focus({ preventScroll: true });
    lastAutomatedFocusTimestamp.value = (undefined).performance.now();
    if (element !== prevFocusedElement && isSelectable(element) && shouldSelect) {
      element.select();
    }
    if (isElement(element) && cleanup) {
      element.removeAttribute("tabindex");
    }
  }
};
const useFocusReason = () => {
  return {
    focusReason,
    lastUserFocusTimestamp,
    lastAutomatedFocusTimestamp
  };
};
const createFocusOutPreventedEvent = (detail) => {
  return new CustomEvent(FOCUSOUT_PREVENTED, {
    ...FOCUSOUT_PREVENTED_OPTS,
    detail
  });
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const EVENT_CODE = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
};
const _sfc_main$5 = defineComponent({
  name: "ElFocusTrap",
  inheritAttrs: false,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    ON_TRAP_FOCUS_EVT,
    ON_RELEASE_FOCUS_EVT,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(props, { emit }) {
    const forwardRef = ref();
    let lastFocusAfterTrapped;
    const { focusReason: focusReason2 } = useFocusReason();
    const onKeydown = (e) => {
      if (!props.loop && !props.trapped)
        return;
      const { code, altKey, ctrlKey, metaKey, currentTarget, shiftKey } = e;
      const { loop } = props;
      const isTabbing = code === EVENT_CODE.tab && !altKey && !ctrlKey && !metaKey;
      const currentFocusingEl = (undefined).activeElement;
      if (isTabbing && currentFocusingEl) {
        const container = currentTarget;
        const [first, last] = getEdges(container);
        const isTabbable = first && last;
        if (!isTabbable) {
          if (currentFocusingEl === container) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason2.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e.preventDefault();
            }
          }
        } else {
          if (!shiftKey && currentFocusingEl === last) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason2.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e.preventDefault();
              if (loop)
                tryFocus(first, true);
            }
          } else if (shiftKey && [first, container].includes(currentFocusingEl)) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason2.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e.preventDefault();
              if (loop)
                tryFocus(last, true);
            }
          }
        }
      }
    };
    provide(FOCUS_TRAP_INJECTION_KEY, {
      focusTrapRef: forwardRef,
      onKeydown
    });
    watch(() => props.focusTrapEl, (focusTrapEl) => {
      if (focusTrapEl) {
        forwardRef.value = focusTrapEl;
      }
    }, { immediate: true });
    watch([forwardRef], ([forwardRef2], [oldForwardRef]) => {
      if (forwardRef2) {
        forwardRef2.addEventListener("keydown", onKeydown);
        forwardRef2.addEventListener("focusin", onFocusIn);
        forwardRef2.addEventListener("focusout", onFocusOut);
      }
      if (oldForwardRef) {
        oldForwardRef.removeEventListener("keydown", onKeydown);
        oldForwardRef.removeEventListener("focusin", onFocusIn);
        oldForwardRef.removeEventListener("focusout", onFocusOut);
      }
    });
    const onFocusIn = (e) => {
      const trapContainer = unref(forwardRef);
      if (!trapContainer)
        return;
      const target = e.target;
      const relatedTarget = e.relatedTarget;
      const isFocusedInTrap = target && trapContainer.contains(target);
      if (!props.trapped) {
        relatedTarget && trapContainer.contains(relatedTarget);
      }
      if (isFocusedInTrap)
        emit("focusin", e);
      if (props.trapped) {
        if (isFocusedInTrap) {
          lastFocusAfterTrapped = target;
        } else {
          tryFocus(lastFocusAfterTrapped, true);
        }
      }
    };
    const onFocusOut = (e) => {
      const trapContainer = unref(forwardRef);
      if (!trapContainer)
        return;
      if (props.trapped) {
        const relatedTarget = e.relatedTarget;
        if (!isNil(relatedTarget) && !trapContainer.contains(relatedTarget)) {
          setTimeout(() => {
            if (props.trapped) {
              const focusoutPreventedEvent = createFocusOutPreventedEvent({
                focusReason: focusReason2.value
              });
              emit("focusout-prevented", focusoutPreventedEvent);
              if (!focusoutPreventedEvent.defaultPrevented) {
                tryFocus(lastFocusAfterTrapped, true);
              }
            }
          }, 0);
        }
      } else {
        const target = e.target;
        const isFocusedInTrap = target && trapContainer.contains(target);
        if (!isFocusedInTrap)
          emit("focusout", e);
      }
    };
    return {
      onKeydown
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default", { handleKeydown: _ctx.onKeydown });
}
var ElFocusTrap = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render], ["__file", "focus-trap.vue"]]);
const teleportProps = buildProps({
  to: {
    type: definePropType([String, Object]),
    required: true
  },
  disabled: Boolean
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "teleport",
  props: teleportProps,
  setup(__props) {
    return (_ctx, _cache) => {
      return _ctx.disabled ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createBlock(Teleport$1, {
        key: 1,
        to: _ctx.to
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8, ["to"]));
    };
  }
});
var Teleport = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "teleport.vue"]]);
const withInstall = (main, extra) => {
  main.install = (app) => {
    for (const comp of [main, ...Object.values({})]) {
      app.component(comp.name, comp);
    }
  };
  return main;
};
const ElTeleport = withInstall(Teleport);
const iconProps = buildProps({
  size: {
    type: definePropType([Number, String])
  },
  color: {
    type: String
  }
});
const classNameToArray = (cls = "") => cls.split(" ").filter((item) => !!item.trim());
const hasClass = (el, cls) => {
  if (!el || !cls)
    return false;
  if (cls.includes(" "))
    throw new Error("className should not contain space.");
  return el.classList.contains(cls);
};
const addClass = (el, cls) => {
  if (!el || !cls.trim())
    return;
  el.classList.add(...classNameToArray(cls));
};
const getStyle = (element, styleName) => {
  var _a;
  if (!isClient || !element || false)
    return "";
  let key = camelize(styleName);
  if (key === "float")
    key = "cssFloat";
  try {
    const style = element.style[key];
    if (style)
      return style;
    const computed2 = (_a = (void 0).defaultView) == null ? void 0 : _a.getComputedStyle(element, "");
    return computed2 ? computed2[key] : "";
  } catch (e) {
    return element.style[key];
  }
};
function addUnit(value, defaultUnit = "px") {
  if (!value)
    return "";
  if (isNumber(value) || isStringNumber(value)) {
    return `${value}${defaultUnit}`;
  } else if (isString(value)) {
    return value;
  }
}
const __default__$1 = defineComponent({
  name: "ElIcon",
  inheritAttrs: false
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: iconProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("icon");
    const style = computed(() => {
      const { size, color } = props;
      if (!size && !color)
        return {};
      return {
        fontSize: isUndefined(size) ? undefined : addUnit(size),
        "--color": color
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", mergeProps({
        class: unref(ns).b(),
        style: unref(style)
      }, _ctx.$attrs), [
        renderSlot(_ctx.$slots, "default")
      ], 16);
    };
  }
});
var Icon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "icon.vue"]]);
const ElIcon = withInstall(Icon);
const iconPropType = definePropType([
  String,
  Object,
  Function
]);
const dialogContentProps = buildProps({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: iconPropType
  },
  draggable: Boolean,
  overflow: Boolean,
  fullscreen: Boolean,
  showClose: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ""
  },
  ariaLevel: {
    type: String,
    default: "2"
  }
});
const UPDATE_MODEL_EVENT = "update:modelValue";
const dialogProps = buildProps({
  ...dialogContentProps,
  appendToBody: Boolean,
  appendTo: {
    type: definePropType([String, Object]),
    default: "body"
  },
  beforeClose: {
    type: definePropType(Function)
  },
  destroyOnClose: Boolean,
  closeOnClickModal: {
    type: Boolean,
    default: true
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  modal: {
    type: Boolean,
    default: true
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  top: {
    type: String
  },
  modelValue: Boolean,
  modalClass: String,
  width: {
    type: [String, Number]
  },
  zIndex: {
    type: Number
  },
  trapFocus: Boolean,
  headerAriaLevel: {
    type: String,
    default: "2"
  }
});
const dialogEmits = {
  open: () => true,
  opened: () => true,
  close: () => true,
  closed: () => true,
  [UPDATE_MODEL_EVENT]: (value) => isBoolean(value),
  openAutoFocus: () => true,
  closeAutoFocus: () => true
};
const drawerProps = buildProps({
  ...dialogProps,
  direction: {
    type: String,
    default: "rtl",
    values: ["ltr", "rtl", "ttb", "btt"]
  },
  size: {
    type: [String, Number],
    default: "30%"
  },
  withHeader: {
    type: Boolean,
    default: true
  },
  modalFade: {
    type: Boolean,
    default: true
  },
  headerAriaLevel: {
    type: String,
    default: "2"
  }
});
const drawerEmits = dialogEmits;
let scrollBarWidth;
const getScrollBarWidth = (namespace) => {
  var _a;
  if (!isClient)
    return 0;
  if (scrollBarWidth !== undefined)
    return scrollBarWidth;
  const outer = (undefined).createElement("div");
  outer.className = `${namespace}-scrollbar__wrap`;
  outer.style.visibility = "hidden";
  outer.style.width = "100px";
  outer.style.position = "absolute";
  outer.style.top = "-9999px";
  (undefined).body.appendChild(outer);
  const widthNoScroll = outer.offsetWidth;
  outer.style.overflow = "scroll";
  const inner = (undefined).createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);
  const widthWithScroll = inner.offsetWidth;
  (_a = outer.parentNode) == null ? undefined : _a.removeChild(outer);
  scrollBarWidth = widthNoScroll - widthWithScroll;
  return scrollBarWidth;
};
const useLockscreen = (trigger, options = {}) => {
  if (!isRef(trigger)) {
    throwError("[useLockscreen]", "You need to pass a ref param to this function");
  }
  const ns = options.ns || useNamespace("popup");
  const hiddenCls = computed(() => ns.bm("parent", "hidden"));
  if (!isClient || hasClass((undefined).body, hiddenCls.value)) {
    return;
  }
  let scrollBarWidth2 = 0;
  let withoutHiddenClass = false;
  const cleanup = () => {
    setTimeout(() => {
      return;
    }, 200);
  };
  watch(trigger, (val) => {
    if (!val) {
      cleanup();
      return;
    }
    withoutHiddenClass = !hasClass((undefined).body, hiddenCls.value);
    if (withoutHiddenClass) {
      (undefined).body.style.width;
    }
    scrollBarWidth2 = getScrollBarWidth(ns.namespace.value);
    const bodyHasOverflow = (undefined).documentElement.clientHeight < (undefined).body.scrollHeight;
    const bodyOverflowY = getStyle((undefined).body, "overflowY");
    if (scrollBarWidth2 > 0 && (bodyHasOverflow || bodyOverflowY === "scroll") && withoutHiddenClass) {
      (undefined).body.style.width = `calc(100% - ${scrollBarWidth2}px)`;
    }
    addClass((undefined).body, hiddenCls.value);
  });
  onScopeDispose(() => cleanup());
};
const configProviderContextKey = Symbol();
var English = {
  name: "en",
  el: {
    breadcrumb: {
      label: "Breadcrumb"
    },
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color.",
      alphaLabel: "pick alpha value"
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    mention: {
      loading: "Loading"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tour: {
      next: "Next",
      previous: "Previous",
      finish: "Finish"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    },
    carousel: {
      leftArrow: "Carousel arrow left",
      rightArrow: "Carousel arrow right",
      indicator: "Carousel switch to index {index}"
    }
  }
};
const buildTranslator = (locale) => (path, option) => translate(path, option, unref(locale));
const translate = (path, option, locale) => get(locale, path, path).replace(/\{(\w+)\}/g, (_, key) => {
  var _a;
  return `${(_a = option == null ? undefined : option[key]) != null ? _a : `{${key}}`}`;
});
const buildLocaleContext = (locale) => {
  const lang = computed(() => unref(locale).name);
  const localeRef = isRef(locale) ? locale : ref(locale);
  return {
    lang,
    locale: localeRef,
    t: buildTranslator(locale)
  };
};
const localeContextKey = Symbol("localeContextKey");
const useLocale = (localeOverrides) => {
  const locale = inject(localeContextKey, ref());
  return buildLocaleContext(computed(() => locale.value || English));
};
const globalConfig = ref();
function useGlobalConfig(key, defaultValue = undefined) {
  const config = getCurrentInstance() ? inject(configProviderContextKey, globalConfig) : globalConfig;
  {
    return computed(() => {
      var _a, _b;
      return (_b = (_a = config.value) == null ? undefined : _a[key]) != null ? _b : defaultValue;
    });
  }
}
const useDialog = (props, targetRef) => {
  var _a;
  const instance = getCurrentInstance();
  const emit = instance.emit;
  const { nextZIndex } = useZIndex();
  let lastPosition = "";
  const titleId = useId();
  const bodyId = useId();
  const visible = ref(false);
  const closed = ref(false);
  const rendered = ref(false);
  const zIndex = ref((_a = props.zIndex) != null ? _a : nextZIndex());
  let openTimer = undefined;
  let closeTimer = undefined;
  const namespace = useGlobalConfig("namespace", defaultNamespace);
  const style = computed(() => {
    const style2 = {};
    const varPrefix = `--${namespace.value}-dialog`;
    if (!props.fullscreen) {
      if (props.top) {
        style2[`${varPrefix}-margin-top`] = props.top;
      }
      if (props.width) {
        style2[`${varPrefix}-width`] = addUnit(props.width);
      }
    }
    return style2;
  });
  const overlayDialogStyle = computed(() => {
    if (props.alignCenter) {
      return { display: "flex" };
    }
    return {};
  });
  function afterEnter() {
    emit("opened");
  }
  function afterLeave() {
    emit("closed");
    emit(UPDATE_MODEL_EVENT, false);
    if (props.destroyOnClose) {
      rendered.value = false;
    }
  }
  function beforeLeave() {
    emit("close");
  }
  function open() {
    closeTimer == null ? undefined : closeTimer();
    openTimer == null ? undefined : openTimer();
    if (props.openDelay && props.openDelay > 0) {
      ({ stop: openTimer } = useTimeoutFn(() => doOpen(), props.openDelay));
    } else {
      doOpen();
    }
  }
  function close() {
    openTimer == null ? undefined : openTimer();
    closeTimer == null ? undefined : closeTimer();
    if (props.closeDelay && props.closeDelay > 0) {
      ({ stop: closeTimer } = useTimeoutFn(() => doClose(), props.closeDelay));
    } else {
      doClose();
    }
  }
  function handleClose() {
    function hide(shouldCancel) {
      if (shouldCancel)
        return;
      closed.value = true;
      visible.value = false;
    }
    if (props.beforeClose) {
      props.beforeClose(hide);
    } else {
      close();
    }
  }
  function onModalClick() {
    if (props.closeOnClickModal) {
      handleClose();
    }
  }
  function doOpen() {
    if (!isClient)
      return;
    visible.value = true;
  }
  function doClose() {
    visible.value = false;
  }
  function onOpenAutoFocus() {
    emit("openAutoFocus");
  }
  function onCloseAutoFocus() {
    emit("closeAutoFocus");
  }
  function onFocusoutPrevented(event) {
    var _a2;
    if (((_a2 = event.detail) == null ? undefined : _a2.focusReason) === "pointer") {
      event.preventDefault();
    }
  }
  if (props.lockScroll) {
    useLockscreen(visible);
  }
  function onCloseRequested() {
    if (props.closeOnPressEscape) {
      handleClose();
    }
  }
  watch(() => props.modelValue, (val) => {
    if (val) {
      closed.value = false;
      open();
      rendered.value = true;
      zIndex.value = isUndefined$1(props.zIndex) ? nextZIndex() : zIndex.value++;
      nextTick(() => {
        emit("open");
        if (targetRef.value) {
          targetRef.value.scrollTop = 0;
        }
      });
    } else {
      if (visible.value) {
        close();
      }
    }
  });
  watch(() => props.fullscreen, (val) => {
    if (!targetRef.value)
      return;
    if (val) {
      lastPosition = targetRef.value.style.transform;
      targetRef.value.style.transform = "";
    } else {
      targetRef.value.style.transform = lastPosition;
    }
  });
  return {
    afterEnter,
    afterLeave,
    beforeLeave,
    handleClose,
    onModalClick,
    close,
    doClose,
    onOpenAutoFocus,
    onCloseAutoFocus,
    onCloseRequested,
    onFocusoutPrevented,
    titleId,
    bodyId,
    closed,
    style,
    overlayDialogStyle,
    rendered,
    visible,
    zIndex
  };
};
const useDeprecated = ({ from, replacement, scope, version, ref: ref2, type = "API" }, condition) => {
  watch(() => unref(condition), (val) => {
  }, {
    immediate: true
  });
};
const __default__ = defineComponent({
  name: "ElDrawer",
  inheritAttrs: false
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: drawerProps,
  emits: drawerEmits,
  setup(__props, { expose }) {
    const props = __props;
    const slots = useSlots();
    useDeprecated({
      scope: "el-drawer",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/drawer.html#slots"
    }, computed(() => !!slots.title));
    const drawerRef = ref();
    const focusStartRef = ref();
    const ns = useNamespace("drawer");
    const { t } = useLocale();
    const {
      afterEnter,
      afterLeave,
      beforeLeave,
      visible,
      rendered,
      titleId,
      bodyId,
      zIndex,
      onModalClick,
      onOpenAutoFocus,
      onCloseAutoFocus,
      onFocusoutPrevented,
      onCloseRequested,
      handleClose
    } = useDialog(props, drawerRef);
    const isHorizontal = computed(() => props.direction === "rtl" || props.direction === "ltr");
    const drawerSize = computed(() => addUnit(props.size));
    expose({
      handleClose,
      afterEnter,
      afterLeave
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTeleport), {
        to: _ctx.appendTo,
        disabled: _ctx.appendTo !== "body" ? false : !_ctx.appendToBody
      }, {
        default: withCtx(() => [
          createVNode(Transition, {
            name: unref(ns).b("fade"),
            onAfterEnter: unref(afterEnter),
            onAfterLeave: unref(afterLeave),
            onBeforeLeave: unref(beforeLeave),
            persisted: ""
          }, {
            default: withCtx(() => [
              withDirectives(createVNode(unref(ElOverlay), {
                mask: _ctx.modal,
                "overlay-class": _ctx.modalClass,
                "z-index": unref(zIndex),
                onClick: unref(onModalClick)
              }, {
                default: withCtx(() => [
                  createVNode(unref(ElFocusTrap), {
                    loop: "",
                    trapped: unref(visible),
                    "focus-trap-el": drawerRef.value,
                    "focus-start-el": focusStartRef.value,
                    onFocusAfterTrapped: unref(onOpenAutoFocus),
                    onFocusAfterReleased: unref(onCloseAutoFocus),
                    onFocusoutPrevented: unref(onFocusoutPrevented),
                    onReleaseRequested: unref(onCloseRequested)
                  }, {
                    default: withCtx(() => [
                      createElementVNode("div", mergeProps({
                        ref_key: "drawerRef",
                        ref: drawerRef,
                        "aria-modal": "true",
                        "aria-label": _ctx.title || undefined,
                        "aria-labelledby": !_ctx.title ? unref(titleId) : undefined,
                        "aria-describedby": unref(bodyId)
                      }, _ctx.$attrs, {
                        class: [unref(ns).b(), _ctx.direction, unref(visible) && "open"],
                        style: unref(isHorizontal) ? "width: " + unref(drawerSize) : "height: " + unref(drawerSize),
                        role: "dialog",
                        onClick: withModifiers(() => {
                        }, ["stop"])
                      }), [
                        createElementVNode("span", {
                          ref_key: "focusStartRef",
                          ref: focusStartRef,
                          class: normalizeClass(unref(ns).e("sr-focus")),
                          tabindex: "-1"
                        }, null, 2),
                        _ctx.withHeader ? (openBlock(), createElementBlock("header", {
                          key: 0,
                          class: normalizeClass(unref(ns).e("header"))
                        }, [
                          !_ctx.$slots.title ? renderSlot(_ctx.$slots, "header", {
                            key: 0,
                            close: unref(handleClose),
                            titleId: unref(titleId),
                            titleClass: unref(ns).e("title")
                          }, () => [
                            !_ctx.$slots.title ? (openBlock(), createElementBlock("span", {
                              key: 0,
                              id: unref(titleId),
                              role: "heading",
                              "aria-level": _ctx.headerAriaLevel,
                              class: normalizeClass(unref(ns).e("title"))
                            }, toDisplayString(_ctx.title), 11, ["id", "aria-level"])) : createCommentVNode("v-if", true)
                          ]) : renderSlot(_ctx.$slots, "title", { key: 1 }, () => [
                            createCommentVNode(" DEPRECATED SLOT ")
                          ]),
                          _ctx.showClose ? (openBlock(), createElementBlock("button", {
                            key: 2,
                            "aria-label": unref(t)("el.drawer.close"),
                            class: normalizeClass(unref(ns).e("close-btn")),
                            type: "button",
                            onClick: unref(handleClose)
                          }, [
                            createVNode(unref(ElIcon), {
                              class: normalizeClass(unref(ns).e("close"))
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(close_default))
                              ]),
                              _: 1
                            }, 8, ["class"])
                          ], 10, ["aria-label", "onClick"])) : createCommentVNode("v-if", true)
                        ], 2)) : createCommentVNode("v-if", true),
                        unref(rendered) ? (openBlock(), createElementBlock("div", {
                          key: 1,
                          id: unref(bodyId),
                          class: normalizeClass(unref(ns).e("body"))
                        }, [
                          renderSlot(_ctx.$slots, "default")
                        ], 10, ["id"])) : createCommentVNode("v-if", true),
                        _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
                          key: 2,
                          class: normalizeClass(unref(ns).e("footer"))
                        }, [
                          renderSlot(_ctx.$slots, "footer")
                        ], 2)) : createCommentVNode("v-if", true)
                      ], 16, ["aria-label", "aria-labelledby", "aria-describedby", "onClick"])
                    ]),
                    _: 3
                  }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
                ]),
                _: 3
              }, 8, ["mask", "overlay-class", "z-index", "onClick"]), [
                [vShow, unref(visible)]
              ])
            ]),
            _: 3
          }, 8, ["name", "onAfterEnter", "onAfterLeave", "onBeforeLeave"])
        ]),
        _: 3
      }, 8, ["to", "disabled"]);
    };
  }
});
var Drawer = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "drawer.vue"]]);
const ElDrawer = withInstall(Drawer);
const _imports_0$1 = "data:image/png;base64,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";
const _imports_1$1 = "data:image/png;base64,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";
const _imports_2$1 = "data:image/png;base64,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";
const _sfc_main$1 = {
  __name: "AppHeader",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const drawer = ref(false);
    const list = [
      { id: "home", name: "Home" },
      { id: "about", name: "About" },
      { id: "explore", name: "Explore" },
      { id: "contact", name: "Contact Us" },
      { id: "screenshot", name: "App Screenshots" },
      { id: "download", name: "Download" }
    ];
    const scrollPosition = ref(0);
    const name = ref("comon");
    [__temp, __restore] = withAsyncContext(() => useMock()), __temp = await __temp, __restore();
    const tabClick = (id) => {
      const el = (undefined).getElementById(id);
      const scrollContainer = (undefined).scrollingElement || (undefined).documentElement;
      if (el) {
        const top = el.getBoundingClientRect().top + (undefined).pageYOffset;
        scrollContainer.scrollTo({
          top,
          behavior: "smooth"
        });
        drawer.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_drawer = ElDrawer;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["w-full flex flex-wrap justify-center transition-all duration-500 z-full top-0 left-0 fixed", scrollPosition.value > 2 ? "h-70 bg-[#fffffff2]  shadow-header" : "h-90"]
      }, _attrs))} data-v-92957225><div class="block lg:hidden text-14 h-full w-full md:w-md px-32 md:px-16" data-v-92957225><div class="flex flex-wrap justify-between items-center h-full py-8" data-v-92957225><img class="h-30"${ssrRenderAttr("src", `/${name.value}/header_logo.png`)} alt="404" data-v-92957225><img style="${ssrRenderStyle(scrollPosition.value > 2 ? null : { display: "none" })}" class="w-30 h-30 p-4"${ssrRenderAttr("src", _imports_0$1)} data-v-92957225><img style="${ssrRenderStyle(scrollPosition.value <= 2 ? null : { display: "none" })}" class="w-30 h-30 p-4"${ssrRenderAttr("src", _imports_1$1)} data-v-92957225></div>`);
      _push(ssrRenderComponent(_component_el_drawer, {
        class: "tg",
        modelValue: drawer.value,
        "onUpdate:modelValue": ($event) => drawer.value = $event,
        direction: "ltr",
        "with-header": false,
        style: {
          "--el-drawer-padding-primary": 0
        },
        size: "50%"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-end p-16" data-v-92957225${_scopeId}><img class="w-20 h-20"${ssrRenderAttr("src", _imports_2$1)} alt="" data-v-92957225${_scopeId}></div><div class="w-full flex-col" data-v-92957225${_scopeId}><!--[-->`);
            ssrRenderList(list, (item) => {
              _push2(`<div class="w-full p-14 border-0 border-b-[1px] border-solid border-000-1 justify-center items-center" data-v-92957225${_scopeId}>${ssrInterpolate(_ctx.$t(item.name))}</div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-end p-16" }, [
                createVNode("img", {
                  class: "w-20 h-20",
                  src: _imports_2$1,
                  alt: "",
                  onClick: ($event) => drawer.value = false
                }, null, 8, ["onClick"])
              ]),
              createVNode("div", { class: "w-full flex-col" }, [
                (openBlock(), createBlock(Fragment, null, renderList(list, (item) => {
                  return createVNode("div", {
                    key: item.id,
                    class: "w-full p-14 border-0 border-b-[1px] border-solid border-000-1 justify-center items-center",
                    onClick: ($event) => tabClick(item.id)
                  }, toDisplayString(_ctx.$t(item.name)), 9, ["onClick"]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden lg:block transition-all duration-500 text-14 h-full w-lg xl:w-xl" data-v-92957225><div class="flex flex-wrap justify-between items-center h-full px-28 py-8" data-v-92957225><img class="h-34"${ssrRenderAttr("src", `/${name.value}/header_logo.png`)} alt="404" data-v-92957225><div class="flex flex-wrap items-center" data-v-92957225><!--[-->`);
      ssrRenderList(list, (item, index) => {
        _push(`<a class="${ssrRenderClass([scrollPosition.value > 2 ? "text-000" : "text-fff", "px-12 py-8 font-600 cursor-pointer"])}"${ssrRenderAttr("href", `#${item.id}`)} data-v-92957225>${ssrInterpolate(item.name)}</a>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__scopeId", "data-v-92957225"]]);
const _imports_0 = "data:image/png;base64,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";
const _imports_1 = "data:image/png;base64,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";
const _imports_2 = "" + buildAssetsURL("headwer_bg.AhafPLhb.png");
const _imports_3 = "data:image/png;base64,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";
const _imports_4 = "data:image/png;base64,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";
const _imports_5 = "data:image/png;base64,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";
const _imports_6 = "" + buildAssetsURL("instagram.CHSiGVFs.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const about = ref([
      { router: "/private", name: "Private" },
      { router: "/user_policy", name: "User Policy" }
    ]);
    const name = ref("comon");
    const data = ref({});
    [__temp, __restore] = withAsyncContext(() => useMock()), __temp = await __temp, __restore();
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const _component_AppHeader = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<div id="home" class="w-full pt-120 pb-120 xl:pb-260 relative text-14 px-16 md:px-0 overflow-hidden" style="${ssrRenderStyle(`background-image: url('/${name.value}/home_bg.png'); background-size: cover;`)}"><div class="w-full h-full absolute left-0 top-0 opacity-60 z-1"></div><div class="flex flex-wrap justify-center w-full"><div class="w-full max-h-[800px] md:h-auto md:w-md lg:w-lg xl:w-xl flex flex-wrap justify-center items-center"><div class="text-fff mx-16 flex-1 relative z-30 text-center md:text-left"><div class="text-28 md:text-[40px] lg:text-[56px] uppercase font-600"> Hi, I&#39;m ${ssrInterpolate(data.value.name_up)} app. </div><div class="leading-1.6 font-300 text-16 mt-10">${ssrInterpolate((_a = data.value.home) == null ? undefined : _a.text)}</div><div class="flex justify-center flex-col lg:flex-row lg:justify-end xl:justify-center"><div class="flex"><div class="w-full px-42 py-16 rounded-4 bg-[#39b139] flex justify-center mt-16 cursor-pointer"> Google Play <img class="w-20 h-20 ml-10"${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="flex"><div class="px-42 py-16 rounded-4 bg-[#691cff] w-full justify-center lg:ml-20 flex mt-16 cursor-pointer"> App Store <img class="w-20 h-20 ml-10"${ssrRenderAttr("src", _imports_1)} alt=""></div></div></div></div><img class="mt-80 w-full md:w-330 md:h-586 lg:w-450 lg:h-[800px] xl:w-528 xl:h-[936px] mx-16 relative z-10 bg-[length:100%_auto] jump"${ssrRenderAttr("src", `/${name.value}/home_img.png`)}></div></div><img class="absolute left-0 right-0 w-full bottom-[-1px] z-20"${ssrRenderAttr("src", _imports_2)} alt="" srcset=""></div><div id="about" class="py-120 w-full flex flex-wrap justify-center relative"><div class="md:w-md lg:w-lg xl:w-xl flex flex-wrap justify-center items-center"><div class="px-16"><img class="w-full md:w-690 lg:w-450 xl:w-540 bg-[length:100%_auto] jump"${ssrRenderAttr("src", `/${name.value}/about_img.png`)}></div><div class="pr-16 pl-16 w-full lg:pl-40 mt-30 md:mt-0 lg:w-390 xl:w-450"><div class="font-300 text-24 leading-1.2">${ssrInterpolate((_b = data.value.about) == null ? undefined : _b.name)}</div><div class="font-600 leading-1.2 m-w-480 text-30 mt-20">${ssrInterpolate((_c = data.value.about) == null ? undefined : _c.text)}</div><!--[-->`);
      ssrRenderList((_d = data.value.about) == null ? undefined : _d.list, (item, index) => {
        _push(`<div class="flex flex-wrap mt-40"><img class="w-10 h-10 mt-8 mr-10"${ssrRenderAttr("src", _imports_3)} alt="" srcset=""><div class="flex-1"><div class="text-18">${ssrInterpolate(item.name)}</div><div class="max-w-300 mt-16 text-[#8c8d9e] leading-1.5">${ssrInterpolate(item.text)}</div></div></div>`);
      });
      _push(`<!--]--></div></div></div><div id="explore" class="w-full py-120 relative text-14 flex justify-center text-fff"><img class="w-full h-full absolute left-0 top-0 z-[-1]"${ssrRenderAttr("src", `/${name.value}/explore_bg.png`)}><div class="md:w-md lg:w-lg xl:w-xl px-16"><div class="w-full lg:w-2/3 xl:w-1/2 leading-1.2"><div class="text-24 font-300">Explore More</div><div class="text-30 md:text-[46px] font-600 pt-10">${ssrInterpolate((_e = data.value.explore) == null ? undefined : _e.name)}</div><div class="text-14 md:text-18 font-300 pt-30 leading-1.6">${ssrInterpolate((_f = data.value.explore) == null ? undefined : _f.text)}</div><div class="pt-30 leading-1.2 flex flex-wrap justify-between items-center"><!--[-->`);
      ssrRenderList(((_g = data.value.explore) == null ? undefined : _g.list) || [], (item, index) => {
        _push(`<div class="border-0 border-r-[1px] last:border-r-0 border-solid border-fff-4 w-1/3 flex flex-col items-center"><div class="font-300 text-30 md:text-[50px] leading-1.2">${ssrInterpolate(item.name)}</div><div class="mt-10 md: text-18">${ssrInterpolate(item.text)}</div></div>`);
      });
      _push(`<!--]--></div></div></div></div><div id="contact" class="w-full py-60 md:py-100 relative text-14 flex justify-center" style="${ssrRenderStyle(`background-image: url('/full/download-bg.png')`)}"><div class="w-full md:w-md lg:w-lg xl:w-xl flex flex-col lg:flex-row justify-between px-16"><div class="w-full lg:w-1/2 leading-1.2"><div class="text-18 font-600">Contact Us</div><div class="text-18 md:text-[28px] leading-1.5 pt-10 text-[#8c8d9e]">${(_a2 = (_h = data.value.contact) == null ? undefined : _h.name) != null ? _a2 : ""}</div><div class="text-18 pt-16 md:text-24 text-[#007bff]"><a class=""${ssrRenderAttr("href", data.value.emailHref)}>${ssrInterpolate(data.value.email)}</a></div></div><div class="w-full mt-10 lg:mt-0 lg:w-1/2"><img class="w-full md:w-320 jump mt-20 lg:mt-0"${ssrRenderAttr("src", `/${name.value}/contact_img.png`)}></div></div></div><div class="h-100 bg-[#222] w-full"></div><div id="screenshot" class="py-120 bg-[#eee] w-full px-8"><div class="text-center font-600 text-[222] text-30">App Screenshots</div><div class="block sm:hidden pt-70">`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules: [unref(Autoplay), unref(Pagination), unref(EffectCoverflow)],
        "slides-per-view": 1.3,
        centeredSlides: true,
        spaceBetween: 50,
        loop: true,
        autoplay: {
          delay: 3e3,
          disableOnInteraction: false
        },
        effect: "coverflow",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(5, (item, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img class="w-full h-full"${ssrRenderAttr("src", `/${name.value}/screenshots0${item}.png`)}${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "w-full h-full",
                        src: `/${name.value}/screenshots0${item}.png`
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(5, (item, index) => {
                return createVNode(unref(SwiperSlide), { key: index }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      class: "w-full h-full",
                      src: `/${name.value}/screenshots0${item}.png`
                    }, null, 8, ["src"])
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden sm:block lg:hidden pt-70">`);
      _push(ssrRenderComponent(unref(Swiper), {
        "slides-per-view": 3,
        "centered-slides": true,
        loop: true,
        autoplay: {
          delay: 3e3,
          disableOnInteraction: false
        },
        pagination: { clickable: true },
        modules: [unref(Autoplay), unref(Pagination)],
        class: "custom-swiper-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(5, (item, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img class="w-full h-full slide-img"${ssrRenderAttr("src", `/${name.value}/screenshots0${item}.png`)}${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "w-full h-full slide-img",
                        src: `/${name.value}/screenshots0${item}.png`
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(5, (item, index) => {
                return createVNode(unref(SwiperSlide), { key: index }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      class: "w-full h-full slide-img",
                      src: `/${name.value}/screenshots0${item}.png`
                    }, null, 8, ["src"])
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden lg:block pt-70">`);
      _push(ssrRenderComponent(unref(Swiper), {
        "slides-per-view": 5,
        "centered-slides": true,
        loop: true,
        autoplay: {
          delay: 3e3,
          disableOnInteraction: false
        },
        pagination: { clickable: true },
        modules: [unref(Autoplay), unref(Pagination)],
        class: "custom-swiper-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(5, (item, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img class="w-full h-full slide-img"${ssrRenderAttr("src", `/${name.value}/screenshots0${item}.png`)}${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "w-full h-full slide-img",
                        src: `/${name.value}/screenshots0${item}.png`
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(5, (item, index) => {
                return createVNode(unref(SwiperSlide), { key: index }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      class: "w-full h-full slide-img",
                      src: `/${name.value}/screenshots0${item}.png`
                    }, null, 8, ["src"])
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div id="download" class="w-full py-100 relative text-14 flex justify-center min-h-440 items-center" style="${ssrRenderStyle(`background-image: url('/full/download-bg.png'); `)}"><div class="md:w-md lg:w-lg xl:w-xl flex flex-wrap justify-between items-center px-16"><div class="text-36 font-600">Get Started for Free</div><div class="flex justify-center md:justify-start flex-col md:flex-row lg:justify-end text-fff mt-10 w-full lg:w-auto"><div class="flex"><div class="px-42 py-16 rounded-4 bg-[#39b139] w-full justify-center flex mt-16 cursor-pointer"> Google Play <img class="w-20 h-20 ml-10"${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="flex md:ml-20"><div class="px-42 py-16 rounded-4 bg-[#691cff] lg:ml-20 w-full justify-center flex mt-16 cursor-pointer"> App Store <img class="w-20 h-20 ml-10"${ssrRenderAttr("src", _imports_1)} alt=""></div></div></div></div></div><div class="w-full py-76 text-14 flex justify-center bg-[#222] text-fff"><div class="md:w-md lg:w-lg xl:w-xl flex flex-wrap justify-between items-center px-16"><div class="w-full lg:w-auto flex flex-col items-center lg:items-start"><img class="h-30"${ssrRenderAttr("src", `/${name.value}/logo.png`)} alt=""><div class="pt-30"> Copyright \xA9 ${ssrInterpolate(data.value.time || 2025)}.${ssrInterpolate(data.value.name_up)} All rights reserved. </div></div><div class="w-full lg:w-auto flex flex-col items-center lg:items-end mt-26"><div class="flex flex-end"><img class="w-20 h-20"${ssrRenderAttr("src", _imports_4)}><img class="w-20 h-20 ml-16"${ssrRenderAttr("src", _imports_5)}><img class="w-20 h-20 ml-16"${ssrRenderAttr("src", _imports_6)}></div><div class="flex flex-end mt-20"><!--[-->`);
      ssrRenderList(about.value, (item, index) => {
        _push(`<div class="ml-16 underline cursor-pointer">${ssrInterpolate(item.name)}</div>`);
      });
      _push(`<!--]--><div class="ml-16 underline cursor-pointer"><a class="" href="mailto:guyanchuangju@163.com">Contact us</a></div></div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-oYWfavVz.mjs.map
