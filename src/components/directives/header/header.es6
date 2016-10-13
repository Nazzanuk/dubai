var headerCtrl = function ($scope, $element, $timeout) {

    var getTest = () => ['1', '2', '3', '4'];

    var init = () => {

    };

    init();

    _.extend($scope, {
        getTest
    });
};

app.component('headerItem', {
    templateUrl: 'header',
    restrict: "E",
    bindings: {},
    transclude: {}
});

app.controller('headerCtrl', headerCtrl);
