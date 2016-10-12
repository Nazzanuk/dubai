app.component('eventItem', {
    templateUrl: 'event',
    restrict: 'EA',
    bindings: {},
    controller: function ($scope, Event) {

        var init = () => {};

        init();

        _.extend($scope, Event);
        _.extend($scope, {

        });
    }
});