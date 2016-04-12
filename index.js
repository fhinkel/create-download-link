module.exports = function (opt) {

    var data = opt.data;
    var title = opt.title;
    var filename = opt.filename;
    
    var createLink = function (text, filename) {
        var link = 'data:application/octet-stream,' + encodeURIComponent(text);
        var anchor = document.createElement('a');
        anchor.setAttribute('href', link);
        anchor.setAttribute('download', filename);
        return anchor;
    };

    var anchor = createLink(data, filename);
    anchor.appendChild(document.createTextNode(title));
    return anchor;
};
