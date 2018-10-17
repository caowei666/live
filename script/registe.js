// 滑到本来生活弹出二维码
$(".ulli3").hover(
    function(){
        $(".ulli3>div").css({
            display:"block"
        })
    },
    function(){
        $(".ulli3>div").css({
            display:"none"
        })
    }
)
$(".top-con .right li:nth-of-type(4)").hover(
    function(){
        $(".top-con .right li:nth-of-type(4) div").css({
            display:"block"
        })
    },
    function(){
        $(".top-con .right li:nth-of-type(4) div").css({
            display:"none"
        })
    }
)
// 点击出现遮罩
$(".top-con .center a").click(function(){
    $(".zhezhao").css({
        opacity: 0.5,
        height: 2218,
        width: "100%"
    })
    $(".zhezhaoCenter").css("display","block")
})
$(".closeCity").click(function(){
    $(".zhezhao").css({
        opacity: 0,
        height: 0,
        width: 0
    })
    $(".zhezhaoCenter").css("display","none");
})

// 正则验证
$(".shouji,.yanzhengma").focus(function(){
    $(this).attr("placeholder","");
})
$(".shouji").blur(function(){
    var reg = /^1[0-9]{10}$/;
    if($(this).val() == ""){
        $(this).attr("placeholder","请输入手机号")
        return 0;
    }
    if(reg.test($(this).val())){
        $(this).parent().children("s").css("background","url(../images/lo1.png) 0 -102px no-repeat")
        $(this).parent().children("div").css("display","none")
    }else{
        $(this).parent().children("s").css("background","url(../images/lo1.png) 0 -137px no-repeat")
        $(this).parent().children("div").css("display","block")
    }
})
$(".yanzhengma").blur(function(){
    var reg = /[A-Za-z0-9]{4}$/;
    if($(this).val() == "")return 0;
    if(reg.test($(this).val())){
        $(this).parents(".yandiv").children("div").css("display","none")
    }else{
        $(this).parents(".yandiv").children("div").css("display","block")
    }
})
$(".mima").blur(function(){
    var reg = /(?!^[0-9]+$)(?!^[a-zA-Z]+$)^.{8,16}/
    if($(this).val() == "")return 0;
    if(reg.test($(this).val())){
        $(this).parent().children("s").css("background","url(../images/lo1.png) 0 -102px no-repeat")
        $(this).parent().children("div").css("display","none")
    }else{
        $(this).parent().children("s").css("background","url(../images/lo1.png) 0 -137px no-repeat")
        $(this).parent().children("div").css("display","block")
    }
})
$(".mimaagain").blur(function(){
    if($(this).val() == "")return 0;
    if($(this).val() == $(".mima").val()){
        $(this).parent().children("s").css("background","url(../images/lo1.png) 0 -102px no-repeat")
        $(this).parent().children("div").css("display","none")
    }else{
        $(this).parent().children("s").css("background","url(../images/lo1.png) 0 -137px no-repeat")
        $(this).parent().children("div").css("display","block")
    }
})
// 拖动本方框移动
$(".canmove").mousedown(function(event){
    var offsetX = event.offsetX;
    $(this).parent("div").on("mousemove",function(event){
        var offsetX2 = event.offsetX;
        console.log(offsetX2)
        $(this).children("a").css({
            left:offsetX2
        })
    })
})
$(".canmove").mouseup(function(){
    $(this).parent("div").off("mousemove")
})
// 点击注册按钮
$(".regbtn").click(function(){
    if($(".div1").css("display") == "block" || $(".div2").css("display") == "block" || $(".div3").css("display") == "block"){
        console.log("注册失败")
    }else{
        $.ajax({
            url:"http://localhost:8888/proxy/localhost/php/register.php",
            type:"GET",
            data:`username=${$(".shouji").val()}&password=${$(".mimaagain").val()}`,
        })
        .done(function(res){
            console.log(res);
            $(".regbtn").css("background","#8ab700")
            alert(res)
        })
        .fail(function(){
            console.log("error")
        })
    }
})
// $(".registeBox .left ul dl input:not('.mimaagain')").change(function(){
//     if($(".shouji,.mima,.mimaagain").val() != ""){
//         $(".regbtn").css("background","#8ab700")
//     }  
// })



