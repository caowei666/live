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
$(".fada-con").on("mouseenter",".center .middle",function(){
    $(".fang,.bigImg").css("display","block")
})
$(".fada-con").on("mouseleave",".center .middle",function(){
    $(".fang,.bigImg").css("display","none")
})
$(".fada-con").on("mousemove",".center .middle",function(event){
    var offsetX = event.offsetX;
    var offsetY = event.offsetY;
    var nleft = offsetX - 250/2;
    var ntop= offsetY - 250/2;
    nleft = nleft < 0 ? 0 : nleft;
    ntop = ntop < 0 ? 0 : ntop;
    nleft = nleft > 250 ? 250 : nleft;
    ntop = ntop > 250 ? 250 :ntop;
    $(".fang").css({
        left:nleft,
        top:ntop
    })
    $(".bigImg img").css({
        left: -2*nleft,
        top: -2*ntop
    })

})

// 页面传值
function Data(){}
$.extend(Data.prototype,{
    init:function(){
        this.wrap = $(".fada-con");
        this.page = cookieFZ("goodsId").split(",")[1];
        // console.log(cookieFZ("goodsId"))
        console.log(this.page)
        this.loadJson()
        .then(function(res){
            this.json = res.data;
            this.renderPage()
        })
    },
    loadJson:function(){
        var opt = {
            url:"https://www.apiopen.top/satinGodApi?type=1&page=" + this.page,
            type:"GET",
            context:this
        }
        return $.ajax(opt);
    },
    renderPage:function(){
        var id = cookieFZ("goodsId").split(",")[0];
        // var html = "";
        // console.log(this.json,id)
        for(var i = 0;i < this.json.length;i++){
            if(this.json[i].soureid == id){
                console.log(this.json)
                $(".fada-con .top i").html(this.json[i].text)
                $(".fada-con .center .left .imgBox a:nth-child(1) img").attr("src",this.json[i].thumbnail)
                $(".fada-con .center .left .imgBox a:nth-child(2) img").attr("src",this.json[i].header)
                $(".fada-con .center .middle img:nth-of-type(1)").attr("src",this.json[i].thumbnail)
                $(".fada-con .center .middle img:nth-of-type(2)").attr("src",this.json[i].header)
                $(".fada-con .center .bigImg img:nth-of-type(1)").attr("src",this.json[i].thumbnail)
                $(".fada-con .center .bigImg img:nth-of-type(2)").attr("src",this.json[i].header)
                $(".fada-con .center .right>h2").html(this.json[i].text)
                $(".addC").attr("id",this.json[i].soureid)
                $(".addC").on("click",this.addcar.bind(this));
            }
        }
    },
    addcar:function(event){
        var cookie;
        if(cookie = cookieFZ("shopCar")){
            var cookieArray = JSON.parse(cookie);
        }
    }
})
var data = new Data()
data.init();

// 封装的cookie函数
function cookieFZ(name,value,options){
    // 通过参数的个数进行判断; 严谨验证参数类型;
    // --- 获取cookie -----
    if(arguments.length == 1 && typeof name == "string"){
        var cookieArray = document.cookie.split("; ");
        for(var i = 0 ; i < cookieArray.length ; i ++){
            if(cookieArray[i].split("=")[0] === name){
                return cookieArray[i].split("=")[1];
            }
        }
        return "";
    }
    // --- 设置cookie -----
    var cookieStr = name+"="+value;
    if(options == undefined || typeof options != "object"){
        return document.cookie = cookieStr;
    }
    if(typeof options.path == "string"){
        cookieStr += ";path="+options.path;
    }
    if(typeof options.expires == "number" || typeof options.expires == "string"){
        var d = new Date();
        d.setDate(d.getDate() + options.expires);
        cookieStr += ";expires=" + d;
    }
    return document.cookie = cookieStr;
}
function removeCookie(name,path){
    cookieFZ(name,"",{
        expires:-1,
        // 做一个参数判断 , 不让path 为undefined;
        path: path ? path : ""
    })
}