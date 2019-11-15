

$(function () {
  $.ajax({
    url: 'data/zxg-index1.json',
    type: 'get',
    dataType: 'json',
    success: function (json) {
      // console.log(json)
      var jso = '';
      var imgs = '';
      var coarr = JSON.parse(localStorage.getItem('tz')).tz2;
      // console.log(coarr)
      $(json).each(function (index, item) {
        if (item.code == coarr) {
          $('.main-title').children().siblings('em').html(item.title);
          $('.tpqh').html(`<img src="${item.imgurl}" alt="">`);
          // console.log(item.img[2]);
          for (var i = 0, len = item.img.length; len > i; i++) {
            // console.log(item.img[i]);
            imgs += `
                    <li><img src="${item.img[i]}" alt=""></li>
                  `
          }
          $('.picdetails ul').html(imgs);
          $('.pro-name').html(item.title);
          $('.new-price').html(`<strong>${item.price}</strong>`);
          $('.worn-price').html(item.price);
          $('.sold-a').html(item.soldOut);
          $('.evaluate-a').html(item.appraise);

          //款式
          $('.pro-style').find('span').html(Object.keys(item.size))

          for (var i = 0, len = Object.values(item.size)[0].length; len > i; i++) {
            jso += `<li class="currend ${i == 0 ? 'op' : ''}">
                  <div class="pord-selbox">${Object.values(item.size)[0][i]}</div>
                 </li>
                `;
          }

          $('.pro-style').find('ul').html(jso);   //数量
          $('.quantity-b').attr('code', item.code)
          $('.quantity-a').children().siblings('em').html(item.repertory);
        }
      });
    }
  });

  //点击加物品数量
  //减
  $('.warp').on('click', '.pro-num a:nth-child(1)', function () {
    var nu = $(this).next().val();
    nu--;
    if (nu <= 1) {
      nu = 1;
    }
    $(this).next().val(nu);
  });
  // 加
  $('.warp').on('click', '.pro-num a:nth-child(3)', function () {
    var nu = $(this).prev().val();
    nu++;
    $(this).prev().val(nu);
    console.log(nu, '66');

  });

  //添加购物车；
  $('.warp').on('click', '.shopping-trolley', function () {
    if (!localStorage.getItem('user')) {
      $('.lkq-login').css('display', 'block')
      return;
    }

    var code = $(this).parent().attr('code');         //储存code值

    var val = $(this).parent().prev().find('div').find('input').val();    //储存value值
    console.log(code)
    if (localStorage.getItem('shop')) {                           //判断本地是否有"shop"
      var codeArr = JSON.parse(localStorage.getItem('shop'));
    } else {
      var codeArr = {};
    }
    // console.log(code)
    // console.log(codeArr)
    codeArr[code] = val;                          //键值对形式添加数据
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

  //立即购买
  $('.warp').on('click', '.buy-now', function () {
    if (!localStorage.getItem('user')) {
      $('.lkq-login').css('display', 'block')
      return;
    }

    var code = $(this).parent().attr('code');         //储存code值
    var val = $(this).parent().prev().find('div').find('input').val();    //储存value值
    var lj = {};
    lj[code] = val;                          //键值对形式添加数据
    var jp = JSON.stringify(lj);//对象转成 json 字符串
    localStorage.setItem('payment', jp);

    open('./settleAccounts.html')

  })

  // 选项卡切换
  $('.warp').on('click', '.modity-tatil ul li', function () {
    var index = $(this).index();//索引值
    $(this).find('i').addClass('modity-i').closest('li').siblings().find('i').removeClass('modity-i');

    $('.details-tatil>div').eq(index).addClass('dt-block').siblings().removeClass('dt-block');
  });

  // 图片切换
  $('.picdetails').on('click', 'ul li img', function () {
    var sr = $(this).attr('src');
    // console.log($(this).attr('src'))
    $('.imglist a img').attr('src', sr);
    console.log($(this));
    $(this).parent('li').addClass('currend')
    $(this).parent().siblings('li').removeClass('currend')
  });

  //款式的边框
  $('.pro-style').on('click', 'ul li', function () {
    $(this).addClass('op')
    $(this).siblings('li').removeClass('op')
  })

  // 放大镜

  $('.img-detail').on('click', '.imglist', function () {
    $('.tpqh img').css('width', '160%');
    $('.img-detail').on('mousemove', '.imglist', function (e) {

      // console.log(e.clientX,e.clientY);
      var masL = e.clientX - offset($('.imglist')[0]).left;
      var masT = e.clientY - $('.imglist').offset().top + document.documentElement.scrollTop;


      if (masL <= 0 || masT <= 0 || masL >= 458 || masT >= 440) {
        $('.tpqh img').css('width', '100%');

      }
      var ti = masT / $('.imglist').height();
      var ri = masL / $('.imglist').width();
      // console.log(ti,ri);

      var tt = ti * ($('.tpqh img').height() - $('.imglist').height());
      var rr = ri * ($('.tpqh img').width() - $('.imglist').width());
      // console.log(tt,rr);

      $('.tpqh img').css('top', -1 * tt + 'px')
      $('.tpqh img').css('left', -1 * rr + 'px')

    });

  });
  $('.img-detail').on('mouseleave', function () {
    document.onmousemove = null;
    // $('.tpqh img').css('width', '100%');
  })

  // $('.img-detail').on('mouseleave', function () {
  //   document.onmousemove = null;
  // })






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
});











