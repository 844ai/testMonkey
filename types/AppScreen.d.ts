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
	 * 获取屏幕尺寸
	 * Retrieves the metrics (width and height) of the application screen.
	 * @returns {Object} - The metrics of the screen.
	 * @memberof Screen
	 */
    getMetrics(): { width: number, height: number };

	/**
	 * 按X轴缩放坐标值。
	 * @param {number} x - 原始X坐标值。
	 * @returns {number} - 缩放后的X坐标值。
	 * @memberof Screen
	 */
    scaleX(x: number): number;

	/**
	 * 按Y轴缩放坐标值。
	 * @param {number} y - 原始Y坐标值。
	 * @returns {number} - 缩放后的Y坐标值。
	 * @memberof Screen
	 */
    scaleY(y: number): number;

	/**
	 * 按X轴重新缩放坐标值。
	 * @param {number} x - 缩放后的X坐标值。
	 * @returns {number} - 重新缩放后的X坐标值。
	 * @memberof Screen
	 */
    rescaleX(x: number): number;

	/**
	 * 按Y轴重新缩放坐标值。
	 * @param {number} y - 缩放后的Y坐标值。
	 * @returns {number} - 重新缩放后的Y坐标值。
	 * @memberof Screen
	 */
    rescaleY(y: number): number;


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
    var Screen: AppScreen;
}

// 使文件成为模块
export {};
