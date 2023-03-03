document.getElementById("language").onclick = function(){
    document.getElementById("listbox").style.display = "block"
}

document.addEventListener('scroll',function(){
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
    }
    else if(scrollvalue <= 1){
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
    }
})



// 