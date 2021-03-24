import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../mservices.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss'],
})
export class ComicsComponent implements OnInit {
  comicsData: any;
  constructor(private service: MarvelService) {}

  ngOnInit(): void {
    this.service.getComics().subscribe(
      (res) => {
        this.comicsData = res.data.results;
        console.log(this.comicsData);
      },
      (error) => {}
    );
  }
}
