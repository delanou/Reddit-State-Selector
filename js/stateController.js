// This will create a controller to take whatever state is selected
// and place it into local storage

let myApp = angular.module("myApp", []);

myApp.controller("stateController", function($scope) {
    $scope.selectedState = "All States";

    // sets the state in local storage
    $scope.setState = function() {

        // Save it using the Chrome extension storage API.
        chrome.storage.local.set({'storedState': $scope.selectedState}, function() {
            chrome.storage.local.get("storedState", function(result) {
                console.log(result);
            });
            console.log('Settings saved');
        });


        // then force a reload on the tab
        chrome.tabs.reload();
    };
});
