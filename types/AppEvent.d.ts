/**
 * 事件处理类，用于管理事件监听、触发和移除。
 */
declare class AppEvent {
    /**
     * 构造函数，初始化一个空的事件监听器对象。
     */
    constructor();

    /**
     * 添加事件监听器，将监听器函数添加到特定事件的监听器列表中。
     * @param event 事件名称
     * @param listener 要添加的事件监听器函数
     */
    addEventListener(event: string, listener: (data?: any) => void): void;

    /**
     * 移除事件监听器，从特定事件的监听器列表中移除指定的监听器函数。
     * 如果未提供特定监听器，则移除整个事件的监听器列表。
     * @param event 事件名称
     * @param listener 要移除的事件监听器函数
     */
    removeEventListener(event: string, listener?: (data?: any) => void): void;

    /**
     * 触发特定事件，调用该事件对应的所有监听器函数并传递特定的数据。
     * @param event 要触发的事件名称
     * @param data 要传递给监听器函数的数据
     */
    dispatchEvent(event: string, data?: any): void;

    /**
     * 移除所有事件监听器，清空监听器对象。
     */
    removeAllEventListeners(): void;
}

declare global {
    var page____AppEvent____Object: AppEvent;
    var App: AppEvent;
}

// 使文件成为模块
export {};
