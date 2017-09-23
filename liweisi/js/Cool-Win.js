// 鼠标移入更换图片
$(".hj-a-l-a1").mouseover(function(){
	$(".hj-a-l-img1").attr("src","images/button/w2.png")
})
$(".hj-a-l-a1").mouseleave(function(){
	$(".hj-a-l-img1").attr("src","images/button/w1.png")
})
// 鼠标移入更换图片
$(".hj-a-l-a2").mouseover(function(){
	$(".hj-a-l-img2").attr("src","images/button/btn_createvideo_on.png")
})
$(".hj-a-l-a2").mouseleave(function(){
	$(".hj-a-l-img2").attr("src","images/button/btn_createvideo_off.png")
})
// 播放
$(".hj-b-ul>li").click(function () {
	$(".v").css("display","block");
	$("#video1").get(0).play();
})
// 关闭
$(".close").click(function(){
	$(".v").css("display","none");
	$("#video1").get(0).pause();
	$("#video1").get(0).currentTime=0;

})

// 查看更多
//换图片
$(".hj-b-btn-i").mouseover(function(){
	$(this).attr("src","images/button/btn_chakan_on.png")
})
$(".hj-b-btn-i").mouseleave(function(){
	$(this).attr("src","images/button/winner_more1.png")
})
// 插入
var year=2014;
var month=3;
$(".hj-b-btn").click(function(){
	month--;
	if (month<1) {
		month=12;
		year--;
	}
	$(".hj-b-1").eq(1).clone(true).appendTo(".hj-b");
	$(".hj-b-1:last-child").find(".hj-b-p1").text(year+"年"+month+"月获奖名单");
	var j= $(window).scrollTop();
    $('body,html').animate({'scrollTop':j+179},300)

})







