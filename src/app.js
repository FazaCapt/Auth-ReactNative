import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './component/common';


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
                <Text>An App!</Text>
            </View>

        );
    }
}

export default App;