const menuBtn=document.querySelector(".js-menu-icon");
const mainMenu=document.querySelector(".c-main-menu");

function openCloseMenu(){
    mainMenu.classList.toggle("js-openMenu");
    menuBtn.classList.toggle("fa-bars");
    menuBtn.classList.toggle("fa-times")

}


menuBtn.addEventListener("click",openCloseMenu);


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        dots:true,
        loop:true,
        margin:10,
        nav:true,
        items:2,
        margin:30,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            992:{
                items:2,
                nav:true,
                loop:true
            }
        }
    });
  });

