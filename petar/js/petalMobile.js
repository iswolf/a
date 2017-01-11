/**
 * Created by 丁云云 on 2016/10/26.
 */
$(function () {
    // 点击安卓下载，弹出显示二维码
    $(".drop_down").click(function () {
        var display = $(this).next("div").css("display");
        if(display === "none"){
            $(this).css("backgroundPosition","-770px -80px");
            $(this).next("div").show();
        }else{
            $(this).css("backgroundPosition","-850px -80px");
            $(this).next("div").hide();
        }
    })
    // 点击iPad下载，弹出显示二维码
    $(".ipad_download_btn").click(function () {
        var display = $(this).next("div").css("display");
        if(display === "none"){
            $(this).css("backgroundPosition","-770px -80px");
            $(this).next("div").show();
        }else{
            $(this).css("backgroundPosition","-850px -80px");
            $(this).next("div").hide();
        }
    })


    // 选择下载版本，改变背景颜色和图片，改变大图
    $("#choice>li").mouseenter(function () {
        var width = parseInt($(".w_app").css("width"));
        $(this).addClass("current").siblings("li").removeClass("current");
        var index = $(this).index();
        $("#slider").animate({
            "left":-index*width
        })
        // console.log(index * width);
    })


    // jQuery实现底部鼠标经过改变字体颜色
    $(".column a:not(.title)").mouseenter(function () {
        $(this).css("color", "#ededed");
    })
    $(".column a:not(.title)").mouseleave(function () {
        $(this).css("color", "#bbb");
    })


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
})