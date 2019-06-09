import firebase from '~/firebase/app'
import * as types from './mutationTypes'

const actions = {
  signUp({ commit }, user) {
    firebase.auth().createUserWithEmailAndPassword(user.mail, user.password)
      .then(() => {
        storeInformationToFirebaseWith(user)
        updateUserInfoWith(user)

        console.log('successed to log up')
        commit(types.APP_LOGIN)
      }).catch((error) => {
        console.log(error.message)
      })
  },
  logIn({ commit }, user) {
    firebase.auth().signInWithEmailAndPassword(user.mail, user.password)
      .then(() => {
        console.log('successed to log in')
        commit(types.APP_LOGIN)
      }).catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log('log in failed with ' + errorCode + ' ' + errorMessage)
      })
  },
  logInWithGoogle({ commit }) {
    const provider = firebase.googleProvider

    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        console.log('successed log in with google with ' + result.user)
        commit(types.APP_LOGIN)
      }).catch((error) => {
        alert('Oops . ' + error.message)
      })
  }

}

const updateUserInfoWith = (user) => {
  firebase.auth().currentUser.updateProfile({
    displayName: user.userName
  }).then(() => {
    console.log('update user profile successfully')
  }).catch((error) => {
    console.log('update user profile with error: ' + error)
  })
}

const storeInformationToFirebaseWith = (user) => {
  const storage = firebase.storage()
  const storageRef = storage.ref()

  firebase.auth().onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
      const uid = firebaseUser.uid
      const ref = storageRef.child('user_ids').child(uid)

      ref.child('mail').putString(user.mail).then(() => { console.log('update user mail') })
      ref.child('userNmae').putString(user.userName).then(() => { console.log('update user name') })
    } else {
      // TODO: handle no user behavior
    }
  })
}

export default actions
