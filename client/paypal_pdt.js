var request = require('request');
var endpoint = 'www.sandbox.paypal.com';
var options = {
  form: {
    cmd: '_notify-synch',
    tx: '6LL139396F504153W',
    at: 'cVbxvFGl4yiZmgd_uz6Skq_hLefNSLYNjH-CN0y3eNrk73YkIi1QIhdJ7HO'
  },
  headers: {
    Accept: '*/*'
  }
};
request.post('https://' + endpoint + '/cgi-bin/webscr', options, function(e, r, body) {
	document.write('please get here');
  return console.log(body);
});
