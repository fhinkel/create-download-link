[![Build Status](https://travis-ci.org/fhinkel/create-download-link.svg?branch=master)](https://travis-ci.org/fhinkel/create-download-link)
[![Coverage Status](https://coveralls.io/repos/github/fhinkel/create-download-link/badge.svg?branch=master)](https://coveralls.io/github/fhinkel/create-download-link?branch=master)

[![NPM](https://nodei.co/npm/create-download-link.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/create-download-link/)
# create-download-link

With this package, you can easily create links for downloading content as files.
*create-download-link* returns a DOM element like the following:
```html
<a href="data:application/octet-stream,DATA" download="FILENAME">TITLE</a>
```

Specify the
- **content** of the file as a string,
- the **filename** to be used, and
- the **title** of the anchor element.

When the element is clicked, a file is
downloaded and saved as *FILENAME*.

## Usage


```javascript
var createDownloadLink = require('create-download-link');

var opt = {
    data: 'Here is the content of the file',
    title: 'Click to download your file',
    filename: 'example.txt'
};

var anchor = createDownloadLink(opt);
```


