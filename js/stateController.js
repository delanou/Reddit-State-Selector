// This will create a controller to take whatever state is selected
// and place it into local storage

let myApp = angular.module("myApp", []);

myApp.controller("stateController", function($scope) {

    // I think this initializes the state
    $scope.selectedState = "All States";

    // sets the state in local storage
    $scope.setState = function() {
        alert("$scope.selectedState = " +$scope.selectedState);

        // Save it using the Chrome extension storage API.
        chrome.storage.local.set({'storedState': $scope.selectedState}, function() {
            chrome.storage.local.get("storedState", function(result) {
                console.log(result);
            });
            console.log('Settings saved');
        });
    };
});
