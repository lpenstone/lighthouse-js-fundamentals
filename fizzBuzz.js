// var start = 100;
// var end = 200;
// var increment = 1;

// for (var i = start; i <= end; i += increment){
//   var count = [];
//   var j = 0;
//   if (i % 3 === 0 && i % 4 === 0){
//     count[j] = "LoopyLighthouse";
//   }
//   else if (i % 3 === 0){
//     count[j] = "Loopy";
//   }
//   else if (i % 4 === 0){
//     count[j] = "Lighthouse";
//   }
//   else {
//     count[j] = i;
//   }
//   console.log(count[j]);
//   j++
// }



function loopyLighthouse(range, multiples, words){
  for (var i = range[0]; i <= range[1]; i ++){
    var count = [];
    var j = 0;
    if (i % multiples[0] === 0 && i % multiples[1] === 0){
      count[j] = words[0] + words[1];
    }
    else if (i % multiples[0] === 0){
      count[j] = words[0];
    }
    else if (i % multiples[1] === 0){
      count[j] = words[1];
    }
    else {
      count[j] = i;
    }
    console.log(count[j]);
    j++
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);






