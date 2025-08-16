import AddLetter from './add_letter';
import { expect, test } from 'vitest';

test('beat add letter', () => {
  let word = "beat"
  let result = new Set(AddLetter(word));
  let expected = new Set(["beast", "beant", "beata", "beath", "beati", "beats", "beaut", "bebat", "begat", "belat", "bemat", "bepat", "berat", "bleat"]);
  expect(result).toStrictEqual(expected);
});

test('east add letter', () => {
  let word = "east"
  let result = new Set(AddLetter(word));
  let expected = new Set(["beast", "feast", "yeast", "easts", "geast", "least", "reast"]);
  expect(result).toStrictEqual(expected);
});

test('eat add letter', () => {
  let word = "eat"
  let result = new Set(AddLetter(word));
  let expected = new Set(["beat", "east", "seat", "eath", "eats", "erat", "feat", "geat", "heat", "keat", "leat", "meat", "neat", "peat", "teat", "yeat"]);
  expect(result).toStrictEqual(expected);
});