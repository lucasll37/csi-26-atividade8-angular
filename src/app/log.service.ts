import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: string[] = [];

  add(log: string) {
    this.logs.push(log);
    console.log(`New log: ${log}`);
  }

  clear() {
    this.logs = [];
    console.log('All logs cleared!');
  }
}
