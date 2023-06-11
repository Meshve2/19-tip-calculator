const billInput = document.querySelector('bill-input')
const peopleInput = document.querySelector('people-input')
const tipPerson = document.querySelectorbyId('amount-numm')
const totalPerson = document.querySelectorById('total-numm')
const tips = document.querySelectorAll(".tips")

billInput.addEventListener("input", billInput)
peopleInput.addEventListener("input", peopleInput)
tips.forEach(function (val) {
    val.addEventListener('click', handlecklick);
});

billInput.value = "0.0";
peopleInput.value = "1";
tipPerson.innerHTML = "$" + (0.0).toFixed(2)
totalPerson.innerHTML = "$" (0.0).toFixed(2)

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;


function billInputFun() {
    billValue = parseFloat(billInput.value);
    console.log(billValue);
}

function peopleInputFun() {
    peopleValue = parseFloat(peopleInputFun.value);
    console.log(peopleValue)
}

function handlecklick(event) {
    tips.forEach(function (val) {
        val.classList.remove("tip-15color");
        if (event.target.innerHTML == val.innerHTML) {
            val.classList.add("tip-15color");
            tipValue = parseFloat(val.innerHTML) / 100;
        }
    })
    console.log(tipValue)
}
function calculateTip() {
    if (peopleValue >= 1) {
        let amountnumm = (billValue * amountnumm) / peopleValue;
        let totalnumm = (billValue * amountnumm) / peopleValue;
        tipPerson.innerHTML = "$" + (0.0).toFixed(2)
        totalPerson.innerHTML = "$" (0.0).toFixed(2)

    }
}