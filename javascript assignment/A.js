function reverseWordsInSentence(sentence) {
    let words = sentence.split(' ');
    let reversedWords = [];

    for (let word of words) {
        let reversedWord = '';
        for (let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }
        reversedWords.push(reversedWord);
    }

    let reversedSentence = reversedWords.join(' ');
    return reversedSentence;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a sentence: ', (sentence) => {
    const reversedSentence = reverseWordsInSentence(sentence);
    console.log('Reversed sentence:', reversedSentence);
    rl.close();
});
