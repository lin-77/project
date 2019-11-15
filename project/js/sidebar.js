if (localStorage.getItem('shop')) {
    var jsonObj = JSON.parse(localStorage.getItem('shop'));
    $('.navico-cartnum').html(Object.keys(jsonObj).length);
}
$(document).scroll(function (e) {
    var toTop = $(document).scrollTop();
    if (toTop >= 400) {
        $('.topnav').addClass('topnavtitle');
    } else {
        $('.topnav').removeClass('topnavtitle');
    }
})
if (!localStorage.getItem('user')) {
    $('.fixedenav .mycart .navico-cartnum').html('0')
}
$('.topnav').click(function () {
    $(document).scrollTop(0);
})

$('.fixedenav .mycart').click(function () {
    if (!localStorage.getItem('user')) {
        $('.lkq-login').css('display', 'block')
        return;
    }
    open('./shopCart.html');
})