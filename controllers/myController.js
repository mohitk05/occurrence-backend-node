var request = require('request');
var url = 'http://terriblytinytales.com/test.txt';
var o = require('../occurrence_module');

exports.indexFunction = function(req, res){
  res.send('Welcome!');
}

exports.myFunction = function(req, res){
  var number = req.query.num;
  request(url, function(err, response, body){
    if(err) throw err;
    var global_occ = o.occurrence(body);
    var num_occ = [];
    if(number <= global_occ.length){
      num_occ = global_occ.slice(0, number);
    } else {
      num_occ = global_occ;
    }
    res.send(num_occ);
  });
}
