Page({
  data: {
    toView: '',
    toViewIndex:0,
    scrollTop: 0,
    contacts: [{
      "code": "C", "list": [{
        "firstName": "名字",
        "phone": "15057526152",
        "nickName": "昵称",
        "lastName": "姓氏",
        "middleName": "中间名",
        "addressCountry": "联系地址国家",
        "addressState": "联系地址省份",
        "addressCity": "联系地址城市",
        "addressStreet": "联系地址街道"
      }, {
        "firstName": "名字",
        "phone": "15057526152",
        "nickName": "昵称",
        "lastName": "姓氏",
        "middleName": "中间名",
        "addressCountry": "联系地址国家",
        "addressState": "联系地址省份",
        "addressCity": "联系地址城市",
        "addressStreet": "联系地址街道"
      }, {
        "firstName": "名字",
        "phone": "15057526152",
        "nickName": "昵称",
        "lastName": "姓氏",
        "middleName": "中间名",
        "addressCountry": "联系地址国家",
        "addressState": "联系地址省份",
        "addressCity": "联系地址城市",
        "addressStreet": "联系地址街道"
      }, {
        "firstName": "名字",
        "phone": "15057526152",
        "nickName": "昵称",
        "lastName": "姓氏",
        "middleName": "中间名",
        "addressCountry": "联系地址国家",
        "addressState": "联系地址省份",
        "addressCity": "联系地址城市",
        "addressStreet": "联系地址街道"
      }]
    }, {
      "code": "D", "list": [{
        "firstName": "名字",
        "phone": "15057526152",
        "nickName": "昵称",
        "lastName": "姓氏",
        "middleName": "中间名",
        "addressCountry": "联系地址国家",
        "addressState": "联系地址省份",
        "addressCity": "联系地址城市",
        "addressStreet": "联系地址街道"
      }, {
        "firstName": "名字",
        "phone": "15057526152",
        "nickName": "昵称",
        "lastName": "姓氏",
        "middleName": "中间名",
        "addressCountry": "联系地址国家",
        "addressState": "联系地址省份",
        "addressCity": "联系地址城市",
        "addressStreet": "联系地址街道"
      }, {
        "firstName": "名字",
        "phone": "15057526152",
        "nickName": "昵称",
        "lastName": "姓氏",
        "middleName": "中间名",
        "addressCountry": "联系地址国家",
        "addressState": "联系地址省份",
        "addressCity": "联系地址城市",
        "addressStreet": "联系地址街道"
      }, {
        "firstName": "名字",
        "phone": "15057526152",
        "nickName": "昵称",
        "lastName": "姓氏",
        "middleName": "中间名",
        "addressCountry": "联系地址国家",
        "addressState": "联系地址省份",
        "addressCity": "联系地址城市",
        "addressStreet": "联系地址街道"
      }]
    }, {
      "code": "E", "list": [{
        "firstName": "名字",
        "phone": "15057526152",
        "nickName": "昵称",
        "lastName": "姓氏",
        "middleName": "中间名",
        "addressCountry": "联系地址国家",
        "addressState": "联系地址省份",
        "addressCity": "联系地址城市",
        "addressStreet": "联系地址街道"
      }, {
        "firstName": "名字",
        "phone": "15057526152",
        "nickName": "昵称",
        "lastName": "姓氏",
        "middleName": "中间名",
        "addressCountry": "联系地址国家",
        "addressState": "联系地址省份",
        "addressCity": "联系地址城市",
        "addressStreet": "联系地址街道"
      }, {
        "firstName": "名字",
        "phone": "15057526152",
        "nickName": "昵称",
        "lastName": "姓氏",
        "middleName": "中间名",
        "addressCountry": "联系地址国家",
        "addressState": "联系地址省份",
        "addressCity": "联系地址城市",
        "addressStreet": "联系地址街道"
      }, {
        "firstName": "名字",
        "phone": "15057526152",
        "nickName": "昵称",
        "lastName": "姓氏",
        "middleName": "中间名",
        "addressCountry": "联系地址国家",
        "addressState": "联系地址省份",
        "addressCity": "联系地址城市",
        "addressStreet": "联系地址街道"
      }]
    }, {
      "code": "F", "list": [{
        "firstName": "名字",
        "phone": "15057526152",
        "nickName": "昵称",
        "lastName": "姓氏",
        "middleName": "中间名",
        "addressCountry": "联系地址国家",
        "addressState": "联系地址省份",
        "addressCity": "联系地址城市",
        "addressStreet": "联系地址街道"
      }, {
        "firstName": "名字",
        "phone": "15057526152",
        "nickName": "昵称",
        "lastName": "姓氏",
        "middleName": "中间名",
        "addressCountry": "联系地址国家",
        "addressState": "联系地址省份",
        "addressCity": "联系地址城市",
        "addressStreet": "联系地址街道"
      }, {
        "firstName": "名字",
        "phone": "15057526152",
        "nickName": "昵称",
        "lastName": "姓氏",
        "middleName": "中间名",
        "addressCountry": "联系地址国家",
        "addressState": "联系地址省份",
        "addressCity": "联系地址城市",
        "addressStreet": "联系地址街道"
      }, {
        "firstName": "名字",
        "phone": "15057526152",
        "nickName": "昵称",
        "lastName": "姓氏",
        "middleName": "中间名",
        "addressCountry": "联系地址国家",
        "addressState": "联系地址省份",
        "addressCity": "联系地址城市",
        "addressStreet": "联系地址街道"
      }]
    }],
    /**
     * 屏幕高度
     */
    winHeight:null,
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
  },
  scroll: function (e) {
    console.log(e)
  },
  listScroll(e){
    console.log(e.target.dataset.contact.code)
    this.setData({
      toView: e.target.dataset.contact.code
    })
  }
})