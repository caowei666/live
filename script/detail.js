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

// 页面传值
function Data(){}
$.extend(Data.prototype,{
    init:function(){
        this.wrap = $(".fada-con");
        console.log(this.wrap)
        this.page = cookieFZ("goodsId").split(",")[1];
        // console.log(cookieFZ("goodsId"))
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
        console.log(this.json)
        var html = "";
        for(var i = 0;i < this.json.length;i++){
            if(this.json[i].soureid == id){
                html +=`
                <div class="top">
                <a href="index.html">首页</a>>
                <a href="index.html">热门推荐</a>>
                <a href="index.html">水产海鲜</a>>
                <a href="index.html">厄瓜多尔白虾</a>>
                <i>${this.json[i].text}</i>
            </div>
            <div class="center clear_fix">
                <div class="left">
                    <a href="javascript:void(0)" class="btn_top"></a>
                    <div class="imgBox">
                        <a class="active" href="javascript:void(0)"><img src="${this.json[i].thumbnail}" alt=""></a>
                        <a href="javascript:void(0)"><img src="${this.json[i].header}" alt=""></a>
                        <a href="javascript:void(0)"><img src="images/xq3.jpg" alt=""></a>
                    </div>
                    <a href="javascript:void(0)" class="btn_bottom"></a>
                </div>
                <div class="middle">
                        <div class="zhezhao"></div>
                        <div class="fang"></div>
                    <img class="active" src="images/xq1.jpg" alt="">
                    <img src="images/xq2.jpg" alt="">
                    <img src="images/xq3.jpg" alt="">
                    
                </div>
                <div class="bigImg">
                    <img class="active" src="images/xq1.jpg" alt="">
                    <img src="images/xq2.jpg" alt="">
                    <img src="images/xq3.jpg" alt="">
                </div>
                <div class="right">
                    <div class="none">
                        <span>移动下单，惊喜连连</span>
                        <img src="images/q5.png" alt="">
                        <span>扫描下载客户端</span>
                    </div>
                    <h2>${this.json[i].text}</h2>
                    <h3>原装进口 40-50/kg</h3>
                    <p class="clear_fix">
                        <span>促销价</span>
                        <i>￥149.00</i>
                        <em>￥218.00</em>
                        <a href="javascript:void(0)">降价通知</a>
                    </p>
                    <p class="buy">
                        <a href="javascript:void(0)">手机购买</a>
                    </p>
                    <div class="xuan">
                        <p>产地:<span class="active">厄瓜多耳</span><span>泰国</span></p>
                        <p>规格:<span>每公斤30-40只</span><span class="active">每公斤40-50只</span><span>每公斤50-60只</span></p>
                        <p>重量:<span class="active">2kg</span><span>500g</span><span>1.8kg</span><span>1kg*2</span></p>
                        <div class="clear_fix">
                            <dt>
                                <input type="text" value="10">
                                <a href="javascript:void(0)"></a>
                                <a href="javascript:void(0)"></a>
                            </dt>
                            <dd>
                                <a href="javascript:void(0)"></a>
                                <span>好评率</span>
                                <span>98%</span>
                                <p>(<span>5162</span><a href="javascript:void(0)">人评价</a>)</p>
                            </dd>
                        </div>
                    </div>
                    <p><span>温馨提示：</span><span>白虾冷冻冰层很薄，食用前轻轻一摔冻上的虾即可分开，吃多少取多少，不必全部化冻</span></p>
                </div>
            </div>
            `
            }
        }
        this.wrap.html(html)
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