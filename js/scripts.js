var words001 = ["question 01", "question 02", "question 03", "question 04", "question 05", "question 06", "question 07", "question 08", "question 09", "question 010"];
var words002 = ["1", "2", "3", "4", "4", "3", "2", "1", "2", "1"];
var choice001 = ["", "", "", "", "", "", "", "", "", ""];
var choice003 = ["", "", "", "", "", "", "", "", "", ""];
var choice004 = ["", "", "", "", "", "", "", "", "", ""];
var correct = ["correct", "correct", "correct", "correct", "correct", "correct", "correct", "correct", "correct", "correct"];
var incorrect = ["incorrect", "incorrect", "", "", "", "", "", "", "", ""];

var e = 0;
e++;
var z =0;
z++;

function begin001() {
  number001.innerHTML = z++;
  message001.innerHTML = words001[0];
  typings001.innerHTML =  choice001[0];
  typings002.innerHTML =  choice002[0];
  typings003.innerHTML =  choice003[0];
  typings004.innerHTML =  choice004[0];
  disappear001.innerHTML = "<input type=text id=input001 size=1 maxlength=1 /><button class blue=001>"
  answer001.innerHTML= "<button class=blue001 onclick=submit001()>submit</button>";
}
