const transpose = function (matrix) {

    var newArray = [];
    for (let i = 0; i < matrix[0].length; i++) {
        newArray[i] = [];
        counter = 0;
        while (counter !== matrix.length) {
            newArray[i].push(matrix[counter][i]);
            counter++;
        }
    }
    return newArray;
  };
  
  const findWord = function(strings, word) {
    for (let i of strings) {
        if (i.includes(word)) {
            return true;
        }
    }
  };
  
  const wordSearch = (letters, word) => {
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    const horizontalJoin = letters.map(ls => ls.join(''));
    const reverseJoin = letters.map(ls=>ls.reverse().join(''));
    
    if (findWord(verticalJoin, word) || findWord(horizontalJoin, word) || findWord(reverseJoin, word)) {
        return true;
    } else {
        return false;
    }
  };
  
  module.exports = wordSearch;
