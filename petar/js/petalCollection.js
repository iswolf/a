/**
 * Created by Jason on 2099/10/25.
 */
/*点击类名是title的元素,让与title同级的类名为inner的元素隐藏。。
 页面刚开始，第一个unit下的inner显示，以后每点击一个unit下的title，
 让点击的这个下面的inner显示，其他unit下面的inner都隐藏*/
$(function () {
    $('.title').on('click', function () {
        $(this).find('div').toggleClass('arrowUp');
        if ($(this).next('.inner').is(":hidden")) {
            $(this).next().show(500);
            $(this).parent().siblings().find('.inner').hide();
            $(this).parent().siblings().find('.title').find('div').removeClass('arrowUp');
        } else {
            $(this).next().hide(500);
        }
    })

//点击播放花瓣视频
    var mp4 = document.getElementById("mp4");
    var cover = document.getElementById("cover");
    cover.onclick = function () {
        this.style.display = "none";
        mp4.play();
    }
//点击ie栏,自动播放视频
    var ie = document.getElementById("ie");
    var help = document.getElementById("help");
    ie.onclick = function () {
        help.play();
    }
//返回顶部
    $(window).scroll(function () {
        console.log($(window).scrollTop());
        if($(window).scrollTop()>200){
            $(".goTo").css("display","block");

        }else{
            $(".goTo").hide();
        }
    })
    $(".goTo").click(function () {
        $('html,body').animate({scrollTop: '0px'}, 500);
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