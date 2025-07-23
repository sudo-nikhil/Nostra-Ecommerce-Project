var openmenu = document.getElementById("open-menu")
var closemenu = document.getElementById("close-menu")

var sidebar = document.querySelector(".side-navbar")


openmenu.addEventListener("click",function(){
    sidebar.style.left = "0"
})

closemenu.addEventListener("click",function(){
    sidebar.style.left = "-50%"
})


var offerbar = document.querySelector(".offer-bar")
var offerclose = document.getElementById("offer-close")

offerclose.addEventListener("click",function(){
    offerbar.style.display = "none"
})
