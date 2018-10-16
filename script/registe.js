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
    if($(this).val() == "")return 0;
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