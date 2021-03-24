// js中所有的事件都是元素天生自带的行为
// 不管给元素的事件行为有没有绑定对应的方法，当你触发这个事件行为的时候它都执行
console.dir("box");

//如果给当前元素的某个事件行为绑定了对应的方法，那触发该事件行为的时候，对应的方法就会执行，在方法可以执行咱们的逻辑

// 键盘 一般给input body html绑定

//  * 常用的事件行为
		//  *   [鼠标事件]
		//  *     click 点击（移动端click被识别为单击）
		//  *     dblclick 双击
		//  *     mousedown 鼠标按下
		//  *     mouseup  鼠标抬起
		//  *     mousemove 鼠标移动
		//  *     mouseover 鼠标滑过
		//  *     mouseout  鼠标滑出
		//  *     mouseenter 鼠标进入
		//  *     mouseleave 鼠标离开
		//  *     mousewhell 鼠标滚轮滚动
		//  *   [键盘事件]
		//  *     keydown 按下某个键
		//  *     keyup 抬起某个键
		//  *     keypress 除Shift/Fn/CapsLock键以外，其它键按住（连续触发）
		//  *   [移动端手指事件]
		//  *     单手指事件模型 Touch
		//  *        touchstart 手指按下
		//  *        touchmove 手指移动
		//  *        touchend  手指松开
		//  *        touchcancel 操作取消（一般应用于非正常状态下操作结束）
		//  *     多手指事件模型 Gesture
		//  *        gesturestart
		//  *        gesturechange / gestureupdate
		//  *        gestureend
		//  *        gesturecancel
		//  *   [表单元素常用事件]
		//  *     focus 获取焦点
		//  *     blur 失去焦点
		//  *     change 内容改变
		//  *   [音视频常用事件]
		//  *     canplay  可以播放（资源没有加载完，播放中可能会卡顿）
		//  *     canplaythrough 可以播放（资源已经加载完，播放中不会卡顿）
		//  *     play 开始播放
		//  *     playing 播放中
		//  *     pause 暂停播放
		//  *   [其它常用事件]
		//  *     load 资源加载完
		//  *     unload 资源卸载
		//  *     beforeunload 当前页面关闭之前
		//  *     error 资源加载失败
		//  *     scroll 滚动事件
		//  *     readystatechange AJAX请求状态改变事件
		//  *     contextmenu 鼠标右键触发


		    
        
        