function getComputerChoice(){
    let cip=Math.ceil(Math.random()*3);
    let option="";
    if(cip==1){option ="rock"}
    else if(cip==2){option="scissors"}
    else{option="paper"}
    return option;
}

function getHumanChoice(){
    let hip=prompt("Enter your choice ");
    return hip.toLowerCase();

}

function playRound(humanChoice,compChoice){
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

let winner="";
let humanScore=0;
let computerScore=0;
for(let i=0;i<5;i++){
    alert("Round "+(i+1));
    let comp_ip=getComputerChoice();
    console.log(comp_ip);
    let human_ip=getHumanChoice();
    console.log(human_ip);
    playRound(human_ip,comp_ip);
    console.log("Human: "+ humanScore);
    console.log("Computer: "+ computerScore);
}
if(humanScore>computerScore){
    alert("Human Won");
}
else if(computerScore>humanScore){
    alert("Computer Won")
}