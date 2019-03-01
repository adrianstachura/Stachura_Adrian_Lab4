var ball   = document.querySelector('.ball');
var board = document.querySelector('.board');
let x = 0;
let y = 0;
let i =0;
let posx = 0;
let posy = 0;
let start = 0;
let end = 0;
let elapsed = 0;

let animuj = setInterval(animate, 10);
function handleOrientation(event)
{

  
  x = event.beta; 
  y = event.gamma; 
  if (x >  90) { x =  90};
  if (x < -90) { x = -90};
  if(posx != 0 || posy !=0){
    getDate();
  }
}

function animate(){
  
    i = 0.05
  
   
    posx += x*i;
    posy += y*i;

    //ustawienie pozycji kulki
    ball.style.top  = (100+ posx) + "px";
    ball.style.left = (100 + posy) + "px";

    //sprawdzenie kolizji z krawedziami boarda, jezeli doszlo przeniesienie na srodek
    if (posx >= 85 || posx <= -100 || posy >= 85 || posy <= -100)
    {
    moveToCenter();
    }

    //sprawdzenie kolizji z targetem, jezeli doszlo koniec gry
    if(posx>=-90 && posx<=-85){
    if(posy>=-90 && posy<=-85){
        winGame();
    }

}
}

//pobranie daty
function getDate(){
    start = new Date().getTime()
}

//zakonczenie gry
function winGame(){
    end = new Date().getTime()
    elapsed = end-start
    window.alert("Gratulacje, wygrales! Twoj czas to: " + elapsed/1000 + " sekund")
    posx = 0;
    posy = 0;
    end = 0;
    location.reload();
}
//przeniesienie na srodek
function moveToCenter(){
    posx = 0;
    posy = 0;
}

window.addEventListener('deviceorientation', handleOrientation);
window.onload = getDate()