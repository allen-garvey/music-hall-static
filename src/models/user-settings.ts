const VOLUME_SETTING_KEY = 'USER_VOLUME';
let volumeTimeout: NodeJS.Timeout | undefined = undefined;

export const getUserVolume = (): number => {
    const volume = parseFloat(localStorage.getItem(VOLUME_SETTING_KEY) || '1');

    if (isNaN(volume)) {
        return 1;
    }

    return Math.max(Math.min(volume, 1), 0);
};

export const saveUserVolume = (volume: number) => {
    clearTimeout(volumeTimeout);

    volumeTimeout = setTimeout(() => {
        localStorage.setItem(VOLUME_SETTING_KEY, volume.toString());
    }, 1000);
};
