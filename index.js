const buttons = document.querySelectorAll(".drum");

for (let i = 0; i < buttons.length; i++) {
   buttons[i].addEventListener("click", function () {
      let buttonInnerHTML = this.innerHTML;
      playSound(buttonInnerHTML);
      playAnimation(buttonInnerHTML);
   })
}

document.addEventListener("keypress", function(event){
   playSound(event.key);
   playAnimation(event.key);
});

function playSound (character){

   switch (character) {
      case "a":
         const crash = new Audio('./sounds/crash.mp3')
         crash.play()
         break
      case "s":
         const kick = new Audio('./sounds/kick-bass.mp3')
         kick.play()
         break
      case "d":
         const snare = new Audio('./sounds/snare.mp3')
         snare.play()
         break
      case "f":
         const tom1 = new Audio('./sounds/tom-1.mp3')
         tom1.play()
         break
      case "j":
         const tom2 = new Audio('./sounds/tom-2.mp3')
         tom2.play()
         break
      case "k":
         const tom3 = new Audio('./sounds/tom-3.mp3')
         tom3.play()
         break
      case "l":
         const tom4 = new Audio('./sounds/tom-4.mp3')
         tom4.play()
         break
      default:
         console.log(buttonInnerHTML)
   }
}

function playAnimation (character){
   const currentButton = document.querySelector(`.${character}`);
   currentButton.classList.add("pressed");
   setTimeout(function(){
      currentButton.classList.remove("pressed");
   }, 100);
}