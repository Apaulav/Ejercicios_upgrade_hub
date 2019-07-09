import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-component',
  templateUrl: './tabs-component.component.html',
  styleUrls: ['./tabs-component.component.sass']
})
export class TabsComponentComponent implements OnInit {
  public tabs: Tab[] = [
    {
      title: "tab 1",
      body: "1"
    },
    {
      title: "tab 2",
      body: "2"
    },
    {
      title: "tab 3",
      body: "3"
    },
    {
      title: "tab 4",
      body: "4"
    },
    {
      title: "tab 5",
      body: "5"
    }

  ]

  constructor() { }

  ngOnInit() {
  }

}

interface Tab {
  title: string;
  body: string;
}
