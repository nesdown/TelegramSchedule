const rp = require('request-promise');
const url = 'http://rozklad.kpi.ua/Schedules/ViewSchedule.aspx?g=26d47cdd-5e07-4c1a-9ae1-0ff5f5ceced9';
const $ = require('cheerio');

const dataParse = function(url) {
	return rp(url)
	.then(function(html) {
		console.log(html);
	})
	.catch(function(err) {
		console.log(err);
	});
};

module.exports = dataParse;