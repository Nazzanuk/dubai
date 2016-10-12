app.controller('GalleryFolderScreen', ($element, $timeout, $scope) => {

    var images = [];

    var getImages = () => images;

    var genImages = () => images = _.times(40, () => _.random(100000, 999999));

    var init = () => {
        //$timeout(() => $element.find('[screen]').addClass('active'), 50);
        genImages();
    };

    init();

    _.extend($scope, {
        getImages
    });
});



