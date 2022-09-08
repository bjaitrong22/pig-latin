# pig-latin
Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: "It will add 'way' to multiple vowels in a single word"
Code: pigLatin("out");
Expected Output: "outaway"

Test: "It will add 'way' to the end of mulitple words that begin with a vowel."
Code: pigLatin("easy way out even");
Expected Output:"easyway way outway evenway"

Test: "It will move qu from the beginning of a word to the end plus ay."
Code: pigLatin("quick");
Expected Output: "ickquay"

Test: "It will move just the first consonant to the end of the if a qu is not a the beggining and ay."
Code: pigLatin("squeal");
Expected Output:"quealsay."




