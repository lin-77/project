//展开收起
var bnt = document.getElementById("btn")
var ul = document.getElementById("dj_ipclass_ul")
bnt.onclick = function () {
    if (ul.style.display == 'none') {
        ul.style.display = 'block';
    } else if (ul.style.display == 'block') {
        ul.style.display = 'none';
    }
}
// 点击变色切换
/* $(document).ready(function(){
    $("cb_container dt").click(function(){
        if($(this).prop('checked')){
            $(this).parent('dd').addClass('checked');
        }
        else{
            $(this).parent('dd').removeClass('checked');
        }
    });
}); */
$('.gm-filter').on('click', '.cb_container  dd', function () {
    $(this).css('color', 'black');
    $(this).css('font-weight', 'bold');
    $(this).siblings().css('color', '#666');
    $(this).siblings().css('font-weight', '400');
})

//排序

var curNumb = 0;
$.each($('.sortdl dd'), function (index, item) {
    $(item).click(function (e) {
        console.log(item);
        e.preventDefault = true;
        console.log($(item).find('i').hasClass('flt-bottom'))
        if ($(item).find('i').hasClass('flt-bottom')) {
            $(item).find('i').addClass('flt-top');
            $(item).find('i').removeClass('flt-bottom');
        } else {
            $(item).find('i').addClass('flt-bottom');
            $(item).find('i').removeClass('flt-top');
        }
        if ($(item).hasClass('cur')) {
            return
        }
        $(item).addClass('cur');
        $('.sortdl dd').eq(curNumb).removeClass('cur');
        $('.sortdl dd').eq(curNumb).find('i').removeClass('flt-top');
        $('.sortdl dd').eq(curNumb).find('i').removeClass('flt-bottom');
        curNumb = index;
    })
})



// 获取数据
/* $(function (){
    $.ajax({
        url: 'data/goods.json',
        type: 'get',
        dataType:'json',
        cache:false,
        success: function (json){
            var results = '';
            $.each(json,function (index,item){
                results +=`<a href="./windex2.html" target="_blank" class="good-link">
                <img src="item.imgurl" alt="商品图" width="280" height="268">
                <div class="good-info">
                    <p class="good-name">item.title</p>
                    <div class="good-pri">
                        <span class="jd-num">20</span>
                        <span class="jd-union">聚豆</span>
                        <span class="jd-money">+97.00元</span>
                        <span class="old-pri">￥129.00</span>
                    </div>
                </div>
            </a>`
            });
            $('.good-list').html(results);
        }
    })
}) */
// 子菜单的事件

$.ajax({
    url: 'data/windex.json',
    type: 'get',
    cache: false,
    dataType: 'json',
    success: function (json) {
        var result = '';
        $.each(json, function (index, item) {
            result += ` <li>
                <a href="./windex2.html" target="_blank" class="good-link">
                    <img src="${item.imgurl}" alt="商品图" width="280" height="268">
                    <div class="good-info">
                        <p class="good-name">${item.title}</p>
                        <div class="good-pri">
                            <span class="jd-num">20</span>
                            <span class="jd-union">聚豆</span>
                            <span class="jd-money">+${item.price}元</span>
                            <span class="old-pri">￥${item.price * 1 + 32}.00</span>
                        </div>
                    </div>
                </a>
            </li>`;
        })
        $('.good-list ul').html(result);
    }
});
