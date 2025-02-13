import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
    firebaseConfig = {
        apiKey: "AIzaSyB-zH3VexSIMj03c4y8JK0rD9nEHCbxy5k",
        authDomain: "spelling-game-d703c.firebaseapp.com",
        projectId: "spelling-game-d703c",
        storageBucket: "spelling-game-d703c.firebasestorage.app",
        messagingSenderId: "174837114785",
        appId: "1:174837114785:web:3361cb1294720de5a90de0",
        measurementId: "G-Q3CLC94G79"
      };

  constructor() {
    initializeApp(this.firebaseConfig);
  }
}
