   $(function () {
       //    navbar
       $('.navbar-nav li').click(function () {
           $(this).addClass('active').siblings().removeClass('active');
       });
       //sticky menu start

       $(window).scroll(function () {
           var scrolling = $(this).scrollTop();
           if (scrolling > 100) {
               $('.header').addClass('bg');
               $('.navbar').addClass('navbar-fixed-top');
           } else {
               $('.header').removeClass('bg');
               $('.navbar').removeClass('navbar-fixed-top');
           }
       });

       //    =========================================
       // smooth scroll start

       $('.navbar-nav a').click(function (e) {
           e.preventDefault();
           var hash = this.hash;
           var position = $(hash).offset().top - 70;
           $('html').animate({
               scrollTop: position
           }, 1000);
       });

       //    =============================================================================   
       // banner slidertart
       //   Slick Slider Code
       $('.banner_slider').slick({
           dots: true,
           arrows: false,
           speed: 500,
           fade: true,
           cssEase: 'linear',
           infinite: true,
           autoplay: true,
           autoplaySpeed: 1000,

       });
       //    =========================================   
       //       counter start

       $('.counter').counterUp({
           time: 3000
       });
       //    ========================================= 
       //       mixitub
       var container = document.querySelector('.gallery');
       var mixer = mixitup(container, {
           selectors: {
               control: '[our_mix_control]'
           }
       });

       //       ==========================================
       //       progressbar
       $('#bar1').barfiller({
           barColor: '#37a000',
           duration: 1000
       });
       $('#bar2').barfiller({
           barColor: '#37a000',
           duration: 1000
       });
       $('#bar3').barfiller({
           barColor: '#37a000',
           duration: 1000
       });
       $('#bar4').barfiller({
           barColor: '#37a000',
           duration: 1000
       });


       //       =================================================
       // team slider
       $('.team_text').slick({
           slidesToShow: 1,
           slidesToScroll: 1,
           arrows: false,
           fade: true,
           asNavFor: '.team_member'
       });

       $('.team_member').slick({
           slidesToShow: 5,
           slidesToScroll: 1,
           asNavFor: '.team_text',
           dots: false,
           autoplay: true,
           centerPadding: 0,
           arrows: true,
           prevArrow: '.team_pev_arrow',
           nextArrow: '.team_next_arrow',
           centerMode: true,
           //		focusOnSelect: true,
           responsive: [
               {
                   breakpoint: 767,
                   settings: {
                       slidesToShow: 3,
                       slidesToScroll: 1
                   }
			},
               {
                   breakpoint: 479,
                   settings: {
                       slidesToShow: 3,
                       slidesToScroll: 1
                   }
			}
		  ]
       });

       //    =============================================================================   
       //   Slick Slider Code
       $('.feedback_slider').slick({
           dots: false,
           arrows: false,
           speed: 500,
           //        fade: true,
           autoplay: true,
           autoplaySpeed: 1000,

       });
       //    =============================================================================   
       //   Slick Slider Code
       $('.blog_slider').slick({
           slidesToShow: 3,
           slidesToScroll: 1,
           dots: false,
           speed: 500,
           //        fade: true,
           autoplay: true,
           autoplaySpeed: 1000,
           prevArrow: '.blog_perv_arrow',
           nextArrow: '.blog_next_arrow',
           responsive: [
               {
                   breakpoint: 991,
                   settings: {
                       slidesToShow: 2,
                       slidesToScroll: 1
                   }
			},
               {
                   breakpoint: 767,
                   settings: {
                       slidesToShow: 2,
                       slidesToScroll: 1
                   }
			},
               {
                   breakpoint: 479,
                   settings: {
                       slidesToShow: 1,
                       slidesToScroll: 1
                   }
			}
		  ]

       });
       //    =============================================================================   
       //   Slick Slider Code
       $('.client_slider').slick({
           slidesToShow: 6,
           slidesToScroll: 1,
           autoplay: true,
           dots: false,
           autoplaySpeed: 2000,
           infinite: true,
           arrows: false,
           responsive: [
               {
                   breakpoint: 991,
                   settings: {
                       slidesToShow: 4,
                       slidesToScroll: 1
                   }
			},
               {
                   breakpoint: 767,
                   settings: {
                       slidesToShow: 3,
                       slidesToScroll: 1
                   }
			},
               {
                   breakpoint: 479,
                   settings: {
                       slidesToShow: 2,
                       slidesToScroll: 1
                   }
			}
		  ]

       });

       //=========================veno box ========================
       $(document).ready(function () {
           $('.venobox').venobox();
       });


       //=========================back top top =====================
       var offset = 250;
       var duration = 500;

       $(window).scroll(function () {
           if ($(this).scrollTop() > offset) {
               $('.back_to_top').fadeIn(duration);
           } else {
               $('.back_to_top').fadeOut(duration);
           }
       });


       $('.back_to_top').click(function () {
           $('html,body').animate({
               scrollTop: 0
           }, 1000)
       });


   });
