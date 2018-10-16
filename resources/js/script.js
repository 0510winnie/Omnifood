$(document).ready(function () {

  /* For sticky navigation */
  //1. select the section we want the nav to show up
  $('.js--section-features').waypoint(function (direction) {
    if (direction == 'down') {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '80px;'
  });

  /* Scroll on buttons */
  //we select this class, then when we click on it, the function will happen, we have an anmination which scrolls to the top of the plans section, with a speed of 1 second.

  $('.js--scroll-to-plan').click(function () {
    $('html, body').animate({
      scrollTop: $('.js--section-plans').offset().top
    }, 1000);
  });

  $('.js--scroll-to-start').click(function () {
    $('html, body').animate({
      scrollTop: $('.js--section-features').offset().top
    }, 1000);
  });

  /* Navigation scroll */
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

    /* Animation on scroll */
    $('.js--wp-1').waypoint(function() {
      $('.js--wp-1').addClass('animated fadeIn');
    },{
      offset: '50%'
    });

    $('.js--wp-2').waypoint(function() {
      $('.js--wp-2').addClass('animated fadeInUp');
    },{
      offset: '50%'
    });
    $('.js--wp-3').waypoint(function() {
      $('.js--wp-3').addClass('animated fadeIn');
    },{
      offset: '50%'
    });
    $('.js--wp-4').waypoint(function() {
      $('.js--wp-4').addClass('animated pulse');
    },{
      offset: '50%'
    });

    /* Mobile Navigation */
    $('.js--nav-icon').click(function() {
        //this variable will be the result of selecting the navigation as we'll use it multiple times so no need to repeat same code over and over again
        var nav = $('.js--main-nav');
        
        var icon = $('.js--nav-icon i')

        nav.slideToggle(200);
        //how long the animation should take in millionsecond, so it's 0.2 seconds
        if(icon.hasClass('ion-ios-menu')) {
            icon.addClass('ion-ios-close');
            icon.removeClass('ion-ios-menu');
        } else {
            icon.addClass('ion-ios-menu');
            icon.removeClass('ion-ios-close');
        }
    });

});