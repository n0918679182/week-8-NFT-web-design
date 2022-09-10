$(document).ready(function () {

  // 預設搜尋區塊
  $('#search-section').css('display', 'none');

  // 開啟選單
  $('#burger-btn').click(function (e) { 
    e.preventDefault();
    $('#burger-icon').toggleClass('fa-xmark');
    $('#bg-cover').fadeToggle(200);
    $('#menu-item').slideToggle(500);
  });

  // 開啟搜尋
  $('#search-btn').click(function (e) { 
    e.preventDefault();
    $('#search-section').fadeToggle(400);
  });

  // 關閉搜尋
  $('#search-close').click(function (e) { 
    e.preventDefault();
    $('#search-section').fadeOut(400);
  });

  // 滾動卷軸關閉選單
  $(document).scroll(function () { 
    $('#burger-icon').removeClass('fa-xmark');
    $('#menu-item').slideUp(200);
    $('#bg-cover').fadeOut(200);
  });

  // 點擊背景關閉選單
  $('#bg-cover').click(function (e) { 
    e.preventDefault();
    $('#burger-icon').removeClass('fa-xmark');
    $('#menu-item').slideUp(200);
    $('#bg-cover').fadeOut(200);
  });


  // 確保圖片都載入後，以免造成剛進入頁面時圖片會被覆蓋
  $('.artwork').imagesLoaded().progress( function() {
    $('.artwork').masonry(); // 渲染整體畫面
  });



});


// 熱門藝術家 swiper
var swiper = new Swiper(".artistSwiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    }
  }
});

