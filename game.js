var gamePattern=[];
var userClickedPattern=[];
var buttonColours=["red","blue","green","yellow"]; // id of 4 buttons  aur content of buttonColours same 

var level=0;

//step4
$(".btn").on("click",function (){
    var userChosenColour = $(this).attr("id");

   
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});






function nextSequence()
{

//step 8
userClickedPattern=[];
level=level+1;
$("#level-title").text("Level "+level);


var n=Math.random();
n=n*3;
randomNumber=Math.floor(n)+1;
var randomChosenColour=buttonColours[randomNumber];
gamePattern.push(randomChosenColour);
//step 3

$("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
//step3

playSound(randomChosenColour);



}
// step 10
function startOver()
{
    level=0;
    gamePattern=[];
    $(document).one('keydown',function(){
        $("#level-title").text("Level 0");
         nextSequence();
         
     });
}


 // step 8 

 function checkAnswer(currentLevel)
 {
if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
console.log("success");

if(gamePattern.length===userClickedPattern.length)
setTimeout(function(){
    nextSequence()
},1000);




 }
 else{ 
     
console.log("wrong");
 $("#level-title").text("Game Over, Press Any Key to Restart");
 playSound('wrong');

$("body").addClass("game-over");
setTimeout(function(){
    $("body").removeClass("game-over");
},300);


//step 10
startOver();




}
}


// step 10



//step 5
function playSound(name)
{
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}


//step 6
function animatePress(currentColour)
{
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
     $("#"+currentColour).removeClass("pressed");
       },100);
}

 //step 7

 $(document).one('keydown',function(){
    $("#level-title").text("Level 0");
     nextSequence();
     
 });
