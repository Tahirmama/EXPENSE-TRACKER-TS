import React from "react";
import Components from './component';
import './App.css';
import firebase from "./firebase";

function App() {
const messaging = firebase.messaging();
messaging.requestPermission().then(()=>{
  return messaging.getToken()
}).then ((token:any)=>{
  console.log('token',token)
})
  return (
    <div>

    <Components />
  </div>
  );
}

export default App;
