// 点击弹出城市选项
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
// 点击换图片
$.each($(".fada-con .center .imgBox a"),function(index,item){
    $(item).on("mouseenter",index,function(event){
        $($(".fada-con .center .middle img")[index]).addClass("active")
        .siblings().removeClass("active")
        $(this).addClass("active")
        .siblings().removeClass("active")
        $($(".fada-con .center .bigImg img")[index]).addClass("active")
        .siblings().removeClass("active")
    })
})
// 点击内容增加1
$(".xuan dt a:nth-of-type(1)").click(function(){
    $(".xuan dt input").attr("value",Number($(".xuan dt input").attr("value"))+1)
})
// 点击减一
$(".xuan dt a:nth-of-type(2)").click(function(){
    if(Number($(".xuan dt input").attr("value")) > 1){
        $(".xuan dt input").attr("value",Number($(".xuan dt input").attr("value"))-1)
    }
})
// 产地 规格 重量选择
$(".xuan p span").click(function(){
    $(this).addClass("active").siblings().removeClass("active")
})
// 手机购买划出图片
$(".buy").mouseenter(function(){
    $(".none").fadeIn(0);
})
$(".buy").mouseleave(function(){
    $(".none").fadeOut(0);
})
// 放大镜特效
$(".fada-con .center .middle").mouseenter(function(){
    $(".fang,.bigImg").css("display","block")
})
$(".fada-con .center .middle").mouseleave(function(){
    $(".fang,.bigImg").css("display","none")
})
$(".fada-con .center .middle").mousemove(function(event){
    var offsetX = event.offsetX;
    var offsetY = event.offsetY;
    var nleft = offsetX - 90;
    var ntop= offsetY - 90;
    nleft = nleft < 0 ? 0 : nleft;
    ntop = ntop < 0 ? 0 : ntop;
    nleft = nleft > 325 ? 325 : nleft;
    ntop = ntop > 325 ? 325 :ntop;
    $(".fang").css({
        left:nleft,
        top:ntop
    })
    var bi =$(this)[0].offsetWidth / 325;
    $(".bigImg img").css({
        left:-bi * nleft,
        top:-bi * ntop
    })

})