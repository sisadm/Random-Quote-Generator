/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotesArray = [
	{
		quote: 'You learn a lot about people when you play games with them.',
		source: 'Laura Moncur,',
		citation: 'Pick Me!',
		year: 2009
	},
	{
		quote: 'Getting my lifelong weight struggle under control has come from a process of treating myself as well as I treat others in every way.',
		source: 'Oprah Winfrey',
		citation: 'O Magazine',
		year: 2004
	},
	{
		quote: 'Givers have to set limits because takers rarely do.',
		source: 'Irma Kurtz',
		citation: 'Cosmopolitan Magazine',
		year: 2003
	},
	{
		quote: 'Never get angry. Never make a threat. Reason with people.',
		source: 'Mario Puzo',
		citation: 'The Godfather',
		year: 1972
	},
	{
		quote: 'Friendship make prosperity more shining and lessens adversity by dividing and sharing it.',
		source: 'Cicero',
		citation: 'On Friendship',
		year: '44 B.C.'
	},
	{
		quote: 'Guard your honor. Let your reputation fall where it will. And outlive the bastards.',
		source: 'Lois McMaster Bujold',
		citation: 'A Civil Campaign',
		year: 1999
	},
	{
		quote: "The great enemy of clear language is insincerity. When there is a gap between one's real and one's declared aims, one turns as it were instinctively to long words and exhausted idioms, like a cuttlefish spurting out ink.",
		source: 'George Orwell',
		citation: 'Politics and the English Language',
		year: 1946
	},
	{
		quote: 'Watch out for the fellow who talks about putting things in order! Putting things in order always means getting other people under your control.',
		source: 'Denis Diderot',
		citation: 'Supplement to Bougainville's 'Voyage',
		year: 1796
	},				
	{
		quote: "Love isn't a decision. It's a feeling. If we could decide who we loved, it would be much simpler, but much less magical.",
		source: 'Trey Parker and Matt Stone',
		citation: 'South Park, Chef Aid',
		year: 1998
	},
	{
		quote: 'My friends, love is better than anger. Hope is better than fear. Optimism is better than despair. So let us be loving, hopeful and optimistic. And we’ll change the world.',
		source: 'Jack Layton,',
		citation: 'Letter to Canada',
		year: 2011
	},	
];


/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);