(async function() {
    try{        

        // home()
        back()
        // recent()
        // powerDialog()
        // notificationBar()
        // quickSettings()
        // lockScreen()
        splitScreen()
        
        // openUrl("alipays://platformapi/startapp?appId=20000123")
        // openUrl("www.baidu.com")

        const uri = "https://www.example.com/my page.html";
        const encoded = "https%3A%2F%2Fwww.example.com%2Fmy%20page.html";
        console.log("encodeURI:" , encodeURI(uri) )
        console.log("encodeURIComponent:" , decodeURI(encoded) )
        

        let phoneNumber = "18600000000"
        let message = "test message"
        let intent = {
            action: "android.intent.action.VIEW",
            data: `smsto:${phoneNumber}`,            
            extras: {
                "sms_body": message
            }            
        };
    startActivity( intent)


     }catch(e){
         console.log('script run error:' ,e)
     }
 })()