import {useLocalStorage} from './useLocalStorage';

export const useModeToggle = (initialValue) => {
    const [status, setStatus] = useLocalStorage(initialValue);

    const setDarkMode = (initialValue) => {
        setStatus(initialValue);
    }

    return [status, setDarkMode];
}