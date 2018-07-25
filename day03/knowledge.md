## 今日份小收获
### 小技巧
1. 除了`document.getElementById()`返回的是一个确定的标签，其它方式所返回的都是一个数组，所以我们在使用时应根据实际的需要指明数组的索引来获取确定值。
2. 音频标签`<auto><auto>`播放和暂停的方法分别是`.play()`和`.pause()`,判断音频是否播放的属性为`if(auto.paused)`,在播放则其实为`false`,否则为`true`。
3. 获取滚轮距离顶部的距离
```
var scrollTop=window.scrollY;//获取滚动条距离顶部的值
```
4. 获取页面可视区域的高度
```
var clientHeight=document.documentElement.clientHeight;
```
5. 获取元素的各种值
```
    //获取元素的left值
    var left=list.offsetLeft;
    //获取元素的高度
    var height=list.offsetHeight;
    //获取元素的宽度
    var width=list.offsetWidth;
    //获取元素的right值
    var right=list.offsetRight;
```

---
### js中一些小函数的使用
1. 如何使用随机数
```
    //第一个代表取整，第二个代表取值是0--6；
    var x=Math.round(Math.random()*6);
```
2. 取整
```
    var speed=parseInt(left-target)/5;
```
3. 向上和向下取整
```
    speed=speed>0?Math.ceil(speed):Math.floor(speed);
```
