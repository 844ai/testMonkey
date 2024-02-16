

// Screen.requestPermission()
(async function() {
    try{
        toast("测试猿打印信息")

        Screen.setMetrics(390,844); // 1080, 1920
        let opened = Screen.isEnabled();
        Screen.requestPermission();  
        toast("开启权限状态：" + opened)
        if(!opened){
            await page.waitFor("=立即开始")
            await page.click("=立即开始")
        }

        // let isEnabled = await Screen.isEnabled()
        // console.log('isEnabled:', isEnabled );
        // let img = await page.screenshot();
        // console.log('截图 base64：',img.substr(0,100) );
        // Screen.setMetrics(390,844); // 1080, 1920
        // let color = await Screen.pixel(100,100)
        // console.log('color:',  color );
        console.log('opened:',  opened );

     }catch(e){
         console.log('script run error:' ,e)
     }
 })()