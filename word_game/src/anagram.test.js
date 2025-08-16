import Anagram from './anagram';
import { expect, test } from 'vitest';

test('east returns anagrams', () => {
  let word = "east";
  let result = new Set(Anagram(word));
  let expected = new Set(['teas', 'seat', 'sate', 'ates', 'eats', 'etas', 'seta']);
  expect(result).toStrictEqual(expected);
});

test('seat returns anagrams', () => {
  let word = "seat";
  let result = new Set(Anagram(word));
  let expected = new Set(['teas', 'seta', 'sate', 'ates', 'eats', 'etas', 'east']);
  expect(result).toStrictEqual(expected);
});

test('teasy returns yeast', () => {
  let word = "teasy";
  let result = new Set(Anagram(word));
  let expected = new Set(['yeast']);
  expect(result).toStrictEqual(expected);
});

test('boast returns empty array', () => {
  let word = "boast";
  let result = new Set(Anagram(word));
  let expected = new Set(["basto", "boats", "botas", "sabot"]);
  expect(result).toStrictEqual(expected);
});