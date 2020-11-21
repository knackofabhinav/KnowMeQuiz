var readlineSync = require("readline-sync");
var score = 0;

var userName = readlineSync.question("Please give me your name: ")
var upper = userName.toUpperCase()
console.log("Welcome "+ upper + " to \"HOW WE DO YOU KNOW ABHINAV?\" quiz: \n")
console.log("You can type option as your answer as well as you can also type the answer, Quiz starts from here: \n");

function play(answer,otherAnswer){
  console.log()
  var userAnswer = readlineSync.question("Answer? : ")
  var lowerAnswer = userAnswer.toLowerCase();

  if ((lowerAnswer === answer) || (lowerAnswer === otherAnswer)){
    console.log('You are right man!!')
    score= score+1;
    console.log("Current score:"+ score)
    console.log(" ")
  } else {
    console.log("You dont Know me enough bruh :( ");
    console.log(" The Right answer is: "+ otherAnswer);
    score= score-1;
    console.log("Current score:"+ score);
    console.log(" ")
  }
}

var array =[
  {
  question:"What were my career plans before coding?\na = Engineering\nb = Doctor\nc = Lawyer\nd = Police",
  answer:"b",
  answerTwo:"doctor"
},
{
  question:"What is my real surname?\na = Patel\nb = Niranjan\nc = Das\nd = None of the above",
  answer:"a",
  answerTwo:"patel"
},
{
  question:"Who inspires me the most?\na = Jordan B Peterson\nb = Tim Ferriss\nc = David Goggins\nd = None of the above",
  answer:"a",
  answerTwo:"jordan b peterson"
},
{
  question:"Which emotion I lack the most?\na = Crying\nb = Sympathy\nc = Kindness\nd = None of the above",
  answer:"a",
  answerTwo:"crying"
},
{
  question:"Which pets i love the most?\na = Dogs\nb = Cats\nc = Birds\nd = None of the above",
  answer:"b",
  answerTwo:"cats"
},
{
  question:"Which is my favorite podcast?\na = Jay Shetty\nb = Sam Harris\nc = Joe Rogan\nd = None of the above",
  answer:"c",
  answerTwo:"joe rogan"
},{
  question:"Which is my hometown?\na = Jhansi\nb = Kanpur\nc = Kota\nd = Orai",
  answer:"d",
  answerTwo:"orai"
}]
for(var i=0;i<array.length;i++)
{
  console.log("Ques",(i+1),':',(array[i].question));
  play(array[i].answer, array[i].answerTwo);
} 
console.log("\n\t Your Final score is:" + score);

if(score==7)
{
  console.log("\nWOW BRUHHHH ! You have very high Knowledge About me lol !!!");
}
else {
  if((score==5)||(score==6))
  {
    console.log("\tYou score good!!,Congrats");
  }
  else{
    if((score>=4)&&(score<2))
    {
    console.log("You score is average, Keep it Up!!");
   }
   else
   {
     console.log("You are below average,Blown up Hard!!");
   }

  }
}
