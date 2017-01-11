/**
 * Created by dell on 2016/10/22.
 */
    window.onload = function(){
        animate1(document.body,{"opacity":1},20);
    }
//一.banner开始


//1.找对象
var ad=document.getElementById("ad");
var arrleft=document.getElementById("arrleft");
var arrright=document.getElementById("arrright");
var ul=ad.children[0];
var ulLis=ul.children;
var controller=document.getElementById("controller");
var ol=controller.children[0];
var olLis=ol.children;
var serviceDisplay = document.getElementById("serviceDisplay");
var introduce = document.getElementById("introduce");
var enterprise = document.getElementById("enterprise");
var pub = document.getElementById("pub");
var ac = document.getElementById("ac");
var imgHeight=ad.offsetHeight;
var oDiv = document.getElementById("serviceDisplay").children[0];//用来创建动态盒子
//2，动态生成小方块
//2.1遍历找到所有li,然后生成ol下的li
for(var i=0;i<ulLis.length;i++){
    var li=document.createElement("li");
    ol.appendChild(li);
}
//2.2给第一个小方块添加样式
olLis[0].className="kreen";
//2.3让再动态生成一个图片添加到ul里面
var zuihouulLis=ulLis[0].cloneNode(true);
ul.appendChild(zuihouulLis);
//3.让小方块显示高亮
for(var i=0;i<olLis.length;i++){
    var olLi=olLis[i];
    olLi.index=i;//用来记录这是第几张图片
    olLi.onmouseover= function () {
        //排他
        for(var i=1;i<olLis.length;i++){
            olLis[i].className="gray";
        }
        //复活自己
        this.className="black";
        olLis[square].className="kreen";
    }


    //4.点击的时候让图片跟着变化

    //olLi.onclick= function () {

        olLi.onclick= function () {
            clearInterval(timer);
            for(var i=0;i<olLis.length;i++){
                olLis[i].className="gray";
            }
            this.className="black";
            var dex=-this.index;
            var target=dex*imgHeight//目标距离
            // console.log(target);
            animate(ul,target);

            //点击的时候要先清除动画
            //clearInterval(timer);  ///////////实验

            //9.单击小快的时候让其它的也同步
            var dec=this.index;
            spc=dec;
            square=dec;
            timer=setInterval(function () {
                arrright.click();
            },5000);
        }
        //olLi.onmouseup= function () {
        //    timer=setInterval(function () {
        //        arrright.click();
        //    },2000);
        //}
    //}
    //3.3鼠标离开的时候恢复
    olLi.onmouseout= function () {
        for(var i=0;i<olLis.length;i++){
            olLis[i].className="gray";
        }
            olLis[square].className="kreen";
    }

}
//5.给右按钮注册事件
var spc=0;//用来记录第几张图片
var square=0;//用来记录是第几个小方块用来做小方块的下标
arrright.onclick= function () {
    if(spc==ulLis.length-1){
        ul.style.top=0;
        spc=0;
    }
    spc++;
    var target=-spc*imgHeight;
//        console.log(target);
    animate(ul,target);
    //8.1让小方块同步
    for(var i=0;i<olLis.length;i++){
        olLis[i].className="gray";
    }
    if(square==olLis.length-1){
        square=-1;
    }
    square++;
    olLis[square].className="kreen";
}
//6.给左按钮注册事件
arrleft.onclick= function () {
    if(spc==0){
        spc=ulLis.length-1;
        ul.style.top=-spc*imgHeight+"px";
    }
    spc--
    var target=-spc*imgHeight;
//        console.log(target);
    animate(ul,target);


    //8.2让左边的小方块也跟着移动
    //先排他
    for(var i=0;i<olLis.length;i++){
        olLis[i].className="gray";
    }
    if(square==0){
        square=olLis.length;
    }
    square--;
    olLis[square].className="kreen";

}
//7.设置定时器
var timer=null;
timer=setInterval(function () {
    arrright.click();
},5000);
//    ad.onmouseover= function () {
//        clearInterval(timer);
//    }
//    ad.onmouseout= function () {
//        timer=setInterval(function () {
//            arrright.click();
//        },2000);
//    }
//8.让小方块同步
//二。banner轮播图结束
//给联系设计人添加一个小的动画
var basic=document.getElementById("basic");
 basic.onmouseover= function () {
     basic.style.borderColor="#515151";
 }
basic.onmouseout= function () {
    basic.style.borderColor="#D6D6D6";
}
//给联系设计人添加一个小的动画结束
//给设计师注册事件
//动态生成设计服务
assginContent();

function assginContent() {
//创建一个数组用来存储所有的数据
    var arr = [
        {
            title:"企业服装定制服务／设计好青年",
            price:"价格面议",
            image:"../images/5.jpg",
            desc:"提供加急服务，提供可选拓展"
        },
        {
            title:"海景儿童摄影",
            price:"￥6000/天",
            image:"../images/9.jpg",
            desc:""
        },
        {
            title:"旅游产品设计，博物馆衍生品设计",
            price:"￥8000/款",
            image:"../images/10.jpg",
            desc:""
        },
        {
            title:"室内设计师",
            price:"价格面议",
            image:"../images/8.jpg",
            desc:""
        },
        {
            title:"智能机器人",
            price:"￥50000/款",
            image:"../images/7.jpg",
            desc:"提供加急服务"
        },
        {
            title:"小清新插图",
            price:"价格面议",
            image:"../images/4.jpg",
            desc:""
        },
        {
            title:"动态网络表情设计",
            price:"价格面议",
            image:"../images/3.gif",
            desc:"提供可选拓展"
        },
        {
            title:"遇达设计-会都房产-企业文化-徽章",
            price:"价格面议",
            image:"../images/12.jpg",
            desc:"提供加急服务，提供可选拓展"
        }
    ];

    var newArr = [];//创建一个新数组，用来接受拼接好的没一个字符串
    for(var i=0;i<arr.length;i++){//遍历找到每一个数据

        var str = '<div class="serveOne">'
            +'<a href="javascript:void (0)">'
            +'<div id="collect"></div>'
            +'<div class="sOshang"><img src="'+arr[i].image+'" alt=""/></div>'
            +'<div class="sOxia">'
            +'<h6>'+arr[i].title+'</h6>'
            +'<div class="line3"></div>'
            +'<p class="price" style="font-weight: 700">'+arr[i].price+'</p>'
            +'<p class="jieshao"><span>'+arr[i].desc+'</span></p>'
            +'</div>'
            +'</a>'
            +'</div>';
        newArr.push(str);
    }
    //随机排列数组元素

    newArr.sort(function () {
        return 0.5-Math.random()
    });
     //将数组转化成字符串并且添加到innerHtml中
    oDiv.innerHTML = newArr.join(" ");

}
//给每一个小的盒子都添加一个css3的动画

    var oDivs=oDiv.children;
    collect(oDivs.length/2,0,"0px");
    collect(oDivs.length,oDivs.length/2,"0px");
    function collect(oDivss,oDivs2,li){
        for(var i=oDivs2;i<oDivss;i++){
            //给每一个都注册一个事件
            oDivs[i].onmouseover= function () {
                this.style.top=-5+"px";
                this.style.boxShadow=" 0px 0px 6px lightgray";
                this.children[0].children[0].style.top=li;
                //$(this).children(0).children(0).animate({"top":li});
                $(this).children(0).children(0).stop().slideDown(500);
                this.children[0].children[0].style.display="block";
            }
            oDivs[i].onmouseout= function () {
                this.style.top="0";
                this.style.boxShadow="";
                //this.children[0].children[0].style.top="0";
                this.children[0].children[0].style.display="none";
            }
        }
    }


//console.log(getScroll().scrollTop);

function getScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    return {
        scrollTop: scrollTop,
        scrollLeft: scrollLeft
    };
}


window.onscroll = function(){
    if(getScroll().scrollTop > 150){
        animate1(introduce,{"opacity":1},7);
    }
    if(getScroll().scrollTop > 550){
        animate1(enterprise,{"left":0},5);
    }
    if(getScroll().scrollTop > 900){
        animate1(pub,{"right":0},5);
        animate1(ac,{"right":0},5);
    }
    if(getScroll().scrollTop > 1150){
        animate1(serviceDisplay,{"opacity":1,"top": 0},20);
    }
}