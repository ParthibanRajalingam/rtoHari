import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  navLinks: any[];

  constructor() {

    this.navLinks = [
        {
            label: 'Basic',
            link: 'basic',
            index: 0
        }, {
            label: 'Advanced',
            link: 'advanced',
            index: 1
        }
    ];
   }

  ngOnInit() {

  }

}
