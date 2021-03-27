import React, {useState} from 'react';
import {authMethods} from '../firebase/authMethods'

export const firebaseAuth = React.createContext()

const AuthProvider = (props) => {
  const [inputs, setInputs] = useState({email: '', password: ''})
  const [errors, setErrors] = useState([])
  const [token, setToken] = useState(null)

  const handleSignIn = () => {
    console.log('handleSignIn')
    authMethods.signin(inputs.email, inputs.password, setErrors, setToken)
    console.log(errors, token)

  }

  const handleSignOut = () => {
    authMethods.signout()
  }

  return (
    <firebaseAuth.Provider
    value={{
      handleSignIn,
      handleSignOut,
      inputs,
      setInputs,
      errors,
      token,
    }}>
      {props.children}

    </firebaseAuth.Provider>
  );
};

export default AuthProvider;
