var app = angular.module('teorema',["ngRoute"]);

app.controller('tCtrl',function ctrl($scope,$location) {
    $location.path('/home');
    
});

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    
     $routeProvider.when("/home", {
        templateUrl: "view/home.html",
        controller: "tCtrl",
        
    }).when("/pesquisa", {
        templateUrl: "view/pesquisamercadologica.html",
        controller: "tCtrl",
        
    })
    .when("/solucoes", {
        templateUrl: "view/pesquisamercadologica.html",
        controller: "tCtrl",
        
    });
    
});

$(document).ready(function(){
    $(".button-collapse").sideNav();
    $('.carousel.carousel-slider').carousel({fullWidth: true},setTimeout(autoplay, 4500));
    function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
     }
     var options = [
         {selector: '#branding', offset: 280, callback: function(el) { Materialize.fadeInImage($(el)); } },
         {selector: '#imgredessociais', offset: 180, callback: function(el) { Materialize.fadeInImage($(el)); } },
         {selector: '#blog', offset: 260, callback: function(el) { Materialize.fadeInImage($(el)); } },
         {selector: '#pesquisa', offset: 360, callback: function(el) { Materialize.fadeInImage($(el)); } },
         {selector: '#pesquisalist', offset: 240, callback: function(el) { Materialize.showStaggeredList($(el)); } },
         {selector: '#oqs', offset: 100, callback: function(el) { Materialize.showStaggeredList($(el)); } }
        ];
          Materialize.scrollFire(options); 
  });