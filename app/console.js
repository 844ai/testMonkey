
(async function() {
    try{        
        Console.open();
        Console.show();
        Console.showLine();
        // Console.showTime();
        // Console.clear();
        Console.log("hello testk monkey", "auto test")
        Console.log("测试App悬浮窗打印信息");
        Console.warn("warn info，警告信息");
        Console.error("error info，错误信息");

        Console.log("测试打印")
        Console.hide( 2000 ); // delay hide 
        
        // Console.hide();
        
        
     }catch(e){
         console.log('script run error:' ,e)
     }
 })()