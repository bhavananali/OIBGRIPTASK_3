let hoursInputEl = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let convertBtnEl = document.getElementById("convertBtn");
let timeEl = document.getElementById("timeInSeconds");
let errorMsgEl = document.getElementById("errorMsg");

function calculateSecs(event) {
    if (hoursInputEl.value === "") {
        errorMsgEl.textContent = "Enter valid input of Temperature*";
        timeEl.textContent = "";
    } else {
        errorMsgEl.textContent = "";
        timeEl.textContent =(hoursInputEl.value*1.8)+32;
    }
}
function clearC(event){
    hoursInputEl.value="";
    timeEl.textContent="";
}
convertBtnEl.addEventListener("click", calculateSecs);
clrBtn.addEventListener("click",clearC);
