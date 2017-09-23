 
    //下方三图的鼠标移入移出效果
    //上一步
    $(".zuobox img").mouseover(function(){
        $(".zuobox img").attr("src","images/button/btn_prev_on.png");
    })

    $(".zuobox img").mouseleave(function(){
        $(".zuobox img").attr("src","images/button/btn_prev_off.png");
    })

    //批量上传
    $(".set").mouseover(function(){
        $(".set").css("background","url(images/button/btn_upload_on.png)");
    })

    $(".set").mouseout(function(){
        $(".set").css("background","url(images/button/btn_upload_off.png)");
    })

    //下一步
    $(".youbox img").mouseover(function(){
        $(".youbox img").attr("src","images/button/btn_next_on.png");
    })

    $(".youbox img").mouseleave(function(){
        $(".youbox img").attr("src","images/button/btn_next_off.png");
    })

            // 单张上传照片  删除照片
                $(".fileinput").change(function () {
                var file = this.files[0];
                readFile(file,$(this).parent().siblings(".on"));
                $(".on").off('mouseover');
                $("body").mousemove(function(){
                $(".on").on("mouseover",xianshi);
            })
 
            });

               $(".on").mouseover(function () {
                       $(this).children(".before").show();
                       $(this).children(".after").show(); 
                      
                });
               $(".on").mouseleave(function () {
                       $(this).children(".before").hide();
                       $(this).children(".after").hide(); 
                       
                });




             

               $(".after").click(function () {
                  $(this).next().remove(); 
                  $(".before").hide();
                  $(".after").hide();
                  $(this).parent().hide();
                  $(this).parent().siblings(".mei").show();//加号
                 
                  $(this).parent().siblings(".mei").children().val("");
                    // 解决批量上传不能重复问题
            if($('.on img').length==0) {
                if ($('.set').children(piliang).length != 0) {
                    piliang.value = ''
                    var newpiliang = piliang.cloneNode();
                    console.log(newpiliang)
                    piliang.before(newpiliang);
                    piliang.remove()
                    console.log(789)
                    newpiliang.onchange = function () {
                        // $('#piliang').on('change',function () {
                        for (var i = 0; i < this.files.length; i++) {
                            var file = this.files[i];
                            on.eq(i).children(".after").next().remove();
                            readFile(file, on.eq(i));
                        }
                        if ($('.set').children(newpiliang).length != 0) {
                            newpiliang.value = ''
                            var piliang = piliang.cloneNode();
                            console.log(piliang)
                            newpiliang.before(piliang);
                            newpiliang.remove()
                            console.log(666)
                            piliang.onchange = function () {
                                // $('#piliang').on('change',function () {
                                for (var i = 0; i < this.files.length; i++) {
                                    var file = this.files[i];
                                    on.eq(i).children(".after").next().remove();
                                    readFile(file, on.eq(i));
                                

                                }
                            }
                        }
                    }
                }
            }
               });
        // var fileinput = document.querySelector('#fileinput');
            var on =document.querySelector(".on");
        //    需要把阅读的文件传进来file element是把读取到的内容放入的容器
            function readFile(file,element) {
        //        新建阅读器
                var reader = new FileReader();
        //        根据文件类型选择阅读方式
                switch (file.type){
                    case 'image/jpg':
                    case 'image/png':
                    case 'image/jpeg':
                    case 'image/gif':
                        reader.readAsDataURL(file);
                        break;
                }
        //        当文件阅读结束后执行的方法
                reader.addEventListener('load',function () {
        //            如果说让读取的文件显示的话 还是需要通过文件的类型创建不同的标签
                    switch (file.type){
                        case 'image/jpg':
                        case 'image/png':
                        case 'image/jpeg':
                        case 'image/gif':

                            var img = document.createElement('img');
                            img.src = reader.result;
                            element.append(img);
                            element.siblings(".mei").hide();
                            element.show();
                            break;
                    }
                });
            }

            //新加入

            // $(".fileinput").change(function(){
            //     var file=this.files[0];
            //     readFile(file,$(this).parent().siblings(".on"));
            //     $(".on").off('mouseover');
            //     $("body").mousemove(function(){
            //     $(".on").on("mouseover",xianshi);

            //     })
            // });
            function xianshi(){
                $(this).children(".before").show();
                $(this).children(".after").show();
            }

            // $(".on").mouseover(function(){
            //     $(this).children(".before").show();
            //     $(this).children(".after").show();
            // });

            // $(".on").mouseleave(function(){
            //     $(this).children(".before").hide();
            //     $(this).children(".after").hide();
            // });



           










         // 批量上传
            var piliang = document.querySelector('#piliang');
            var on = $('.on');
            piliang.addEventListener('change',function () {
               for (var i = 0;i < this.files.length;i++){
                   var file = this.files[i];
                   on.eq(i).children(".after").next().remove();
                   readFile(file,on.eq(i));
               }
           
            });
        //  
        var on = $(".on");

        $(".youbox img").click(function () {
          for (var i = 0; i < 10; i++) {
            console.log(on[i].childNodes.length);
            if (on[i].childNodes.length==6){
              $(".youbox a").attr("href","wenziduiyingxianshi.html");
           
            }else{
              alert("上传照片不足十张");
              $(".youbox a").attr("href","javascript:void(0)");
              return;
            }

            
          }

        });
setInterval(function(){
    for (var i = 0; i < 10; i++) {
        var onimgw=$(".on img").eq(i).width();
        if (onimgw>164) {
            $(".on img").eq(i).css("width","100%");
        }
    }
},1);

        
