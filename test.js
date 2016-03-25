var createDownloadLink = require('./index.js');

var opt = {
};

document = {
    createElement: function() {
        return {
            setAttribute: function() {},
            appendChild: function() {}
        };
    },
    createTextNode: function () {
        
    }
};

createDownloadLink(opt);

console.log('Done testing. All good');