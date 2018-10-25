import sources from '../../sources/data/data'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    company: null, //公司列表
    index: 0, //公司下标
    region: [],
    customItem: '全部',
    showSerchPopup: false, //搜索弹窗开关
    innerText: '', //
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let vm = this
    vm.setData({
      company: sources.company
    })
  },
  /**
   * 公司选择下拉框
   */
  bindCompanyChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  bindRegionChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  /**
   * 搜索弹窗输入事件
   * 20181025
   * zgh
   */
  serch(e) {
    console.log(e)
    console.log(e.detail.value)
    this.setData({
      innerText: e.detail.value
    })
    console.log(this.data.innerText)
  },
  /**
   * 搜索弹窗显示
   * 20181025
   * zgh
   */
  showPopup() {
    this.setData({
      showSerchPopup: true
    })
  }
})