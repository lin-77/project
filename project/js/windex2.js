//图片切换
$(document).ready(function () {
  $('.product-preview .product-image img').click(function () {
    $('.product-preview .active').hide();
    $(this).siblings('.product-image')
      .removeClass('.product-image')
      .end()
      .addClass('.product-image')
      .next('.active')
      .show();
  });
});

//规格选项
// 子菜单的事件
$('.joincart-btn:nth-child(1)').on('click', function () {
  if (!localStorage.getItem('user')) {
    $('.lkq-login').css('display', 'block')
    return;
  }
  //  加入购物车
  if (localStorage.getItem('shop')) {
    var shopObj = JSON.parse(localStorage.getItem('shop'));
  } else {
    var shopObj = {};
  }
  // console.log($(this).parent().attr('code'));
  shopObj[$(this).parent().attr('code')] = $('.inpt_detail_main_buy_num').val();
  var JSONObj = JSON.stringify(shopObj)
  localStorage.setItem('shop', JSONObj);
  open('./shopCart.html')
})
$('.joincart-btn:nth-child(2)').on('click', function () {
  if (!localStorage.getItem('user')) {
    $('.lkq-login').css('display', 'block')
    return;
  }
  
  var paymentObj = {};
  paymentObj[$(this).parent().attr('code')] = $('.inpt_detail_main_buy_num').val();
  var JSONObj = JSON.stringify(paymentObj)
  localStorage.setItem('payment', JSONObj);
  open('./settleAccounts.html')
});

var iptNum = 0;
$('.numbtn:nth-child(1)').click(function () {
  if (iptNum <= 1) {
    return;
  }
  $('.inpt_detail_main_buy_num').val(--iptNum);
})
$('.btn_detail_main_buy_plus').click(function () {
  if (iptNum >= 5) {
    return;
  }
  $('.inpt_detail_main_buy_num').val(++iptNum);
})
