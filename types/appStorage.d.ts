declare global {
    interface AppStorage {
        /**
         * 设置存储项。如果值为 null，则移除该项。
         * @param key 存储项的键。
         * @param value 存储项的值。如果为 null，则该项将被移除。
         */
        setItem(key: string, value: any): void;

        /**
         * 获取存储项的值。
         * @param key 存储项的键。
         * @returns 存储项的值，如果键不存在，则返回 null。
         */
        getItem(key: string): string | null;

        /**
         * 删除存储项。
         * @param key 要删除的存储项的键。
         */
        removeItem(key: string): void;

        /**
         * 清空所有存储项。
         */
        clear(): void;
    }

    var appStorage: AppStorage;
}

// 使文件成为模块
export {};
