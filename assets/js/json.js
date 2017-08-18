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

    /*读取footer links数据*/
    /*$.get('assets/js/linksdata.json', function(data) {
        var linksstr = '';
        for (var i = 0; i < data.length; i++) {
            linksstr = `<a href="${data[i].url}" title="">${data[i].name}</a>`;
        }
        $('.ft-links').append(linksstr);
    });*/

});