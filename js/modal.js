$('[data-modal=button_login]').on('click', function() {
    $('.overlay, #login').fadeIn(500);
});

$('[data-modal=button_reg]').on('click', function() {
    $('.overlay, #reg').fadeIn(500);
});

$('.modal_close').on('click', function() {
    $('.overlay, #login, #reg, #reg-result, #delivery-result').fadeOut('slow');
});