"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    commodity_data: Array,
    itemW: {
      type: String,
      default: "375rpx"
    },
    itemH: {
      type: String,
      default: "375rpx"
    },
    wrap: {
      type: String,
      default: "wrap"
    }
  },
  data() {
    return {};
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.commodity_data, (item, index, i0) => {
      return {
        a: `../../static/image/${item.img}`,
        b: common_vendor.t(item.detail),
        c: common_vendor.t(item.price),
        d: common_vendor.t(item.old_price),
        e: common_vendor.t(item.discount),
        f: index
      };
    }),
    b: common_vendor.s(`height:${$props.itemH}`),
    c: common_vendor.s(`width:${$props.itemW}`),
    d: common_vendor.s(`flex-wrap:${$props.wrap}`)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fc9b6790"], ["__file", "D:/uniapp/uniapp_style/components/public/CommodityList.vue"]]);
wx.createComponent(Component);
