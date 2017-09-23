// 下面两图移入移出效果
    //上一步
    $(".shangbu a>img").mouseover(function(){
        $(".shangbu a>img").attr("src","images/btn_prev_on.png");
    })

    $(".shangbu a>img").mouseleave(function(){
        $(".shangbu a>img").attr("src","images/btn_prev_off.png");
    })

    //预览生成
    $(".tijiao>img").mouseover(function(){
        $(".tijiao>img").attr("src","images/tijiao_on.png");
    })

    $(".tijiao>img").mouseleave(function(){
        $(".tijiao>img").attr("src","images/tijiao_off.png");
    })
    // $(".let1").click(function () {
    //     // console.log($("input[type='checkbox']").prop("checked"));
    //         var ipt=document.querySelector(".ipt")
    //         var reg=/^1[3|4|5|8][0-9]\d{8,8}$/
    //        if (reg.test(ipt.value)) {
    //         $(".yz").css("display","none");
    //         $(".erwei").css("display","block");
    //         $(".ft").css("display","block");
    //         $(".xialiang1").css("display","none");
    //     }else{
    //         alert("请输入正确的手机号");
    //     }   
    // })
 $(".cha").click(function () {
        $(".erwei").css("display","none")
    })
 $(".let1").click(function() {
     if($("input[type='checkbox']").prop("checked")){
            $(".yz").css("display","none");
            $(".erwei").css("display","block");
            $(".ft").css("display","block");
            $(".xialiang1").css("display","none");
     }
     else{
            var ipt=document.querySelector(".ipt")
            var reg=/^1[3|4|5|7|8][0-9]\d{8,8}$/
           if (reg.test(ipt.value)) {
            $(".yz").css("display","none");
            $(".erwei").css("display","block");
            $(".ft").css("display","block");
            $(".xialiang1").css("display","none");
        }else{
            alert("请输入正确的手机号");
        }   
     }
 })
 $(".let2").click(function () {
     $(".yz").css("display","none");
 })
 $(".tijiao").click(function () {
      $(".yz").css("display","block");
 })