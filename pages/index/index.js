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
    }]
  },
  onLoad(){
    // wx.chooseLocation({
    //   success: function(res) {
    //     console.log(res)
    //   },
    // })
  },
  scroll: function (e) {
    console.log(e)
  },
  listScroll(e){
    console.log(e.target.dataset.contact.code)
    this.setData({
      toView: e.target.dataset.contact.code
    })
  },
  tap: function (e) {
    let index = this.data.toViewIndex
    if (this.data.toViewIndex >= this.data.contacts.length-1){
      index = 0
    }else{
      index++
    }
    console.log(index)
    this.setData({
      toView: this.data.contacts[index].code,
      toViewIndex: index
    })
    // let contacts = this.data
    // for (var i = 0; i < contacts.length; ++i) {
    //   if (contacts[i].code === this.data.toView) {
    //     this.setData({
    //       toView: contacts[i + 1].code
    //     })
    //     console.log(this.data.toView)
    //     break
    //   }
    // }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})