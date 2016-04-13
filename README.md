[![Build Status](https://travis-ci.org/fhinkel/create-download-link.svg?branch=master)](https://travis-ci.org/fhinkel/create-download-link)

# create-download-link

*create-download-link* returns the following DOM element:
```html
<a href="data:application/octet-stream,data" download="filename">title</a>
```

Specify the content of the file as a string, the filename to be used, and
the title of the anchor element. When the element is clicked, a file is
downloaded.

## Example


```javascript
var createDownloadLink = require('create-download-link');

var opt = {
    data: 'Here is the content of the file',
    title: 'Click to download your file',
    filename: 'example.txt'
};

var anchor = createDownloadLink(opt);
```


