


$('.header-slider').slick(
    {
        autoplay:true,
        autoplaySpeed:5000,
        slidesToShow:1,
        slidesToScroll:1,
        draggable:false,
        infinite:true
    });



    $('.header-slider').on('afterChange', function(event, slick, currentSlide){
      $('.notify').removeClass('d-none');
      $('.notify').addClass('d-block');
  });
  
  $('.header-slider').on('beforeChange', function(event, slick, currentSlide){
      $('.notify').removeClass('d-block');
      $('.notify').addClass('d-none');
  });



    $('.multiple-items').slick({
        
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
          




      
        $('.bd-example-modal-lg').on('show.bs.modal', function (e) {

            var image = $(event.target).parent().find("img").attr("src");
            $("#d-img").attr("src", image);
        });
