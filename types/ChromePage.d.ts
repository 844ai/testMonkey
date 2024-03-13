// AppPage.d.ts
declare class ChromePage {
    Version: string;
    getAppPageInject(): any;
    title(): Promise<string>;
    url(): Promise<string>;
    content(): Promise<string>;
    goto(activityFullName: string): Promise<void>;
    $(selector: string): Promise<any>;
    $$(selector: string): Promise<any[]>;
    click(selector: string, options?: { clickCount?: number; delay?: number }): Promise<void>;
    findEditableNode(node: any): Promise<any>;
    evaluate(pageFunction: Function | string, ...args: any[]): Promise<any>;
    waitFor(selectorOrFunctionOrTimeout: string | Function | number, options?: { timeout?: number; pollingInterval?: number }, ...args: any[]): Promise<void>;
    waitForSelector(selector: string, options?: { timeout?: number; pollingInterval?: number }): Promise<AppElement>;
    waitForFunction(pageFunction: Function | string, options?: { timeout?: number; pollingInterval?: number }, ...args: any[]): Promise<any>;
    type(selector: string, text: string, options?: { delay?: number; autoCorrect?: boolean }): Promise<void>;
    screenshot(options?: { path?: string; type?: string; quality?: number; clip?: { x: number; y: number; width: number; height: number }; omitBackground?: boolean; encoding?: string }): Promise<string>;
    elements(): Promise<any>;
    clicks(selectors: string | string[], options?: { delay?: number }): Promise<void>;
    tap(x: number, y: number, options?: { clickCount?: number; delay?: number; interval?: number; left?: number; top?: number; width?: number; height?: number; ignoreScale?: boolean }): Promise<void>;
    tapText(text: string, options?: { clickCount?: number; delay?: number; interval?: number }): Promise<void>;
    longTap(x: number, y: number, options?: { delay?: number; left?: number; top?: number; width?: number; height?: number }): Promise<void>;
    touchDown(x: number, y: number): Promise<void>;
    touchUp(x: number, y: number): Promise<void>;
    touchMove(xFrom: number, yFrom: number, xTo: number, yTo: number, duration?: number): Promise<void>;
    swipe(xFrom: number, yFrom: number, xTo: number, yTo: number, duration?: number): Promise<void>;
    swipeDown(x?: number, y?: number, duration?: number): Promise<void>;
    swipeUp(x?: number, y?: number, duration?: number): Promise<void>;
    swipeLeft(x?: number, y?: number, duration?: number): Promise<void>;
    swipeRight(x?: number, y?: number, duration?: number): Promise<void>;
    home(): Promise<void>;
    getActiveElement(): Promise<any>;
    debug: boolean;
    environment: string; // This should be more specific based on your actual environment values.
    pendingEvents: Map<string, any>; // Consider defining a more specific type for the event map values.

    constructor();

    // Type method for typing text into an element
    type(selector: string, text: string, options?: { delay?: number, autoCorrect?: boolean }): Promise<void>;

    // Methods for waiting for conditions
    waitFor(selectorOrFunctionOrTimeout: string | (() => boolean) | number, options?: any, ...args: any[]): Promise<void>;
    waitForSelector(selector: string, options?: { timeout?: number, pollingInterval?: number, visible?: boolean, hidden?: boolean }): Promise<ChromeElement>;
    waitForFunction(pageFunction: () => boolean | string, options?: { timeout?: number, polling?: 'raf' | number }, ...args: any[]): Promise<void>;

    // Method for taking a screenshot
    screenshot(options?: { format?: 'png' | 'jpeg' }): Promise<string>;

    // Method for uploading a file
    uploadFile(selector: string, fileContent: string | ArrayBuffer | Blob): Promise<void>;

    // Methods for evaluating scripts
    eval(code: string, options?: { debug?: boolean }): Promise<any>;
    evaluate(fnOrString: Function | string, ...args: any[]): Promise<any>;

    // Internal method for executing scripts, consider making private or protected
    _execute(functionString: string, eventId: string): Promise<void>;


}



declare class ChromeElement {
    page: ChromePage;
    selector: string;

    constructor(page: ChromePage, selector: string);

    // Method for clicking an element
    click(options?: { button?: 'left' | 'right' | 'middle', clickCount?: number, delay?: number }): Promise<void>;

    // Method for typing text into the element
    type(text: string, options?: { delay?: number, autoCorrect?: boolean }): Promise<void>;

    // Method for uploading a file to the element
    uploadFile(fileContent: string | ArrayBuffer | Blob): Promise<void>;
}


// Assuming these are exposed globally
declare var page: ChromePage;