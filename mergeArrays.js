// function merge(arrayA, arrayB){
//   var combined = arrayA.concat(arrayB);
//   for (var i = 0; i <= combined.length; i++){
//     if (combined[i + 1] < combined[i]){
//       var tmp;
//       tmp = combined[i];
//       combined[i] = combined[i + 1];
//       combined[i + 1] = tmp;
//     }
//   }
//   return combined;
// }


function merge(arrayA, arrayB){
  var combined = arrayA.concat(arrayB);
  for (var i = 0; i <= combined.length; i++){
    for (var j = 0; j <= combined.length; j++){
      if (combined[i] < combined[j]){
        var tmp;
        tmp = combined[i];
        combined[i] = combined[j];
        combined[j] = tmp;
      }
    }
  }
  return combined;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);