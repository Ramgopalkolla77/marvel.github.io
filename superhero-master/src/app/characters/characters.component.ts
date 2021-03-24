import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../mservices.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  charactersData: any;
  constructor( private service: MarvelService) {}
  
    ngOnInit(): void {
      this.service.getCharacters().subscribe(
        (res) => {
          this.charactersData = res.data.results;
          console.log(this.charactersData);
        },
        (error) => {}
      );
    }

}
