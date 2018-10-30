$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  setTitle();

  function setTitle() {
    /* 
    1 获取屏幕的宽度
    2 对宽度进行判断  lg md 。。。
    3 把判断的结果打印到 title标签上
    4 页面马上调用 方法 同时 页面的宽度改变的时候 再调用一次 
     */

    //  获取屏幕的宽度
    var width=document.querySelector("html").offsetWidth;

    //进行判断
    if(width<768){
      // 极小屏幕
      document.querySelector("title").innerHTML="极小屏幕 "+width;
    }
    else if( width>=768&&width<992){
      // 小屏幕
      document.querySelector("title").innerHTML="小屏幕 "+width;
    }
    else if( width>=992&&width<1200){
      //  ctrl +d 选择中了相同的代码 
      // 中等屏幕
      document.querySelector("title").innerHTML="中等屏幕 "+width;
    }
    else if( width>=1200){
      // 大屏幕
      document.querySelector("title").innerHTML="大屏幕 "+width;
    }
  }


  // 页面的宽度改变事件
  window.onresize = function () {
    console.log("狗丢了怎么办？？？？？");
    // 使用 搜狗搜索！！！！！！
    setTitle();

  }
})