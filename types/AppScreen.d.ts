declare class AppScreen {
    /**
     * 请求屏幕操作权限，可选超时设置。
     * @param options 请求权限的配置选项，包括超时时间。
     * @returns 返回一个 Promise，解析为一个布尔值，指示是否授予权限。
     */
    requestPermission(options?: { timeout?: number }): Promise<boolean>;

    /**
     * 获取屏幕截图。
     * @param options 截图的配置选项。
     * @returns 返回截图操作的结果。
     */
    screenshot(options?: Object): any;

    /**
     * 检查屏幕操作是否启用。
     * @returns 返回一个布尔值，指示屏幕操作是否已启用。
     */
    isEnabled(): boolean;

    /**
     * 设置屏幕尺寸，用于在不同设备屏幕尺寸下执行脚本时统一坐标。
     * @param width 屏幕宽度。
     * @param height 屏幕高度。
     */
    setMetrics(width: number, height: number): void;

    /**
     * 获取指定坐标像素的颜色。
     * @param x 像素的 x 坐标。
     * @param y 像素的 y 坐标。
     * @returns 返回指定坐标像素的颜色，为 16 进制字符串表示。
     */
    pixel(x: number, y: number): string;
}

// 在全局命名空间内声明 AppScreen 实例
declare global {
    var appScreen: AppScreen;
    var Screen: AppScreen;
}

// 使文件成为模块
export {};
