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

