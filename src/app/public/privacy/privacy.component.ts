import { Component, OnInit } from '@angular/core';
import { StyleService } from '../shared/style.service';
import { siteInfo } from '../../shared/constants/info.constant';
import { ISiteInfo } from '../../shared/models/common.interface';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  siteInfo: ISiteInfo;

  constructor(private styles: StyleService) {
    this.styles.addSiteClasses(['restrict-width', 'dark-bg', 'fullPageShadow']);
    this.styles.addToolbarClasses(['dark-theme', 'mat-elevation-z6']);
    this.styles.addFooterClasses(['dark-theme']);
  }

  ngOnInit() {
    this.siteInfo = siteInfo;
  }

}
