
(async function() {
    try{        
                
        const hds = [
            {'User-Agent':'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6'},
            {'User-Agent':'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.12 Safari/535.11'},
            {'User-Agent': 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)'}
        ];
        const bookTag = '计算机'
        const headers = hds[Math.floor(Math.random() * hds.length)];
        // let url = `http://www.douban.com/tag/${encodeURIComponent(bookTag)}/book`;        
        let url = "https://book.douban.com/subject/36424128/" ;                
                
        function extractInfo(infoText, key) {
            const regex = new RegExp(`${key}\\s*([^\n]+)`);
            const match = infoText.match(regex);
            return match ? match[1].trim() : '';
        }
        
        let html = await axios.get(url, { headers }).then( r=> r.data) ;
        let $ = cheerio.load(html);
        let infoText = $('#info').text();

        const book = {
            title: $('h1 span').text(),
            author: $('#info span a').first().text(),
            subtitle: extractInfo(infoText, '副标题:'),
            publisher: $('#info .pl:contains("出版社:")').next('a').text(),
            // year: $('#info .pl:contains("出版年:")').next().text(),  //没有值
            // price: $('#info .pl:contains("定价:")').next().text(),
            series: $('#info .pl:contains("丛书:")').next('a').text(),
            // ISBN: $('#info .pl:contains("ISBN:")').next().text()
            year: extractInfo(infoText, '出版年:'),
            price: extractInfo(infoText, '定价:'),
            series: extractInfo(infoText, '丛书:'),
            ISBN: extractInfo(infoText, 'ISBN:')
        };
        console.log("book item:", JSON.stringify(book));
        
     }catch(e){
         console.log('script run error:' ,e)
     }
 })()