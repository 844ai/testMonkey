
(async function() {
    try{        
        // let isEnabled = isEnabled()
        requestPermission()
        // console.log('auto isEnabled:', isEnabled );
        
     }catch(e){
         console.log('script run error:' ,e)
     }
 })()