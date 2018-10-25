// component/serchPopup.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //输入框提示语
    placeholder: {
      type: String,
      value: '搜索',
    },
    show: {
      type: Boolean,
      value: false,
    },
    innerText: {
      type: String,
      value: '搜索',
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindSerch(e) {
      let vm = this
      vm.triggerEvent("serch", e.detail)
    },
    calcel() {
      let vm = this
      vm.setData({
        show: false
      })
    }
  }
})