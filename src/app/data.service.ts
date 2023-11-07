import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: string[] = ['Item 1', 'Item 2', 'Item 3'];

  constructor() { }

  getData(): string[] {
    return this.data;
  }

  addData(item: string): void {
    this.data.push(item);
  }

  removeData(index: number): void {
    this.data.splice(index, 1);
  }
}
