function getComputerChoice(){
    let cip=Math.ceil(Math.random()*3);
    let option="";
    if(cip==1){option ="rock"}
    else if(cip==2){option="scissors"}
    else{option="paper"}
    return option;
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice,compChoice){
    let winner='';
    if(humanChoice=="rock"){
        if(compChoice=="paper"){
            computerScore++;
            winner="computer";
        }
        else if (compChoice=="scissors"){
            humanScore++;
            winner="human";

        }
    }
    else if(humanChoice=="paper"){
        if(compChoice=="scissors"){
            computerScore++;
            winner="computer";

        }
        else if (compChoice=="rock"){
            humanScore++;
            winner="human";

        }
    }
    else{
        if(compChoice=="rock"){
            computerScore++;
            winner="computer";

        }
        else if (compChoice=="paper"){
            humanScore++;
            winner="human";

        }
    }
    alert("Round winner is "+ winner);
}

function startGame(){
    const btns=document.querySelectorAll("button");
    btns.forEach(btn=>{
        btn.addEventListener('click',()=>{
            btntext=btn.textContent.toLowerCase();
            alert("Your have choosed " +btntext);
            let cch=getComputerChoice();
            let hch=btntext;
            alert("Computer chose: "+cch);
            playRound(hch,cch);
            alert(`Scores: Human - ${humanScore}, Computer - ${computerScore}`);
            if(humanScore==5){
                alert("Human won ");
                humanScore=0;
                computerScore=0;
                alert("Game reseted");
            }
            else if (computerScore==5){
                alert("Computer Won");
                humanScore=0;
                computerScore=0;
                alert("Game reseted");
            }
        })
    })
}
startGame();