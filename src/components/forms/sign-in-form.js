import React, { useContext } from "react";

import FirebaseContext from "../../context/firebase";

const SignInForm = () => {
    const { login, authUser, logout, signInWithGoogle } = useContext(FirebaseContext);

    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        login(email, password).then(console.log('success'))
    }

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
    }

    const handleSignInWithGoogle = (e) => {
        signInWithGoogle();
    }

    return (
        <>
            {authUser ? <p>Hello {authUser.email} you are logged in</p> : <p>You are not logged in</p>}
            <form onSubmit={handleSignIn}>
            <input name="email" type="email" />
            <input name="password" type="password" />
            <button type="submit">Sign In</button>
            </form>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={handleSignInWithGoogle}>Sign In with Google</button>
        </>
    );
}

export default SignInForm;