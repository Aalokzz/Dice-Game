function rollDice() {
    //setting up first and second number
    var firstNum = Math.floor((Math.random()*6)+1);
    var secondNum = Math.floor((Math.random()*6)+1);
    //setting up the dice images
    document.querySelector(".img1").setAttribute("src","./Assets-Dice/dice-six-faces-"+firstNum+".png");
    document.querySelector(".img2").setAttribute("src","./Assets-Dice/dice-six-faces-"+secondNum+".png");

    //setting up the winner
    if(firstNum>secondNum){
        document.querySelector(".hidden").innerHTML = "Player 1 Wins!";
        document.querySelector(".hidden").style.display="flex";
        document.querySelector(".hidden").style.fontSize="2rem";
        document.querySelector(".hidden").style.textAlign="center";
    }
    else if(firstNum<secondNum){
        document.querySelector(".hidden").innerHTML = "Player 2 Wins!";
        document.querySelector(".hidden").style.display="flex";
        document.querySelector(".hidden").style.fontSize="2rem";
        document.querySelector(".hidden").style.textAlign="center";
    }
    else{
        document.querySelector(".hidden").innerHTML = "Draw!";
        document.querySelector(".hidden").style.display="flex";
        document.querySelector(".hidden").style.fontSize="2rem";
        document.querySelector(".hidden").style.textAlign="center";
    }
}