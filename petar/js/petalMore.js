/**
 * Created by admin on 2016/10/22.
 */
window.onload = function(){
    animate1(document.body,{"opacity":1},15);
}
//图片json数据
var json = [
    {"src":"../images/PP_01.jpg","p":"炫酷数字海报设计免费下载","ptsrc":"../images/PT_01.png","name":"paspan","Wlass":"背景素材"},
    {"src":"../images/PP_02.png","p":"CNU视觉联盟","ptsrc":"../images/PT_02.jpg","name":"安之乐之！","Wlass":"人物-视觉"},
    {"src":"../images/PP_03.jpg","p":"其实说分不开的也不见得","ptsrc":"../images/PT_03.jpg","name":"木之时间","Wlass":"二次元"},
    {"src":"../images/PP_04.jpg","p":"国粹风景","ptsrc":"../images/PT_04.jpg","name":"YGamp;zjm","Wlass":"国风-国画"},
    {"src":"../images/PP_05.jpg","p":"气质妹子绝对领域","ptsrc":"../images/PT_05.jpg","name":"翅膀的诱惑","Wlass":"日常"},
    {"src":"../images/PP_06.jpg","p":"阳光居家设计","ptsrc":"../images/PT_06.jpg","name":"踏月不留痕","Wlass":"室内设计"},
    {"src":"../images/PP_07.jpg","p":"型男采集","ptsrc":"../images/PT_07.jpg","name":"时光瓣瓣","Wlass":"人物-型男"},
    {"src":"../images/PP_08.jpg","p":"回头下望人寰处，不见长安见尘雾","ptsrc":"../images/PT_08.jpg","name":"【哥斯拉不说话】","Wlass":"意境"},
    {"src":"../images/PP_09.jpg","p":"现代质朴语境，传承东方雅韵","ptsrc":"../images/PT_09.jpg","name":"呆小橘","Wlass":"室内设计"},
    {"src":"../images/PP_10.png","p":"雪桜々_人间人间","ptsrc":"../images/PT_10.jpg","name":"小瓶盖1992","Wlass":"萌妹子"},
    {"src":"../images/PP_11.jpg","p":"故事中的男孩","ptsrc":"../images/PT_11.jpg","name":"雨之语Clara","Wlass":"童话"},
    {"src":"../images/PP_12.jpg","p":"奇幻故事","ptsrc":"../images/PT_12.jpg","name":"ゞ街角、相拥","Wlass":"奇幻"},
    {"src":"../images/PP_13.png","p":"爱丽丝","ptsrc":"../images/PT_13.jpg","name":"Jason_yuan","Wlass":"奇幻故事"},
    {"src":"../images/PP_14.png","p":"二次元","ptsrc":"../images/PT_14.jpg","name":"morning巴扎黑","Wlass":"萌妹子"},
    {"src":"../images/PP_15.jpg","p":"为了这样的美景，我们才要出门去旅行","ptsrc":"../images/PT_15.jpg","name":"Siman","Wlass":"此景彼景"},
    {"src":"../images/PP_16.png","p":"网易摄影：绝对领域的诱惑","ptsrc":"../images/PT_16.png","name":"kamaragain❤","Wlass":"摄影"},
    {"src":"../images/PP_17.jpg","p":"旅行是一场美丽的失踪","ptsrc":"../images/PT_17.jpg","name":"关内侯子鲲","Wlass":"画--功力"},
    {"src":"../images/PP_18.jpg","p":"日式风格","ptsrc":"../images/PT_18.jpg","name":"超级厉害小狮子","Wlass":"LOGO"},
    {"src":"../images/PP_19.png","p":"炫酷设计","ptsrc":"../images/PT_19.jpg","name":"威尔西斯弗塔德","Wlass":"广告设计"},
    {"src":"../images/PP_20.png","p":"空中风景","ptsrc":"../images/PT_20.jpg","name":"Summer-Lin","Wlass":"壁纸"}
];

$(function(){

    $(".tab li").mouseenter(function(){
        $(this).css("opacity",".8").siblings().css("opacity","1");
    });
    $(".tab li").mouseleave(function(){
       $(this).css("opacity","1");
    });

    /***
     * 瀑布流
     * @type {*|jQuery|HTMLElement}
     */
    var $wrapper = $('#wrapper');
    $wrapper.imagesLoaded(function(){
        $wrapper.masonry({
            itemSelector: '.fur',
            isAnimated: true
        })
    });
    var str = "";

    for (var i = 0; i < json.length; i++){
        str += '<div class="fur">'
            +'<div class="actions">'
            +'<a href="javascript:;" class="left">采集</a>'
            +'<a href="javascript:;" class="right"></a>'
            +'</div>'
            +'<div class="fur-top">'
            +'<a href="javascript:;">'
            +'<img src="'+ json[i].src +'" alt=""/>'
            +'</a>'
            +'</div>'
            +'<p>'+ json[i].p +'</p>'
            +'<div class="fur-bom clearfix">'
            +'<div class="head">'
            +'<a href="javascript:;">'
            +'<img src="'+ json[i].ptsrc +'" alt=""/>'
            +'</a>'
            +'</div>'
            +'<div class="word">'
            +'<span><a href="javascript:;">'+ json[i].name +'</a>&nbsp;采集到</span>'
            +'<span><a href="javascript:;">'+ json[i].Wlass +'</a></span>'
            +'</div>'
            +'</div>'
            +'</div>';
    }

    $(window).scroll(function (){
        if ($(window).scrollTop() > 145){
            $(".callout_fixed").css({"display":"block"});
        } else {
            $(".callout_fixed").hide();
        }
        if ($(window).scrollTop() > 214) {
            $(".goTo").css({"display":"block"});
        } else {
            $(".goTo").hide();
        }
        if ($(document).height() - $(this).scrollTop() - $(this).height() < 500){

            var $waters = $(str);
            $("#wrapper").append($waters).masonry("appended",$waters,true);
            $("#wrapper").imagesLoaded(function(){
                $("#wrapper").masonry();//重新加载
            });
        };
        /**
         * div事件效果
         */

        $(".fur").hover(function(){
            $(this).find(".actions").show();
        },function(){
            $(this).find(".actions").hide();
        });
        $(".fur-top").hover(function(){
            $(this).css("opacity",".8");
        },function(){
            $(this).css("opacity","1");
        });
        $(".left").hover(function(){
            $(this).css({"backgroundColor":"#ED5157"});
            $(".fur-top").css({"opacity":"1"});
        },function(){
            $(this).css({"backgroundColor":"#DF3B42"});
            $(this).closest(".fur").find(".fur-top").css({"opacity":"0.8"});;
        });

        $(".right").click(function(){
            $(this).css("background","#E9E9E7 url(../images/action_like.png) no-repeat 10px -50px");
        });

        $(".left").click(function(){
            $(this).closest(".fur").fadeOut(1000,function(){
                $("#wrapper").masonry();
            });
        });
    });


    for (var j = 0; j < 3; j++) {
        $("#wrapper").html(str);
    }
    $("#wrapper").imagesLoaded(function () {
        $("#wrapper").masonry();
    });
    //
    /**
     *
     * 登陆框图标事件 ------>没用伪类，练练jQuery=-=~
     */
    var arr = ["../images/login_icons_weibo.png","../images/login_icons_QQ.png","../images/login_icons_weixin.png","../images/login_icons_douban.png","../images/login_icons_renren.png"];
    var arrS = ["../images/login_icons_weiboS.png","../images/login_icons_QQS.png","../images/login_icons_weixinS.png","../images/login_icons_doubanS.png","../images/login_icons_renrenS.png"];
    $(".button a:eq(0) img, .button_small a:eq(0) img").hover(function(){
        $(this).attr("src",arrS[0]);
    },function(){
        $(this).attr("src",arr[0]);
    });

    $(".button a:eq(1) img,.button_small a:eq(1) img").hover(function(){
        $(this).attr("src",arrS[1]);
    },function(){
        $(this).attr("src",arr[1]);
    });

    $(".button a:eq(2) img,.button_small a:eq(2) img").hover(function(){
        $(this).attr("src",arrS[2]);
    },function(){
        $(this).attr("src",arr[2]);
    });

    $(".button a:eq(3) img,.button_small a:eq(3) img").hover(function(){
        $(this).attr("src",arrS[3]);
    },function(){
        $(this).attr("src",arr[3]);
    });

    $(".button_small a:eq(4) img").hover(function(){
        $(this).attr("src",arrS[4]);
    },function(){
        $(this).attr("src",arr[4]);
    });

});


