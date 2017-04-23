
      angular.module("myapp", [])
                .controller("mainctrl", function($scope) {

                    $scope.person = {
                        name:"Simble",address:"河北-石家庄",click:"16K",fans:"2W",
                    };
                    $scope.people = {
                        name:"Smble",introduce:"IT大牛",head:"images/a1.jpg",
                    };

                    $scope.myvar = false;
                    $scope.install = function(){

                        $scope.myvar = !$scope.myvar;
                    }
                    $scope.conment = [
                    { name: "小王", introduce:"设计师，博客",head:"images/a9.jpg"},
                    { name: "张琳", introduce:"作家，杂志编辑",head:"images/a7.jpg" },
                    { name: "李小明", introduce:"艺术总监，电影剪辑",head:"images/a5.jpg" },
                    { name: "张大城", introduce:"音乐家，运动员",head:"images/a10.jpg"}
                   ];
});

