/*
	Appland Theme Scripts
*/

(function($){ "use strict";

    $(window).on('load', function() {
        $('body').addClass('loaded');
    });

/*=========================================================================
	Pagepiling Active
=========================================================================*/
    $('#pagepiling').pagepiling({
        direction: 'vertical',
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'careers', 'page7'],
        sectionsColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
        navigation: {
            'position': 'right',
            'tooltips': ['Home', 'About', 'Delivery', 'Leadership', 'Testimonials', 'Downloads', 'Careers', 'Contact Us']
        },
        afterRender: function(){
            $('#pp-nav').addClass('custom');
        },
        afterLoad: function(anchorLink, index){
            if(index>1){
                $('#pp-nav').removeClass('custom');
            }else{
                $('#pp-nav').addClass('custom');
            }
        }
    });

  /*=========================================================================
      Leadership Carousel
  =========================================================================*/
      var testiSelector = $('#leadership_carousel');
  	testiSelector.owlCarousel({
          loop:false, /* Was originally loop:true */
          autoplay:false, /* Was originally autoplay:true */
          smartSpeed: 500,
          nav: false,
          responsive:{
              0:{
                  items: 1
              },
              400:{
                  items: 2,
                  autoplay: false
              },
              600:{
                  items: 3
              }
          }

      });

/*=========================================================================
    Testimonial Carousel
=========================================================================*/
    var testiSelector = $('#testimonial_carousel');
	testiSelector.owlCarousel({
        loop:false, /* Was originally loop:true */
        autoplay:false, /* Was originally autoplay:true */
        smartSpeed: 500,
        nav: false,
        responsive:{
            0:{
                items: 1
            },
            400:{
                items: 2,
                autoplay: false
            },
            600:{
                items: 3
            }
        }

    });

/*=========================================================================
	Active venobox
=========================================================================*/
	var vbSelector = $('.img_popup');
	vbSelector.venobox({
		numeratio: true,
		infinigall: true
	});

/*=========================================================================
	MAILCHIMP
=========================================================================*/

    if ($('.subscribe_form').length>0) {
        /*  MAILCHIMP  */
        $('.subscribe_form').ajaxChimp({
            language: 'es',
            callback: mailchimpCallback,
            url: "https://nav-labs.us18.list-manage.com/subscribe/post?u=69e02de1c608bb5eed9a9be94&amp;id=4287a8011c"
        });
    }

    function mailchimpCallback(resp) {
        if (resp.result === 'success') {
            $('#subscribe-result').addClass('subs-result');
            $('.subscription-success').text(resp.msg).fadeIn();
            $('.subscription-error').fadeOut();

        } else if(resp.result === 'error') {
            $('#subscribe-result').addClass('subs-result');
            $('.subscription-error').text(resp.msg).fadeIn();
        }
    }
    $.ajaxChimp.translations.es = {
        'submit': 'Submitting...',
        0: 'We have sent you a confirmation email',
        1: 'Please enter your email',
        2: 'An email address must contain a single @',
        3: 'The domain portion of the email address is invalid (the portion after the @: )',
        4: 'The username portion of the email address is invalid (the portion before the @: )',
        5: 'This email address looks fake or invalid. Please enter a real email address'
    };


})(jQuery);
