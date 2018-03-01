app.service('loginService', function($rootScope, $location) {
    /*Esta função faz o papel de validação que seria feito no backend */
    this.validaLogin = function(user) {
        var authv = false;
        //usuários fictícios que possam ser usados pela página e pra validar o login
        var usuario = { usuario_id: 1, usuario: 'admin', senha: 'admin', id_perfil: '1' }
            //Nesse trecho, um for para validar o login
        if (user.usuario == usuario.usuario && user.senha == usuario.senha) {
            $rootScope.usuarioLogado = usuario;
            authv = true
            $location.path('/postagens');
        } else {
            authv = false
            $location.path('/login');
        }

        return authv;
    }
    this.logout = function() {
        $rootScope.usuarioLogado = null;
        $rootScope.auth = false;
        $location.path('/login')
    }
});