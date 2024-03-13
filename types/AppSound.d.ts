declare class AppSound {
	playSuccess: () => Promise<void>;
	playFail: () => Promise<void>;
	playWarning: () => Promise<void>;
	playError: () => Promise<void>;
	playSound: (sound: any) => Promise<void>;
}

declare global {
    // @ts-ignore
	var Sound: AppSound;
}

export {};
