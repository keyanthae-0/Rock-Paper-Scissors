let chooseRock = document.getElementById("rock")
let choosePaper = document.getElementById("paper")
let chooseScissors = document.getElementById("scissors")

chooseRock.addEventListener('click', () =>{
    console.log("You chose rock!")
})

choosePaper.addEventListener('click', () =>{
    console.log("You chose rock!")
})

chooseScissors.addEventListener('click', () =>{
    console.log("You chose rock!")
})

//Function to get computers choice
function getComputerChoice(){ 
    let computerChoice = Math.round(Math.random() * 2)
    if(computerChoice == 0){
        return "Rock"
    }
    else if(computerChoice == 1){
        return "Paper"
    }
    else if(computerChoice == 2){
        return "Scissors"
    }
    return computerChoice;
}

// //Function to get Humans choice
// function getHumanChoice(){
//     let humanChoice = prompt("Rock, Paper, Scissors").toUpperCase();
//     return humanChoice
// }

// //Function to start the round
// function playRound(humanChoice, computerChoice){

//     if(humanChoice == "ROCK" && computerChoice == "PAPER"){
//         return 'Computer'
//     }
//     else if(humanChoice == "PAPER" && computerChoice == "SCISSORS"){
//         return 'Computer'
//     }
//     else if(humanChoice == "SCISSORS" && computerChoice == "ROCK"){
//         return 'Computer'
//     }
//     else if(humanChoice == "PAPER" && computerChoice == "ROCK"){ 
//         return 'Human'
//     }
//     else if(humanChoice == "SCISSORS" && computerChoice == "PAPER"){
//         return 'Human'
//     }
//     else if(humanChoice == "ROCK" && computerChoice == "SCISSORS"){
//         return 'Human'
//     }
//     else if(humanChoice == computerChoice){
//         return 'Tie'
//     }
    
// }

// //Function to start the game
// function playGame(){
//     let humanScore = 0
//     let computerScore = 0

//     let round1 = playRound(getHumanChoice(), getComputerChoice())
//     if(round1 == 'Human'){
//         humanScore++
//     }
//     else if(round1 == 'Computer'){
//         computerScore++
//     }
//     let round2 = playRound(getHumanChoice(), getComputerChoice())
//     if(round2 == 'Human'){
//         humanScore++
//     }
//     else if(round2 == 'Computer'){
//         computerScore++
//     }
//     let round3 = playRound(getHumanChoice(), getComputerChoice())
//     if(round3 == 'Human'){
//         humanScore++
//     }
//     else if(round3 == 'Computer'){
//         computerScore++
//     }
//     let round4 = playRound(getHumanChoice(), getComputerChoice())
//     if(round4 == 'Human'){
//         humanScore++
//     }
//     else if(round4 == 'Computer'){
//         computerScore++
//     }
//     let round5 = playRound(getHumanChoice(), getComputerChoice())
//     if(round5 == 'Human'){
//         humanScore++
//     }
//     else if(round5 == 'Computer'){
//         computerScore++
//     }


//     if(humanScore > computerScore){
//         return console.log(`Human wins`)
//     }
//     else if(computerScore > humanScore){
//         return console.log(`Computer Wins`)
//     }
//     else{
//         return console.log(`Tie`)
//     }
// }



