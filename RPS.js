let userScore = 0;
let compScore = 0;

const userchoicepara = document.querySelector("#user-score")
const compchoicepara = document.querySelector("#comp-score")
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompchoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawgame = () =>{
    console.log("Game is draw");
    msg.innerText = "Game was draw.Play again";
    msg.style.backgroundColor = "black"
}

const showWinner = (userwin) => {
    if(userwin){
        userScore++;
        userchoicepara.innerText = userScore;
        console.log("You win!");
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compchoicepara.innerText = compScore;
        console.log("You lose!");
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userchoice) => {
    const compchoice = genCompchoice();
    if(userchoice === compchoice){
        drawgame();
    } else {
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper"?false:true;
        } else if(userchoice === "paper"){
            userwin = compchoice === "scissors"?false:true;
        } else {
            userwin = compchoice === "rock"?false:true;
        }
        showWinner(userwin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        console.log("Choice was clicked",userchoice);
        playGame(userchoice);
    })
})