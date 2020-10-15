import { Component, OnInit, HostListener } from '@angular/core';
import { StyleService } from '../shared/style.service';


interface IServiceOffering {
  name: string;
  desc: string;
}


@Component({
  selector: 'app-creative',
  templateUrl: './creative.component.html',
  styleUrls: ['./creative.component.scss']
})
export class CreativeComponent implements OnInit {

  creative: IServiceOffering[];

  constructor(private styles: StyleService) {
    this.styles.addSiteClasses(['restrict-width', 'dark-bg', 'fullPageShadow']);
    this.styles.addToolbarClasses(['dark-theme', 'mat-elevation-z6']);
    this.styles.addFooterClasses(['dark-theme']);
  }

  ngOnInit() {
    this.initServices();
  }

  initServices() {

    this.creative = [
      {
        name: 'Digital Strategy',
        desc: 'Bring powerful, brilliant, creative ideas to life. The kind of ideas that catch you off guard. Or make you smile.' +
          ' We deliver them to the right people in the most innovative and effective way.'
      },
      {
        name: 'Social',
        desc: 'Monitoring, engagement, influence, account and community management.'
      }
      // {
      //   name: 'Video',
      //   desc: 'Video capture, editing, voice-overs, animations, casting, and scripting.'
      // }
    ];

  }


}


