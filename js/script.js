$(function() {
    $(".jcarousel").jcarousel({
            wrap: 'circular'
        })
        .jcarouselAutoscroll({
            interval: 4000,
            target: '+=1',
            autostart: true
        });


    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });

    $('.jcarousel-pagination').on('jcarouselpagination:active', 'a', function() {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function() {
            $(this).removeClass('active');
        })
        .on('click', function(e) {
            e.preventDefault();
        })
        .jcarouselPagination({
            item: function(page) {
                return '<a href="#"></a>';
            }

            // 'carousel': $('.jcarousel')
        });
    $('#standard-dropdown').selectBox({
        keepInViewport: false
    });

    $('.niceCheck').mousedown(
        function() {
            changeCheck($(this));
        });



    $('ul.menu > li > a').hover(function() {
        $(this).stop().animate({
            backgroundColor: '#03C',
            color: 'red'
        }, 500);
    }, function() {
        $(this).stop().animate({
            backgroundColor: '#6633FF',
            color: 'white'
        }, 500);

    });
    $('.drop_menu').hover(function () {
      $(this).children('.sub_menu').slideDown(500);
    }, function () {
      $(this).children('.sub_menu').slideUp(500);
    } );
});
