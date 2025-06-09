// Custom JavaScript for Modern Personal Website

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };

  // Collapse now if page is not at top
  navbarCollapse();

  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Add animation to skills icons on hover
  $('.skills-section .list-inline-item i').hover(
    function() {
      $(this).addClass('animated pulse');
    },
    function() {
      $(this).removeClass('animated pulse');
    }
  );

  // Fade in sections on scroll
  $(window).on('load', function() {
    // Add fade-in class to all sections
    $("section").each(function() {
      $(this).addClass("fade-in-section");
    });

    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
      const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px"
      };

      const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            return;
          } else {
            entry.target.classList.add('is-visible');
            appearOnScroll.unobserve(entry.target);
          }
        });
      }, appearOptions);

      document.querySelectorAll('.fade-in-section').forEach(section => {
        appearOnScroll.observe(section);
      });
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      $(".fade-in-section").addClass("is-visible");
    }
  });

})(jQuery); // End of use strict
