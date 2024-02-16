
(async function() {
    try{        
        // axios 是简易版本,支持 get post delete put patch方法；
                        
        // const response = await axios.get("https://www.baidu.com");
        // const {data , status , statusText , headers , config , request } = response;

        // console.log("response data:", data);
        // console.log("response config:", status , statusText , headers , config , request );
        
        var info ;
        var city = "广州";
        // info = await axios.get("http://www.sojson.com/open/api/weather/json.shtml?city=" + city).then(r=>r.data).catch(e=> console.log(e) )
        // console.log("info:", JSON.stringify(info || {}) );

        info = await axios.get("http://whois.pconline.com.cn/ipJson.jsp" , { params: { json: true } }).then(r=>r.data);
        console.log("info:", JSON.stringify(info) );

        let data = {title: '844.ai',body: 'bar',userId: 844 ,}
        const item = await axios.post('https://jsonplaceholder.typicode.com/posts', data ).then(r=>r.data)

        console.log("response.data:", item);

     }catch(e){
         console.log('script run error:' ,e)
     }
 })()