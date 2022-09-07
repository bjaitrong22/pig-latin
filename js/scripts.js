function vowelAway (text) {
  let textArray = text.split(" ");
  const vowels = ["a","e","i","o","u"];
  let newText = ""; 

  if (vowels.indexOf(text[0]) > -1) {
    newText = text + "way";
    return newText;
  } else  {
    let firstMatch = text.match(vowels);
    let vowel = text.indexOf(firstMatch[0]);
    newText = text.substring(vowel) + text.subtring(0, vowel) + "way";
    return newText;
  }
}