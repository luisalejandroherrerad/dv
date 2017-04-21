'use strict';

angular.module('catalog', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/catalog',{
		templateUrl: 'public/catalog/catalog.html',
		controller:'CatalogCtrl'
	})
}])

.controller('CatalogCtrl', function($scope){
	$scope.productCatalog = {};

	$scope.productCatalog = [
		{ id: 215750 , name: 'Set Pedales', shortDescription: 'Set de 3 pedales para vehículo con un diseño deportivo.', description: 'Set de 3 pedales para vehículo, Tiene un diseño deportivo. Cumplen la norma E. C. E. 35: uso permitido para circular en vía pública.' , brand: 'Sparco' , category: ['Accesorios'] , image: '215750.jpg',  price: 84900 },
		{ id: 215748 , name: 'Pomo Clásico' , shortDescription: 'Pomo de lujo con diseño elegante, deportivo, fácil de instalar.', description: 'c' , brand: 'Sparco' , category: ['Accesorios'] , image: '215748.jpg' , price: 79900 },
		{ id: 135246 , name: 'Aceite 20 w 50 1 galón Super 1000' , shortDescription: 'Lubricantes Mobil, con una formulacion unica y probada.', description: 'Lubricantes Mobil Super, con una formulacion unica y probada, le brinda al motor la proteccion que necesita. Mejora la economia del combustible.' , brand: 'Mobil' , category: ['Aceites'] , image: '135246.jpg' , price:79900 },
		{ id: 289388 , name: 'Aceite Auto 20W50 1 Galón' , shortDescription: 'Aceite Havoline® Motor Oils con Tecnología Deposit Shield®.', description: 'Los aceites Havoline® Motor Oils con Tecnología Deposit Shield® proporcionan valor a través de: Excelente protección anti-desgaste  Protección contra fallas térmicas Motores limpios y sistemas positivos de ventilación de la caja del cigüeñal limpios, resultado de una mínima formación de depósitos en condiciones de conducción con cargas pesadas y de detención y arranque constante. Satisface o excede los requerimientos de garantía de los fabricantes de automóviles y camiones ligeros que se apoyan en un aceite para motor API SN. Excelente control a alta temperatura' , brand: 'Chevron' , category: ['Aceites'] , image: '289388.jpg' , price: 69900 },
		{ id: 214654 , name: 'Bombillo Halogeno H4' , shortDescription: 'Bombillo halógeno de referencia H4, ideal para lamparas de autos.', description: 'Bombillo halógeno de referencia H4, ideal para lamparas de autos.' , brand: 'Bosch' , category: ['Ampolletas'] , image: '214654.jpg' , price: 11200 },
		{ id: 49411 , name: 'Bombillo halógeno' , shortDescription: 'Bombillo halógeno 100/900 w 48901-BL de gran calidad marca Narva.', description: 'Bombillo halógeno de gran calidad marca Narva.' , brand: 'Narva' , category: ['Ampolletas'] , image: '49411.jpg' , price: 17400 },
		{ id: 102847 , name: 'Kit 5 fusibles' , shortDescription: 'Set de 5 minifusibles, diversos amperajes para automoviles.', description: 'Set de 5 minifusibles, diversos amperajes para automoviles.' , brand: 'Auto Style' , category: ['Fusibles'] , image: '102847.jpg' , price: 5900 }
	];

	// if($rootScope.cart.lenght == 0){ 
	// 	$rootScope.cart = [];
	// }


});


