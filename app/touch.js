


// [方便删除，现在是app模式，删除后是webview模式] config = { type: "web" }
(async function() {
    try{        

        Screen.setMetrics(390,844);
        await page.touchMove( 190 , 50, 173, 716 ,  5000 ) ;
        await sleep(2000)
        await page.touchMove( 173, 716 ,  190 , 50,500 ) ;   //  touch up

        await page.touchDown(336, 816); // 也触发了点击效果；

        await page.longTap(321, 616); // == await page.tap(321, 616, { delay: 500 })

        // await page.touchDown( 190 , 287 )
        // await sleep( 3000 ) ;
        // await page.touchUp( 173, 716) ;
        
     }catch(e){
         console.log('script run error:' ,e)
     }
 })()