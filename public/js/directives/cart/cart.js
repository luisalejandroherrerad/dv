app.directive('cart', function(){
  return{
    restrict: 'E',
    scope: {
      product: '='
    },
    templateUrl:'public/js/directives/cart/cart.html'
  }
});

