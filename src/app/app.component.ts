import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'app';

  constructor(iconReg: MatIconRegistry, sanitizer: DomSanitizer) {
    iconReg.addSvgIcon('logo', sanitizer.bypassSecurityTrustResourceUrl('./assets/logos/oa-logo.svg'));
    iconReg.addSvgIcon('paper-plane', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/paperplane.svg'));
    // iconReg.addSvgIcon('logo', sanitizer.bypassSecurityTrustResourceUrl('./assets/logos/oa-logo-elephant-v2.svg'));
    // iconReg.addSvgIcon('logo', sanitizer.bypassSecurityTrustResourceUrl('./assets/logos/oa-logo-arrow-circle-v1.svg'));
    // iconReg.addSvgIcon('logo', sanitizer.bypassSecurityTrustResourceUrl('./assets/logos/temp-logo.svg'));
  }
}
