// 下面两图移入移出效果
    //上一步
    $(".zuotu a>img").mouseover(function(){
        $(".zuotu a>img").attr("src","images/button/btn_prev_on.png");
    })

    $(".zuotu a>img").mouseleave(function(){
        $(".zuotu a>img").attr("src","images/button/btn_prev_off.png");
    })

    //预览生成
    $(".youtu a>img").mouseover(function(){
        $(".youtu a>img").attr("src","images/button/btn_preview_on.png");
    })

    $(".youtu a>img").mouseleave(function(){
        $(".youtu a>img").attr("src","images/button/btn_preview_off.png");
    })




    // 输入框部分
    var span_01 = document.querySelector(".z-span1")
    var span_02 = document.querySelector(".z-span2")
    var input_01 = document.querySelector(".z-input1")
    var input_02 = document.querySelector(".z-input2")
    
    input_01.onkeyup = function() {
      var text = $(".z-input1").val();  
      var counter = text.length; 
        if(counter>30){
          alert("玩酷宣言请少于30个字，请重新输入！");
          span_01.innerText = input_01.value
        }
        else{
          span_01.innerText = input_01.value
        } 

    }
    
    input_02.onkeyup = function() {
      var text1 = $(".z-input2").val();  
      var counter1 = text1.length; 
        if(counter1>4){
          alert("昵称请少于5个字，请重新输入！")
        }
        else{
          span_02.innerText = input_02.value
        } 

    }