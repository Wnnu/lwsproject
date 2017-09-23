	$(document).ready(function () {
	window.scrollTo(0,0);
})
 z=$(document).height();
console.log(z);
var s1=$("#box1").height();
console.log(s1);
var s2=$("#box2").height();
var s3=$("#box3").height();
var s4=$("#box4").height();
var s5=$("#box5").height();
var i=0;
$(document).ready(function(){
var p=0,t=0;
$(window).scroll(function(e){
p = $(this).scrollTop();
s=$(window).height();
console.log(p);
console.log(s);
setTimeout(function(){t = p;},0);
if(t<=p&&p>s1-s+100&&p<s1){//向下滚
$(window).one("scroll",function () {
			window.scrollTo(0,s1);
			i++;
			console.log(i);
		})

}else{if (t>=p&&p<s1-100&&p>s1-200) {
	$(window).one("scroll",function () {
			window.scrollTo(0,0);
			i--;
		})
}

} 
if(t<=p&&p>s1+s2-s+100&&p<s1+s2){//向下滚
$(window).one("scroll",function () {
			window.scrollTo(0,s1+s2);
			i++;
		})

}else{if (t>=p&&p<s1+s2-100&&p>s1+s2-200) {
	$(window).one("scroll",function () {
			window.scrollTo(0,s1);
			i--;
		})
}

}
if(t<=p&&p>s1+s2+s3-s+100&&p<s1+s2+s3){//向下滚
$(window).one("scroll",function () {
			window.scrollTo(0,s1+s2+s3);
			i++;
		})

}else{if (t>=p&&p<s1+s2+s3-100&&p>s1+s2+s3-200) {
	$(window).one("scroll",function () {
			window.scrollTo(0,s1+s2);
			i--;
		})
}

}
if(t<=p&&p>s1+s2+s3+s4-s+100&&p<s1+s2+s3+s4){//向下滚
$(window).one("scroll",function () {
			window.scrollTo(0,s1+s2+s3+s4);
			i++;
		})

}else{if (t>=p&&p<s1+s2+s3+s4-100&&p>s1+s2+s3+s4-200) {
	$(window).one("scroll",function () {
			window.scrollTo(0,s1+s2+s3);
			i--;
		})
}

}
if(t<=p&&z<=s+p){//向下滚
$(window).one("scroll",function () {
			window.scrollTo(0,0);
			i++;

		})

}else{if (t>=p&&p<s1+s2+s3+s4+s5-100&&p>s1+s2+s3+s4+s5-200) {
	$(window).one("scroll",function () {
			window.scrollTo(0,s1+s2+s3+s4);
			i--;
		})
}
  
} 

});
return i;
});