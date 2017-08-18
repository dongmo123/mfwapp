$(function() {
    $.get('assets/js/traveldata.json', function(data) {
        var userstr = '';
        for (var i = 0; i < data.length; i++) {
            userstr += `
                <li class="tn-item">
                    <div class="tn-image">
                        <a href="" title=""><img src="assets/images/uploads/travelnotes/${data[i].imgurl}" alt=""></a>
                    </div>

                    <div class="tn-wrapper">
                        <dl>
                            <dt><a href="" title="${data[i].title}">${data[i].title}</a><a class="tn-from-app" hidden="${data[i].app}" href="javascript:void(0);"><i></i>APP<img src="assets/images/icon/mfwapp-notes.png"></a></dt>
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
        //console.log(userstr);
        $('.tn-list').append(userstr);
    });
});