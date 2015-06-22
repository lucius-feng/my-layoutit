/*
 * creator	: 	ChenShenhai
 * github  	: 	https://github.com/chenshenhai
 *
 */

require.config({

	paths : {
		'jquery' 			: '../jquery-2.0.0.min',
		'bootstrap' 		: '../bootstrap.min',
		'jquery-ui' 		: '../jquery-ui',
		'jquery-ui-touch' 	: '../jquery.ui.touch-punch.min',
		'jquery-html-clean' : '../jquery.htmlClean',
		'ckeditor' 			: '../../ckeditor/ckeditor',
		'ckeditor-config' 	: '../../ckeditor/config',
		'page-script' 		: '../scripts'
	},

	map: {
        '*': {
            'css': '/nb-admin/front/js/lib/require/css.js'
        }
    },

	shim : {

		'bootstrap' : {
			exports : 'bootstrap'
		},
		'bootstrap' : ['jquery'],
	

		'jquery-ui' : {
			exports : 'jquery-ui'
		},
		'jquery-ui' : ['jquery'],


		'jquery-ui-touch' : {
			exports : 'jquery-ui-touch'
		},
		'jquery-ui-touch' :  ['jquery'],


		'jquery-html-clean' : {
			exports : 'jquery'
		},
		'jquery-html-clean' : ['jquery'],


		'ckeditor' : {
			exports : 'ckeditor'
		},

		'ckeditor-config' : {
			exports : 'ckeditor-config'
		},
		'ckeditor-config' : ['ckeditor'],


		'page-script' : {
			exports : 'page-script'
		},
		'page-script' : [
			'jquery',
			'bootstrap', 
			'jquery-ui', 
			'jquery-ui-touch', 
			'jquery-html-clean', 
			'ckeditor',
			'ckeditor-config'
			],
	}
});


require([


	'jquery',
	'bootstrap',
	'jquery-ui',
	'jquery-ui-touch',
	'jquery-html-clean',
	'ckeditor',
	'ckeditor-config',
	'page-script',
	
	// 'css!/nb-admin/front/page/layoutit/css/bootstrap-combined.css',
	// 'css!/nb-admin/front/page/layoutit/css/layoutit.css',


	], function(){

});


