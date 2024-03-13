declare class AppDevice {
    width: () => number;
    height: () => number;
    rotation: () => number;
    density: () => number;
    isPortrait: () => boolean;
    isLandscape: () => boolean;
    screenWidthForOrientation: (orientation: string) => number;
    screenHeightForOrientation: (orientation: string) => number;
    isWifi: () => boolean;
    getLocalIp: () => string;
    getIMEI: () => string;
    getSerial: () => string;
    getAndroidId: () => string;
    getBrightness: () => number;
    getBrightnessMode: () => string;
    setBrightness: (value: number) => void;
    setBrightnessMode: (mode: string) => void;
    getMusicVolume: () => number;
    getAlarmVolume: () => number;
    getMusicMaxVolume: () => number;
    getNotificationMaxVolume: () => number;
    getAlarmMaxVolume: () => number;
    setMusicVolume: (volume: number) => void;
    setAlarmVolume: (volume: number) => void;
    setNotificationVolume: (volume: number) => void;
    getBattery: () => any; // You should replace 'any' with an appropriate type for battery information
    getTotalMem: () => number;
    getAvailMem: () => number;
    isCharging: () => boolean;
    isPowerSourceAC: () => boolean;
    isPowerSourceUSB: () => boolean;
    isPowerSourceWireless: () => boolean;
    isPowerSourceDock: () => boolean;
    keepAwake: (type: string) => void;
    isScreenOn: () => boolean;
    wakeUpIfNeeded: () => void;
    wakeUp: () => void;
    keepScreenOn: (type: string) => void;
    keepScreenDim: (type: string) => void;
    cancelKeepingAwake: () => void;
    vibrate: (pattern: number[], repeat: number) => void;
    cancelVibration: () => void;
    getOrientation: () => number;
    ensureReadPhoneStatePermission: () => void;
    hasReadPhoneStatePermission: () => boolean;
    getMacAddress: () => string;
}

declare const Device: AppDevice;

export { AppDevice, Device };
