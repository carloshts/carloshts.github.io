/*$(document).ready(function(){
    
    $a('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year,
        today: 'Hoje',
        clear: 'Limpar',
        close: 'Ok',
        closeOnSelect: false // Close upon selecting a date,
      
    });
});    */
app.controller('main', function($rootScope, $scope, loginService) {
    var $a = jQuery.noConflict();

    $rootScope.sidenav = false;
    $rootScope.auth = false;
    $scope.log = { usuario: '', senha: '' }


    $scope.login = function() {
        $rootScope.auth = loginService.validaLogin($scope.log);

        console.log($scope.auth)
    };
    $scope.abrirmenu = function() {
        //$a(".button-collapse").sideNav('open');
        $rootScope.sidenav = !$rootScope.sidenav
    };

}).run(function($rootScope, $location) {

    var rotasBloqueadasUsuariosNaoLogados = [
        '/postagens',
        '/nova-postagem',
        '/edit-postagem/:id',
        '/colunas',
        '/nova-coluna',
        '/edit-coluna',
        '/news',
        '/nova-noticia',
        '/edit-noticia',
        '/usuarios',
        '/novo-usuario',
        '/edit-usuario',
        '/caravanas',
        '/nova-caravana',
        '/edit-caravana'
    ];
    $rootScope.$on('$locationChangeStart', function() { //iremos chamar essa função sempre que o endereço for alterado

        /*  podemos inserir a logica que quisermos para dar ou não permissão ao usuário.
            Neste caso, vamos usar uma lógica simples. Iremos analisar se o link que o usuário está tentando acessar (location.path())
            está no Array (rotasBloqueadasUsuariosNaoLogados) caso o usuário não esteja logado. Se o usuário estiver logado, iremos
            validar se ele possui permissão para acessar os links no Array de strings 'rotasBloqueadasUsuariosComuns'
        */

        if ($rootScope.usuarioLogado == null && rotasBloqueadasUsuariosNaoLogados.indexOf($location.path()) != -1) {

            $location.path('/login');

        }
    });
})