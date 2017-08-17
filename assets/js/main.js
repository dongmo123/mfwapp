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
        console.log($(this).index());
        $(this).addClass('tab-selected').siblings().removeClass('tab-selected');
    });
});