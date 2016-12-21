"use strict";


App.service('norRoomOffersService', ['$http', function($http){

    this.roomOfferListApi = "data/rooms.js";   

    this.bookOffersApi = "data/upgraded_offers_booking.json";


    //get json file , will return a promise
    this.getRoomOffersList = function(){
        var roomOfferListPromise = $http.get(this.roomOfferListApi);
        return roomOfferListPromise;
    }


    // post. will return an error since we dont have an api
    this.postRoomOffersList = function(selectedOffers){
    	var selectedRoomOffersPromise = $http.post(this.bookOffersApi , selectedOffers)
    	return selectedRoomOffersPromise;
    }
    
}

]

);


