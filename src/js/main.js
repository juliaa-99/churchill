$(document).ready(function(){

    var swiper1 = new Swiper(".js-banner-slider", {
        spaceBetween: 0,
        slidesPerView: 1,
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
    });
    var swiper2 = new Swiper(".js-contact-slider, .js-order-slider", {
        spaceBetween: 0,
        slidesPerView: 1,
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
    });

    $(".accordion__title").on("click", function(e) {

        e.preventDefault();
        var $this = $(this);

        if (!$this.hasClass("accordion-active")) {
            $(".accordion__content").slideUp(400);
            $(".accordion__title").removeClass("accordion-active");
        }

        $this.toggleClass("accordion-active");
        $this.next().slideToggle();
    });

    $('.js-plan').on('click', function(){
        $('.mdl').addClass('is-open');
    });

    $('.js-close').on('click', function(){
        $('.mdl').removeClass('is-open');
    });

    $('.js-marquee').marquee({
        duration: 7000,
        startVisible: true,
        duplicated: true,
        direction: 'right'
    });
    $('.js-marqueeTw').marquee({
        duration: 10000,
        startVisible: true,
        duplicated: true,
        direction: 'right'
    });

});	
