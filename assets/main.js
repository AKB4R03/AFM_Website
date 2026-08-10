$(document).ready(function () {

  // Tampilkan skeleton loader sebelum komponen di-load
  $("#navbar-ppm").html('<div style="height:56px; background:#0c2000; width:100%;"></div>');
  $("#footer-ppm").html('<div style="height:200px; background:#0c2000; width:100%;"></div>');

  // Load navbar.html ke dalam #navbar-ppm
  $("#navbar-ppm").load("components/navbar.html", function () {
    let currentPath = window.location.pathname;

    // Ambil hanya bagian terakhir dari path (file name)
    currentPath = currentPath.endsWith("/") ? "index.html" : currentPath.split("/").pop();

    // Bersihkan semua dulu
    $(".navbar .nav-link").removeClass("active");
    $(".dropdown-item").removeClass("active");

    // 1. Aktifkan nav biasa
    $(".navbar .nav-link").each(function () {
      const linkPath = $(this).attr("href");
      if (linkPath === currentPath) {
        $(this).addClass("active");
      }
    });

    // 2. Aktifkan dropdown
    $(".dropdown-item").each(function () {
      const linkPath = $(this).attr("href");
      if (linkPath === currentPath) {
        $(this).addClass("active");
        $(this).closest(".dropdown").find(".nav-link.dropdown-toggle").addClass("active");
      }
    });

  });

  // Load footer.html ke dalam #footer-ppm
  $("#footer-ppm").load("components/footer.html");

  // Animasi card yang pop-up ketika kita nge scroll
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

  // Navbar background & back-to-top button on scroll
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

  // Menutup navbar setelah klik a link (offcanvas)
  $("#offcanvasDarkNavbar a").click(function () {
    if (!$(this).hasClass("dropdown-toggle")) {
      $('.offcanvas').offcanvas('hide');
    }
  });
});