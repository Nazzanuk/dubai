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

app.run(function ($templateCache) {
    $templateCache.put('test.html', 'Hello {{ test.user.name }}!');
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
        templateUrl: _.kebabCase(name) + '-screen',
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
    templateUrl: 'announcements',
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
    templateUrl: 'box',
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
    templateUrl: 'documents',
    bindings: {},
    controller: function controller($scope) {

        var init = function init() {};

        init();

        _.extend($scope, {});
    }
});
app.component('eventsItem', {
    templateUrl: 'events',
    bindings: {},
    controller: function controller($scope) {

        var init = function init() {};

        init();

        _.extend($scope, {});
    }
});
app.component('footItem', {
    templateUrl: 'foot',
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
    templateUrl: 'gallery',
    bindings: {},
    controller: function controller($scope) {

        var init = function init() {};

        init();

        _.extend($scope, {});
    }
});
app.component('headerItem', {
    templateUrl: 'header',
    bindings: {},
    transclude: {
        headerMenu: 'headerMenu'
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
    templateUrl: 'hero',
    bindings: {},
    controller: function controller($scope) {

        var init = function init() {};

        init();

        _.extend($scope, {});
    }
});
app.component('pollsItem', {
    templateUrl: 'polls',
    bindings: {},
    controller: function controller($scope) {

        var init = function init() {};

        init();

        _.extend($scope, {});
    }
});
app.component('pressReleasesItem', {
    templateUrl: 'press-releases',
    bindings: {},
    controller: function controller($scope) {

        var init = function init() {};

        init();

        _.extend($scope, {});
    }
});
app.component('promosItem', {
    templateUrl: 'promos',
    bindings: {},
    controller: function controller($scope) {

        var init = function init() {};

        init();

        _.extend($scope, {});
    }
});
app.component('servicesItem', {
    templateUrl: 'services',
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
    templateUrl: 'twitter',
    bindings: {},
    controller: function controller($scope) {

        var init = function init() {};

        init();

        _.extend($scope, {});
    }
});
app.component('vacanciesItem', {
    templateUrl: 'vacancies',
    bindings: {},
    controller: function controller($scope) {

        var init = function init() {};

        init();

        _.extend($scope, {});
    }
});
app.controller('CaseScreen', function ($element, $timeout, $scope) {

    var init = function init() {
        //$timeout(() => $element.find('[screen]').addClass('active'), 50);
    };

    init();

    _.extend($scope, {});
});

app.controller('HomeScreen', function ($element, $timeout, $scope) {

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

    var documents = [],
        searchFilter = {};

    var getDocuments = function getDocuments() {
        return documents;
    };

    var getSearchFilter = function getSearchFilter() {
        return searchFilter;
    };

    var getTypes = function getTypes() {
        return _.uniq(_.map(documents, 'type'));
    };

    var genDocuments = function genDocuments() {
        _.times(50, genDocument);
    };

    var genDocument = function genDocument() {
        var obj = {};

        obj.id = Math.random().toString(36).substring(7);
        obj.date = _.random(1, 28) + '/' + _.random(1, 10) + '/2016';
        obj.type = _.sample(['document', 'document', 'document', 'document', 'press-release', 'vacancy']);
        obj.filename = _.sample([]);
        obj.ext = _.sample(['doc', 'pdf', 'xls']);
        obj.title = _.sampleSize(['DPG', 'Property', 'Analysis', '2016', 'HR', 'Department', 'Project', 'New', 'Staff', 'Form', 'Modules', 'Component', 'Core'], _.random(2, 5)).join(" ");
        obj.description = _.sampleSize(['Amet', 'autem', 'cumque', 'dolore', 'eaque inventore', 'nostrum obcaecati', 'repudiandae vel', 'voluptas voluptatem'], 4).join(" ");

        obj.title = obj.type == 'vacancy' ? 'New Position - ' + obj.title : obj.title;
        documents.push(obj);
    };

    var init = function init() {
        genDocuments();
    };

    init();

    _.extend($scope, {
        getSearchFilter: getSearchFilter,
        getDocuments: getDocuments,
        getTypes: getTypes
    });
});