### document.write()是否在window.load()中的区别
1. document.write只有在加载时执行才不会清空页面内容，其他时间执行则会清空页面内容。
2. window.load()
```
它是指：代码中的DOM已经加载就绪了，也就是文档流已经关闭。此时，
你再用document.write()是启用了新的文档流来render浏览器窗口内容，从而把前面的全部内容通通覆盖掉;
document.write()会将<head>和<body>清除掉再写入内容。
```
3. 当我们直接写`document.write()`时之会写入内容，而不会清空页面的内容；    
   但我们将`document.write()`写在`window.load()`方法之中时，则会将页面上的所有内容全部清空后才会重新写入内容。
   
### 对定时器的理解
[JavaScript定时器原理分析](https://www.cnblogs.com/st-leslie/p/6082450.html)
[深入理解定时器的原理](https://www.cnblogs.com/xiaohuochai/p/5773183.html)
1. `setTimeout(function(){},time)`是等待`time`后将其提交到主线程中让`JavaScript引擎`进行调用。
2. `setInterval(function(){},time)`则是每间隔`time`时间后就将其提交到主线程中让`javascript引擎`进行调用，但是两个
函数之间执行的时间就不一定了，可能会存在误差。