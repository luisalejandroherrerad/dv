app.controller('cartCtrl', function($scope, $sessionStorage){

    $scope.loadProducts = function(){
        $scope.cartProducts = [];

        jQuery.each($sessionStorage.cart, function(id, quantity) {
            var product = $sessionStorage.productCatalog.id[id]

            product.quantity = quantity;

            $scope.cartProducts.push(product);
        });
    }
});