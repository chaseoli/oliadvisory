import {
  Component,
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { StyleService } from '../shared/style.service';
import { ISiteInfo } from '../../shared/models/common.interface';
import { siteInfo } from '../../shared/constants/info.constant';

@Component({
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss'],
})
export class ComingSoonComponent implements OnInit {

  siteInfo: ISiteInfo;

  constructor(private styles: StyleService) {
    this.styles.addToolbarClasses(['hide']);
    this.styles.addFooterClasses(['hide']);
  }

  ngOnInit() {
    this.siteInfo = siteInfo;
  }

}
