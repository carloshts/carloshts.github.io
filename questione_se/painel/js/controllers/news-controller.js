app.controller('newsCtrl',function($scope){
    // Editor options.
    $scope.options = {
        language: 'en',
        allowedContent: true,
        entities: false
    };
    $scope.noticia = {titulo:"Titulo", texto:"<p> this is custom directive </p>"};
    
});