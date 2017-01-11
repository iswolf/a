/**
 * Created by admin on 2016/10/24.
 */

//window.onload = function(){
//    if(getScroll().scrollTop > 500){
//        animate(serviceDisplay,{"opacity":0});
//    }
//}

/**
 * 首页导航延时效果
 */
$(function(){
    $("#h-menu").hover(function () {
        $(".menu-bar").stop().fadeToggle();
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 214) {
            $(".goTo").css({"display":"block"});
        } else {
            $(".goTo").hide();
        }
    });
    /**
     * 返回顶部
     */
    $(".goTo").click(function () {
        $('html,body').animate({scrollTop: '0px'}, 1000);
    });
    $(".goTo").mouseleave(function () {
        $(".panel").hide();
    });
    $(".add").mouseenter(function () {
        $(".panel").show();
    });
    $(".panel").mouseleave(function () {
        $(".panel").hide();
    });

    /***
     * 登录注册弹窗
     */
    $(".reg").click(function(){
        $(".black-overlay").show();
        $(".login_sgin").show();
    });
    $(".log").click(function(){
        $(".black-overlayB").show();
        $(".login_enter").show();
    });

    $(".login_sgin .close").click(function(){
        $(".login_sgin").hide();
        $(".black-overlay").hide();
    })
    $(".login_enter .close").click(function(){
        $(".login_enter").hide();
        $(".black-overlayB").hide();
    });
});

//获取标签的内容（兼容所有浏览器）
function getInnerText(element) {
    //能力检测(先判断如果这个能力有这个)
    if(typeof element.innerText === "string") {
        //说明支持innerText
        return element.innerText;
    }else {
        //说明不支持innerText
        return element.textContent;
    }
}

//设置内容的方法（兼容性问题）
function setInnerText(element, value) {
    //能力检测
    if(typeof element.innerText === "string") {
        element.innerText = value;
    }else {
        element.textContent = value;
    }
}

//获取指定元素的第一个子元素
function getFirstElement(element) {
    //能力检测
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        //IE679
        var node = element.firstChild;
        while (node && node.nodeType != 1) {
            //说明是一个节点
            node = node.nextSibling;
        }

        return node;
    }
}

//获取指定元素的最后个子元素
function getLastElement(element) {
    //能力检测
    if (element.lastElementChild) {
        return element.lastElementChild;
    } else {
        var node = element.lastChild;
        while (node && node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}
//获得指定元素的下一个子元素
/**   函数三要素：功能，参数，返回值
 * 获得指定元素的下一个子元素（功能）
 * @param element（参数）
 * @returns {返回指定下一个子元素}（返回值）
 */
function getNextElement(element) {
    //首先进行能力检测
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        //兼容IE低版本
        var node = element.nextSibling;
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}
//获得指定元素的上一个元素
function getPreviousElement(element) {
    //首先进行能力检测
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        //兼容IE低版本678
        var node = element.previousSibling;
        while (node && node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}
//获取日期时间封装
//日期封装
function riqi(){
    //创建当前日期
    var date=new Date();
    var nian=date.getFullYear();
//         console.log(nian);
    var yue=date.getMonth();
    if(yue<10){
        yue="0"+yue+1;
    }
    var ri=date.getDate();
    if(ri<10){
        ri="0"+ri;
    }
    var h=date.getHours();
    if(h<10){
        h="0"+h;
    }
    var m=date.getMinutes();
    if(m<10){
        m="0"+m;
    }
    var miao=date.getSeconds();
    if(miao<10){
        miao="0"+miao;
//             miao=0+"123";

    }
    var str=nian+"年"+yue+"月"+ri+"日"+h+":"+m+":"+miao;
    return str;
//         console.log(str);
}
//开始封装动画，第一个参数是对象，第二个参数是目标距离
function animate(obj,target){
    //首先找到当前位置
    //保证最多只有一个定时器
    //obj.timer代表的是间歇定时器返回的一个数字，作为了obj.timer的属性值
    if(obj.timer){
        clearInterval(obj.timer);
    }
    var leader=obj.offsetTop;
    //然后找到每一次的距离
    var step=8;
    //定义个定时器
//        var target=400;//目标位置
    //如果现在的位置大于目标位置就减去
    if(leader>target){
        step=-step;
    }
    obj.timer=setInterval(function () {
        //现在的位置
        //因为最后一步可能比现在的距离到目标距离大，所有会走过
        var zuigou=Math.abs(leader-target);
//             所以当现在的位置到目标距离远的小于最后一步的时候就直接抱过去
        if(zuigou>Math.abs(step)){
            leader=leader+step;
            obj.style.top=leader+"px";
        }else{
            clearInterval(obj.timer);
            obj.style.top=target+"px";
        }
        // console.log("是否还在执行");
//            console.log(box.offsetLeft);
    },15);
}
//动画的方式修改任意的样式属性的值
function animate1(element, attrs,time) {
    //清除定时器
    if (element.timerId) {
        clearInterval(element.timerId);
    }
    element.timerId = setInterval(function () {
        //假设所有属性都到达目标值
        var stop = true
        //遍历属性
        for (var k in attrs) {
            var target = attrs[k];
            var current = 0;
            var step = 0;
            if (k == "opacity") {
                current = parseFloat(getStyle(element, k)) * 100|| 0;
                target = target * 100;
                step = (target - current) / 300;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[k] = current / 100;
                //兼容ie
                element.style["filter"] = "alpha(opacity=" + current + ")";
            }
            else if (k === "zIndex") {
                element.style[k] = target;
            }
            else {
                current = parseInt(getStyle(element, k)) || 0;

                step = (target - current) / 10;

                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[k] = current + "px";
            }

            if (step !== 0) {
                //有1个属性未到达目标值
                stop = false;
            }
        }
        if (stop) {
            clearInterval(element.timerId);
        }
    }, time);
}
function getStyle(element, attr) {
    //能力检测
    if (window.getComputedStyle) {
        return window.getComputedStyle(element, null)[attr];
    } else {
        return element.currentStyle[attr];
    }
}

