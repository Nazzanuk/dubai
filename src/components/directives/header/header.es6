app.component('headerItem', {
    templateUrl: 'header',
    bindings: {},
    transclude: {
        headerMenu:'headerMenu'
    },
    controller: function ($scope, $element, $timeout) {

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
            showSubMenu,
            toggleMenu,
            showMenu
        });
    }
});
