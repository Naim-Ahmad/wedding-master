import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import auth from '../firebase/firebase.config'

export const AuthContext = React.createContext(null)

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const loginWithEmailAndPassword = (email, password) => {
        let response = null;
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                response = {code: 200, message: "Login Successful!"}
            })
            .catch(err => {
                console.error(err)
                response = err;
            })
        return response;
    }

    const registerWithEmailAndPassword = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const continueWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }

    const continueWithFacebook = () => {
        const provider = new FacebookAuthProvider()
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unsubscribe()
    }, [])
    
    const authInfo = {
        user,
        loading,
        loginWithEmailAndPassword,
        registerWithEmailAndPassword,
        continueWithGoogle,
        continueWithFacebook,
        logOut
    }

  return (
      <AuthContext.Provider value={authInfo}>
          {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
    children: PropTypes.node
}
