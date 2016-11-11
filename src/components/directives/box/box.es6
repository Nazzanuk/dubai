app.component('boxItem', {
    templateUrl: 'box',
    restrict: 'ECA',
    bindings: {
        header: '@',
        headers: '=',
        butnText:'@',
        butnLink:'@',
        butnColor:'@'
    },
    transclude: true,
    controller: function ($scope, $element, $timeout) {

        var currentTab = 0;

        var getCurrentTab = () => currentTab;

        var setActiveTab = (index = 0) => {

            $element.find(`[box-tab]`).removeClass('active');
            $element.find(`[box-tab='${currentTab}']`).addClass('active');
        };

        var events = () => {
            $element.find(`[box-tab='${currentTab}']`).addClass('active');

            $element.on('click', '[header-tab]', function () {
                currentTab = $(this).attr('header-tab');

                setActiveTab(currentTab);

                $scope.$apply();
            });
        };

        var init = () => {
            events();
            $timeout(setActiveTab);
        };

        init();

        _.extend($scope, this);
        _.extend($scope, {
            getCurrentTab
        });
    }
});
