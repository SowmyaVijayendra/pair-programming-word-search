const transpose = require("./transpose");
const wordSearch = (letters, word) => {
  const transposedLetters = transpose(letters);
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const verticalJoin = transposedLetters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;
