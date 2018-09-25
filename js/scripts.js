//Busines logic
var answeredAll = 0;
var questions = function(Qn1,Qn2, Qn3, Qn4, Qn5){
  return Qn1 + Qn2 + Qn3 + Qn4 + Qn5
    answeredAll+=1

};// Business logic
//User interface
$(document).ready(function(){
$("form#test").submit(function(event){
  event.preventDefault();
var Qn1 = parseInt($("input:radio[name=choices]:checked").val());
var Qn2 = parseInt($("input:radio[name=answer]:checked").val());
var Qn3 = parseInt($("input:radio[name=answer1]:checked").val());
var Qn4 = parseInt($("input:radio[name=answer2]:checked").val());
var Qn5 = parseInt($("input:radio[name=answer3]:checked").val());


 var total = questions(Qn1, Qn2, Qn3, Qn4, Qn5);
 $(".development").hide();
 $("#outputs").text(total);
 var remarks = "";
 if (answeredAll===5) {
   report = "you have scored:";

   if (score <= 10) {
     $("#remark").text("bad");
   }else if(score <= 30) {
   $("#remark").text("average");
 }else if (score <= 40) {
   $("#remark").text("good");
 } else if(score === 50){
   $("#remark").text("Perfect");
 } else {
   report = "Ensure that you answer all questions and resubmit."
 }
 }



});
});
