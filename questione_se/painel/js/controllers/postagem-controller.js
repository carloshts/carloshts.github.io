
app.controller('pCtrl',function($scope,$location,$routeParams,postagemApi){
    // Editor options.
  $scope.options = {
    language: 'en',
    allowedContent: true,
    entities: false
  };
    
    $scope.postagem = {id:null,titulo:"",img_mini:"", corpo:"",publicado:false,usuario_id:1,tipo_postagem_id:1};
    
    $scope.iniciar = function(){
      if($routeParams.id){
        postagemApi.findPostagem($routeParams.id)
        .then(function (data){
          console.log(data)
          $scope.postagem = data.data;
        })
        .catch(function(data){
          Materialize.toast(data.data.message,3000);
        })
      }
    }
    $scope.iniciar();

    $scope.salvar = function(publicado){
      
      $scope.postagem.publicado = publicado;
      if($routeParams.id){
        $scope.editarPostagem();
      } else {
        $scope.salvarPostagem();
      }
    }
    
    $scope.editarPostagem = function(){
      postagemApi.editPostagem($scope.postagem.id,$scope.postagem)
      .then(function(){
        $scope.enviarMensagem()
      })
    };
    $scope.salvarPostagem = function(){
      postagemApi.savePostagem($scope.postagem)
      .then(function(){
        $scope.enviarMensagem()
      })
    };

    $scope.enviarMensagem = function (){
      if($scope.postagem.publicado){
          Materialize.toast('Postagem Publicada',3000);
        } else {
          Materialize.toast('Postagem Salva',3000);
        }
        $location.path('/postagens')
    };
    $scope.listarPostagens = function(){
      postagemApi.listPostagem()
      .then(function(data){
        $scope.postagens = data.data;
        for(p in $scope.postagens){
          $scope.postagens[p].selecionado = false;
        }
        console.log(data.data)
		  });
    };
    $scope.listarPostagens();
    //$scope.delete = false;
    $scope.deletar = function(id){
      //$('.modal').modal('open');
      postagemApi.deletePostagem(id)
      .then(function(){
        Materialize.toast('Postagem excluida',3000);
      });
      $scope.listarPostagens();
    };
    $scope.deletarSelecionados = function(){
      //$('.modal').modal('open');
      var selecionados = $scope.postagens.filter(function(obj){
        return obj.selecionado == true;
      })
      for(s in selecionados){
        postagemApi.deletePostagem(selecionados[s].id)
        .then(function(){
          Materialize.toast('Postagem '+selecionados[s].id+' excluida',3000);
        });
      }
      $scope.loadImg = function () {
        var fileInputEl = angular.element( document.querySelector( '#miniatura');
        var fileUrl = window.URL.createObjectURL(fileInputEl.files[0]);
        imgEl.src = fileUrl;
        tbEl.value = 'sem imagem';
      };
      $scope.listarPostagens();
    };
    $scope.selecionarTodos = function (checked){
      for(p in $scope.postagens){
        $scope.postagens[p].selecionado = checked;
      }
    };
});