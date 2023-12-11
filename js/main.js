(function ($) {
  "use strict";

  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $('.navbar .dropdown').on('mouseover', function () {
          $('.dropdown-toggle', this).trigger('click');
        }).on('mouseout', function () {
          $('.dropdown-toggle', this).trigger('click').blur();
        });
      } else {
        $('.navbar .dropdown').off('mouseover').off('mouseout');
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });


  // Date and time picker
  $('.date').datetimepicker({
    format: 'L'
  });
  $('.time').datetimepicker({
    format: 'LT'
  });


  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
  });


  // Price carousel
  $(".price-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 45,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });


  // Team carousel
  $(".team-carousel, .related-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 45,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 2
      }
    }
  });


  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: true,
    loop: true,
  });

})(jQuery);



function sendMessage() {
  // Replace the following placeholders with your actual phone number and message
  var phoneNumber = '+9779813783811'; // The recipient's phone number with the country code
  var phoneNumber1 = '6792388544173629'; // The recipient's phone number with the country code

  var message = 'Hello! I would like to book an appointment.';

  // Form the URL for WhatsApp deep link
  var whatsappUrl = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);

  // Form the URL for Messenger deep link
  var messengerUrl = 'https://m.me/' + phoneNumber1

  // Check if the user has WhatsApp installed, and open the deep link
  if (isWhatsAppInstalled()) {
    window.location.href = whatsappUrl;
  } else {
    // If WhatsApp is not installed, open Messenger deep link
    window.location.href = messengerUrl;
  }
}

function isWhatsAppInstalled() {
  // Check if the user is on a mobile device and has WhatsApp installed
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

