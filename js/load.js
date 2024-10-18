(function ($) {
    "use strict";
    const cfg = {
        scrollDuration: 800, // smoothscroll duration
        mailChimpURL: ''   // mailchimp url
    };
    const $WIN = $(window);

    // Add the User Agent to the <html>
    // will be used for IE10/IE11 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; rv:11.0))
    const doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);

    /* Preloader
    * -------------------------------------------------- */

    const ssPreloader = function () {
        $WIN.addClass('ss-preload');
        $(window).on('load', function () {
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