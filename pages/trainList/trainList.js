// pages/trainList/trainList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '',
    trainList: [],
    winHeight: 600,
    currentTab: '1'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var startStation = options.startStation;
    var endStation = options.endStation;
    var date = options.date;
    console.log('始发站：' + startStation);
    console.log('终点站：' + endStation);
    console.log('出发时间：' + date);
    wx.setNavigationBarTitle({
      title: startStation + '→' + endStation,
    });
    this.setData({
      date: date
    });
    this.loadTrainsList(startStation, endStation);
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

  loadTrainsList: function(startStation, endStation) {
    var that = this;
    wx.request({
      url: 'https://apis.juhe.cn/train/s2swithprice',
      data: {
        start: startStation,
        end: endStation,
        date: '',
        dtype: '',
        key: 'JH52aa3406b9208a7d78ef920b0cab5f85'
      },
      method: 'GET',
      success: function(result) {
        console.log(result);
        var trainList = result.data.result.list;
        var trainList = wx.getStorageSync('trainList');
        var size = trainList.length;
        var winHeight = size * 100 + 30;
        that.setData({
          trainList: trainList,
          winHeight: winHeight
        });
      }
    });
  },

  switchNav: function(event) {
    var id = event.currentTarget.id;
    this.setData({
      currentTab: id
    });
  }
})