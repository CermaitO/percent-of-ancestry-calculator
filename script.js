let button = document.getElementById("button");
button.addEventListener("click", calculate)

function calculate() {
    let input = document.getElementById("greatX").value;
    let inputNum = Number(input) + 3
    let answer = document.getElementById("answer")
    let amount = document.getElementById("amount");
    let hundred = 200 //since the division begins at the first ancestor, who is 100% himself not 50, I set this to 200 to compensate
   
    for (i = 0; i < inputNum; i++) {
        hundred = hundred / 2;
        let numOfAncestors = 100 / hundred.toFixed(10) //divides 100 the percentage, the answer is the amount of ancestors at that generation.
        answer.innerHTML = `This ancestor accounts for ${hundred.toFixed(10)}% of your ancestry`
        amount.innerHTML = `You have ${numOfAncestors} great x ${input} grandparents in total, not accounting for repeat ancestors.`
        
    }
}
