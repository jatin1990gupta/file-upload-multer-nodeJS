module.exports = function (len) {
  var str = ""
  for(var i=0; i<len; i++) {
    str+=Math.floor(Math.random()*10);
  }
  return str
}