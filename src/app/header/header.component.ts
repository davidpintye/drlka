import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  isLargeScreen = true;

  ngOnInit(): void {
    this.checkIfMobileView();    
  }

  private checkIfMobileView() {
    this.isLargeScreen = !(window.innerWidth <= 426);
  }
}
