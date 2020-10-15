import { Component, OnInit } from '@angular/core';
import { StyleService } from '../shared/style.service';
import { WindowService } from '../../shared/window.service';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {

  seconds: number;

  constructor(
    private styles: StyleService,
    private win: WindowService
  ) {
    this.styles.addSiteClasses(['restrict-width', 'dark-bg', 'fullPageShadow']);
    this.styles.addToolbarClasses(['dark-theme', 'mat-elevation-z6']);
    this.styles.addFooterClasses(['dark-theme']);
  }

  ngOnInit() {

    this.seconds = 10;

    const timer = setInterval(() => {

      this.seconds = this.seconds - 1;

      console.log(this.seconds);

      if (this.seconds <= 0) {
        // this.seconds = 0;
        this.win.windowRef.location.href = 'http://meetu.ps/e/DX8fY/DKrtG/f';
        clearInterval(timer);
      }


    }, 1000);


  }

}
