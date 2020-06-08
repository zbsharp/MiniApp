// Pages/Abount/about.js
const app = getApp();
const name = app.globalData.name;
const age = app.globalData.age;
// console.log(name);
// console.log(age);
Page({
  //注册一个页面
  //页面的初始数据
  data: {
    // message: '丢雷'
  },
  //******监听一个页面******* */
  //这样定义方法是ES6的新写法
  onLoad() {//页面被加载
    console.log('页面初始化 onLoad');
  },
  onShow(){//页面显示出来
    console.log('页面一显示 onShow');
  },
  onReady(){ //页面一被渲染
    console.log('页面是被渲染 onready');
  },
  onHide(){
    console.log('当页面隐藏起来 onHide');
  },
  //************监听wxml相关的一些事件**************** */
handelGetUserInfo(event){
console.log(event);
},

//监听点击事件
MyClick(){
  console.log('点的好');
},
//************其他事件**************** */
//监听页面的滚动
onPageScroll(obj){
  console.log(obj);
},

//监听页面滚动到底部
onReachBottom(){
  console.log('页面滚动到底部了');
}

})