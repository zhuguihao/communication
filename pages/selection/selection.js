// pages/selection/selection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 选择公司
   */
  companySelect(e){
    wx.navigateTo({
      url: '../companySelect/companySelect',
    })
  },
})