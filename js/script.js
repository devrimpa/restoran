var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});


$('.testimonial-slider').slick({
  dots: true,
  arrows: false,
  // autoplay: true,
  // autoplaySpeed: 4000,
  centerMode: true,
  centerPadding: 0,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// go to the top

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

$('.js-exciting-exp-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
})

// fixed header

$(window).scroll(function() {     
  var scroll = $(window).scrollTop();     
  if (scroll > 200) { 
      $(".header-sec").addClass("fixed"); 
  } 
  else {
  $(".header-sec").removeClass("fixed"); 
  }
})

// loader

$(window).on('load',function(){
	setTimeout(function(){
	$('.loader-body').fadeOut('slow');
	},1000);
});

Fancybox.bind("[data-fancybox]", {});