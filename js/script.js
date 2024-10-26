window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        navbar.classList.remove('opacity');
        navbar.classList.add('colored');
        
    } else {
        navbar.classList.remove('colored');
        navbar.classList.add('opacity');
    }
});

window.addEventListener('scroll', function() {
    var card = document.getElementById('card');
    var carddetails = document.getElementById('carddetails');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        card.style.transition = '0.7s';
        card.style.background = '#f5f5f500';
        carddetails.style.color = '#f5f5f500';
        card.style.border = '#f5f5f500';
    } else {
        card.style.display = 'block'; 
        card.style.background = '#f5f5f5'; 
        carddetails.style.color = '#000';
        card.style.border = '#FF9A00';

    }
});
$(document).ready(function(){
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

document.getElementById('favoritedBtn').addEventListener('click', function() {
    document.querySelector('.filters').classList.toggle('favorited');
  });