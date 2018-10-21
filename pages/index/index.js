import sources from '../../sources/data/data'
Page({
  data: {
    toView: "",
    scrollTop: 0,
    /**
     * 屏幕高度
     */
    winHeight: null,
    contacts: [],
  },
  onLoad(){
    let vm = this
    wx.getSystemInfo({
      success: function(res) {
        vm.setData({
          winHeight: res.windowHeight
        })
      },
    })
    vm.setData({
      'contacts': sources.contacts
    })
  },
  scroll: function (e) {
    console.log(e)
  },
  listScroll(e){
    let vm = this
    console.log(e.target.dataset.contact)
    vm.setData({
      toView: e.target.dataset.contact
    })
  }
})