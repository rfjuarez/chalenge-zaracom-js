import React, {useEffect} from 'react';

const useDebounce = () => {
    const DEFAULT_DELAY_MS = 300;
    let timer;
    useEffect(() => {
        return () => {
            clearTimeout(timer)
        }
    }, [])
    const clearTimerAfterAction = (actionHandler) => {
        actionHandler()
        clearTimeout(timer);
    }
    return (actionHandler) => {
        clearTimeout(timer);
        timer = setTimeout(() => clearTimerAfterAction(actionHandler), DEFAULT_DELAY_MS);
    };

}
export default useDebounce;