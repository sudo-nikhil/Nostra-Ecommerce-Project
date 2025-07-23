var openmenu = document.getElementById("open-menu")
var closemenu = document.getElementById("close-menu")

var sidebar = document.querySelector(".side-navbar")


openmenu.addEventListener("click",function(){
    sidebar.style.left = "0"
})

closemenu.addEventListener("click",function(){
    sidebar.style.left = "-50%"
})


var search = document.getElementById("search");
var productlist = document.getElementById("productlist");
var products = productlist.querySelectorAll(".cloth");

search.addEventListener("keyup", function (event) {
    var searchvalue = event.target.value.toUpperCase();

    for (var count = 0; count < products.length; count++) {
        var productname = products[count].querySelector("h3").textContent.toUpperCase();

        if (productname.indexOf(searchvalue) < 0) {
            products[count].style.display = "none";
        } else {
            products[count].style.display = "inline-block";
        }
    }
});

var offerbar = document.querySelector(".offer-bar")
var offerclose = document.getElementById("offer-close")

offerclose.addEventListener("click",function(){
    offerbar.style.display = "none"
})



//filter function

document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('.filter');
  const products = document.querySelectorAll('.cloth');

  checkboxes.forEach(cb => {
    cb.addEventListener('click', () => {
      const selectedFilters = {
        occasion: getCheckedValues('occasion'),
        color: getCheckedValues('color'),
        arrival: getCheckedValues('arrival')
      };

      products.forEach(product => {
        const occasion = product.dataset.occasion;
        const color = product.dataset.color;
        const arrival = product.dataset.arrival;

        const matchOccasion = selectedFilters.occasion.length === 0 || selectedFilters.occasion.includes(occasion);
        const matchColor = selectedFilters.color.length === 0 || selectedFilters.color.includes(color);
        const matchArrival = selectedFilters.arrival.length === 0 || selectedFilters.arrival.includes(arrival);

        product.style.display = (matchOccasion && matchColor && matchArrival) ? 'inline-block' : 'none';
      });
    });
  });

  function getCheckedValues(type) {
    return Array.from(document.querySelectorAll(`input[data-type="${type}"]:checked`)).map(cb => cb.value);
  }
});



