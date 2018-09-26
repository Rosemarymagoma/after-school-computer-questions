//Busines logic

var myQuestions = function(questionOne, questionTwo, questionThree, questionFour, questionFive){
  return questionOne + questionTwo + questionThree + questionFour + questionFive


};//  End of Business logic
//User interface
$(document).ready(function(){
$("form#test").submit(function(event){
  event.preventDefault();
var questionOne = parseInt($("input:radio[name=choices]:checked").val());
var questionTwo = parseInt($("input:radio[name=answer]:checked").val());
var questionThree = parseInt($("input:radio[name=answer1]:checked").val());
var questionFour = parseInt($("input:radio[name=answer2]:checked").val());
var questionFive = parseInt($("input:radio[name=answer3]:checked").val());


 var totalScore = myQuestions(questionOne, questionTwo, questionThree, questionFour, questionFive);
 $(".development").hide();
 $("#outputs").text(totalScore);
});
});
