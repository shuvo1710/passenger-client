import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.init';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '../Loading/Loading';

export const AuthContext=createContext();

const auth=getAuth(app)

const UseContext = ({children}) => {
    const [user, setUser]=useState('')
    const [loader, setLoader]=useState(true)
    const googleProvider= new GoogleAuthProvider();
    const githubProvider= new GithubAuthProvider();

    // create User 
    const createUser=(email, password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

// update User 
const updateUserProfile=(name, photo)=>{
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo
    })
}

    // login user 
    const loginUser=(email, password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout User 
    const logout=()=>{
        return signOut(auth)
    }

    const googleLogin=()=>{
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogin=()=>{
        setLoader(true)
        return signInWithPopup(auth, githubProvider)
    }



    useEffect(()=>{
        const unsubscribed= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoader(false)
        })
        return ()=> unsubscribed();
    },[])
    const {data:bookingData=[], isLoading, refetch}=useQuery({
        queryKey:['bookingData', user?.email],
        queryFn: async()=>{
            const res=await fetch(`http://localhost:5000/bookingData?email=${user?.email}`)
            const data= await res.json()
            return data;
        }
    })
  
    
    const userInfo={
        user,
        createUser,
        loginUser,
        updateUserProfile,
        logout,
        googleLogin,
        loader,
        githubLogin,
        bookingData,
        isLoading, 
        refetch
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UseContext;