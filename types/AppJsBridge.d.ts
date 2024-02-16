/**
 * 生成事件ID的函数类型定义。
 */
declare function generateEventId(): string;

/**
 * 待处理事件的对象类型，包含解决（resolve）和拒绝（reject）方法。
 */
interface PendingEvent {
    resolve: (value?: any) => void;
    reject: (reason?: any) => void;
}

/**
 * 存储待处理事件的映射类型定义。
 */
declare let pendingEvents: Map<string, PendingEvent>;

/**
 * 处理完成操作的函数类型定义。
 * @param eventId 事件ID
 * @param result 操作结果，为JSON字符串格式
 */
declare function operationCompleted(eventId: string, result: string): void;
