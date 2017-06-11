function range (start, end, step){
  var output = [];
  var j = 0;
  if (start == undefined || end == undefined || step == undefined || start > end || step < 0){
    return output = [];
  }
  else{
    for(var i = start; i <= end; i += step){
      output[j] = i;
      j++;
    }
    return output;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));