// config = { type: "web" }
toast("5秒钟切换回页面")
let url = await page.url()
console.log("url:", url);
await page.goto("https://www.baidu.com");
await sleep(5000);
await page.goto(url);
