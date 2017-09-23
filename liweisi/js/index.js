var j=1;
    $(function(){
    $('#dowebok').fullpage({
        anchors:['section1','section2','section3','section4','section5','section6'],
        onLeave:function(index,nextIndex){
            //滚动之前的页面序号
            if (index==2) {
                $(".s-shipin-1").css("display","none");
                $(".s-shipin-2").css("display","none");
                $("#video101").get(0).pause();
                $("#video101").get(0).currentTime=0;
                $("#video102").get(0).pause();
                $("#video102").get(0).currentTime=0;
            }
            console.log(nextIndex);
            if (nextIndex==1) {
                $(".daohangzuo li .nf-sel").removeClass("nf-sel");
                $(".daohangzuo ul li").eq(0).children("div").addClass("nf-sel");
                $(".daohangzuo li div.nf-sanjiao").css("display","none");   
                $(".daohangzuo li div.nf-sel").css("display","block"); 
                $(".p-jiantou .p-jiantou-down img").css("display","none")
            }
            if (nextIndex==2) {
                $(".daohangzuo li .nf-sel").removeClass("nf-sel");
                $(".daohangzuo ul li").eq(4).children("div").addClass("nf-sel");
                $(".daohangzuo li div.nf-sanjiao").css("display","none");   
                $(".daohangzuo li div.nf-sel").css("display","block"); 
                $(".p-jiantou .p-jiantou-down img").css("display","block");
                $(".p-jiantou .p-jiantou-down img").attr("src","images/xiangxiajiantou.png");
            }
            if (nextIndex==3) {
                $(".daohangzuo li .nf-sel").removeClass("nf-sel");
                // $(".daohangzuo ul li").eq(2).children("div").addClass("nf-sel");
                $(".daohangzuo li div.nf-sanjiao").css("display","none");   
                $(".daohangzuo li div.nf-sel").css("display","block"); 
                $(".p-jiantou .p-jiantou-down img").css("display","block");
                $(".p-jiantou .p-jiantou-down img").attr("src","images/xiangxiajiantou.png");
            }
            if (nextIndex==4) {
                $(".daohangzuo li .nf-sel").removeClass("nf-sel");
                // $(".daohangzuo ul li").eq(2).children("div").addClass("nf-sel");
                $(".daohangzuo li div.nf-sanjiao").css("display","none");   
                $(".daohangzuo li div.nf-sel").css("display","block"); 
                $(".p-jiantou .p-jiantou-down img").css("display","block");
                $(".p-jiantou .p-jiantou-down img").attr("src","images/xiangxiajiantou.png");
            }
             if (nextIndex==5) {
                $(".daohangzuo li .nf-sel").removeClass("nf-sel");
                $(".daohangzuo ul li").eq(12).children("div").addClass("nf-sel");
                $(".daohangzuo li div.nf-sanjiao").css("display","none");   
                $(".daohangzuo li div.nf-sel").css("display","block"); 
                $(".p-jiantou .p-jiantou-down img").css("display","block");
                $(".p-jiantou .p-jiantou-down img").attr("src","images/xiangxiajiantou.png");
            }
             if (nextIndex==6) {
                $(".daohangzuo li .nf-sel").removeClass("nf-sel");
                // $(".daohangzuo ul li").eq(10).children("div").addClass("nf-sel");
                $(".daohangzuo li div.nf-sanjiao").css("display","none");   
                $(".daohangzuo li div.nf-sel").css("display","block"); 
                $(".p-jiantou .p-jiantou-down img").css("display","block");
                $(".p-jiantou .p-jiantou-down img").attr("src","images/xiangshangjiantou.png");
            }
            return j=nextIndex;
        },
        afterRender:function(){
            $.fn.fullpage.moveTo(1);
        },
        scrollingSpeed:(300),
    });
});
    setInterval(function(){
        var h=parseInt($(".fpb-left img").height());
        $(".fpb-xian img").height(h)
    },100);

    // 了解产品
    $(".fpt-logo>a img").mouseover(
        function(){
            $(this).attr("src","images/fpt-logo1.png");
        }
    );
    $(".fpt-logo>a img").mouseout(
        function(){
            $(this).attr("src","images/fpt-logo.png");
        }
    );
    // 点击制作
    $(".fpbc-right-pl img").mouseover(
        function(){
            $(this).attr("src","images/fpbcr_03_1.png");
        }
    );
    $(".fpbc-right-pl img").mouseout(
        function(){
            $(this).attr("src","images/fpbcr_03.png");
        }
    );
     // 预约明星设计单品
    $(".sp-bottom-xia-bm img").mouseover(
        function(){
            $(this).attr("src","images/button/btn_orderdesign_on.png");
        }
    );
    $(".sp-bottom-xia-bm img").mouseout(
        function(){
            $(this).attr("src","images/button/btn_orderdesign_off.png");
        }
    );
 // 换社交图
   $(".sj1").mouseover(function(){
      $(".shejiao1").attr("src","images/xh1.png");
   })
    $(".sj1").mouseleave(function(){
      $(".shejiao1").attr("src","images/h111.png");
   })
   $(".sj2").mouseover(function(){
      $(".shejiao2").attr("src","images/xh2.png");
   })
    $(".sj2").mouseleave(function(){
      $(".shejiao2").attr("src","images/h222.png");
   })
   $(".sj3").mouseover(function(){
      $(".shejiao3").attr("src","images/xh3.png");
   })
    $(".sj3").mouseleave(function(){
      $(".shejiao3").attr("src","images/h333.png");
   })
   $(".sj4").mouseover(function(){
      $(".shejiao4").attr("src","images/xh4.png");
   })
   $(".sj4").mouseleave(function(){
      $(".shejiao4").attr("src","images/h444.png");
   })

// 第二屏社交点击，进入
$(".sln-wz-tufenxiang ul li").click(function(ev){
    ev.stopPropagation();
});
$(".sln-wz-tufenxiang ul li").mouseenter(function(){
    clearInterval(timer22);
});
$(".sln-wz-tufenxiang ul li").mouseleave(function(){
    clearInterval(timer22);
    lunbo();
});
// 第二屏点击播放视频和关闭
    // $(".ss-vedio-close-1").click(function(){
    //     $(".s-shipin-1").css("display","none");
    //     $(".ss-vedio").css("display","none");
    //     $(".ss-vedio video").attr("src","");
    // });
    // // if($(".s-shipin-1").css("display")=="block"){
    // //     $(window).scroll(function(e){
            
    // //     $(".s-shipin-1").css("display","none");
    // //     $(".ss-vedio").css("display","none");
    // //     $(".ss-vedio video").attr("src","");
    // //         })
    // // }
    //  $(".lunbotu1").click(function(){
    //     $(".ss-vedio video").attr("src","MP4/CH_Media01.mp4");
    //     $(".s-shipin-1").css("display","block");
    //     $(".ss-vedio").css("display","block");
        
    // });
    //   $(".ss-vedio-close-2").click(function(){
    //     $(".s-shipin-1").css("display","none");
    //     $(".ss-vedio").css("display","none");
    //     $(".ss-vedio video").attr("src","");
    // });
    //  $(".lunbotu2").click(function(){
    //     $(".ss-vedio video").attr("src","MP4/CH_Media02.mp4.mp4");
    //     $(".s-shipin-2").css("display","block");
    //     $(".ss-vedio").css("display","block");
        
    // });
$(".lunbotu1").click(function(){
        $(".s-shipin-1").css("display","block");
        $(".ss-vedio").css("display","block");
        $("#video101").get(0).play();
        // clearInterval(timer22);
    })
    //视频消失部分
    $(".ss-vedio-close-1").click(function(){
        $(".s-shipin-1").css("display","none");
        $(".ss-vedio").css("display","none");
        $("#video101").get(0).pause();
        $("#video101").get(0).currentTime=0;
        // lunbo();

    })
    $(".lunbotu2").click(function(){
        $(".s-shipin-2").css("display","block");
        $(".ss-vedio").css("display","block");
        $("#video102").get(0).play();
        // clearInterval(timer22);

    })
    //视频消失部分
    $(".ss-vedio-close-2").click(function(){
        $(".s-shipin-2").css("display","none");
        $(".ss-vedio").css("display","none");
        $("#video102").get(0).pause();
        $("#video102").get(0).currentTime=0;
        // lunbo();

    })
// 第二屏轮播
    function lunbo(){

        timer22=setInterval(function(){
        $(".spt-lunbo").animate({
                "margin-left":-100+'%'
            },function () {
                // 大图的轮播
                $(".spt-lunbo").children().eq(0).clone(true).appendTo($(".spt-lunbo"))
                $(".spt-lunbo").children().eq(0).remove();
                $(".spt-lunbo").css('margin-left',0);
                //下面点的轮播
                $(".sln-wz .sln-sel").removeClass("sln-sel")
                   .addClass("sln-nosel")
                   .siblings()
                   .removeClass("sln-nosel")
                   .addClass("sln-sel")
                // .removeClass("sln-sel sln-nosel").siblings().removeClass("sln-sel sln-nosel").addClass("sln-sel").siblings().addClass("sln-nosel");
                              
            })
        },2000);
    }
    lunbo();
        
    //     }
    // 轮播点击
    // $(".sln-wz div").click(function(){
    //     // alert('1');
    //     $(this).removeClass("sln-sel sln-nosel").siblings().removeClass("sln-sel sln-nosel").addClass("sln-sel").siblings().addClass("sln-nosel");
    // });
function panduan1() {
    $number=$(".spt-lunbo").children().eq(0).data("c");
    // console.log($number)
    if($number==1){
        return;
    }
    // 是第一个点点
    $(".sln-wz").children().eq(0)
        .addClass("sln-sel")
        .removeClass("sln-nosel")
        .siblings()
        .addClass("sln-nosel")
        .removeClass("sln-sel");
    $(".spt-lunbo")
        .animate({
            "margin-left":-100+'%'
        },800,function () {
            $(".spt-lunbo").children().eq(0).clone(true).appendTo($(".spt-lunbo"))
            $(".spt-lunbo").children().eq(0).remove();
            $(".spt-lunbo").css('margin-left',0)
        })
}
function  panduan2() {
    $number=$(".spt-lunbo").children().eq(0).data("c");
    // console.log($number)
    if($number==2){
        return
    }
    // 是第二个点点
    $(".sln-wz").children().eq(1)
        .addClass("sln-sel")
        .removeClass("sln-nosel")
        .siblings()
        .addClass("sln-nosel")
        .removeClass("sln-sel");
    $(".spt-lunbo")
        .animate({
            "margin-left":-100+'%'
        },800,function () {
            $(".spt-lunbo").children().eq(0).clone(true).appendTo($(".spt-lunbo"))
            $(".spt-lunbo").children().eq(0).remove();
            $(".spt-lunbo").css('margin-left',0)
        })

}
function panduan3() {
    $number=$(".spt-lunbo").children().eq(0).data("c");
    // console.log($number)
    if($number==1){
        return;
    }
    // 是第一个点点
    $(".sln-wz").children().eq(0)
        .addClass("sln-sel")
        .removeClass("sln-nosel")
        .siblings()
        .addClass("sln-nosel")
        .removeClass("sln-sel");
    $(".spt-lunbo")
        .animate({
            "margin-left":-100+'%'
        },40,function () {
            $(".spt-lunbo").children().eq(0).clone(true).appendTo($(".spt-lunbo"))
            $(".spt-lunbo").children().eq(0).remove();
            $(".spt-lunbo").css('margin-left',0)
        })
}
function  panduan4() {
    $number=$(".spt-lunbo").children().eq(0).data("c");
    // console.log($number)
    if($number==2){
        return
    }
    // 是第二个点点
    $(".sln-wz").children().eq(1)
        .addClass("sln-sel")
        .removeClass("sln-nosel")
        .siblings()
        .addClass("sln-nosel")
        .removeClass("sln-sel");
    $(".spt-lunbo")
        .animate({
            "margin-left":-100+'%'
        },40,function () {
            $(".spt-lunbo").children().eq(0).clone(true).appendTo($(".spt-lunbo"));
           //  var s=document.querySelector(".spt-lunbo");
           // var  f=s.firstElementChild;
           // var g=f.cloneNode(true);
           // s.appendChild(g);
            $(".spt-lunbo").children().eq(0).remove();
            $(".spt-lunbo").css('margin-left',0)
        })

}

// 按钮点击 进入
$(".sln-wz").children().eq(0).click(function(){
    clearInterval(timer22);
    panduan1();
    // clearInterval(timer22);
    // lunbo();
});
$(".sln-wz").children().eq(1).click(function(){
    clearInterval(timer22);
    panduan2();
    // clearInterval(timer22);
    // lunbo();
});
// 我很蒙，天知道咋行的，写着写着就行了
// 轮播点击结束
$(".sln-wz").children().mouseenter(function(){
    clearInterval(timer22);
    clearInterval(timer22);
});
$(".sln-wz").children().mouseleave(function(){
    clearInterval(timer22);
    lunbo();
});

$(".spt-lunbo").mouseover(
    function(){
        clearInterval(timer22);
        clearInterval(timer22);
    });
$(".spt-lunbo").mouseout(
    function(){
        clearInterval(timer22);
        lunbo();
    });

$(".sc-left-tu2>img").eq(0).mouseenter(function () {
       clearInterval(timer22);
        panduan3();
    }).mouseleave(function () {
        // clearInterval(timer22);
        // lunbo();
    })

$(".sc-right-tu2>img").eq(1).mouseenter(function () {
        clearInterval(timer22);
        panduan4();
    }).mouseleave(function () {
        // clearInterval(timer22);
        // lunbo();
    })


$(".sc-left-tu2>img").hover(function(){
    clearInterval(timer22);
},function(){
    clearInterval(timer22);
    lunbo();
})
$(".sc-right-tu2>img").hover(function(){
    clearInterval(timer22);
},function(){
    clearInterval(timer22);
    lunbo();
})








// 首页点击向下滚动按钮点击
$(".p-jiantou .p-jiantou-down img").click(function(){
    // alert(j);
    if (j==1) {
        $.fn.fullpage.moveTo(2);
        return;
    }
    if (j==2) {
        $.fn.fullpage.moveTo(3);
        return;
    }
    if (j==3) {
        $.fn.fullpage.moveTo(4);
        return;
    }
    if (j==4) {
        $.fn.fullpage.moveTo(5);
        return;
    }
    if (j==5) {
        $.fn.fullpage.moveTo(6);
        $(".p-jiantou .p-jiantou-down img").attr("src","images/xiangshangjiantou.png");
        return;
    }
    if (j==6) {
        $.fn.fullpage.moveTo(1);
        $(".p-jiantou .p-jiantou-down img").css("display","none")
        return;
    }
});

// 第三屏换图
$(".t-p-c-s-b-i").mouseover(function(){
    $(".t-p-c-s-b-i").attr("src","images/button/btn_buynow_off.png");
})
$(".t-p-c-s-b-i").mouseleave(function(){
    $(".t-p-c-s-b-i").attr("src","images/button/btn_buynow_on.png");
})
// 第四屏换图
$(".fo-play-top-tu2").mouseover(function(){
    $(".fo-p-t-t2-i").attr("src","images/button/btn_knowmore_off.png");
})
$(".fo-play-top-tu2").mouseleave(function(){
    $(".fo-p-t-t2-i").attr("src","images/button/btn_knowmore_on.png");
})

// 地图滚轮判定
$(".map1").hover(function(){
    $.fn.fullpage.setAllowScrolling(false);
},function(){
    $.fn.fullpage.setAllowScrolling(true);
})


// 视频弹出鼠标滚轮失效
$(".s-shipin-2").mouseover(function(){
    $(document).bind('mousewheel', function(event, delta) { return false; });
});
$(".s-shipin-2").mouseout(function(){
    $(document).unbind();
    $(document).bind('mousewheel', function(event, delta) { return true; });
});
$(".s-shipin-1").mouseover(function(){
    $(document).bind('mousewheel', function(event, delta) { return false; });
});
$(".s-shipin-1").mouseout(function(){
    $(document).unbind();
    $(document).bind('mousewheel', function(event, delta) { return true; });
});
