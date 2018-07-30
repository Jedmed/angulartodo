const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http){
  this.indexOfEdit;

  this.createToDo = () => {
    $http({
      method: 'POST',
      url: '/todo',
      data: {
        description: this.description,
      }
    }).then((res) => {
      this.description = '';
      this.getList();
    })
  }
  this.getList = () => {
    $http({
      method: 'GET',
      url: '/todo'
    }).then((res) => {
      this.list = res.data;
    })
  }
  this.getList();

  this.deleteToDo = (param) => {
    $http({
      method: 'DELETE',
      url: '/todo/' + param._id
    }).then((res) => {
        this.getList();
    })
  }

  this.updateToDo = (param) => {
    $http({
      method: 'PUT',
      url: '/todo/' + param._id,
      data: {
        description: param.description
      }
    }).then((res) => {
      this.indexOfEdit = '';
      this.getList();
    })
  }
}]);
