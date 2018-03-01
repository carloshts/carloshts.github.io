app.controller('pCtrl', function($scope, $rootScope, $location, $routeParams, postagemApi) {
    // Editor options.
    $scope.options = {
        language: 'en',
        allowedContent: true,
        entities: false
    };

    $scope.postagem = { id: null, titulo: "", img_mini: "", corpo: "", publicado: false, usuario_id: 1, tipo_postagem_id: 1 };

    $scope.iniciar = function() {
        if ($routeParams.id) {
            postagemApi.findPostagem($routeParams.id)
                .then(function(data) {
                    console.log(data)
                    $scope.postagem = data.data;
                })
                .catch(function(data) {
                    Materialize.toast(data.data.message, 3000);
                })
        }
    }
    $scope.iniciar();

    $scope.salvar = function(publicado) {

        $scope.postagem.publicado = publicado;
        if ($routeParams.id) {
            $scope.editarPostagem();
        } else {
            $scope.salvarPostagem();
        }
    }

    $scope.editarPostagem = function() {
        postagemApi.editPostagem($scope.postagem.id, $scope.postagem)
            .then(function() {
                $scope.enviarMensagem()
            })
    };
    $scope.salvarPostagem = function() {
        postagemApi.savePostagem($scope.postagem)
            .then(function() {
                $scope.enviarMensagem()
            })
    };

    $scope.enviarMensagem = function() {
        if ($scope.postagem.publicado) {
            Materialize.toast('Postagem Publicada', 3000);
        } else {
            Materialize.toast('Postagem Salva', 3000);
        }
        $location.path('/postagens')
    };
    $scope.listarPostagens = function() {
        postagemApi.listPostagemPorUsuario($rootScope.usuarioLogado.usuario_id)
            .then(function(data) {
                $scope.paginas = {
                    qtd: data.data.last_page,
                    paginas: [],
                    paginaAtual: Number(data.data.current_page),
                    paginaAnterior: (data.data.prev_page_url) ? Number(data.data.current_page) - 1 : null,
                    paginaPosterior: (data.data.next_page_url) ? Number(data.data.current_page) + 1 : null,
                }
                $scope.postagens = data.data.data;
                for (var i = 1; i <= $scope.paginas.qtd; i++) {
                    $scope.paginas.paginas[i - 1] = { n: i };
                    if (i == $scope.paginas.paginaAtual) {
                        $scope.paginas.paginas[i - 1].selecionado = true;
                    }
                }
                for (p in $scope.postagens) {
                    $scope.postagens[p].selecionado = false;
                }
                console.log($scope.paginas.paginas)
            });
    };
    $scope.listarPostagens();
    $scope.acessarPagina = function(pag) {
            postagemApi.listPostagemPorUsuario($rootScope.usuarioLogado.usuario_id, pag)
                .then((data) => {
                    $scope.paginas = {
                        qtd: data.data.last_page,
                        paginas: [],
                        paginaAtual: Number(data.data.current_page),
                        paginaAnterior: (data.data.prev_page_url) ? Number(data.data.current_page) - 1 : null,
                        paginaPosterior: (data.data.next_page_url) ? Number(data.data.current_page) + 1 : null,
                    }
                    $scope.postagens = data.data.data;
                    for (var i = 1; i <= $scope.paginas.qtd; i++) {
                        $scope.paginas.paginas[i - 1] = { n: i };
                        if (i == $scope.paginas.paginaAtual) {
                            $scope.paginas.paginas[i - 1].selecionado = true;
                        }
                    }
                    for (p in $scope.postagens) {
                        $scope.postagens[p].selecionado = false;
                    }
                })
        }
        //$scope.delete = false;
    $scope.deletar = function(id) {
        //$('.modal').modal('open');
        postagemApi.deletePostagem(id)
            .then(function() {
                Materialize.toast('Postagem excluida', 3000);
            });
        $scope.listarPostagens();
    };
    $scope.deletarSelecionados = function() {
        //$('.modal').modal('open');
        var selecionados = $scope.postagens.filter(function(obj) {
            return obj.selecionado == true;
        })
        for (s in selecionados) {
            postagemApi.deletePostagem(selecionados[s].id)
                .then(function() {
                    Materialize.toast('Postagem ' + selecionados[s].id + ' excluida', 3000);
                });
        }


        $scope.onChange = function() {

        };
        $scope.load = function() {
            console.log($scope.postagem.img_mini)
        }
        $scope.load();
        $scope.listarPostagens();
    };
    $scope.selecionarTodos = function(checked) {
        for (p in $scope.postagens) {
            $scope.postagens[p].selecionado = checked;
        }
    };
});