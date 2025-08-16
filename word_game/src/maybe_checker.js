function MaybeChecker(maybe_words, used_words) {
    let used_set = new Set(used_words);
    let maybe_set = new Set(maybe_words);
    let potential_words = maybe_set.difference(used_set);
    return Array.from(potential_words);
}

export default MaybeChecker;