
  function showDivToDo() {
    document.getElementById('toDoCard').style.display = "block";
 }

 function hideDivToDo(){
    document.getElementById('toDoCard').style.display = "none";
 }

 document.addEventListener('DOMContentLoaded',showNotes);

let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');



addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    
    if(inputField.value != ""){
             saveNoteToLocal(inputField.value);

            var noteCount = JSON.parse(localStorage.getItem("notes"));
            // var noteNum = noteCount.length;
            // console.log(noteNum);

            if(noteCount.length <= 7){
                    paragraph.classList.add('paragraph-styling');
                    paragraph.innerText = inputField.value;

                    toDoContainer.appendChild(paragraph);
                    inputField.value = "";
                    paragraph.addEventListener('click', function(){
                        paragraph.style.textDecoration = "line-through";
                    })
                    paragraph.addEventListener('dblclick', function(){
                        toDoContainer.removeChild(paragraph);
                    })
                }else{
                    alert("Delete some notes first.");
                }

    }else{
        alert("Type some text first.");
    }
   
})


function saveNoteToLocal(noteTodo){

    let note;

    if(localStorage.getItem('notes') === null){

                 note=[];
    }else{
        note = JSON.parse(localStorage.getItem('notes'));
    }
    note.push(noteTodo);
    localStorage.setItem('notes', JSON.stringify(note));

}


function showNotes(){
    let note;

    if(localStorage.getItem('notes') === null){
        note=[];
    }else{
        note = JSON.parse(localStorage.getItem('notes'));
    }

    note.forEach(function(shNote){
            var paragraph = document.createElement('p');
            paragraph.classList.add('paragraph-styling');
            paragraph.innerText = shNote; 
           toDoContainer.appendChild(paragraph);
            inputField.value = "";
            paragraph.addEventListener('click', function(){
                paragraph.style.textDecoration = "line-through";
            })
            paragraph.addEventListener('dblclick', function(){
                toDoContainer.removeChild(paragraph);
            })


    });

}

