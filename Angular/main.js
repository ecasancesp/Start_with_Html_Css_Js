/* Angular */

(function(angular) {    //no es necesario poner 'angular'
    "use strict";

    var enriqueApp = angular.module("enriqueApp",[]);

    enriqueApp.controller("DivController", DivController);
    function DivController($scope) {
    	$scope.showMe = false;
        var fin = $scope.arrayText = [];
        $scope.submitData = function () {
            var idea = $scope.ideaText;
            var desc = $scope.descText;
            console.debug(idea);
            console.debug(desc);
            if (idea == "" || idea == undefined) {
                if (desc == undefined || desc == "") {
                    window.alert("Idea missing \nCheck description requirement");
                }
                else {
                    window.alert("Idea missing");
                }
            }
            else{
                if (desc == undefined || desc == "") {
                    window.alert("Check description requirement");
                }
                else {
                    $scope.arrayText.push({idea,desc});
                    $scope.list = fin;
                    $scope.showMe = true;
                }
            }
        }
    }

})(window.angular); //no es necesario poner 'window.angular'
