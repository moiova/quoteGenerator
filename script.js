const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const tweetBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const favoriteBtn = document.getElementById("favorite");

let favQuotesArray = [];
let bufferGeneratedQuotes = [];

function placeGenerateQuoteOnPage() {
  const generatedQuote = localQuotes[getIndexNextQuote()];

  if (generatedQuote.author === null) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = generatedQuote.author;
  }

  // check quote length and apply css class 'long-quote' for long quotes
  if (generatedQuote.text.length > 100) {
    quoteText.classList.add("long-quote");
    quoteText.classList.remove("quote-text");
  } else {
    quoteText.classList.remove("long-quote");
  }

  quoteText.textContent = generatedQuote.text;
}

placeGenerateQuoteOnPage();

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

function showFavoriteQuotes() {
  // add the quote and author pair to the quotes array
  let quotePlusAuthor = {};
  quotePlusAuthor.text = quoteText.textContent;
  quotePlusAuthor.author = authorText.textContent;

  // check if quote already in the array
  if (
    favQuotesArray.find((item) => item.text === quotePlusAuthor.text) ==
    undefined
  ) {
    favQuotesArray.push(quotePlusAuthor);

    // create the new div container element
    const newDivContainer = document.createElement("div");
    // newDivContainer.innerText = "This is the new div";
    newDivContainer.classList.add("quote-container-fav");
    document.body.appendChild(newDivContainer);
    console.log(newDivContainer);

    // create the new div for the quote
    const newDivForQuote = document.createElement("div");
    newDivForQuote.classList.add("quote-text-fav");
    newDivContainer.appendChild(newDivForQuote);

    // create the span inside the quote div
    const newSpanForQuote = document.createElement("span");
    newSpanForQuote.id = "quote-fav";
    newSpanForQuote.innerText = quotePlusAuthor.text;
    newDivForQuote.appendChild(newSpanForQuote);

    // create the new div for the author
    const newDivForAuthor = document.createElement("div");
    newDivForAuthor.classList.add("quote-author-fav");
    newDivContainer.appendChild(newDivForAuthor);

    // create the span inside the author div
    const newSpanForAuthor = document.createElement("span");
    newSpanForAuthor.id = "author-fav";
    newSpanForAuthor.innerText = quotePlusAuthor.author;
    newDivForAuthor.appendChild(newSpanForAuthor);
  } else {
    window.alert("You already added this quote as a favourite!");
  }
}

function generateIndex() {
  return Math.floor(Math.random() * (localQuotes.length - 1));
}

function getIndexNextQuote() {
  let index = generateIndex();

  // avoid displaying same quote
  while (bufferGeneratedQuotes.includes(index)) {
    index = generateIndex();
  }

  bufferGeneratedQuotes.push(index);

  if (bufferGeneratedQuotes.length === localQuotes.length) {
    bufferGeneratedQuotes.length = 0;
  }

  return index;
}

tweetBtn.addEventListener("click", tweetQuote);
newQuoteBtn.addEventListener("click", placeGenerateQuoteOnPage);
favoriteBtn.addEventListener("click", showFavoriteQuotes);
