angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})
.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
.controller('TutorialCtrl', function($scope) {
  $scope.listaDatos=[
    'alex1',
    'alex2',
    'alex3',
    'alex4',
    'alex5',
    'alex6',
    'alex7',
    'alex8',
    'alex9',
    'alex10'
  ];
  $scope.ObjetoPrueba = [{
      nombre:"Alexeis",
      apellido:"Carrillo"
    },
    {
      nombre:"Juan",
      apellido:"Perez"
    },
    {
      nombre:"Pedro",
      apellido:"Morales"
    },
    {
      nombre:"Mario",
      apellido:"Contreras"
    }];

})
.controller('directivasCtrl', function($scope,$ionicPopup) {
  $scope.showAlert = function() {
    $ionicPopup.alert({
      title: 'ng-click',
      template: 'Evento ng-click'
    });
  };
  $scope.ObjetoPrueba = [{
    nombre:"Alexeis",
    apellido:"Carrillo"
  },
    {
      nombre:"Juan",
      apellido:"Perez"
    },
    {
      nombre:"Pedro",
      apellido:"Morales"
    },
    {
      nombre:"Mario",
      apellido:"Contreras"
    }];

  $scope.total = 0;
  $scope.aFavor = function (){
    $scope.total++;
  };
  $scope.enContra = function (){
    $scope.total--;
  };

  $scope.cliente = {
    nombre: 'Jhon',
    direccion: 'Av. Jose pardo 481'
  };

})
.controller('DataBindCtrl', function($scope,$rootScope) {
  $scope.titulo = 'DataBind';
  $rootScope.variableGlobal = 'Variable Global';

})
;
