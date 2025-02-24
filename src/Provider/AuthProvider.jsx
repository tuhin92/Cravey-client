import React, { createContext, useEffect, useState } from 'react';
import { 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut, 
    updateProfile 
} from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Add this function to check if user exists
    const checkUserExists = async (email) => {
        try {
            const response = await fetch(`http://localhost:5000/users/${email}`);
            const data = await response.json();
            return data.exists;
        } catch (error) {
            console.error('Error checking user:', error);
            return false;
        }
    };

    // Update the saveUser function
    const saveUser = async (user) => {
        try {
            // First check if user exists
            const userExists = await checkUserExists(user.email);
            
            if (userExists) {
                console.log('User already exists in database');
                return null;
            }

            const response = await fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    role: 'user',
                    createdAt: new Date(),
                }),
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error saving user:', error);
            throw error;
        }
    };

    // Create user with email and password
    const createUser = async (email, password, name, photoURL) => {
        setLoading(true);
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            if (result.user) {
                await updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photoURL || `https://ui-avatars.com/api/?name=${name}&background=0381A1&color=fff`
                });
                // Update the user state to include the new profile data
                const updatedUser = auth.currentUser;
                setUser(updatedUser);
                
                // Save user to database
                await saveUser(updatedUser);
            }
            return result;
        } finally {
            setLoading(false);
        }
    };

    // Update user profile
    const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL || `https://ui-avatars.com/api/?name=${name}&background=0381A1&color=fff`
        });
    };

    // Google sign in
    const googleSignIn = async () => {
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, googleProvider);
            if (result.user) {
                setUser(result.user);
                // Save Google user to database
                await saveUser(result.user);
            }
            return result;
        } finally {
            setLoading(false);
        }
    };

    // Sign in with email and password
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .finally(() => setLoading(false));
    };

    // Log out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Monitor auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // Update authInfo object
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile,
        // Add these helper functions
        getProfileImage: (user) => user?.photoURL || `https://ui-avatars.com/api/?name=${user?.displayName || 'User'}&background=0381A1&color=fff`,
        getDisplayName: (user) => user?.displayName || 'User'
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;