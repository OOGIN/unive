document.getElementById("language").onclick = function(){
    document.getElementById("listbox").style.display = "block"
}
var hover_menu = document.getElementById("header1")
var hover1 = document.getElementById("list1")
var hover2 = document.getElementById("list2")
var hover3 = document.getElementById("list3")
var hover4 = document.getElementById("list4")
var hover5 = document.getElementById("list5")
var hover6 = document.getElementById("list6")
var btn1 = document.getElementById("Notice_btn1")
var btn2 = document.getElementById("Notice_btn2")
var btn3 = document.getElementById("Notice_btn3")
var btn4 = document.getElementById("Notice_btn4")
var btn5 = document.getElementById("Notice_btn5")
var btn6 = document.getElementById("Notice_btn6")
var bar = document.getElementById("bar")
var detail1 = document.getElementById("detail1")
var detail2 = document.getElementById("detail2")
var detail3 = document.getElementById("detail3")
var detail4 = document.getElementById("detail4")
var detail5 = document.getElementById("detail5")
var detail6 = document.getElementById("detail6")
var back = document.getElementById("L_btn")
var next = document.getElementById("R_btn")
var slick_track = document.getElementById("slick-track")
var next_btn = document.getElementById("next_btn")
var back_btn = document.getElementById("back_btn")
var slide_lis = document.getElementById("slide_lis")
var scrollTop = document.getElementById("btn_scrollTop")


var scrolldown = document.addEventListener('scroll',function(){
    var scrollvalue = document.documentElement.scrollTop
    if(scrollvalue > 2){
        document.getElementById("btn_scrollTop").style.opacity="1"
        document.getElementById("header").style.backgroundColor = "#fff"
        document.getElementById("header").style.position = "sticky"
        document.getElementById("white").style.display ="none"
        document.getElementById("black").style.display ="block"
        document.getElementById("right1").style.color="black"
        document.getElementById("top_right").style.marginTop="-20px"
        document.getElementById("right2").style.color = "black"
        document.getElementById("language").style.color = "black"
        document.getElementById("language").style.background= "url(/img/black_arrow.png) no-repeat right center"
        document.getElementById("logo").style.display="none"
        document.getElementById("hide_logo").style.display="block"
        document.getElementById("black_logo").style.marginTop="20px"
        document.getElementById("list1").style.color="black"
        document.getElementById("navs").style.marginTop = "-120px"
        document.getElementById("list1").style.color="black"
        document.getElementById("list2").style.color="black"
        document.getElementById("list3").style.color="black"
        document.getElementById("list4").style.color="black"
        document.getElementById("list5").style.color="black"
        document.getElementById("list6").style.color="black"
        document.getElementById("search").style.background="url(/img/search_black.png) no-repeat right center"
        document.getElementById("recGrp").style.background = "url(/img/recGrp_black.png) no-repeat right center"
        document.getElementById("lineMenu").style.background="url(/img/lineMenu_black.png) no-repeat right center"
        document.getElementById("top_top").style.borderBottom="1px solid rgba(0,0,0,0.2)"
        document.getElementById("header1").style.borderBottom="1px solid rgba(0,0,0,0.2)"
    }
    else{
        document.getElementById("btn_scrollTop").style.opacity = "0"
        document.getElementById("btn_scrollTop").style.transition = "0.3s"
        document.getElementById("header").style.position = "relative"
        document.getElementById("header").style.backgroundColor = "rgb(0, 138, 156)"
        document.getElementById("white").style.display ="block"
        document.getElementById("black").style.display ="none"
        document.getElementById("right1").style.color="white"
        document.getElementById("top_right").style.marginTop="0px"
        document.getElementById("right2").style.color = "white"
        document.getElementById("language").style.color = "white"
        document.getElementById("language").style.background= "url(/img/ico_arrB_white.png) no-repeat right center"
        document.getElementById("logo").style.display="block"
        document.getElementById("hide_logo").style.display="none"
        document.getElementById("list1").style.color="white"
        document.getElementById("list2").style.color="white"
        document.getElementById("list3").style.color="white"
        document.getElementById("list4").style.color="white"
        document.getElementById("list5").style.color="white"
        document.getElementById("list6").style.color="white"
        document.getElementById("search").style.background="url(/img/top_search_white.png) no-repeat right center"
        document.getElementById("recGrp").style.background="url(/img/top_recGrp_white.png) no-repeat right center"
        document.getElementById("lineMenu").style.background="url(/img/top_lineMenu_white.png) no-repeat right center"
        document.getElementById("top_top").style.borderBottom="1px solid rgba(255,255,255,0.2)"
        document.getElementById("header1").style.borderBottom="1px solid rgba(0,0,0,0)"
    }
})

hover_menu.addEventListener("mouseenter",function(){
    
    document.getElementById("header").style.backgroundColor = "#fff"
    document.getElementById("header").style.position = "sticky"
    document.getElementById("white").style.display ="none"
    document.getElementById("black").style.display ="block"
    document.getElementById("right1").style.color="black"
    document.getElementById("top_right").style.marginTop="-20px"
    document.getElementById("right2").style.color = "black"
    document.getElementById("language").style.color = "black"
    document.getElementById("language").style.background= "url(/img/black_arrow.png) no-repeat right center"
    document.getElementById("logo").style.display="none"
    document.getElementById("hide_logo").style.display="block"
    document.getElementById("black_logo").style.marginTop="20px"
    document.getElementById("list1").style.color="black"
    document.getElementById("navs").style.marginTop = "-120px"
    document.getElementById("list1").style.color="black"
    document.getElementById("list2").style.color="black"
    document.getElementById("list3").style.color="black"
    document.getElementById("list4").style.color="black"
    document.getElementById("list5").style.color="black"
    document.getElementById("list6").style.color="black"
    document.getElementById("search").style.background="url(/img/search_black.png) no-repeat right center"
    document.getElementById("recGrp").style.background = "url(/img/recGrp_black.png) no-repeat right center"
    document.getElementById("lineMenu").style.background="url(/img/lineMenu_black.png) no-repeat right center"
    document.getElementById("top_top").style.borderBottom="1px solid rgba(0,0,0,0.2)"
    document.getElementById("header1").style.borderBottom="1px solid rgba(0,0,0,0.2)"
})
hover_menu.addEventListener("mouseleave",function(){
    document.getElementById("sub_M").style.display = "none"
    document.getElementById("background").style.display = "none"
    var scrollvalue = document.documentElement.scrollTop
    if(scrollvalue > 1){
        document.getElementById("header").style.backgroundColor = "#fff"
        document.getElementById("header").style.position = "sticky"
        document.getElementById("white").style.display ="none"
        document.getElementById("black").style.display ="block"
        document.getElementById("right1").style.color="black"
        document.getElementById("top_right").style.marginTop="-20px"
        document.getElementById("right2").style.color = "black"
        document.getElementById("language").style.color = "black"
        document.getElementById("language").style.background= "url(/img/black_arrow.png) no-repeat right center"
        document.getElementById("logo").style.display="none"
        document.getElementById("hide_logo").style.display="block"
        document.getElementById("black_logo").style.marginTop="20px"
        document.getElementById("list1").style.color="black"
        document.getElementById("navs").style.marginTop = "-120px"
        document.getElementById("list1").style.color="black"
        document.getElementById("list2").style.color="black"
        document.getElementById("list3").style.color="black"
        document.getElementById("list4").style.color="black"
        document.getElementById("list5").style.color="black"
        document.getElementById("list6").style.color="black"
        document.getElementById("search").style.background="url(/img/search_black.png) no-repeat right center"
        document.getElementById("recGrp").style.background = "url(/img/recGrp_black.png) no-repeat right center"
        document.getElementById("lineMenu").style.background="url(/img/lineMenu_black.png) no-repeat right center"
        document.getElementById("top_top").style.borderBottom="1px solid rgba(0,0,0,0.2)"
        document.getElementById("header1").style.borderBottom="1px solid rgba(0,0,0,0.2)"
    }
    else{
        document.getElementById("header").style.position = "relative"
        document.getElementById("header").style.backgroundColor = "rgb(0, 138, 156)"
        document.getElementById("white").style.display ="block"
        document.getElementById("black").style.display ="none"
        document.getElementById("right1").style.color="white"
        document.getElementById("top_right").style.marginTop="0px"
        document.getElementById("right2").style.color = "white"
        document.getElementById("language").style.color = "white"
        document.getElementById("language").style.background= "url(/img/ico_arrB_white.png) no-repeat right center"
        document.getElementById("logo").style.display="block"
        document.getElementById("hide_logo").style.display="none"
        document.getElementById("list1").style.color="white"
        document.getElementById("list2").style.color="white"
        document.getElementById("list3").style.color="white"
        document.getElementById("list4").style.color="white"
        document.getElementById("list5").style.color="white"
        document.getElementById("list6").style.color="white"
        document.getElementById("search").style.background="url(/img/top_search_white.png) no-repeat right center"
        document.getElementById("recGrp").style.background="url(/img/top_recGrp_white.png) no-repeat right center"
        document.getElementById("lineMenu").style.background="url(/img/top_lineMenu_white.png) no-repeat right center"
        document.getElementById("top_top").style.borderBottom="1px solid rgba(255,255,255,0.2)"
        document.getElementById("header1").style.borderBottom="1px solid rgba(0,0,0,0)"
    }
})

hover1.addEventListener("mouseenter",function(){
    document.getElementById("background").style.display = "block"
    document.getElementById("sub_M").style.display = "block"
})
hover2.addEventListener("mouseenter",function(){
    document.getElementById("background").style.display = "block"
    document.getElementById("sub_M").style.display = "block"
})
hover3.addEventListener("mouseenter",function(){
    document.getElementById("background").style.display = "block"
    document.getElementById("sub_M").style.display = "block"
})
hover4.addEventListener("mouseenter",function(){
    document.getElementById("background").style.display = "block"
    document.getElementById("sub_M").style.display = "block"
})
hover5.addEventListener("mouseenter",function(){
    document.getElementById("background").style.display = "block"
    document.getElementById("sub_M").style.display = "block"
})
hover6.addEventListener("mouseenter",function(){
    document.getElementById("background").style.display = "block"
    document.getElementById("sub_M").style.display = "block"
})


if(btn1.className == "default_on"){
    detail1.style.display = "block"
}
btn1.onclick = function(){
    bar.style.marginLeft ="11px"
    btn1.title = "선택됨"
    btn2.title = ""
    btn3.title = ""
    btn4.title = ""
    btn5.title = ""
    btn6.title = ""
    btn1.className = "default_on"
    detail1.style.display = "block"
    if(btn1.className == "default_on"){
        btn2.className = "default"
        btn3.className = "default"
        btn4.className = "default"
        btn5.className = "default"
        btn6.className = "default"
        detail2.style.display = "none"
        detail3.style.display = "none"
        detail4.style.display = "none"
        detail5.style.display = "none"
        detail6.style.display = "none"
    }
}
btn2.onclick = function(){
    bar.style.marginLeft ="90px"
    btn2.title = "선택됨"
    btn1.title = ""
    btn3.title = ""
    btn4.title = ""
    btn5.title = ""
    btn6.title = ""
    btn2.className = "default_on"
    detail2.style.display = "block"
    if(btn2.className == "default_on"){
        btn1.className = "default"
        btn3.className = "default"
        btn4.className = "default"
        btn5.className = "default"
        btn6.className = "default"
        detail1.style.display = "none"
        detail3.style.display = "none"
        detail4.style.display = "none"
        detail5.style.display = "none"
        detail6.style.display = "none"
    }
}
btn3.onclick = function(){
    bar.style.marginLeft ="170px"
    btn3.title = "선택됨"
    btn1.title = ""
    btn2.title = ""
    btn4.title = ""
    btn5.title = ""
    btn6.title = ""
    btn3.className = "default_on"
    detail3.style.display = "block"
    if(btn3.className == "default_on"){
        btn2.className = "default"
        btn1.className = "default"
        btn4.className = "default"
        btn5.className = "default"
        btn6.className = "default"
        detail2.style.display = "none"
        detail1.style.display = "none"
        detail4.style.display = "none"
        detail5.style.display = "none"
        detail6.style.display = "none"
    }
}
btn4.onclick = function(){
    bar.style.marginLeft ="249px"
    btn4.title = "선택됨"
    btn1.title = ""
    btn2.title = ""
    btn3.title = ""
    btn5.title = ""
    btn6.title = ""
    btn4.className = "default_on"
    detail4.style.display = "block"
    if(btn4.className == "default_on"){
        btn2.className = "default"
        btn3.className = "default"
        btn1.className = "default"
        btn5.className = "default"
        btn6.className = "default"
        detail2.style.display = "none"
        detail3.style.display = "none"
        detail1.style.display = "none"
        detail5.style.display = "none"
        detail6.style.display = "none"
    }
}
btn5.onclick = function(){
    bar.style.marginLeft ="329px"
    btn5.title = "선택됨"
    btn1.title = ""
    btn2.title = ""
    btn3.title = ""
    btn4.title = ""
    btn6.title = ""
    btn5.className = "default_on"
    detail5.style.display = "block"
    if(btn5.className == "default_on"){
        btn2.className = "default"
        btn3.className = "default"
        btn4.className = "default"
        btn1.className = "default"
        btn6.className = "default"
        detail2.style.display = "none"
        detail3.style.display = "none"
        detail4.style.display = "none"
        detail1.style.display = "none"
        detail6.style.display = "none"
    }
}
btn6.onclick = function(){
    bar.style.marginLeft ="409px"
    btn6.title = "선택됨"
    btn1.title = ""
    btn2.title = ""
    btn3.title = ""
    btn4.title = ""
    btn5.title = ""
    btn6.className = "default_on"
    detail6.style.display = "block"
    if(btn6.className == "default_on"){
        btn2.className = "default"
        btn3.className = "default"
        btn4.className = "default"
        btn5.className = "default"
        btn1.className = "default"
        detail2.style.display = "none"
        detail3.style.display = "none"
        detail4.style.display = "none"
        detail5.style.display = "none"
        detail1.style.display = "none"
    }
}

var move_count = -760;
next.onclick = function(){
    move_count = move_count + -380;
    if(move_count > -2661){
        slick_track.style.marginLeft =move_count+"px"
        slick_track.style.transition = '0.5s ease-out'
    }
    else{
        move_count = -760;
        slick_track.style.marginLeft = move_count +"px"
        slick_track.style.transition = '0s'
    }
}
back.onclick = function(){
    var move=  String(move_count)
    move_count = move_count+380;
    if(move_count <= 380){
        slick_track.style.marginLeft = move+"px"
        slick_track.style.transition = '0.5s ease-out'
    }
    if(move_count == 380){
        move_count = -1900;
        var reset = String(move_count)
        slick_track.style.marginLeft = reset + "px"
        slick_track.style.transition = '0s'
    }
}
var left = -1008.5;
next_btn.onclick = function(){
    if(left <= -2420){
        left = -806.8
        slide_lis.style.marginLeft = left +"px"
        slide_lis.style.transition = '0s'
    }
    else{
    left = left + -201.7;
    slide_lis.style.marginLeft = left + "px"
    slide_lis.style.transition = '0.3s ease-out'
    }
}
back_btn.onclick = function(){
    if(left >= 0){
        left = -1613.6
        slide_lis.style.marginLeft = left + "px"
        slide_lis.style.transition = '0s'
    }
    else{
        left = left + 201.7;
        slide_lis.style.marginLeft = left + "px"
        slide_lis.style.transition = '0.3s ease-out'
    }
}

scrollTop.onclick = function(){
    window.scrollTo({top:0,behavior: "smooth"})
}