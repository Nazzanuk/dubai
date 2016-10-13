app.component('headerItem', {
    templateUrl: 'header',
    bindings: {},
    transclude: {
        headerLinks:'?headerLinks'
    },
    controller: function ($scope, $element, $timeout) {

        var init = () => {

        };

        init();

        _.extend($scope, {
        });
    }
});
