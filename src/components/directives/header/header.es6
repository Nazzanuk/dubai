app.component('headerItem', {
    templateUrl: 'header.html',
    bindings: {},
    transclude: {
        headerMenu:'headerMenu'
    },
    controller: function ($scope, Menu, $element, $timeout) {

        var $menu, $subMenus;

        var initEl = () => {
            $menu = $element.find('.header-menu');
            $subMenus = $element.find('.menu-1-item');
        };

        var showMenu = () => {
            $menu.addClass('active');
            $subMenus.removeClass('active');
        };

        var toggleMenu = () => {
            $menu.toggleClass('active');
            $subMenus.removeClass('active');
        };

        var showSubMenu = (event) => {
            $subMenus.removeClass('active');
            $(event.target).addClass('active');
            event.stopPropagation();
        };

        var init = () => {
            $timeout(initEl);
        };

        init();

        _.extend($scope, {
            getPages: Menu.getPages,
            setPage: Menu.setPage,
            isCurrentPage: Menu.isCurrentPage,
            showSubMenu,
            toggleMenu,
            showMenu
        });
    }
});
