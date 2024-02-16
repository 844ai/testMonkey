declare namespace AppSystem {
    /**
     * 使用给定的值显示一个 toast 消息。
     * @param value 要在 toast 中显示的消息。
     */
    function toast(value: string): void;

    /**
     * 显示一个包含给定消息的 alert 对话框，并返回一个承诺，当用户关闭对话框时解决该承诺。
     * @param message 要在 alert 对话框中显示的消息。
     * @returns 当用户关闭对话框时解决的承诺。
     */
    function alert(message: string): Promise<void>;

    /**
     * 显示一个具有给定标题和内容的 confirm 对话框。如果提供了回调函数，它将使用对话框的结果调用。
     * 如果没有提供回调函数，则返回一个承诺，该承诺根据对话框的结果进行解析。
     * @param title confirm 对话框的标题。
     * @param content 要在 confirm 对话框中显示的内容，默认为空字符串。
     * @param callback 可选的回调函数，将在对话框结果上被调用。
     * @returns 如果未提供回调函数，则根据对话框结果解析的承诺。
     */
    function confirm(title: string, content?: string, callback?: (result: boolean) => void): Promise<boolean> | undefined;

    /**
     * 显示一个具有给定标题和默认值的 prompt 对话框。如果提供了回调函数，它将使用对话框的结果调用。
     * 如果没有提供回调函数，则返回一个承诺，该承诺根据对话框的结果进行解析。
     * @param title prompt 对话框的标题。
     * @param defaultValue 在 prompt 对话框中显示的默认值，默认为空字符串。
     * @param callback 可选的回调函数，将在对话框结果上被调用。
     * @returns 如果未提供回调函数，则根据对话框结果解析的承诺。
     */
    function prompt(title: string, defaultValue?: string, callback?: (result: string) => void): Promise<string> | undefined;

    /**
     * 将给定的文本复制到设备的剪贴板。
     * @param text 要复制到剪贴板的文本。
     */
    function copyToClipboard(text: string): void;

    /**
     * 获取设备剪贴板当前的内容。
     * @returns 剪贴板当前的内容。
     */
    function getClipboard(): string;
}
