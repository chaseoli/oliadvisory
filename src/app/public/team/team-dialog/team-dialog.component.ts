
import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-team-dialog',
    templateUrl: 'team-dialog.component.html',
    styleUrls: ['./team-dialog.component.scss'],
})
export class TeamDialogComponent implements OnInit {

    public model: any;

    constructor(
        public dialogRef: MatDialogRef<TeamDialogComponent>,
        public dialog: MatDialog,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {

        this.model = data.model;
    }

    ngOnInit() {
    }

    onNoClick(): void {
        this.dialogRef.close({ action: 'closed' });
    }

}
