require.config({
	baseUrl : 'js',
	paths : {
		'jquery' : '//code.jquery.com/jquery-2.1.1.min',
		'angular' : '//ajax.googleapis.com/ajax/libs/angularjs/1.2.14/angular.min',
		'angular-route' : '//ajax.googleapis.com/ajax/libs/angularjs/1.2.14/angular-route.min',
		'angular-storage' : '//rawgithub.com/gsklee/ngStorage/master/ngStorage.min',
		'bootstrap' : '//netdna.bootstrapcdn.com/bootstrap/3.0.1/js/bootstrap.min',
		'autocomplete' : './lib/autocomplete'
	},
	shim : {
		'angular-storage' : {
			'exports' : 'angular-storage',
			'deps' : ['angular']	
		},
		'angular-route' : {
			'exports' : 'angular-route',
			'deps' : ['angular']	
		},
		'angular' : {
			'exports' : 'angular'
		},
		'bootstrap' : {
			'exports' : 'bootstrap',
			'deps' : ['jquery']
		}
	}
});

require(['angular','bootstrap','controllers/alertsController','interceptors/loadingInterceptor','interceptors/httpErrorInterceptor','routes/defaultRoutes','routes/registrationRoutes','routes/entriesPageRoutes', 'routes/searchRoutes'], function(angular){
	angular.bootstrap(document, ['app']);
});