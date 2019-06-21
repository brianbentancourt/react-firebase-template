import firebase from 'firebase/app';
import ErrorLog from './error';
const Error = new ErrorLog()

export default class Login {

    loginWithEmail(user, success, onError) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(result => {
                success(result.user)
            })
            .catch(error => onError(Error.saveError(error)))
    }

    loginWithFacebook(success, onError) {
        let provider = new firebase.auth.FacebookAuthProvider()
        try {
            firebase.auth().signInWithPopup(provider)
                .then(result => {
                    success(result.user)
                })
                .catch(error => onError(Error.saveError(error)))
        } catch{
            console.log('retry login with facebook')
            provider = new firebase.auth.FacebookAuthProvider()
            firebase.auth().signInWithPopup(provider)
                .then(result => {
                    success(result.user)
                })
                .catch(error => onError(Error.saveError(error)))
        }

    }

    loginWithGoogle(success, onError) {
        let provider = new firebase.auth.GoogleAuthProvider()
        try {
            firebase.auth().signInWithPopup(provider)
                .then(result => {
                    success(result.user)
                })
                .catch(error => onError(Error.saveError(error)))
        } catch{
            console.log('retry login with google')
            provider = new firebase.auth.GoogleAuthProvider()
            firebase.auth().signInWithPopup(provider)
                .then(result => {
                    success(result.user)
                })
                .catch(error => onError(Error.saveError(error)))
        }
    }

    logOut(e) {
        return firebase.auth().signOut()
            .then()
            .catch(error => Error.saveError(error))
    }


}


