"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const NavigationIndex = () => "../../components/index/NavigationIndex.js";
const IndexSwiper = () => "../../components/index/IndexSwiper.js";
const Recommended = () => "../../components/index/Recommended.js";
const CommodityList = () => "../../components/public/CommodityList.js";
const _sfc_main = {
  data() {
    return {
      title: "\u9996\u9875",
      commodity_data: [
        {
          img: "1.jpg",
          detail: "\u65B0\u534E\u793E\u5317\u4EAC2\u67089\u65E5\u7535 \u9898:\u65B0\u65F6\u4EE3\u5341\u5E74\u4F1F\u5927\u53D8\u9769\u5960\u5B9A\u575A\u5B9E\u57FA\u7840\u2014\u2014\u65B0\u5F81\u7A0B\u4E0A\u6EE1\u6000\u4FE1\u5FC3\u5F00\u65B0\u5C40\u5C55\u65B0\u8C8C\u7CFB\u5217\u8FF0\u8BC4\u4E4B\u56DB \u65B0\u534E\u793E\u8BB0\u8005\u8C2D\u8C1F\u6653\u3001\u59DA\u5747\u82B3\u3001\u5218\u7FBD\u4F73 \u5386\u7ECF\u65B0\u65F6\u4EE3\u5341\u5E74\u4F1F\u5927\u53D8\u9769\u7684\u4E2D\u56FD,\u7AD9...",
          price: "152.5",
          old_price: "254.3",
          discount: "5.5"
        },
        {
          img: "2.jpg",
          detail: "\u6EE1\u6000\u4FE1\u5FC3\u8E0F\u4E0A\u65B0\u5F81\u7A0B \u9614\u6B65\u5411\u524D\u7EED\u5199\u65B0\u7BC7\u7AE0 \u4E2D\u56FD\u5171\u4EA7\u515A\u7B2C\u4E8C\u5341\u6B21\u5168\u56FD\u4EE3\u8868\u5927\u4F1A\u5DF2\u7ECF\u53EC\u5F00,\u5927\u4F1A\u62A5\u544A\u8BA9\u7EA2\u8C37\u6EE9\u533A\u5404\u754C\u5E72\u90E8\u7FA4\u4F17\u6EE1\u6000\u4FE1\u5FC3,\u81EA\u4FE1\u3001\u559C\u60A6\u548C\u8C6A\u8FC8\u4E4B\u60C5\u6EA2\u4E8E\u8A00\u8868\u3002\u5927\u5BB6\u7545\u6240\u6B32\u8A00,\u7EB7...",
          price: "352.5",
          old_price: "654.3",
          discount: "5.5"
        },
        {
          img: "3.jpg",
          detail: "\u515A\u7684\u4E8C\u5341\u5927\u4E3E\u65D7\u5B9A\u5411\u3001\u7EE7\u5F80\u5F00\u6765\u3001\u6307\u8DEF\u9886\u822A,\u63D0\u51FA\u4E86\u65B0\u5F81\u7A0B\u4E2D\u5FC3\u4EFB\u52A1\u3002\u65B0\u7684\u8D76\u8003\u8DEF\u4E0A,\u6211\u4EEC\u8981\u6EE1\u6000\u4FE1\u5FC3\u3001\u8E14\u5389\u594B\u53D1,\u575A\u5B9A\u4E0D\u79FB\u63A8\u8FDB\u9AD8\u8D28\u91CF\u8DE8\u8D8A\u53D1\u5C55,\u4EE5\u5B9E\u5E72\u5B9E\u7EE9\u8C31\u5199\u73B0\u4EE3\u5316...",
          price: "152.5",
          old_price: "204.3",
          discount: "9.5"
        },
        {
          img: "1.jpg",
          detail: "\u524D\uFF0C\u591A\u4F4D\u6D77\u5916\u4FA8\u80DE\u5728\u63A5\u53D7\u4E2D\u592E\u5E7F\u64AD\u7535\u89C6\u603B\u53F0\u534E\u8BED\u73AF\u7403\u5E7F\u64AD\u8BB0\u8005\u91C7\u8BBF\u65F6\u8868\u793A\uFF0C\u5BF9\u4E2D\u56FD\u5F0F\u73B0\u4EE3\u5316\u65B0\u5F81\u7A0B\u5145\u6EE1\u4FE1\u5FC3\uFF0C\u5C06\u7EE7\u7EED\u79C9\u6301\u60C5\u7CFB\u6851\u6893\u7684\u5BB6\u56FD\u60C5\u6000\u62E5\u62B1\u65B0\u673A\u9047\uFF0C\u53D1\u6325\u878D\u901A...",
          price: "162.5",
          old_price: "354.3",
          discount: "6.5"
        },
        {
          img: "3.jpg",
          detail: "\u515A\u7684\u4E8C\u5341\u5927\u4E3E\u65D7\u5B9A\u5411\u3001\u7EE7\u5F80\u5F00\u6765\u3001\u6307\u8DEF\u9886\u822A,\u63D0\u51FA\u4E86\u65B0\u5F81\u7A0B\u4E2D\u5FC3\u4EFB\u52A1\u3002\u65B0\u7684\u8D76\u8003\u8DEF\u4E0A,\u6211\u4EEC\u8981\u6EE1\u6000\u4FE1\u5FC3\u3001\u8E14\u5389\u594B\u53D1,\u575A\u5B9A\u4E0D\u79FB\u63A8\u8FDB\u9AD8\u8D28\u91CF\u8DE8\u8D8A\u53D1\u5C55,\u4EE5\u5B9E\u5E72\u5B9E\u7EE9\u8C31\u5199\u73B0\u4EE3\u5316...",
          price: "152.5",
          old_price: "204.3",
          discount: "9.5"
        },
        {
          img: "1.jpg",
          detail: "\u524D\uFF0C\u591A\u4F4D\u6D77\u5916\u4FA8\u80DE\u5728\u63A5\u53D7\u4E2D\u592E\u5E7F\u64AD\u7535\u89C6\u603B\u53F0\u534E\u8BED\u73AF\u7403\u5E7F\u64AD\u8BB0\u8005\u91C7\u8BBF\u65F6\u8868\u793A\uFF0C\u5BF9\u4E2D\u56FD\u5F0F\u73B0\u4EE3\u5316\u65B0\u5F81\u7A0B\u5145\u6EE1\u4FE1\u5FC3\uFF0C\u5C06\u7EE7\u7EED\u79C9\u6301\u60C5\u7CFB\u6851\u6893\u7684\u5BB6\u56FD\u60C5\u6000\u62E5\u62B1\u65B0\u673A\u9047\uFF0C\u53D1\u6325\u878D\u901A...",
          price: "162.5",
          old_price: "354.3",
          discount: "6.5"
        }
      ],
      NavIndex: 0,
      NavList: [
        {
          name: "\u63A8\u8350"
        },
        {
          name: "\u8FD0\u52A8\u6237\u5916"
        },
        {
          name: "\u670D\u9970\u5185\u8863"
        },
        {
          name: "\u978B\u9774\u7BB1\u5305"
        },
        {
          name: "\u7F8E\u5986\u4E2A\u62A4"
        },
        {
          name: "\u5BB6\u5C45\u6570\u7801"
        },
        {
          name: "\u98DF\u54C1\u6BCD\u5A74"
        }
      ],
      swiper_height: "800rpx"
    };
  },
  components: {
    IndexSwiper,
    Recommended,
    CommodityList,
    NavigationIndex
  },
  onLoad() {
    common_vendor.index.getSystemInfo({
      success: (res) => {
        console.log(this.Get_type_height());
        console.log(res.windowHeight);
        this.swiper_height = res.windowHeight - common_vendor.index.upx2px(90) - this.Get_type_height() + "px";
        console.log(this.swiper_height);
      }
    });
  },
  onReady() {
  },
  methods: {
    Change_navindex(index) {
      console.log(index);
      this.NavIndex = index;
    },
    TabChange(e) {
      this.NavIndex = e.detail.current;
    },
    Get_type_height() {
      let type_height = 0;
      let type = common_vendor.index.getSystemInfoSync().uniPlatform;
      if (type === "web") {
        type_height = common_vendor.index.upx2px(190);
      } else if (type === "app") {
        type_height = common_vendor.index.upx2px(90);
      } else if (type === "mp-weixin") {
        type_height = common_vendor.index.upx2px(115);
      } else {
        type_height = 0;
      }
      return type_height;
    },
    Search() {
      common_vendor.index.navigateTo({
        url: "/pages/search/search"
      });
    }
  }
};
if (!Array) {
  const _component_NavigationIndex = common_vendor.resolveComponent("NavigationIndex");
  const _component_IndexSwiper = common_vendor.resolveComponent("IndexSwiper");
  const _component_Recommended = common_vendor.resolveComponent("Recommended");
  const _component_CommodityList = common_vendor.resolveComponent("CommodityList");
  (_component_NavigationIndex + _component_IndexSwiper + _component_Recommended + _component_CommodityList)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.Search()),
    b: common_vendor.t($data.title),
    c: common_vendor.o($options.Change_navindex),
    d: common_vendor.p({
      nav_list: $data.NavList,
      nav_index: $data.NavIndex
    }),
    e: common_vendor.f($data.NavList, (item, index, i0) => {
      return common_vendor.e({
        a: index == 0
      }, index == 0 ? {
        b: "55d74b71-1-" + i0,
        c: "55d74b71-2-" + i0,
        d: "55d74b71-3-" + i0,
        e: common_vendor.p({
          commodity_data: $data.commodity_data
        }),
        f: "55d74b71-4-" + i0,
        g: common_vendor.p({
          commodity_data: $data.commodity_data
        }),
        h: common_vendor.s(`height:${$data.swiper_height}`)
      } : {}, {
        i: index != 0
      }, index != 0 ? {
        j: common_assets._imports_3,
        k: "55d74b71-5-" + i0,
        l: common_vendor.p({
          commodity_data: $data.commodity_data,
          itemW: "250rpx",
          itemH: "250rpx"
        }),
        m: common_assets._imports_1,
        n: "55d74b71-6-" + i0,
        o: common_vendor.p({
          commodity_data: $data.commodity_data,
          itemW: "250rpx",
          itemH: "250rpx",
          wrap: "no-wrap"
        }),
        p: common_assets._imports_1,
        q: "55d74b71-7-" + i0,
        r: common_vendor.p({
          commodity_data: $data.commodity_data,
          itemW: "250rpx",
          itemH: "250rpx",
          wrap: "nowrap"
        }),
        s: common_vendor.s(`height:${$data.swiper_height}`)
      } : {}, {
        t: index
      });
    }),
    f: common_vendor.o((...args) => $options.TabChange && $options.TabChange(...args)),
    g: common_vendor.s(`height:${$data.swiper_height}`),
    h: $data.NavIndex
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/uniapp/uniapp_style/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
