app.component('boxItem', {
    templateUrl: 'box',
    bindings: {
        header: '@',
        butnText:'@',
        butnLink:'@',
        butnColor:'@'
    },
    transclude: true,
    controller: function ($scope) {

        var init = () => {
        };

        init();

        _.extend($scope, this);
        _.extend($scope, {});
    }
});
