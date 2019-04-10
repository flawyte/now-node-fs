const fs = require('fs');

/*
 *
 */

function handler(req, res) {
  // If URL is '/' return index.html's contents
  if (req.url == '/') {
    const indexFile = fs.readFileSync(__dirname + '/index.html', 'utf8');
    res.end(indexFile);
    return;
  }

  const fileName = __dirname + req.url;

  // Return 404 if file does not exist
  if (!fs.existsSync(fileName)) {
    res.statusCode = 404;
    res.end('404 Not Found');
    return;
  }

  // Else, return the file's contents
  const fileContents = fs.readFileSync(fileName, 'utf8');
  res.end(fileContents);
}

/*
 *
 */

module.exports = handler;
