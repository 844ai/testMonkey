

(async function() {
    try{
        // let packageName = getPackageName("珍爱")
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
        let elements = await page.elements()
        console.log('elements:', elements.length , JSON.stringify(elements) )
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
        // openAppName("珍爱")
        // openApp("com.zhenai.android")
        // await page.waitFor("#tab_found_rb")
        // console.log("start click")
        // await page.click("#tab_found_rb")
        // // await page.waitFor("#layout_comment_icon")
        // console.log("start click comment start")
        // await page.click("#layout_comment_icon")
        // await page.waitFor("#comment_after_praised")
        // console.log("start click comment input type")
        // await page.type("#comment_after_praised" , "很漂亮的小姐姐"  ) // , { delay : 400 }
        console.log('run done;')
        
        // let elements = await page.elements()
        // let item = flatElements(elements).find(item => item.text === '查看排行榜');
        // if(item){
        //     let options = {};
		//     options.ignoreScale = true;
        //     let { left , top , right , bottom  } = item.boundsInScreen ;
        //     let x = ( left + right ) / 2 ;
        //     let y = ( top + bottom ) / 2 ;
        //     await page.tap(  x , y , options );
        // }
        // console.log( "item", JSON.stringify(item) );
        // await page.tapText("=查看排行榜");  // 和上面代码等效；

     }catch(e){
         console.log('script run error:' ,e)
     }
 })()