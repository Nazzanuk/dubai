app.controller('LegalScreen', ($element, $timeout, $scope) => {

    var cases = [], searchFilter = {};

    var getCases = () => cases;

    var getSearchFilter = () => searchFilter;

    var getTypes = () => _.uniq(_.map(cases, 'type'));

    var genCases = () => {
        _.times(50, genCase);
    };

    var genCase = () => {
        var obj = {};

        obj.id = 'LC0' + _.random(1000000, 9999999);
        obj.open = _.sample([true, true, true, false]);
        obj.date = `${_.random(1,28)}/${_.random(1,10)}/2016`;
        obj.requestType = _.sample(['Request for NDA', 'Request for NOC', 'Request for reviewing a contract']);
        obj.type = _.sample(['case', 'case', 'case', 'case', 'press-release', 'vacancy']);
        obj.priority = _.sample(['High', 'Medium', 'Low']);
        obj.department = _.sample(['HR', 'Finance', 'Operations', 'Residential Asset Management', 'Retail & Hotel Asset Management', 'REO', 'Legal']);
        obj.filename = _.sample([]);
        obj.ext = _.sample(['doc', 'pdf', 'xls']);
        obj.title = _.sampleSize(['DPG', 'Property', 'Analysis', '2016', 'HR', 'Department', 'Project', 'New', 'Staff', 'Form', 'Modules', 'Component', 'Core'], _.random(2, 5)).join(" ");
        obj.description = _.sampleSize(['Amet', 'autem', 'cumque', 'dolore', 'eaque inventore', 'nostrum obcaecati', 'repudiandae vel', 'voluptas voluptatem'], 4).join(" ");

        obj.title = obj.type == 'vacancy' ? 'New Position - ' + obj.title : obj.title;
        cases.push(obj);
    };

    var init = () => {
        genCases();
        //$timeout(() => $element.find('[screen]').addClass('active'), 50);
    };

    init();

    _.extend($scope, {

    });

    _.extend($scope, {
        getSearchFilter,
        getCases,
        getTypes
    });
});



