var createDownloadLink = require('./index.js');

var opt = {
};

document = {
    createElement: function() {
        return {
            attr: function() {},
            text: function() {}
        };
    }
};

createDownloadLink(opt);

console.log('Done testing. All good');