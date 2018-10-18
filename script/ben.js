// 最顶上功能
$(function(){
    $(".shanChu").click(function(){
        $(".canHide").css({
            display:"none"
        })
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
    
})
    // 登陆注册下9张图片轮播
    function Banner(){}
    Object.assign(Banner.prototype , {
        init(){
            this.nowIndex = 0;
            this.show_list = document.querySelectorAll(".bankImg a");
            this.itmeNum = this.show_list.length;
        },  
        next(){
            if(this.nowIndex == this.itmeNum){
                this.nowIndex = 1;
            }else{
                this.nowIndex ++;
            }
            this.animate();
        },
        animate(){
            $(this.show_list).removeClass("active");
            if(this.nowIndex == this.itmeNum){
                this.show_list[0].className = "active"
            }else{
                this.show_list[this.nowIndex].className = "active";
            }
        },
        autoPlay(){
            this.autoTimer = setInterval(function(){
                this.next();
            }.bind(this),1000)
        }
    })
    var banner = new Banner();
    banner.init();
    banner.autoPlay()
    // 登陆注册下9张图片轮播
function Banner(){}
Object.assign(Banner.prototype , {
    init(){
        this.nowIndex = 0;
        this.show_list = document.querySelectorAll(".bankImg a");
        this.itmeNum = this.show_list.length;
    },  
    next(){
        if(this.nowIndex == this.itmeNum){
            this.nowIndex = 1;
        }else{
            this.nowIndex ++;
        }
        this.animate();
    },
    animate(){
        $(this.show_list).removeClass("active");
        if(this.nowIndex == this.itmeNum){
            this.show_list[0].className = "active"
        }else{
            this.show_list[this.nowIndex].className = "active";
        }
    },
    autoPlay(){
        this.autoTimer = setInterval(function(){
            this.next();
        }.bind(this),1000)
    }
})
var banner = new Banner();
banner.init();
banner.autoPlay();
// 大轮播图
 function Banner2(){}
 Object.assign(Banner2.prototype,{
     init(){
        this.nowIndex = 0;
        this.btnleft = document.querySelector(".lunBox .leftBtn");
        this.btnright = document.querySelector(".lunBox .rightBtn");
        this.btn_list = document.querySelectorAll(".lunBox .list p");
        this.show_list = document.querySelectorAll(".lunBox .show a");
        this.ul = document.querySelector(".lunBox");
        this.itmeNum = this.btn_list.length;
        this.bindEvent();
        this.autoPlay();
     },
     bindEvent(){
         this.btnleft.onclick = this.prev.bind(this);
         this.btnright.onclick = this.next.bind(this);
         this.ul.onmouseenter = this.stopPlay.bind(this);
         this.ul.onmouseleave = this.autoPlay.bind(this);
         for(var i = 0;i < this.itmeNum;i++){
             this.btn_list[i].index = i;
             this.btn_list[i].onmouseover = this.toIndex.bind(this);
         }
     },
     next(){
         if(this.nowIndex == this.itmeNum -1){
             this.nowIndex = 0;
         }else{
             this.nowIndex ++;
         }
         this.animate();
     },
     prev(){
         if(this.nowIndex == 0){
             this.nowIndex = this.itmeNum - 1;
         }else{
             this.nowIndex--;
         }
         this.animate();
     },
     animate(){
        $(this.show_list).removeClass("active");
        this.show_list[this.nowIndex].className = "active";
     },
     toIndex(event){
        var e = event || window.event;
        var target = e.target || e.srcElement;
        this.nowIndex = target.index;
        this.animate(); 
     },
     autoPlay(){
         this.antoTimer2 = setInterval(()=>{
             this.next();
         },2000)
     },
     stopPlay(){
         clearInterval(this.antoTimer2);
     }
 })
    var banner2 = new Banner2();
    banner2.init();
    // 返回顶部按钮
    $(function(){
        $(".fixBox a:first-child").click(function(){
            $("html,body").scrollTop(0);
        })
        $(window).scroll(function(){
            if($(window).scrollTop() > 300){
                $(".fixBox a:first-child").stop().css("display","block")
            }
            if($(window).scrollTop() < 300){
                $(".fixBox a:first-child").stop().css("display","none")
            }
        })
    })
    // 第一个选项卡功能；
    $.each($(".new .left a"),function(index,item){
        $(item).on("mouseenter",index,function(event){
            $(this).css({
                background: "#fff",
                width: 123,
                "border-left":"3px solid #78a000",
                "border-top": "1px solid #78a000",
                "border-bottom": "1px solid #78a000"
            })
            $(this).siblings().css({
                "border-bottom": "1px solid #e5e5e5",
                "border-left":"none",
                "background":"#f8f8f6"
           })  
            $($(".new .right").children("div")[index]).css("display","block").siblings().css("display","none")
        })
    })
    // 买家推荐动画
    $(".animate .top dd").click(function(){
        $(".animate .top dt").css("left",$(this).offset().left - 41);
        $(".animate .top dt").css("top",$(this).offset().top - 1240);
        $(this).children("a").css("color","#f98601")
        $(this).siblings().children("a").css("color","#1e301d")
    })
    // 买家推荐选项卡
    $.each($(".animate .top dd"),function(index,item){
        $(item).on("click",index,function(event){
           $($(".animate .bottom .bigBox")[index]).css("display","block")
           .siblings().css("display","none")
        })
    })
    // 瀑布流加载数据
    function Pubu(){}
    $.extend(Pubu.prototype,{
        init:function(){
            this.wrap = $(".pubu-con .wrap");
            this.loading = false;
            this.page = 2;
            this.loadJson()
            .then(function(res){
                this.json = res.data;
                this.renderPage()
            })
            this.bindEvent();
        },
        loadJson:function(){
            var opt = {
                url:"https://www.apiopen.top/satinGodApi?type=1&page=" + this.page,
                type:"GET",
                context : this
            }
            return $.ajax(opt);
        },
        renderPage:function(){
            // console.log(this.json)
            var html = "";
            for(var i = 0;i < this.json.length;i++){
                html += `
                <li>
                    <img src="${this.json[i].thumbnail}" alt="">
                    <h2>${this.json[i].text}</h2>
                    <h3>${this.json[i].username}</h3>
                    <p>${this.json[i].passtime}</p>
                    <a id="${this.json[i].soureid}" href="javascript:void(0)"></a>
                </li>
                        `
            }
            this.wrap.html(this.wrap.html() + html);
        },
        bindEvent(){
            $(window).on("scroll",this.ifload.bind(this));
            $(".pubu-con .wrap").on("click",this.addcar.bind(this));
            $(".gouwuche dt a").on("mouseenter",this.showlist.bind(this));
        },
        ifload(){
            var scrollTop = $("html,body").scrollTop();
            var clientHeight = $("html")[0].clientHeight;
            var lastBox = this.wrap.children("li:last");
            if(scrollTop + clientHeight > lastBox.offset().top){
                if(this.loading || this.page > 9){
                    return 0;
                }
                this.loading = true;
                this.page ++;
                this.loadJson()
                .then(function(res){
                    this.json = res.data;
                    this.renderPage();
                    this.loading = false;
                })
            }
        },
        addcar:function(event){
            var target = event.target ;
            var goodsId = $(target).attr("id");
            var cookie;
            if(cookie = cookieFZ("shopCar")){
                // console.log(cookie)
                var cookieArray = JSON.parse(cookie);
                // cookieArray.push(goodsId);
                var hasGoods = false;
                for(var i = 0;i < cookieArray.length;i++){
                    if(cookieArray[i].id == goodsId){
                        hasGoods = true;
                        cookieArray[i].num ++;
                        break;
                    } 
                }
                if(hasGoods == false){
                    var goods = {
                        id : goodsId,
                        num : "1"
                    }
                    cookieArray.push(goods)
                }
                cookieFZ("shopCar",JSON.stringify(cookieArray))
                // console.log(cookie)
            }else{
                cookieFZ("shopCar",`[{"id":"${goodsId}","num":"1"}]`)
            }
            this.listSum();
        },
        showlist:function(event){
            var target = event.target;
            // if(target != $(".gouwuche dt a")) return 0;
            var cookie;
            if(!(cookie = cookieFZ("shopCar"))){return 0}
            var cookieArray = JSON.parse(cookie);
            var html = "";
            for(var i = 0;i < cookieArray.length;i++){
                // console.log(cookieArray[i])
                // console.log(this.json)
                for(var j = 0;j < this.json.length;j++){
                    if(cookieArray[i].id == this.json[j].soureid){
                        html +=`
                        <li class="clear_fix">
                            <img src="${this.json[j].thumbnail}" alt="">
                            <h2>${this.json[j].text}</h2>
                            <strong>${cookieArray[i].num}</strong>
                        </li>
                        `
                        break;
                    }
                }
            }
            $(".gouwuche dt ul").html(html);
        },
        listSum:function(){
            var cookie;
            if(!(cookie = cookieFZ("shopCar"))){ 
                $(".gouwuche dt>div").html(0);
                return 0;
            };
            var cookieArray = JSON.parse(cookie);
            var sum = 0;
            for(var i = 0 ; i < cookieArray.length ; i ++){
                sum += Number(cookieArray[i].num);
            }
            $(".gouwuche dt div").html(sum);
        }
    })
    var pubu = new Pubu();
    pubu.init();
    window.onload = function(){
            var cookie;
            if(!(cookie = cookieFZ("shopCar"))){ 
                $(".gouwuche dt>div").html(0);
                return 0;
            };
            var cookieArray = JSON.parse(cookie);
            var sum = 0;
            for(var i = 0 ; i < cookieArray.length ; i ++){
                sum += Number(cookieArray[i].num);
            }
            $(".gouwuche dt div").html(sum);
    }
    // function ShopCar(){}
    // $.extend(ShopCar.prototype,{
    //     init:function(){
    //         this.item = $(".pubu-con .wrap");
    //         this.carlist = $(".gouwuche dt p span");
    //         this.addbtn = $(".pubu-con .wrap li a");
    //         console.log(this.addbtn,this.item)
    //         this.bindEvent();
    //     },
    //     bindEvent:function(){
        
    //     },
    //     addcar:function(event){
    //         // var target = event.target;
    //         // console.log(event)
    //         // var goodID = $(target).attr("id");
    //         // console.log(goodID);
    //     }
    // })
    // var shopCar = new ShopCar();
    // shopCar.init();
    // 左边栏特效
    $(".leftFix a:first-child").click(function(){
        $("html,body").scrollTop(0);
    })
    $(window).scroll(function(){
        if($(window).scrollTop() > 985){
            $(".leftFix").css("display","block")
        }else{
            $(".leftFix").css("display","none")
        }  
        if($(window).scrollTop() > 1700 && $(window).scrollTop() < 3186){
            $(".leftFix a:eq(1)").css("background-position-x","-43px")
        }else{
            $(".leftFix a:eq(1)").css("background-position-x","0")
        }

        if($(window).scrollTop() > 3186 && $(window).scrollTop() < 4738){
            $(".leftFix a:eq(2)").css("background-position-x","-43px")
        }else{
            $(".leftFix a:eq(2)").css("background-position-x","0")
        }

        if($(window).scrollTop() > 4738 && $(window).scrollTop() < 6258){
            $(".leftFix a:eq(3)").css("background-position-x","-43px")
        }else{
            $(".leftFix a:eq(3)").css("background-position-x","0")
        }

        if($(window).scrollTop() > 6258 && $(window).scrollTop() < 7686){
            $(".leftFix a:eq(4)").css("background-position-x","-43px")
        }else{
            $(".leftFix a:eq(4)").css("background-position-x","0")
        }

        if($(window).scrollTop() > 7686 && $(window).scrollTop() < 9186){
            $(".leftFix a:eq(5)").css("background-position-x","-43px")
        }else{
            $(".leftFix a:eq(5)").css("background-position-x","0")
        }

        if($(window).scrollTop() > 9186 && $(window).scrollTop() < 10786){
            $(".leftFix a:eq(6)").css("background-position-x","-43px")
        }else{
            $(".leftFix a:eq(6)").css("background-position-x","0")
        }

        if($(window).scrollTop() > 10786 && $(window).scrollTop() < 12285){
            $(".leftFix a:eq(7)").css("background-position-x","-43px")
        }else{
            $(".leftFix a:eq(7)").css("background-position-x","0")
        }

        if($(window).scrollTop() > 12285 && $(window).scrollTop() < 14000){
            $(".leftFix a:eq(8)").css("background-position-x","-43px")
        }else{
            $(".leftFix a:eq(8)").css("background-position-x","0")
        }

        if($(window).scrollTop() > 14000){
            $(".leftFix a:eq(9)").css("background-position-x","-43px")
        }else{
            $(".leftFix a:eq(9)").css("background-position-x","0")
        }

        if($(window).scrollTop() > 1700){
            $(".leftFix a[href='#28720146']").css("display","block")
        }
        if($(window).scrollTop() > 3186){
            $(".leftFix a[href='#28718418']").css("display","block")
        }
        if($(window).scrollTop() > 4738){
            $(".leftFix a[href='#28718610']").css("display","block")
        }
        if($(window).scrollTop() > 6258){
            $(".leftFix a[href='#28717662']").css("display","block")
        }
        if($(window).scrollTop() > 7686){
            $(".leftFix a[href='#28717324']").css("display","block")
        }
        if($(window).scrollTop() > 9186){
            $(".leftFix a[href='#28716528']").css("display","block")
        }
        if($(window).scrollTop() > 10786){
            $(".leftFix a[href='#28712652']").css("display","block")
        }
        if($(window).scrollTop() > 12285){
            $(".leftFix a[href='#28715293']").css("display","block")
        }
        if($(window).scrollTop() > 14000){
            $(".leftFix a[href='#28705303']").css("display","block")
        }
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
        setCookie(name,"",{
            expires:-1,
            // 做一个参数判断 , 不让path 为undefined;
            path: path ? path : ""
        })
    }
   
    // 显示登录名
    window.onload = function(){
        if(document.cookie.split("=")[0] == ""){
            $("#login").html("你好，请登录");
        }else{
            var cookieArr = document.cookie.split("; ").length - 1;
            $("#login").html(document.cookie.split("; ")[cookieArr].split("=")[0]);
        }
        // console.log(document.cookie)
    }