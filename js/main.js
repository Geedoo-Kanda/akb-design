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

    
});