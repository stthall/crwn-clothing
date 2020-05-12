import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA2Dk5hv_sxBT73FiITccSy4kNn1YAMdco",
    authDomain: "crwn-db-bdd61.firebaseapp.com",
    databaseURL: "https://crwn-db-bdd61.firebaseio.com",
    projectId: "crwn-db-bdd61",
    storageBucket: "crwn-db-bdd61.appspot.com",
    messagingSenderId: "279002003467",
    appId: "1:279002003467:web:2ee6ae7628f0cf5729ef0e"
  };

firebase.initializeApp(firebaseConfig)
export const firestore = firebase.firestore()
export const auth = firebase.auth()

export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if(!userAuth) return
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    if(!snapShot.exists){
        const {displayName, email} = userAuth
        const createdAt = new Date()
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(e){
            console.log('error creating user',e.message)
        }
    }
    return userRef;
}


const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = ()=>auth.signInWithPopup(provider) 

export default firebase