
(async function() {
      try{    
    
        var i = 0
                    
        Console.open();
        Console.show();
        Console.showLine();
        Console.log("test start")

        // while (true) {
            i = i + 1

            Console.log("test:" +i)
            
            toast(i + "")
            await sleep(1000)

            Console.log("test: 23 " +i)

        // }
        
      }catch(e){
        console.log('script run error:' ,e)        
        Console.open()
        Console.show()
        Console.error("错误:", e )
        Console.hide( 10000 );
      }
})()


