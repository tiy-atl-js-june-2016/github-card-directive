import angular from 'angular';

import { MainController } from './main.controller';
import { GithubCard } from './github-card.directive';

angular
  .module('app', [])
  .controller('MainController', MainController)
  .directive('githubCard', GithubCard);