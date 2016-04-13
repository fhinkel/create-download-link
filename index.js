module.exports = function(opt) {
  var data = opt.data;
  var title = opt.title;
  var filename = opt.filename;

  var anchor = document.createElement('a');

  // creates
  // <a href="data:application/octet-stream,DATA" download="FILENAME">TITLE</a>
  var attachDataAsOctetStream = function(data) {
    var link = 'data:application/octet-stream,' + encodeURIComponent(data);
    anchor.setAttribute('href', link);
  };

  var setFilename = function(filename) {
    anchor.setAttribute('download', filename);
  };

  var setTitle = function(title) {
    anchor.appendChild(document.createTextNode(title));
  };

  attachDataAsOctetStream(data);
  setFilename(filename);
  setTitle(title);

  return anchor;
};
