var fs = require('fs');

var StyleX = function () {};

var HTML_PATH = 'assets/html';

/**
 *
 * @param {String} contents
 * @returns {String} contents with comments stripped
 * @private
 */
var _removeHtmlComments = function (contents) {
  contents = contents || '';
  return contents.replace(/<!--[\s\S]*?-->/g, '');
};

/**
 * Return content from within a beginning and end point
 * @param {String} string
 * @param {String} start
 * @param {String} end
 * @returns {string}
 * @private
 */
var _extractUnit = function (string, start, end) {
  var startPos = string.indexOf(start);
  var endPos = string.indexOf(end);
  return string.substring(startPos + start.length, endPos).trim();
};

/**
 * Get All Elements from a folder
 * @param {String} folder
 * @returns {Array} JSON objects containing element sections
 */
StyleX.prototype.getAllFrom = function (folder) {
  var files = fs.readdirSync(HTML_PATH+'/'+folder),
    outputArray = [];

  //Filter out unwanted file types
  files = _.filter(files, function (file) { return file.indexOf('.html') > -1 });
  files.forEach(function (fileName, index) {
    var fullPath = HTML_PATH + '/' + folder + '/' + fileName;

    outputArray[index] = {};

    if(fs.existsSync(fullPath)) {
      var fileContents = fs.readFileSync(fullPath, {encoding: 'utf-8'});

      var fileBits = fileName.split('-');
      var slug = fileBits[0];
      var fileTitle = fileBits[1].replace('.html','');
      var comments  = _extractUnit(fileContents,'<!--','-->');

      outputArray[index]['title'] = fileTitle;
      outputArray[index]['slug'] = slug;
      outputArray[index]['comments'] = comments;
      outputArray[index]['content'] = _removeHtmlComments(fileContents);
    }
  });

  return outputArray;
};

/**
 *
 * @returns {Array} html directories
 */
StyleX.prototype.getSections = function () {
  var sections = fs.readdirSync('assets/html');
  return sections;
};

module.exports = new StyleX();
