import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  item: any;
  constructor(
    private _mdr: MatDialogRef<DetailsComponent>,
    @Inject(MAT_DIALOG_DATA) data: string
  ) {
    this.item = data;
  }

  ngOnInit(): void {
    console.log(this.item);
    
  }
}
