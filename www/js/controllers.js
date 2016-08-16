angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.wordSubmit=function () {

  };
  $scope.wordPass=function () {

  };
  $scope.wordNote=function () {

  };
  $scope.wordTip=function () {

  };
  $scope.wordTran=function () {
    
  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

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

.controller('WelcomeCtrl',function ($scope,$state) {
  $scope.goOn=function () {
    $state.go('tab.dash');

  };
  $scope.goNew=function () {
    $state.go('tab.dash');
    localStorage.setItem("hasPlayed",1);
    localStorage.setItem("point",0);
    localStorage.setItem("life",5)
  }
});
