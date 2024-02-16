(async function() {
    try{        

        toast("wait start for ratation")
        
        await page.waitForFunction(()=> Device.rotation() !=0 );
        toast("wait roation end! step 1")
        await page.waitFor(()=> Device.rotation() ==0 );
        toast("wait roation end! step 2")
        // await page.waitForFunction("Device.rotation() !=0");  // error，
        // toast("wait roation end! step 3")        
        // await page.waitFor("Device.rotation() ==0");  // error，
        // toast("wait end! step 4")
        console.log("wait end!")
        
     }catch(e){
         console.log('script run error:' ,e)
     }
 })()