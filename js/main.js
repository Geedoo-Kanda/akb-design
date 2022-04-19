var lightbox = GLightbox();
lightbox.on('open', (target) => {
    console.log('lightbox opened');
});
AOS.init({
    easing: 'ease-in-out-sine'
});
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.retour-btn').fadeIn();
        } else {
            $('.retour-btn').fadeOut();
        }
        //la class active change de liens pendant le scroll
        var tabLiens = [];
        $id = null;
        $('.nav-item .nav-link').each(function () {
            tabLiens.push($($(this).attr('href')));
        })

        var scrollTop = $(this).scrollTop();
        for (var i in tabLiens) {
            var tabLiensI = tabLiens[i];
            if (scrollTop > tabLiensI.offset().top - 200) {
                $id = tabLiensI.attr('id');
            }
        }
        $('.nav-item .nav-link').removeClass('active');
        $('.nav-item .nav-link[href="#' + $id + '"]').addClass('active');
    });

     //gere le scroll de la navigation
     $nav = $('.nav-item .nav-link');
     $nav.on('click', function (e) {
         $nav.removeClass('active');
         $(this).addClass('active');
         var lienSpy = $(this.hash);
         var scrollto = lienSpy.offset().top - 100;
         $('html, body').animate({
             scrollTop: scrollto
         }, 1500, 'easeInOutExpo');
 
     });

    $('.retour-btn').fadeOut();
    //gere le click sur le bouton click 
    $('.retour-btn').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    $('.slickCaroussel').slick({
        dots: true,
        prevArrow: false,
        nextArrow: false,
        infinite: true,
        autoplay: true,
        Speed: 300,
        autoplaySpeed: 10000,
        pauseOnHover: true,
        pauseOnFocus: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 525,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.box-container').slick({
        dots: true,
        infinite: true,
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        adaptiveHeight: true,
        Speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});