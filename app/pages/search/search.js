// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:'',
    his:[],
    flag:false
  },
  focus(){
    this.setData({
      flag:true
    })
  },
  blur() {
    this.setData({
      flag: false
    })
  },
  quxiao(){
    wx.navigateTo({
      url: '/pages/zhu/zhu',
    })
  },
  click(e){
    let nm = e.target.dataset.nm
    let his = this.data.his;
    if(his.length > 2){
      his.splice(0,1)
    }
    his.push(nm)
    wx.setStorageSync('search', his)
    this.setData({
      his:his
    })
    let item = e.target.dataset.item
    wx.navigateTo({
      url: '/pages/detail/detail?item=' + JSON.stringify(item),
    })
  },
  search(e){
    let kw = e.detail.value
    if(kw){
      wx.request({
        url: 'http://m.maoyan.com/ajax/search?kw=' + kw + '&cityId=1&stype=-1',
        success: (res) => {
          console.log(res.data)
          if(res.data.movies){
            this.setData({
              list: res.data.movies.list
            })
          }else{
            this.setData({
              list: []
            })
          }
        }
      })
    }else{
      this.setData({
        list:[]
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let his = wx.getStorageSync('search');
    if(his){
      this.setData({
        his: his
      })
    }else{
      this.setData({
        his: []
      })
    }
    
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