import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  isBImage = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.isBImage = true;
    }, 3000);
  }
}
