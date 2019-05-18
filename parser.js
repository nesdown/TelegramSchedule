const rp = require('request-promise');
const url = 'http://rozklad.kpi.ua/Schedules/ViewSchedule.aspx?g=26d47cdd-5e07-4c1a-9ae1-0ff5f5ceced9';
const $ = require('cheerio');

rp(url)
  .then(function(html){
    //success!
    // console.log(html);
    const LESSONS = [];
    const LESSONS_AMOUNT = $('table > tbody > tr > td > span.disLabel > a', html).length;
    for (let i = 0; i < LESSONS_AMOUNT; i++) {
    	// console.log($('table > tbody > tr > td > span.disLabel > a', html).length);
  		LESSONS.push($('table > tbody > tr > td > span.disLabel > a', html)[i].attribs.title);
  	}

  	return(LESSONS);
  })
  .catch(function(err){
    //handle error
  });

 module.exports = {
  returnAll : function() {
    rp(url);
  }
 }
