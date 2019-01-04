var letters = 'abcdefghijklnmopqrstuvwxyz0123456789';
var base = letters.length;

/*
 * This function will take the id of the url and return the shortened
 * url code;
 */

exports.encode = function(num) {

  var str = '';

  while (num > 0) {
    str = letters.charAt(num % base) + str;
    num = Math.floor(num / base);
  }

  return str;

}

/*
 * This function will take the shortened url code and return the id for
 * the link in the database.
 */

exports.decode = function(code) {

  var num = 0;
  for (var i = 0; i < code.length; i++) {
    num += letters.indexOf(code.charAt(code.length - i - 1)) * Math.pow(base, i);
  }

  return num;

}
