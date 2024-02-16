
// config = { type: "web" }
(async function() {
    try{        

        console.log("validator:", validator.isEmail('foo@bar.com') )
        // webView.reload()
        // webView.loadUrl("http://192.168.28.150:9400/test.html")
        // page.evaluate(() => {  })
        page.goto("http://192.168.28.150:9400/test.html")
        // page.goto("http://192.168.28.150:9400/screen.html")
        page.evaluate(() => { alert('Hello, World!' + document.title ) })
        
     }catch(e){
         console.log('script run error:' ,e)
     }
 })()
