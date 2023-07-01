let coinFlip;
let randomNum  = Math.round(Math.random())
console.log('Random number is: '+randomNum)
coinFlip = randomNum

let choice = prompt("Enter Heads or Tails");
 if(choice !== "Heads" && choice !== "Tails"){
     alert("Please enter only Heads or Tails")
 }

//if it’s less than a 0.5 , it will be heads. If it’s greater than .5 , it will be tails. 
if(coinFlip >= 0.5){
    coinFlip = "Heads"
} else {
    coinFlip = "Tails"
}
if(coinFlip === "Heads" && choice === "Heads"){
    alert("The flip was Heads and you chose Heads...you win!")
}
if(coinFlip ==="Heads" && choice === "Tails"){
    alert( "The flip was Heads but you chose Tails...you lose!")
}
if(coinFlip === "Tails" && choice === "Heads"){
alert("The flip was Tails but you chose Heads...you lose!"
    )
}
if(coinFlip === "Tails" && choice=== "Tails"){
    alert("The flip was Tails and you chose Tails...you win!"
)
}