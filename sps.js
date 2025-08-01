let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const resetGame=document.querySelector("#btn");

const genCompChoice=()=>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const draw=()=>{
    msg.innerText="Match was draw!.Try again...";
    msg.style.backgroundColor = "silver";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You won ! Your ${userChoice} beats computer's ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lost ! Computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame=(userChoice)=>{
    
    const compChoice = genCompChoice();
    
    if(userChoice === compChoice){
        draw();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice==="paper"?false:true;
        }else if(userChoice === "paper"){
            userWin = compChoice==="scissors"?false:true;
        }else{
            userWin = compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const reset=()=>{
    userScore=0;
    userScorePara.innerText=userScore;
    compScore=0;
    compScorePara.innerText=compScore;
    msg.innerText="Play your move";
    msg.style.backgroundColor = "rgb(7, 7, 188)"
};

resetGame.addEventListener("click",reset);