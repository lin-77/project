// var left=document.querySelector(".good-imgs");
// var mask = document.querySelector(".mask");
// var right = document.querySelector(".right");
// // var maxImg = right.querySelector("img");
// var popup=document.querySelector(".popup");
// var close=document.querySelector(".popup-close");
// var joincart=document.querySelector(".joincart");
// var agbtn=document.querySelector(".agbtn");
// var reduce=document.querySelector(".reduce");
// var increase=document.querySelector(".increase");
// var nummidbtn=document.querySelector(".nummidbtn");
//放大镜
if (localStorage.getItem('goods')) {
	// 本地存储中的商品编码数组
	var codeArr = JSON.parse(localStorage.getItem('goods')).code;
	console.log(codeArr);
	if (codeArr.length > 0) {//有数据
		// 展示购物车商品
		$.ajax({
			url: 'data/goods.json',
			type: 'get',
			cache: false,
			dataType: 'json',
			success: function (json) {
				var results = '';
				var code = JSON.parse(localStorage.getItem('goods')).code;
				// $.each(codeArr, function (index, code) {
				$.each(json, function (index, item) {
					if (code == item.code) {
						results = `		
		<div class="mainwrap">
		<!--	标题-->
		<div class="comm-tit">
			<a href="#" class="index-link">商城首页></a>
			<a href="#" class="index-link">包包></a>
			<a href="#" class="index-link">单肩包></a>
			<i>${item.title}</i>
		</div>
		
		<div id="detail-main">
	<!--商品展示-->
	<div class="product-intro clearfix">
		<!--细节图展示-->
		<div class="fl product-prev">
			<div class="good-imgs">
				<ul>
					<li class="picshow"><a href="#"><img src="${item.imgurl}"/></a>
						
					</li>
					
				</ul>
				<div class="mask">
							
						</div>
				
			<!--	放大镜-->
				<div class="right">
			<img src="${item.bigimg}">
		</div>
			</div>
			<div class="picdetails">
				<ul>
					<li class="active"><a href="#"><img src="${item.smallimg}"/></a></li>
					<li class="active"><a href="#"><img src="${item.smallimg}"/></a></li>
				</ul>
			</div>
		</div>
		
		<!--商品信息-->
		<div class="fl product-info">
			<h3 class="pord-name">【可定制】十周年系列布袋包-翅膀款</h3>
			<div class="pord-tips">支持七个字以内的文字定制，如有需要请在订单备注中留言，定制商品下单后20天内发货。</div>
			<div class="pord-price clearfix">
				<span class="fl pord-dispri">
					￥
					<strong>${item.price}</strong>
				</span>
				<span class="fl pord-opri">
					￥${item.oprice}
				</span>
			</div>
			<div class="pord-saleinfo clearfix">
				<div class="fl pord-salebox">
				<i class="ico-judou">聚豆</i>
				<span>
					可用20聚豆抵扣2.00元
				</span>	
				</div>
				
			</div>
			<div class="pord-gift clearfix">
				<i class="gift-mark">赠品</i>
				<span>幻彩微型礼盒</span>
			</div>
			<div class="pord-detail clearfix">
				<div class="fl pord-sold">
					已售:
					<span>
						377
					</span>
				</div>
				<div class="fl pord-total">
					累计评价:
					<span class="commnum">
						36
					</span>
				</div>
				<div class="fr pord-star">
					<i class="ico-detail i-star10"></i>
					<span>
						5.0
					</span>
				</div>
				
			</div>
			<div id="main_spec">
					<div class="pord-color clearfix">
						<label class="fl">颜色</label>
						<ul class="fl">
							<li attrid="3">
								<div class="pord-sel">
									黄色
								</div>
							</li>
							
							<li attrid="3">
								<div class="pord-sel">
									蓝色
								</div>
							</li>
							
							<li attrid="3">
								<div class="pord-sel">
									粉色
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div id="main_btn">
					<div class="pord-num clearfix">
						<label class="fl">数量</label>
						<div class="fl m142">
							<a href="#" class="fl num-plus reduce">
								<strong class="ico-detail">-</strong>
							</a>
							<input type="text" name="" class="fl nummidbtn" value="1" />
							<a href="#" class="fl num-plus increase">
								<strong class="consum">+</strong>
							</a>
						</div>
						<span class="pord-stock">
							(库存充足)
						</span>
					</div>
					<div class="pord-btn clearfix">
						<a href="#" class="fl joincart" code="${item.code}">加入购物车</a>
						<a href="#" class="fl buy-btn" code="${item.code}">立即购买</a>
						<a href="#" class="fl collect-btn">
							<i class="ico-detail ico-collect"></i>
							<span >
								收藏
							</span>
						</a>
						<a href="#" class="fl collect-btn" style="display: none;">
							<i class="ico-detail ico-collect"></i>
							<span >
								已收藏
							</span>
						</a>
					</div>
					
				</div>
		</div>
	</div>
	<div class="product-detail">
		<div class="pord-tab">
			<ul>
				<li class>商品详情
					<i class="tabline"></i>
				</li>
				<li>用户点评<span>(36)</span>
					<i></i>
				</li>
				<li>联系商家
				<i></i></li>
			</ul>
		</div>
		<div class="tabcont">
		<!--	商品详情-->
			<div class="pordcont">
			<!--	单品详情参数-->
			<div class="parameter">
				<ul>
					<li>
						<label class="fl">商品名称:</label>
						<span class="fl par-name">${item.title}</span>
					</li>
					<li>
						<label class="fl">店铺:</label>
						<span class="fl par-name">优T定制</span>
					</li>
					<li>
						<label class="fl">上架时间:</label>
						<span class="fl par-name">2019-08-27</span>
					</li>
					<li>
						<label class="fl">商品毛重:</label>
						<span class="fl par-name">40g</span>
					</li>
					<li>
						<label class="fl">商城:</label>
						<span class="fl par-name">炫舞</span>
					</li>
					<li>
						<label class="fl">周边分类:</label>
						<span class="fl par-name">包包/单肩包</span>
					</li>
				</ul>
			</div>
			<div class="detailbox">
				<p><img src="${item.xpage}"/></p>
				<p><img src="${item.xpage}"/></p>
			</div>
			
			</div>
		</div>
	</div>
			
		</div>
		</div>
                                `;
					}
				})
				//);
				$('.wrap').html(results);
				var left = document.querySelector(".good-imgs");
				var mask = document.querySelector(".mask");
				var right = document.querySelector(".right");
				var maxImg = right.querySelector("img");
				var popup = document.querySelector(".popup")
				var close = document.querySelector(".popup-close")
				var joincart = document.querySelector(".joincart");
				var agbtn = document.querySelector(".agbtn");
				var reduce = document.querySelector(".reduce");
				var increase = document.querySelector(".increase");
				var nummidbtn = document.querySelector(".nummidbtn");
				//放大镜
				left.onmouseenter = function () {
					mask.style.display = 'block';
					right.style.display = 'block';
				}
				left.onmouseleave = function () {
					mask.style.display = 'none';
					right.style.display = 'none';
				}
				left.onmousemove = function (ev) {
					var e = ev || window.event;
					var maskL = e.clientX - offset(left).left - mask.clientWidth * 2 / 3;//蒙版的left值
					var maskT = e.clientY + document.documentElement.scrollTop - offset(left).top - mask.clientHeight * 2 / 3;//蒙版的top值

					// 边界值判断
					if (maskL <= 0) {//最小值
						maskL = 0;
					}
					if (maskL >= left.clientWidth - mask.clientWidth) {// 最大值
						maskL = left.clientWidth - mask.clientWidth;
					}
					if (maskT <= 0) {//最小值
						maskT = 0;
					}
					if (maskT >= left.clientHeight - mask.clientHeight) {// 最大值
						maskT = left.clientHeight - mask.clientHeight;
					}
					mask.style.left = maskL + 'px';
					mask.style.top = maskT + 'px';

					// 移动大图(和mask移动方向相反)
					var scaleX = maskL / (left.clientWidth - mask.clientWidth);
					var scaleY = maskT / (left.clientHeight - mask.clientHeight);

					var imgL = scaleX * (maxImg.clientWidth - right.clientWidth);
					var imgT = scaleY * (maxImg.clientHeight - right.clientHeight);
					maxImg.style.left = -imgL + 'px';
					maxImg.style.top = -imgT + 'px';
				}

				// 封装获取元素到body的距离
				function offset(dom) {
					var l = 0;
					var t = 0;
					var bdl = dom.clientLeft;//元素的左边框
					var bdt = dom.clientTop;//元素的上边框
					while (dom) {
						l = l + dom.offsetLeft + dom.clientLeft;
						t = t + dom.offsetTop + dom.clientTop;
						dom = dom.offsetParent;
					}
					return {
						left: l - bdl,
						top: t - bdt
					};
				}
				//	添加购物车
				joincart.onclick = function () {
					popup.style.display = "block";
				}
				close.onclick = function () {
					popup.style.display = "none";
				}
				agbtn.onclick = function () {
					popup.style.display = "none";
				}


				//商品数量

				increase.onclick = function () {
					nummidbtn.value++;

				}
				reduce.onclick = function () {
					if (nummidbtn.value <= 1) {
						nummidbtn.value = 1;
					} else {
						nummidbtn.value--;
					}
				}

				$(".pord-tab ul li").click(function (ele) {
					console.log($(this));
					$(this).addClass("tabline").siblings().removeClass('tabline');
				})
			}
		})
	}
}

//加入购物


$('.wrap').on('click', '.pord-btn .joincart', function () {
	console.log(666);
	// 获取点击商品的编号
	var code = $(this).attr('code');
	console.log(code);

	// 获取本地存储数据（数组）
	if (localStorage.getItem('shop')) {
		var codeObj = JSON.parse(localStorage.getItem('shop'));
	} else {
		var codeObj = {};
	}
	codeObj[code] = $('.nummidbtn').val();//添加数据

	var jsonStr = JSON.stringify(codeObj);//对象转成 json 字符串

	// 更新本地存储数据
	localStorage.setItem('shop', jsonStr);

	// alert('成功加入购物车！');
})


$('.wrap').on('click', '.pord-btn .buy-btn', function () {
	// console.log(666);
	var paymentObj = {};
	paymentObj[$(this).attr('code')] =  $('.nummidbtn').val();
	var JSONObj = JSON.stringify(paymentObj);
	localStorage.setItem('payment',JSONObj);
	open('./settleAccounts.html','_self');
})
