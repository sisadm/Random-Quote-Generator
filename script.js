let quoteBox = document.querySelector('#quote-box');
let body = document.querySelector('body');
let refreshButton = document.querySelector('#refresh');
let quotesArray = [
	{
		quote: 'You learn a lot about people when you play games with them.',
		source: 'Laura Moncur,',
		citation: 'Pick Me!',
		year: 2009,
		tag: 'Life'
	},
	{
		quote: 'Getting my lifelong weight struggle under control has come from a process of treating myself as well as I treat others in every way.',
		source: 'Oprah Winfrey',
		citation: 'O Magazine',
		year: 2004,
		tag: 'Ambition'
	},
	{
		quote: 'Givers have to set limits because takers rarely do.',
		source: 'Irma Kurtz',
		citation: 'Cosmopolitan Magazine',
		year: 2003,
		tag: 'Humor'
	},
	{
		quote: 'Never get angry. Never make a threat. Reason with people.',
		source: 'Mario Puzo',
		citation: 'The Godfather',
		year: 1972,
		tag: 'Television'
	},
	{
		quote: 'Friendship make prosperity more shining and lessens adversity by dividing and sharing it.',
		source: 'Cicero',
		citation: 'On Friendship',
		year: '44 B.C.',
		tag: 'Energy'
	},
	{
		quote: 'Guard your honor. Let your reputation fall where it will. And outlive the bastards.',
		source: 'Lois McMaster Bujold',
		citation: '',
		year: 1999,
		tag: 'Risk'
	},
	{
		quote: "The great enemy of clear language is insincerity. When there is a gap between one's real and one's declared aims, one turns as it were instinctively to long words and exhausted idioms, like a cuttlefish spurting out ink.",
		source: 'George Orwell',
		citation: 'Politics and the English Language',
		year: 1946,
		tag: 'Politics'
	},
	{
		quote: 'Watch out for the fellow who talks about putting things in order! Putting things in order always means getting other people under your control.',
		source: 'Denis Diderot',
		citation: "Supplement to Bougainville's 'Voyage",
		year: 1796,
		tag: 'Dreams'
	},				
	{
		quote: "Love isn't a decision. It's a feeling. If we could decide who we loved, it would be much simpler, but much less magical.",
		source: 'Trey Parker and Matt Stone',
		citation: 'South Park, Chef Aid',
		year: 1998,
		tag: 'War'
	},
	{
		quote: 'My friends, love is better than anger. Hope is better than fear. Optimism is better than despair. So let us be loving, hopeful and optimistic. And we’ll change the world.',
		source: 'Jack Layton,',
		citation: 'Letter to Canada',
		year: '',
		tag: 'Love'
		
	},	
];


// random bg color
function randomNumber() {
	let number =  Math.floor(Math.random() * 256);
	// never be too light so we can see the white font color! 
	if(number < 30) {
		return number;
	} else {
		return number - 30;
	}
}

let randomColor = randomNumber();



function randomBg() {
	let red = randomNumber();
	let green = randomNumber();
	let blue = randomNumber();
	let bgColor = `rgb(${red}, ${green}, ${blue})`;
	return bgColor;
}




// random quote 
function getRandomQuote() {
	let randomNum = Math.floor(Math.random() * quotesArray.length);
	return quotesArray[randomNum];
}

// print to page
function printQuote() {
	let randomQueote = getRandomQuote();
	let html = '';
	if(randomQueote.year != '' && randomQueote.citation != '') {
		html += `<p class="quote">${randomQueote.quote}</p>
				<p class="source">${randomQueote.source}
				  <span class="citation"> ${randomQueote.citation} </span>
				  <span class="year"> ${randomQueote.year} </span>
				  <span class="tag">[${randomQueote.tag}]</span>
				</p>`;
	} else if(randomQueote.year != '') {
		html += `<p class="quote">${randomQueote.quote}</p>
				<p class="source">${randomQueote.source}
				  <span class="year"> ${randomQueote.year} </span>
				  <span class="tag">[${randomQueote.tag}]</span>
				</p>`;
	} else if(randomQueote.citation != '') {
		html += `<p class="quote">${randomQueote.quote}</p>
				<p class="source">${randomQueote.source}
				  <span class="citation"> ${randomQueote.citation} </span>
				  <span class="tag">[${randomQueote.tag}]</span>
				</p>`;
	} else {
		html = `
				<p class="quote">${randomQueote.quote}</p>
				<p class="source">${randomQueote.source}
				<span class="tag">[${randomQueote.tag}]</span>
				</p>`;
			}
	body.style.backgroundColor = randomBg();			
	quoteBox.innerHTML = html;		
}


document.getElementById('load-quote').addEventListener("click", printQuote, false);

refreshButton.addEventListener('click', ()=> {
	setInterval(printQuote, 10000);
});



