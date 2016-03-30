var latinPig = function(str) {
  str = str.toLowerCase().split(' ');
  console.log(str);
  var newStr = str.map(function(word) {
    if (/[aeiou]/.test(word.charAt(0)) === true) { //if first letter is vowel
      return word + "ay";
    } else if (/[aeiou]/.test(word.charAt(0)) === false) { //if first letter is consonant
      var wordArray = word.split("");
      console.log(wordArray);
      var consonantStart = [];
      for (i = 0; i < wordArray.length; i++) { //for loop to test for consonant at each letter in word
        if (/[aeiou]/.test(wordArray[i]) === false) {
          consonantStart.push(wordArray[i]);
        } else {
          break;
        } //end if for consonant

      } //end for loop

      //remove starting consonants
      wordArray.splice(0, consonantStart.length);
      wordArray.push(consonantStart.join("") + "ay");
      return wordArray.join('');

    } //end of if statement that tests first letter in word


  }); //end of map function

	console.log(newStr.join(' '));

}; //end of function

latinPig("For words that start with one or more consonants, move all of the first consecutive consonants to the end and add");
