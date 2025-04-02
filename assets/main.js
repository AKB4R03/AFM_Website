$(document).ready(function () {

  // fungsi tentang active nav-link
  $(".navbar .nav-link").on("click", function () {
    $(".navbar .nav-link").removeClass("active");
    $(this).addClass("active");
  });

  // tambah class "active" ketika bertemu dropdown
  const currentPath = window.location.pathname.split("/").pop();
  $(".navbar .nav-link, .dropdown-item").each(function () {
    const linkPath = $(this).attr("href");
    if (linkPath === currentPath) {
      $(".navbar .nav-link, .dropdown-item").removeClass("active");
      $(this).addClass("active");

      // Tambahkan class active ke parent nav-item jika ini dropdown-item
      const parentDropdown = $(this).closest(".dropdown");
      if (parentDropdown.length) {
        parentDropdown.find(".nav-link.dropdown-toggle").addClass("active");
      }
    }
  });

  // Animasi Fade down
  // $(window).scroll(function () {
  //   const element = document.querySelector('.fade-down-in-on-scroll');
  //   const elementPosition = element.getBoundingClientRect().top;
  //   const screenPosition = window.innerHeight / 1.3;

  //   if (elementPosition < screenPosition) {
  //     element.classList.add('animate');
  //   }
  // });

  // Animasi card
  $(window).scroll(function () {
    const cards = document.querySelectorAll('.card');
    const screenPosition = window.innerHeight / 1.3;

    cards.forEach(card => {
      const cardPosition = card.getBoundingClientRect().top;

      if (cardPosition < screenPosition) {
        card.classList.add('pop-up');
      }
    });
  });

  // fungsi tentang turn on bg di navbar dan adanya tombol back-to-top. Dan juga kasih shadow kalo scroll
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $(".navbar").css({
        "background-color": "var(--primary-color)",
        "box-shadow": "0 2px 10px rgba(0, 0, 0, 0.2)",
      });
      $(".back-to-top").addClass("active");
    }
    else {
      $(".navbar").css({
        "background-color": "transparent", 
        "box-shadow": "none",
      });
      $(".back-to-top").removeClass("active");
    }
  });

  // fungsi tentang menutup navbar setelah klik a link
  $("#offcanvasDarkNavbar a").click(function () {
    if (!$(this).hasClass("dropdown-toggle")) {
      $('.offcanvas').offcanvas('hide');
    }
  });

  // fungsi tentang navbar hide onscroll
  // if ($(".smart-scroll").length > 0) {
  //   var last_scroll_top = 0;
  //   $(window).on("scroll", function () {
  //     var scroll_top = $(this).scrollTop();
  //     if (scroll_top < last_scroll_top) {
  //       $(".smart-scroll").removeClass("scrolled-down").addClass("scrolled-up");
  //     }
  //     else {
  //       $(".smart-scroll").removeClass("scrolled-up").addClass("scrolled-down");
  //     }
  //     last_scroll_top = scroll_top;
  //   });
  // }

});