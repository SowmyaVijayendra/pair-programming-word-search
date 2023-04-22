const transpose = function(matrix) {
  // Replace this code with your solution
  let transposeArray = [];
  for (let c = 0; c < matrix[0].length; c++) {
    let temp = [];
    for (let r = 0; r < matrix.length; r++) {
      temp.push(matrix[r][c]);
    }
    transposeArray.push(temp);
  }
  return transposeArray;
};
module.exports=transpose;