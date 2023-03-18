// // fullpage引入

$(document).ready(function() {
    $('#fullpage').fullpage({

        // autoScrolling: false,
        onLeave: function(origin, destination, direction) {
            if(origin.index == 1 && direction == 'down') {
                fullpage_api.setScrollingSpeed(1500); 
                $('.black-box1').removeClass('animate__fadeOutUpBig');
                $('.black-box1').addClass('animate__fadeOutUpBig');
                $('.black-box2').removeClass('animate__fadeOutDownBig');
                $('.black-box2').addClass('animate__fadeOutDownBig');
            }

            $('#scrollToTopBtn').click(function() {
                // 使用 moveTo 方法將滾動條移動到第一個區段
                $.fn.fullpage.moveTo(1);
              });

        },
        afterLoad: function(origin, destination, direction) {
            if (destination.index === 1) {
              fullpage_api.setScrollingSpeed(700); // 恢復默认的滚动速度
              fullpage_api.setAutoScrolling(true);
            }
          },



    
    });
});

// =========================banner================================
var currentX = '';
var currentY = '';
var movementConstant = 0.0070; //值越大移動越大

$(document).mousemove(function (e) {
    if (currentX == '') currentX = e.pageX;
    var xdiff = e.pageX - currentX;
    currentX = e.pageX;
    // if (currentY == '') currentY = e.pageY;
    // var ydiff = e.pageY - currentY;
    // currentY = e.pageY;

    $('.bg').each(function (i, el) {
        var movement = (i + 1) * (xdiff * movementConstant);
        // var movementy = (i + 1) * (ydiff * movementConstant);
        var newX = $(el).position().left + movement;
        // var newY = $(el).position().top + movementy;
        var cssObj = {
            'left': newX + 'px',
            // 'top': newY + 'px'
        };

        // $(el).css('left', newX + 'px');
        // $(el).css('top', newY + 'px');
        $(el).css({
            "transform": "translate(" + newX + "px)"
        });
    });
});


// ===============================================

$(function () {
    $('.btn')
        .on('mouseenter', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({ top: relY, left: relX })
        })
        .on('mouseout', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({ top: relY, left: relX })
        });
});

// ================btn1================

$(document).ready(function() {
    $('.btn1').mouseover(function() {
        var originalHeight = $('.bg-change1').height();
        $('.bg-change1').css({
        'width': originalHeight +220* 20,
        'height': originalHeight +220* 20
        });
    }).mouseout(function() {
        $('.bg-change1').css({
        'width': '',
        'height': ''
        });
        });
    });

    // ================btn2================

$(document).ready(function() {
    $('.btn2').mouseover(function() {
        var originalHeight = $('.bg-change2').height();
        $('.bg-change2').css({
        'width': originalHeight +220* 20,
        'height': originalHeight +220* 20
        });
    }).mouseout(function() {
        $('.bg-change2').css({
        'width': '',
        'height': ''
        });
        });
    });

        // ================btn3================

$(document).ready(function() {
    $('.btn3').mouseover(function() {
        var originalHeight = $('.bg-change3').height();
        $('.bg-change3').css({
        'width': originalHeight +220* 20,
        'height': originalHeight +220* 20
        });
    }).mouseout(function() {
        $('.bg-change3').css({
        'width': '',
        'height': ''
        });
        });
    });

        // ================btn2================

$(document).ready(function() {
    $('.btn4').mouseover(function() {
        var originalHeight = $('.bg-change4').height();
        $('.bg-change4').css({
        'width': originalHeight +220* 20,
        'height': originalHeight +220* 20
        });
    }).mouseout(function() {
        $('.bg-change4').css({
        'width': '',
        'height': ''
        });
        });
    });