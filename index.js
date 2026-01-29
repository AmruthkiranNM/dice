var randomnum1=Math.floor((Math.random()*6)+1);

var randomnum2=Math.floor(Math.random()*6)+1;


document.querySelector(".img1").setAttribute("src","images/dice"+randomnum1+".png");

document.querySelector(".img2").setAttribute("src","images/dice"+randomnum2+".png");

function winner(){
    if(randomnum1>randomnum2){
        return document.querySelector("h1").innerText="Player-1 wins!!";
    }
    else if(randomnum1<randomnum2){
        return document.querySelector("h1").innerText="Player-2 wins!!";
    }
    else{
        return document.querySelector("h1").innerText="!! Its a draw!!!";
    }
}

document.querySelector("h1").innerText(winner());


