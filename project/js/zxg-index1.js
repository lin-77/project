// 展开收起
$('.z-packUp-a').click(function () {
  $('.z-menuBar2').toggleClass('alter-height')
  if ($('.z-menuBar2').hasClass('alter-height')) {
    $('.z-packUps').html('展开');
    $('.z-icon-a').css('background-position', '-79px -70px')
  } else {
    $('.z-packUps').html('收起');
    $('.z-icon-a').css('background-position', '-79px -64px')
  }
})

//点击变黑
$('.z-menuBar').on('click', '.z-menuBar2 dl dd', function () {
  $(this).css('color', 'black');
  $(this).css('font-weight', 'bold');
  $(this).siblings().css('color', '#666')
  $(this).siblings().css('font-weight', '400')
})


//排序
var num = '';
$('.z-screen').on('click', '.screen-1 dd', function () {
  if (this.outerText == '默认') {
    $(this).toggleClass('nor');
    $(this).siblings().find('i').css('background-position', '-79px -64px').prev('span').removeClass('nor');
  } else {
    $(this).siblings().eq(1).removeClass('nor');
    if (num == $(this).html) {//判断值是否相等，相等则是第二吃点击
      $(this).find('i').css('background-position', '-67px -64px').prev('span').addClass('nor');    //箭头向上
      num = '';
      $(this).siblings().find('i').css('background-position', '-79px -64px').prev('span').removeClass('nor');

    } else {
      $(this).find('i').css('background-position', '-150px -2px').prev('span').addClass('nor');//箭头向下

      num = $(this).html;
      $(this).siblings().find('i').css('background-position', '-79px -64px').prev('span').removeClass('nor');


    }
  }
})


// 筛选
$('.z-screen').on('click', '.screen-2 dd', function () {
  $(this).css('color', '#333');
  $(this).css('font-weight', 'bold');
  $(this).siblings().css('color', '#666');
  $(this).siblings().css('font-weight', '400');
  $(this).find('i').css('background-position', '-22px -2px');
  $(this).siblings().find('i').css('background-position', '-2px -2px');

});

//获取数据
$(function () {
  $.ajax({
    url: 'data/zxg-index1.json',
    type: 'get',
    dataType: 'json',
    success: function (json) {
      console.log(json)
      var jso = '';
      var op;
      $(json).each(function (index, item) {

        if (item.code <= 10012) {
          jso += `
        <li code="${item.code}">
        <a href="javascript:;">
          <div>
            <span></span>
          </div>
          <img src="${item.imgurl}">
          <div class="listText">
            <p>${item.title}</p>
            <div class="price">
              <span class="currentPrice">${item.price}</span>
              <span class="originalPrice">${item.price}</span>
            </div>
          </div>
          <div class="gec">
              <span class="koke"><i class="icon-bg"></i></span>
              <span class="kokp"><i class="icon-bg"></i></span>
            </div>
        </a>
      </li>`
        }

      });
      $('.commodity ul').html(jso);
    }
  });
  // 添加购物车
  $('.commodity ul').on('click', '.koke', function (e) {
    e.stopPropagation()
    var code = $(this).parent().parent().parent().attr('code');
    console.log(code)
    if (localStorage.getItem('shop')) {
      var codeArr = JSON.parse(localStorage.getItem('shop'));
      // console.log(JSON.parse(localStorage.getItem('list')).code)
    } else {
      var codeArr = {};
    }
    // console.log(code)
    // codeArr.push(code);//添加数据
    codeArr[code] = 1;
    var jsonStr = JSON.stringify(codeArr);//对象转成 json 字符串
    localStorage.setItem('shop', jsonStr);


    // 弹框
    $('.popUp').css('display', 'block');
    $('.popUp').click(function () {
      $('.popUp').css('display', 'none');
    });
    $('.popUp-bottom a:nth-child(1)').click(function () {
      $(this).attr('href', './shopCart.html');
    });
    $('.popUp-bottom a:nth-child(2)').click(function () {
      $(this).attr('href', 'zxg-index1.html');
    });

  });


  //点击放大镜跳转
  $('.commodity ul').on('click', '.kokp', function () {
    if (localStorage.getItem('tz')) {
      var tiao = $(this).parent().parent().parent().attr('code');
      var jso = JSON.stringify({ "tz2": tiao });
      localStorage.setItem('tz', jso)
    } else {
      var tiao = $(this).parent().parent().parent().attr('code');
      var jso = JSON.stringify({ "tz2": tiao })
      localStorage.setItem('tz', jso);
    }
    window.open("./zxg-index2.html");
  });

  //点击图片跳转
  $('.commodity ul').on('click', 'li a img', function () {
    window.open("./zxg-index2.html");
    if (localStorage.getItem('tz')) {
      var tiao = $(this).parent().parent().attr('code');
      var jso = JSON.stringify({ "tz2": tiao });
      localStorage.setItem('tz', jso);
    } else {
      var tiao = $(this).parent().parent().attr('code');
      var jso = JSON.stringify({ "tz2": tiao });
      localStorage.setItem('tz', jso);
    }

  });


});



