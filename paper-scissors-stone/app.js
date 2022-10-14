const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result")
const possibleChoice = document.querySelectorAll("button");
let userChoice
let computerChoice
let result

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) =>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();

}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3)+1
    if(randomNumber ===1){
        computerChoice ="stone"
    }else if(randomNumber===2){
computerChoice= "paper"
    }else{
        computerChoice = "scissors"
    }
    computerChoiceDisplay.innerHTML =computerChoice
}


function getResult(){
    if(computerChoice === userChoice){
        result = "it's a draw !"
    }else if(computerChoice === "stone" && userChoice ==="paper"){
result= "You Win"
    }else if(computerChoice === "stone" && userChoice ==="scissors"){
        result= "You Lost !"
}else if(computerChoice === "scissors" && userChoice ==="paper"){
    result= "You Lost !"
}else if(computerChoice === "scissors" && userChoice ==="stone"){
    result= "You Win"
}else if(computerChoice === "paper" && userChoice ==="scissors"){
        result= "You Win"
}else if(computerChoice === "paper" && userChoice ==="stone"){
    result= "You Lost"}
resultDisplay.innerHTML = result;
}
