import { Component, OnInit, HostListener } from '@angular/core';
import { StyleService } from '../shared/style.service';

interface IServiceOffering {
  name: string;
  desc: string;
}

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  technology: IServiceOffering[];

  constructor(private styles: StyleService) {
    this.styles.addSiteClasses(['restrict-width', 'dark-bg', 'fullPageShadow']);
    this.styles.addToolbarClasses(['dark-theme', 'mat-elevation-z6']);
    this.styles.addFooterClasses(['dark-theme']);
  }

  ngOnInit() {
    this.initServices();
  }

  initServices() {

    this.technology = [
      {
        name: 'Mobile',
        desc: 'Using cross-platform technologies, we build mobile apps for IOS and Android smartphones.'
      },
      {
        name: 'Web',
        desc: 'Design engaging user experiences utilizing cutting-edge web frameworks.' +
          ' We code responsive websites and web apps that are integrated into your business\'s workflow. '
      },
      {
        name: 'Server / Desktop Applications',
        desc: 'More than just development. We build secure, agile, and predictable solutions' +
          ' that scale. We help manage big data or turn your concept into code.'
      },

      {
        name: 'API Integrations',
        desc: 'APIs are third-party technology that enables additional capabilities' +
          ' of existing desktop, web, and mobile apps.We build custom integrations with' +
          ' third - party APIs into your existing sites and apps.'
      },
      {
        name: 'Blockchain',
        desc: 'Blockchain-based technology is disrupting the way we secure and manage data.' +
          ' We develop on popular blockchain platforms to move money across borders quickly, reliably,' +
          ' and for fractions of a penny, or to build applications that run precisely as programmed' +
          ' without any possibility of downtime, censorship, fraud or third-party interference.'
      },
      {
        name: 'Search Engine Optimization',
        desc: 'Improve the online visibility and the searchability of your website, so that you or' +
          ' your business get connected to more relevant customers.'
      },
    ];

  }

}
