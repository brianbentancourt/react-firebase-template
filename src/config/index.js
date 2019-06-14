import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

const config = {
    apiKey: "yourApiKey",
    authDomain: "yourProject.firebaseapp.com",
    databaseURL: "https://yourproject.firebaseio.com",
    projectId: "yourProject",
    storageBucket: "yourProject.appspot.com",
    messagingSenderId: "yourID",
    appId: "yourID"
}

firebase.initializeApp(config)


export const database = firebase.firestore()

export const auth = firebase.auth()

export const storage = firebase.storage()