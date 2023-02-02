import axios from "axios";
import { downloadFile } from "../src/fileLoader";

jest.mock("axios");

test('it should download test', async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: 'some data'});

    const result = await downloadFile("any file")
    expect(result).toEqual('some data');
});

test('it should remove non word characters from data', async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: '_Whaling not respectable?_ Whaling is imperial! By old English statutory law, the whale is declared “a royal fish.” '});

    const result = await downloadFile('any file');
    expect(result).toEqual('Whaling not respectable Whaling is imperial By old English statutory law the whale is declared a royal fish');
});

test('it should replace whitespace characters with spaces', async () => {
    const data = 'this is a return\rthis is a tab\tthis is a new line\n    ';
    (axios.get as jest.Mock).mockResolvedValue({data});

    const result = await downloadFile('any file');
    expect(result).toEqual('this is a return this is a tab this is a new line');
});

test('it should not remove apostrophes from words',async () => {
    const data = "Holland’s Plutarch's Morals";

    (axios.get as jest.Mock).mockResolvedValue({data});

    const result = await downloadFile('any file');
    expect(result).toEqual("Holland's Plutarch's Morals");
});