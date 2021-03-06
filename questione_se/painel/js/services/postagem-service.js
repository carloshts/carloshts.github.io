app.service('postagemApi', function($http, config) {
    this.listPostagem = function() {
        return $http.get(config.baseUrl + "/postagem/");
    };
    this.listPostagemPorUsuario = function(usuario_id, pagina = null) {
        return $http.get(config.baseUrl + "/postagem/usuario/" + usuario_id + "?page=" + pagina);
    };
    this.findPostagem = function(id) {
        return $http.get(config.baseUrl + "/postagem/" + id)
    };
    this.savePostagem = function(postagem) {
        return $http.post(config.baseUrl + "/postagem", postagem);
    }
    this.editPostagem = function(id, postagem) {
        return $http.put(config.baseUrl + "/postagem/" + id, postagem);
    }
    this.deletePostagem = function(id) {
        return $http.delete(config.baseUrl + "/postagem/" + id)
    };
});