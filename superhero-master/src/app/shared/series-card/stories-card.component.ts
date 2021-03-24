import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories-card',
  templateUrl: './stories-card.component.html',
  styleUrls: ['./stories-card.component.scss'],
})
export class StoriesCardComponent implements OnInit {
  constructor() {}

  @Input() data;

  ngOnInit(): void {}
}
