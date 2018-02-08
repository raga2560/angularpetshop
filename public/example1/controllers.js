angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('PetsCtrl', function($scope, Chats) {
  
  //$scope.pets = Chats.petsall();
  $scope.remove = function(pet) {
    Chats.remove(pet);
  }
})
.controller('ChatsCtrl', function($scope, Chats) {

  Chats.init();
     $scope.adopters = Chats.getadopters();

  $scope.adoptpet = function(id1)
  {
	var id = parseInt(id1);
	Chats.adoptpet(id);
  }
  $scope.getadopters = function()
  {
     $scope.adopters = Chats.getadopters();
  }
  $scope.loadpets = function()
  {
     $scope.pets = Chats.getpets();
  }
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
