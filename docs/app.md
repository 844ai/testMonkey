# 特殊app的输入

- 支付宝收款码页面输入金额：输入框：SyntaxError: Private field '#input_edit' must be declared in an enclosing class

## 逻辑有问题

微信小程序，csdn会员，签到
await page.waitFor('=领取奖励'); //  没有运行, csdn中的
await page.click('=领取奖励'); // 
await sleep(1000); 

await page.waitFor('=转账');  
await page.click('=转账');  
await page.click('.TextView[text="转账"]');   找不到


// await page.waitFor('=转到支付宝');
// await page.click('=转到支付宝');  没有运行




当日操作次数已达到上线，一天不到10次；

## 收款二维码内容
参考格式：https://qr.alipay.com/fkx19845yqvohgv2eyctfdf

