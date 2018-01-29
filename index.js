//
// * `findMatching`- This function takes an array of `drivers` and a `string` as arguments, and returns the matching list of drivers. The function should be case insensitive.
// * `fuzzyMatch` - This function takes an array of `drivers` and a `string` as arguments for querying the array, and returns all drivers whose names begin with the provided letters.
// * `matchName` - This function takes an array of `drivers` and a `string` as arguments. In this function, each element of the `drivers` array is a JavaScript object that has a property of `name`. The function should return each element whose `name` property matches the provided `string` argument.

function findMatching(drivers,driver_name){
  return drivers.filter(function(name){return name.toUpperCase() === driver_name.toUpperCase()})
}
function fuzzyMatch(drivers, string){
  let string_length = string.length
  return drivers.filter(function(name){return name.slice(0,string_length) === string })
}

function matchName(drivers, string){
  return drivers.filter(function(driver){return driver['name'] === string})
}
