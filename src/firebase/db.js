import { db } from './firebaseConfig';
import { collection, addDoc, getDocs, query, where, deleteDoc, doc } from 'firebase/firestore';

// Add a new account to Firestore
export const addAccount = async (userId, accountData) => {
    const accountsRef = collection(db, 'accounts');
    return await addDoc(accountsRef, { ...accountData, userId });
};

// Fetch accounts for a specific user
export const getAccounts = async (userId) => {
    const q = query(collection(db, 'accounts'), where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Delete an account by document ID
export const deleteAccount = async (accountId) => {
    const accountDocRef = doc(db, 'accounts', accountId);
    return await deleteDoc(accountDocRef);
};