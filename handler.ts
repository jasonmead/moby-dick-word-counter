import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { downloadAndParseFile } from './src/index.js';

export const parseText = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  return downloadAndParseFile('http://www.gutenberg.org/files/2701/2701-0.txt').then(x => ({
    statusCode: 200,
    body: JSON.stringify(x)
  }));
};
