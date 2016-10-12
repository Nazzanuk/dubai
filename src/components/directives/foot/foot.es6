app.component('footItem', {
    templateUrl: 'foot',
    restrict:"A",
    bindings: {
        img: '@',
        heading: '@'
    },
    controller: function ($element, $timeout) {

        var init = () => {};

        init();

        _.extend(this, {});
    }
});
