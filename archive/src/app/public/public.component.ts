import { Component, OnInit, OnDestroy } from '@angular/core';
import { StyleService, IPageStyles } from './shared/style.service';
import { ISiteInfo } from '../shared/models/common.interface';
import { siteInfo } from '../shared/constants/info.constant';
import { Subscription } from 'rxjs/Subscription';
import { PhonePipe } from '../shared/pipes/phone.pipe';
import { Router } from '@angular/router';
import { NavigationEnd, Event } from '@angular/router';

@Component({
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
  // pipes: [PhonePipe]
})
export class PublicComponent implements OnInit, OnDestroy {

  watchRouter: Subscription;
  title = 'public';
  styles: IPageStyles;
  siteInfo: ISiteInfo;

  constructor(private router: Router, private stylesService: StyleService) { }

  ngOnInit() {

    // console.log('public styles', this.stylesService.getStyling());

    this.siteInfo = siteInfo;

    // // fires on init load
    this.styles = this.stylesService.getStyling();

    // // fires on navigation event
    this.watchRouter = this.router.events.subscribe((val: Event) => {
      if (val instanceof NavigationEnd) {
        // console.log('NavigationEnd from service:', val);
        this.styles = this.stylesService.getStyling();
      }
    });

    // console.log(this.watcher);

  }

  ngOnDestroy() {
    // console.log(this.watcher);
    // stop watching router events
    this.watchRouter.unsubscribe();
    // console.log(this.watcher);
  }

}
