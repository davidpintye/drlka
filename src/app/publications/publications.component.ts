import * as pubListArray from '../../jsons/pub.json';
import { Component, OnInit } from '@angular/core';
import { Publication } from '../classes/article';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
  data = pubListArray;
  yearArray!: { year: number, publications: Publication[] }[];

  ngOnInit(): void {
    this.yearArray = this.data.pubData as { year: number, publications: Publication[] }[];
  }
}
