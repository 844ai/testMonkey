(async function() {
    try{        
        // 60844
        console.log("device.js start")
        let width = Device.width() ;
        let rotation = Device.rotation() ;
        let height = Device.height() ;
        let getIMEI = Device.getIMEI() ;
        let isWifi = Device.isWifi();
        let localIp = Device.getLocalIp();
        console.log('Device:' , JSON.stringify({width, height, rotation , getIMEI , isWifi , localIp }) )
        Device.vibrate(1000)
        
     }catch(e){
         console.log('script run error:' ,e)
     }
 })()