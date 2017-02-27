var app = angular.module('printFormApp', []);

app.controller("printFormAppCtrl", ["$scope",
    function($scope){
        $scope.printForm = function(){
            html2canvas(document.getElementById('main-container'), {
                onrendered: function (canvas) {
                    var data = canvas.toDataURL();
                    var docDefinition = {
                        content: [{
                            image: data,
                            width: 500,
                        }]
                    };
                    pdfMake.createPdf(docDefinition).download("test.pdf");
                }
            });
        }
    }
]);