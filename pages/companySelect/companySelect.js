import sources from '../../sources/data/data'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    company: null,//公司列表
    index:0,//公司下标
    region:[],
    customItem: '全部'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let vm = this
    vm.setData({
      company: sources.company
    })
  },
  /**
   * 公司选择下拉框
   */
  bindCompanyChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }
})