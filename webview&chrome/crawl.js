// config = { type: "web" }
(async function() {
    try{
        let userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36" ;
        webView.setUserAgent(userAgent);
        // page.evaluate(()=> AndroidApp.setUserAgent(userAgent) ) ;
        // page.evaluate((value)=> AndroidApp.setUserAgent(value) , userAgent ) ;
        await sleep(1000)
        
        await page.goto('https://book.douban.com/subject/36424128/');

        // Extract book information
        const book = await page.evaluate(() => {
            function extractInfo(infoText, key) {
                const regex = new RegExp(`${key}\\s*([^\n]+)`);
                const match = infoText.match(regex);
                return match ? match[1].trim() : '';
            }            

            const infoText = document.querySelector('#info').textContent;
            return {
                title: document.querySelector('h1 span').innerText,
                author: document.querySelector('#info span a').innerText,
                subtitle: extractInfo(infoText, '副标题:'),
                publisher: extractInfo(infoText, '出版社:'),
                year: extractInfo(infoText, '出版年:'),
                price: extractInfo(infoText, '定价:'),
                series: extractInfo(infoText, '丛书:'),
                ISBN: extractInfo(infoText, 'ISBN:')
            };
        });

        // Log book information
        console.log("Book Information:", JSON.stringify(book));

    } catch (e) {
        console.error('Error:', e);
    }
})();
