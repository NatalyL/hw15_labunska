/**
 * Created by Lab on 27.01.2016.
 */
function initMenu(buttonSelector, menuSelector) {
    $(buttonSelector).on('click', function(e) {
        e.preventDefault();
        $(menuSelector).slideToggle('slow', function() {
            $(menuSelector).toggleClass('mobile-down').css('display', '');
        });
    });
}

$(function () {

    //----------------------------------------------burger

    initMenu('#main-menu','#menu');
    initMenu('#catalog-menu','#accordion');


    //----------------------------------------Перемещение к секции
    $(function () {
        $('#menu a[href^="#"]').click(function(e){
            e.preventDefault();
            var destination = $($(this).attr('href')).offset().top;
            $('html, body').animate({scrollTop: destination}, 'slow');
        });
    });

    //sub-menu

    //accordion
    var allPanels = $('#accordion .sub-menu-side').hide();

    $('#accordion > li > a').click(function(e) {
        allPanels.slideUp();
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
            $(this).next().slideUp();
        } else {
            $('#accordion > li > a').removeClass('selected');
            $(this).addClass('selected');
            $('#accordion .sub-menu-side').slideUp();
            $(this).next().slideDown();
        }
        return false;
    });

    //-----------------------------------------------------tabs

    //When page loads...
    $('.tab_content').hide(); //Hide all content
    $('.tabs li:first').addClass('active').show(); //Activate first tab
    $('.tab_content:first').show(); //Show first tab content

    //On Click Event
    $('.tabs li').on('click', (function() {

        $('.tabs li').removeClass('active'); //Remove any "active" class
        $(this).addClass('active'); //Add "active" class to selected tab
        $('.tab_content').hide(); //Hide all tab content

        var activeTab = $(this).find('a').attr('href'); //Find the href attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active ID content
        return false;
    }));

    //slider-single

    $('#sliderOne').flexslider({
        animation: "slide"
    });

    //slider-multiple

    $('#sliderFew').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 210,
        itemMargin: 5,
        minItems: 2,
        maxItems: 4
    });

    //---------------------------------------------arrow-top

    $("a[href='#top']").click(function () {
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    })

    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 100) {
            $('.arrow-top').fadeIn();
        } else {
            $('.arrow-top').fadeOut();
        }
    });

    //---------------------------------------------------------popup

    //hide hider and popup_box
    $("#hider").hide();
    $("#popup_box").hide();

    //on click show the hider div and the message
    $("#showpopup").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $("#hider").fadeIn("slow");
        $('#popup_box').fadeIn("slow");
    });

    $("#popup_box").click(function (e) {
        e.stopPropagation();
    });

    //on click hide the message and the
    $(".buttonClose").click(function () {
        $("#hider").fadeOut("slow");
        $('#popup_box').fadeOut("slow");
    });

    $(document).click(function(e) {
        if (!(e.target.id === 'popup_box')) {
            $("#hider").fadeOut("slow");
            $("#popup_box").fadeOut("slow");
        }
    });

});
