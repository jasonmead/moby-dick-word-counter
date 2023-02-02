import axios from 'axios';

export const downloadFile = async (url: string): Promise<string> => {
    return axios.get(url).then(x => (x.data as string).replace(/’/, '\'').replace(/[^a-z '’]/gi, ' ').replace(/\s+/g, ' ').trim());
}