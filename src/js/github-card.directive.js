function GithubCard () {
  return {
    restrict: 'E',
    scope: {
      name: '@'
    },
    templateUrl: 'templates/github-card.tpl.html',
    controller: function ($http, $scope) {
      let vm = this;
      $http.get('https://api.github.com/users/' + $scope.name).then( (res) => {
        vm.githubber = res.data;
      });
    },
    link: function (scope, element, attrs) {
      element.on('click', () => {
        alert(attrs.name);
      });
    },
    controllerAs: 'vm'
  };
}

GithubCard.$inject = [];
export { GithubCard };