

(async function() {
    try{
        // let packageName = getPackageName("微信")
        // let item = getApp("com.android.browser")
        // let packageName = getPackageName("浏览器")
        // let item = getApp("com.tencent.mm")
        // let apps = getApps()
        // console.log('packageName:', packageName , JSON.stringify(item ) , apps.length )
        // const chunkSize = 50;  // 每次处理的元素数量
        // for (let i = 0; i < apps.length; i += chunkSize) {
        //     // 提取当前的子数组
        //     let chunk = apps.slice(i, i + chunkSize);
        //     // 将这个子数组转换为JSON字符串并打印
        //     console.log("app items :" , JSON.stringify(chunk));
        // }
        // await alert('测试弹窗')
        toast("测试猿打印信息")
        // let result = await confirm("测试确认弹窗?")
        // console.log('执行下一步：',result)
        // copyToClipboard("测试复制文本")
        // const userInput = await prompt("Enter your name:", "Default Name");
        // console.log("User input with await:", userInput);

        // prompt("Enter your age:", "20", (userInput) => {
        //     console.log("User input with callback:", userInput);
        // });

        // await requestScreenShot()
        // let img = await page.screenshot();
        // console.log('截图 base64：',img)

        // await sleep(1000)
        // let text = await getClipboard()
        // console.log('获取剪切板内容：',text , moment().format('YYYY-MM-DD HH:mm:ss'))
        //  openApp("com.android.browser")
        // openApp("com.tencent.mm")
        openAppName("微信")
        // openApp("com.zhenai.android")
        await page.waitFor("#tab_found_rb")
        console.log("start click")
        await page.click("#tab_found_rb")
        // // await page.waitFor("#layout_comment_icon")
        // console.log("start click comment start")
        // await page.click("#layout_comment_icon")
        // await page.waitFor("#comment_after_praised")
        // console.log("start click comment input type")
        // await page.type("#comment_after_praised" , "漂亮小姐姐"  ) // , { delay : 400 }
        console.log('run done;')
        
     }catch(e){
         console.log('script run error:' ,e)
     }
 })()