function slideSwitch() {


    var $active = $('#slideshow .slideshow-images.active');

    if ($active.length == 0) $active = $('#slideshow .slideshow-images:last');

    var $next = $active.next().length ? $active.next() :
        $('#slideshow .slideshow-images:first');

    $active.addClass('last-active');

    $('.slideshow-bg').removeClass('extend');

    $next.css({ opacity: 0.0 })
        .addClass('active')
        .animate({ opacity: 1.0 }, 1000, function() {
            $active.removeClass('active last-active');
        });

    //test
    $('#slideshow .slideshow-images.active .slideshow-bg').addClass('extend');
}


function slideSwitch_2() {
    var $active = $('#slideshow_2 .slideshow-images.active');

    if ($active.length == 0) $active = $('#slideshow_2 .slideshow-images:last');

    var $next = $active.next().length ? $active.next() :
        $('#slideshow_2 .slideshow-images:first');

    $active.addClass('last-active');

    $next.addClass('active');

    $active.removeClass('active last-active');
}


$(function() {

    setInterval(function() {
        slideSwitch();
        slideSwitch_2();
    }, 4000);
});
