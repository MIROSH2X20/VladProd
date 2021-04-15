
  VANTA.CLOUDS({
    el: "#intro",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00
})

$('.history__tabs .tab, .settings__tabs .tab').on('click', function (event) {
  var id = $(this).attr('data-id');
  $('.history__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
  $('.history__tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
  $(this).addClass('active');
  $('#' + id).addClass('active-tab').fadeIn();
  return false;
});