
const api = "https://api.quotable.io/random";

const quote = document.getElementById("quote");
const authors = document.getElementById("author");

function firstQuote(){
  fetch(api)
  .then((res) => res.json())
  .then((data) => {

    let content = data.content;
    let author = data.author;
    quote.innerText = content;
    authors.innerText = author;
  });

}

firstQuote();




function getQuote() {
        fetch(api)
          .then((res) => res.json())
          .then((data) => {

            let content = data.content;
            let author = data.author;
            quote.innerText = content;
            authors.innerText = author;
          });
    
 // get new Quotes every 1min

}

setInterval(getQuote, 60000);




// function getQuote() {
//   fetch(api)
//     .then((res) => res.json())
//     .then((data) => {
//       quote.innerHTML = `"${data.content}"`;
//       author.innerHTML = `- ${data.author}`;
//     });
// }









// window.onload = function () {
    
//     let changeQuotes = document.querySelector('.qText')
//     let changePerson = document.querySelector('.person')
   
//     var backgroundImg=["midnight","morning","afternoon","sunset","night"]
    
//     const quotesArr = [{
//       quotes:`"Life is what happens when you're busy making other plans."`,
//       person:`John Lennon`
//       },
//       {
//         quotes:`"You only live once, but if you do it right, once is enough."`,
//         person:`Mae West`
//         },
//         {
//           quotes:`"Turn your wounds into wisdom."`,
//           person:`Oprah Winfrey`
//           },
//           {
//             quotes:`"I like criticism. It makes you strong."`,
//             person:`LeBron James`
//             },
//             {
//               quotes:`"Life would be tragic if it weren’t funny."`,
//               person:`Stephen Hawking`
//               },];
//               // PIck BG and Quotes onload randomly
//       var i = Math.floor((Math.random() * 5));
//       let randomQuotes = Math.floor((Math.random() *quotesArr.length ));

//       changeQuotes.innerText = quotesArr[randomQuotes].quotes;
//       changePerson.innerText = quotesArr[randomQuotes].person;

//       document.body.className =  backgroundImg[i];


//         // Change BG and Quotes every 5mins
//       setInterval(changeImage, 60000);
//      function changeImage() {   
//       var i = Math.floor((Math.random() * 5));

//       let randomQuotes = Math.floor((Math.random() *quotesArr.length ));

//       changeQuotes.innerText = quotesArr[randomQuotes].quotes;
//       changePerson.innerText = quotesArr[randomQuotes].person;

//       document.body.className =  backgroundImg[i];
      
//     }
//   }