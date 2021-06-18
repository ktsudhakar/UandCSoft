(function ($) {
  "use strict";

  $(window).scroll(function() {
    var bottomScreen = $(window).scrollTop() + $(window).innerHeight(),
        scrollPos = $(window).scrollTop() + 60,
        scrollElemPos1 = $('.consulting-section').offset().top,
        scrollElemPos2 = $('.services-section').offset().top,
        scrollElemPos3 = $('.staff-section').offset().top,
        scrollElemPos4 = $('.news-section').offset().top;

    //Logo Text Show/Hide
    if(scrollPos > scrollElemPos1) {
      $('.menu-header h1').addClass('move-top');
    }
    else {
      $('.menu-header h1').removeClass('move-top');
    }
    
    //Section Header Freeze
    if(scrollPos >= scrollElemPos1) {
      $('section').removeClass('freeze-title');
      $('.consulting-section').addClass('freeze-title');
    }
    else {
      $('.consulting-section').removeClass('freeze-title');
    }

    if(scrollPos >= scrollElemPos2) {
      $('section').removeClass('freeze-title');
      $('.services-section').addClass('freeze-title');
    }
    else {
      $('.services-section').removeClass('freeze-title');
    }

    if(scrollPos >= scrollElemPos3) {
      $('section').removeClass('freeze-title');
      $('.staff-section').addClass('freeze-title');
    }
    else {
      $('.staff-section').removeClass('freeze-title');
    }

    if(scrollPos >= scrollElemPos4) {
      $('section').removeClass('freeze-title');
      $('.news-section').addClass('freeze-title');
    }
    else {
      $('.news-section').removeClass('freeze-title');
    }

    var bottom_of_element1 = scrollElemPos1 + $('.consulting-section').outerHeight();
    if ((bottomScreen > scrollElemPos1) && (scrollPos < bottom_of_element1)) {
    }
    else {
      $('.consulting-section').removeClass('freeze-title');
    }

    var bottom_of_element2 = scrollElemPos2 + $('.services-section').outerHeight();
    if ((bottomScreen > scrollElemPos2) && (scrollPos < bottom_of_element2)) {
    }
    else {
      $('.services-section').removeClass('freeze-title');
    }

    var bottom_of_element3 = scrollElemPos3 + $('.staff-section').outerHeight();
    if ((bottomScreen > scrollElemPos3) && (scrollPos < bottom_of_element3)) {
    }
    else {
      $('.staff-section').removeClass('freeze-title');
    }

    var bottom_of_element4 = scrollElemPos4 + $('.news-section').outerHeight();
    if ((bottomScreen > scrollElemPos4) && (scrollPos < bottom_of_element4)) {
    }
    else {
      $('.news-section').removeClass('freeze-title');
    }

  });

  //Hide Loading Box (Preloader)
  function handlePreloader() {
    if ($(".preloader").length) {
      $(".preloader").delay(200).fadeOut(300);
    }
  }

  //Update Header Style and Scroll to Top
  function headerStyle() {
    if ($(".main-header").length) {
      var windowpos = $(window).scrollTop();
      var siteHeader = $(".sticky-header");
      var scrollLink = $(".scroll-to-top");
      if (windowpos >= 200) {
        siteHeader.addClass("now-visible");
        scrollLink.fadeIn(300);
      } else {
        siteHeader.removeClass("now-visible");
        scrollLink.fadeOut(300);
      }
    }
  }
  headerStyle();

  $('.scroll-to-top').click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  //Sticky Menu
  $(window).scroll(function() {
    var header = $('header');
    if(header.offset().top > 100) {
      header.addClass('scrolled-down');
    }
    else {
      header.removeClass('scrolled-down');
      header.addClass('scrolled-up');
    }
  });

  //Color Change

  $('.dropdown').click(function() {
    $('body, footer').removeAttr('class');
    var updateCol = $(this).find('a').attr('data-color');
    $('footer').addClass('main-footer');
    $('body, footer').addClass(updateCol);
  });
  $('.navigation li > a').click(function() {
    $('.navigation li').removeClass('current');
    $(this).parent().addClass('current');
  });
  //Menu Toggle
  function menuToggle() {
    var winWidth = $(window).width();
    if (winWidth > 768) {
      $("body").mousemove(function (event) {
        if (event.clientX < 50) {
          $(".navbar-toggle").closest(".header-upper").addClass("open-menu");
        } else if (event.clientX > 250) {
          $(".navbar-toggle").closest(".header-upper").removeClass("open-menu");
        }
      });
    } else {
      $('.navbar-toggle').on('click', function () {
        $(this).closest('.header-upper').toggleClass('open-menu');
      });
    }
  }

  menuToggle();

  $(window).resize(function () {
    menuToggle();
  });

  //Submenu Dropdown Toggle
  if ($(".main-header li.dropdown ul").length) {
    $(".main-header li.dropdown").append(
      '<div class="dropdown-btn"><Span class="fa fa-angle-down"></span></div>'
    );

    //Dropdown Button
    $(".main-header li.dropdown .dropdown-btn").on("click", function () {
      $(this).prev("ul").slideToggle(500);
    });

    //Disable dropdown parent link
    $(".navigation li.dropdown > a").on("click", function (e) {
      e.preventDefault();
    });
  }

  $(".main-slider").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
  });

  //Search Popup / Hide Show
  if ($("#search-popup").length) {
    //Show Popup
    $(".search-box-btn").on("click", function (e) {
      e.preventDefault();
      $("#search-popup").addClass("popup-visible");
    });

    //Hide Popup
    $(".close-search").on("click", function () {
      $("#search-popup").removeClass("popup-visible");
    });
  }

  // Fact Counter
  function factCounter() {
    if ($(".fact-counter").length) {
      $(".fact-counter .counter-column.animated").each(function () {
        var $t = $(this),
          n = $t.find(".count-text").attr("data-stop"),
          r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({
            countNum: $t.find(".count-text").text(),
          }).animate({
            countNum: n,
          }, {
            duration: r,
            easing: "linear",
            step: function () {
              $t.find(".count-text").text(Math.floor(this.countNum));
            },
            complete: function () {
              $t.find(".count-text").text(this.countNum);
            },
          });
        }
      });
    }
  }

  //Accordion Box
  if ($(".accordion-box").length) {
    $(".accordion-box").on("click", ".acc-btn", function () {
      var target = $(this).parents(".accordion");

      if ($(this).hasClass("active") !== true) {
        $(".accordion .acc-btn").removeClass("active");
      }

      if ($(this).next(".acc-content").is(":visible")) {
        //$(this).removeClass('active');
        return false;
        //$(this).next('.accord-content').slideUp(300);
      } else {
        $(this).addClass("active");
        $(".accordion").removeClass("active-block");
        $(".accordion .acc-content").slideUp(300);
        target.addClass("active-block");
        $(this).next(".acc-content").slideDown(300);
      }
    });
  }

  //Product Tabs
  if ($(".prod-tabs .tab-btn").length) {
    $(".prod-tabs .tab-btn").on("click", function (e) {
      e.preventDefault();
      var target = $($(this).attr("href"));
      $(".prod-tabs .tab-btn").removeClass("active-btn");
      $(this).addClass("active-btn");
      $(".prod-tabs .tab").fadeOut(0);
      $(".prod-tabs .tab").removeClass("active-tab");
      $(target).fadeIn(500);
      $(target).addClass("active-tab");
    });
  }

  //Single Item Carousel
  if ($(".single-item-carousel").length) {
    $(".single-item-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      smartSpeed: 700,
      autoplay: 5000,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        1024: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });
  }

  //LightBox / Fancybox
  if ($(".lightbox-image").length) {
    $(".lightbox-image").fancybox({
      openEffect: "none",
      closeEffect: "none",
      helpers: {
        media: {},
      },
    });
  }

  //Jquery Spinner / Quantity Spinner
  if ($(".quantity-spinner").length) {
    $("input.quantity-spinner").TouchSpin({
      verticalbuttons: true,
    });
  }

  //Price Range Slider
  if ($(".range-slider-price").length) {
    var priceRange = document.getElementById("range-slider-price");

    noUiSlider.create(priceRange, {
      start: [30, 300],
      limit: 1000,
      behaviour: "drag",
      connect: true,
      range: {
        min: 10,
        max: 500,
      },
    });

    var limitFieldMin = document.getElementById("min-value-rangeslider");
    var limitFieldMax = document.getElementById("max-value-rangeslider");

    priceRange.noUiSlider.on("update", function (values, handle) {
      (handle ? limitFieldMax : limitFieldMin).value = values[handle];
    });
  }

  //Masonary Gallery
  function enableMasonry() {
    if ($(".masonry-gallery").length) {
      // Needed variables
      var $container = $(".masonry-gallery .items-container");
      var selector = $(".masonry-gallery .masonry-item");

      $container.isotope({
        filter: selector,
        masonry: {
          columnWidth: 1,
        },
        animationOptions: {
          duration: 500,
          easing: "linear",
        },
      });
    }
  }

  enableMasonry();

  //Contact Form Validation
  if ($("#contact-form").length) {
    $("#contact-form").validate({
      rules: {
        username: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        subject: {
          required: true,
        },
        message: {
          required: true,
        },
      },
    });
  }

  // Scroll to a Specific Div
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate({
          scrollTop: $(target).offset().top,
        },
        1000
      );
    });
  }

  // Elements Animation
  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }

  /* ==========================================================================
     When document is Scrollig, do
     ========================================================================== */

  $(window).on("scroll", function () {
    headerStyle();
    factCounter();
  });

  /* ==========================================================================
     When document is loaded, do
     ========================================================================== */

  $(window).on("load", function () {
    handlePreloader();
    enableMasonry();
  });

  /* ==========================================================================
     When document is Resized, do
     ========================================================================== */

  $(window).on("resize", function () {
    enableMasonry();
  });
})(window.jQuery);
