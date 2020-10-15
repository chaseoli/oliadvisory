
import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { siteInfo } from '../../../shared/constants/info.constant';
import { ISiteInfo } from '../../../shared/models/common.interface';
import { GetStartedModel } from '../../../shared/models/get-started.model';
import { NgForm } from '@angular/forms';
import { SubmitMessageDialogComponent } from '../submit-message/submit-message.component';
import { ReCaptchaInvisibleDirective } from '../recaptcha/recaptcha-invisible.directive';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { UrlConstants } from '../../../shared/constants/urls.constant';

@Component({
    selector: 'app-get-started-dialog',
    templateUrl: 'get-started-dialog.component.html',
    styleUrls: ['./get-started-dialog.component.scss'],
})
export class GetStartedDialogComponent implements OnInit {

    @ViewChild('recaptcha') recaptcha: ReCaptchaInvisibleDirective;

    siteInfo: ISiteInfo;
    model: GetStartedModel;

    constructor(
        public dialogRef: MatDialogRef<GetStartedDialogComponent>,
        public dialog: MatDialog,
        private el: ElementRef
    ) {

        this.model = new GetStartedModel();
        // this.recaptchaRendered = false;
        // this.recaptchaRendered = true;
    }

    ngOnInit() {
        this.siteInfo = siteInfo;
        // console.log('recap dir:', this.recaptcha);
    }

    submit(form: NgForm) {
        if (form.valid) {
            // post to firebase recaptcha function
            // this.recaptcha.submit('contacts', this.model);
            this.recaptcha.submit('contacts', this.model, new UrlConstants().getStarted, this.dialogRef);
        }
    }

    onNoClick(): void {
        this.dialogRef.close({ action: 'closed' });
    }

}
