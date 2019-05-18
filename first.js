const rp = require('request-promise');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
const $ = require('cheerio');
const dataParse = require('./second');


rp(url)
.then(
	function(html) {
		const wikiUrls = [];
		for(let i = 0; i < 45; i++) {
			wikiUrls.push($('big > a', html)[i].attribs.href);
		}

		return Promise.all(
      		wikiUrls.map(function(url) {
        		return dataParse('https://en.wikipedia.org' + url);
      		})
    	);
		
		console.log(wikiUrls);
	}
)
.then(function(presidents) {
	console.log(presidents);
})
.catch(function(err) {
	//handle error
	console.log(err);
});