import {
  Component,
  HostListener,
  OnInit,
  Input
} from '@angular/core';

import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-bouncing-mouse',
  templateUrl: './bouncing-mouse.component.html',
  styleUrls: ['./bouncing-mouse.component.scss']
})
export class BouncingMouseComponent implements OnInit {

  @Input() theme: string;
  mouseBounce: boolean;
  mouseOpacity: string;
  color: string;

  constructor() { }

  ngOnInit() {

    if (this.theme === 'light') {
      this.color = '255,255,255';
    } else {
      this.color = '0,0,0';
    }

    this.updateMouse();

    setInterval(() => {
      this.mouseBounce = !this.mouseBounce;
    }, 1000);

    // console.log(window);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    this.updateMouse();
  }

  updateMouse() {
    const factor = 500;
    const val = ((factor - window.pageYOffset) / factor);
    this.mouseOpacity = 'rgba(' + this.color + ',' + (val > .75 ? .75 : val) + ')';
  }
}
