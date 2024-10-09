import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

// Register a new user
export const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

// Login an existing user
export const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

// Logout the current user
export const logout = () => {
    return signOut(auth);
};

// Listen to auth state changes
export const authListener = (callback) => {
    return onAuthStateChanged(auth, callback);
};
