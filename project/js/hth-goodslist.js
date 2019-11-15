$(function() {
	(function() {
		// ajax数据请求
		$.ajax({
			url: './data/hthgoods.json',
			type: 'get',
			dataType: 'json',
			success: function(json) {
				$(json).each(function(index, item) {
					//下面的a标签徐厚不上href属性 href="hth-goodsmsg.html"
					var str =
						`<li sign-url=${item.imgurl} class="saveCookie">
								<div class="i-mark">
									<span class="mark-txt">新品</span>
								</div>
								<a href="#" data-code=${item.code} class="getcode aclick">
									<div class="i-mark">
										<span id="" class="mark-txt">
											新品
										</span>
									</div>
									<img src="${item.imgurl}">
									<div class="goods-info">
										<p>${item.title}</p>
										<div class="goods-pri">
											<span class="new-pri">${item.price}</span>
											<span class="old-pri">${item.price}</span>
										</div>
									</div>
								</a>
							</li>`;
					$('.goodswrap ul').append(str);
				})
			}
		})
		//
		//获取code设置到本地储存
		//点击跳转到商品详情页面
		$('.goodswrap ul').on('click', '.aclick', function() {
			var cookieUrl = $(this).parent('.saveCookie').attr('sign-url'); //要存到cookie的数据
			document.cookie = "cookUrl=" + cookieUrl;
			var cookies = document.cookie;
			console.log(cookies);
			var itemstr = $(this).attr('data-code'); //->字符串 h-goods1
			//
			$(this).attr('href', './hth-goodsmsg.html'); //实现跳转
		});
		// 收起
		$('.navshow').on('click', '.nav-btn', function() {
			$(this).parent('.navshow').toggleClass('opened');
			if ($(this).parent('.navshow').hasClass('opened')) {
				$('.btn-shouqi').text('展开').next('i').addClass('icon-fx').removeClass('icon-normal');
			} else {
				$('.btn-shouqi').text('收起').next('i').addClass('icon-normal').removeClass('icon-fx');
			}
		});
		$('.navshow').on('click', 'dd', function() {
			$('.navshow dd').removeClass('col-black')
			$(this).addClass('col-black');

		});
		// 
		// 排序
	
		var arr = $('.nav-sort .icon-style'); //集合
		//默认
		$('.nav-sort').on('click', '.cur', function() {
			$(this).siblings().removeClass('show');
			$(arr).removeClass('icon-top').removeClass('icon-bot'); //清除i的样式
			$(this).addClass('show')
		})
		//排序
		$.each($('.nav-sort .box'), function(index, item) {
			// console.log(item);
			$(item).on('click',function() {
				$(item).siblings('li').removeClass('show');
				//清除所有样式
				$(item).siblings('li').find('i').removeClass('icon-bot');
				$(item).siblings('li').find('i').removeClass('icon-top');
				//添加样式
				$(item).addClass('show');
				if ($(item).find('i').hasClass('icon-bot')) {
					$(item).find('i').addClass('icon-top')
					$(item).find('i').removeClass('icon-bot')
				} else {
					$(item).find('i').addClass('icon-bot')
					$(item).find('i').removeClass('icon-top')
				}
			})
		})
		//
		$('.nav-sort').on('click', '.goodschose .check-btn', function() {
			$(this).addClass('show').siblings().removeClass('show');
			$(this).children('i').toggleClass('goods-checked');
			$(this).siblings().children('i').removeClass('goods-checked')
		})
		//
		// 分页器 active
		function pager() {
			var prev = 0;
			var arr3 = $('.pager .page_btn');
			$('.page_btn').click(function() {
				$(arr3).removeClass('active');
				$(this).addClass('active');
			})
		}
		pager();

	})()
})
