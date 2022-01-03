function practice(arr){
  var temp = 0;
  for(var i=0; i<arr.length; i++){
    temp = temp + arr[i];
  }
  console.log(temp)
  return temp;
}
practice([4,7,5,8,9])
