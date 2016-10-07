app.controller('SearchScreen', ($element, $timeout, $scope) => {

    var documents = [], searchFilter = {};

    var getDocuments = () => documents;

    var getSearchFilter = () => searchFilter;

    var getTypes = () => _.uniq(_.map(documents, 'type'));

    var genDocuments = () => {
        _.times(50, genDocument);
    };

    var genDocument = () => {
        var obj = {};

        obj.id = Math.random().toString(36).substring(7);
        obj.date = `${_.random(1,28)}/${_.random(1,10)}/2016`;
        obj.type = _.sample(['document', 'document', 'document', 'document', 'press-release', 'vacancy']);
        obj.filename = _.sample([]);
        obj.ext = _.sample(['doc', 'pdf', 'xls']);
        obj.title = _.sampleSize(['DPG', 'Property', 'Analysis', '2016', 'HR', 'Department', 'Project', 'New', 'Staff', 'Form', 'Modules', 'Component', 'Core'], _.random(2, 5)).join(" ");
        obj.description = _.sampleSize(['Amet', 'autem', 'cumque', 'dolore', 'eaque inventore', 'nostrum obcaecati', 'repudiandae vel', 'voluptas voluptatem'], 4).join(" ");

        obj.title = obj.type == 'vacancy' ? 'New Position - ' + obj.title : obj.title;
        documents.push(obj);
    };

    var init = () => {
        genDocuments();
    };

    init();

    _.extend($scope, {
        getSearchFilter,
        getDocuments,
        getTypes
    });
});



