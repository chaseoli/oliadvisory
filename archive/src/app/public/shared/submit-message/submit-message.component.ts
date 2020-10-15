import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';


@Component({
    selector: 'app-submit-message-dialog',
    templateUrl: 'submit-message.component.html',
    styleUrls: ['./submit-message.component.scss'],
})
export class SubmitMessageDialogComponent implements OnInit {

    // success: boolean;
    title: string;
    msg: string;

    constructor(
        public dialogRef: MatDialogRef<SubmitMessageDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {

        // console.log(data);

        this.title = data.title;
        this.msg = data.msg;
    }

    ngOnInit() { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
