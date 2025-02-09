var no=document.querySelectorAll(".drum").length;
for(var i=0;i<no;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      /*  this.style.color="white";*/
      var butt= this.innerHTML;
     makesound(butt)
     buttonanimation(butt);
    });
}
document.addEventListener("keypress",function(Event){
    makesound(Event.key);
    buttonanimation(Event.key);
});
function makesound(key){
    switch(key){
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
                var audio=new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:console.log(butt);
      }
}
function buttonanimation(ck){
var active=document.querySelector("."+ck);
active.classList.add("pressed");
setTimeout(function(){
    active.classList.remove("pressed");
},100);
}