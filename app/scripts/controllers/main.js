'use strict';

/**
 * @ngdoc function
 * @name norApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the norApp
 */
var App = angular.module('norApp')
    .controller('MainCtrl', ['norConfirmationService', 'norRoomOffersService', '$routeParams', '$location', '$scope', '$http', function(norConfirmationService, norRoomOffersService, $routeParams, $location, $scope, $http) {



        // $location.path('/main.html').search({ firstName: 'rohit', lastName: 'Borade', price: '140', email: 'rohitborade777@gmail.com', bookedRoomCode: 'KING' });

        // console.log($location.path('/main.html').search({ firstName: 'rohit', lastName: 'Borade', price: '140', email: 'rohitborade777@gmail.com', bookedRoomCode: 'KING' }));




        //NOTES
        //add a background to short room desc
        //black  for extra price color
        //center allign div 
        // confirmstion page
        // 



        var paramsObj = $location.search();

        //make an object from the params
        $scope.bookingDetailObject = {
            firstName: paramsObj.firstName,
            lastName: paramsObj.lastName,
            price: paramsObj.price,
            email: paramsObj.email,
            bookedRoomCode: paramsObj.bookedRoomCode,
            roomShortDescription: null,
            roomLongDescription: null,
            roomImage: null,
            mutuallyExclusiveOffers: [],
            otherOffers: [],
            selectedMutuallyexclusiveId: null
        };


        //http://localhost:9000/#/main.html?firstName=s&lastName=v&price=200&bookedRoomCode=QUEEN


        $scope.offerList = [];
        $scope.origOfferList = null;

        var offersFromPromise = norRoomOffersService.getRoomOffersList();

        
        // Class level function        
        $scope.successOffers = function(response) {
            $scope.origOfferList = response.data;
            $scope.fillBookingDetail();
            $scope.filterOffers();
            $scope.identifyMutuallyExclusiveOffers();
            $scope.submitSelected();
        }


        $scope.failureOffers = function(error) {
            console.log(error);
        };


        offersFromPromise.then($scope.successOffers, $scope.failureOffers);


        // copy data from original list to $scope.bookingDetailObject  i,e from object params
        // since we dont have these values and we have deined them as null at initialization
        $scope.fillBookingDetail = function() {
            for (var i = 0; i < $scope.origOfferList.length; i++) {
                if ($scope.origOfferList[i].bookedRoomCode === $scope.bookingDetailObject.bookedRoomCode) {
                    $scope.bookingDetailObject.roomShortDescription = $scope.origOfferList[i].short_desc;
                    $scope.bookingDetailObject.roomLongDescription = $scope.origOfferList[i].long_desc;
                    $scope.bookingDetailObject.roomImage = $scope.origOfferList[i].image_url;
                }
            }
        };


        // filter offers which are not required /
        // example if "KING" remove QUEEN since we dont need it 
        // same for price
        $scope.filterOffers = function() {
            //remove unnecessary rooms
            for (var i = 0; i < $scope.origOfferList.length; i++) {
                // if booked room is QUEEN      
                if (($scope.bookingDetailObject.bookedRoomCode === 'QUEEN')) {
                    if ($scope.origOfferList[i].bookedRoomCode === 'KING' || $scope.origOfferList[i].bookedRoomCode === 'SUITE') {
                        $scope.offerList.push($scope.origOfferList[i]);
                        continue; // for next for loop
                    }
                }
                // if booked room is KING
                else if (($scope.bookingDetailObject.bookedRoomCode == 'KING')) {
                    if ($scope.origOfferList[i].bookedRoomCode == 'SUITE') {
                        $scope.offerList.push($scope.origOfferList[i]);
                        continue;
                    }
                }
                //checking for price if greater than 199    
                if (($scope.bookingDetailObject.price >= 199) && (!$scope.origOfferList[i].bookedRoomCode)) {
                    $scope.offerList.push($scope.origOfferList[i]);
                }
            }
        }



        // identify mutually exclusive offers
        // like select rooms vs add straberies
        $scope.identifyMutuallyExclusiveOffers = function() {
            for (var j = 0; j < $scope.offerList.length; j++) {
                if ($scope.offerList[j].bookedRoomCode) {
                    $scope.bookingDetailObject.mutuallyExclusiveOffers.push($scope.offerList[j]);
                } else {
                    $scope.offerList[j].selected = false;
                    $scope.bookingDetailObject.otherOffers.push($scope.offerList[j]);
                }
            }
        };


        //submition ater button submit
        $scope.submitSelected = function() {
            $scope.selectedOffers = {}; // add mutualExOffer to array
            if ($scope.bookingDetailObject.selectedMutuallyexclusiveId) {
                $scope.selectedOffers[$scope.bookingDetailObject.selectedMutuallyexclusiveId] = true;
            }
            for (var p = 0; p < $scope.bookingDetailObject.otherOffers.length; p++) {
                if ($scope.bookingDetailObject.otherOffers[p].selected) {
                    $scope.selectedOffers[$scope.bookingDetailObject.otherOffers[p].item_id] = true;
                }
            }
            if (!$.isEmptyObject($scope.selectedOffers)) {
                var postedOffersFromPromise = norRoomOffersService.postRoomOffersList($scope.selectedOffers);
                postedOffersFromPromise.then($scope.successPostedOffers, $scope.failurePostedOffers);
            }
        }


        //show confirmation page after submition
        //since its fake api continue on $scope.failurePostedOffers function
        $scope.successPostedOffers = function(response) {
            console.log(response);
            //$location.path('/offerSelected');
        }



        // couldnt submit the offer // show error message on screen
        // but we are continuing from here since http.post wont work 
        $scope.failurePostedOffers = function(error) {
            console.log('selectedOffers');
            console.log($scope.selectedOffers);
            norConfirmationService.setConfirmation($scope.selectedOffers);
           // $scope.errorMessage = 'We are sorry we cannot upgrade any offers right now please call 123-456-7890 for more details';
            $location.url('offerSelected/' + $routeParams.firstName);
        };




    }]);
