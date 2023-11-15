// pages/train/train.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    imgUrls: [
      '../../images/banner/swipe1.png',
      '../../images/banner/swipe2.png',
      '../../images/banner/swipe3.png',
      '../../images/banner/swipe4.png'
    ],
    currentTab: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  switchNav: function(event) {
    var id = event.currentTarget.id;
    this.setData({
      currentTab: id
    });
  },

  formSubmit: function(event) {
    console.log(event);
    var startStation = event.detail.value.startStation;
    var endStation = event.detail.value.endStation;
    var date = event.detail.value.date;
    var week = event.detail.value.week;
    wx.navigateTo({
      url: '../trainList/trainList?startStation=' + startStation + '&endStation=' + endStation + '&date=' + date + '&week=' + week,
    });
  }
})