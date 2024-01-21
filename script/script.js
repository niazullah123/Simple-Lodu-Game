let totalSum = 0;
function roll() {
    let img = document.querySelector(".theImg");
    let theNumber = Math.trunc(Math.random() * 6 + 1);
    img.src = `images/dice-${theNumber}.png`;
    document.querySelector(".number").textContent = theNumber;

    totalSum += theNumber;

    document.querySelector(".number").textContent = `Team A : ${theNumber}`;
    document.querySelector(".totalSum").textContent = `Total Scor of team A: ${totalSum}`;

    if(totalSum > 100){
        alert('Team A won the match')
    }
}
let totalSum1 = 0;
function roll1() {
    let img1 = document.querySelector(".theImg1");
    let theNumber1 = Math.trunc(Math.random() * 6 + 1);
    img1.src = `images/dice-${theNumber1}.png`;
    document.querySelector(".number1").textContent = theNumber1;

    totalSum1 += theNumber1;

    document.querySelector(".number1").textContent = `Team B : ${theNumber1}`;
    document.querySelector(".totalSum1").textContent = `Total Scor of team B: ${totalSum1}`;

    if(totalSum1 > 100){
        alert('Team B won the match');
    }
}
