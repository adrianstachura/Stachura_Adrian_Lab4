window.onload=InitThis

//ladowanie obrazka
document.getElementById('loadImg').onchange = function(e){
    let img = new Image();
    img.src = URL.createObjectURL(this.files[0]);
    img.onload = draw;
}
let imageSource = 0;

//wyswietlanie obrazka
function draw(){
    canva.width = this.width;
    canva.height = this.height;
    ctx.drawImage(this, 0,0);   
}
    

let canva = document.querySelector('#ps')
let ctx = canva.getContext('2d')

// buttony
document.querySelector('#ok').addEventListener('click',()=>{doMagic(10)})
document.querySelector('#ok2').addEventListener('click',()=>{doMagic(-10)})
document.querySelector('#ok3').addEventListener('click',()=>{location.reload(); })


function doMagic(factor = 20){
    let imageData = ctx.getImageData(0,0,canva.width,canva.height)
    for(let i = 0;i<imageData.data.length;i+=4){
        imageData.data[i]   = Math.min(255,imageData.data[i] + factor)
        imageData.data[i+1] = Math.min(255,imageData.data[i] + factor)
        imageData.data[i+2] = Math.min(255,imageData.data[i] + factor)
    }
    ctx.putImageData(imageData,0,0,)
}

let mousePressed = false;
let lastX, lastY;
let ctx2;

function InitThis() {
    ctx2 = document.getElementById('ps').getContext("2d");

    $('#ps').mousedown(function (e) {
        mousePressed = true;
        Rysuj(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
    });

    $('#ps').mousemove(function (e) {
        if (mousePressed) {
            Rysuj(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
        }
    });

    $('#ps').mouseup(function (e) {
        mousePressed = false;
    });
	    $('#ps').mouseleave(function (e) {
        mousePressed = false;
    });
}
//domyslny kolor oraz grubosc pedzla
let BrushColor = 'black'
let LineThickness = 10

//rysowanei linii
function Rysuj(x, y, isDown) {
    if (isDown) {
        ctx2.beginPath();
        ctx2.strokeStyle = BrushColor;
        ctx2.lineWidth = LineThickness;
        ctx2.lineJoin = "round";
        ctx2.moveTo(lastX, lastY);
        ctx2.lineTo(x, y);
        ctx2.closePath();
        ctx2.stroke();
    }
    lastX = x; lastY = y;
}
	
//zmiana koloru
function ChangeColor(n){
    BrushColor = n;
}

//guziki do zmiany
document.querySelector('#c1').addEventListener('click',()=>{ChangeColor('red')})
document.querySelector('#c2').addEventListener('click',()=>{ChangeColor('blue')})
document.querySelector('#c3').addEventListener('click',()=>{ChangeColor('yellow')})
document.querySelector('#c4').addEventListener('click',()=>{ChangeColor('green')})
document.querySelector('#c5').addEventListener('click',()=>{ChangeColor('pink')})
document.querySelector('#c6').addEventListener('click',()=>{ChangeColor('white')})
document.querySelector('#c7').addEventListener('click',()=>{ChangeColor('black')})

