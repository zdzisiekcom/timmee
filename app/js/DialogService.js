angular.module('timmee').factory('DialogService', ['$modal', 'UrlService', function($modal, UrlService) {
    DialogService = {};

    DialogService.showDialog = function(dialogOptions, actionCallbacks) {
        if (dialogOptions.templateUrl) {
            dialogOptions.templateUrl = UrlService.url(dialogOptions.templateUrl);
        }

        dialogOptions.resolve = dialogOptions.resolve ? dialogOptions.resolve : {};
        extendResolvedProperties(dialogOptions.resolve, dialogOptions.resolveObjects);

        var modal = $modal.open(dialogOptions);

        modal.result.then(function(action) {
            if (actionCallbacks && actionCallbacks[action]) {
                actionCallbacks[action]();
            }
        });
    };

    function extendResolvedProperties(resolveStore, resolveObjects) {
        if(resolveObjects) {
            _.each(resolveObjects, function(value, key) {
                resolveStore[key] = function() { return angular.copy(value); };
            });
        }
    }

    return DialogService;
}]);