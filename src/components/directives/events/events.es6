app.component('eventsItem', {
    templateUrl: 'events',
    restrict: 'ECA',
    bindings: {},
    controller: function ($scope, Event) {

        var init = () => {
        };

        init();

        _.extend($scope, {
            toggleEvent: Event.toggleEvent
        });
    }
});