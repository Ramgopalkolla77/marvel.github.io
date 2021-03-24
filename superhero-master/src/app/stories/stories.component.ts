import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../mservices.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  storiesData: any;
  constructor(private service: MarvelService) {}

  ngOnInit(): void {
    this.service.getStories().subscribe(
      (res) => {
        this.storiesData = res.data.results;
        console.log(this.storiesData);
      },
      (error) => {}
    );
  }

}

