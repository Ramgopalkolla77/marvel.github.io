import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { MarvelService } from '../mservices.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss'],
})
export class DasboardComponent implements OnInit {
  constructor(private service: MarvelService) {}

  ngOnInit(): void {
    let characters = this.service.getCharacters();
    let comics = this.service.getComics();
    let creators = this.service.getCreators();
    let events = this.service.getEvents();
    let series = this.service.getSeries();
    let stories = this.service.getStories();
    forkJoin([characters, comics, creators, events, series, stories]).subscribe(
      (Response) => {
        console.log(Response);
      }
    );
  }
}
