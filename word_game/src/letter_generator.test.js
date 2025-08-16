import LetterGenerator from  './letter_generator';
import { expect, test } from 'vitest';

test('skis with 1-letter output ADD letter generator', () => {
  // Arguments
  const word = "skis";
  const list = ["skies", "eskis"];
  const choice = "add";
  // Act
  const result_map = LetterGenerator(word, list, choice);
  const values = Array.from(result_map.values()).flat();
  // Expectations
  const expected_key = "e";
  const expected_value_length = 2;
  const expected_map_size = 5;
  const map_has_key = result_map.has(expected_key);
  // Assertions
  expect(map_has_key).toStrictEqual(true);
  expect(result_map.get("e").length).toStrictEqual(expected_value_length);
  expect(result_map.size).toStrictEqual(expected_map_size);
  expect(new Set(values)).toStrictEqual(new Set(list));
});

test('end with 5-letter output ADD letter generator', () => {
  // Arguments
  const word = "end";
  const list = ["bend", "lend", "mend", "send", "rend"];
  const choice = "add";
  // Act
  const result_map = LetterGenerator(word, list, choice);
  const values = Array.from(result_map.values()).flat();
  // Expectations
  const expected_keys = ["b", "l", "m", "s", "r"];
  const expected_values = 1;
  const expected_map_size = 5;
  // Assertions
  for (let key of expected_keys) {
    let map_has_key = result_map.has(key);
    expect(map_has_key).toStrictEqual(true);
    expect(result_map.get(key).length).toStrictEqual(expected_values);
  }
  expect(result_map.size).toStrictEqual(expected_map_size);
  expect(new Set(values)).toStrictEqual(new Set(list));
});

test('ill with 6-letter output ADD letter generator', () => {
  // Arguments
  const word = "ill";
  const list = ["will", "pill", "mill", "fill", "gill", "kill"];
  const choice = "add";
  // Act
  const result_map = LetterGenerator(word, list, choice);
  const result_keys = new Set(result_map.keys());
  const values = Array.from(result_map.values()).flat();
  // Expectations
  const expected_keys = new Set(["w", "p", "m", "f", "g", "k"]);
  const expected_map_size = 5;
  // Assertions
  const result_keys_is_subset_of_expected_keys = result_keys.isSubsetOf(expected_keys);
  expect(result_keys_is_subset_of_expected_keys).toStrictEqual(true);
  expect(result_map.size).toStrictEqual(expected_map_size);
  const results_values_is_subset_of_list = new Set(values).isSubsetOf(new Set(list));
  expect(results_values_is_subset_of_list).toStrictEqual(true);
});

test('yeast with 2-letter output REMOVE letter generator', () => {
  // Arguments
  const word = "yeast";
  const list = ["east", "yeat"];
  const choice = "remove";
  // Act
  const result_map = LetterGenerator(word, list, choice);
  const values = Array.from(result_map.values()).flat();
  // Expectations
  const expected_keys = ["s", "y"];
  const expected_map_size = 5;
  // Assertions
  for (let key of expected_keys) {
    let map_has_key = result_map.has(key);
    expect(map_has_key).toStrictEqual(true);
  }
  expect(result_map.size).toStrictEqual(expected_map_size);
  expect(new Set(values)).toStrictEqual(new Set(list));
});

test('beast with 5-letter output REMOVE letter generator', () => {
  // Arguments
  const word = "beast";
  const list = ["east", "beat", "bast", "best", "beas"];
  const choice = "remove";
  // Act
  const result_map = LetterGenerator(word, list, choice);
  const values = Array.from(result_map.values()).flat();
  // Expectations
  const expected_keys = ["s", "b", "e", "a", "t"];
  const expected_map_size = 5;
  // Assertions
  for (let key of expected_keys) {
    let map_has_key = result_map.has(key);
    expect(map_has_key).toStrictEqual(true);
  }
  expect(result_map.size).toStrictEqual(expected_map_size);
  expect(new Set(values)).toStrictEqual(new Set(list));
});

test('triumphant with 7-letter output REMOVE letter generator', () => {
  // Arguments
  const word = "triumphant";
  const list = ["tiumphant", "trumphant", "trimphant", "triuphant", "triumhant", "triumpant", "triumphnt"];
  const choice = "remove";
  // Act
  const result_map = LetterGenerator(word, list, choice);
  const result_keys = new Set(result_map.keys());
  const values = Array.from(result_map.values()).flat();
  // Expectations
  const expected_keys = new Set(["r", "i", "u", "m", "p", "h", "a"]);
  const expected_map_size = 5;
  // Assertions
  const result_keys_is_subset_of_expected_keys = result_keys.isSubsetOf(expected_keys);
  expect(result_keys_is_subset_of_expected_keys).toStrictEqual(true);
  expect(result_map.size).toStrictEqual(expected_map_size);
  const results_values_is_subset_of_list = new Set(values).isSubsetOf(new Set(list));
  expect(results_values_is_subset_of_list).toStrictEqual(true);
});

test('triumphant with 2-letter output REMOVE letter generator', () => {
  // Arguments
  const word = "triumphant";
  const list = ["tiumphant", "trumphant"];
  const choice = "remove";
  // Act
  const result_map = LetterGenerator(word, list, choice);
  const values = Array.from(result_map.values()).flat();
  // Expectations
  const expected_keys = new Set(["r", "i"]);
  const expected_map_size = 5;
  // Assertions
  for (let key of expected_keys) {
    let map_has_key = result_map.has(key);
    expect(map_has_key).toStrictEqual(true);
  }
  expect(result_map.size).toStrictEqual(expected_map_size);
  expect(new Set(values)).toStrictEqual(new Set(list));
});

test('beast with 2-letter output EXCHANGE letter generator', () => {
  // Arguments
  const word = "beast";
  const list = ["yeast", "feast", "blast", "boast"];
  const choice = "exchange";
  // Act
  const result_map = LetterGenerator(word, list, choice);
  const values = Array.from(result_map.values()).flat();
  // Expectations
  const expected_keys = new Set(["b", "e"]);
  const expected_map_size = 5;
  // Assertions
  for (let key of expected_keys) {
    let map_has_key = result_map.has(key);
    expect(map_has_key).toStrictEqual(true);
  }
  expect(result_map.size).toStrictEqual(expected_map_size);
  expect(new Set(values)).toStrictEqual(new Set(list));
});

test('stain with 5-letter output EXCHANGE letter generator', () => {
  // Arrange
  const word = "stain";
  const list = ["otain", "slain", "strin", "staln", "staid"];
  const choice = "exchange";
  // Act
  const result_map = LetterGenerator(word, list, choice);
  const values = Array.from(result_map.values()).flat();
  // Expectations
  const expected_keys =  new Set(["s", "t", "a", "i", "n"]);
  const expected_map_size = 5;
  // Assertations
  for (let key of expected_keys) {
    let map_has_key = result_map.has(key);
    expect(map_has_key).toStrictEqual(true);
  }
  expect(result_map.size).toStrictEqual(expected_map_size);
  expect(new Set(values)).toStrictEqual(new Set(list));
});

test('monkies with 7-letter output EXCHANGE letter generator', () => {
  // Arrange
  const word = "monkies";
  const list = ["donkies", "mankies", "mookies", "mongies", "monkyes", "monkids", "monkiep"];
  const choice = "exchange";
  // Act
  const result_map = LetterGenerator(word, list, choice);
  const result_keys = new Set(result_map.keys());
  const values = Array.from(result_map.values()).flat();
  // Expectations
  const expected_keys = new Set(["m", "o", "n", "k", "i", "e", "s"]);
  const expected_map_size = 5;
  // Assertions
  const result_keys_is_subset_of_expected_keys = result_keys.isSubsetOf(expected_keys);
  expect(result_keys_is_subset_of_expected_keys).toStrictEqual(true);
  expect(result_map.size).toStrictEqual(expected_map_size);
  const results_values_is_subset_of_list = new Set(values).isSubsetOf(new Set(list));
  expect(results_values_is_subset_of_list).toStrictEqual(true);
});

test('monkies with 3-letter output EXCHANGE letter generator', () => {
  // Arrange
  const word = "monkies";
  const list = ["donkies", "mankies", "mookies"];
  const choice = "exchange";
  // Act
  const result_map = LetterGenerator(word, list, choice);
  const values = Array.from(result_map.values()).flat();
  // Expectations
  const expected_keys = new Set(["m", "o", "n"]);
  const expected_map_size = 5;
  // Assertions
  console.log(result_map);
  for (let key of expected_keys) {
    let map_has_key = result_map.has(key);
    expect(map_has_key).toStrictEqual(true);
  }
  expect(result_map.size).toStrictEqual(expected_map_size);
  expect(new Set(values)).toStrictEqual(new Set(list));
});

test('DEBUG #1', () => {
  // Arrange
  const word = "east";
  const list = ["bast", "cast", "ease", "easy", "erst", "fast", "gast", "hast", "last", "mast", "nast", "oast", "past", "vast", "wast"];
  const choice = "exchange";
  // Act
  const result_map = LetterGenerator(word, list, choice);
  const values = Array.from(result_map.values()).flat();
  // Expectations
  const expected_keys = new Set(["e", "a", "t", "s"]);
  const expected_map_size = 4;
  const expected_e_array = new Set(["bast", "cast", "fast", "gast", "hast", "last", "mast", "nast", "oast", "past", "vast", "wast"]);
  const expected_a_array = new Set(["erst"]);
  const expected_s_array = new Set();
  const expected_t_array = new Set(["ease", "easy"]);
  // Assertions
  for (let key of expected_keys) {
    let map_has_key = result_map.has(key);
    expect(map_has_key).toStrictEqual(true);
  }
  expect(result_map.size).toStrictEqual(expected_map_size);
  expect(new Set(values)).toStrictEqual(new Set(list));
  expect(new Set(result_map.get("e"))).toStrictEqual(expected_e_array);
  expect(new Set(result_map.get("a"))).toStrictEqual(expected_a_array);
  expect(new Set(result_map.get("s"))).toStrictEqual(expected_s_array);
  expect(new Set(result_map.get("t"))).toStrictEqual(expected_t_array);
});

