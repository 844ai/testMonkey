
// 	@V8Function
// 	fun loadUrl(url: String) {
// 		webView.loadUrl(url)
// 	}

// 	@V8Function
// 	fun reload(url: String) {
// 		webView.reload()
// 	}

// 	@V8Function
// 	fun getUserAgent():String{
// 		return GlobalApp.engine.getCachedUserAgent()
// 	}


// 	@V8Function
// 	fun setUserAgent(value:String){
// //		必须同1线程中执行
// 		GlobalApp.engine.setUserAgent(value)
// 	}

// 	@V8Function
// 	fun setPc(){
// //		必须同1线程中执行
// 		val value = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
// 		GlobalApp.engine.setUserAgent(value)
// 	}
// 	@V8Function
// 	fun setMobile(){
// //		必须同1线程中执行
// 		val value = "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1"
// 		GlobalApp.engine.setUserAgent(value)
// 	}


/**
 * 缓存数据，类似于 localStorage，但是是应用级别的存储，不会因为清除缓存而被清除。
 * @class appStorage
 */
// 报错是因为这里不是一个模块
declare global {
    export const webView: {
        /**
         * 当前app要打开的网页url
         * @param {string} url - 需要打开的url 
         */
        loadUrl: (url: string) => void;

        /**
         * 重新加载当前网页
         */
        reload: () => void;

        /**
         * 获取当前网页的userAgent
         * @returns {string} - 当前网页的userAgent
         */
        getUserAgent: () => string;

        /**
         * 设置当前网页的userAgent
         * @param {string} value - 需要设置的userAgent
         */
        setUserAgent: (value: string) => void;

        /**
         * 设置当前网页的userAgent为PC
         * 减少操作，提供快捷方式；
         */
        setPc: () => void;

        /**
         * 设置当前网页的userAgent为移动端
         * 减少操作，提供快捷方式；
         */
        setMobile: () => void;
        
    }; 
    
}
export {}
