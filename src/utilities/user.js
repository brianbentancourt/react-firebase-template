import firebase from 'firebase/app'
import { database } from '../config'
import ErrorLog from './error'
const Error = new ErrorLog()

export default class Usuario {
    constructor() {
        this.Active = true
        this.Name = ''
        this.LastName = ''
        this.Email = ''
        this.Address = ''
        this.userLogged = null

        firebase.auth().onAuthStateChanged(user => {
            this.userLogged = user
        })
    }

    

    getUserLogged() {
        const _this = this
        return new Promise((resolve, reject) => {
            const unsubscribe = firebase.auth().onAuthStateChanged(user => {
                unsubscribe()
                _this.userLogged = user
                resolve(user)
            }, reject)
        })
    }


    getUsers() {
        return new Promise((resolve, reject) => {
            database.collection("users")
                .get()
                .then(querySnapshot => resolve(querySnapshot.docs))
                .catch(error => reject(Error.saveError(error)))
        })
    }

    getUser(uid) {
        return new Promise((resolve, reject) => {
            database.collection("users")
                .doc(uid)
                .get()
                .then(doc => resolve(doc.data()))
                .catch(error => reject(Error.saveError(error)))
        })
    }

    

    saveUser(user) {
        return new Promise((resolve, reject) => {
            database.collection("users")
                .doc(user.uid)
                .set(user, {merge: true})
                .then(result => resolve(result))
                .catch(error => reject(Error.saveError(error)))
        })
    }

    

}