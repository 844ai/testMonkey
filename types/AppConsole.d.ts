/**
 * 应用控制台，悬浮窗显示输出信息。类似于浏览器控制台console。首字母大写。
 */
declare class AppConsole {
    /**
     * 输出信息到应用控制台 log
     * Output information to the application console log
     * @param values 输出的值 (Values to output)
     */
    log(...values: any[]): void;

    /**
     * 输出警告信息到应用控制台 warn
     * Output warning information to the application console warn
     * @param values 输出的值 (Values to output)
     */
    warn(...values: any[]): void;

    /**
     * 输出错误信息到应用控制台 error
     * Output error information to the application console error
     * @param values 输出的值 (Values to output)
     */
    error(...values: any[]): void;

    /**
     * 清空应用控制台
     * Clear the application console
     */
    clear(): void;

    /**
     * 打开应用控制台
     * Open the application console
     */
    open(): void;

    /**
     * 显示应用控制台
     * Show the application console
     */
    show(): void;

    /**
     * 隐藏应用控制台
     * Hide the application console
     * @param delay 延迟时间 (Delay time)
     */
    hide(delay: number): void;

    /**
     * 显示应用控制台行数
     * Show the line number in the application console
     */
    showLine(): void;

    /**
     * 隐藏应用控制台行数
     * Hide the line number in the application console
     */
    hideLine(): void;

    /**
     * 显示应用控制台时间戳
     * Show timestamps in the application console
     */
    showTime(): void;

    /**
     * 隐藏应用控制台时间戳
     * Hide timestamps in the application console
     */
    hideTime(): void;
}

declare global {
    var Console: AppConsole;
}

// 使文件成为模块
export {};
