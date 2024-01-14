import * as newsData from '../../jsons/news.json';
import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  data = newsData;
  news: any[] = [];
  
  constructor() {
    for (let i = 0; i < this.data.news.length; i++) {
      let aNews = {...this.data.news[i], isClose: true};
      this.news.push(aNews);
    }    
  }
}
