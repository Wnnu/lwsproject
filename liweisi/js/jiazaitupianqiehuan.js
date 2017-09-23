// 下面两图移入移出效果
    //上一步
    $(".shangbu a>img").mouseover(function(){
        $(".shangbu a>img").attr("src","images/button/btn_prev_on.png");
    })

    $(".shangbu a>img").mouseleave(function(){
        $(".shangbu a>img").attr("src","images/button/btn_prev_off.png");
    })

    //预览生成
    $(".tijiao a>img").mouseover(function(){
        $(".tijiao a>img").attr("src","images/button/tijiao_on.png");
    })

    $(".tijiao a>img").mouseleave(function(){
        $(".tijiao a>img").attr("src","images/button/tijiao_off.png");
    })


    // tupian加载部分
    
    var index=0;
    var t;
    
     window.onload=function(){
        $(".jiazai>img").css("display","block")
      timer=setInterval(function(){
        if (index*5!=105) {
          var a=parseInt(index*5)
          $(".jiazai>img").attr("src","images/loading/"+a+".png")
        }else{
          clearInterval(timer);
          $(".jiazai>img").css("display","none")
          $(".v2>span").css("display","none")
          $(".v2").css("display","none")
          $(".qf-bigphoto2").css("display","block")
          
        }
        index++
      },100)

    }


    // 跳转到视频播放
     var video = document.querySelector('.qf-bigphoto2>video')
    $(".qf-start").click(function(){
        video.play()
        $(this).css("display","none")
    })

