import { database } from '../config'
import ErrorLog from './error'
const Error = new ErrorLog()

export default class Message {
    constructor() {
        this.Message = ''
        this.User = ''
        this.Date = new Date()

    }

    getMessages() {
        return new Promise((resolve, reject) => {
            database.collection("messages")
                .get()
                .then(querySnapshot => resolve(querySnapshot.docs))
                .catch(error => reject(Error.saveError(error)))
        })
    }

    getMessagesRealtime(updateList){
        database.collection("messages")
        .orderBy("Date", "asc")
        .onSnapshot(querySnapshot => updateList(querySnapshot.docs))
    }

    getMessage(id) {
        return new Promise((resolve, reject) => {
            database.collection("messages")
                .doc(id)
                .get()
                .then(doc => resolve(doc.data()))
                .catch(error => reject(Error.saveError(error)))
        })
    }

    saveMessage(message) {
        message.Date = new Date()
        return new Promise((resolve, reject) => {
            database.collection("messages")
                .doc()
                .set(message, { merge: true })
                .then(result => resolve(result))
                .catch(error => reject(Error.saveError(error)))
        })
    }
}