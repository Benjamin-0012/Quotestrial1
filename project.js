// Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [{
    quote: `"Never judge a book by it's cover"`,
    person:`Christaino Ronaldo`
}, {
    quote: `"Remember that not getting what you want is sometimes a 
    wonderful stroke of luck."`,
    person:`Dalai Lama`
}, {
    quote: `"The journey of a thousand miles begins with one step."`,
    person: `Lao Tzu`
}

]

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})