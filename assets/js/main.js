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
    }, function() {
        $(this).children('.scrollBar').stop().animate({
            opacity: 0
        }, 400);
    });

    $('#activitynav').on('mousewheel', function(event) {
        //console.log(event.deltaX, event.deltaY, event.deltaFactor);
        event.preventDefault();
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

    /*锚点设置*/
    $('#toolbar .top').click(function() {
        $('body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    if ($('body').scrollTop() <= 500) {
        $('#toolbar .top').css('display', 'none');
    } else {
        $('#toolbar .top').css('display', 'block');
    }
    $('body').on('mousewheel', function() {
        if ($('body').scrollTop() <= 500) {
            $('#toolbar .top').css('display', 'none');
        } else {
            $('#toolbar .top').css('display', 'block');
        }
    });

    $(window).scroll(function() {
        //toolbar();
    });

    function toolbar() {
        var minbar = $(document).height() - $('#toolbar .toolbar-outer').offset().top;
        var dtoflen = $(document).height() - $('.footer').height() - 180;
        if (minbar <= 550) {
            $('.toolbar-outer').css({
                position: 'absolute',
                top: dtoflen + 'px'
            });
        } else {
            $('.toolbar-outer').css({
                position: 'fixed',
                top: 'auto'
            });
        }

    }
    /*筛选点击事件*/
    $('.open-search').click(function(e) {
        $('#tn-dropdown-pop').css('display', 'block');
        e.stopPropagation();
        e.preventDefault();
    });
    $('.close').click(function() {
        $('#tn-dropdown-pop').css('display', 'none');
    });
    /*阻止body默认*/
    $('#tn-dropdown-pop').click(function(e) {
        e.stopPropagation();
        e.preventDefault();
    });
    $('#tn-dropdown-pop').mouseleave(function(e) {
        $('body').click(function() {
            $('#tn-dropdown-pop').css('display', 'none');
        });
        e.stopPropagation();
        e.preventDefault();
    });;


    /*点击热门游记选项卡切换事件*/
    $('#tn_nav li').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        $.get('../../assets/js/json.js', {
            "type": $(this).attr('data-type')
        }, function(data) {
            console.log('新数据加载成功');
        }, 'json');
        $('#tn_content').stop().animate({
            opacity: 0
        }, 400, function() {
            $(this).stop().animate({
                opacity: 1
            }, 400);
        });
    });

    /*随机切换注册页背景*/
    function random(n, m) {
        return Math.floor(Math.random() * (n - m + 1) + m);
    }
    $('.fullscreen-bg').css('background-image', 'url(assets/images/uploads/regbg/' + random(1, 7) + '.jpg)');
    /*限制窗口大小*/
    /*$(window).resize(function() {
        $('body').width(900);
    });*/
    /*$(window).resize(function() {
        if ($(window).width() < 700) {
            $(window).resizeTo(document.body.clientWidth, 300);
        }
    });*/


    /*注册表单控制*/
    $('.checkphone').click(function() {
        $('.inner').hide(200);
        $('.bottom-link').hide(200);
        $('.add-info').show(200);
    });
    $('.bottom-link a').click(function() {
        console.log($(this).attr('data-type'));
        if ($(this).attr('data-type') == 0) {
            $('.bottom-link').html('还没有账号?<a href="#" data-type="1">马上注册</a>');
            $('#signup_form').hide(0);
            $('#login_form').show(0);
        } else {
            $('.bottom-link').html('还没有账号?<a href="#" data-type="0">马上注册</a>');
            $('#signup_form').show(0);
            $('#login_form').hide(0);
        }
    });
});