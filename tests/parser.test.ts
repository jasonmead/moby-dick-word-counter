import { parseWords } from '../src/parser';

test('parse file for words', () => {
    const words = "one two three four";
    const result = parseWords(words);

    expect(result.length).toBe(4);
});

test('parseWords should count words', () => {
    const words = "one two three four two two three";
    const result = parseWords(words);

    expect(result[0]).toEqual({word: "one", count: 1});
    expect(result[1]).toEqual({word: "two", count: 3});
});

test('parseWords should ignore excluded words', () => {
    const words = "one two three four";
    const excludedWords = ["two", "four"];

    const result = parseWords(words, excludedWords);
    expect(result).toHaveLength(2);
    expect(result.find(x => x.word == "two")).toBeNull;
});

test('parseWords should ignore case', () => {
    const words = "one two One Two i I";
    const excludedWords = ["two", "I"];

    const result = parseWords(words, excludedWords);
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({ word: 'one', count: 2});
});