app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when("/login", {
        templateUrl: "view/login.html",
        controller: "main",
        
    }).when("/postagens", {
        templateUrl: "view/postagens/consultarPostagens.html",
        controller: "pCtrl",
        
    }).when("/nova-postagem", {
        templateUrl: "view/postagens/editPostagem.html",
        controller: "pCtrl",
        
    }).when("/edit-postagem/:id", {
        templateUrl: "view/postagens/editPostagem.html",
        controller: "pCtrl",
        
    }).when("/colunas", {
        templateUrl: "view/colunas/consultarColunas.html",
        controller: "colCtrl",
        
    }).when("/nova-coluna", {
        templateUrl: "view/colunas/editColuna.html",
        controller: "colCtrl",
        
    }).when("/edit-coluna", {
        templateUrl: "view/colunas/editColuna.html",
        controller: "colCtrl",
        
    }).when("/news", {
        templateUrl: "view/news/consultarNoticias.html",
        controller: "newsCtrl",
        
    }).when("/nova-noticia", {
        templateUrl: "view/news/editNoticia.html",
       controller: "newsCtrl",
        
    }).when("/edit-noticia", {
        templateUrl: "view/news/editNoticia.html",
        controller: "newsCtrl",
        
    }).when("/usuarios", {
        templateUrl: "view/usuarios/consultarUsuario.html",
        controller: "uCtrl",
        
    }).when("/novo-usuario", {
        templateUrl: "view/usuarios/editUsuario.html",
        controller: "uCtrl",
        
    }).when("/edit-usuario", {
        templateUrl: "view/usuarios/editUsuario.html",
        controller: "uCtrl",
        
    }).when("/caravanas", {
        templateUrl: "view/caravanas/consultarCaravana.html",
        controller: "carCtrl",
        
    }).when("/nova-caravana", {
        templateUrl: "view/caravanas/editCaravana.html",
        controller: "carCtrl",
        
    }).when("/edit-caravana", {
        templateUrl: "view/caravanas/editCaravana.html",
        controller: "carCtrl",
        
    }).otherwise({ redirectTo: '/login'});
});