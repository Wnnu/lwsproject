$(".daohangzuo li div.nf-sel").css("display","block");   


// 导航栏分享
$(".fx-tubiao1").mouseover(function(){
    $(".fx-tubiao1").css("height","32px")
});
$(".fx-tubiao2").mouseover(function(){
    $(".fx-tubiao2").css("height","32px")
});
$(".fx-tubiao1").mouseout(function(){
    $(".fx-tubiao1").css("height","0px")
});
$(".fx-tubiao2").mouseout(function(){
    $(".fx-tubiao2").css("height","0px")
});
$(".fx-tubiao1 li span").mouseover(function(){
    $(".fx-tubiao1").css("height","32px")
});
$(".fx-tubiao2 li span").mouseover(function(){
    $(".fx-tubiao2").css("height","32px")
});
$(".daohangyou>ul>li").eq(0).mouseover(function(){
     $(".fx-tubiao1").css("height","32px")
});
$(".daohangyou>ul>li").eq(0).mouseout(function(){
     $(".fx-tubiao1").css("height","0px")
});
$(".daohangyou>ul>li").eq(1).mouseover(function(){
     $(".fx-tubiao2").css("height","32px")
});
$(".daohangyou>ul>li").eq(1).mouseout(function(){
     $(".fx-tubiao2").css("height","0px")
}); 
