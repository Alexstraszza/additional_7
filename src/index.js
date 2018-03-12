module.exports = function solveSudoku(matrix) {
  function option(row,col) {
    var result = [];
    var field = {
        row: Math.floor(row/3)*3,
        col: Math.floor(col/3)*3,
    };

    for (var i = 0; i < 9; i++) {
        result.push([matrix[row][i], matrix[i][col], matrix[field.row + i % 3][field.col + Math.floor(i / 3)]])
    }
    return result;
}

  for (var row = 0; row < 9; row++) {
    for (var col = 0; col < 9; col++) {
        if (matrix[row][col] === 0) {
          var options = option(row, col);
            for (var option of options) {
                matrix[row][col] = option;
                solveSudoku(matrix);
            }
        }
    }
}
return matrix;
}
