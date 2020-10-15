// The Transaction component is used for sending single
// api transactions for which the response is a simple message.
// ie: unsubscribing from emails

import { Component, OnInit } from '@angular/core';
import { StyleService } from '../shared/style.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { UrlConstants } from '../../shared/constants/urls.constant';

@Component({
  selector: 'app-transaction',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.scss']
})
export class UnsubscribeComponent implements OnInit {

  msg: string;

  constructor(
    private styles: StyleService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.styles.addSiteClasses(['restrict-width', 'dark-bg', 'fullPageShadow']);
    this.styles.addToolbarClasses(['dark-theme', 'mat-elevation-z6']);
    this.styles.addFooterClasses(['dark-theme']);
  }

  ngOnInit() {
    this.msg = 'Please wait while we process your request.';
    this.sendRequest();
  }

  sendRequest() {

    // get data from route params
    const data = this.route.snapshot.params as { emailHash: string, mailingList: any, all: any };

    this.http.post(
      new UrlConstants().apiPrefix() + 'unsubscribe',
      {
        emailHash: data.emailHash,
        // converts csv of mailing lists names into an array of mailing list names
        mailingList: data.mailingList.split(','),
        // if 0 then false, if 1 true
        all: Boolean(Number(data.all))
      }
    ).map((res) => {
      console.log(res);
      this.msg = 'We have unsubscribed you from our mailing list.';
    }).subscribe();


  }

}


