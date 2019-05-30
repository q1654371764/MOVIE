// pages/buy/buy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    every:[],
    data:[],
    dataNum:0,
    movieNum:0,
    cinemaId:'',
    id:''
  },
  click(e){
    let ind = e.target.dataset.index
    this.setData({
      dataNum:ind
    })
    let id = this.data.id
    let cinemaId = this.data.cinemaId * 1
    wx.request({
      url: 'http://m.maoyan.com/ajax/cinemaDetail?cinemaId=' + cinemaId + '&movieId=' + id,
      success: (res) => {
        res.data.showData.movies.forEach(item => {
          item.img = item.img.replace('w.h', '128.180')
        })
        this.setData({
          list: res.data.showData.movies,
          every: res.data.showData.movies[this.data.movieNum].shows,
          data: res.data.showData.movies[this.data.movieNum].shows[this.data.dataNum].plist
        })
      }
    })
  },
  click2(e){
    let ind = e.target.dataset.index
    this.setData({
      movieNum:ind
    })

    let id = this.data.id
    let cinemaId = this.data.cinemaId * 1
    wx.request({
      url: 'http://m.maoyan.com/ajax/cinemaDetail?cinemaId=' + cinemaId + '&movieId=' + id,
      success: (res) => {
        res.data.showData.movies.forEach(item => {
          item.img = item.img.replace('w.h', '128.180')
        })
        this.setData({
          list: res.data.showData.movies,
          every: res.data.showData.movies[this.data.movieNum].shows,
          data: res.data.showData.movies[this.data.movieNum].shows[this.data.dataNum].plist
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let id = options.id
    let cinemaId = options.cinemaId*1
    wx.request({
      url: 'http://m.maoyan.com/ajax/cinemaDetail?cinemaId='+cinemaId + '&movieId=' + id,
      success:(res)=>{
        res.data.showData.movies.forEach(item=>{
          item.img = item.img.replace('w.h','128.180')
        })
        this.setData({
          list: res.data.showData.movies,
          every: res.data.showData.movies[this.data.movieNum].shows,
          data: res.data.showData.movies[this.data.movieNum].shows[this.data.dataNum].plist,
          id:id,
          cinemaId: cinemaId
        })
      }
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