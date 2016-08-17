angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$ionicPopup,$state,localWords,rawWords) {
  $scope.myWord=localWords.getword();
  $scope.toNote={};
  $scope.data={
    life:Number(localStorage.getItem("life")),
    point:Number(localStorage.getItem("point")),
    showTran:false,
    showTip:false,
    inLetter:""
  };
  $scope.wordSubmit=function () {
    if($scope.data.inLetter==$scope.myWord.letter){
      var alertPopup=$ionicPopup.alert({
        title:'恭喜你',
        template:'继续加油哦！Point+1!'
      });

      localStorage.point=Number(localStorage.point)+1;
      if(Number(localStorage.point)%5==0){
        localStorage.life=Number(localStorage.life)+1;
      }
      $scope.data.life=Number(localStorage.getItem("life"));
      $scope.data.point=Number(localStorage.getItem("point"));
      $scope.myWord=localWords.getword();
      $scope.data.inLetter='';
    }
    else{
      var alertPopup=$ionicPopup.alert({
        title:'不对哟',
        template:'再想想吧~'
      });
      $scope.data.inLetter='';
    }
  };
  $scope.wordPass=function () {
    //添加到生词本

    var raws=rawWords.allRaw();
    raws.push($scope.myWord);
    rawWords.save(raws);

    /////////////////
    if($scope.data.life==1){
      $scope.data.life=$scope.data.life-1;
      localStorage.life=$scope.data.life;
      var confirmPopup = $ionicPopup.confirm({
        title: '挑战结束',
        template: '是否再来一局？'
      });
      confirmPopup.then(function(res) {
        if(res) {
          localStorage.point=0;
          localStorage.life=15;
          $scope.data.life=Number(localStorage.life);
          $scope.data.point=Number(localStorage.point);
        } else {
          localStorage.hasPlayed=0;
          $state.go('welcome');
        }
      });
    }
    else{
      localStorage.hasPlayed=1;
      $scope.data.life=$scope.data.life-1;
      localStorage.life=$scope.data.life;
      $scope.toNote=$scope.myWord;
      $scope.toNote.ww='';
      $scope.toNote.letter='';
      $scope.myWord=localWords.getword();
      $scope.data.showTran=false;
      $scope.data.showTip=false;
    }
  };
  $scope.wordTip=function () {
    $scope.data.showTip=true;
  };
  $scope.wordTran=function () {
    /*
    $scope.data.point=$scope.data.point-1;
    localStorage.point=$scope.data.point;
    */
    $scope.data.showTran=true;
  };
})

.controller('KillerCtrl',function ($scope,$ionicPopup,localWords,rawWords) {

  $scope.myWord=localWords.getword();
  $scope.inWord={
    word:""
  };
  $scope.wordSubmit=function () {
    console.log($scope.myWord.w);
    console.log($scope.inWord.word);
    if($scope.myWord.w==$scope.inWord.word) {
      var alertPopup=$ionicPopup.alert({
        title:'恭喜你',
        template:'继续加油哦！'
      });
      $scope.myWord=localWords.getword();
    }
    else{
      var alertPopup=$ionicPopup.alert({
        title:'不对哟',
        template:'再想想吧~'
      });
      $scope.inWord.word='';
    }
  };

  $scope.wordPass=function () {
    var raws=rawWords.allRaw();
    raws.push($scope.myWord);
    rawWords.save(raws);

    $scope.myWord=localWords.getword();
  }
})

.controller('ChatsCtrl', function($scope,rawWords) {
  $scope.words=rawWords.allRaw();
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {

})

.controller('AccountCtrl', function($scope) {

})

.controller('WelcomeCtrl',function ($scope,$state) {
  $scope.btnAble=false;
  if(localStorage.hasPlayed==1){
    $scope.btnAble=false;
  }
  else{
    $scope.btnAble=true;
  }
  console.log($scope.btnAble);
  $scope.goOn=function () {
    $state.go('tab.dash');
  };
  $scope.goNew=function () {
    $state.go('tab.dash');
    localStorage.setItem("point",0);
    localStorage.setItem("life",15);
  }
});
