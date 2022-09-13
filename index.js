
let secretNumber = Math.trunc(Math.random()*20 + 1)
let score =20;
let highscore =0;
// document.querySelector(".number").textContent =secretNumber


function displayMessage(message){
  document.querySelector('.message').textContent = message;
}

function setScore(score){
  document.querySelector(".score").textContent = score;
}

 document.querySelector(".check").addEventListener("click",function(){
   const guess= Number(document.querySelector(".guess").value)

   if(!guess){
     displayMessage("No Number :( , Place Guess ")
   }
   else if(guess ===secretNumber){
     displayMessage("Eureka Correct Number!!!!")
     document.querySelector("body").style.backgroundColor = "#60b347"
     document.querySelector(".number").style.width = "30rem"
     document.querySelector(".number").textContent =secretNumber

     if(score > highscore){
       highscore = score
       document.querySelector(".highscore").textContent=highscore
     }
   }
   else if(guess!==secretNumber){
     if(score>1){
       displayMessage(guess>secretNumber ?"Too High": "Too Low")
       score--;
     }
     else{
       displayMessage("RIP BOZO LMAOOOO")
     }
     setScore(score)
   }
})

document.querySelector(".again").addEventListener("click",function(){
  document.querySelector("body").style.backgroundColor = "#222"
  document.querySelector(".number").style.width = "17rem"
  document.querySelector(".number").textContent = "?"
  score =20;
  setScore(score)
  document.querySelector(".guess").value =""
  displayMessage("Start Guessing...")

})
