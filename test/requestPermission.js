
(async function() {
    try{
        toast("测试猿打印信息")
        let status = isEnabled();
        toast("权限状态：" + status)
        let opened = await requestPermission();  
        toast("开启权限状态：" + opened)
        console.log("status:" , opened );

     }catch(e){
         console.log('script run error:' ,e)
     }
 })()