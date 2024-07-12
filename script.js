let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const User_score=document.querySelector("#user-score");
const Comp_score=document.querySelector("#comp-score");
const genCompChoice=()=>{
    //rock,paper,scissors
    const options=["rock","paper","scissors"];
    
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame=()=>{
    

    msg.innerText="Game was draw!";
    msg.style.backgroundColor="black";
    const sound=new Audio("draw.mp3");
        sound.play();
    
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        User_score.innerText=userScore;
        const sound=new Audio("success.mp3");
        sound.play();
        msg.innerText= `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        Comp_score.innerText=compScore;
        const sound=new Audio("lose.mp3");
        sound.play();
        msg.innerText=`You Lose! Computer ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";

}
};
const playGame=(userChoice)=>{
    console.log("user choice = ",userChoice);
    const compChoice =genCompChoice();
    console.log("comp choice = ",compChoice);
    if(userChoice===compChoice){
       drawGame();
    }
    else{
        let userWin= true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper" ? false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors" ? false:true;
        }
        else{
            userWin=compChoice==="rock" ? false:true;

        }
        showWinner(userWin,userChoice,compChoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{ 
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
});
});