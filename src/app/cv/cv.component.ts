import * as cvData from '../../assets/cv.json';
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
  // curriculums: YearsStr[] = [

  //   { startDate: "2015", endDate: "2018", str: "Ph.D., University of Debrecen" },
  //   { startDate: "2013", endDate: "2015", str: "M.Sc., University of Debrecen" },
  //   { startDate: "2009", endDate: "2013", str: "B.Sc., University of Debrecen" },
  // ];

  // winningProps: YearsStr[] = [
  //   { startDate: "2021", endDate: "2025", str: "OTKA FK 138698: Hitchhiker's Guide to the waterbirds: seed dispersal effectiveness (PI)" },
  //   { startDate: "2021", endDate: "2025", str: "Ministerio de Ciencia e Innovación project (PID2020-112774GB-I00 / AEI / 10.13039/501100011033), Plant dispersal across Europe by WATERbird endoZOOchory: the role of waterbirds in the establishment of plant populations and connectivity between them.  " },
  // ];

  // schAwRcs: string[] = [
  //   "EFFS Award for the best PhD Dissertation in Freshwater Sciences 2017-2018: 1st place.",
  //   "MTA Bolyai scholarship 2019.",
  //   "Bolyai+ scholarship 2019.",
  //   "Centre for Ecological Research Researcher Award 2019.",
  //   "Bolyai+ scholarship 2020.",
  //   "MTA Environmental Science Youth Prize 2022",
  //   "New National Excellence Programme (10 months) 2017-2018",
  //   "Hungarian State Grant „Eötvös” Scholarship 2016 UK Liverpool",
  //   "University ofDebrecen Talent Management Program (DETEP) 2012-2015",
  //   "University of Debrecen Faculty of Science and Technology commemorative medal 2015",
  // ];

  // researchTrips: YearsStr[] = [
  //   { startDate: "2018.07.29.", endDate: "2018.08.07.", str: "Denmark, Macrophyte trait collection" },
  //   { startDate: "2017.04.09.", endDate: "2017.04.23.", str: "Roadside orchids of Crete, data collection" },
  //   { startDate: "2016.06.01.", endDate: "2016.08.31.", str: "Hungarian State Grant „Eötvös” Scholarship, UK, Liverpool John Moores University" },
  //   { startDate: "2015.11.01.", endDate: "2016.04.30.", str: "Erasmus+ Investigation of the endozoochor dispersal by waterbirds, Spain, Sevilla, Estación Biológica de Donana" },
  //   { startDate: "2015.06.01.", endDate: "2015.06.28.", str: "Orchids of Turkey, Turkey, Çanakkale" },
  //   { startDate: "2015 05.04.", endDate: "2015.05.31.", str: "Orchids of Turkey, Turkey, Çanakkale" },
  //   { startDate: "2015.04.01.", endDate: "2015.04.28.", str: "Investigation of the endozoochor dispersal by waterbirds, Spain, Sevilla, Estación Biológica de Donana" },
  //   { startDate: "2015.02.09.", endDate: "2015.03.08.", str: "Investigation of the endozoochor dispersal by waterbirds, Spain, Sevilla, Estación Biológica de Donana" },
  //   { startDate: "2014.11.15.", endDate: "2015.12.11.", str: "Investigation of the endozoochor dispersal by waterbirds, Spain, Sevilla, Estación Biológica de Donana" },
  //   { startDate: "2014.08.17.", endDate: "2014.09.03.", str: "Studyng of Oligotrophic lakes, Finnland, Helsinki" },
  //   { startDate: "2014 04.15.", endDate: "2014.05.05.", str: "Orchids of Turkey, Turkey, Çanakkale" },
  // ];

  // eduActivities: YearsStr[] = [
  //   { startDate: "2020", endDate: "", str: "Botanical field trip"},
  //   { startDate: "2019", endDate: "", str: "Plant systematics"},
  //   { startDate: "2015", endDate: "2017", str: "Plant systematics"},
  //   { startDate: "2015", endDate: "2016", str: "Botanical field trip"},
  // ];

  // tSAs: YearsStr[] = [
  //   { startDate: "2016", endDate: "2018", str: "Vizi Balázs (BSc student) - Tőkés récék propagulum terjesztése - az endozoochór vízipáfrány-terjedés első bizonyítéka" },
  //   { startDate: "2016", endDate: "2020", str: "Urgyán Renáta (BSc student) - Tőkés récék propagulum terjesztése a Velencei tavon" },
  //   { startDate: "2020", endDate: "", str: "Urgyán Renáta (MSc student) - Tőkés récék propagulum terjesztésének szezonalitása" },
  //   { startDate: "2020", endDate: "", str: "Tóth Pál (PhD student) - Vízimadarak általi elsődleges és másodlagos magterjedés" },
  //   { startDate: "2020", endDate: "", str: "Koleszár Balázs (PhD student, co-supervisor) - Vízimadarak általi antibiotikum rezisztens baktériumok terjesztése" },
  //   { startDate: "2022", endDate: "", str: "Iciar Jimenez (PhD student, co-supervisor) - Seed disersal by waterbirds" },
  // ];

  // refActs: YearsStr[] = [
  //   { startDate: "2023", endDate: "", str: "Ecography" },
  //   { startDate: "2023", endDate: "", str: "Biology Letters" },
  //   { startDate: "2023", endDate: "", str: "New Zealand Journal of Marine and Freshwater Research" },
  //   { startDate: "2023", endDate: "", str: "Ecography" },
  //   { startDate: "2023", endDate: "", str: "Royal Society Open Science" },
  //   { startDate: "2022", endDate: "", str: "Biology Letters" },
  //   { startDate: "2022", endDate: "", str: "Journal of Ecology" },
  //   { startDate: "2022", endDate: "", str: "Nature communications" },
  //   { startDate: "2022", endDate: "", str: "Frontiers in Ecology and Evolution" },
  //   { startDate: "2022", endDate: "", str: "Scientific Reports" },
  //   { startDate: "2021", endDate: "", str: "Scientific Reports" },
  //   { startDate: "2021", endDate: "", str: "Ecology and Evoltion" },
  //   { startDate: "2021", endDate: "", str: "Royal Society Open Science" },
  //   { startDate: "2020", endDate: "", str: "Plant Ecology" },
  //   { startDate: "2020", endDate: "", str: "Royal Society Open Science" },
  //   { startDate: "2020", endDate: "", str: "Journal of Natural History" },
  //   { startDate: "2020", endDate: "", str: "Ibis" },
  //   { startDate: "2019", endDate: "", str: "Acta Societatis Botanicorum Polonie" },
  //   { startDate: "2019", endDate: "", str: "Journal of Ecology" },
  //   { startDate: "2018", endDate: "", str: "Freshwater Science (The University of Chicago Press)" },
  //   { startDate: "2018", endDate: "", str: "Ecology and Evolution" },
  //   { startDate: "2018", endDate: "", str: "Kitabelia" },
  //   { startDate: "2018", endDate: "", str: "Frontiers in Ecology and Evolution" },
  // ];

  // refMems: YearsStr[] = [
  //   { startDate: "2018", endDate: "", str: "British Ecological Society" },
  //   { startDate: "2021", endDate: "", str: "SIL-International Society of Limnology" },
  //   { startDate: "2021", endDate: "", str: "CER member of the Workplace Animal Welfare Committee (MÁB)" },
  // ];

  // curriculums: YearsStr[] = [

  //   { startDate: "2015", endDate: "2018", str: "Ph.D., University of Debrecen" },
  //   { startDate: "2013", endDate: "2015", str: "M.Sc., University of Debrecen" },
  //   { startDate: "2009", endDate: "2013", str: "B.Sc., University of Debrecen" },
  // ];

  // winningProps: YearsStr[] = [
  //   { startDate: "2021", endDate: "2025", str: "OTKA FK 138698: Hitchhiker's Guide to the waterbirds: seed dispersal effectiveness (PI)" },
  //   { startDate: "2021", endDate: "2025", str: "Ministerio de Ciencia e Innovación project (PID2020-112774GB-I00 / AEI / 10.13039/501100011033), Plant dispersal across Europe by WATERbird endoZOOchory: the role of waterbirds in the establishment of plant populations and connectivity between them.  " },
  // ];

  // schAwRcs: string[] = [
  //   "EFFS Award for the best PhD Dissertation in Freshwater Sciences 2017-2018: 1st place.",
  //   "MTA Bolyai scholarship 2019.",
  //   "Bolyai+ scholarship 2019.",
  //   "Centre for Ecological Research Researcher Award 2019.",
  //   "Bolyai+ scholarship 2020.",
  //   "MTA Environmental Science Youth Prize 2022",
  //   "New National Excellence Programme (10 months) 2017-2018",
  //   "Hungarian State Grant „Eötvös” Scholarship 2016 UK Liverpool",
  //   "University ofDebrecen Talent Management Program (DETEP) 2012-2015",
  //   "University of Debrecen Faculty of Science and Technology commemorative medal 2015",
  // ];
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
