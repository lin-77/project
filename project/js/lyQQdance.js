$(function (){
    // 加载商品列表的数据
    $.ajax({
        url: 'data/goods.json',
        type: 'get',
        dataType: 'json',
        cache: false,
        success: function (json){
            console.log(json);
            var results = '';
            $.each(json,function (index,item){
                results += `<li class="goods" code="${item.code}">
			<a href="xiangqingpage.html" class="bounce">
						<img src="${item.imgurl}"/>
						<div class="good-info">
							<p class="good-name">${item.title}</p>
							<div class="good-pri">
								<span class="gnum">${item.judou}</span>
								<span class="gjudou">聚豆</span>
								<span class="gmoney">${item.price}</span>
								<span class="oldmoney">${item.oprice}</span>
							</div>
						</div>
					</a>
					</li>`;
            });
        $('.content').html(results);
        }
    });
    
    
    
    
    $('.content').on('click','.goods',function (){
        // 获取点击商品的编号
        var code = $(this).attr('code');
        // console.log(code);
        // 获取本地存储数据（数组）
        // if (localStorage.getItem('goods')) {
        //     var codeArr = JSON.parse( localStorage.getItem('goods') ).code;
        // } else {
        //     var codeArr = [];
        // }
        //
        // codeArr.push(code);//添加数据
        //
        // var jsonStr = JSON.stringify( {"code": codeArr} );//对象转成 json 字符串
        var jsonStr = JSON.stringify( {"code": code} );
        // 更新本地存储数据
        localStorage.setItem('goods',jsonStr);

        // alert('成功加入购物车！');
    
    
    
    
    
     });
    });
     