$(function() {
    /*初期表示*/
    $('.ChangeElem_Panel').hide();
    $('.ChangeElem_Panel').eq(0).show();
    $('.ChangeElem_Btn').eq(0).addClass('is-active');

    $(".is-active .btn-on").css({
        "marginTop": "-18px",
    });

    /*クリックイベント*/
    $('.ChangeElem_Btn').each(function() {
        $(this).on('click', function() {

            $(".btn-on").css({
                "marginTop": "0"
            });

            var index = $('.ChangeElem_Btn').index(this);
            $('.ChangeElem_Btn').removeClass('is-active');
            $(this).addClass('is-active');
            $('.ChangeElem_Panel').hide();
            $('.ChangeElem_Panel').eq(index).show();

            // ボタンの動き
            $(".is-active .btn-on").animate({
                "marginTop": "-18px",
            });
        });
    });
});
