
//Set global variable that would contain the position, velocity and the html element "ball"
var velocity = 10;
var ball = document.getElementById("ball");
var positionX = 0;
var positionY = 0;
var reverse = false;
var inverse = false;

var Xmin = 0;
var Xmax = 900;
var Ymin = 0;
var Ymax = 300;

//write a function that can change the position of the html element "ball"
function moveBall() {
    ball.style.left = movX() + 'px';
    ball.style.top = movY() + 'px';
	// two fixed x-axis coordinates (you will use these variable in step 3)
}
let toggleVar = false;
function toggle(){
    toggleVar = !toggleVar;
    console.log(toggleVar)
}

function play() {
    /* let audio = new Audio();
    audio.src = "./sfx-boing4.mp3"
    audio.play(); */
    let x = document.createElement("AUDIO");
    x.setAttribute("src",  "./sfx-boing4.mp3");
    x.setAttribute("autoplay", "");
    document.body.appendChild(x);
}


function stop() {
    let x = document.createElement("AUDIO");
    x.setAttribute("src",  " ");
    x.setAttribute("autoplay", "");
    document.body.appendChild(x);
}


function movX() {
    if(!reverse){
        positionX = positionX + velocity;
        /* console.log('movimiento positivo en X: ' + positionX); */
    }
    else{
        positionX = positionX - velocity;
        /* console.log('movimiento negativo en X: ' + positionX); */
    }if(positionX == Xmax || positionX == Xmin){
	    reverse = !reverse;
        /* console.log('TOGGLE en X'); */
        console.log(toggleVar)
        if(toggleVar == true){
            play();
        } else {
            stop();
        }
        
    }
    return positionX
}

function movY() {
    if(!inverse){
        positionY = positionY + velocity;
        /* console.log('movimiento positivo en Y: ' + positionY); */
        ball.style.background = 'BlueViolet';
    }
    else{
        positionY = positionY - velocity;
        /* console.log('movimiento negativo en Y: ' + positionY); */
        ball.style.background = 'OrangeRed';
    }if(positionY == Ymax || positionY == Ymin){
	    inverse = !inverse;
        /* console.log('TOGGLE en Y'); */
        console.log(toggleVar)
        if(toggleVar == true){
            play();
        } else {
            stop();
        }
        
    }
    return positionY
}



// This call the moveBall function every 100ms
setInterval(moveBall, 50);
/*
	if(!reverse){
	positionX = positionX + velocity;
	ball.style.left = positionX + 'px';
			positionY = positionY + velocity;
	 ball.style.top = positionY + 'px';
	}else {
	    positionX = positionX - velocity;
	    ball.style.left = positionX + 'px';
	    positionY = positionY - velocity;
	    ball.style.top = positionY + 'px';
	}if(positionX == Xmax || positionX == Xmin){
	    reverse = !reverse;
	}
}
*/