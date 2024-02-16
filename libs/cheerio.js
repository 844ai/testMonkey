
        
const $ = cheerio.load('<h2 class="title">Hello world</h2>');
var result = $('h2.title').text();
console.log("cheerio result:", result );
