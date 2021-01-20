import { useState } from "react";

const useTheme = () => {
    const [dark, setDark] = useState(true);
    
    const changeTheme = () => {
        setDark(!dark);
    }

    return {
        dark,
        changeTheme
    }
}

export default useTheme;