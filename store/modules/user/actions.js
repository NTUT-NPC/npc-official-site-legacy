import firebase from '~/firebase/app'
import * as types from './mutationTypes'

const actions = {
  async signUp({ commit }, user) {
    await firebase.auth().createUserWithEmailAndPassword(user.mail, user.password)
    try {
      storeInformationToFirebaseWith(user)
      updateUserInfoWith(user)

      console.log('successed to log up')
      commit(types.APP_LOGIN)
    } catch (error) {
      console.log(error.message)
    }
  },
  async logIn({ commit }, user) {
    await firebase.auth().signInWithEmailAndPassword(user.mail, user.password)
    try {
      commit(types.APP_LOGIN)
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      console.log('log in failed with ' + errorCode + ' ' + errorMessage)
      throw errorMessage
    }
  },
  async logInWithGoogle({ commit }) {
    const provider = firebase.googleProvider
    const result = await firebase.auth().signInWithPopup(provider)
    try {
      console.log('successed log in with google with ' + result.user)
      commit(types.APP_LOGIN)
    } catch (error) {
      alert('Oops . ' + error.message)
    }
  }
}

const updateUserInfoWith = async (user) => {
  await firebase.auth().currentUser.updateProfile({
    displayName: user.userName
  })

  try {
    console.log('update user profile successfully')
  } catch (error) {
    console.log('update user profile with error: ' + error)
  }
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
