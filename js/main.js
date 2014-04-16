$(function() {
  $(window).bind('scroll', function(){
    var navHeight = $(window).height() - 70;

    if ( $(window).scrollTop() > navHeight ) {
      $('nav').addClass('fixed');
    } else {
      $('nav').removeClass('fixed');
    }

  });

  $('nav a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      // target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
  
});
