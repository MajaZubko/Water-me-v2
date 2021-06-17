import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyCtuf-XzJm9I8TDzshPHlG7lsdIuFIXhUg',
  authDomain: 'water-me-6a5fb.firebaseapp.com',
  projectId: 'water-me-6a5fb',
  storageBucket: 'water-me-6a5fb.appspot.com',
  messagingSenderId: '52500084038',
  appId: '1:52500084038:web:9ad2d6abc5a42e64c42147',
  measurementId: 'G-HSLRSG5HJB',
});

const auth = firebase.auth();
const firestore = firebase.firestore();
