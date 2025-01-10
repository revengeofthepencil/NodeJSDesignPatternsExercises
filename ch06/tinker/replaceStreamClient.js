import { ReplaceStream } from './replace-stream.js';

const SEARCH_STRING = 'Fart';
const REPLACE_STRING = 'Be polite, now';
const replaceStream = new ReplaceStream(SEARCH_STRING, REPLACE_STRING);
replaceStream.on('data', chunk => console.log(chunk.toString()));
replaceStream.write('Arty Fa');
replaceStream.write('rty had a party');
replaceStream.end();
