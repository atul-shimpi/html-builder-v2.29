(function () {
	"use strict";
    
    exports.getRandomArbitrary = function (min, max) {

        return Math.floor(Math.random() * (max - min) + min);

    };

    exports.getFileFromBackgroundImage = function (str) {

    	var fullFileName = str.replace(/^url|[\(\)]/g, '');//extract file name, including path

    	fullFileName = fullFileName.replace(/['"]+/g, '');//remove single and double quotes

    	var fileName = fullFileName.split('/');

    	return fileName[fileName.length-1];

    };

    exports.getFileNameFromInput = function (input) {

    	var fullPath = input.value;

		if (fullPath) {

		    var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));

		    var filename = fullPath.substring(startIndex);
		    
		    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
		        filename = filename.substring(1);
		    }

		    return filename;
		
		} else {

			return false;

		}

    };
    
}());