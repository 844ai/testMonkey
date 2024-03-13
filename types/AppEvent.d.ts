declare class AppEvent {
    /**
     * Initializes an empty event listener object.
     */
    constructor();

    /**
     * Adds an event listener function to the list of listeners for a specific event.
     * @param event The name of the event.
     * @param listener The event listener function to add.
     */
    addEventListener(event: string, listener: Function): void;

    /**
     * Removes an event listener function from the list of listeners for a specific event.
     * If the listener is not provided, it removes all listeners for the event.
     * @param event The name of the event.
     * @param listener The event listener function to remove.
     */
    removeEventListener(event: string, listener?: Function): void;

    /**
     * Triggers a specific event and calls all the associated listeners with the provided data.
     * @param event The name of the event to trigger.
     * @param data The data to pass to the listener functions.
     */
    dispatchEvent(event: string, data: any): void;

    /**
     * Removes all event listeners and clears the listener object.
     */
    removeAllEventListeners(): void;
}

// Declare instance of AppEvent in the global namespace
declare global {
    var App: AppEvent;
}

// Make the file a module
export {};
