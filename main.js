$(document).ready(function() {
//Moving from place to place
  var pageHandler = function(event){
    console.log("this element ",$(this).attr('rel'));
    event.preventDefault();
    var clickedPage = $(this).attr('rel');
    $(clickedPage).siblings().removeClass('active');
    $(clickedPage).addClass('active');
  };

  $('.wrapperOne').on('click', 'a', pageHandler);

  //Tranistion page Animation
  $(".wrapperOne").animsition({

    inClass               :   'fade-in',
    outClass              :   'fade-out',
    inDuration            :    1500,
    outDuration           :    800,
    linkElement           :   '.animsition-link',
    // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
    loading               :    true,
    loadingParentElement  :   'body', //animsition wrapper element
    loadingClass          :   'animsition-loading',
    unSupportCss          : [ 'animation-duration',
                              '-webkit-animation-duration',
                              '-o-animation-duration'
                            ],

    overlay               :   false,

    overlayClass          :   'animsition-overlay-slide',
    overlayParentElement  :   'body'
  });

});
