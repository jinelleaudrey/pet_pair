var contentBoxApp = angular.module('contentBoxApp', []);
var gridCtrl = contentBoxApp.controller('GridCtrl', function($scope) {
  var regex;
  $scope.escapeRegExp = function(string){
      return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");

/* Pet Values */
var values = {jane: shy}
  };
  $scope.gridItems = [
    {
      img: 'shen.jpg',
      headerText: 'Shen',
      blurbText: '7 years old ⣿ male ⣿ affectionate, mellow, likes cuddling, lap cat ⣿ good with some pets'
    },
    {
      img: 'rishi.jpg',
      headerText: 'Rishi',
      blurbText: '7 years old ⣿ male ⣿ affectionate, likes cuddling, shy ⣿ good with some pets'
    },

    {
      img: 'mandy.jpg',
      headerText: 'Mandy',
      blurbText: '1.5 years old ⣿ female ⣿ affectionate, outgoing, likes cuddling, curious, ⣿ good with some pets'
    },
    {
      img: 'georgina.jpg',
      headerText: 'Georgina',
      blurbText: ' 4 months old ⣿ female ⣿ affectionate, mellow, shy, lap cat ⣿ good with some pets'
    },
    {
      img:'rockie.jpg',
      headerText: 'Rockie',
      blurbText: '4 years old ⣿ female ⣿ affectionate, likes cuddling, mellow, lap cat ⣿ good with some pets'
    },
    {
      img: 'shelby.jpg',
      headerText: 'Shelby',
      blurbText: '1.5 years old ⣿ female ⣿ affectionate, likes cuddling, mellow, shy, lap cat ⣿ good with some pets'
    },
    {
      img: 'stanley.jpg',
      headerText: 'Stanley',
      blurbText: ' 5 years old ⣿ male ⣿ affectionate, outgoing, likes cuddling, Mellow, lap cat ⣿ good with some pets'
    },
    {
      img: 'leila.jpg',
      headerText: 'Leila',
      blurbText: '4 months old ⣿ female ⣿ affectionate, likes cuddling, mellow, shy ⣿ good with some pets'
    },


  ];
  $scope.search = '';
  $scope.$watch('search', function (value) {
      regex = new RegExp('\\b' + $scope.escapeRegExp(value), 'i');
  });
  $scope.filterBySearch = function(gridItem) {
      if (!$scope.search) return true;
      return regex.test(gridItem.headerText + " " + gridItem.blurbText);
  };
  $scope.toggleBlurb = function($event) {
    console.log($event);
  };
});