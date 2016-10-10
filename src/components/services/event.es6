app.service('Event', ($timeout) => {

    var visible = false;

    var isVisible = () => visible;

    var toggleEvent = () => {
        visible = !visible;
    };

    var init = () => {
    };

    init();

    return {
        toggleEvent,
        isVisible
    }
});

