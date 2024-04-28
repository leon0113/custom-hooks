import { useEffect, useState } from "react";

//TODO: Create a hook that returns true or false based on weithers the user is currently online
export function useIsOnline() {
    const [isOnline, setIsOnline] = useState(window.navigator.onLine);

    useEffect(() => {
        window.addEventListener('online', () => setIsOnline(true));
        window.addEventListener('offline', () => setIsOnline(false));
    }, [])

    return isOnline;
}


//TODO: Create a hook that returns you the current mouse pointer position.
export const useMousePointer = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return position;
};


//TODO: Create a hook that runs a certain callback function every n seconds
export const useInterval = (callback, delay) => {
    return useEffect(() => {
        const id = setInterval(callback, delay);

        //cleanup fn
        return () => clearInterval(id);
    }, [callback, delay])
}

//TODO: Create a hook that debounces a value given
export const useDebounce = (value, delay) => {
    // State to store the debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);
    //solutiuon 2
    useEffect(() => {
        // Set up a timer to update the debounced value after the specified delay
        const timerId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Clean up the timer if the value changes before the delay has passed
        return () => clearTimeout(timerId);
    }, [value, delay]);

    return debouncedValue;
}