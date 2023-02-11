"use strict";
const common_vendor = require("../../common/vendor.js");
const IndexSwiper = () => "../../components/index/IndexSwiper.js";
const Recommended = () => "../../components/index/Recommended.js";
const CommodityList = () => "../../components/public/CommodityList.js";
const _sfc_main = {
  data() {
    return {
      title: "\u9996\u9875"
    };
  },
  components: {
    IndexSwiper,
    Recommended,
    CommodityList
  },
  onLoad() {
    console.log(111);
  },
  onReady() {
    common_vendor.index.setNavigationBarTitle({
      title: "\u9996\u9875"
    });
    common_vendor.index.setNavigationBarColor({
      frontColor: "#000000",
      backgroundColor: "#f1f1f1",
      animation: {
        duration: 400,
        timingFunc: "easeIn"
      }
    });
  },
  methods: {}
};
if (!Array) {
  const _component_IndexSwiper = common_vendor.resolveComponent("IndexSwiper");
  const _component_Recommended = common_vendor.resolveComponent("Recommended");
  const _component_CommodityList = common_vendor.resolveComponent("CommodityList");
  (_component_IndexSwiper + _component_Recommended + _component_CommodityList)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WX\u5C0F\u7A0B\u5E8F/uniapp_style/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
