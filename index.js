
$(document).keypress(function(){
console.log(event.key);
var arr1 = [];
let j=0;
   setTimeout(function() {while(j<6){
    
    let x = Math.random();
    x = x*4;
    x = Math.floor(x);
    // console.log(x);
    arr1.push(x);
    
      
          $(".a"+x).addClass("pressed");
          setTimeout(function() {$(".a"+x).removeClass("pressed");},100);
    
           $("button").click(function(){
            console.log($(".a"+x).attr());
           });
    // for(let k = 0;k<arr1.length;k++){
        
    //     console.log("arr "+arr1[k]);
    //    for(let i=0;i<5;i++){
    //        $(".a"+i).click(function(){
    //            if(i !== arr1[k]){
    //            var ad = new Audio("sounds/wrong.mp3");
    //            }
    //        });
    //    }
    // }



    
    //setTimeout(function(){console.log(j)},800);
    j++;
    console.log("Done");
}}, 150);

});