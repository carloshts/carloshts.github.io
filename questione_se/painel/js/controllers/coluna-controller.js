app.controller('colCtrl',function($scope){
    // Editor options.
    $scope.options = {
        language: 'en',
        allowedContent: true,
        entities: false
    };
    $scope.coluna = {titulo:"Titulo", texto:"<p> this is custom directive </p>"};
    
});