var multipleCardCarousel_Panel = document.querySelector(
    "#carouselPanelControls"
  );
  if (window.matchMedia("(min-width: 768px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel_Panel, {
      interval: false,
    });
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carouselPanelControls #panel-carousel-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        $("#carouselPanelControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
    $("#carouselPanelControls #panel-carousel-prev").on("click", function () {    
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $("#carouselPanelControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel_Panel).addClass("slide");
  }

  var multipleCardCarousel_Automotive = document.querySelector(
    "#carouselAutomotiveControls"
  );
  if (window.matchMedia("(min-width: 768px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel_Automotive, {
      interval: false,
    });
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carouselAutomotiveControls #automotive-carousel-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        $("#carouselAutomotiveControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
    $("#carouselAutomotiveControls #automotive-carousel-prev").on("click", function () {    
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $("#carouselAutomotiveControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel_Automotive).addClass("slide");
  }
  
  var multipleCardCarousel_Home = document.querySelector(
    "#carouselHomeControls"
  );
  if (window.matchMedia("(min-width: 768px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel_Home, {
      interval: false,
    });
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carouselHomeControls #home-carousel-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        $("#carouselHomeControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
    $("#carouselHomeControls #home-carousel-prev").on("click", function () {    
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $("#carouselHomeControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel_Home).addClass("slide");
  }


$(document).keydown(function(e){        
    var isModal = document.getElementsByClassName('modal-active');
    if(isModal.length == 0)
    {        
        if(e.keyCode == 37){
            if (scrollPosition > 0) {
                scrollPosition -= cardWidth;
                $(".selected .carousel-inner").animate(
                    { scrollLeft: scrollPosition },
                    600
                );
              }
          }
          else if(e.keyCode == 39){
            if (scrollPosition < carouselWidth - cardWidth * 4) {
                scrollPosition += cardWidth;
                $(".selected .carousel-inner").animate(
                    { scrollLeft: scrollPosition },
                    600
                );
            }
          }
    }    
});
