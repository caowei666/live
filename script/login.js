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
// 登陆注册正则
$(".zhanghu").focus(function(){
    $(this).attr("placeholder","")
})
$(".zhanghu").blur(function(){
    var reg = /^1[0-9]{10}$/;
    var reg2 = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
    if($(this).val()=="")return 0;
    if(reg.test($(this).val()) || reg2.test($(this).val())){
        $(this).parent().children("s").css("background","url(../images/lo1.png) 0 -102px no-repeat")
        $(this).parent().children("div").css("display","none")
    }else{
        $(this).parent().children("s").css("background","url(../images/lo1.png) 0 -137px no-repeat")
        $(this).parent().children("div").css("display","block")
    }
})
$(".mima").blur(function(){
    var reg = /^[0-9A-Za-z\!\@\#\$\%\^\&\*\(\)\_\+\<\>\?]{6,16}/;
    if($(this).val()=="")return 0
    if(reg.test($(this).val())){
        $(this).parent().children("s").css("background","url(../images/lo1.png) 0 -102px no-repeat")
        $(this).parent().children("div").css("display","none")
    }else{
        $(this).parent().children("s").css("background","url(../images/lo1.png) 0 -137px no-repeat")
        $(this).parent().children("div").css("display","block")
    }
})

$(".nowin").click(function(){
        $.ajax({
            url:"http://localhost:8888/proxy/localhost/php/login.php",
            type:"GET",
            data:`username=${$(".zhanghu").val()}&password=${$(".mima").val()}`,
        })
        .then(function(res){
            if(res == "登录成功"){
                for(var i = 0;i < document.cookie.split("; ").length;i++){
                    if(document.cookie.split("; ")[i].split("=")[0] == $(".zhanghu").val()){
                        removeCookie($(".zhanghu").val(),"/")
                    }
                }
                cookieFZ($(".zhanghu").val(),$(".mima").val(),{
                    expires:30,
                    path:"/"
                });
                location.href = "index.html"
            }else if(res == "账户不存在"){
                alert("账号错误")
            }else{
                alert("密码错误")
            }
        })
        .fail(function(){
            console.log("error")
        })
})

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
