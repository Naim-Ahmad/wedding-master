import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import auth from '../firebase/firebase.config'

export const AuthContext = React.createContext(null)

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const loginWithEmailAndPassword = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
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

    const setUserName = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
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
        setUserName,
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
