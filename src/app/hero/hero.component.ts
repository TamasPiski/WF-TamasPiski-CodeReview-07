import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
    private heroHeading: string;
    private heroText: string;
    private heroSmallText : string;
  constructor() { 
    this.heroHeading =  "Experience the";
    this.heroText =  "Best trip ever";
    this.heroSmallText =  "We are committed to deliver your dream journey";
  }


  ngOnInit() {
  }

}
