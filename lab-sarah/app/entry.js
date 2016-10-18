'use strict';

require('./scss/main.scss');

//npm modules
const cowsay = require('cowsay-browser');
const angular = require('angular');

//angular module
const demoApp = angular.module('demoApp', []);

demoApp.controller('CowsayController', ['$log', '$scope', CowsayController]);

function CowsayController($log, $scope){
  $log.debug('init CowsayController');
  let cowsayCtrl = $scope.cowsayCtrl = {};
  cowsayCtrl.title = 'Dumb fucking cow';

  cowsayCtrl.updateCow = function(input){
    $log.debug('cowsayCtrl.updateCow()');
    return '\n' + cowsay.say({text: input || 'gimme something to say'});
  };

  cowsayCtrl.helloClick = function(input){
    $log.debug('cowsayCtrl.helloClick()');
    $log.log(input);
    cowsayCtrl.poopulate = cowsayCtrl.updateCow(input);
  };

  cowsayCtrl.poopulate = function(input){
    $log.debug('cowsayCtrl.poopulate()');
    $log.log(input);
    return '\n' + cowsay.say({text: input || 'idk whats going on'});
  };
}
