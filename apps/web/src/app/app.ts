// src/app/app.ts
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { DbService } from './services/db.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
})
export class App {
  output = '';

  constructor(private auth: AuthService, private db: DbService) {}

  async register() {
    try {
      const res = await this.auth.register('test@amon.cl', '123456');
      this.output = 'REGISTER OK: ' + res.user.uid;
    } catch (e: any) {
      this.output = 'REGISTER ERROR: ' + e.message;
    }
  }

  async login() {
    try {
      const res = await this.auth.login('test@amon.cl', '123456');
      this.output = 'LOGIN OK: ' + res.user.uid;
    } catch (e: any) {
      this.output = 'LOGIN ERROR: ' + e.message;
    }
  }

  async write() {
    try {
      const docRef = await this.db.pingWrite();
      this.output = 'WRITE OK: ' + docRef.id;
    } catch (e: any) {
      this.output = 'WRITE ERROR: ' + e.message;
    }
  }

  async read() {
    try {
      const rows = await this.db.listPings();
      this.output = JSON.stringify(rows, null, 2);
    } catch (e: any) {
      this.output = 'READ ERROR: ' + e.message;
    }
  }
}
