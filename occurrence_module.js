exports.occurrence = function(body){
  //omit_regex can be defined to selectively get website/email names 
  //  as a whole string or cut them into domain name and .com
  var omit_regex = /[^-'\w\.//@:]/g;
  var new_string = body.replace(omit_regex, ' ');
  var split_regex = /\.\s|[\s]+|[\n]+/;
  var array = new_string.split(split_regex);
  console.log(array);
  var occ = new Map();
  var keys = [], values = [];
  for(var i = 0; i< array.length; i++){
    if(occ.get(array[i].toLowerCase()) == null){
      occ.set(array[i].toLowerCase(), 1);
      keys.push(array[i].toLowerCase());
      values.push(1);
    } else {
      var previous_val = occ.get(array[i].toLowerCase());
      occ.set(array[i].toLowerCase(), previous_val + 1);
      values[keys.indexOf(array[i].toLowerCase())] = previous_val + 1;
    }
  }
  var occ_arr = [];
  for(var i = 0;i<keys.length;i++){
    if(isNaN(keys[i])){
      occ_arr.push([keys[i], values[i]]);
    }
  }
  occ_arr.sort((a, b) => {
    return (b[1] - a[1]);
  })

  //console.log(occ_arr);
  //console.log(occ);
  return occ_arr;
}
