function practice(arr){
  var temp = 0;
  for(var i=0; i<arr.length; i++){
    temp = temp + arr[i];
  }
  console.log(temp)
  return temp;
}
// practice([4,7,5,8,9])

// two number sum
// you have an array and a traget sum. ask if any two integers in the array add up to the target, if they do, return those numbers in the result. if nothing equals the target, return an empty array

// 1. sort array in ascending
// 2. delete anything greater than the target, cause we wont need it.
// 3. compare first value with last value and ask, is this total greater than the target? is yes, move end pointer down -1, ask again. if not greater than front pointer up.
// 4. front pointer and back pointer moving in each time based on sum total. with each copmarion have an if statement that asks if two points equal to sum add them to empty array.

// to pass test cases, need to incorporate negative numbers and assume there is only two numbers that equal sum

function twoNumberSum(array, targetSum) {
  var ansArray = []
  const sArray = array.sort(function(a,b) {return a-b});
  function helper(sArray, targetSum){
    for(var t= 1; t<sArray.length; t++){
      if( sArray[t] + sArray[i] > targetSum){
        i--
        helper(sArray, targetSum)
        return ansArray
      }
      if(sArray[t] + sArray[i] == targetSum){
        ansArray.push(sArray[i], sArray[t])
        return ansArray
      }
    }
  }
  for( var i=sArray.length-1; i>0; i--){
    if(sArray[i] + sArray[0] == targetSum){
      ansArray.push(sArray[i], sArray[0])
      return ansArray
    } 
    if (sArray[i] + sArray[0] < targetSum){
      helper(sArray, targetSum)
      return ansArray
    }
  }
  return ansArray
}
twoNumberSum([4,6], 10)


