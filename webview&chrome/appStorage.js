
// config = { type: "web" }
(async function() {
    try{
        page.evaluate(()=> {
            AppStorage.setItem("age", "10" )
            console.log("AppStorage get 1:" , AppStorage.getItem("age" ) )
            alert("value:" + AppStorage.getItem("age" ) );
            
            AppStorage.setItem("age", 20 )
            console.log("AppStorage get 2:" , AppStorage.getItem("age" ) )
            alert("value:" + AppStorage.getItem("age" ) );
            
            AppStorage.setItem("age", null )
            console.log("AppStorage get 3:" , AppStorage.getItem("age" ) )
            alert("value:" + AppStorage.getItem("age" ) );        
        })        
     }catch(e){
         console.log('script run error:' ,e)
     }
 })()

