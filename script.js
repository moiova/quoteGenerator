const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const tweetBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let quotesFromApi = [];

async function getQuotesFromApi() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        quotesFromApi = await response.json();
        console.log(quotesFromApi);
        placeGenerateQuoteOnPage();
    }
    catch(error) {
        // catch error here!
    }
}

getQuotesFromApi();

function placeGenerateQuoteOnPage() {
    const generatedQuote = quotesFromApi[Math.floor(Math.random() * (quotesFromApi.length - 1))];

    if (generatedQuote.author === null) {
        authorText.textContent = 'Unknown';
    }
    else {
        authorText.textContent = generatedQuote.author;
    }
    
    // check quote length and apply css class 'long-quote' for long quotes
    if (generatedQuote.text.length > 100) {
        quoteText.classList.add('long-quote');
        quoteText.classList.remove('quote-text');
    }
    else {
        quoteText.classList.remove('long-quote');
    }

    quoteText.textContent = generatedQuote.text;
}

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.textContent} - ${author.textContent}`;
    window.open(twitterUrl, '_blank');
}

tweetBtn.addEventListener('click', tweetQuote);
newQuoteBtn.addEventListener('click', placeGenerateQuoteOnPage);
