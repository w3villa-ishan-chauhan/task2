var dropdownMenubar=document.getElementById("dropdown-menubar")
dropdownMenubar.onclick=function(e){
  console.log(1)
  var menubar=document.getElementById("menubar");
  e.preventDefault();
  menubar.classList.toggle("show")
  console.log(1)
}

document.getElementById("mobile-search-button").onclick=function(e){
  e.preventDefault();
  var searchMobile=document.getElementById("search-mobile")
  searchMobile.classList.toggle("search-mobile")
}
document.getElementById("login-logout").onclick=function(e){
  e.preventDefault();
  var navbarDropdown=document.getElementById("navbar-dropdown")
  navbarDropdown.classList.toggle("navbar-dropdown")
}
document.getElementById("nav-dropdown").onclick=function(e){
  e.preventDefault();
  var navbaroptionsMobile=document.getElementById("navbaroptions-mobile")
  navbaroptionsMobile.classList.toggle("navbaroptions-mobile")
}
$(document).ready(function () {
  $('.cartItems-mobile').slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    swipe: true,
    autoplaySpeed: 1000,
    responsive:[
      {
        breakpoint: 1060,
        settings:{
          slidesToShow:2,
        }
      },
      {
        breakpoint: 700,
        settings:{
          slidesToShow:1,
        }
      },
    ]
  });
});
$(document).ready(function () {
  $('.catCards').slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    swipe: true,
    autoplaySpeed: 1000,
    responsive:[
      {
        breakpoint: 1060,
        settings:{
          slidesToShow:2,
        }
      },
      {
        breakpoint: 550,
        settings:{
          slidesToShow:1,
        }
      },
      
    ]
  });
});