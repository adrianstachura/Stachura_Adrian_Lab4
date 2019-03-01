window.onload = init;
let noteBackground='pink'
let id = 0;
let jsonParse = null


function init(){
    if(localStorage.length){
        showFromLocal()    
    }
    let button = document.getElementById("add");
    button.onclick = createNote;
}


//utworzenie notatki
function createNote(){
    let title=document.getElementById("noteTitle").value
    let content=document.getElementById("noteContent").value
    displayNote(id,title,content,getDate(),noteBackground,false);
    id++
    console.log(id)
    console.log(jsonParse)
}
       

let notesArray = []
let notesob = {
    id: "",
    title: "",
    content: "",
    data: "",
    color: "",
    pin:"",
}
       //konstrukcja notatki
      function displayNote(noteID,noteTitle,noteContent,noteData,noteColor,isPinned){
     
        //tworzenie glownego diva notatki
        let note = document.createElement("div");
        note.className="note123"
        note.id = noteID;
        note.style.backgroundColor=noteColor;
        
        //tworzenie checkboxa do przypiecia notatki na gore
        let checkbox = document.createElement("input")
        checkbox.type="checkbox"
        checkbox.style.cssFloat="right"
        checkbox.id="checkbox"
        checkbox.addEventListener( 'change', function() {
            if(this.checked) {
                document.querySelector("#przypiete").appendChild(note)
                notesArray[note.id].pin=true;
                addToLocal("notatki",notesArray)
            } else {
                document.querySelector("#notatki").appendChild(note)
                notesArray[note.id].pin=false;
                addToLocal("notatki",notesArray)
            }
        });

        //div z trescia notatki
        let content = document.createElement("div");
        content.innerHTML = noteContent;
        content.className="noteContent"

        //div z data utworzenia
        let noteDate = document.createElement("div")
        noteDate.className = "data"
        noteDate.innerHTML = noteData;
    
        //div z tytulem
        let title = document.createElement("div")
        title.innerHTML = noteTitle;
        title.style.width="200px"
        title.style.height="30px"
        title.className="noteTitle"
        
        //spiecie elementow
        title.appendChild(checkbox)
        note.appendChild(title);
        note.appendChild(content);
        note.appendChild(noteDate)


        //sprawdzenie czy notatka zostala przypieta, potrzebne do localstorage
        if(isPinned === false){
            document.querySelector("#notatki").appendChild(note)
        }
        else{
            checkbox.checked=true;
            document.querySelector("#przypiete").appendChild(note)
        }



        notesob.id = noteID
        notesob.title = noteTitle
        notesob.content = noteContent
        notesob.data = noteData
        notesob.color=noteColor
        notesob.pin=isPinned;
        notesArray.push(notesob)
        notesob = {}
        addToLocal("notatki",notesArray)

      }
      //placeholdery dla inputów
      document.getElementById("noteTitle").placeholder = "Wprowadź tytuł"; 
      document.getElementById("noteContent").placeholder = "Wprowadź zawartość"; 
   

      //zamiana tla notatki po wciesnieciu odpowiedniego przycisku
      function ChangeColor(n){
        noteBackground = n;
        let button = document.getElementById("add");
        if(n==='white' || n==="yellow"){
           button.style.background=n;
            button.style.color='black'
        }
        else{
            button.style.background=n;
            button.style.color='white'
        }
      
    }

    function addToLocal(key,value){
        jsonParse = JSON.stringify(value)
        localStorage.setItem(key, jsonParse)
       
    }

    function showFromLocal(){
        let local = JSON.parse(localStorage.getItem('notatki'))
        if(local===null){
            //nic
        }
        else{

            let i = 0
            while(i<local.length)
            {
                displayNote(local[i].id,local[i].title,local[i].content,local[i].data,local[i].color,local[i].pin)
                i++
            }
            id=local.length;
        }
    }
    
    
            
    
    
    //przyciski do zmiany tla notatki
    document.querySelector('#c1').addEventListener('click',()=>{ChangeColor('cyan')})
    document.querySelector('#c2').addEventListener('click',()=>{ChangeColor('lightcoral')})
    document.querySelector('#c3').addEventListener('click',()=>{ChangeColor('yellow')})
    document.querySelector('#c4').addEventListener('click',()=>{ChangeColor('lightgreen')})
    document.querySelector('#c5').addEventListener('click',()=>{ChangeColor('pink')})
    document.querySelector('#c6').addEventListener('click',()=>{ChangeColor('white')})
    document.querySelector('#c7').addEventListener('click',()=>{ChangeColor('lightgray')})

    // czyszczenie localstorage po potwierdzeniu
    let remove = document.getElementById("remove")
    remove.addEventListener( 'click', function() {
        if (confirm('Czy na pewno chcesz usunąc wszystkie notatki?')) {
            clearLocalStorage();
        } else {
          //nic
        }
    })
   
     
   
  
    //pobieranie danych, zwaracanie w formacie d.m.r g:m:s
    function getDate(){
        let data = new Date()
        let dataDay = data.getDate();
        let dataMonth = data.getMonth() + 1;
        let dataYear = data.getFullYear();
        let dataHour = data.getHours();
        let dataMinutes = data.getMinutes();
        if(dataMinutes<10){dataMinutes = "0" + dataMinutes}
        let dataSeconds = data.getSeconds();
        if(dataSeconds<10){dataSeconds = "0" + dataSeconds}
        return "<br>" + dataDay + "." + dataMonth + "." + dataYear + "  " + dataHour + ":" + dataMinutes + ":" + dataSeconds
    }
    
// czysszczenie localStorage
    function clearLocalStorage(){
        localStorage.clear()
        notesArray = []
        notesob = {}
        id = 0
        location.reload()
    }

