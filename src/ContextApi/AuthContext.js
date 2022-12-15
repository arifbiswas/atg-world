import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import app from '../Firebase/Firebase';



export const AuthProvider = createContext()

const auth = getAuth(app);


const AuthContext = ({children}) => {
  
        const [user , setUser] = useState(null);
        const [loading , setLoading] = useState(true)
       
        const createUser = (email , password) =>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth,email,password)
        }

        const login =(email , password) =>{
            setLoading(true)
            return signInWithEmailAndPassword(auth,email,password)
        }

        const loginWithGoogle = (googleAuthProvider)=>{
            setLoading(true)
            return signInWithPopup(auth,googleAuthProvider)
        }

        const updateUser = (updateInfo)=>{
            return updateProfile(auth.currentUser,updateInfo)
        }

        const logOut =()=>{
            setLoading(true)
            return signOut(auth)
        }

        useEffect(()=>{
            const subscriber = onAuthStateChanged(auth , currentUser=>{
                setUser(currentUser)
                setLoading(false)
            })
            return () =>{
                subscriber()
            }
        },[])
    const userInfo ={
        user,
        loading,
        createUser,
        login,
        loginWithGoogle,
        updateUser,
        logOut,
        setLoading
    }
    return (
        <AuthProvider.Provider value={userInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;