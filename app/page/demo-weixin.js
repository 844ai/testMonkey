
// await page.tap(174,492, { left: 46 , top: 474 , width:257,height:37 } );
// await page.waitFor('#bkk[isEditable="true"]');
// await page.click('#bkk[isEditable="true"]'); 
// await sleep(500); 

await page.waitFor('#bkk[isEditable="true"]'); 
await page.type('#bkk[isEditable="true"]' , "测试234");
await sleep(500); 

// await page.tap(353,493, { left: 326 , top: 478 , width:55,height:30 } );
await page.waitFor('#bql');
await page.click('#bql'); // await page.click("=发送")  await page.tapText("=发送")
await sleep(500); 
