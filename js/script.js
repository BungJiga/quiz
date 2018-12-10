/* global $ */


  



 $("button").click(function() {

      var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;



  


function q1 (){
    
    
if (q1Result == "Often"){
    
totalScore + 15;    
    
}

else if (q1Result == "not often"){
    
totalScore + 5;    
    
}

else{

totalScore + 1;    
    
}    
    
}

function q2 (){
    
    
if (q2Result == "Yes"){
    
totalScore + 15;    
    
}

else {
    
totalScore + 5;    
    
}
  
}

function q3 (){
    
    
if (q3Result == "Work"){
    
totalScore + 20;    
    
}

else{
    
totalScore + 1;    
    
}

    
}

});