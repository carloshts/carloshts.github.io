var app = angular.module('teorema',["jkAngularCarousel","ngRoute","ngMaterial","ngMessages"]);


app.config(function($mdThemingProvider,$mdIconProvider,$routeProvider, $locationProvider) {
  $mdThemingProvider.definePalette('amazingPaletteName', {
    '50': 'ffebee',
    '100': 'ffffff',
    '200': 'ef9a9a',
    '300': 'e57373',
    '400': 'ef5350',
    '500': 'ffcdd2',
    '600': 'ef9a9a',
    '700': 'e57373',
    '800': 'c62828',
    '900': 'ef5350',
    'A100': '82B1FF',
    'A200': '448AFF',
    'A400': '2979FF',
    'A700': '2962FF',
    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light

    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
     '200', '300', '400', 'A100'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });

  $mdThemingProvider.theme('default')
    .primaryPalette('amazingPaletteName');

  $mdIconProvider.fontSet('md', 'material-icons');

  $locationProvider.hashPrefix('');
    
  $routeProvider.when("/", {
    templateUrl: "view/agencia.html",
    controller: "tCtrl",
        
  })
  .when("/agencia-de-propaganda", {
    templateUrl: "view/agencia.html",
    controller: "tCtrl",
        
  })
  .when("/gestao-de-redes-sociais",{
    templateUrl:"view/gestao_rede_sociais.html",
    controller: "tCtrl"
  })
  .when("/desenvolvimento-digital",{
    templateUrl:"view/desenvolvimento.html",
    controller: "tCtrl"
  })
  .when("/pesquisa-mercadologica", {
    templateUrl: "view/pesquisamercadologica.html",
    controller: "tCtrl",
      
  })
  .when("/contato", {
    templateUrl: "view/contato.html",
    controller: "tCtrl",
    
  });

});

app.controller('tCtrl',function ctrl($scope,$mdSidenav,$location) {
  $scope.slides = {
    slidep1:[
      {
        src:"imgs/ag1.jpg"
      },
      {
        src:"imgs/ag3.jpg"
      },
      {
        src:"imgs/ag4.jpg"
      }
    ],
    slidep2:[
    {
      src:"imgs/pesquisa.jpg"
    },
    {
      src:"imgs/pesquisa1.jpg"
    },
    {
      src:"imgs/pesquisa2.jpg"
    },
    {
      src:"imgs/pesquisa4.jpg"
    },
    {
      src:"imgs/pesquisa5.jpg"
    }
  ]}
  $scope.cases = [
    {
      src: 'teorema_imgs/cases (1).jpeg'
    },
    {
      src: 'teorema_imgs/cases (2).jpeg'
    },
    {
      src: 'teorema_imgs/cases (3).jpeg'
    },
    {
      src: 'teorema_imgs/cases (4).jpeg'
    },
    {
      src: 'teorema_imgs/cases (5).jpeg'
    },
    {
      src: 'teorema_imgs/cases (6).jpeg'
    },
  ]
  $scope.link = function(path){
    $location.path(path)
  };

  $scope.toggleLeft = function(){$mdSidenav('left').toggle()};
});