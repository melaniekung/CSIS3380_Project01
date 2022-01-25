/******************************************
*****************************************/

/***
 * `quotes` array
***/

let quotes = [
    {
        "quote": "A true hero isn't measured by the size of his strength, but by the strength of his heart.",
        "source": "Zeus",
        "citation": "Hercules"
    },
    {
        "quote": "Even miracles take a little time.",
        "source": "Fairy Godmother",
        "citation": "Cinderella"
    },
    {
        "quote": "If you focus on what you left behind, you will never be able to see what lies ahead.",
        "source": "Gusteau",
        "citation": "Ratatouille",
        "year": 2007
    },
    {
        "quote": "You are braver than you believe, stronger than you seem, and smarter than you think.",
        "source": "Christopher Robin",
        "citation": "Winnie the Pooh",
        "year": 1966
    },
    {
        "quote": "Ohana means family, and family means no one gets left behind.",
        "source": "Lilo & Stitch"
    }
];

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
    // variable holding the number of quotes
    const max = 5;

    // using the Math floor and random function to pick a random quote from array
    let quote = quotes[Math.floor(Math.random() * max)];

    // return the random quote
    return quote;
};

/***
 * `printQuote` function
***/

function printQuote() {
    // call the getRandomQuote function and set quote to var randomQuote
    let randomQuote = getRandomQuote();

    // start the HTML statement for displaying the quote and source
    let ptoHTML1 = `<p class="quote">` + randomQuote.quote + `</p><p class="source">` + randomQuote.source;

    // if statement to see if the quote has a citation property, append span tags if so
    if (randomQuote.hasOwnProperty('citation')) {
        ptoHTML1 += `<span class="citation">` + randomQuote.citation + `</span>`;
    }

    // if statement to see if the quote has a year property, append span tags if so
    if (randomQuote.hasOwnProperty('year')) {
        ptoHTML1 += `<span class="year">` + randomQuote.year + `</span>`;
    }

    // append the closing </p> tag to the HTML statement
    ptoHTML1 += `</p>`;

    // print the HTML string to the quote box
    document.getElementById('quote-box').innerHTML = ptoHTML1;
};

/***
 * click event listener for the print quote button
***/

document.getElementById('load-quote').addEventListener( `click`, printQuote );