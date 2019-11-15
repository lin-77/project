$(function () {
	var itabline = $('.hth-productdetail .curtab .i-tabline');
	var tabshow = $('.tabcont .tabcont-wrap'); //集合
	$('.hth-productdetail .curtab').on('click', function () {
		$(itabline).removeClass('tabline-show')
		$(this).children('.i-tabline').addClass('tabline-show')
		// 详情展示区 tab卡切换
		$(tabshow).css('display', 'none');
		$(tabshow[($(this).index())]).css('display', 'block')
	})
	// 收藏点击红心
	$('.icon-sc').on('click', function () {
		$(this).toggleClass('likemove')
	})
	//点击增减数量

	var countNumber = parseInt($('.addcount input').val());

	$('.addcount').on('click', '.count-pull', function () {
		countNumber--;
		if (countNumber <= 0) {
			countNumber = 0;
			alert('数目不能为零')
		}
		$('.addcount input').val(countNumber);
	})
	$('.addcount').on('click', '.count-push', function () {
		countNumber++;
		$('.addcount input').val(countNumber);
	})

	//
	//放大镜部分
	function FDJ() {
		var replaceImgBox = $('.hthplacepic');
		// 盒子的宽度与图片的宽度差值(大图可运动的距离)
		var dx = parseInt(($('.hthplacepic').css('width'))) - parseInt($('.hth-showimg').css('width')); //230
		var dy = parseInt(($('.hthplacepic').css('height'))) - parseInt($('.hth-showimg').css('height')); //230
		// 可运动的距离
		var flag = true
		// 鼠标点击放大镜框事件
		$('.hth-showimg').on('click', function (ev) {
			if (flag) {
				//展开显示
				$('.picshow').css('display', 'none')
				replaceImgBox.css('display', 'block');
				//
				var e = ev || window.event;
				var mousex = parseInt($('.hth-showimg').css('width')) - e.clientX; //鼠标可以右移动的距离
				var mousey = parseInt($('.hth-showimg').css('height')) - e.clientY; //鼠标可以右移动的距离
				// console.log(mousex);
				var toLeft = e.clientX; //鼠标坐标
				var toTop = e.clientY; //鼠标坐标
				document.onmousemove = function (ev) {
					var e = ev || window.event;
					var toL = e.clientX - toLeft; //鼠标移动的距离
					var toT = e.clientY - toTop; //鼠标移动的距离
					// console.log(toL);
					var lL = -1 * toL / mousex * dx + 'px'; //position left
					var tT = -1 * toT / mousey * dy + 'px';
					if (-1 * toL / mousex * dx >= 0) {
						lL = '0px';
					}
					if (-1 * toT / mousey * dy >= 0) {
						tT = '0px'
					}
					if (toL >= mousex) {
						toL == mousex;
						lL = -1 * dx + 'px'
					}
					if (toT >= mousey) {
						// console.log(555);
						tT = -1 * dy + 'px'
					}
					$('.hthplacepic').css('left', lL);
					$('.hthplacepic').css('top', tT);
				}
				flag = false;
			} else {
				$('.picshow').css('display', 'block')
				replaceImgBox.css('display', 'none')
				flag = true;
			}
		});
		//鼠标事件从框移出
		$('.hth-showimg').on('mouseleave', function (e) {
			var tg = e.target;
			document.onmousemove = null;
			$('.picshow').css('display', 'block')
			replaceImgBox.css('display', 'none')
			flag = true;
		})

	}
	//
	//
	//点击切换图片
	tabImg()

	function tabImg() {
		var arrSrc = ['./images/hth-goodslist/h-goods1.jpg', './images/hth-goodslist/h-goods1-2.jpg',
			'./images/hth-goodslist/h-goods1-3.jpg', './images/hth-goodslist/h-goods1-4.jpg',
			'./images/hth-goodslist/h-goods1-5.jpg'
		]
		var arrSrcb = ['./images/hth-goodslist/h-goods1-1b.jpg', './images/hth-goodslist/h-goods1-2b.jpg',
			'./images/hth-goodslist/h-goods1-3b.jpg', './images/hth-goodslist/h-goods1-4b.jpg',
			'./images/hth-goodslist/h-goods1-5b.jpg'
		]
		var imglis = $('.picdetails-list .lichangecolor img'); //img小框的图片
		// console.log(imglis);
		$('.picdetails-list').on('click', '.lichangecolor', function () {

			$('.picdetails-list .lichangecolor').removeClass('active'); //样式的改变
			$(this).addClass('active');
			//图片的更换
			$('.picshowb').attr('src', arrSrcb[$(this).index()]); //大图切换
			$('.picshow').attr('src', arrSrc[$(this).index()]); //小图切换
		})
	}
	//
	FDJ(); //放大镜
	//
	//获取cookie
	function getCookie(key) {
		var arr = document.cookie.split('; ');
		for (var i = 0, len = arr.length; i < len; i++) {
			var arr2 = arr[i].split('=');
			if (arr2[0] == key) {
				return unescape(arr2[1]);
				// console.log(arr2[1]);
			}
		}
		// console.log(arr2);
		// return null;
		return arr2[1]
	}
	//版本二
	// ajax请求获取到codesign->h-goods-1
	// 本地存储数据为:shop :{h-goods-1:2}
	// Number->goodsnumber 
	var codeSign;
	$.ajax({
		url: './data/hthgoods.json',
		type: 'get',
		dataType: 'json',
		success: function (json) {
			var urlmsg = getCookie("cooUrl"); //获取cookie的值->匹配当前页面的信息
			// console.log(urlmsg);
			for (var k in json) {
				if (json[k].imgurl == urlmsg) { //匹配cookie的值
					codeSign = json[k].code; //->h-goods1 保存
				}
			}
		}
	})
	// var obj1 = {}
	// getLocalStorage()
	//本地getLocalStorage
	var localObj;

	function getLocalStorage(key, goodsNumber) {
		if (localStorage.getItem(key)) {
			localObj = JSON.parse(localStorage.getItem(key)); //对象
			var cdd = localObj[codeSign] ? localObj[codeSign] : 0;
			localObj[codeSign] = cdd + goodsNumber; //h-goods-1赋值
		} else {
			localObj = {};
			localObj[codeSign] = goodsNumber;
		}
		//将新赋值的对象转为json字符串
		var jsonStr = JSON.stringify(localObj);
		// console.log(jsonStr);
		// 将数据更新到本地存储
		localStorage.setItem(key, jsonStr);
		// return localStorage;
	}
	//立即购买
	function nowLocalStorage(key, goodsNumber) {
		var localObjj = {};
		localObjj[codeSign] = goodsNumber;
		// //将新赋值的对象转为json字符串
		var jsonStr = JSON.stringify(localObjj);
		localStorage.setItem(key, jsonStr);
	}
	//
	//点击加入购物车
	$('.add-car').on('click', function () {
		// 判断是否登陆,登陆后才可以加入购物车
		if (!localStorage.getItem('user')) {
			$('.lkq-login').css('display', 'block');
			return;
		};
		$('.alerttip').addClass('alertshow'); //弹窗初选

		var goodsNumber = parseInt($('.addcount input').val());

		// console.log(typeof goodsNumber);//没问题
		getLocalStorage('shop', goodsNumber);
		// getLocalStorage('payment',goodsNumber);
		$('.addcount input').val('1')
		// console.log(localStorage.getItem('payment'));
	});

	//点击弹窗里面的确认,要跳转到购物车页面
	$('.alerttip').on('click', '.shure', function () {
		$('.alerttip').removeClass('alertshow');
		console.log('点击确定按钮,跳转到购物车页面');
		// console.log(localStorage);
	});
	//点击关闭
	$('.alerttip').on('click', '.close', function () {
		$('.alerttip').removeClass('alertshow');
	});

	//点击立即购买
	$('.buy-now').on('click', function () {
		// 判断是否登陆,登陆后才可以加入购物车
		if (!localStorage.getItem('user')) {
			$('.lkq-login').css('display', 'block');
			return;
		};
		// $('.alerttip').addClass('alertshow');
		var goodsNumber = parseInt($('.addcount input').val());
		getLocalStorage('shop', goodsNumber);
		nowLocalStorage('payment', goodsNumber);
		// console.log(localStorage);
		$('.addcount input').val('1')
		console.log(localStorage.getItem('payment'));
		console.log(localStorage.getItem('shop'));
		console.log('点击立即购买,跳转到购物车页面');
	});
})
