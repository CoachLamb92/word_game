import Atomise from './atomise';
import { expect, test } from 'vitest';

test('east returns aest map', () => {
  let word = "east";
  let result = Atomise(word);
  let expected = new Map([
    ["a", 1], ["s", 1], ["e", 1], ["t", 1]]);
  expect(result).toStrictEqual(expected);
});

test('bolo returns blo map', () => {
  let word = "bolo";
  let result = Atomise(word);
  let expected = new Map([
    ["b", 1], ["l", 1], ["o", 2]]);
  expect(result).toStrictEqual(expected);
});

test('mississippi returns imps map', () => {
  let word = "mississippi";
  let result = Atomise(word);
  let expected = new Map([
    ["s", 4], ["p", 2], ["m", 1], ["i", 4]]);
  expect(result).toStrictEqual(expected);
});

test('(nothing) returns empty map', () => {
  let word = "";
  let result = Atomise(word);
  let expected = new Map();
  expect(result).toStrictEqual(expected);
});

