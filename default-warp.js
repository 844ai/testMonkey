
// config = { type: "app" }
(async function() {
    try{        

        console.log("your code")
        
        
     }catch(e){
        console.log('script run error:' ,e)                
        Console.open()
        Console.show()
        Console.error("错误:", e )
        Console.hide( 10000 );
     }
 })()