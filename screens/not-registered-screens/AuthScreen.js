import React from 'react'
import * as AppleAuthentication from 'expo-apple-authentication';

const AuthScreen = () => {
  return (
    <>
    <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_UP}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={100}
        style={{ width: 200, height: 50, top: 350 }}
        onPress={async () => {
          try {
            const credential = await AppleAuthentication.signInAsync({
              requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL
              ]
            })
            console.log(credential)
            //signed in
          } catch (e) {
            if (e.code === 'ERR_CANCELED') {

            } else {

            }
          } 
      }}
      />
    </>
  )
}

export default AuthScreen