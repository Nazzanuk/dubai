'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var app = angular.module('app', ['ui.router']);

app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind('keypress', function (event) {
            if (event.which !== 13) return;
            scope.$apply(function () {
                return scope.$eval(attrs.ngEnter, { $event: event });
            });
            event.preventDefault();
        });
    };
});

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    //this controls the animations for each transition
    var resolve = {
        timeout: function timeout($timeout) {
            $('[screen]').removeClass('active');
            $timeout(function () {
                return $('[screen]').addClass('active');
            }, 350);
            return $timeout(300);
        }
    };

    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("/");

    // Now set up the states
    $stateProvider.state(new Route('home', "/", resolve)).state(new Route('post', "/post", resolve)).state(new Route('search', "/search", resolve)).state(new Route('legal', "/legal", resolve)).state(new Route('case', "/case", resolve));

    //use real urls instead of hashes
    //$locationProvider.html5Mode(true);
});

var Route = function Route(name, url, resolve) {
    _classCallCheck(this, Route);

    _.extend(this, {
        name: name,
        url: url,
        templateUrl: _.kebabCase(name) + '-screen.html',
        controller: _.upperFirst(_.camelCase(name + 'Screen')),
        resolve: resolve
    });
};

app.service('Menu', function ($state, $stateParams, $timeout) {

    var currentPage,
        pages = [{ name: "Home", slug: "home" }, { name: "About", slug: "about" }];

    var setPage = function setPage(slug) {
        currentPage = slug;
        $state.go(slug);
    };

    var isCurrentPage = function isCurrentPage(slug) {
        return slug == (currentPage || $state.current.name);
    };

    var init = function init() {
        console.log($state);
        console.log('$state.get()', $state.get());
    };

    init();

    return {
        getPages: function getPages() {
            return pages;
        },
        setPage: setPage,
        isCurrentPage: isCurrentPage
    };
});

app.component('announcementsItem', {
    templateUrl: 'announcements.html',
    bindings: {},
    controller: function controller($scope, Menu) {

        var init = function init() {};

        init();

        _.extend($scope, {
            getPages: Menu.getPages,
            setPage: Menu.setPage,
            isCurrentPage: Menu.isCurrentPage
        });
    }
});

app.component('boxItem', {
    templateUrl: 'box.html',
    bindings: {
        header: '@',
        butnText: '@',
        butnLink: '@',
        butnColor: '@'
    },
    transclude: true,
    controller: function controller($scope, Menu) {

        var init = function init() {};

        init();

        _.extend($scope, this);
        _.extend($scope, {});
    }
});

app.component('documentsItem', {
    templateUrl: 'documents.html',
    bindings: {},
    controller: function controller($scope) {

        var init = function init() {};

        init();

        _.extend($scope, {});
    }
});
app.component('eventsItem', {
    templateUrl: 'events.html',
    bindings: {},
    controller: function controller($scope) {

        var init = function init() {};

        init();

        _.extend($scope, {});
    }
});
app.component('footItem', {
    templateUrl: 'foot.html',
    controllerAs: 'foot',
    bindings: {
        img: '@',
        heading: '@'
    },
    controller: function controller($element, $timeout) {

        var init = function init() {};

        init();

        _.extend(this, {});
    }
});

app.component('galleryItem', {
    templateUrl: 'gallery.html',
    bindings: {},
    controller: function controller($scope) {

        var init = function init() {};

        init();

        _.extend($scope, {});
    }
});
app.component('headerItem', {
    templateUrl: 'header.html',
    bindings: {
        img: '@'
    },
    controller: function controller($scope, Menu, $element, $timeout) {

        var $menu, $subMenus;

        var initEl = function initEl() {
            $menu = $element.find('.header-menu');
            $subMenus = $element.find('.menu-1-item');
        };

        var showMenu = function showMenu() {
            $menu.addClass('active');
            $subMenus.removeClass('active');
        };

        var toggleMenu = function toggleMenu() {
            $menu.toggleClass('active');
            $subMenus.removeClass('active');
        };

        var showSubMenu = function showSubMenu(event) {
            $subMenus.removeClass('active');
            $(event.target).addClass('active');
            event.stopPropagation();
        };

        var init = function init() {
            $timeout(initEl);
        };

        init();

        _.extend($scope, {
            getPages: Menu.getPages,
            setPage: Menu.setPage,
            isCurrentPage: Menu.isCurrentPage,
            showSubMenu: showSubMenu,
            toggleMenu: toggleMenu,
            showMenu: showMenu
        });
    }
});

app.component('heroItem', {
    templateUrl: 'hero.html',
    bindings: {},
    controller: function controller($scope) {

        var init = function init() {};

        init();

        _.extend($scope, {});
    }
});
app.component('pollsItem', {
    templateUrl: 'polls.html',
    bindings: {},
    controller: function controller($scope) {

        var init = function init() {};

        init();

        _.extend($scope, {});
    }
});
app.component('pressReleasesItem', {
    templateUrl: 'press-releases.html',
    bindings: {},
    controller: function controller($scope) {

        var init = function init() {};

        init();

        _.extend($scope, {});
    }
});
app.component('promosItem', {
    templateUrl: 'promos.html',
    bindings: {},
    controller: function controller($scope) {

        var init = function init() {};

        init();

        _.extend($scope, {});
    }
});
app.component('servicesItem', {
    templateUrl: 'services.html',
    bindings: {},
    controller: function controller($scope, Menu) {

        var init = function init() {};

        init();

        _.extend($scope, {
            getPages: Menu.getPages,
            setPage: Menu.setPage,
            isCurrentPage: Menu.isCurrentPage
        });
    }
});

app.component('twitterItem', {
    templateUrl: 'twitter.html',
    bindings: {},
    controller: function controller($scope) {

        var init = function init() {};

        init();

        _.extend($scope, {});
    }
});
app.component('vacanciesItem', {
    templateUrl: 'vacancies.html',
    bindings: {},
    controller: function controller($scope) {

        var init = function init() {};

        init();

        _.extend($scope, {});
    }
});
app.controller('HomeScreen', function ($element, $timeout, $scope) {

    var init = function init() {
        //$timeout(() => $element.find('[screen]').addClass('active'), 50);
    };

    init();

    _.extend($scope, {});
});

app.controller('CaseScreen', function ($element, $timeout, $scope) {

    var init = function init() {
        //$timeout(() => $element.find('[screen]').addClass('active'), 50);
    };

    init();

    _.extend($scope, {});
});

app.controller('LegalScreen', function ($element, $timeout, $scope) {

    var init = function init() {
        //$timeout(() => $element.find('[screen]').addClass('active'), 50);
    };

    init();

    _.extend($scope, {});
});

app.controller('PostScreen', function ($element, $timeout, $scope) {

    var init = function init() {
        //$timeout(() => $element.find('[screen]').addClass('active'), 50);
    };

    init();

    _.extend($scope, {});
});

app.controller('SearchScreen', function ($element, $timeout, $scope) {

    var init = function init() {
        //$timeout(() => $element.find('[screen]').addClass('active'), 50);
    };

    init();

    _.extend($scope, {});
});