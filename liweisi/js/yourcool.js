// 活动细则弹出部分
    $("#xianshi").click(function(){
        $(".z-activeRules").css("display","block")
    })
    //活动细则关闭部分
    $("#xhao").click(function(){
        $(".z-activeRules").css("display","none")
    })


    //点击视频播放部分
    $(".zbofang").click(function(){
        $(".z-video").css("display","block");
        $("#video1").get(0).play();
    })
    //视频消失部分
    $(".close").click(function(){
        $(".z-video").css("display","none");
        $("#video1").get(0).pause();
        $("#video1").get(0).currentTime=0;

    })

    //下方三图的鼠标移入移出效果
    //立即参加
    $(".attend img").mouseover(function(){
        $(".attend img").attr("src","images/button/btn_join_on.png");
    })

    $(".attend img").mouseleave(function(){
        $(".attend img").attr("src","images/button/btn_join_off.png");
    })

    //玩酷短片集
    $("#xia1>img").mouseover(function(){
        $("#xia1>img").attr("src","images/button/btn_gallery_on.png");
    })

    $("#xia1>img").mouseleave(function(){
        $("#xia1>img").attr("src","images/button/btn_gallery_off.png");
    })

    //获奖作品
    $("#xia2>img").mouseover(function(){
        $("#xia2>img").attr("src","images/button/btn_winners_on.png");
    })

    $("#xia2>img").mouseleave(function(){
        $("#xia2>img").attr("src","images/button/btn_winners_off.png");
    })



    // 判断是否点击过input
    $(document).ready(function () {
    $(".z-attend-c").click(function () {
    if ($("input[type='checkbox']").prop('checked')) {
             $(".z-attend-c").parent().attr("href","tupianshangchuan.html");  
    } else {
            $(".z-attend-c").attr("href","javascript:void(0)");
             alert("请确定我已阅读和接受活动条款和条件");
             return;
    }
  });
});
// 视频弹出鼠标滚轮失效
$(".z-video").mouseover(function(){
    $(document).bind('mousewheel', function(event, delta) { return false; });
});
$(".z-video").mouseout(function(){
    $(document).unbind();
});