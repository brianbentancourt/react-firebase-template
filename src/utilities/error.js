import { database } from '../config'
import firebase from 'firebase/app'
import { detectDeviceType } from './detectNavigator'

export default class Error {

    saveError(error) {
        try{
            return new Promise((resolve, reject)=>{
                firebase.auth().onAuthStateChanged(user => {

                    const err = {
                        code: error.code ? error.code : '',
                        error: error.message ? error.message : '',
                        date: new Date(),
                        device: detectDeviceType(),
                        user: user ? user.email : ''
                    }
        
                    database.collection("errors")
                    .doc()
                    .set(err)
                    .then(resolve(error))
                    .catch(e => reject(e))
                })
            })
        }catch{
        }
        return error
    }

}