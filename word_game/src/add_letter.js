import all_words from './all_words';

function AddLetter(word) {
    //Define length of argument "word"
    let word_length = word.length + 1;
    
    //Array of words of shorter length
    let longerWords = [];

    for (let fileWords of all_words) {
        if (fileWords.length === word_length) {
            longerWords.push(fileWords);
        }
    }

    let relevant_choices = [];
    for (let lwWord of longerWords) {
        for (let i = 0; i < word_length; i++) {
            if (lwWord.startsWith(word.slice(0, i)) && lwWord.endsWith(word.slice(i))) {
                relevant_choices.push(lwWord);
                break;
            }
        }
    }
    return relevant_choices;
}

export default AddLetter;
