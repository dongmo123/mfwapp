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
    /*限制缩小窗口宽度大小*/

    $(window).resize(function() {
        console.log($(window).width());
    });


    /*注册表单控制*/



    /*list.html*/
    /*header input*/
    $('#head_search_input').focus(function() {
        $('.head-search-wrapper').css({
            width: '380px'
        });
        $(this).stop().animate({
                width: '380px'
            },
            200);
        $('.icon-search').css('background-position', '-30px -140px');
    });
    $('#head_search_input').blur(function() {
        $('.head-search-wrapper').css({
            width: '108px'
        });
        $(this).stop().animate({
                width: '108px'
            },
            100);
        $('.icon-search').css('background-position', '-30px -110px')
    });
    /*hover 变色*/
    $('.list-header').hover(function() {
        $('.head-nav').removeClass('wcolor');
        $('.head-logo a').attr('class', 'mfw-logo');
    }, function() {
        $('.head-nav').addClass('wcolor');
        $('.head-logo a').attr('class', 'mfw-logo-list');
    });

    /*header 右下脚滑动动画*/
    $('.pic-from').hover(function() {
        //console.log($('.pic-from-pop')[0].scrollWidth);
        $('.pic-from-pop').css('visibility', 'visible').animate({
            width: $('.pic-from-pop')[0].scrollWidth + 'px'
        }, 200);
    }, function() {
        $('.pic-from-pop').animate({
            width: '0px'
        }, 200, function() {
            $('.pic-from-pop').css('visibility', 'hidden')
        });
    });

    /*热门目的地*/
    $('.list-hot .r-navbar a').mouseenter(function(e) {
        e.stopPropagation();
        e.preventDefault();
        $(this).addClass('on').siblings().removeClass('on');
        $('.list-hot .hot-list').eq($(this).index() / 2).removeClass('hide').siblings().addClass('hide');
    });

    /*list seasonmmds tiles*/

    $('.row-season .r-navbar a').mouseenter(function(e) {
        e.stopPropagation();
        e.preventDefault();
        $(this).addClass('on').siblings().removeClass('on');
        $('.row-season .seasonmmds .tiles').eq($(this).index() / 2).css('display', 'block').siblings().css('display', 'none');
    });

    /*list catemdds tiles*/
    $('.row-theme .r-navbar a').mouseenter(function(e) {
        e.stopPropagation();
        e.preventDefault();
        $(this).addClass('on').siblings().removeClass('on');
        $('.row-theme .catemdds .tiles').eq($(this).index() / 2).css('display', 'block').siblings().css('display', 'none');
    });

    /*下拉*/
    $('.show-arrdown').click(function() {
        $('body').animate({
            scrollTop: $('.header').height()
        }, 500);
        return false;
    });

    /*旅游攻略页面*/
    /*left nav*/
    $('.nav-item').hover(function() {
        $('.gonglve-nav').css('border-right-color', '#fff');
        $('.nav-item .nav-panel').eq($(this).index()).css('display', 'block');
    }, function() {
        $('.gonglve-nav').css('border-right-color', '#ddd');
        $('.nav-panel').css('display', 'none');
    });

    /*攻略页无缝轮播*/
    slider_gl();

    function slider_gl() {
        var firstimg = $('#slide_box li').first().clone();
        $('#slide_box').append(firstimg).width($('#slide_box li').length * $('#slide_box img').width());
        var imgWidth = $('#slide_box>li>a>img').width();
        var i = 0;
        var timer = null;
        autoPlay();

        function autoPlay() {
            timer = setInterval(function() {
                i++;
                moveimg();
            }, 4000);
        }

        function moveimg() {
            //如果是最后一张图片
            if (i == $('#slide_box li').length) {
                i = 1;
                $('#slide_box').css('left', '0px');
            }
            //移动图片
            $('#slide_box').stop().animate({
                left: i * -imgWidth
            }, 400);
            $('#thumb_box li').removeClass('on').eq(i).addClass('on');
            if (i == $('#thumb_box li').length) {
                $('#thumb_box li').removeClass('on').eq(0).addClass('on');
            }
        }
        //鼠标移入div之后，停止计时器
        $('#slide_box li').hover(function() {
            clearInterval(timer);
        }, function() {
            autoPlay();
        });

        $('#thumb_box li').click(function() {
            i = $(this).index();
            moveimg();
        });

    }

    /*gonglve_wrap*/
    $('.gonglve_wrap .tit').click(function() {
        var index = $(this).parent().index();
        // console.log($('.gonglve_wrap .drop-item').eq(index).attr('data-open'));
        if ($('.gonglve_wrap .drop-item').eq(index).attr('data-open') == 'close') {
            $('.gonglve_wrap .drop-item').eq(index).addClass('drop-open').attr('data-open', 'open').siblings().removeClass('drop-open').attr('data-open', 'close');
        } else {
            $('.gonglve_wrap .drop-item').eq(index).removeClass('drop-open').attr('data-open', 'close').siblings().removeClass('drop-open').attr('data-open', 'close');
        }
    });


    /*sales.html*/
    $('#sales-xxk li').click(function() {
        var index = $(this).index();
        console.log(index);
        $(this).addClass('on').siblings().removeClass('on');
        $('.letter-content ul').eq(index).addClass('show').siblings().removeClass('show')
    });
    $('#j-insertc a').click(function() {
        var value = $(this).text();
        // console.log(value);
        $('.trigger strong').html(value);
        return false;
    });
    $('.trigger').click(function() {
        if ($(this).attr('data-state') == 'close') {
            $(this).attr('data-state', 'open');
            $('#j-insertc').addClass('show');
        } else {
            $('#j-insertc').removeClass('show');
            $(this).attr('data-state', 'close');
        }
    });
    $('#search-sales').focus(function() {
        $('.city-panel').addClass('show');
        $('#j-insertc').removeClass('show');
        $('.trigger').attr('data-state', 'close');
    });
    $('#search-sales').blur(function() {
        $('.city-panel').removeClass('show');
    });
    /*$('#mdd-insert a').click(function() {
        console.log(32);
        var value = $(this).text();
        console.log(value);
        $('#search-sales').value(value);
        // return false;
    });*/


    $('#j_category .item').hover(function() {
        $('.category-outer').show(0);
        $(this).addClass('hover');
    }, function() {
        var index = $(this).index();
        $(this).removeClass('hover');
        $('.category-outer').hide(0);
    });
    $('.category-outer').mouseout(function() {
        $('.category-outer').hide(0);
        $(this).removeClass('hover');
    });


    /*carousel 轮播图>>>>>>>*/
    $('#carimgs').append($('#carimgs li').first().clone()).width($('#carimgs li').length * $('#carimgs li').width());
    carousel();

    function carousel() {
        var i = 0;
        var run = null;
        autoplay();
        var index = $('#carimgs li').length;
        var carwidth = $('#carimgs li').width();

        function autoplay() {
            run = setInterval(function() {
                i++;
                move();
            }, 5000);
        }

        function move() {
            if (i == index) {
                i = 1;
                $('#carimgs').css('left', '0px');
            }
            $('#carimgs').stop().animate({
                left: -i * carwidth
            }, 600);
            $('#diet li').removeClass('diet-active').eq(i).addClass('diet-active');
            if (i == $('#diet li').length) {
                $('#diet li').removeClass('diet-active').eq(0).addClass('diet-active');
            }
        }

        //鼠标移入div之后，停止计时器
        $('.carousel').hover(function() {
            clearInterval(run);
            $('#prev').show();
            $('#next').show();
        }, function() {
            autoplay();
            $('#prev').hide();
            $('#next').hide();
        });
        $('#prev').click(function() {
            if (i == 0) {
                i = index - 1;
                $('#carimgs').css('left', '-' + (index - 1) * carwidth + 'px');
            }
            i--;
            move();
        });
        $('#next').click(function() {
            i++;
            move();
        });
        $('#diet li').click(function() {
            i = $(this).index();
            move();
        });
    }
    /* /<<<<<carousel 轮播图*/
    /*carousel2 轮播图>>>>>>> show.html*/
    $('#carimgs2').append($('#carimgs2 li').first().clone()).width($('#carimgs2 li').length * $('#carimgs2 li').width());
    carousel2();

    function carousel2() {
        var i = 0;
        var run = null;
        autoplay();
        var index = $('#carimgs2 li').length;
        var carwidth = $('#carimgs2 li').width();

        function autoplay() {
            run = setInterval(function() {
                i++;
                move();
            }, 3000);
        }

        function move() {
            if (i == index) {
                i = 1;
                $('#carimgs2').css('left', '0px');
            }
            $('#carimgs2').stop().animate({
                left: -i * carwidth
            }, 400);
            $('#diet2 li').removeClass('diet-active').eq(i).addClass('diet-active');
            if (i == $('#diet2 li').length) {
                $('#diet2 li').removeClass('diet-active').eq(0).addClass('diet-active');
            }
        }

        //鼠标移入div之后，停止计时器
        $('.carousel').hover(function() {
            clearInterval(run);
            $('#prev2').show();
            $('#next2').show();
        }, function() {
            autoplay();
            $('#prev2').hide();
            $('#next2').hide();
        });
        $('#prev2').click(function() {
            if (i == 0) {
                i = index - 1;
                $('#carimgs2').css('left', '-' + (index - 1) * carwidth + 'px');
            }
            i--;
            move();
        });
        $('#next2').click(function() {
            i++;
            move();
        });
    }
    /* /<<<<<carousel 轮播图*/

    // 主题推荐hover
    $('#layout .type2 .tab li').mouseenter(function() {
        var index = $(this).index(0);
        $(this).children('a').addClass('on1').end().siblings().children('a').removeClass('on1');
        $('.mod-content .sales-cards').eq(index).addClass('show').siblings().removeClass('show');
    });

    $('#calender_wrap .tab-box ul').css('width', ($('#calender_wrap .tab-box li').width() + 35) * $('#calender_wrap .tab-box ul li').length + 'px');
    /*if ($('#calender_wrap .cal-tab').offset().left == 0) {
        $('#calender_wrap .tab-arrleft').hide();
    }else{

    }*/
    $('#calender_wrap .border').click(function() {
        $(this).css('border', '0').parent().addClass('on');
    });
    $('#stock_wrap .tj-type dd>a').click(function() {
        $(this).addClass('on').siblings().removeClass('on');
    });

    /*详情页产品介绍*/
    $('.detail-wrapper .tab li').click(function() {
        $(this).addClass('on').siblings().removeClass('on');
        $('.showflight').eq($(this).index()).removeClass('hide').siblings('.showflight').addClass('hide')
    });
    $('.m-reviews .tab li').click(function() {
        if ($(this).attr('data-num') == 0) {
            $('.empty-msg').removeClass('hide').siblings('.rev-list').addClass('hide')
        } else {
            $('.rev-list').removeClass('hide').siblings('.empty-msg').addClass('hide')
        }
    });
    var $root = $('html, body');
    $('a').click(function() {
        if ($(this).attr('href').indexOf('#') == 0) {
            $root.animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 500);
            return false;
        }
    });
    /*所有 滚动条 绑定 锚点事件*/
    toolbar();

    function toolbar() {
        var tt = $(window).scrollTop(),
            toolbart = $('#toolbar').offset().top,
            windowH = $(window).height(),
            footerH = $('body>.footer').height(),
            bodyH = $('body').height();
        /*toolbar绑定设置*/
        if (tt > (bodyH - windowH - footerH)) {
            $('#toolbar .toolbar-outer').removeClass('toolbarfix');
        } else {
            $('#toolbar .toolbar-outer').addClass('toolbarfix');
        }
        /*toolbar返回顶点按钮是否消除*/
        if (tt < 500) {
            $('#toolbar .top').addClass('tophide');
        } else {
            $('#toolbar .top').removeClass('tophide');
        }
    }
    $(window).scroll(function() {
        toolbar();
    });
    $('.ui-bookdrop .trigger').click(function() {
        if ($(this).parent().attr('class') == 'ui-bookdrop') {
            $(this).parent().addClass('drop-open');
        } else {
            $(this).parent().removeClass('drop-open');
        }
    });
    $('.s_popup .drop-menu li').click(function() {
        console.log($(this).find('span'));
        $(this).addClass('on').siblings().removeClass('on');
        $(this).parent().parent().siblings('.trigger').children('span').text($(this).find('span').text()).parent().parent().removeClass('drop-open');
    });


});