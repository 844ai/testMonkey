
/**
 * 缓存数据，类似于 localStorage，但是是应用级别的存储，不会因为清除缓存而被清除。
 * @class webView
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
