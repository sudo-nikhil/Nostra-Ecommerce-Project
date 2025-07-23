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

var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton =document.getElementById("slider-right-activate")
var sliderimage= document.querySelector(".slider-image-container")
var slidermargin=0

console.log(sliderleftbutton)

sliderrightbutton.addEventListener("click",

function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
   

}
)

sliderleftbutton.addEventListener("click",

function(){

    if(slidermargin==0)
    {
       
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
    sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
}
)


var likebuttons = document.querySelectorAll(".like-button:not(.red)");

likebuttons.forEach(function (button) {
    button.addEventListener("click", function () {
        var product = button.closest(".wproduct");
        var redHeart = product.querySelector(".red");

        redHeart.style.display = "inline-block";
        button.style.display = "none";
    });
});

var redhearts = document.querySelectorAll(".like-button.red");

redhearts.forEach(function (redHeart) {
    redHeart.addEventListener("click", function () {
        var product = redHeart.closest(".wproduct");
        var emptyHeart = product.querySelector(".like-button:not(.red)");

        redHeart.style.display = "none";
        emptyHeart.style.display = "inline-block";
    });
});


