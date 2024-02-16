declare class AppPage {
    /**
     * 页面版本号
     */
    Version: string;

    /**
     * 获取页面注入对象，用于与 Android 应用进行交互
     */
    getAppPageInject(): any;

    /**
     * 获取当前应用的名称
     */
    title(): Promise<string>;

    /**
     * 获取当前应用的包名
     */
    url(): Promise<string>;

    /**
     * 获取当前页面内容（待完成）
     */
    content(): Promise<string>;

    /**
     * 跳转到指定应用的 Activity
     * @param activityFullName Activity 的完整名称
     */
    goto(activityFullName: string): Promise<void>;

    /**
     * 获取指定选择器的第一个元素
     * @param selector CSS 选择器
     */
    $(selector: string): Promise<any>;

    /**
     * 获取所有指定选择器的元素
     * @param selector CSS 选择器
     */
    $$(selector: string): Promise<any[]>;

    /**
     * 点击指定元素
     * @param selector CSS 选择器
     * @param options 点击选项，包括点击次数和延迟
     */
    click(selector: string, options?: { clickCount?: number; delay?: number }): Promise<void>;

    /**
     * 在页面上执行指定的 JavaScript 函数或代码字符串
     * @param pageFunction 要在页面实例上下文中执行的函数或代码字符串
     * @param args 传递给 pageFunction 的参数
     */
    evaluate(pageFunction: Function | string, ...args: any[]): Promise<any>;

    // 此处省略其他方法的具体实现以保持示例的简洁性
}

declare class AppElement {
    /**
     * 页面实例
     */
    page: AppPage;

    /**
     * 元素选择器
     */
    selector: string;

    /**
     * 创建一个 AppElement 实例
     * @param page 页面实例
     * @param selector 元素选择器
     * @param nodeInfo 节点信息
     */
    constructor(page: AppPage, selector: string, nodeInfo: any);

    /**
     * 点击元素
     * @param options 点击选项
     */
    click(options?: { clickCount?: number; delay?: number }): Promise<void>;

    /**
     * 在元素上输入文本
     * @param text 文本内容
     * @param options 输入选项
     */
    type(text: string, options?: { delay?: number; autoCorrect?: boolean }): Promise<void>;

    // 此处省略其他方法的具体实现以保持示例的简洁性
}

/**
 * 全局变量，页面实例
 */
declare var page: AppPage;
