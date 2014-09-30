/**
 * Created by ovb5 on 26.09.2014.
 */
var app = angular.module("goal-watcher", ["ui.router"]);
app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state('home',{
            url: "/home",
            templateUrl: "partials/home.html"
        });
});