angular.module('handlaApp', [])

  .controller('ListCtrl', function($scope, Groceries){
    $scope.groceryList = Groceries.get();
    $scope.newGroceryItem = {};

    $scope.addGrocery = function(){
      if($scope.newGroceryItem.text){
        var newGrocery = {'text': $scope.newGroceryItem.text};
        Groceries.add(newGrocery);
        $scope.newGroceryItem = {};
      }
    }

    $scope.removeGrocery = function(grocery){
      Groceries.remove(grocery);
    }
  })

  .factory('Groceries', function(){
    var groceries = [{'text':'smör'},{'text':'bröd'},{'text':'ost'}];
    return {
      get: function(){
        return groceries;
      },
      add: function(newGrocery){
        console.log('Add grocery:' + newGrocery.text);
        groceries.push(newGrocery);
      },
      update: function(){
        console.log('Update grocery');
      },
      remove: function(grocery){
        console.log('Remove grocery');
        var index = groceries.indexOf(grocery);
        groceries.splice(index, 1);
      }
    }
  });
