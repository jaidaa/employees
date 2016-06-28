//var db=require("./db.js");
var employees=require("../Employees.json");


function getElementByIndexElseRandom(array, index) {
    index = index===undefined?Math.floor(Math.random()*array.length):index;
    return array[index];
}
var getEmployeesFromJSON = function() {
  return employees;
}

function getEmployeeFromJSON(i) {
    return getElementByIndexElseRandom(employees, i);
}

// var seed = function(cb1){
//   db.db().collection('employees',function(err, collection){
//     collection.count(function(err, count){
//       console.log(count);
      
//       if (err) return cb1(err, false);
//       else if (count !== 0){
        
//         return cb1(null, false);}
//       else{
//         var totalEmployees = getEmployeesFromJSON();
//         if (totalEmployees.length === 0){
          
//           return cb1 (null, false);
//         }

//         else{
//           totalEmployees.forEach(function(employee){
//             collection.insert(employee);
//           });
          
//           cb1(null, true);
//         }
//       }
//     });
//   });
// }

module.exports={
  getEmployeesFromJSON: getEmployeesFromJSON,
  seed: seed
}