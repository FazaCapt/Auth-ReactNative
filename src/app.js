import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import  LoginForm  from './components/LoginForm';




class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCEFANZ88fmgBEPWuCfABLzdzRhAqEGCu4",
            authDomain: "authentication-29e5e.firebaseapp.com",
            databaseURL: "https://authentication-29e5e.firebaseio.com",
            projectId: "authentication-29e5e",
            storageBucket: "authentication-29e5e.appspot.com",
            messagingSenderId: "787425012179"
          }
        )
    }

    render() {
        return(
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>

        );
    }
}

export default App;