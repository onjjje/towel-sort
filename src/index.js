module.exports = function towelSort (matrix) {
  let result = [];
  if (!matrix) {return result};

  for (let i = 1; i < matrix.length+1; i++){
    console.log(matrix[i-1])
    let array = matrix[i-1]
    if (i % 2 === 0) {
      let reverse = array.reverse()
      for (let j = 0; j<reverse.length; j++){
        result.push(reverse[j])
      }
    } else {
    for (let k = 0; k<array.length; k++){
      result.push(array[k])
    }
  }
  }
  return result;
}
