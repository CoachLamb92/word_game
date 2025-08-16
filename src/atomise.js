function Atomise(word) {
    const word_map = new Map();
    const unique_letters = new Set(word);
    for (let letter of unique_letters) {
        const re = new RegExp(letter, 'g');
        word_map.set(letter, word.match(re).length);
    }
    return word_map;
}

export default Atomise;