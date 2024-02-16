
(async function() {
    try{        

        App.addEventListener( NotificationEvent.received , function( data ){
            console.log( "NotificationEvent.received" , JSON.stringify(data) ) ;
            toast("sms:" + JSON.stringify(data) )
        }) ;
        
     }catch(e){
         console.log('script run error:' ,e)
     }
 })()