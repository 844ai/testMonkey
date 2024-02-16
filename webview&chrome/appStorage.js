
// config = { type: "web" }
(async function() {
    try{
        page.evaluate(()=> {
            appStorage.setItem("age", "10" )
            console.log("appStorage get 1:" , appStorage.getItem("age" ) )
            alert("value:" + appStorage.getItem("age" ) );
            
            appStorage.setItem("age", 20 )
            console.log("appStorage get 2:" , appStorage.getItem("age" ) )
            alert("value:" + appStorage.getItem("age" ) );
            
            appStorage.setItem("age", null )
            console.log("appStorage get 3:" , appStorage.getItem("age" ) )
            alert("value:" + appStorage.getItem("age" ) );        
        })        
     }catch(e){
         console.log('script run error:' ,e)
     }
 })()

