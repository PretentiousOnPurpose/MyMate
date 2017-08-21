
var inc = document.querySelector('#input1');
var game = document.querySelector('#input2');
var ice = document.querySelector('#input3');
var check = document.querySelector('#check');
var ipSec = document.querySelector('#input');
var result = document.querySelector('#result');
var resP = document.querySelector('#resP');
var img = document.querySelector('#emo');
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function isMate() {
    if ((inc.innerHTML && game.innerHTML) && ice.innerHTML) {
       if ((isNumeric(inc.innerHTML) && isNumeric(game.innerHTML)) && isNumeric(ice.innerHTML)) {
           ipSec.style.display = "none";
           check.style.display = "none";
           result.style.display = "flex";
           if (isMyMate(inc , game ,ice) === "one") {
               resP.innerHTML = "You Wont Like Him!";
               img.src = "one.png";
           } else if (isMyMate(inc , game ,ice) === "two") {
               resP.innerHTML = "He's Cute!";
               img.src = "two.png";
           } else {
               resP.innerHTML = "You Will Love Him!";
               img.src = "thr.png";
           }
       } else {
           alert("Invalid input. Try again");
           reset();
       }
    } else {
        alert("Invalid input. Try again");
        reset();
    }
}

function reset() {
    ipSec.style.display = "flex";
    check.style.display = "inline";
    result.style.display = "none";
    resP.innerHTML = "";
    inc.innerHTML = "";
    game.innerHTML = "";
    ice.innerHTML = "";
}