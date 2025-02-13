import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics, ScreenTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "spelling-game-d703c", appId: "1:174837114785:web:3361cb1294720de5a90de0", storageBucket: "spelling-game-d703c.firebasestorage.app", apiKey: "AIzaSyB-zH3VexSIMj03c4y8JK0rD9nEHCbxy5k", authDomain: "spelling-game-d703c.firebaseapp.com", messagingSenderId: "174837114785", measurementId: "G-Q3CLC94G79" })), provideAnalytics(() => getAnalytics()), ScreenTrackingService, provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())]
};
