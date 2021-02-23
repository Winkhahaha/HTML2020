// 尝试创建一个可以执行简单动画的函数(定时器)
/*
 * 参数：
 * 	obj:要执行动画的对象
 * 	attr:要执行动画的样式，比如：left top width height
 * 	target:执行动画的目标位置
 * 	speed:移动的速度(正数向右移动，负数向左移动)
 *  callback:回调函数，这个函数将会在动画执行完毕以后执行
 */
function move(obj, attr, target, speed, callback) {
    // 关闭上一个定时器
    clearInterval(obj.timer);
    // 获取元素目前的位置
    var current = parseInt(getStyle(obj, attr));
    /*
        判断速度的正负值
         0-->800,speed正
         800-->0,speed负
     */
    if (current > target) {
        // 此时速度应为负值
        speed = -speed;
    }
    // 开启一个定时器，用来执行动画效果
    // 向执行动画的对象中添加一个timer属性，用来保存它自己的定时器的标识
    obj.timer = setInterval(function () {
        // 获取box1的原来的left值
        var oldValue = parseInt(getStyle(obj, attr));
        // 在旧值的基础上增加
        var newValue = oldValue + speed;
        // 向左移动,需要判断newValue是否小于target
        if ((speed < 0 && newValue < target) ||
            // 向右移动,需要判断newValue是否大于target
            (speed > 0 && newValue > target)) {
            newValue = target;
        }
        // 将新值设置给box1
        obj.style[attr] = newValue + "px";
        // 无论向左向右,最终都停在指定target位置
        if (newValue === target) {
            // 达到目标，关闭定时器
            clearInterval(obj.timer);
            // 动画执行完毕，调用回调函数
            callback && callback();
        }

    }, 30);
}

/*
 * 定义一个函数，用来获取指定元素的当前的样式
 * 参数：
 * 		obj 要获取样式的元素
 * 		name 要获取的样式名
 */
function getStyle(obj, name) {

    if (window.getComputedStyle) {
        //正常浏览器的方式，具有getComputedStyle()方法
        return getComputedStyle(obj, null)[name];
    } else {
        //IE8的方式，没有getComputedStyle()方法
        return obj.currentStyle[name];
    }

}

/*
         定义一个函数用来向一个元素提那家指定的class属性值
            obj:要添加class属性的元素
            cn:要添加的class值
         */
function addClass(obj, cn) {
    // 如果obj没有cb这个class值,则给他加上
    if (!hasClass(obj, cn)) {
        obj.className += " " + cn;
    }
}

/*
删除一个元素中含有的class值
* */
function removeClass(obj, cn) {
    var reg = new RegExp("\\b" + cn + "\\b");
    // 如果匹配上cn这个class值,则用空串代替之
    obj.className = obj.className.replace(reg, "");
}

/*
    toggleClass:用来切换一个类
        如果元素元素中有cn类,删掉
        如果没有cn类,加之
* */
function toggleClass(obj, cn) {
    // 判断是否含有cn
    if (hasClass(obj, cn)) {
        // 有,删除
        removeClass(obj, cn);
    } else {
        // 没有,加之
        addClass(obj, cn);
    }

}

/*
 判断一个元素是否含有指定的class值
 如果有返回true,没有false
 */
function hasClass(obj, cn) {
    // 创建正则表达式
    // 有cn且cn为独立值
    // var reg = /\bb2\b/;
    var reg = new RegExp("\\b" + cn + "\\b");
    return reg.test(obj.className);
}