import { useEffect, useState } from "react";

const useMemoise = (key, initialValue) => {
    const [text, setText] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(text));
    }, [key, text]); // Depend on `text`, so storage updates when `setText` is called

    return { text, setText };
};

export default useMemoise;
