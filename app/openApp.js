

(async function() {
    try{
        toast("测试猿打印信息")
        // openApp("com.android.browser")
        openApp("com.tencent.mm")
        // openAppName("珍爱")
        console.log('run done;')
        
     }catch(e){
         console.log('script run error:' ,e)
     }
 })()