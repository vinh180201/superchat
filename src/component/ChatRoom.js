import React, { useRef, useState } from 'react';
import Message from './Message'

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import { getDatabase, ref, set } from "firebase/database";

import { useCollectionData, useDocument } from 'react-firebase-hooks/firestore';
import { doc, setDoc, getFirestore, collection, getDoc, getDocs, orderBy, query, addDoc } from "firebase/firestore"; 
import { firebaseApp, firestore } from '../firebase'

const createNewRoom = async () => {
  await addDoc(collection(firestore, "users"), {
    fullname: "",
    icon: "",
    text: "",
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });
}

const ChatRoom = (props) => {
  const a = collection(firestore, props.project_name)
  const [aaaaa] = useCollectionData(query(a, orderBy('createdAt')), { idField: 'id' });
  console.log(aaaaa)

  const dummy = useRef();
  const [formValue, setFormValue] = useState('');
  const messagesRef = collection(firestore, 'messages');
  const [messages] = useCollectionData(query(messagesRef, orderBy('createdAt')), { idField: 'id' });

  const sendMessage = async (e) => {
    e.preventDefault();

    await addDoc(collection(firestore, "messages"), {
      fullname: "",
      icon: "",
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  if(messages) {
    return (
      <>
        <main>        
          {messages.map((msg, index) => {
            return(
              <Message key={index} message={msg} />
            )
          })}
          <span ref={dummy}></span>
        </main>
        <form onSubmit={sendMessage}>
          <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
          <button type="submit" disabled={!formValue}>🕊️</button>
        </form>
      </>
    )
  }
  else {
    return(<></>)
  }

}

export default ChatRoom;