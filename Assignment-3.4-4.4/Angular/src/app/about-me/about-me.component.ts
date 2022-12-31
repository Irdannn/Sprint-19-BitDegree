import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  paragraph1 = "This site is my first test of Angular";
  paragraph2 = "I was hoping it'd be more like vanilla node.js";
  paragraph3 = "Even though it isn't, I can still see the appeal now that I've messed around";
  constructor() { }
  ngOnInit(): void {
  }
}
