app.controller('catalogProductCtrl', function($scope){

    $scope.addProductToCart = function(id){
        var cartElement = {
            productId = product.id,
            quantity = $('#quantity').val()
        }
        $storage.cart.push({})
    }
});


