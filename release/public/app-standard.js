'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var app = app || angular.module('app', ['ui.router']);

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

app.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
}]);
var app = app || angular.module('app', []);

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
    $stateProvider.state(new Route('home', "/", resolve)).state(new Route('post', "/post", resolve)).state(new Route('vacancy', "/vacancy", resolve)).state(new Route('search', "/search", resolve)).state(new Route('legal', "/legal", resolve)).state(new Route('gallery', "/gallery", resolve)).state(new Route('gallery-folder', "/gallery-folder", resolve)).state(new Route('discounts', "/discounts", resolve)).state(new Route('case-form', "/case-form", resolve)).state(new Route('case', "/case", resolve));

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


app.component('announcementsItem', {
    templateUrl: 'announcements',
    restrict: 'ECA',
    bindings: {},
    controller: function controller($scope) {

        var init = function init() {};

        init();

        _.extend($scope, {});
    }
});

app.component('boxItem', {
    templateUrl: 'box',
    restrict: 'ECA',
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

app.component('documentsItem', {
    templateUrl: 'documents',
    restrict: 'ECA',
    bindings: {},
    controller: function controller($scope) {

        var init = function init() {};

        init();

        _.extend($scope, {});
    }
});
app.component('eventItem', {
    templateUrl: 'event',
    restrict: 'EA',
    bindings: {},
    controller: function controller($scope, Event) {

        var init = function init() {};

        init();

        _.extend($scope, Event);
        _.extend($scope, {});
    }
});
app.component('eventsItem', {
    templateUrl: 'events',
    restrict: 'ECA',
    bindings: {},
    controller: function controller($scope, Event) {

        var init = function init() {};

        init();

        _.extend($scope, {
            toggleEvent: Event.toggleEvent
        });
    }
});
app.component('galleryItem', {
    templateUrl: 'gallery',
    restrict: 'EA',
    //restrict: 'ECA',
    bindings: {},
    controller: function controller($scope) {

        var init = function init() {};

        init();

        _.extend($scope, {});
    }
});
app.component('footItem', {
    templateUrl: 'foot',
    restrict: "A",
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
        headerLinks: '?headerLinks'
    },
    controller: function controller($scope, $element, $timeout) {

        var init = function init() {};

        init();

        _.extend($scope, {});
    }
});

app.component('heroItem', {
    templateUrl: 'hero',
    restrict: 'ECA',
    bindings: {},
    controller: function controller($scope) {

        var init = function init() {};

        init();

        _.extend($scope, {});
    }
});
app.component('pressReleasesItem', {
    templateUrl: 'press-releases',
    restrict: 'ECA',
    bindings: {},
    controller: function controller($scope) {

        var init = function init() {};

        init();

        _.extend($scope, {});
    }
});
app.component('pollsItem', {
    templateUrl: 'polls',
    restrict: 'ECA',
    bindings: {},
    controller: function controller($scope) {

        var init = function init() {};

        init();

        _.extend($scope, {});
    }
});
app.component('promosItem', {
    templateUrl: 'promos',
    restrict: 'ECA',
    bindings: {},
    controller: function controller($scope) {

        var init = function init() {};

        init();

        _.extend($scope, {});
    }
});
app.component('servicesItem', {
    templateUrl: 'services',
    restrict: 'ECA',
    bindings: {},
    controller: function controller($scope) {

        var init = function init() {};

        init();

        _.extend($scope, {});
    }
});

app.component('twitterItem', {
    templateUrl: 'twitter',
    restrict: 'ECA',
    bindings: {},
    controller: function controller($scope) {

        var init = function init() {};

        init();

        _.extend($scope, {});
    }
});
app.component('vacanciesItem', {
    templateUrl: 'vacancies',
    restrict: 'ECA',
    bindings: {},
    controller: function controller($scope) {

        var init = function init() {};

        init();

        _.extend($scope, {});
    }
});
app.controller('CaseFormScreen', function ($element, $timeout, $scope) {

    var init = function init() {
        //$timeout(() => $element.find('[screen]').addClass('active'), 50);
    };

    init();

    _.extend($scope, {});
});

app.controller('DiscountsScreen', function ($element, $timeout, $scope) {

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

app.controller('GalleryScreen', function ($element, $timeout, $scope) {

    var init = function init() {
        //$timeout(() => $element.find('[screen]').addClass('active'), 50);
    };

    init();

    _.extend($scope, {});
});

app.controller('GalleryFolderScreen', function ($element, $timeout, $scope) {

    var images = [];

    var getImages = function getImages() {
        return images;
    };

    var genImages = function genImages() {
        return images = _.times(40, function () {
            return _.random(100000, 999999);
        });
    };

    var init = function init() {
        //$timeout(() => $element.find('[screen]').addClass('active'), 50);
        genImages();
    };

    init();

    _.extend($scope, {
        getImages: getImages
    });
});

app.controller('HomeScreen', function ($element, $timeout, $scope) {

    var init = function init() {
        //$timeout(() => $element.find('[screen]').addClass('active'), 50);
    };

    init();

    _.extend($scope, {});
});

app.controller('LegalScreen', function ($element, $timeout, $scope) {

    var cases = [],
        searchFilter = {};

    var getCases = function getCases() {
        return cases;
    };

    var getSearchFilter = function getSearchFilter() {
        return searchFilter;
    };

    var getTypes = function getTypes() {
        return _.uniq(_.map(cases, 'type'));
    };

    var genCases = function genCases() {
        _.times(50, genCase);
    };

    var genCase = function genCase() {
        var obj = {};

        obj.id = 'LC0' + _.random(1000000, 9999999);
        obj.open = _.sample([true, true, true, false]);
        obj.date = _.random(1, 28) + '/' + _.random(1, 10) + '/2016';
        obj.type = _.sample(['case', 'case', 'case', 'case', 'press-release', 'vacancy']);
        obj.department = _.sample(['HR', 'Finance', 'Operations', 'Residential Asset Management', 'Retail & Hotel Asset Management', 'REO', 'Legal']);
        obj.filename = _.sample([]);
        obj.ext = _.sample(['doc', 'pdf', 'xls']);
        obj.title = _.sampleSize(['DPG', 'Property', 'Analysis', '2016', 'HR', 'Department', 'Project', 'New', 'Staff', 'Form', 'Modules', 'Component', 'Core'], _.random(2, 5)).join(" ");
        obj.description = _.sampleSize(['Amet', 'autem', 'cumque', 'dolore', 'eaque inventore', 'nostrum obcaecati', 'repudiandae vel', 'voluptas voluptatem'], 4).join(" ");

        obj.title = obj.type == 'vacancy' ? 'New Position - ' + obj.title : obj.title;
        cases.push(obj);
    };

    var init = function init() {
        genCases();
        //$timeout(() => $element.find('[screen]').addClass('active'), 50);
    };

    init();

    _.extend($scope, {});

    _.extend($scope, {
        getSearchFilter: getSearchFilter,
        getCases: getCases,
        getTypes: getTypes
    });
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

app.controller('VacancyScreen', function ($element, $timeout, $scope) {

    var init = function init() {
        //$timeout(() => $element.find('[screen]').addClass('active'), 50);
    };

    init();

    _.extend($scope, {});
});