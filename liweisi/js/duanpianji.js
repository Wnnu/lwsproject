// 视频播放
$(".wk-ul-li").click(function () {
	$(".v").css("display","block");
	$("#video1").get(0).play();
})
// 关闭
$(".close").click(function(){
	$(".v").css("display","none");
	$("#video1").get(0).pause();
	$("#video1").get(0).currentTime=0;
})
// 更换图片
$(".wk-z-i").mouseover(function(){
	$(this).attr("src","images/button/btn_create_on.png")
})
$(".wk-z-i").mouseleave(function(){
	$(this).attr("src","images/button/btn_create_off.png")
})

