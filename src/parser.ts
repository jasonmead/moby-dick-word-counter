import { WordMap } from "./WordMap";
import { WordWithCount } from "./WordWithCount";

export function parseWords(words: string, excludedWords: string[] = []): Array<WordWithCount> {
    const individualWords = words.toLocaleLowerCase().split(' ');
    const excludedWordsLower = excludedWords?.map(x => x.toLowerCase());

    const map: WordMap = {};

    for (let index = 0; index < individualWords.length; index++) {
        const element = individualWords[index];
        if (excludedWordsLower.includes(element)) continue;
        map[element] = (map[element] + 1) || 1;
    }

    return Object.keys(map).map(x => ({ word: x, count: map[x]}));
};