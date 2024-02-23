import { GoogleLogin} from 'react-google-login';
import { gapi } from 'gapi-script';
import { useState, useEffect } from 'react';
import './login.css'
//import reactLogo from './assets/react.svg'

function Google() {

  const clientId = "903970944042-27p6mntuucj32e4nftg2v0ob9k5q2807.apps.googleusercontent.com"
  
  const [count, setCount] = useState(0)

  useEffect(( ) => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      })
    }
    gapi.load("client:auth2", initClient)
  }, [])

  const onSucess = (res) => {
    console.log('success', res)
  }

  const onFailure = (res) => {
    console.log('failed', res)
  }

  return (
    <GoogleLogin 
    clientId={clientId}
    buttonText="Sign in with Google"
    onSucess={onSucess}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'}
    isSignedIn={true}
    />
  );
}

export default Google;