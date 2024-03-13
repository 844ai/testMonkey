declare global {
    /**
     * 打开应用。
     * @param packageName 应用的包名。
     */
    function openApp(packageName: string): void;

    /**
     * 通过应用名称打开应用。
     * @param appName 应用的名称。
     */
    function openAppName(appName: string): void;

    /**
     * 关闭应用。
     * @param packageName 应用的包名。
     */
    function closeApp(packageName: string): void;

    /**
     * 获取所有应用的列表。
     * @returns 应用信息对象数组。
     */
    function getApps(): Array<Object>;

    /**
     * 获取应用的包名。
     * @param appName 应用的名称。
     * @returns 应用的包名，如果找不到则返回 null。
     */
    function getPackageName(appName: string): string | null;

    /**
     * 根据键获取应用信息。
     * @param key 应用的关键字。
     * @returns 应用信息。
     */
    function getApp(key: string): Object | null;

    /**
     * 获取系统版本信息。
     * @returns 系统版本信息字符串。
     */
    function version(): string | null;

    /**
     * 检查系统服务是否启用。
     * @returns 系统服务启用状态。
     */
    function isEnabled(): boolean;

    /**
     * 请求权限。
     * @param options 请求权限的配置选项。
     * @returns 权限请求成功返回 true，否则返回 false。
     */
    function requestPermission(options?: { timeout?: number }): Promise<boolean>;

    /**
     * 执行后退操作。
     */
    function back(): void;

    /**
     * 执行主屏幕操作。
     */
    function home(): void;

    /**
     * 执行最近应用操作。
     */
    function recent(): void;

    /**
     * 显示电源对话框。
     */
    function powerDialog(): void;

    /**
     * 打开通知栏。
     */
    function notificationBar(): void;

    /**
     * 打开快速设置。
     */
    function quickSettings(): void;

    /**
     * 锁定屏幕。
     */
    function lockScreen(): void;

    /**
     * 开启分屏模式。
     */
    function splitScreen(): void;

    /**
     * 设置音量。
     * @param volumeLevel 音量级别。
     * @param streamType 音频流类型。
     */
    function setVolume(volumeLevel: number, streamType?: number): void;

    /**
     * 获取音量。
     * @param streamType 音频流类型。
     * @returns 音量级别。
     */
    function getVolume(streamType?: number): number;

    /**
     * 启动一个活动。
     * @param options 启动活动的配置选项。
     */
    function startActivity(options?: Object): void;

    /**
     * 打开一个网页。
     * @param url 网页的 URL。
     */
    function openUrl(url: string): void;

    /**
     * 对字符串进行 encodeURIComponent 编码。
     * @param str 要编码的字符串。
     * @returns 编码后的字符串。
     */
    function encodeURIComponent(str: string): string;

    /**
     * 对 URI 进行 encodeURI 编码。
     * @param uri 要编码的 URI。
     * @param allowedChars 允许的字符集。
     * @returns 编码后的 URI。
     */
    function encodeURI(uri: string, allowedChars: string): string;

    /**
     * 对字符串进行 decodeURIComponent 解码。
     * @param str 要解码的字符串。
     * @returns 解码后的字符串。
     */
    function decodeURIComponent(str: string): string;

    /**
     * 对 URI 进行 decodeURI 解码。
     * @param uri 要解码的 URI。
     * @returns 解码后的 URI。
     */
    function decodeURI(uri: string): string;
}

// 使文件成为模块
export {};