angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $http) {
			$scope.app = "Lista Telefonica";
			$scope.contatos = [
				{nome: "Pedro", telefone: "99998888", data: new Date()},
				{nome: "Vlad", telefone: "99997777", data: new Date()},
				{nome: "Guilherme", telefone: "99993333", data: new Date()}
			];
			$scope.operadoras = [
				{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 2},
				{nome: "Oi", codigo: 14, categoria: "Celular", preco: 4},
				{nome: "Tim", codigo: 41, categoria: "Fixo", preco: 1}
			];
			$scope.adicionarContato =  function (contato) {
				$scope.contatos.push(angular.copy(contato));
				delete $scope.contato;
				$scope.contatoForm.$setPristine();
			};
			$scope.apagarContatos = function (contatos) {
				$scope.contatos = contatos.filter(function (contato){
					if (!contato.selecionado) return contato;
				});
			};
			$scope.isContatoSelecionado = function(contatos) {
				return contatos.some(function (contato) {
					return contato.selecionado;
				});
			};
			$scope.ordenarPor = function(campo) {
				$scope.criterioDeOrdenacao = campo;
				$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
			}
			
		});