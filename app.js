const appForm = document.getElementById("num-form");
const numInput = document.getElementById("num-input");
const msg = document.getElementById("txt");
const btnPlace = document.getElementById("play-again");
const btnSubmit = document.getElementById("num-submit");
let num;
let trial = 2;

num = Math.floor(Math.random() * 10) + 1;

appForm.addEventListener("submit", function(e){
    if(trial > 0){
        if(num === Number(numInput.value)){
            msg.textContent = "Congrats!";
            numInput.disabled = true;
            btnSubmit.disabled = true;

            showBtnPlayAgain();
        }else{
            msg.textContent = "Sorry!, " + trial + " turn(s) left.";
        }
    }else{
        msg.textContent = "Sorry! You failed.";
        numInput.disabled = true;
        btnSubmit.disabled = true;

        if(trial === 0){
            showBtnPlayAgain();
        }
    }
    
    trial -= 1;
    e.preventDefault();
});

function showBtnPlayAgain(){
    const btnNew = document.createElement("button");
    btnNew.innerText = "Play Again!";
    btnNew.id = "btnPlayAgain";
    btnPlace.appendChild(btnNew);

    btnNew.addEventListener("click", function(){
        trial = 2;
        num = Math.floor(Math.random() * 10) + 1;
        numInput.disabled = false;

        msg.textContent = "Go! Go!";

        btnNew.remove();
        btnSubmit.disabled = false;
    });
}