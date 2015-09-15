$(document).ready(function() {
//Moving from place to place
  var pageHandler = function(event){
      
    event.preventDefault();
    var clickedPage = $(this).attr('rel');
    $(clickedPage).siblings().removeClass('active');
    $(clickedPage).addClass('active');
  };

  $('.wrapperThree').on('click', 'a', pageHandler);
  $('.wrapperTwo').on('click', 'a', pageHandler);

//Replaces answer in the dropdown-menu with the selection the user makes
  $(".dropdown-menu li a").click(function(){
  var selText = $(this).text();
  $(this).parents('.questionGroups').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
});
});

// Adding the Score for Quiz
var onePoint = 1;
var twoPoint = 2;
var threePoint = 3;
var fourPoint = 4;
var fivePoint = 5;
var sixPoint = 6;

var answerOne;
var answerTwo;
var answerThree;
var answerFour;
var answerFive;
var answerSix;
var answerSeven;
var answerEight;
var answerNine;
var answerTen;
var answerEleven;
var answerTwelve;
var answerThirteen;
var answerFourteen;
var answerFifteen;
var answerSixteen;
var answerSeventeen;
var answerEighteen;
var answerNineteen;
var answerTwenty;

//The return for answer one
$("#questionOneOne").click(function(){
    answerOne = onePoint;
    return answerOne;
});

$("#questionOneTwo").click(function(){
    answerOne = twoPoint;
    return answerOne;
});

$("#questionOneThree").click(function(){
    answerOne = threePoint;
    return answerOne;
});

$("#questionOneFour").click(function(){
    answerOne = fourPoint;
    return answerOne;
});

$("#questionOneFive").click(function(){
    answerOne = fivePoint;
    return answerOne;
});

$("#questionOneSix").click(function(){
    answerOne = sixPoint;
    return answerOne;
});

//Answer for question two

$("#questionTwoOne").click(function(){
    answerTwo = onePoint;
    return answerTwo;
});

$("#questionTwoTwo").click(function(){
    answerTwo = twoPoint;
    return answerTwo;
});

$("#questionTwoThree").click(function(){
    answerTwo = threePoint;
    return answerTwo;
});

$("#questionTwoFour").click(function(){
    answerTwo = fourPoint;
    return answerTwo;
});

$("#questionTwoFive").click(function(){
    answerTwo = fivePoint;
    return answerTwo;
});

$("#questionTwoSix").click(function(){
    answerTwo = sixPoint;
    return answerTwo;
});

//Answers for question three

$("#questionThreeOne").click(function(){
    answerThree = onePoint;
    return answerThree;
});

$("#questionThreeTwo").click(function(){
    answerThree = twoPoint;
    return answerThree;
});

$("#questionThreeThree").click(function(){
    answerThree = threePoint;
    return answerThree;
});

$("#questionThreeFour").click(function(){
    answerThree = fourPoint;
    return answerThree;
});

$("#questionThreeFive").click(function(){
    answerThree = fivePoint;
    return answerThree;
});

$("#questionThreeSix").click(function(){
    answerThree = sixPoint;
    return answerThree;
});

//Answer Four
$("#questionFourOne").click(function(){
    answerFour = onePoint;
    return answerFour;
});

$("#questionFourTwo").click(function(){
    answerFour = twoPoint;
    return answerFour;
});

$("#questionFourThree").click(function(){
    answerFour = threePoint;
    return answerFour;
});

$("#questionFourFour").click(function(){
    answerFour = fourPoint;
    return answerFour;
});

$("#questionFourFive").click(function(){
    answerFour = fivePoint;
    return answerFour;
});

$("#questionFourSix").click(function(){
    answerFour = sixPoint;
    return answerFour;
});

//Question five

$("#questionFiveOne").click(function(){
    answerFive = OnePoint;
    return answerFive;
});

$("#questionFiveTwo").click(function(){
    answerFive = twoPoint;
    return answerFive;
});

$("#questionFiveThree").click(function(){
    answerFive = threePoint;
    return answerFive;
});

$("#questionFiveFour").click(function(){
    answerFive = fourPoint;
    return answerFive;
});

$("#questionFiveFive").click(function(){
    answerFive = fivePoint;
    return answerFive;
});

$("#questionFiveSix").click(function(){
    answerFive = sixPoint;
    return answerFive;
});

//Question six

$("#questionSixOne").click(function(){
    answerSix = onePoint;
    return answerSix;
});

$("#questionSixTwo").click(function(){
    answerSix = twoPoint;
    return answerSix;
});

$("#questionSixThree").click(function(){
    answerSix = threePoint;
    return answerSix;
});

$("#questionSixFour").click(function(){
    answerSix = fourPoint;
    return answerSix;
});

$("#questionSixFive").click(function(){
    answerSix = fivePoint;
    return answerSix;
});

$("#questionSixSix").click(function(){
    answerSix = sixPoint;
    return answerSix;
});

//Question 7

$("#questionSevenOne").click(function(){
    answerSeven = onePoint;
    return answerSeven;
});

$("#questionSevenTwo").click(function(){
    answerSeven = twoPoint;
    return answerSeven;
});

$("#questionSevenThree").click(function(){
    answerSeven = threePoint;
    return answerSeven;
});

$("#questionSevenFour").click(function(){
    answerSeven = fourPoint;
    return answerSeven;
});

$("#questionSevenFive").click(function(){
    answerSeven = fivePoint;
    return answerSeven;
});

$("#questionSevenSix").click(function(){
    answerSeven = sixPoint;
    return answerSeven;
});

//Question Eight

$("#questionEightOne").click(function(){
    answerEight = onePoint;
    return answerEight;
});

$("#questionEightTwo").click(function(){
    answerEight = twoPoint;
    return answerEight;
});

$("#questionEightThree").click(function(){
    answerEight = threePoint;
    return answerEight;
});

$("#questionEightFour").click(function(){
    answerEight = fourPoint;
    return answerEight;
});

$("#questionEightFive").click(function(){
    answerEight = fivePoint;
    return answerEight;
});

$("#questionEightSix").click(function(){
    answerEight = sixPoint;
    return answerEight;
});

//Answer Nine

$("#questionNineOne").click(function(){
    answerNine = onePoint;
    return answerNine;
});

$("#questionNineTwo").click(function(){
    answerNine = twoPoint;
    return answerNine;
});

$("#questionNineThree").click(function(){
    answerNine = threePoint;
    return answerNine;
});

$("#questionNineFour").click(function(){
    answerNine = fourPoint;
    return answerNine;
});

$("#questionNineFive").click(function(){
    answerNine = fivePoint;
    return answerNine;
});

$("#questionNineSix").click(function(){
    answerNine = sixPoint;
    return answerNine;
});

//Answer text

$("#questionTenOne").click(function(){
    answerTen = onePoint;
    return answerTen;
});

$("#questionTenTwo").click(function(){
    answerTen = twoPoint;
    return answerTen;
});

$("#questionTenThree").click(function(){
    answerTen = threePoint;
    return answerTen;
});

$("#questionTenFour").click(function(){
    answerTen = fourPoint;
    return answerTen;
});

$("#questionTenFive").click(function(){
    answerTen = fivePoint;
    return answerTen;
});

$("#questionTenSix").click(function(){
    answerTen = sixPoint;
    return answerTen;
});

//Question Eleven
$("#questionElevenOne").click(function(){
    answerEleven = onePoint;
    return answerEleven;
});

$("#questionElevenTwo").click(function(){
    answerEleven = twoPoint;
    return answerEleven;
});

$("#questionElevenThree").click(function(){
    answerEleven = threePoint;
    return answerEleven;
});

$("#questionElevenFour").click(function(){
    answerEleven = fourPoint;
    return answerEleven;
});

$("#questionElevenFive").click(function(){
    answerEleven = fivePoint;
    return answerEleven;
});

$("#questionElevenSix").click(function(){
    answerEleven = sixPoint;
    return answerEleven;
});

//Question Twelve

$("#questionTwelveOne").click(function(){
    answerTwelve = onePoint;
    return answerTwelve;
});

$("#questionTwelveTwo").click(function(){
    answerTwelve = twoPoint;
    return answerTwelve;
});

$("#questionTwelveThree").click(function(){
    answerTwelve = threePoint;
    return answerTwelve;
});

$("#questionTwelveFour").click(function(){
    answerTwelve = fourPoint;
    return answerTwelve;
});

$("#questionTwelveFive").click(function(){
    answerTwelve = fivePoint;
    return answerTwelve;
});

$("#questionTwelveSix").click(function(){
    answerTwelve = sixPoint;
    return answerTwelve;
});

$("#questionThirteenOne").click(function(){
    answerThirteen = onePoint;
    return answerThirteen;
});

//Question Thirteen
$("#questionThirteenTwo").click(function(){
    answerThirteen = twoPoint;
    return answerThirteen;
});

$("#questionThirteenThree").click(function(){
    answerThirteen = threePoint;
    return answerThirteen;
});

$("#questionThirteenFour").click(function(){
    answerThirteen = fourPoint;
    return answerThirteen;
});

$("#questionThirteenFive").click(function(){
    answerThirteen = fivePoint;
    return answerThirteen;
});

$("#questionThirteenSix").click(function(){
    answerThirteen = sixPoint;
    return answerThirteen;
});

//Question Fourteen

$("#questionFourteenOne").click(function(){
    answerFourteen = onePoint;
    return answerFourteen;
});

$("#questionFourteenTwo").click(function(){
    answerFourteen = twoPoint;
    return answerFourteen;
});

$("#questionFourteenThree").click(function(){
    answerFourteen = threePoint;
    return answerFourteen;
});

$("#questionFourteenFour").click(function(){
    answerFourteen = fourPoint;
    return answerFourteen;
});

$("#questionFourteenFive").click(function(){
    answerFourteen = fivePoint;
    return answerFourteen;
});

$("#questionFourteenSix").click(function(){
    answerFourteen = sixPoint;
    return answerFourteen;
});

//Question Fifteen

$("#questionFifteenOne").click(function(){
    answerFifteen = onePoint;
    return answerFifteen;
});

$("#questionFifteenTwo").click(function(){
    answerFifteen = twoPoint;
    return answerFifteen;
});

$("#questionFifteenThree").click(function(){
    answerFifteen = threePoint;
    return answerFifteen;
});

$("#questionFifteenFour").click(function(){
    answerFifteen = fourPoint;
    return answerFifteen;
});

$("#questionFifteenFive").click(function(){
    answerFifteen = fivePoint;
    return answerFifteen;
});

$("#questionFifteenSix").click(function(){
    answerFifteen = sixPoint;
    return answerFifteen;
});

//Question Sixteen

$("#questionSixteenOne").click(function(){
    answerSixteen = onePoint;
    return answerSixteen;
});

$("#questionSixteenTwo").click(function(){
    answerSixteen = twoPoint;
    return answerSixteen;
});

$("#questionSixteenThree").click(function(){
    answerSixteen = threePoint;
    return answerSixteen;
});

$("#questionSixteenFour").click(function(){
    answerSixteen = fourPoint;
    return answerSixteen;
});

$("#questionSixteenFive").click(function(){
    answerSixteen = fivePoint;
    return answerSixteen;
});

$("#questionSixteenSix").click(function(){
    answerSixteen = sixPoint;
    return answerSixteen;
});

//Question Seventeen

$("#questionSeventeenOne").click(function(){
    answerSeventeen = onePoint;
    return answerSeventeen;
});

$("#questionSeventeenTwo").click(function(){
    answerSeventeen = twoPoint;
    return answerSeventeen;
});

$("#questionSeventeenThree").click(function(){
    answerSeventeen = threePoint;
    return answerSeventeen;
});

$("#questionSeventeenFour").click(function(){
    answerSeventeen = fourPoint;
    return answerSeventeen;
});

$("#questionSeventeenFive").click(function(){
    answerSeventeen = fivePoint;
    return answerSeventeen;
});

$("#questionSeventeenSix").click(function(){
    answerSeventeen = sixPoint;
    return answerSeventeen;
});

//Question Eighteen

$("#questionNineteeneenOne").click(function(){
    answerNineteeneen = onePoint;
    return answerEighteen;
});

$("#questionNineteeneenTwo").click(function(){
    answerNineteeneen = twoPoint;
    return answerEighteen;
});

$("#questionNineteeneenThree").click(function(){
    answerEighteen = threePoint;
    return answerEighteen;
});

$("#questionEighteenFour").click(function(){
    answerEighteen = fourPoint;
    return answerEighteen;
});

$("#questionEighteenFive").click(function(){
    answerEighteen = fivePoint;
    return answerEighteen;
});

$("#questionEighteenSix").click(function(){
    answerEighteen = sixPoint;
    return answerEighteen;
});

//Question Nineteen

$("#questionNineteenOne").click(function(){
    answerNineteen = onePoint;
    return answerNineteen;
});

$("#questionNineteenTwo").click(function(){
    answerNineteen = twoPoint;
    return answerNineteen;
});

$("#questionNineteenThree").click(function(){
    answerNineteen = threePoint;
    return answerNineteen;
});

$("#questionNineteenFour").click(function(){
    answerNineteen = fourPoint;
    return answerNineteen;
});

$("#questionNineteenFive").click(function(){
    answerNineteen = fivePoint;
    return answerNineteen;
});

$("#questionNineteenSix").click(function(){
    answerNineteen = sixPoint;
    return answerNineteen;
});

//Question Twenty

$("#questionTwentyOne").click(function(){
    answerTwenty = onePoint;
    return answerTwenty;
});

$("#questionTwentyTwo").click(function(){
    answerTwenty = twoPoint;
    return answerTwenty;
});

$("#questionTwentyThree").click(function(){
    answerTwenty = threePoint;
    return answerTwenty;
});

$("#questionTwentyFour").click(function(){
    answerTwenty = fourPoint;
    return answerTwenty;
});

$("#questionTwentyFive").click(function(){
    answerTwenty = fivePoint;
    return answerTwenty;
});

$("#questionTwentySix").click(function(){
    answerTwenty = sixPoint;
    return answerTwenty;
});

var stressTotal = answerOne + answerTwo + answerThree + answerFour + answerFive
+ answerSix + answerSeven + answerEight + answerNine + answerTen + answerEleven + answerTwelve
+ answerThirteen + answerFourteen + answerFifteen + answerSixteen + answerSeventeen
+ answerEighteen + answerNineteen + answerTwenty;
