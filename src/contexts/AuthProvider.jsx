import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import PropTypes from 'prop-types'
import React, { useContext, useEffect } from 'react'
import auth from '../firebase/firebase.config'

const AuthContext = React.createContext(null)

function AuthProvider({ children }) {
    const [user, setUser] = useContext(null)
    const [loading, setLoading] = useContext(true)

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

    const registerWithEmailAndPassword = (email, password, name) => {
        let response = null;
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                updateProfile(auth.currentUser, {
                    displayName: name,
                })
                    .then(() => {
                        response = {code: 200, message: 'Registration Successful!'}
                    })
                    .catch(err => {
                        console.error(err)
                        response = err;
                })
            })
            .catch(err => {
                console.error(err)
                response = err
            })
        return response;
    }

    const continueWithGoogle = () => {
        let response = null;
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then(() => {
                response = {code: 200, message: "Login Successful!"}
            })
            .catch(err => {
                console.error(err)
                response = err
        })
        return response
    }

    const continueWithFacebook = () => {
        let response = null;
        const provider = new FacebookAuthProvider()
        signInWithPopup(auth, provider)
            .then(() => {
                response = {code: 200, message: "Login Successful!"}
            })
            .catch(err => {
                console.error(err)
                response = err
        })
        return response
    }

    const logOut = () => {
        let response = null
        signOut(auth)
            .then(() => {
                response = {code: 200, message: 'Logout Successful!'}
            })
            .catch(err => {
                console.log(err)
                response = err
            })
        return response
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

export default AuthProvider
