require('dotenv').config();

const apikey = process.env.API_KEY;
const secret = process.env.SERVER_SECRET || 'My self';
const kalvian = process.env.IS_KALVIAN === 'true';
// const kalvian = true;
// const apiKey = '289fa828-ebb6-405a-bdb1-bf2d16ec8d66';
// const secret = 'server_secret';

if(!kalvian){
    console.error("Error: NOT A KALVIAN");
    process.exit(1);
}

console.log(`API key: ${apikey}`);
console.log(`Secret message: ${secret}`);
console.log(`IS kalvian: ${kalvian}`);