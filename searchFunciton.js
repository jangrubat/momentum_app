
let searchInput = document.getElementById('searchInput');

function toggleYoutube(){
    document.getElementById('showYT').style.display = "none";
    document.getElementById('showGoog').style.display = "flex";
}

function toggleGoogle(){
    document.getElementById('showYT').style.display = "flex";
    document.getElementById('showGoog').style.display = "none";
}



searchInput.addEventListener('keyup', (e) => {

    var url = document.getElementById('searchInput').value
    var google = "https://www.google.com/search?q=";
    var yt = "https://www.youtube.com/results?search_query=";
    const showYT = document.getElementById('showYT');
    const showGoo = document.getElementById('showGoog');

    
    if(e.key === 'Enter') {
        if(url != ""){



            if(showYT.style.display === 'flex'){
                window.open(google+url);
                searchInput.value="";
            }
            if(showGoo.style.display === 'flex'){
                window.open(yt+url);
                searchInput.value="";
            }
        

        
 }}

 

})




