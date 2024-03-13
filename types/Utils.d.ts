/**
 * 工具类
 */
declare class CommonUtils {
    /**
     * 获取对象的所有方法
     * @param obj 对象
     * @returns 方法名数组
     */
    getAllMethods(obj: any): string[];
    /**
     * 解码 Base64 字符串为二进制数据
     * @param base64 Base64 字符串
     * @returns 二进制数据
     */
    decodeBase64(base64: string): number[];
    
    /**
     * 展平所有元素，配合  let elements = await page.elements()
     * @param {Object} item
     */
    flatElements(item: any): any[];

    /**
     * 获取元素中心坐标
     * @param button 按钮
     * @returns 中心坐标
     * @example
     * ```typescript
     * let button = await page.findOne('button');
     * let { x, y } = Utils.centerXY(button);
     * ```
     */
    centerXY(button: any): { x: number; y: number };    
}



declare global {
    var Utils: CommonUtils;

}

// 使文件成为模块
export {};
