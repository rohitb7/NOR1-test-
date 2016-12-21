"use strict";


App.service('norConfirmationService', ['$http', function($http) {


        	//initil state of selected offers object
			this.showConfirm = null;

			// set confirmed service
            this.setConfirmation = function(setData) {
                this.showConfirm = setData;
            }

            // get confirmed service
            this.getConfirmation = function() {
                return this.showConfirm;
            }

        }

    ]

);
