import CompareMaps from './compare_maps';
import { expect, test } from 'vitest';

test('empty maps are equal', () => {
  let map1 = new Map();
  let map2 = new Map();
  let result = CompareMaps(map1, map2);
  let expected = true
  expect(result).toStrictEqual(expected);
});

test('one-element maps are equal', () => {
  let map1 = new Map([
    ["a", 1]
  ]);
  let map2 = new Map([
    ["a", 1]
  ]);
  let result = CompareMaps(map1, map2);
  let expected = true;
  expect(result).toStrictEqual(expected);
});

test('one-element maps are not equal (different values)', () => {
  let map1 = new Map([
    ["a", 1]
  ]);
  let map2 = new Map([
    ["a", 2]
  ]);
  let result = CompareMaps(map1, map2);
  let expected = false;
  expect(result).toStrictEqual(expected);
});

test('one-element maps are not equal (different keys)', () => {
  let map1 = new Map([
    ["a", 1]
  ]);
  let map2 = new Map([
    ["b", 1]
  ]);
  let result = CompareMaps(map1, map2);
  let expected = false;
  expect(result).toStrictEqual(expected);
});

test('two-element maps are equal (same order)', () => {
  let map1 = new Map([
    ["a", 10],
    ["b", 200]
  ]);
  let map2 = new Map([
    ["a", 10],
    ["b", 200]
  ]);
  let result = CompareMaps(map1, map2);
  let expected = true;
  expect(result).toStrictEqual(expected);
});

test('two-element maps are equal (different order)', () => {
  let map1 = new Map([
    ["b", 200],
    ["a", 10]
  ]);
  let map2 = new Map([
    ["a", 10],
    ["b", 200]
  ]);
  let result = CompareMaps(map1, map2);
  let expected = true;
  expect(result).toStrictEqual(expected);
});

test('two-element maps are not equal (mixed keys and values)', () => {
  let map1 = new Map([
    ["a", 200],
    ["b", 10]
  ]);
  let map2 = new Map([
    ["a", 10],
    ["b", 200]
  ]);
  let result = CompareMaps(map1, map2);
  let expected = false;
  expect(result).toStrictEqual(expected);
});

