$(function(){


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
    readOnly: true
  });

});