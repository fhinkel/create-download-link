module.exports = function(opt) {
  var data = opt.data;
  var title = opt.title;
  var filename = opt.filename;

    // creates
    // <a href="data:application/octet-stream,DATA" download="FILENAME">TITLE</a>

  var createDownloadableFileLink = function(data, filename) {
    var link = 'data:application/octet-stream,' + encodeURIComponent(data);
    var anchor = document.createElement('a');
    anchor.setAttribute('href', link);
    anchor.setAttribute('download', filename);
    return anchor;
  };

  var setTitleTo = function(anchor, title) {
    anchor.appendChild(document.createTextNode(title));
    return anchor;
  };

  var anchor = createDownloadableFileLink(data, filename);
  anchor = setTitleTo(anchor, title);
  return anchor;
};
