import ExchangeLetter from './exchange_letter';
import { expect, test } from 'vitest';

test('empty string exchange letter', () => {
  let word = ""
  let result = ExchangeLetter(word);
  let expected = [];
  expect(result).toStrictEqual(expected);
});

test('feast exchange letter', () => {
  let word = "feast"
  let result = new Set(ExchangeLetter(word));
  let expected = new Set(["beast", "yeast", "fease", "feest", "feist", "geast", "least", "reast"]);
  expect(result).toStrictEqual(expected);
});

test('beast exchange letter', () => {
  let word = "beast"
  let result = new Set(ExchangeLetter(word));
  let expected = new Set(["feast", "yeast", "blast", "boast", "beant", "beaut", "beest", "blast", "boast", "brast", "geast", "least", "reast"]);
  expect(result).toStrictEqual(expected);
});