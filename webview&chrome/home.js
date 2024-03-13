// config = { type: "web" }
(async ()=>{
    
// alert( "默认：" + globalThis.HOME_URL_DEFAULT  )
// alert( "默认：" + globalThis.HOME_APP_DEFAULT)
    let url = await page.url() ;
    Console.open();
    Console.show();
    Console.log("当前：" + url )

    console.log("当前：" + url )
    console.log( "默认：" + globalThis.HOME_URL_DEFAULT  )

    // await page.goto("http://192.168.28.254:9000/operate/scripts")

    // await page.goto("http://www.baidu.com")
    // await page.goto("https://test.844.ai/application")    

    // await sleep(3000);

    await page.home();
    
})()