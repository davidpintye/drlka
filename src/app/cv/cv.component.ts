import * as cvData from '../../jsons/cv.json';
import { Component, OnInit } from '@angular/core';

interface YearsStr {
  startDate: string,
  endDate: string,
  str: string
}

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  data = cvData;
  curriculums!: YearsStr[];
  winningProps!: YearsStr[];
  schAwRcs!: string[];
  researchTrips!: YearsStr[];
  eduActivities!: YearsStr[];
  tSAs!: YearsStr[];
  refActs!: YearsStr[];
  refMems!: YearsStr[];

  constructor() { }

  ngOnInit(): void {
    this.curriculums = this.data.curriculums;
    this.winningProps = this.data.winningProps;
    this.schAwRcs = this.data.schAwRcs;
    this.researchTrips = this.data.researchTrips;
    this.eduActivities = this.data.eduActivities;
    this.tSAs = this.data.tSAs;
    this.refActs = this.data.refActs;
    this.refMems = this.data.refMems;
  }
}