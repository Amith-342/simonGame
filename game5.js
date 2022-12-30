
var buttonCols = ["green","red","yellow","blue"];
var gamePatt = [];
var started = false;
var randomChosenColour;
var userClickedPattern = [];
var level = 0;
// $(document).keypress(function(){animateP(randomChosenColour);});

function newSequence(){
    
        userClickedPattern = [];
        ++level;
        $("h1").text("Level "+level);
        started = true;
        randNo = Math.random();
        randNo = randNo*4;
        randNo = Math.floor(randNo);
        
    
        randomChosenColour = buttonCols[randNo];
    gamePatt.push(randomChosenColour);
    console.log(randomChosenColour);
    animateP(randomChosenColour);
    
    }

$(document).keypress(function(){
    if(started === false){
    newSequence();}
});


function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePatt[currentLevel]){
        console.log("success.");
        if(currentLevel === level-1){
            setTimeout(function(){
                newSequence();
            },1000);
        }
    }
    else {
        $("body").addClass("game-over");
        setTimeout(function(){$("body").removeClass("game-over");},200);
        $("h1").text("Game-Over. Press any key to restart.");

        $(document).keypress(function(){
            strtOver();
        });

        console.log("wrong.");
        ad1 = new Audio("sounds/wrong.mp3");
        ad1.play();
        
    }
}

// $(".btn").mouseover(function(){
// console.log(this.id);
// $("#"+this.id).addClass("pressed");
//     var str = this.id;
    
//     setTimeout(function(){ 
//       $("#"+str).removeClass("pressed");},50);
// });

$(".btn").click(function() {
var userChosenColour = this.id;
userClickedPattern.push(userChosenColour);
animateP(userChosenColour);
checkAnswer(userClickedPattern.length-1);
});


function animateP(color){
    $("#"+color).addClass("pressed");
    
    
    setTimeout(function(){ 
      $("#"+color).removeClass("pressed");},150);

 var ad1;
     ad1 = new Audio("sounds/"+color+".mp3");
    ad1.play();


}

function strtOver(){
    level = 0;
    gamePatt = [];
    userClickedPattern = [];
    started = false;
    newSequence();
}

