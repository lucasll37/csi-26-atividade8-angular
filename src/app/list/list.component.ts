import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: string[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.items = this.dataService.getData();
  }

  addItem(newItem: string): void {
    this.dataService.addData(newItem);
  }

  removeItem(index: number): void {
    this.dataService.removeData(index);
  }
}
