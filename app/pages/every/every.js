// pages/every/every.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{ "id": 130, "mark": 0, "nm": "橙天嘉禾影城(上地店)", "sellPrice": "53.9", "addr": "海淀区上地南口华联商厦4F（近上地南口）", "distance": "1.9km", "tag": { "allowRefund": 0, "buyout": 0, "cityCardTag": 0, "deal": 0, "endorse": 0, "hallType": ["4K厅"], "hallTypeVOList": [{ "name": "4K厅", "url": "" }], "sell": 1, "snack": 1, "vipTag": "折扣卡" }, "promotion": { "cardPromotionTag": "限时¥16.9促销开卡，首单更优惠,开卡即赠价值¥10元礼包" }, "showTimes": "次日00:05" }, { "id": 25172, "mark": 0, "nm": "华联影城(肖家河店)", "sellPrice": "29.9", "addr": "海淀区龙背村路99号院北京华联龙背购物中心", "distance": "3.3km", "tag": { "allowRefund": 0, "buyout": 0, "cityCardTag": 0, "deal": 0, "endorse": 1, "hallTypeVOList": [], "sell": 1, "snack": 1, "vipTag": "折扣卡" }, "promotion": { "cardPromotionTag": "开卡特惠，首单2张立减10元" }, "showTimes": "次日00:00" }, { "id": 25814, "mark": 0, "nm": "莱纳龙域影城", "sellPrice": "49.9", "addr": "昌平区龙域中街1号院1号楼昌发展万科广场5层", "distance": "3.6km", "tag": { "allowRefund": 0, "buyout": 0, "cityCardTag": 0, "deal": 0, "endorse": 1, "hallType": ["杜比全景声厅", "DTS:X 临境音厅", "4K厅"], "hallTypeVOList": [{ "name": "杜比全景声厅", "url": "" }, { "name": "DTS:X 临境音厅", "url": "" }, { "name": "4K厅", "url": "" }], "sell": 1, "snack": 1 }, "promotion": {}, "showTimes": "次日00:05 | 次日00:10" }, { "id": 5111, "mark": 0, "nm": "CGV影城(清河店)", "sellPrice": "55", "addr": "海淀区清河中街68号华润五彩城购物中心东区7层", "distance": "3.6km", "tag": { "allowRefund": 0, "buyout": 0, "cityCardTag": 0, "deal": 0, "endorse": 0, "hallType": ["60帧厅"], "hallTypeVOList": [], "sell": 1, "snack": 1, "vipTag": "折扣卡" }, "promotion": { "cardPromotionTag": "开卡特惠，首单2张立减6元" }, "showTimes": "次日00:05 | 次日00:10" }, { "id": 7433, "mark": 0, "nm": "大地影院(西三旗物美店)", "sellPrice": "43.9", "addr": "海淀区悦秀路99号二层", "distance": "3.7km", "tag": { "allowRefund": 0, "buyout": 0, "cityCardTag": 0, "deal": 0, "endorse": 0, "hallTypeVOList": [], "sell": 1, "snack": 1, "vipTag": "折扣卡" }, "promotion": { "cardPromotionTag": "限时¥16.9促销开卡，首单更优惠,开卡即赠价值¥10元礼包" }, "showTimes": "次日00:15" }, { "id": 25346, "mark": 0, "nm": "华联影院(回龙观店)", "sellPrice": "29.9", "addr": "昌平区回龙观镇西大街111号三层F3-90", "distance": "4.6km", "tag": { "allowRefund": 0, "buyout": 0, "cityCardTag": 0, "deal": 0, "endorse": 1, "hallTypeVOList": [], "sell": 1, "snack": 1, "vipTag": "折扣卡" }, "promotion": { "cardPromotionTag": "开卡特惠，首单2张立减10元" }, "showTimes": "23:59" }, { "id": 25045, "mark": 0, "nm": "东融国际影城(西小口店)", "sellPrice": "48", "addr": "海淀区文龙家园四里4号楼4F-08", "distance": "4.8km", "tag": { "allowRefund": 0, "buyout": 0, "cityCardTag": 0, "deal": 0, "endorse": 1, "hallType": ["4D厅"], "hallTypeVOList": [{ "name": "4D厅", "url": "" }], "sell": 1, "snack": 1 }, "promotion": {}, "showTimes": "次日00:05" }, { "id": 9647, "mark": 0, "nm": "沃美影城(回龙观店)", "sellPrice": "49", "addr": "昌平区回龙观同成街华联购物中心四楼（城铁回龙观站出口对面）", "distance": "5.1km", "tag": { "allowRefund": 0, "buyout": 0, "cityCardTag": 0, "deal": 0, "endorse": 0, "hallType": ["杜比全景声厅"], "hallTypeVOList": [{ "name": "杜比全景声厅", "url": "" }], "sell": 1, "snack": 1 }, "promotion": {}, "showTimes": "次日00:00" }, { "id": 5502, "mark": 0, "nm": "保利国际影城(龙旗广场店)", "sellPrice": "38.9", "addr": "昌平区黄平路19号院3号楼龙旗广场购物中心3层（地铁8号线育新站路北600米，近永辉超市）", "distance": "5.4km", "tag": { "allowRefund": 0, "buyout": 0, "cityCardTag": 0, "deal": 0, "endorse": 0, "hallType": ["4K厅"], "hallTypeVOList": [{ "name": "4K厅", "url": "" }], "sell": 1, "snack": 1, "vipTag": "折扣卡" }, "promotion": { "cardPromotionTag": "限时¥16.9促销开卡，首单更优惠" }, "showTimes": "次日00:05" }, { "id": 70, "mark": 0, "nm": "嘉华国际影城(学清路店)", "sellPrice": "49", "addr": "海淀区学清路甲8号圣熙8号购物中心5层西侧（学清路）", "distance": "6.1km", "tag": { "allowRefund": 0, "buyout": 0, "cityCardTag": 0, "deal": 0, "endorse": 0, "hallType": ["巨幕厅"], "hallTypeVOList": [{ "name": "巨幕厅", "url": "" }], "sell": 1, "snack": 1, "vipTag": "折扣卡" }, "promotion": {}, "showTimes": "次日00:00" }, { "id": 58, "mark": 0, "nm": "金逸影城(新都店)", "sellPrice": "38", "addr": "海淀区西三旗建材城中路6号新都购物广场1层", "distance": "6.4km", "tag": { "allowRefund": 0, "buyout": 0, "cityCardTag": 0, "deal": 0, "endorse": 0, "hallTypeVOList": [], "sell": 1, "snack": 1 }, "promotion": {}, "showTimes": "次日00:00" }, { "id": 107, "mark": 0, "nm": "中影国际影城(昌平永旺店)", "sellPrice": "32.9", "addr": "昌平区北清路1号永旺国际商城3楼", "distance": "6.5km", "tag": { "allowRefund": 0, "buyout": 0, "cityCardTag": 0, "deal": 0, "endorse": 0, "hallType": ["DTS:X 临境音厅"], "hallTypeVOList": [{ "name": "DTS:X 临境音厅", "url": "" }], "sell": 1, "snack": 1, "vipTag": "折扣卡" }, "promotion": { "cardPromotionTag": "开卡特惠，首单2张立减6元" }, "showTimes": "次日00:00" }, { "id": 197, "mark": 0, "nm": "美嘉欢乐影城(中关村店)", "sellPrice": "39", "addr": "海淀区中关村大街15号中关村广场购物中心津乐汇3楼（地铁中关村站D口出西侧）", "distance": "6.5km", "tag": { "allowRefund": 1, "buyout": 0, "cityCardTag": 0, "deal": 0, "endorse": 1, "hallType": ["杜比全景声厅"], "hallTypeVOList": [{ "name": "杜比全景声厅", "url": "" }], "sell": 1, "snack": 1, "vipTag": "折扣卡" }, "promotion": { "cardPromotionTag": "开卡特惠，首单2张立减4元" }, "showTimes": "次日00:00" }, { "id": 5359, "mark": 0, "nm": "新华国际影城(宝盛店)", "sellPrice": "36.5", "addr": "海淀区宝盛北里西区28号兴美生活广场5层", "distance": "6.5km", "tag": { "allowRefund": 0, "buyout": 0, "cityCardTag": 0, "deal": 0, "endorse": 0, "hallTypeVOList": [], "sell": 1, "snack": 1, "vipTag": "折扣卡" }, "promotion": { "cardPromotionTag": "开卡特惠，首单2张立减4元" }, "showTimes": "次日00:00" }, { "id": 26195, "mark": 0, "nm": "大地院线影城(珠江摩尔店)", "sellPrice": "31", "addr": "昌平区回龙观镇北清路1号院7号楼内7-101-26", "distance": "6.5km", "tag": { "allowRefund": 1, "buyout": 0, "cityCardTag": 0, "deal": 0, "endorse": 1, "hallTypeVOList": [], "sell": 1, "snack": 1, "vipTag": "折扣卡" }, "promotion": { "cardPromotionTag": "开卡特惠，首单2张立减10元" }, "showTimes": "次日00:05" }, { "id": 152, "mark": 0, "nm": "金逸影城(中关村店)", "sellPrice": "70", "addr": "海淀区中关村大街19号新中关购物中心B1层", "distance": "7km", "tag": { "allowRefund": 0, "buyout": 0, "cityCardTag": 0, "deal": 0, "endorse": 0, "hallTypeVOList": [], "sell": 1, "snack": 1, "vipTag": "折扣卡" }, "promotion": { "cardPromotionTag": "开卡特惠，首单2张立减6元" }, "showTimes": "次日00:00" }, { "id": 257, "mark": 0, "nm": "海淀剧院", "sellPrice": "35", "addr": "海淀区中关村大街28号", "distance": "7.3km", "tag": { "allowRefund": 0, "buyout": 0, "cityCardTag": 0, "deal": 0, "endorse": 1, "hallTypeVOList": [], "sell": 1, "snack": 0, "vipTag": "折扣卡" }, "promotion": { "cardPromotionTag": "开卡特惠，首单2张立减10元" }, "showTimes": "次日00:00" }, { "id": 26808, "mark": 0, "nm": "耀莱成龙影城(玉泉山店)", "sellPrice": "39", "addr": "海淀区北坞嘉园南里35号楼玉泉商业生活中心", "distance": "7.9km", "tag": { "allowRefund": 0, "buyout": 0, "cityCardTag": 0, "deal": 0, "endorse": 1, "hallType": ["4DX厅"], "hallTypeVOList": [{ "name": "4DX厅", "url": "" }], "sell": 1, "snack": 1, "vipTag": "折扣卡" }, "promotion": { "cardPromotionTag": "限时¥25.9促销开卡，首单更优惠" }, "showTimes": "23:59" }, { "id": 155, "mark": 0, "nm": "UME国际影城(华星店)", "sellPrice": "129.5", "addr": "海淀区双榆树科学院南路44号（双安商场对面）", "distance": "8.4km", "tag": { "allowRefund": 0, "buyout": 0, "cityCardTag": 0, "deal": 0, "endorse": 0, "hallType": ["IMAX厅", "CGS中国巨幕厅"], "hallTypeVOList": [{ "name": "IMAX厅", "url": "" }, { "name": "CGS中国巨幕厅", "url": "" }], "sell": 1, "snack": 1, "vipTag": "折扣卡" }, "promotion": { "cardPromotionTag": "开卡特惠，首单2张立减4元" }, "showTimes": "23:59" }, { "id": 17304, "mark": 0, "nm": "魔影国际影城(金源店)", "sellPrice": "43", "addr": "海淀区远大路1号院B座五楼西侧001号（居然之家材料馆楼上）", "distance": "8.8km", "tag": { "allowRefund": 0, "buyout": 0, "cityCardTag": 0, "deal": 0, "endorse": 1, "hallType": ["杜比全景声厅"], "hallTypeVOList": [{ "name": "杜比全景声厅", "url": "" }], "sell": 1, "snack": 1, "vipTag": "折扣卡" }, "promotion": { "cardPromotionTag": "限时¥36.9促销开卡，首单更优惠,开卡即赠价值¥48元礼包" }, "showTimes": "次日00:00" }],
    item:'',
    id:''
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    wx.request({
      url: 'http://m.maoyan.com/ajax/detailmovie?movieId='+id,
      success:(res)=>{
        console.log(res.data.detailMovie) 
        let item = res.data.detailMovie
        let img = item.img.replace('w.h', '128.180');
        item.img = img
        this.setData({
          item: item,
          id:id
        })
      }
    })
    console.log(this.data.list)
  },
  buy(e){
      let cinemaId = e.target.dataset.cinemaid
      wx.navigateTo({
        url: '/pages/buy/buy?id=' + this.data.id + '&cinemaId=' + cinemaId,
      })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})