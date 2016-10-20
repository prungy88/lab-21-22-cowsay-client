'use strict';

require('./scss/main.scss');

//npm modules
const cowsay = require('cowsay-browser');
const angular = require('angular');

//angular module
//creates an angular module named demoApp (2 arguments tells you it's a setter)
//demoApp is the entry point to our angular app.
const demoApp = angular.module('demoApp', []);

//ading a controller to our demoApp. All controllers are constructors
demoApp.controller('CowsayController', ['$log', CowsayController]);

function CowsayController($log){
  $log.debug('init CowsayCtrl');
  this.title = 'I AM A SMART COW';
  this.history = [];

  cowsay.list((err, cowfiles) => {
    this.cowfiles = cowfiles;
    this.currentCow = this.cowfiles[0];
  });

  this.updateCow = function(input){
    $log.debug('this.updateCow()');
    return '\n' + cowsay.say({text: input || 'was soll ich sagen?', f: this.currentCow});
  };

  this.speak = function(input){
    $log.debug('this.updateCow()');
    this.spoken = this.updateCow(input);
    this.history.push(this.spoken);
  };

  this.undo = function() {
    $log.debug('this.undo()');
    this.undone = true;
    this.history.pop();
    this.spoken = this.history.pop() || '';
  };
}

demoApp.controller('NavController', ['$log', NavController]);
function NavController($log){
  $log.debug('inti navCtrl');
  this.routes = [
    {
      name: 'Home',
      url: '/home',
    },
    {
      name: 'About',
      url: '/about',
    },
  ];
}
