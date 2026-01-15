// src/app/services/db.service.ts
import { Injectable } from '@angular/core';
import { initializeApp, getApps } from 'firebase/app';
import { environment } from '../../environments/environment';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
} from 'firebase/firestore';

@Injectable({ providedIn: 'root' })
export class DbService {
  private app = getApps().length ? getApps()[0] : initializeApp(environment.firebase);
  private db = getFirestore(this.app);

  async pingWrite() {
    const ref = collection(this.db, 'pings');
    return addDoc(ref, { createdAt: serverTimestamp(), ok: true });
  }

  async listPings() {
    const ref = collection(this.db, 'pings');
    const snap = await getDocs(ref);
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  }
}
