import all_words from './all_words';
import Atomise from './atomise';
import CompareMaps from './compare_maps';

function Anagram(word) {
    //Define length of argument "word"
    let word_length = word.length;
    
    //Array of words of shorter length
    let sameLengthWords = [];


    for (let fileWords of all_words) {
        if (fileWords.length === word_length) {
            sameLengthWords.push(fileWords);
        }
    }

    let relevant_choices = [];
    for (let sLWord of sameLengthWords) {
        if (sLWord !== word && CompareMaps(Atomise(sLWord), Atomise(word))) {
            relevant_choices.push(sLWord);
        }
    }
    return relevant_choices;
}

export default Anagram;