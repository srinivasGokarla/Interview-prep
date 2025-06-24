function updateWord(words, startWord, endWord) {
    // your code goes here
    if(startWord === endWord) return 0; 
    if (words[0] !== startWord) return null;
     if (words[words.length-1] !== endWord) return null;
      let i = 1; 
      while (i < words.length) { 
        if (words[i] === endWord) 
        return i 
        i++ 
        }
         return null
}

// debug your code below
const beginWord = 'hit';
const endWord = 'cog';
const wordList = ["hit", "hot", "dot", "dog", "cog"];

console.log(updateWord(wordList, beginWord, endWord));