var q = require('q');
var assyncq = require('async-q');

var moduleApi = require('./module_api.js');

export.apiGET = function (req, res) {
  var session = req.session;

  moduleApi.getQuestion(data, console.log).then(function (lol) {
    res.json(lol);
  });
};
