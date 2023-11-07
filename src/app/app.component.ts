import { Component } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <button (click)="addLog()">Add Log</button>
      <button (click)="clearLog()">Clear Log</button>
    </div>
  `
})
export class AppComponent {
  constructor(private logService: LogService) {}

  addLog() {
    this.logService.add('This is a log entry');
  }

  clearLog() {
    this.logService.clear();
  }
}
