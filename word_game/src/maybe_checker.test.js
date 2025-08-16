import MaybeChecker from './maybe_checker';
import { expect, test } from 'vitest';

test ('empty maybe and empty used', () => {
    let maybe_words = [];
    let used_words = [];
    let result = MaybeChecker(maybe_words, used_words);
    let expected = [];
    expect(result).toStrictEqual(expected);
});

test ('one word maybe and empty used', () => {
    let maybe_words = ["one"];
    let used_words = [];
    let result = MaybeChecker(maybe_words, used_words);
    let expected = ["one"];
    expect(result).toStrictEqual(expected);
});

test ('two words maybe and empty used', () => {
    let maybe_words = ["one", "two"];
    let used_words = [];
    let result = MaybeChecker(maybe_words, used_words);
    let expected = ["one", "two"];
    expect(result).toStrictEqual(expected);
});

test ('empty maybe and one word used', () => {
    let maybe_words = [];
    let used_words = ["alpha"];
    let result = MaybeChecker(maybe_words, used_words);
    let expected = [];
    expect(result).toStrictEqual(expected);
});

test ('empty maybe and two words used', () => {
    let maybe_words = [];
    let used_words = ["alpha", "bravo"];
    let result = MaybeChecker(maybe_words, used_words);
    let expected = [];
    expect(result).toStrictEqual(expected);
});

test ('one word maybe and one word used (different)', () => {
    let maybe_words = ["one"];
    let used_words = ["alpha"];
    let result = MaybeChecker(maybe_words, used_words);
    let expected = ["one"];
    expect(result).toStrictEqual(expected);
});

test ('one word maybe and one word used (same)', () => {
    let maybe_words = ["ein"];
    let used_words = ["ein"];
    let result = MaybeChecker(maybe_words, used_words);
    let expected = [];
    expect(result).toStrictEqual(expected);
});

test ('two words maybe and one word used (different)', () => {
    let maybe_words = ["one", "two"];
    let used_words = ["alpha"];
    let result = MaybeChecker(maybe_words, used_words);
    let expected = ["one", "two"];
    expect(result).toStrictEqual(expected);
});

test ('two words maybe and one word used (overlap)', () => {
    let maybe_words = ["ein", "zwei"];
    let used_words = ["zwei"];
    let result = MaybeChecker(maybe_words, used_words);
    let expected = ["ein"];
    expect(result).toStrictEqual(expected);
});

test ('one word maybe and two words used (different)', () => {
    let maybe_words = ["one"];
    let used_words = ["alpha", "bravo"];
    let result = MaybeChecker(maybe_words, used_words);
    let expected = ["one"];
    expect(result).toStrictEqual(expected);
});

test ('one word maybe and two words used (overlap)', () => {
    let maybe_words = ["ein"];
    let used_words = ["ein", "zwei"];
    let result = MaybeChecker(maybe_words, used_words);
    let expected = [];
    expect(result).toStrictEqual(expected);
});

test ('two words maybe and two words used (different)', () => {
    let maybe_words = ["one", "two"];
    let used_words = ["alpha", "bravo"];
    let result = MaybeChecker(maybe_words, used_words);
    let expected = ["one", "two"];
    expect(result).toStrictEqual(expected);
});

test ('two words maybe and two words used (one overlap)', () => {
    let maybe_words = ["one", "ein"];
    let used_words = ["alpha", "ein"];
    let result = MaybeChecker(maybe_words, used_words);
    let expected = ["one"];
    expect(result).toStrictEqual(expected);
});

test ('two words maybe and two words used (two overlap)', () => {
    let maybe_words = ["ein", "zwei"];
    let used_words = ["ein", "zwei"];
    let result = MaybeChecker(maybe_words, used_words);
    let expected = [];
    expect(result).toStrictEqual(expected);
});