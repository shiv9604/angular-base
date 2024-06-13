import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  navigations: { label: string; url: string; access?: boolean }[] = [
    {
      label: 'Todos',
      url: '/home/practice/todos',
      access: false
    },
    {
      label: 'Hacker News',
      url: '/home/practice/hacker-news',
      access: false
    },
    {
      label: 'Ag-Grid',
      url: '/home/practice/ag-grid',
      access: false
    },
    {
      label: 'Deadline',
      url: '/home/practice/deadlines',
      access: true
    }
  ];
  constructor() {}
}
