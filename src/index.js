
exports.min = function min (array) {
  if (array == undefined || array.length == 0) return 0;
  let min = Infinity;
  for (const item of array) {
    min = item < min ? item : min ;
  }
  return min;
}

exports.max = function max (array) {
  if (array == undefined || array.length == 0) return 0;
  let max = -Infinity;
  for (const item of array) {
    max = item > max ? item : max ;
  }
  return max;
}

exports.avg = function avg (array) {  
    if (array == undefined || array.length == 0) return 0;
    let avg = 0;
    for (const item of array) {
      avg += item;
    }
    avg = avg / array.length;
    return avg;
}
