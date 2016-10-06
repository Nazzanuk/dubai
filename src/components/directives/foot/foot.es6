app.component('footItem', {
    templateUrl: 'foot.html',
    controllerAs: 'foot',
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
