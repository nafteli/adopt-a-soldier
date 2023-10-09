// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG0UlC_SeCOtQTwoTZlyz9pcTTpKsAeps",
  authDomain: "adoptsoldier-3c554.firebaseapp.com",
  projectId: "adoptsoldier-3c554",
  storageBucket: "adoptsoldier-3c554.appspot.com",
  messagingSenderId: "197049679371",
  appId: "1:197049679371:web:630248afdeb13612ded10e",
  measurementId: "G-Z51X949SMR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getAnalytics(app);

export const addData = async (collectionName, data) => {
  try {
    const docRef = await db.collection(collectionName).add(data);
    return docRef.id; // Return the newly generated document ID
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};

export const readData = async (collectionName) => {
  try {
    const snapshot = await db.collection(collectionName).get();
    const data = [];
    snapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data;
  } catch (error) {
    console.error("Error reading documents: ", error);
    throw error;
  }
};

export const updateData = async (collectionName, documentId, newData) => {
  try {
    await db.collection(collectionName).doc(documentId).update(newData);
    return true; // Success
  } catch (error) {
    console.error("Error updating document: ", error);
    throw error;
  }
};

export const deleteData = async (collectionName, documentId) => {
  try {
    await db.collection(collectionName).doc(documentId).delete();
    return true; // Success
  } catch (error) {
    console.error("Error deleting document: ", error);
    throw error;
  }
};
