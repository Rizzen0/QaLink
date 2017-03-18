module.exports = {
  getQuestions: function (data, callback) {
    var questionObject = require('questions.js');
    var Q = require('q');
    var async = require('async-q');
    var deferred = Q.defer();
    console.log(questionObject);
    deferred.resolve(true);
    return deferred.promise;
  }
}
