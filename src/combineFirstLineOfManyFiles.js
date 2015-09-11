// Read through `demo/PromiseDotAll.js` before completing this exercise

var fs = require('fs');
var Promise = require('bluebird');
var pluck = require('./pluckFirstLineFromFile');

/**
 * Using Promise.all, write a function, combineFirstLineOfManyFiles, that:
 *    1. Reads each file at the path in the `filePaths` array
 *    2. Plucks the first line of each file
 *    3. Joins each first line into a new file
 *      - The lines should be in the same order with respect to the input array
 *      - i.e. the second line in the new file should be the first line of `filePaths[1]`
 *    4. Writes the new file to the file located at `writePath`
 *
 * Make sure combineFirstLineOfManyFiles returns a promise so the following will work:
 *
 * combineFirstLineOfManyFiles(someFiles, someWritePath)
 *   .then(function() {
 *     // Any work done here is guaranteed to occur **after**
 *     // the new file has been successfully written
 *   })
*/

var combineFirstLineOfManyFiles = function (filePaths, writePath) {
  var functions = [];
  filePaths.forEach(function (filePath) {
    console.log(filePath)
    functions.push(pluck(filePath));
  });
  return Promise.all(functions).then(function(output){
      fs.appendFile(writePath, output.join('\n'), function (err) {
        if (err) throw err;
    })
  })
};

module.exports = combineFirstLineOfManyFiles;
