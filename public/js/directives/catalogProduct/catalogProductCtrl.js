app.controller('catalogProductCtrl', function($scope, $sessionStorage){

    $scope.addProductToCart = function(id){
        var cartElement = {
            productId: id,
            quantity: $('#quantity').val()
        }
        $sessionStorage.cart.push(cartElement)
        $('#quantity').val(null)
    }
});


