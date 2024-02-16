declare namespace AppHttp {
    interface Config {
        headers?: Record<string, string>;
        timeout?: number;
        params?: Record<string, any>;
        [key: string]: any;
    }

    interface Response<T = any> {
        data: T;
        status: number;
        statusText: string;
        headers: Record<string, string>;
        config: Config;
        request?: any;
    }

    interface AppHttpInstance {
        /**
         * 发起 GET 请求
         * @param url 请求的 URL
         * @param config 请求配置选项 (可选)
         * @returns 返回包含请求结果的 Promise 对象
         */
        get<T = any>(url: string, config?: Config): Promise<Response<T>>;

        /**
         * 发起 POST 请求
         * @param url 请求的 URL
         * @param data 需要发送的数据
         * @param config 请求配置选项 (可选)
         * @returns 返回包含请求结果的 Promise 对象
         */
        post<T = any>(url: string, data?: any, config?: Config): Promise<Response<T>>;

        /**
         * 发起 PUT 请求
         * @param url 请求的 URL
         * @param data 需要发送的数据
         * @param config 请求配置选项 (可选)
         * @returns 返回包含请求结果的 Promise 对象
         */
        put<T = any>(url: string, data?: any, config?: Config): Promise<Response<T>>;

        /**
         * 发起 DELETE 请求
         * @param url 请求的 URL
         * @param config 请求配置选项 (可选)
         * @returns 返回包含请求结果的 Promise 对象
         */
        delete<T = any>(url: string, config?: Config): Promise<Response<T>>;

        /**
         * 发起 PATCH 请求
         * @param url 请求的 URL
         * @param data 需要发送的数据
         * @param config 请求配置选项 (可选)
         * @returns 返回包含请求结果的 Promise 对象
         */
        patch<T = any>(url: string, data?: any, config?: Config): Promise<Response<T>>;
    }
}

declare var axios: AppHttp.AppHttpInstance;

// 使文件成为模块
export {};
