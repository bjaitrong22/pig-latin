function vowelAway (text) {
  let textArray = text.split(" ");
  const vowels = ["a","e","i","o","u"];
  let pigLatinWrd = []; 
  
  const pigVowelsArray = textArray.map ( function (text) {
    if (vowels.indexOf(text[0]) > -1) {
      pigLatinWrd = text + "way";
      return pigLatinWrd;

    } else if (text[0] === "q" && text[1] === "u") {
      pigLatinWrd = text.slice(2) + text.slice(0,2) + "ay" ;
      return pigLatinWrd;
    
    } else if (text[0] !== "q" && text[1] === "q" && text[2] === "u") {
       pigLatinWrd = text.slice(1) + text.slice(0,1) + "ay";
       return pigLatinWrd;
  
    } else {
      const regex = new RegExp(/[aeiou]/gi);
      indexOf1stVow = text.search(regex);
      pigLatinWrd = text.slice(indexOf1stVow,) + text.slice(0,indexOf1stVow) + "ay";
      return pigLatinWrd;
    }
});
return pigVowelsArray;
}