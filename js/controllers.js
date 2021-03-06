angular.module('redditCloneApp')
  .controller('MainCtrl', function ($scope, $rootScope) {
    $scope.add = {};
    $scope.article = {};
    $scope.comment = {};
    $scope.articles = [{
  "_id": "571cfdda2890ad1100116322",
  "username": "shellysmith",
  "email": "shelly@smith.com",
  "password": "$2a$10$v5etyD1GnHeShG68VGo8cedH1NL/oyBjPEs3OIMK7aaARf2/wmsgu",
  "dob": "1975-12-12T07:00:00.000Z",
  "slug": "shellysmith",
  "__v": 0,
  "_matches": [
    "571cfd532890ad1100116321"
  ],
  "interestedIn": [
    0,
    1,
    2,
    3
  ],
  "gender": 0,
  "address": {
    "geo": {
      "lat": 35,
      "lng": 44
    }
  },
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/fronx/128.jpg",
  "names": {
    "firstName": "Shelly",
    "lastName": "Smith"
  },
  "admin": false,
  "active": true
},
{
  "_id": "571cfd532890ad1100116321",
  "username": "stevebaker",
  "email": "steve@baker.com",
  "password": "$2a$10$gNN19E6RdfCSFM0RIj/uUehnryPDypiZEVnPnZmZd5M2FSh4pWffO",
  "dob": "1983-12-12T07:00:00.000Z",
  "slug": "stevebaker",
  "__v": 0,
  "_matches": [],
  "interestedIn": [
    0,
    1,
    2,
    3
  ],
  "gender": 0,
  "address": {
    "geo": {
      "lat": 23,
      "lng": 25
    }
  },
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/fronx/128.jpg",
  "names": {
    "firstName": "Steve",
    "lastName": "Baker"
  },
  "admin": false,
  "active": true
},
{
  "_id": "571cf6162890ad1100116320",
  "username": "ginadebell",
  "email": "gina@debell.com",
  "password": "$2a$10$aQMXho4nnVkw9SzyMMr9.eahZk4GlUJep2iO3NQCQU52NeLwBMfwW",
  "dob": "1964-11-11T07:00:00.000Z",
  "slug": "ginadebell",
  "__v": 0,
  "_matches": [
    "57193afcf9c52e1100f8e1aa"
  ],
  "interestedIn": [
    0,
    1,
    2,
    3
  ],
  "gender": 0,
  "address": {
    "geo": {
      "lat": 58,
      "lng": 57
    }
  },
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/fronx/128.jpg",
  "names": {
    "firstName": "Gina",
    "lastName": "Debell"
  },
  "admin": false,
  "active": true
}];

    $scope.add.addArticle = function () {
      $scope.articles.push({
        title: $scope.article.title,
        author: $scope.article.author,
        date: new Date(),
        description: $scope.article.description,
        image: $scope.article.image,
        rating: 0,
        comments: []
      });
      $rootScope.root.showNewArticleWindow = false;
      $scope.article = {};
    };
    $scope.removeArticle = function (article) {
      console.log(article);
      $scope.articles.splice($scope.articles.indexOf(article),1);
    };
    $scope.upVote = function(article) {
      article.rating += 1;
    };
    $scope.downVote = function(article) {
      article.rating -= 1;
    };
    $scope.addComment = function(article) {
      article.comments.push({
        newAuthor: article.newAuthor,
        newComment: article.newComment,
        newCommentDate: article.newCommentDate = new Date()
      });
      article.newAuthor = '';
      article.newComment = '';
      article.newCommentDate = '';
      article.showCommentWindow = false;
      article.showCommentList = true;
    };
    $scope.toggleComments = function (article) {
      if(article.showCommentList == true) {
        article.showCommentList = false;
      } else {
        article.showCommentList = true;
      }
    };
  });
