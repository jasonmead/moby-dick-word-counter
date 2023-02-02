
import { WordWithCount } from "./WordWithCount.js"
import { downloadFile } from "./fileLoader.js"
import { parseWords } from "./parser.js";
import { exludeWords } from "./excludeWords.js";

export const downloadAndParseFile = async (url: string): Promise<Array<WordWithCount>> => {
    const content = await downloadFile(url);
    const words = parseWords(content, exludeWords);
    words.sort((a, b) => b.count - a.count)
    return words.slice(0, 50);
}