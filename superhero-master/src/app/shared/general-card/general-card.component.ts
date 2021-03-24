import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-general-card',
  templateUrl: './general-card.component.html',
  styleUrls: ['./general-card.component.scss'],
})
export class GeneralCardComponent implements OnInit {
  constructor(private matDialog: MatDialog) {}
  matDialogRef: MatDialogRef<DetailsComponent>;
  @Input() data;

  ngOnInit(): void {
    console.log(this.data);
  }

  detailsPopup(data) {
    this.matDialogRef = this.matDialog.open(DetailsComponent, {
      data: data,
      width:'70%',
      height:'70%',
    });
  }
}
