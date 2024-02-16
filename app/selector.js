

// 微信聊天列表
let items = await page.$$('.android.widget.LinearLayout #kbq');
console.log("ele find" , JSON.stringify(items ) ) ;

// ---------------------------------------------

// 聊天列表选择用户。
let people = await page.$('#kbq[text="用户昵称"]');
console.log("ele find" , JSON.stringify(people ) ) ;

let people1 = await page.$('.android.view.View[text="爱读书"]');
console.log("ele find" , JSON.stringify(people1) ) ;

let people2 = await page.$('.View[text="爱读书"]');
console.log("ele find" , JSON.stringify(people2) ) ;

// ---------------------------------------------

// let item = await page.$('>ones android');
// console.log("ele find" , JSON.stringify(item) ) ;

// 微信聊天页面，文本输入框的选择器。
// let item = await page.$('#bkk[isEnabled="true"]');
// console.log("ele find" , JSON.stringify(item) ) ;


// let item = await page.$('#bkk[isEditable="true"]');
// console.log("ele find" , JSON.stringify(item) ) ;
