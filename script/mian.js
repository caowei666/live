$(function(){$(".shanChu").click(function(){$(".canHide").css({display:"none"})}),$(".ulli3").hover(function(){$(".ulli3>div").css({display:"block"})},function(){$(".ulli3>div").css({display:"none"})}),$(".top-con .right li:nth-of-type(4)").hover(function(){$(".top-con .right li:nth-of-type(4) div").css({display:"block"})},function(){$(".top-con .right li:nth-of-type(4) div").css({display:"none"})}),$(".top-con .center a").click(function(){$(".zhezhao").css({opacity:.5,height:2218,width:"100%"}),$(".zhezhaoCenter").css("display","block")}),$(".closeCity").click(function(){$(".zhezhao").css({opacity:0,height:0,width:0}),$(".zhezhaoCenter").css("display","none")})});
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