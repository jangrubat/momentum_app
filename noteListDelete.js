testFunc();

function testFunc(){


    const notePara = document.getElementById('toDoContainer');
   if(notePara){


    
    notePara.addEventListener('dblclick',(e) =>{

        let note;

    if(localStorage.getItem('notes') === null){
        note=[];
    }else{
        note = JSON.parse(localStorage.getItem('notes'));
    }

        const item = e.target;
          
        if(item.classList[0] === "paragraph-styling")
        {
            
            const noteIndex = item.innerText;
            note.splice(note.indexOf(noteIndex),1);
            localStorage.setItem('notes', JSON.stringify(note));

            console.log(note.indexOf(noteIndex));

        }



    });}
}
