const quoteContainer = document.getElementById('quote-container');
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const twitter = document.getElementById('twitter');
const newQuote = document.getElementById('new-quote');


let apiQuotes = [];
let oneQuote = undefined;

// Get quotes from API using an asynchronous FETCH request
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    
    try {
        const response = await fetch(apiUrl); 
        apiQuotes = await response.json();
    } 
    catch(error) {
        // catch error here!
    }
}

getQuotes().then(getOneRandomQuote);

function getOneRandomQuote() {
    // await new Promise((resolve, reject) => setTimeout(resolve, 1500));
    const fetchedQuote = apiQuotes[Math.floor((Math.random() * (apiQuotes.length-1)) + 0)];
    
    if (fetchedQuote.author === null) {
        author.textContent = 'Unknown';    
    }
    else {
        author.textContent = fetchedQuote.author;
    }
    
    // check quote length and apply css class 'long-quote' for long quotes
    if (fetchedQuote.text.length > 90) {
        quote.classList.add('long-quote');
    }
    else {
        quote.classList.remove('long-quote');
    }
    
    quote.textContent = fetchedQuote.text;
    return oneQuote;
}