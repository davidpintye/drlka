import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
  animations: [
    trigger('imageAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ImagesComponent implements OnInit{
  images: string[] = [
    "assets/IMG_2863.png",
    "assets/IMG_4651.png",
    "assets/IMG_6474.png",
    "assets/IMG_2925.png",
    "assets/IMG_4682.png",
    "assets/IMG_6485.png",
    "assets/IMG_3414.png",
    "assets/IMG_6115.png",
    "assets/IMG_6515.png",
    "assets/IMG_4312.png",
    "assets/IMG_6318.png",   
    "assets/IMG_4492.png",
    "assets/IMG_6473.png",   
  ];
  counter: number;
  image: string;
  interval = interval(8000);

  constructor() {
    const random = Math.floor(Math.random() * this.images.length);
    this.counter = 0;
    this.image = this.images[this.counter];
  }

  ngOnInit(): void {
    this.preloadImages;
    this.interval.subscribe(() => this.setCounter());
  }

  setCounter() {
    console.log(this.counter);
    this.image = this.images[this.counter];
    console.log(this.image);
    if(this.counter === this.images.length-1)
      this.counter = 0
    else
      this.counter++;
  }

  preloadImages() {
    for (const imageUrl of this.images) {
      const img = new Image();
      img.src = imageUrl;
    }
  }
}
