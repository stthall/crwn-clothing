import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config={
    apiKey: "AIzaSyA2Dk5hv_sxBT73FiITccSy4kNn1YAMdco",
    authDomain: "crwn-db-bdd61.firebaseapp.com",
    databaseURL: "https://crwn-db-bdd61.firebaseio.com",
    projectId: "crwn-db-bdd61",
    storageBucket: "crwn-db-bdd61.appspot.com",
    messagingSenderId: "279002003467",
    appId: "1:279002003467:web:2ee6ae7628f0cf5729ef0e"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firstore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = ()=>auth.signInWithPopup(provider) 

export default firebase