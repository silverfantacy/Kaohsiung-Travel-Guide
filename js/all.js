var locationData = '';
var xhr = new XMLHttpRequest();
xhr.open('get', 'http://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97', true);
xhr.send(null);
xhr.onload = function () {
    var content = JSON.parse(xhr.responseText);
    locationData = content.result.records;
    //   撈到資料後再執行你要執行的 function
    renderHTML()
}

function renderHTML() {
    // load已確認 locationData 有資料
    // 開始進行你想執行的動作
    var len = locationData.length;

    // console.log(len);

    // for(var i=0;i<len;i++){
    //     if( locationData[i].Zone == '三民區'){
    //     var name = locationData[i].Name;
    // var zone = locationData[i].Zone;
    // var time = locationData[i].Opentime;
    // var add = locationData[i].Add;
    // var tel = locationData[i].Tel;
    // var ticket = locationData[i].Ticketinfo;
    //     console.log(name);
    //     console.log(zone);
    //     console.log(time);
    //     console.log(add);
    //     console.log(tel);
    //     console.log(ticket);
    //     console.log(i);
    // }
    // }

    var area = document.getElementById('areaId');
    var mainH1 = document.querySelector('main h1');

    //一開始
    function first(e) {
        mainH1.innerHTML = '全部地區';
        var str = '';
        var list = document.querySelector('.list');
        for (var i = 0; i < len; i++) {
            str += '<li class="set">' + '<div class="place-img">' +
                '<img src="' + locationData[i].Picture1 + '">' +
                '<div class="place-gradient">' +
                '<h2>' + locationData[i].Name + '</h2>' +
                '<p>' + locationData[i].Zone + '</p>' +
                '</div>' +
                '</div>' +
                '<div class="information">' +
                '<p class="time">' + locationData[i].Opentime + '</p>' +
                '<p class="add">' + locationData[i].Add + '</p>' +
                '<p class="phone">' + locationData[i].Tel + '</p>' +
                '<p class="tag">' + locationData[i].Ticketinfo + '</p>' +
                '</div>' +
                '</li>';
            list.innerHTML = str;
        }
    }
    first();


    //選單
    function updateList(e) {
        var select = e.target.value;
        mainH1.innerHTML = select;
        var str = '';
        var list = document.querySelector('.list');
        for (var i = 0; i < len; i++) {
            if (locationData[i].Zone == select) {
                str += '<li class="set">' + '<div class="place-img">' +
                    '<img src="' + locationData[i].Picture1 + '">' +
                    '<div class="place-gradient">' +
                    '<h2>' + locationData[i].Name + '</h2>' +
                    '<p>' + locationData[i].Zone + '</p>' +
                    '</div>' +
                    '</div>' +
                    '<div class="information">' +
                    '<p class="time">' + locationData[i].Opentime + '</p>' +
                    '<p class="add">' + locationData[i].Add + '</p>' +
                    '<p class="phone">' + locationData[i].Tel + '</p>' +
                    '<p class="tag">' + locationData[i].Ticketinfo + '</p>' +
                    '</div>' +
                    '</li>';
                list.innerHTML = str;
            }

        }
    }
    area.addEventListener('change', updateList, false)

    //熱門
    var hotarea = document.querySelector('.popular ul ')

    function updateList2(e) {
        if (e.target.nodeName !== "LI") {
            return
        };
        var ha = e.target.textContent;
        mainH1.innerHTML = ha;
        var str = '';
        var list = document.querySelector('.list');
        for (var i = 0; i < len; i++) {
            if (locationData[i].Zone == ha) {
                str += '<li class="set">' + '<div class="place-img">' +
                    '<img src="' + locationData[i].Picture1 + '">' +
                    '<div class="place-gradient">' +
                    '<h2>' + locationData[i].Name + '</h2>' +
                    '<p>' + locationData[i].Zone + '</p>' +
                    '</div>' +
                    '</div>' +
                    '<div class="information">' +
                    '<p class="time">' + locationData[i].Opentime + '</p>' +
                    '<p class="add">' + locationData[i].Add + '</p>' +
                    '<p class="phone">' + locationData[i].Tel + '</p>' +
                    '<p class="tag">' + locationData[i].Ticketinfo + '</p>' +
                    '</div>' +
                    '</li>';
                list.innerHTML = str;
            }

        }

    }


    hotarea.addEventListener('click', updateList2, true)


}