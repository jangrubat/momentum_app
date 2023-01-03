
// function showCMenu(){
//    document.getElementById('cMenu').style.display = "block";
// }

function editShowInput1(){
   document.getElementById('nameslist').style.display = "none";
   document.getElementById('inputRename').style.display = "flex";
 
}

   inputReplace();

function inputReplace(){
   const inputCont = document.getElementById('renameInput');
   let local = localStorage;

   inputCont.addEventListener('keyup', (e) => {
      var inputRename = document.getElementById('renameInput').value;
      
    
      if(e.key === 'Enter') {
          if(inputRename != ""){
    
            local.setItem("allNames", JSON.stringify(inputRename));
            let userText = JSON.parse(local.getItem('allNames'));
            const nameThisUser = document.getElementById('nameslist');
            nameThisUser.innerText= `${userText}`;
            document.getElementById('nameslist').style.display = "flex";
            document.getElementById('inputRename').style.display = "none";

            }else{
                alert("Name is required!");
              }
            }
    
    })


}




function editNaMenu1(){
   document.getElementById('editNC').style.display = "flex";


}


function showMenu12() {

   document.getElementById('toggle12').style.display = "flex";
   document.getElementById('toggle24').style.display = "none";
   document.querySelector(".time").style.display = "none";
   document.querySelector(".time24").style.display = "flex";
   // const time24 = document.querySelector('.time');
   // time24.classList.toggle('show24');
   // document.querySelector("time").style.display = "none";
   // document.querySelector("time24").style.display = "flex";


}

function showMenu24(){
   document.getElementById('toggle12').style.display = "none";
   document.getElementById('toggle24').style.display = "flex";
   // const time24 = document.querySelector('.time');
   // time24.classList.toggle('show12');
   document.querySelector(".time").style.display = "flex";
   document.querySelector(".time24").style.display = "none";
   
   // document.querySelector("time").style.display = "flex";
   // document.querySelector("time24").style.display = "none";
}

document.addEventListener('mouseup', function(e) {
   var container = document.getElementById('editNC');
   var containerNote = document.getElementById('toDoCard');
   if (!container.contains(e.target)) {
       container.style.display = 'none';
   }

   if (!containerNote.contains(e.target)) {
      containerNote.style.display = 'none';
  }







});