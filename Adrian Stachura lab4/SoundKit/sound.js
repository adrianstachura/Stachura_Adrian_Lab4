        let boom = document.querySelector('#boom')
        let clap= document.querySelector('#clap')
        let hihat = document.querySelector('#hihat')
        let kick = document.querySelector('#kick')
        let openhat = document.querySelector('#openhat')
        let ride = document.querySelector('#ride')
        let snare = document.querySelector('#snare')
        let tom = document.querySelector('#tom')
        let tink = document.querySelector('#tink')
        //odtwarzanie dzwieku
        function playSound(n){
            n.currentTime=0;
            n.play();
            addToChannel(n)
        }
        

        
   
        // w zaleznosci od wcisnietego klawisza odtworza odpowiedzni dzwiek
    document.addEventListener('keydown', function(event) {
    if(event.keyCode == 65) {
        playSound(boom)
    }
    else if(event.keyCode == 83) {
        playSound(clap)
    }
    else if(event.keyCode == 68) {
       playSound(hihat)
    }
    else if(event.keyCode == 70) {
        playSound(kick)
    }
    else if(event.keyCode == 71) {
        playSound(openhat)
    }
    else if(event.keyCode == 72) {
        playSound(ride)
    }
    else if(event.keyCode == 74) {
        playSound(snare)
    }
    else if(event.keyCode == 75) {
        playSound(tom)
    }
    else if(event.keyCode == 76) {
        playSound(tink)
    }
});
// tablice uzywane do nagrywania kanalow
let channel1 = []
let channel2 = []
let channel3 = []
let channel4 = []

//zmienne potrzebne do rozpoczecia nagrywania
let chanel1 = 0;
let chanel2 = 0;
let chanel3 = 0;
let chanel4 = 0;

//dodanie dzwieku do kanalu
function addToChannel(a){
    if(chanel1 === 1){
        channel1.push(a)
    }
    else if (chanel2 === 1){
        channel2.push(a)
    }
    else if (chanel3 === 1){
        channel3.push(a)
    }
    else if (chanel4 === 1){
        channel4.push(a)
    }
}

//oddtwarzanie kanalu
function play1(i){
    if(i < channel1.length){
      setTimeout(function(){
          let x = channel1[i];
        i++;
        x.play()
        play1(i);
      }, 1000);
    }
  }
 //oddtwarzanie kanalu
  function play2(i){
    if(i < channel2.length){
      setTimeout(function(){
          let x = channel2[i];
        i++;
        x.play()
        play2(i);
      }, 1000);
    }
  }
  //oddtwarzanie kanalu
  function play3(i){
    if(i < channel3.length){
      setTimeout(function(){
          let x = channel3[i];
        i++;
        x.play()
        play3(i);
      }, 1000);
    }
  }
  //oddtwarzanie kanalu
  function play4(i){
    if(i < channel4.length){
      setTimeout(function(){
          let x = channel4[i];
        i++;
        x.play()
        play4(i);
      }, 1000);
    }
  }
//odtworzenie wszystkich kanałow
  function playAll(){
      play1(0)
      play2(0)
      play3(0)
      play4(0)
  }
//buttony
  document.querySelector('#play1').addEventListener('click',()=>{play1(0)})
  document.querySelector('#stop1').addEventListener('click',()=>{chanel1 = 0})
  document.querySelector('#record1').addEventListener('click',()=>{chanel1 = 1})
  document.querySelector('#clear1').addEventListener('click',()=>{channel1 = []})
document.querySelector('#play2').addEventListener('click',()=>{play2(0)})
document.querySelector('#stop2').addEventListener('click',()=>{chanel2 =0})
document.querySelector('#record2').addEventListener('click',()=>{chanel2 = 1})
document.querySelector('#clear2').addEventListener('click',()=>{channel2 = []})
document.querySelector('#play3').addEventListener('click',()=>{play3(0)})
document.querySelector('#stop3').addEventListener('click',()=>{chanel3=0})
document.querySelector('#record3').addEventListener('click',()=>{chanel3=1})
document.querySelector('#clear3').addEventListener('click',()=>{channel3 = []})
document.querySelector('#play4').addEventListener('click',()=>{play4(0)})
document.querySelector('#stop4').addEventListener('click',()=>{chanel4=0})
document.querySelector('#record4').addEventListener('click',()=>{chanel4=1})
document.querySelector('#clear4').addEventListener('click',()=>{channel4 = []})
document.querySelector('#playAll').addEventListener('click',()=>{playAll()})
document.querySelector('#clearAll').addEventListener('click',()=>{channel1 = [],channel2=[],channel3=[],channel4=[]})