$(document).ready(function () {
    //스크롤
    let pageWrap = document.querySelector('.pageWrap');
    let page = document.querySelectorAll('.page');
    let pageLength = page.length;
    let current = 0;
    let windowHeight = window.innerHeight;
    let footerHeight = $('.page.footer').innerHeight();
    let scrollHeight = 0;
    let animation = true;

    function ani() {
        animation = false;
        pageWrap.addEventListener('transitionend', function () {
            animation = true;
        });
    }

    function wheel() {
        if (current == pageLength - 1) {
            scrollHeight = windowHeight * (current - 1) + footerHeight;
        } else {
            scrollHeight = windowHeight * current;
        }
        $(".pageWrap").css('transform', 'translateY(-' + scrollHeight + 'px)');
        $(".page").removeClass('now');
        $(".page").eq(current).addClass('now on');

        $(".pageMenu li,.topBtn").removeClass('on');
        if (current == 0) {

        } else if (current > 0 && current < 4) {
            $(".pageMenu li").eq(current - 1).addClass('on');
        } else if (current == 4) {
            $(".pageMenu li").eq(2).addClass('on');
        } else if (current == 5) {
            $(".pageMenu li").eq(current - 2).addClass('on');
        } else if (current == 6) {
            $(".topBtn").addClass('on');
        }
    }

    function up() {
        if (current > 0 && $(".page").eq(current).children('.scrollBox').scrollTop() == 0 && animation == true) {
            current--;
            ani();
            wheel();
        }
    }

    function down() {
        if (current < pageLength - 1 && animation == true) {
            if ($(".page").eq(current).children('.scrollBox').scrollTop() + $(".page").eq(current).children('.scrollBox').innerHeight() >= $(".page").eq(current).children('.scrollBox').prop('scrollHeight')) {
                current++;
                ani();
                wheel();
            }
        }
    }
    window.addEventListener("wheel", function (e) {
        if (e.deltaY < 0) {
            up();
        } else {
            down();
        }
    });
    window.addEventListener('resize', function () {
        windowHeight = window.innerHeight;
        footerHeight = $('.page.footer').innerHeight();
        //windowHeight =  $(".page").eq(current).innerHeight();  
        wheel();
    })


    var UserAgent = navigator.userAgent;
    if (UserAgent.match(/iPhone|iPod|iPad|Macintosh|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null) { //모바일
        console.log('mobile js');
        var mobClass = document.querySelector('.container');
        mobClass.classList.add('is-mob');

        let touchHorizon, touchVertical;
        $(window).on('touchstart', function (e) {
            e.stopImmediatePropagation();
            startX = e.originalEvent.changedTouches[0].screenX;
            startY = e.originalEvent.changedTouches[0].screenY;
        });
        $(window).on('touchend', function (e) {
            endX = e.originalEvent.changedTouches[0].screenX;
            endY = e.originalEvent.changedTouches[0].screenY;
            touchHorizon = Math.abs(endX - startX);
            touchVertical = Math.abs(endY - startY);

            if (touchHorizon < touchVertical) {
                //console.log('세로세로');
                touchY = endY - startY;
                if (touchY <= 0) {
                    if (current < pageLength - 1 && animation == true) {
                        down();
                    }
                } else {
                    up();
                }
            }
        });

    } else { //PC 
        console.log('pc js');
        var windowWidth = $(window).width();
        if (windowWidth <= 768) {
            $('.container').addClass('view-mob');
        }
        window.addEventListener('resize', function () {
            if (windowWidth <= 768) {
                $('.container').addClass('view-mob');
            } else {
                $('.container').removeClass('view-mob');
            }
        })

    }



    $('.topBtn').on('click', function () {
        current = 0;
        wheel();
    });
    $('.contactBtn').on('click', function () {
        current = 5;
        wheel();
    });
    $('.mobMenuBtn, .customSelectBox, .mobAdressBtn').on('click', function (e) {
        $(this).toggleClass('on');
    });
    $('.customSelectBox .ulSelectList li ').on('click', function (e) {
        let txt = $(this).text();
        $(this).parents('.customSelectBox').find('span').text(txt);
        $(this).parents('.customSelectBox').addClass('active');
    });
    $(".pageMenu button").on('click', function () {
        current = $(this).parents('li').index() + 1;
        if (current == 4) {
            current++;
        }
        wheel(current);
    })
    $('.pageMenu').on('wheel', function (e) {
        e.stopImmediatePropagation();
    });




    let inputFocus = function (eventInput) {
        for (var i = 0; i < eventInput.length; i++) {
            (function (now) {
                let pp = eventInput[now].closest('.inputBox');
                eventInput[now].onfocus = function () {
                    pp.classList.add('focus');
                }
                eventInput[now].onblur = function () {
                    pp.classList.remove('focus');
                }
                eventInput[now].oninput = function () {
                    if (eventInput[now].value == "") {
                        pp.classList.remove('keyup');

                    } else {
                        pp.classList.add('keyup');
                    }
                }
            })(i)
        }
    }
    const commentInput = document.querySelectorAll('.inputBox input,.inputBox textarea');
    inputFocus(commentInput);



});