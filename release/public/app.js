'use strict';

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
app.service('Event', function ($timeout) {

    var visible = false;

    var isVisible = function isVisible() {
        return visible;
    };

    var toggleEvent = function toggleEvent() {
        visible = !visible;
    };

    var init = function init() {};

    init();

    return {
        toggleEvent: toggleEvent,
        isVisible: isVisible
    };
});

//app.service('Menu', ($timeout) => {

//var currentPage,
//    pages = [
//        {name: "Home", slug: "home"},
//        {name: "About", slug: "about"}
//    ];
//
//var setPage = (slug) => {
//    currentPage = slug;
//    $state.go(slug);
//};
//
//var isCurrentPage = (slug) => {
//    return slug == (currentPage || $state.current.name);
//};
//
//var init = () => {
//    console.log($state);
//    console.log('$state.get()', $state.get());
//};
//
//init();
//
//return {
//    getPages: () => pages,
//    setPage,
//    isCurrentPage
//}
//});


app.component('boxItem', {
    templateUrl: 'box',
    bindings: {
        header: '@',
        butnText: '@',
        butnLink: '@',
        butnColor: '@'
    },
    transclude: true,
    controller: function controller($scope) {

        var init = function init() {};

        init();

        _.extend($scope, this);
        _.extend($scope, {});
    }
});

app.component('announcementsItem', {
    templateUrl: 'announcements',
    bindings: {},
    controller: function controller($scope) {

        var init = function init() {};

        init();

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
app.component('eventItem', {
    templateUrl: 'event',
    bindings: {},
    controller: function controller($scope, Event) {

        var init = function init() {};

        init();

        _.extend($scope, Event);
        _.extend($scope, {});
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
app.component('eventsItem', {
    templateUrl: 'events',
    bindings: {},
    controller: function controller($scope, Event) {

        var init = function init() {};

        init();

        _.extend($scope, {
            toggleEvent: Event.toggleEvent
        });
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

app.component('headerItem', {
    templateUrl: 'header',
    bindings: {},
    transclude: {
        headerMenu: 'headerMenu'
    },
    controller: function controller($scope, $element, $timeout) {

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
app.component('pressReleasesItem', {
    templateUrl: 'press-releases',
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
    controller: function controller($scope) {

        var init = function init() {};

        init();

        _.extend($scope, {});
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

app.controller('CaseFormScreen', function ($element, $timeout, $scope) {

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