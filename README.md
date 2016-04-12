# create-download-link

*create-download-link* returns an anchor element. When the element is clicked, a file is
downloaded. Specify the content of the file, the filename to be used, and
 the title of the anchor element.

```javascript
var createDownloadLink = require('create-download-link');

var opt = {
    data: 'Here is the content of the file',
    title: 'Click to download your file',
    filename: 'example.txt'
};

var anchor = createDownloadLink(opt);
```

Include the resulting ```anchor``` in your DOM. It will behave similar to the following link:
[Click to download your file](https://raw.githubusercontent.com/fhinkel/create-download-link/master/example.txt).

    // <a href="data:application/octet-stream,data" download="filename">title</a>
