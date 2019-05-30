// pages/zhu/zhu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:'',
    newlist:'',
    left:true,
    right:false,
    scrollview:[]
  },
  left(){
    this.setData({
      left:true,
      right:false
    })
  },
  right(){
    this.setData({
      left: false,
      right: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  buy(e){
    let id = e.target.dataset.id;
    wx.navigateTo({
      url: '/pages/every/every?id='+id,
    })
  },
  onLoad: function (options) {
    let arr = this.data.img;
    wx.request({
      url: 'http://m.maoyan.com/ajax/movieOnInfoList?token=',
      success:(res)=>{
        res.data.movieList.forEach(item=>{
          item.img = item.img.replace('w.h','128.180')
        })
        this.setData({
          list: res.data.movieList
        })
        console.log(this.data.list)
      }
    })

    wx.request({
      url: 'http://m.maoyan.com/ajax/comingList?ci=1&token=&limit=12',
      success: (res) => {
        res.data.coming.forEach(item => {
          item.img = item.img.replace('w.h', '128.180')
        })
        this.setData({
          newlist: res.data.coming
        })
      }
    })


    wx.request({
      url: 'http://m.maoyan.com/ajax/mostExpected?ci=1&limit=10&offset=0&token=o8WsAtm61njQqUvMYmJhn-IAVa8AAAAA_QcAAJwVq-pXsLjhAZ-IyOGi-d_f_vIKHgCbtwXqA-M5KEr2Zazt-AO1wDFm7vOaodL-GA',
      success: (res) => {
        res.data.coming.forEach(item=>{
          item.img = item.img.replace('w.h','128.180')
        })
        console.log(res.data.coming)
        this.setData({
          scrollview: res.data.coming
        })
      }
    })

  },
  search(){
    wx.navigateTo({
      url: '/pages/search/search',
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
   // console.log(1)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //console.log(1)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})