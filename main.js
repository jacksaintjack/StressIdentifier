

var pointTotal = [];
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
  $('.wrapperTwo').on('click', 'a', pageHandler);

//Replaces answer in the dropdown-menu with the selection the user makes
  $(".dropdown-menu li a").click(function(){
  var selText = $(this).text();
  $(this).parents('.questionGroups').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
});

// Adding the Score for Quiz
$(".pointOne").click(function(){
  pointTotal.push(1);
  alert(pointTotal);
});

$(".pointTwo").click(function(){
  pointTotal.push(2);
  alert(pointTotal);
});

$(".pointThree").click(function(){
  pointTotal.push(3);
  alert(pointTotal);
});

$(".pointFour").click(function(){
  pointTotal.push(4);
  alert(pointTotal);
});

$(".pointFive").click(function(){
  pointTotal.push(5);
  alert(pointTotal);
});

$(".pointSix").click(function(){
  pointTotal.push(6);
  alert(pointTotal);
});

});
