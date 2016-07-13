/* Angular */

(function(angular) {    //no es necesario poner 'angular'
    "use strict";

    var enriqueApp = angular.module("enriqueApp",['ui.bootstrap']);

    enriqueApp.controller("DivController", DivController);
    function DivController($scope, $uibModal) {
    	$scope.showMe = false;
      $scope.ideaText = "";
      $scope.descText = "";
      var fin = $scope.arrayText = [],
      message = "";
      $scope.submitData = function () {
          message = "";
          var idea = $scope.ideaText;
          var desc = $scope.descText;

          if (!idea || idea === ""){
            message += "Idea missing\n";
          }

          if (!desc || desc === "" || desc.length < 100 ){
            message += "Check description requirement";
          }

          if (message === ""){
            $scope.arrayText.push({'idea':idea, 'desc':desc});
            $scope.list = fin;
            $scope.showMe = true;
          }else {
            showDialog(message);
          }
      };

      function showDialog(message){
        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'mydialog.html',
          controller: 'ModalInstanceCtrl',
          size: 'lg',
          resolve: {
            enriqueMessage: function () {
              return message ;
            },
            prueba : function(){
              return "Hello World";
            }
      }
        });
        modalInstance.result.then(function () {
          console.log("La ventana se ha cerrado");
        }, function () {
          console.log("La ventana se ha cancelado");
        });
      }
    }

    enriqueApp.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, enriqueMessage, prueba) {
      $scope.message = enriqueMessage;
      $scope.message2 = prueba;
      $scope.ok = function () {
        $uibModalInstance.close();
      };

      $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
    });
})(window.angular); //no es necesario poner 'window.angular'
