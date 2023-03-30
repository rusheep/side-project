
// ===========================scroll=====================================

document.addEventListener('DOMContentLoaded', function() {
    // 在這裡編寫需要在 HTML 文件完全載入後執行的 JavaScript 代碼
    // 取得指定div的位置和大小
    var divTop1 = document.getElementById('myDiv1').getBoundingClientRect().top;
    var div2Top = document.getElementById('myDiv2').getBoundingClientRect().top;
    console.log (window.pageYOffset);
    console.log (divTop1);
    // 監聽網頁滾動事件
    window.addEventListener('scroll', function() {
    // 當網頁頂部觸碰到指定div時
    if (window.pageYOffset >= divTop1 + (document.getElementById('myDiv1').offsetHeight * 0.15)) {

        // 計算div往左移出的距離
        var distance = window.pageYOffset - divTop1;
        // 移出距離不超過div寬度
        distance = Math.min(distance, document.getElementById('myDiv1').offsetWidth);
        // 設定div的位移
        document.getElementById('myDiv1').style.transform = 'translateX(' + (-distance) + 'px)';


        // 計算div2往右移出的距離
        var distance2 = window.pageYOffset - div2Top;
        // 移出距離不超過div2寬度
        distance2 = Math.min(distance2, document.getElementById('myDiv2').offsetWidth);
        // 設定div2的位移
        document.getElementById('myDiv2').style.transform = 'translateX(' + distance2 + 'px)';


    } else {
        document.getElementById('myDiv1').style.transform = 'translateX(0)';
        document.getElementById('myDiv2').style.transform = 'translateX(0)';
    }
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

$(function() {
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

$(function() {
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

$(function() {
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

$(function() {
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