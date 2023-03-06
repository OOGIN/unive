document.getElementById("language").onclick = function(){
    document.getElementById("listbox").style.display = "block"
}

var scrolldown = document.addEventListener('scroll',function(){
    var scrollvalue = document.documentElement.scrollTop
    if(scrollvalue > 2){
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


var hover_menu = document.getElementById("header1")
var hover1 = document.getElementById("list1")
var hover2 = document.getElementById("list2")
var hover3 = document.getElementById("list3")
var hover4 = document.getElementById("list4")
var hover5 = document.getElementById("list5")
var hover6 = document.getElementById("list6")


hover_menu.addEventListener("mouseenter",function(){
    document.getElementById("background").style.display = "block"
    document.getElementById("sub_M").style.display = "block"
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

