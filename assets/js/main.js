$(function() {
    /*下拉菜单*/
    $('.head-nav-dropdown').hover(function() {
        $(this).children('.dropdown-menu').stop().animate({
            opacity: 1
        }, 500);
    }, function() {
        $(this).children('.dropdown-menu').stop().animate({
            opacity: 0
        }, 500);
    });
    /*轮播图菜单*/
    function getBanner() {
        $('#banner').css('height', $('#banner .first').height() + 'px');
        $('#banner .show-nav').css('margin-top', -$('.show-nav').height() / 2 + 'px');
    }
    getBanner();
    $(window).resize(function() {
        getBanner()
    });

    //banner轮播图
    banner();

    function banner() {
        var run = null;
        var i = 0;
        autoPlay();
        var index = $('#banner>.show-image>li').length;

        function autoPlay() {
            run = setInterval(function() {
                i++
                changeImg();
            }, 5000);
        }

        function changeImg() {
            if (i == index) {
                i = 0;
            }
            $('#banner>.show-image>li').eq(i).stop().fadeIn(600).siblings().fadeOut(600);
            $('#banner>.show-nav>li').eq(i).stop().addClass('active').siblings().removeClass('active');
        }

        //控件
        $('#banner>.show-image>li').hover(function() {
            clearInterval(run);
        }, function() {
            autoPlay();
        });
        $('#banner>.show-nav>li').click(function() {
            i = $(this).index();
            changeImg();
        }).hover(function() {
            clearInterval(run);
        }, function() {
            autoPlay();
        });;
    }


    /*search 单选按钮*/
    $('.searchtab ul li').click(function() {
        $(this).addClass('tab-selected').siblings().removeClass('tab-selected');
    });

    //aside traveller_slide
    traveller();

    function traveller() {
        var run = null;
        var i = 0;
        autoPlay();
        var imgWidth = $('#traveller_slide .slide-ul li').width();
        var index = $('#traveller_slide .slide-ul li').length;

        function autoPlay() {
            run = setInterval(function() {
                i++
                changeImg();
            }, 5000);
        }

        function changeImg() {
            if (i == index) {
                i = 0;
            }
            $('#traveller_slide .slide-ul').stop().animate({
                left: -i * imgWidth + 'px'
            }, 400);
            $('#traveller_slide .slide-ol li').eq(i).stop().addClass('active').siblings().removeClass('active');
        }

        //控件
        $('#traveller_slide .slide-ul').hover(function() {
            clearInterval(run);
        }, function() {
            autoPlay();
        });
        $('#traveller_slide .slide-ol li').click(function() {
            i = $(this).index();
            changeImg();
        }).hover(function() {
            clearInterval(run);
        }, function() {
            autoPlay();
        });;
    }

    /*----------aside 我的活动-滚动条---------------*/

    $('#activitynav').hover(function() {
        $(this).children('.scrollBar').stop().animate({
            opacity: 0.8
        }, 400);
        /*阻止浏览器滚动条默认滑动*/
        $('body').on('mousewheel', function(event) {
            return false;
        });
    }, function() {
        $(this).children('.scrollBar').stop().animate({
            opacity: 0
        }, 400);
    });

    $('#activitynav').on('mousewheel', function(event) {
        //console.log(event.deltaX, event.deltaY, event.deltaFactor);
        var Top = parseInt($(this).children('ul').css('top'));
        var sTop = parseInt($(this).children('div').css('top'));
        var maxTop = $(this).children('ul').height() - $(this).height();
        var maxsTop = $(this).height() - $(this).children('div').height();
        Top = Top + 50 * event.deltaY;
        /*同步比例*/
        var btop = Math.abs(Top / maxTop) * maxsTop;
        if (Top <= -maxTop) {
            Top = -maxTop;
            btop = maxsTop;
        }
        if (Top >= 0) {
            Top = 0;
            btop = 0;
        }
        $(this).children('ul').css({
            top: Top + 'px'
        });
        $(this).children('div').css({
            top: btop + 'px'
        });
    });

    /*爆款热卖hover*/
    $('.item-qiang a').hover(function() {
        $(this).children('h3').stop().animate({
                height: 80 + 'px',
                marginTop: -35 + 'px'
            },
            200);
    }, function() {
        $(this).children('h3').stop().animate({
                height: 40 + 'px',
                marginTop: 5 + 'px'
            },
            200);
    });

});