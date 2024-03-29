// AppPage.d.ts
declare class AppPage {
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
}

declare class AppElement {
    page: AppPage;
    selector: string;
    constructor(page: AppPage, selector: string, nodeInfo: any);
    click(options?: { clickCount?: number; delay?: number }): Promise<void>;
    type(text: string, options?: { delay?: number; autoCorrect?: boolean }): Promise<void>;
}

declare var page: AppPage;
