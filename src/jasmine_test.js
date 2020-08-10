const Jasmine = require("jasmine")
const decache = require("decache")

function jasmineExecute(fileName) {
    var jasmine = new Jasmine({});
    jasmine.onComplete(function(x) {
        if (x) {
            jasmineExecute("./index.spec.js"); // risk of infinite loop
        }
        else {
            console.log('Test failed : ' + fileName);
        }
    });
    jasmine.execute([
        fileName
    ]);
}
jasmineExecute("./index.spec.js");