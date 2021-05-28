

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');


menu.addEventListener('click',function(){
menu.classList.toggle('is-active');
menuLinks.classList.toggle('active');

});

$(document).ready(function () {
    
  
    $(window).scroll(function(){
        if(this.scrollY > 50){
    $('.navbar').addClass("sticky");
   
        }else{
            $('.navbar').removeClass("sticky");
        }

    })
    });
    