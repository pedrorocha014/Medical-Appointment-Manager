var fs = require('fs');
var path = require('path');

exports.getDataFromFile = function(fileName){
    var dataFile =  fs.readFileSync(path.resolve(__dirname,'../data/' + fileName));
    
    return JSON.parse(dataFile);
}

exports.updateDataFile = function(fileName, data){
    function finished(err){
        console.log("all set.");
    }

    var newData = JSON.stringify(data, null, 2);
    fs.writeFile(path.resolve(__dirname,'../data/' + fileName), newData, finished);
}