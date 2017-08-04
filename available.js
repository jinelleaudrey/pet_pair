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
      img: 'jane.jpg',
      headerText: 'Jane',
      blurbText: '1 year  old⣿ female ⣿  outgoing, playful, affectionate⣿ good with other pets'
    },
    {
      img: 'peaches.jpg',
      headerText: 'Peaches',
      blurbText: '2 years  old⣿| female ⣿ affectionate, outgoing, playful ⣿ good with some pets'
    },
    {
      img: 'ruffino.jpg',
      headerText: 'Ruffino',
      blurbText: '2 years old⣿ male ⣿ playful, affectionate, curious, easy going ⣿ daily walks/exercise ⣿ no training'
    },
    {
      img: 'elvis.jpg',
      headerText: 'Elvis',
      blurbText: '1 year  old⣿ male ⣿ shy, affectionate, independent ⣿ good with other pets ⣿ no training'
    },
    {
      img: 'cocoa.jpg',
      headerText: 'Cocoa',
      blurbText: '2 years old⣿ female ⣿ affectionate, happy, playful ⣿ good with other pets'
    },
    {
      img: 'guru.jpg',
      headerText: 'Guru',
      blurbText: '1 year old⣿ male ⣿ independent, shy, affectionate ⣿ good with other pets'
    },
    {
      img: 'babbette.jpg',
      headerText: 'Babbette',
      blurbText: '2 years old⣿ female ⣿ shy, independent, mellow ⣿ good with most pets'
    },
    {
      img: 'petra.jpg',
      headerText: 'Petra',
      blurbText: '8 years old⣿ female ⣿ shy, gentle, curious ⣿ good with some pets ⣿ no training'
    },
    {
      img: 'trooper.jpg',
      headerText: 'Trooper',
      blurbText: '2.5 years old⣿ male ⣿ outgoing, happy, playful ⣿ good with other pets'
    },
    {
      img: 'luke.jpg',
      headerText: 'Luke',
      blurbText: '13 years old ⣿ male ⣿'
    },
    {
      img: 'elwin.jpg',
      headerText: 'Elwin',
      blurbText: '9 years old⣿ male ⣿ independent, mellow, shy ⣿ good with some dogs'
    },
/*    {
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6234/unsplashed2-photo-1414912925664-0c502cc25dde.jpeg',
      headerText: 'Getting Away for the Weekend',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus voluptate nam provident, nulla recusandae maxime fugit praesentium blanditiis sunt, veniam quasi, mollitia possimus consequuntur nemo qui repellat adipisci accusamus ullam.'
    },
    {
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6234/unsplashed2-photo-1428342319217-5fdaf6d7898e.jpeg',
      headerText: 'The Bridge',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ducimus recusandae deleniti nobis unde dolor minus ut corporis saepe tempora architecto, possimus! Obcaecati odit nam vero ipsum odio vel iste.'
    },
    {
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6234/unsplashed2-photo-1423483641154-5411ec9c0ddf.jpeg',
      headerText: 'Visit to the Vineyard',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ducimus recusandae deleniti nobis unde dolor minus ut corporis saepe tempora architecto, possimus! Obcaecati odit nam vero ipsum odio vel iste.'
    } 
*/
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