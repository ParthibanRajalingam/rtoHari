import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
 navLinks: any[];
  constructor() {

    this.navLinks = [
        {
            label: 'Home',
            link: '',
            index: 0
        }, {
            label: 'About Us',
            link: 'about',
            index: 1
        },
        {
            label: 'Contact Us',
            link: 'contact',
            index: 2
        },
        {
            label: 'Blogs',
            link: 'contact',
            index: 2
        }
    ];

  }

  ngOnInit() {
  }

}
