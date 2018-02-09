
app.controller('pCtrl',function($scope){
    // Editor options.
  $scope.options = {
    language: 'en',
    allowedContent: true,
    entities: false
  };
    $scope.postagem = {titulo:"Titulo", texto:"<p> this is custom directive </p>"};
    
    
    
});