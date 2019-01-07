/* global $ */

 $("button").click(function() {
         var totalScore = 0;
      var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var name = $("#name").val();
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
      
      
        q1(q1Result);
        q2(q2Result);
        q3(q3Result);


 











 
    function q1 (x){
 
 console.log(x);   
    
if (x === "Often"){
    
totalScore = totalScore + 15;    

}

else if (x === "not often"){
    
totalScore = totalScore + 5;    
    
}

else if (x === "never"){

totalScore = totalScore + 1;    
    
}    
    
}

function q2 (y){
    
     console.log(y);   
if (y === "Yes"){
    
totalScore = totalScore + 15;    
    
}

else if (y === "No") {
    
totalScore = totalScore + 5;    
    
}
  
}

function q3 (z){
    
 console.log(z);   
    
if (z === "Work"){
    
totalScore = totalScore + 20;    
    
}

else if (z === "Home"){
    
totalScore = totalScore + 1;    
    
}




    
}


console.log(totalScore);

var result;

if (totalScore >= 25 && totalScore >= 10){
  result =  "Alienware Computer";
    
    
}

else if (totalScore <= 25 && totalScore >= 10){
    
 result = "Razer Computer";    
    
}

else if (totalScore <=25 && totalScore <=10)  {
    
 result = "Dell Inspiron Computer";
    
    
}

$(".button").hide();
$(".result").text("Congratualtions, " + " " + name + " " + "you should buy a " + result + "!");

});


