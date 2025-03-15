import { bootstrapApplication } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { appConfig } from './app/app.config'; // Import appConfig

bootstrapApplication(AppComponent, {
  ...appConfig, // Use the existing application config
  providers: [
    ...appConfig.providers, // Spread the existing providers from `app.config.ts`
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
});
