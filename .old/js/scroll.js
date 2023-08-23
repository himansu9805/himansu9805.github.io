$(window).ready(function () {
  $('.frontend .content .heading').addClass('active');
  $('.backend .content .heading').addClass('active');
  $(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height < 450) {
      $('.frontend .content .heading').addClass('active');
      $('.backend .content .heading').addClass('active');
      $('.frontend').removeClass('opacity');
      $('.backend').removeClass('opacity');
    } else {
      $('.backend .content .heading').removeClass('active');
      $('.frontend .content .heading').removeClass('active');
      $('.frontend').addClass('opacity');
      $('.backend').addClass('opacity');
    }

    if (height > 100) {
      $('.navbar').addClass('black');
    } else {
      $('.navbar').removeClass('black');
    }

    if (height < 1550) {
      $('.languages').removeClass('opacity');
    } else {
      $('.languages').addClass('opacity');
    }

    $('.navbar .sc').click(function () {
      $(document).scrollTop(3135);
    });

    $('.navbar .gh').click(function () {
      $(document).scrollTop(2390);
    });

    $('.navbar .ab').click(function () {
      $(document).scrollTop(750);
    });
  });
});