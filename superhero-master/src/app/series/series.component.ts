import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../mservices.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  seriesData: any;
  constructor(private service: MarvelService) {}

  ngOnInit(): void {
    this.service.getSeries().subscribe(
      (res) => {
        this.seriesData = res.data.results;
        console.log(this.seriesData);
      },
      (error) => {}
    );
  }
}
