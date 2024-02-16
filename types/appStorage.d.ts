/**
 * 缓存数据，类似于 localStorage，但是是应用级别的存储，不会因为清除缓存而被清除。
 * @class appStorage
 */
// 报错是因为这里不是一个模块
declare global {
    export const appStorage: {
        /**
         * 设置存储项
         * Sets an item in the application storage with the given key and value.
         * If the value is null, the item will be removed.
         * @param {string} key - The key of the item to set or remove.
         * @param {*} value - The value of the item to set. If null, the item will be removed.
         */
        setItem: (key: string, value: any) => void;
    
        /**
         * 获取存储项
         * Retrieves an item from the application storage with the given key.
         * @param {string} key - The key of the item to retrieve.
         * @returns {?string} - The value of the item associated with the key, or null if the key does not exist.
         */
        getItem: (key: string) => string | null;
    
        /**
         * 删除存储项
         * Removes an item from the application storage with the given key.
         * @param {string} key - The key of the item to remove.
         */
        removeItem: (key: string) => void;
    
        /**
         * 清空存储
         * Clears all items from the application storage.
         */
        clear: () => void;
    }; 
    // interface Window {
    //     appStorage: typeof appStorage;
    // }
}
// 加一行这个，它就变成模块了
export {}
// 报错就没了
// 刚才有一个报错
