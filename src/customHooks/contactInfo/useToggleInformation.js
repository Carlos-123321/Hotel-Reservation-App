import { useState } from 'react';

function useToggleInformation() {

    const [showInformation, setShowInformation] = useState(false);
    const [hideInformation, setHideInformation] = useState(false);

    const toggleInformation = () => {
        
        if (showInformation) {
            setHideInformation(true);
            setTimeout(() => {
                setShowInformation(false);
                setHideInformation(false);
            }, 1000);
        } else {
            setShowInformation(true);
            setHideInformation(false);
        }
    };


    return { showInformation, hideInformation, toggleInformation};

    
}

export default useToggleInformation;