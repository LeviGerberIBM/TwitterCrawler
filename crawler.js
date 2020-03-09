const http = require('http');
const https = require('https');
const fs = require('fs');
const cheerio = require('cheerio');

/*const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World");
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});*/

https.get("https://twitter.com/WHO/status/1236370398410952709", res => {
    var html;
    res.setEncoding('utf8');
    res.on('data', chunk => html += chunk);
    res.on('end', () => {
        console.log("RESPONSE END - " + res.statusCode)
        const $ = cheerio.load(html);
        const twitterHandle = $('span.username').eq(3).text();
        const twitterName = $('span strong').eq(0).text();
        //const verified
        const tweetText = $('p.tweet-text').eq(0).text();

        console.log(twitterHandle);
    })
})

