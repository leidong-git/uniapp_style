"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    nav_index: {
      type: Number
    },
    nav_list: {
      type: Array
    }
  },
  data() {
    return {};
  },
  methods: {
    Nav_click(index) {
      this.$emit("change_navindex", index);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.nav_list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.n($props.nav_index == index ? "f_active_color " : "f_color"),
        c: `top${index}`,
        d: common_vendor.o(($event) => $options.Nav_click(index), index),
        e: index
      };
    }),
    b: `top${$props.nav_index}`
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-04cd3292"], ["__file", "D:/uniapp/uniapp_style/components/index/NavigationIndex.vue"]]);
wx.createComponent(Component);
