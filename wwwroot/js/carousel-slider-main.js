$(document).keydown(function(e){        
    
    var isModal = document.getElementsByClassName('modal-active');
    if(isModal.length == 0)
    {        
      if(e.keyCode == 37)
          $('#carouselMainControls').carousel('prev');          
        else if(e.keyCode == 39)
          $('#carouselMainControls').carousel('next');          
    }    
});

$(document).ready(function() {
    $(".video-section").focus();
});