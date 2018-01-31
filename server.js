var app = require('./app');
var request = require('request');
var url = 'http://terriblytinytales.com/test.txt';
var o = require('./occurrence_module');

app.listen(process.env.PORT || 3001, '0.0.0.0', () => {
  request(url, function(err, response, body){
    global_occ = {};
    global_occ = o.occurrence(body);
  })
  //console.log('Server is listening on port 3001');
});
