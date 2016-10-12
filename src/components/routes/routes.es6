app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {

    //this controls the animations for each transition
    var resolve = {
        timeout: ($timeout) => {
            $('[screen]').removeClass('active');
            $timeout(() => $('[screen]').addClass('active'), 350);
            return $timeout(300);
        }
    };

    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("/");

    // Now set up the states
    $stateProvider
        .state(new Route('home', "/", resolve))
        .state(new Route('post', "/post", resolve))
        .state(new Route('vacancy', "/vacancy", resolve))
        .state(new Route('search', "/search", resolve))
        .state(new Route('legal', "/legal", resolve))
        .state(new Route('gallery', "/gallery", resolve))
        .state(new Route('gallery-folder', "/gallery-folder", resolve))
        .state(new Route('discounts', "/discounts", resolve))
        .state(new Route('case-form', "/case-form", resolve))
        .state(new Route('case', "/case", resolve));

    //use real urls instead of hashes
    //$locationProvider.html5Mode(true);
});

class Route {
    constructor(name, url, resolve) {
        _.extend(this, {
            name,
            url,
            templateUrl: `${_.kebabCase(name)}-screen`,
            controller: _.upperFirst(_.camelCase(`${name}Screen`)),
            resolve
        });
    }
}