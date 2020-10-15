import { Component, OnInit } from '@angular/core';
import { StyleService } from '../shared/style.service';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-now',
  templateUrl: './now.component.html',
  styleUrls: ['./now.component.scss']
})
export class NowComponent implements OnInit {

  calendlyHeight: number;

  constructor(private styles: StyleService) {
    this.styles.addToolbarClasses(['dark-theme', 'mat-elevation-z6']);
    // this.styles.addSiteClasses(['restrict-width', 'dark-bg']);
    this.styles.addFooterClasses(['hide']);
  }

  ngOnInit() {
    this.setCalendlyHeight();
  }

  @HostListener('window:resize', ['$event'])
  onWindowScroll(event) {
    this.setCalendlyHeight();
  }

  setCalendlyHeight() {
    this.calendlyHeight = (window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight || 600) - 64;
  }

}
