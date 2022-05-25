$(function(){



  $('.products-slide__thumb').slick({
    asNavFor: '.products-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable:false,  
    arrows:false,
  });
  $('.products-slide__big').slick({
    asNavFor: '.products-slide__thumb',
    draggable:false,
    arrows:false,
    fade:true,
    
  });


  $('.slider-top__inner').slick({
    dots:true,
    arrows:false,
    fade:true,
    autoplay:true,
    autoplaySpeed: 2000


  });


 var containerEl1 = document.querySelector('[data-ref="container-1"]');
 var containerEl2 = document.querySelector('[data-ref="container-2"]');
 
  var config = {
      controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);





});

$(function(){

$('.select-style, .products-content__num').styler();

  $(".filter-price__input").ionRangeSlider({
    type: "double", 
    prefix: "$",

    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);

    },

  });

 $(".star").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "5px"
  });

  $(".catalog-content__star").rateYo({
    starWidth: "17px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "10px"
  });

  $(".products-content__star").rateYo({
    starWidth: "17px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "10px"

})

$('.products-relate__slide').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 4,
  slidesToScroll: 1,
  // autoplay:true,
  // arrows:false,
});

});