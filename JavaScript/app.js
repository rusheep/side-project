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