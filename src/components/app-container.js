import React, {useState, useEffect} from "react";
import ThemeContext from "../context/theme";
import FirebaseContext from "../context/firebase";
import useTheme from "../hooks/use-theme";
import useFirebase from "../hooks/use-firebase";

const AppContainer = ({children}) => {
    const { dark, changeTheme } = useTheme();
    const { login, authUser, logout, signInWithGoogle} = useFirebase();

    return (
        <FirebaseContext.Provider value={{login, authUser, logout, signInWithGoogle}}>
            <ThemeContext.Provider value={{dark, changeTheme}}>
                {children}
            </ThemeContext.Provider>
        </FirebaseContext.Provider>
    );
}

export default AppContainer;