let gameseq = [];
let userseq =[];


let btns = ["yellow","red","purple","green"];



let started = false;
let level = 0;

let h4 = document.querySelector("h4");

let startButton = document.getElementById("start-button");

// for start the game  

// document.addEventListener("keypress", function() {
//     if (!started) {
//         startGame();
//     }
// });

startButton.addEventListener("click", function() {
    if (!started) {
        startGame();
    }
});    
// game is started






function startGame() {
    //  game start logic here

    
    console.log("game start");
    started = true;
    startButton.disabled = true;
    levelup();
}




function gameFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash")
    },250);
}


function userFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash")
    },250);
}



function levelup()
{
    userseq=[];
    level++;
    h4.innerText= `level ${level}`;

    //random button choose

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameseq.push(randColor);
    console.log(gameseq);

    gameFlash(randBtn);
}

function btnPress(){
    //console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);

}

function checkAns(idx){
    //console.log("curr level : ", level);
   // let idx = level-1;
    if(userseq[idx] == gameseq[idx]){
        // console.log("same value");
        

        if(userseq.length== gameseq.length)
        {
            setTimeout(levelup,1000);
            //levelup();
        }

    }

    else{
        h4.innerHTML= `Game over! your score was <b> ${level} </b> press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "white"
        },150);
        reset();
    }
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click", btnPress);
}


function reset() {
    started = false;
    userseq =[];
    gameseq = [];
    level = 0;
    startButton.disabled = false;
   
}