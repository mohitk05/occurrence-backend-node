exports.indexFunction = function(req, res){
  res.send('Welcome!');
}

exports.myFunction = function(req, res){
  request(url, function(err, response, body){
    if(err) throw err;

    global_occ = o.occurrence(body);
    var number = req.query.num;
  var num_occ = [];
  if(number <= global_occ.length){
    num_occ = global_occ.slice(0, number);
  } else {
    num_occ = global_occ;
  }
  res.send(num_occ);
  })
  
}
