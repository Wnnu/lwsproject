// 下面两图移入移出效果
    //上一步
    $(".shangbu>img").mouseover(function(){
        $(".shangbu>img").attr("src","images/button/btn_prev_on.png");
    })

    $(".shangbu>img").mouseleave(function(){
        $(".shangbu>img").attr("src","images/button/btn_prev_off.png");
    })

    //预览生成
    $(".tijiao>img").mouseover(function(){
        $(".tijiao>img").attr("src","images/button/tijiao_on.png");
    })

    $(".tijiao>img").mouseleave(function(){
        $(".tijiao>img").attr("src","images/button/tijiao_off.png");
    })
