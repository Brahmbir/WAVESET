import { useEffect, useState } from 'react';

export const useP5DupeRemover = () => {
    const [parent, setParent] = useState(); // If you're using JS, remove the <Element>

    useEffect(() => {
        if (!parent) return;
        const allButFirst = Array.from(parent.children).slice(1);
        allButFirst.forEach((child) => {
            parent.removeChild(child);
        });
    }, [parent]);

    return setParent;
}