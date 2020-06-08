App({
  //生命周期函数
  //小程序初始化完成执行的生命周期函数
  onLaunch: function () {
  //  console.log('小程序初始化完成了、执行onlaunch');
    //获取用户信息
    //异步调用
    // wx.getUserInfo({
    //   success: function (reg) {
    //     console.log(reg.userInfo.avatarUrl);
    //   }
    // })

    //模拟一个错误
    // setTimeout(function () {
    //   const err = new Error;
    //   throw err;
    // }, 10000);

  },

  //页面生成完成时执行的生命周期函数
  onShow: function (options) {
   // console.log('页面生成完了，执行onShow');
    console.log(options);
    //判断小程序的进入场景
    switch (options.scene) {
      case 1001:
        break;
      case 1005:
        break;
      case 1011:
       // console.log('扫描二维码进入');
        break;
    }
  },

  //页面被隐藏时执行
  onHide: function () {
   // console.log('页面被隐藏了，执行onHide');
  },

  //页面异常执行
  onError: function (msg) {
    //console.log('页面出异常了，执行onEnrro');
  },
  globalData:{
    name:'张三',
    age:18
  }
})