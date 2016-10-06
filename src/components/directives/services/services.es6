app.component('servicesItem', {
    templateUrl: 'services.html',
    bindings: {},
    controller: function ($scope, Menu) {

        var init = () => {};

        init();

        _.extend($scope, {
            getPages: Menu.getPages,
            setPage: Menu.setPage,
            isCurrentPage: Menu.isCurrentPage
        });
    }
});
