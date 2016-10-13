var app = app || angular.module('app', ['ui.router']);

app.directive('ngEnter', () => (scope, element, attrs) => {
    element.bind('keypress', (event) => {
        if (event.which !== 13) return;
        scope.$apply(() => scope.$eval(attrs.ngEnter, {$event: event}));
        event.preventDefault();
    });
});

app.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
}]);