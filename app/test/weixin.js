// Screen.setMetrics( 390 , 844); // 当使用page.tap(x,y)时，Screen.setMetrics可以确保不同宽高的屏幕运行正常 
(async function() {
    try{        

let count = 0 
await page.waitFor('#bkk');
await page.click('#bkk');
console.log("action click input done", count  ++ , moment().format('YYYY-MM-DD HH:mm:ss') ) 
        
console.log("action input start", count  ++ , moment().format('YYYY-MM-DD HH:mm:ss') ) 
await page.type('#bkk', '测试一下测');
console.log("action type done ", count  ++ , moment().format('YYYY-MM-DD HH:mm:ss') ) 
await sleep(1000)

let ele = await page.$('#bkk');
let eles = await page.$$('#bkk');
let item = await eles.find(i=> i.className == 'android.widget.EditText' )
let text = await item.text
console.log("ele default" , JSON.stringify(ele) ) ;
console.log("ele find" , JSON.stringify(item) ) ;
console.log("ele text" , text ) ;

// 闲鱼列表
// let items = await page.$$("#dx_root .TextView[text]");
// console.log("items:", items.length , JSON.stringify(items.map(i=>i.text) ) ) ;
// let items1 = await page.$$("#rv_main_container .FrameLayout #dx_root .TextView[text]");
// console.log("items:", items1.length , JSON.stringify(items1.map(i=>i.text) ) ) ;


// await page.tap( 352,493, { left: 323 , top: 478 , width:58,height:30 } );
console.log("action wait done ", count  ++ , moment().format('YYYY-MM-DD HH:mm:ss') ) 
await page.waitFor('=发送');
console.log("action click start", count  ++ , moment().format('YYYY-MM-DD HH:mm:ss') ) 
await page.click('=发送');
console.log("action click done ", count  ++ , moment().format('YYYY-MM-DD HH:mm:ss') ) 
        
     }catch(e){
         console.log('script run error:' ,e)
     }
 })()