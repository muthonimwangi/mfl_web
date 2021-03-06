(function(angular){
    "use strict";
    var filterParams = [
        "search", "county", "constituency", "ward", "operation_status",
        "facility_type", "number_of_beds", "number_of_cots", "open_whole_day",
        "is_classified", "is_published", "is_regulated", "is_active", "service_category"
    ];
    angular.module("mfl.filtering.routes", ["mfl.filtering.services"])

    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider
        .state("filtering", {
                url: "/filtering?"+filterParams.join("&"),
                views: {
                    "header" : {
                        controller: "mfl.home.controllers.header",
                        templateUrl : "home/tpls/header.tpl.html"
                    },
                    "main": {
                        controller: "mfl.filtering.controller",
                        templateUrl: "advanced_search/tpls/advanced_search.tpl.html",
                        resolve: {
                            filteringData: ["mfl.filtering.data.controller",
                                function(filteringDataController){
                                    return filteringDataController();
                                }]
                        }
                    }
                },
                data:{
                    pageTitle: "MFLv2 Advanced Search"
                }
            });
    }]);
})(angular);
