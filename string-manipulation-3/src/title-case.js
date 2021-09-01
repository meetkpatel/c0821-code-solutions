/* exported titleCase */
function titleCase(title) {
  var conjunctionsWords = ['and', 'or', 'nor', 'but', 'as', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var titleFormat = '';
  var tempWord = '';
  var threeWordCount = 0;
  for (var i = 0; i < title.length; i++) {
    if (title[i] !== ' ') {
      tempWord += title[i].toLowerCase();
    } else {
      if (tempWord.length >= 4) {
        if (tempWord !== 'javascript') {
          titleFormat += tempWord[0].toUpperCase();
          for (var j = 1; j < tempWord.length; j++) {
            titleFormat += tempWord[j];
          }
          titleFormat += ' ';
          tempWord = '';
        } else {
          titleFormat += 'JavaScript';
          titleFormat += ' ';
          tempWord = '';
        }
      }
      if (tempWord.length <= 3) {
        for (var con = 0; con < conjunctionsWords.length; con++) {
          if (tempWord === conjunctionsWords[con]) {
            titleFormat += tempWord;
            titleFormat += ' ';
            tempWord = '';
            threeWordCount++;
            break;
          }
        }
        if (threeWordCount === 0) {
          titleFormat += tempWord[0].toUpperCase();
          for (var con1 = 1; con1 < tempWord.length; con1++) {
            titleFormat += tempWord[con1];
          }
          titleFormat += ' ';
          tempWord = '';

        }
        threeWordCount = 0;
      }
    }
  }
  if (tempWord.length >= 4) {
    titleFormat += tempWord[0].toUpperCase();
    for (var j1 = 1; j1 < tempWord.length; j1++) {
      titleFormat += tempWord[j1];
    }
  } else {
    titleFormat += tempWord;
  }
  return titleFormat;
}
