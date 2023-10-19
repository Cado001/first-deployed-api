import { cert, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { creds } from '../creds.js';

initializeApp({
    credential: cert(creds),
})

const db = getFirestore()

export default db
