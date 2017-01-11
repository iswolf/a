/**
 * Created by John on 2016/10/22.
 */

$(document).ready(function () {
    /**
     * 首页导航fixed效果
     */
    $(window).scroll(function () {
        if ($(window).scrollTop() > 214) {
            $("#header").removeClass().addClass("header-fixed");
            $(".goTo").css({"display":"block"});
        } else {
            $("#header").removeClass().addClass("header");
            $(".goTo").hide();
        }
    });
    /**
     * 随机banner背景
     *
     */
    var random = parseInt(Math.random() * 4 - 1);
    var arr = ['banner-bg01.jpg', 'banner-bg02.jpg', 'banner-bg03.jpg'];
    $("#h-banner").css({"background": "url(images/" + arr[random] + ") no-repeat center 0"}).fadeTo(1000,1);

    assginPuBuliu();

});
/**
 * 图片展示（问题：不规则的内容改如何生成？）
 */
function assginPuBuliu() {
    var container = document.getElementById("container");
    var row = container.children[0];
    var btn = container.children[1];
    var data = '<div class="show-box">'
        + '<a href="javascript:void(0);" class="avt">'
        + '<img src="images/m-show-pic01.jpg" alt="">'
        + '</a>'
        + '<a href="" class="avt-bg"></a>'
        + '</div>'
        + '<div class="show-box info">'
        + '<div class="small al">'
        + '<s></s>'
        + '<h2><a href="#">歪果仁~ 这样玩</a></h2>'
        + '<p>22 采集249 粉丝</p>'
        + '<i></i>'
        + '</div>'
        + '<div class="small-r ar">'
        + '<s></s>'
        + '<h2><a href="#">歪果仁~ 这样玩</a></h2>'
        + '<p>22 采集249 粉丝</p>'
        + '<span>来自&nbsp;<a href="#" class="a-color">初君的岛本</a></span>'
        + '<i></i>'
        + '</div>'
        + '</div>'
        + '<div class="show-box">'
        + '<a href="javascript:void(0);" class="pic">'
        + '<img src="images/m-show-pic03.jpg" alt="">'
        + '</a>'
        + '</div>'
        + '<div class="show-box">'
        + '<a href="javascript:void(0);" class="avt">'
        + '<img src="images/m-show-pic04.jpg" alt="">'
        + '</a>'
        + '<a href="" class="avt-bg"></a>'
        + '<h2 class="user ac"><a href="#">Sunkim·KK</a></h2>'
        + '<p class="fans ac">4373 采集496 粉丝</p>'
        + '</div>'
        + '<div class="show-box">'
        + '<a href="javascript:void(0);" class="pic">'
        + '<img src="images/m-show-pic05.jpg" alt="">'
        + '</a>'
        + '</div>'
        + '<div class="show-box">'
        + '<a href="javascript:void(0);" class="avt">'
        + '<img src="images/m-show-pic06.jpg" alt="">'
        + '</a>'
        + '<a href="" class="avt-bg"></a>'
        + '</div>'
        + '<div class="show-box info">'
        + '<div class="small al">'
        + '<s></s>'
        + '<h2><a href="#">歪果仁~ 这样玩</a></h2>'
        + '<p>22 采集249 粉丝</p>'
        + '<i></i>'
        + '</div>'
        + '<div class="small-r ar">'
        + '<s></s>'
        + '<h2><a href="#">歪果仁~ 这样玩</a></h2>'
        + '<p>22 采集249 粉丝</p>'
        + '<span>来自&nbsp;<a href="#" class="a-color">初君的岛本</a></span>'
        + '<i></i>'
        + '</div>'
        + '</div>'
        + '<div class="show-box">'
        + '<a href="javascript:void(0);" class="pic">'
        + '<img src="images/m-show-pic08.jpg" alt="">'
        + '</a>'
        + '</div>'
        + '<div class="show-box">'
        + '<a href="javascript:void(0);" class="avt">'
        + '<img src="images/m-show-pic09.jpg" alt="">'
        + '</a>'
        + '<a href="" class="avt-bg"></a>'
        + '</div>'
        + '<div class="show-box info">'
        + '<div class="small al">'
        + '<s></s>'
        + '<h2><a href="#">歪果仁~ 这样玩</a></h2>'
        + '<p>22 采集249 粉丝</p>'
        + '<i></i>'
        + '</div>'
        + '<div class="small-r ar">'
        + '<s></s>'
        + '<h2><a href="#">歪果仁~ 这样玩</a></h2>'
        + '<p>22 采集249 粉丝</p>'
        + '<span>来自&nbsp;<a href="#" class="a-color">初君的岛本</a></span>'
        + '<i></i>'
        + '</div>'
        + '</div>'
        + '<div class="show-box">'
        + '<a href="javascript:void(0);" class="pic">'
        + '<img src="images/m-show-pic12.jpg" alt="">'
        + '</a>'
        + '</div>'
        + '<div class="show-box">'
        + '<a href="javascript:void(0);" class="avt">'
        + '<img src="images/m-show-pic11.jpg" alt="">'
        + '</a>'
        + '<a href="" class="avt-bg"></a>'
        + '<h2 class="user ac"><a href="#">Sunkim·KK</a></h2>'
        + '<p class="fans ac">4373 采集496 粉丝</p>'
        + '</div>'
        + '<div class="show-box">'
        + '<a href="javascript:void(0);" class="pic">'
        + '<img src="images/m-show-pic16.jpg" alt="">'
        + '</a>'
        + '</div>'
        + '<div class="show-box">'
        + '<a href="javascript:void(0);" class="avt">'
        + '<img src="images/m-show-pic19.jpg" alt="">'
        + '</a>'
        + '<a href="" class="avt-bg"></a>'
        + '</div>'
        + '<div class="show-box info">'
        + '<div class="small al">'
        + '<s></s>'
        + '<h2><a href="#">歪果仁~ 这样玩</a></h2>'
        + '<p>22 采集249 粉丝</p>'
        + '<i></i>'
        + '</div>'
        + '<div class="small-r ar">'
        + '<s></s>'
        + '<h2><a href="#">歪果仁~ 这样玩</a></h2>'
        + '<p>22 采集249 粉丝</p>'
        + '<span>来自&nbsp;<a href="#" class="a-color">初君的岛本</a></span>'
        + '<i></i>'
        + '</div>'
        + '</div>'
        + '<div class="show-box">'
        + '<a href="javascript:void(0);" class="pic">'
        + '<img src="images/m-show-pic20.jpg" alt="">'
        + '</a>'
        + '</div>';
    row.innerHTML += data;
    btn.onclick = function () {
        row.innerHTML += data;
    }

}

