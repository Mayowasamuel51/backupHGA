(function ($) {
    "use strict";
    const cfg = {
        scrollDuration: 800, // smoothscroll duration
        mailChimpURL: ''   // mailchimp url
    };
    const $WIN = $(window);
    /* Preloader
    * -------------------------------------------------- */
    const ssPreloader = function () {
        $("html").addClass('ss-preload');
        $WIN.on('load', function () {
            // will first fade out the loading animation 
            $("#loader").fadeOut("slow", function () {
                // will fade out the whole DIV that covers the website.
                $("#preloader").delay(300).fadeOut("slow");
            });
            // for hero content animations 
            $("html").removeClass('ss-preload');
            $("html").addClass('ss-loaded');
        });
    };
    /* Initialize
    * ------------------------------------------------------ */
    (function ssInit() {
        ssPreloader();
    })();

})(jQuery);