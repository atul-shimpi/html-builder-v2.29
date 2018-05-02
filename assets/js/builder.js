/*
	CSS
*/
require('../css/main.css');

require('script!./vendor/jquery.min.js');
require('script!./vendor/jquery-ui.min.js');
require('script!./vendor/flat-ui-pro.min.js');
require('script!./vendor/chosen.min.js');
require('script!./vendor/jquery.zoomer.js');
require('script!./vendor/spectrum.js');

require('./modules/config.js');
require('./modules/ui.js');
require('./modules/builder.js');
require('./modules/utils.js');
require('./modules/canvasElement.js');
require('./modules/styleeditor.js');
require('./modules/content.js');
require('./modules/export.js');
require('./modules/preview.js');

document.querySelector('body').style.display = 'block';
