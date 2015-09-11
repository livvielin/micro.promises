// Read through `demo/chainingWithPromises.js` before completing this exercise

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// Using `fs.writeFile`, the `request` module, and promises,
// build out `getFromAPIAndWriteToFile` to hit an API's GET request endpoint,
// and write the body of its response to a file whose path is passed in
var getFromAPIAndWriteToFile = function (apiURL, writeFilePath) {
  return new Promise(function(resolve, reject){ 
    request(apiURL, function (error, response, body) {
      if (error) { reject(error); }
      else {
        resolve(body.toString());
      }
    })

  })
  .then(function(body){
    fs.writeFile(writeFilePath, body, function (err) {
      if (err) throw err;
    });
  });

};

module.exports = getFromAPIAndWriteToFile;
