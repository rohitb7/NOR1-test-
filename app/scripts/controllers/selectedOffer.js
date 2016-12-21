'use strict';

/**
 * @ngdoc function
 * @name norApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the norApp
 */
var App = angular.module('norApp')
    .controller('OfferCtrl', ['norRoomOffersService', 'norConfirmationService', '$routeParams', '$location', '$scope', '$http', function(norRoomOffersService, norConfirmationService, $routeParams, $location, $scope, $http) {


        // display offers selected 
        // confirmed data from service
        var showConfirmation = norConfirmationService.getConfirmation();

        //compare with each json and see if the result item_id matches with the offers seleced
        var offersFromPromise = norRoomOffersService.getRoomOffersList();

        offersFromPromise.then($scope.successOffers, $scope.failureOffers);

        $scope.successOffers = function(response) {
        	$scope.mainDisplayConfirmation = [];
            $scope.show = response.data;
            console.log($scope.show);
            for (var key in showConfirmation) {
                console.log(key);
                for (var i = 0; i < $scope.show.length; i++) {
                    if (key == $scope.show[i].item_id) {
                        $scope.mainDisplayConfirmation.push($scope.show[i]);
                    }
                }
            }
            console.log($scope.mainDisplayConfirmation);
            return $scope.mainDisplayConfirmation;      
        }


        $scope.failureOffers = function(error) {
            console.log(error);
        };



    }]);
