import { useEffect, useState } from "react";

type FunctionReturnType = { isDesktop: boolean, isTablet: boolean, isMobile: boolean };

function useDetectDevice(): FunctionReturnType {

    const [windowScreenSize, setWindowScreenSize] = useState<number>(window.innerWidth);


    function SetResolution() {
        setWindowScreenSize(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", SetResolution);

        () => window.removeEventListener("resize", SetResolution);
    }, [windowScreenSize]);

    return {
        isDesktop: windowScreenSize > 1240,
        isTablet:  windowScreenSize > 768 && windowScreenSize < 1241,
        isMobile: windowScreenSize < 769
    }  satisfies FunctionReturnType;
}

export default useDetectDevice;