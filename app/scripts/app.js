'use strict';

/**
 * @ngdoc overview
 * @name norApp
 * @description
 * # norApp
 *
 * Main module of the application.
 */
angular
    .module('norApp', [
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ui.router',
    ])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
            })
            .when('/main', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
            })
            .when('/offerSelected/:firstName', {
                templateUrl: 'views/selected_offers.html',
                controller: 'OfferCtrl',
            });
        // configure html5 to get links working on jsfiddle

    });


//http://localhost:9000/main.html?fname=Ashish&lname=babhale&price=100&email=ashish@gmail.com&bookingCode=KING
//      .otherwise({
//   redirectTo: '/'
//     })

//http://localhost:9000/main.html/123/messages/ascending?from=10&to=20

///new?customer
