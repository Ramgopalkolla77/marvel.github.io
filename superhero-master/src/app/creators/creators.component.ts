import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../mservices.service';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss'],
})
export class CreatorsComponent implements OnInit {
  creatorsData: any;
  constructor(private service: MarvelService) {}

  ngOnInit(): void {
    this.service.getCreators().subscribe(
      (res) => {
        this.creatorsData = res.data.results;
      },
      (error) => {}
    );
  }
}
