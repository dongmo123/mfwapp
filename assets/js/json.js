$(function() {
    /*读取热门游记-用户日记*/
    $.get('assets/js/traveldata.json', function(data) {
        var userstr = '';
        var i = 0; //第一页
        var maxnum = i + 10; //每页10条数据
        for (i; i < maxnum; i++) {
            userstr += `
                <li class="tn-item">
                    <div class="tn-image">
                        <a href="" title=""><img src="assets/images/uploads/travelnotes/${data[i].imgurl}" alt=""></a>
                    </div>

                    <div class="tn-wrapper">
                        <dl>
                            <dt>
                                <a href="" title="${data[i].title}">${data[i].title}</a>
                                <a class="tn-from-app" href="javascript:void(0);" style="display:${data[i].app?'inline':'none'}">
                                    <i></i>APP
                                    <img src="assets/images/icon/mfwapp-notes.png">
                                </a>
                            </dt>
                            <dd><a href="" title="${data[i].content}">${data[i].content}</a></dd>
                        </dl>
                        <div class="tn-extra">
                            <span class="tn-place">
                                <i></i>
                                <a href="" title=""><span>${data[i].place}</span></a>，by
                            </span>
                            <span class="tn-user">
                                <a href="" title=""><img src="./assets/images/uploads/icon-user/${data[i].usericon}" alt="">${data[i].username}</a>
                            </span>
                            <span class="tn-nums"><i></i>${data[i].nums}</span>
                            <span class="tn-ding">
                                ${data[i].ding}<a href="" title=""></a>
                            </span>
                        </div>
                    </div>
                </li>
            `;
        }
        $('.tn-list').append(userstr);
    });
    $.get('assets/js/listseason.json', function(data) {
        var listseason = '';
        for (var i = 0; i < data.length; i++) {
            listseason += `
                <div class="tiles" data-month="${data[i].id}">
                    <div class="item col3">
                        <a href="" title="">
                            <img src="assets/images/uploads/list-season/${data[i].content[0].imgurl}">
                            <div class="title" data-city="${data[i].content.city}">${data[i].content[0].city}</div>
                        </a>
                    </div>
                    <div class="item col3">
                        <a href="" title="">
                            <img src="assets/images/uploads/list-season/${data[i].content[1].imgurl}">
                            <div class="title">${data[i].content[1].city}</div>
                        </a>
                    </div>
                    <div class="item col3">
                        <a href="" title="">
                            <img src="assets/images/uploads/list-season/${data[i].content[2].imgurl}">
                            <div class="title">${data[i].content[2].city}</div>
                        </a>
                    </div>
                    <div class="item col4">
                        <a href="" title="">
                            <img src="assets/images/uploads/list-season/${data[i].content[3].imgurl}">
                            <div class="title">${data[i].content[3].city}</div>
                        </a>
                    </div>
                    <div class="item col4">
                        <a href="" title="">
                            <img src="assets/images/uploads/list-season/${data[i].content[4].imgurl}">
                            <div class="title">${data[i].content[4].city}</div>
                        </a>
                    </div>
                    <div class="item col4">
                        <a href="" title="">
                            <img src="assets/images/uploads/list-season/${data[i].content[5].imgurl}">
                            <div class="title">${data[i].content[5].city}</div>
                        </a>
                    </div>
                    <div class="item col4">
                        <a href="" title="">
                            <img src="assets/images/uploads/list-season/${data[i].content[6].imgurl}">
                            <div class="more">
                                <span>更多 <i></i></span>
                            </div>
                        </a>
                    </div>
                </div>
            `;
        }
        $('.row-season .seasonmmds').append(listseason);
    });

    $.get('assets/js/list.json', function(data) {
        // console.log(data['theme']['year'][0].img);
        var list = '';
        list += `<div class="tiles" data-theme="year">`;
        for (var i = 0; i < data['theme']['year'].length; i++) {
            list += `
                <div class="item col4">
                    <a href="" title="">
                        <img src="assets/images/uploads/list-theme/${data['theme']['year'][i].img}">
                        <div class="title">${data['theme']['year'][i].title}</div>
                    </a>
                </div>
            `;
        }
        list += `</div>`;

        list += `<div class="tiles" data-theme="season">`;
        for (var i = 0; i < data['theme']['season'].length; i++) {
            list += `
                <div class="item col4">
                    <a href="" title="">
                        <img src="assets/images/uploads/list-theme/${data['theme']['season'][i].img}">
                        <div class="title">${data['theme']['season'][i].title}</div>
                    </a>
                </div>
            `;
        }
        list += `</div>`;

        list += `<div class="tiles" data-theme="chuxing">`;
        for (var i = 0; i < data['theme']['chuxing'].length; i++) {
            list += `
                <div class="item col4">
                    <a href="" title="">
                        <img src="assets/images/uploads/list-theme/${data['theme']['chuxing'][i].img}">
                        <div class="title">${data['theme']['chuxing'][i].title}</div>
                    </a>
                </div>
            `;
        }
        list += `</div>`;
        list += `<div class="tiles" data-theme="hoilday">`;
        for (var i = 0; i < data['theme']['hoilday'].length; i++) {
            list += `
                <div class="item col4">
                    <a href="" title="">
                        <img src="assets/images/uploads/list-theme/${data['theme']['hoilday'][i].img}">
                        <div class="title" data-title="${data['theme']['hoilday'][i].title}">${data['theme']['hoilday'][i].title}</div>
                    </a>
                </div>
            `;
        }
        list += `</div>`;
        $('.row-theme .catemdds').append(list);



    });

    function random(n, m) {
        return Math.floor(Math.random() * (n - m + 1) + m);
    }
    /*$('#tianchange').click(function() {
        var numstr = {};
        for (var i = 0; i < 4; i++) {
            var index = random(0, 5);
            console.log(i + '--' + index);
            if (numstr.indexOf(index) !== -1) {
                numstr[i] = index;
                i++;
            } else {
                // i--;
            }
        }
        console.log(numstr);
    });*/

    $('.page_loader').click(function() {
        $(this).html('加载中. . .');
        $(this).addClass('loading');
        var gong = '';
        for (var i = 0; i < 3; i++) {
            gong += '<div class="feed-item" data-type="2">';
            gong += '    <a href="" title="">';
            gong += '        <div class="bar clearfix">';
            gong += '            <span class="stat">';
            gong += '                <span class="num">161</span> 蜂蜂体验过';
            gong += '                <i class="icon-cart"></i>';
            gong += '            </span>';
            gong += '            <span class="type">';
            gong += '                <i class="icon-sales"></i>来自';
            gong += '                <strong>自由行攻略</strong>';
            gong += '            </span>';
            gong += '        </div>';
            gong += '        <div class="title">';
            gong += '            看长白山天池的最佳季节，你还等什么！（附景点和路线推荐）';
            gong += '        </div>';
            gong += '        <div class="txt">';
            gong += '        在我们东北人心里，长白山一直都是一座神秘莫测的大神山。她是满族先民的发祥地，是爱新觉罗皇室的龙兴之地。 这里林木葱郁，浅浅的溪水环抱于森林周身，就连空气中也带着湿润的水汽，漂浮在空气中，更增一种朦胧又神秘的美感;这里还有让人流连忘返的纯正朝鲜文化与地道满足传统，厚重又有神的文化底蕴让你不仅仅是来此...';
            gong += '        </div>';
            gong += '        <div class="imgs clearfix">';
            gong += '            <img src="assets/images/uploads/gonglve-imgs/ziyou-1.jpeg">';
            gong += '            <img src="assets/images/uploads/gonglve-imgs/ziyou-2.jpeg">';
            gong += '            <img src="assets/images/uploads/gonglve-imgs/ziyou-3.jpeg">';
            gong += '            <span class="ext-r">144367浏览</span>';
            gong += '        </div>';
            gong += '    </a>';
            gong += '</div>';
            gong += '<div class="hr"></div>';
        }
        $('.gl-post>div').append(gong);
        $(this).html('<span>加载更多</span><i></i>');
        $(this).removeClass('loading');
    });


    /*sales.html  换一个*/
    $('#layout #saleschange').click(function() {
        var imglist = [
            "tiantian1.png",
            "tiantian2.jpeg",
            "tiantian3.jpeg",
            "tiantian4.gif"
        ];
        var list = [{
            "img": imglist[random(0, 3)],
            "title": "上海直飞厦门3-5日自由行（市中心3-5星酒店+鼓浪屿酒店+机票酒店随心配+精美自助早餐+托运15kg）",
            "price": random(100, 10000)
        }, {
            "img": imglist[random(0, 3)],
            "title": "南京直飞大阪5天往返含税机票（吉祥航空+预售至2017年底+赠WiFi+可选签证/保险+领券减50/第二人减200",
            "price": random(100, 10000)
        }, {
            "img": imglist[random(0, 3)],
            "title": "西安直飞巴厘岛7-8天自由行（住希尔顿洲际阿雅娜叶子宝格丽+赠接送机电话卡+SPA或乌布游+蜜月亲子定制）",
            "price": random(100, 10000)
        }, {
            "img": imglist[random(0, 3)],
            "title": "成都直飞马尔代夫港丽岛6-7天自由行（第一家180°海底餐厅/最“靓”的岛/VIP休息室免费餐/儿童吃住/看护中心免费+双岛享受+免费多尼船往返）",
            "price": random(100, 10000)
        }];
        var sales = '';
        for (var i = 0; i < 4; i++) {
            sales += `
                <li class="item">
                    <a href="show.html">
                        <div class="image">
                            <img src="assets/images/uploads/sales/${list[i].img}">
                        </div>
                        <div class="caption">
                            <h3>${list[i].title}</h3>
                            <span class="price">
                                <b>￥${list[i].price}</b>起
                            </span>
                        </div>
                    </a>
                </li>
            `;
        }
        $(this).parent('.mod-hd').siblings('.mod-bd').children('.sales-cards').html(sales);
    });

});