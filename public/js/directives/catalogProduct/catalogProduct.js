app.directive('catalogProduct', function(){
  return{
    restrict: 'E',
    scope: {
      product: '='
    },
    templateUrl:'public/js/directives/catalogProduct/catalogProduct.html'
  }
});

