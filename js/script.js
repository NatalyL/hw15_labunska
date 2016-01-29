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
    //burger

    initMenu('#main-menu','#menu');
    initMenu('#catalog-menu','#accordion');


    //$('.main-nav > ul > li > a').on('click', (function(e) {
    //    e.preventDefault();
    //    if ($(window).width() <= 979) {
    //        if ($(this).hasClass('selected')) {
    //            $(this).removeClass('selected');
    //            $(this).next().slideUp();
    //        } else {
    //            $('.main-nav > ul > li > a').removeClass('selected');
    //            $(this).addClass('selected');
    //            $('.main-nav .sub-menu').slideUp();
    //            $(this).next().slideDown();
    //        }
    //    }
    //}));

    //Перемещение к секции
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

    //tabs

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

    //sliders

    $('.flexslider').flexslider({
        animation: "slide"
    });

});

//$(window).resize(function () {
//
//    if ($(window).width() > 990) {
//        $('.sub-menu').removeAttr('style');
//    }
//
//});