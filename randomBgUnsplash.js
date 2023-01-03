const requestUrl =
'https://api.unsplash.com/photos/random?query=midnight-landscape&orientation=landscape&count=30&client_id=501TtvzXVYTC3DUd4nQ-g7QItw_Aoqxl38wnT12aTz0';

window.onload = function() {
  function bgLoader(){
let randomNumber = Math.floor(Math.random() * 10);
return fetch(requestUrl)
  .then((response) => response.json())
  .then((data) => {
    let allImages = data[randomNumber];
    let phAuthor = data[randomNumber];
    let location = data[randomNumber];
   allImages.urls.regular;
   
   

    let randomImage = allImages.urls.full ;

    document.getElementById('phAuthor').innerText = phAuthor.user.name;
    document.getElementById('phLoc').innerText = location.user.location;

document.body.style.background = "url('"+randomImage+"')  no-repeat center center/cover"; 
    
  });}

  bgLoader();
  setInterval(bgLoader,6000000);
  
}

// 50 images load per hour only