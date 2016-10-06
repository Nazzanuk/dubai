app.component('boxItem', {
    templateUrl: 'box.html',
    bindings: {
        header: '@',
        butnText:'@',
        butnLink:'@',
        butnColor:'@'
    },
    transclude: true,
    controller: function ($scope, Menu) {

        var init = () => {
        };

        init();

        _.extend($scope, this);
        _.extend($scope, {});
    }
});
