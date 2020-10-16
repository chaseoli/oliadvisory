import {
  Component,
  HostListener,
  OnInit,
  Inject,
  AfterViewInit
} from '@angular/core';
import * as _ from 'lodash';
import { StyleService } from '../shared/style.service';
import { siteInfo } from '../../shared/constants/info.constant';
import { ISiteInfo } from '../../shared/models/common.interface';
import { dark_theme } from '../../shared/style/material-design-color-pallete';
import { MatDialog } from '@angular/material/dialog';
import { GetStartedDialogComponent } from '../shared/get-started-dialog/get-started-dialog.component';
import { SubmitMessageDialogComponent } from '../shared/submit-message/submit-message.component';

import { TeamDialogComponent } from './team-dialog/team-dialog.component';
import { UrlConstants } from '../../shared/constants/urls.constant';
import { HttpClient } from '@angular/common/http';
import {
  trigger,
  transition,
  animate,
  keyframes,
  state,
  style
} from '@angular/animations';
import { map } from 'rxjs/operators';
import {faTwitter, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

interface IStatements {
  title: string;
  desc: string;
  icon: string;
  state: string;
  btnText: string;
  link: string;
  // img: string; not changing
}

interface ITeamMember {
  first: string;
  last: string;
  cert: string;
  title: string;
  blurb: string;
  about: string;
  state: string;
  avatar: string;
  facebook: string;
  twitter: string;
  linkedin: string;
  instagram: string;
  internal_calendar: string; // for using routerLink to internal app calendar page ie: 'oliadvisory.com/now'
  external_calendar: string; // for using href to external calendar link ie: 'https://calendly.com/chaseoliphant/60min/04-05-2018'
}

interface IBeliefs {
  html: string;
  author: string;
  state: string;
}

@Component({
  // selector: 'app-root',
  templateUrl: './team.component.html',
  // encapsulation: ViewEncapsulation.None,
  styleUrls: ['./team.component.scss'],
  animations: [
    trigger('focusPanel', [
      state('inactive',
        style({
          transform: 'scale(0.8)',
          // borderBottom: 'solid 1px #76ff03',
          // backgroundColor: 'red',
          opacity: 0
        })
      ),
      state('active',
        style({
          // IMPORTANT: don't scale larger than "1" or otherwise
          // xs or sm screen will not appear correctly
          transform: 'scale(1)',
          // borderBottom: 'solid 10px #76ff03',
          // backgroundColor: 'blue',
          opacity: 1
        })
      ),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ]),
    trigger('borderBottom', [
      state('inactive',
        style({
          // transform: 'scale(1)',
          borderBottom: 'solid 10px transparent'
          // backgroundColor: 'red',
          // opacity: 0
        })
      ),
      state('active',
        style({
          // transform: 'scale(1.1)',
          borderBottom: 'solid 10px ' + dark_theme.accent.default
          // backgroundColor: 'blue',
          // opacity: 1
        })
      ),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ]),
    trigger('beliefs', [
      state('inactive',
        style({
          opacity: 0,
          display: 'none',
          transform: 'translate(-1000px,0px)'
        })
      ),
      state('active',
        style({
          opacity: 1,
          display: 'inherit',
          transform: 'translate(0px,0px)'
        })
      ),
      transition('inactive => active',
        animate('1000ms ease-in'
        )),
      transition('active => inactive',
        animate('500ms ease-out',
          keyframes([
            style({
              opacity: 1,
              display: 'inherit',
              transform: 'translate(-95px,0px)'
            }),
            style({
              opacity: 1,
              display: 'inherit',
              transform: 'translate(-155px,0px)'
            }),
            style({
              opacity: 1,
              display: 'inherit',
              transform: 'translate(-185px,0px)'
            }),
            style({
              opacity: 1,
              display: 'inherit',
              transform: 'translate(-195px,0px)'
            }),
            style({
              opacity: 1,
              display: 'inherit',
              transform: 'translate(-200px,0px)'
            }),
            style({
              opacity: 1,
              display: 'inherit',
              transform: 'translate(-203px,0px)'
            }),
            style({
              opacity: 1,
              display: 'inherit',
              transform: 'translate(-205px,0px)'
            }),
            style({
              opacity: 1,
              display: 'inherit',
              transform: 'translate(-205px,0px)'
            }),
            style({
              opacity: 0,
              display: 'none',
              transform: 'translate(1000px,0px)'
            })
          ])
        ))
    ]),
    trigger('teamOverlay', [
      state('active',
        style({
          transform: 'scale(1)',
          opacity: 1
        })
      ),
      state('inactive',
        style({
          transform: 'scale(0)',
          opacity: 0
        })
      ),
      transition('inactive => active',
        animate('800ms ease-in',
          keyframes([
            style({
              transform: 'scale(0)',
              opacity: 0
            }),
            style({
              transform: 'scale(1.2)',
              opacity: 1
            }),
            style({
              transform: 'scale(.8)',
              opacity: 1
            }),
            style({
              transform: 'scale(1.05)',
              opacity: 1
            }),
            style({
              transform: 'scale(.95)',
              opacity: 1
            }),
            style({
              transform: 'scale(1)',
              opacity: 1
            })
          ])
        )
      ),
      transition('active => inactive',
        animate('500ms ease-out')
      )
    ])
  ]
})
export class TeamComponent implements OnInit {

  twitter = faTwitter
  linkedIn = faLinkedinIn
  faCoffee = faCoffee;

  statementIdx: number;
  statements: IStatements[];
  siteInfo: ISiteInfo;
  team: ITeamMember[];
  beliefs: IBeliefs[] = [];
  beliefIdx: number;
  beliefsPaused: boolean;
  beliefWait: any;
  mouseBounce: boolean;
  mouseOpacity: string;
  arr = Array;
  reviews: any; // yelp reviews
  private urls: UrlConstants;
  private biz: any; // yelp biz

  constructor(
    private styles: StyleService,
    public dialog: MatDialog,
    private http: HttpClient
  ) {
    this.setAnnouncement();

    this.urls = new UrlConstants();

    this.styles.addSiteClasses(['restrict-width', 'dark-bg', 'fullPageShadow']);
    this.styles.addToolbarClasses(['transparent', 'dark-theme']);
    this.styles.addFooterClasses(['dark-theme']);
  }

  ngOnInit() {
    this.beliefsPaused = false;
    this.statementIdx = 0;
    this.siteInfo = siteInfo;
    this.initTeam();
    this.initBeliefs();

    this.updateMouse();

    this.yelpReviews();

    setInterval(() => {
      this.mouseBounce = !this.mouseBounce;
    }, 1000);

    // setTimeout(() => {
    //   this.dialogGetStarted();
    // }, 750);

    // console.log(window);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    // let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    // console.debug("Scroll Event", document.body.scrollTop);
    // console.log('Scroll Event', window.pageYOffset);
    // if (window.pageYOffset > window.innerHeight) {

    if (window.pageYOffset > 150) {
      this.styles.addToolbarClasses(['dark-theme', 'mat-elevation-z6']);
    } else {
      this.styles.addToolbarClasses(['transparent', 'dark-theme']);
    }

    this.updateMouse();

  }

  yelpReviews() {
    this.http.get(
      this.urls.yelp
    ).pipe(
      map((res) => {
        // console.log(res);
        this.reviews = _.filter(JSON.parse(res[0].body).reviews, (r: any) => {
          // only show greater than 4 star reviews
          return r.rating >= 4;
        });
        // console.log(this.reviews);
        this.biz = res[1].body;
      })
    ).subscribe();
  }

  updateMouse() {
    const factor = 500;
    const val = ((factor - window.pageYOffset) / factor);
    this.mouseOpacity = 'rgba(255,255,255,' + (val > .75 ? .75 : val) + ')';
  }

  initBeliefs() {

    this.beliefs = [
      {
        html: `<strong>Opportunity</strong> is the ability to identify <strong>change</strong>, <strong>respond</strong> to it, and
        <strong class="text-accent">exploit</strong> it.`,
        author: 'Peter Drucker',
        state: 'active'
      },
      {
        html: `<strong class="text-accent">Simplicity</strong> is the ultimate <strong>sophistication</strong>.`,
        author: 'Leonardo da Vinvci',
        state: 'inactive'
      },
      {
        html: `<strong>Thirve</strong> on <strong class="text-accent">technological</strong> risk.`,
        author: 'Vinod Khosla',
        state: 'inactive'
      },
      {
        html: `<strong class="text-accent">Brutal honesty</strong> trumps hypocritical <strong>politeness</strong>.`,
        author: 'Vinod Khosla',
        state: 'inactive'
      },
      {
        html: `Our <strong>business</strong> should be a force for <strong class="text-accent">good</strong>.`,
        author: 'Chase Oliphant',
        state: 'inactive'
      },
      {
        html: `Have <strong class="text-accent">courage</strong> to ignore <strong>conventional</strong> wisdom.`,
        author: 'Vinod Khosla',
        state: 'inactive'
      }
    ];

    // set initial belief idx
    this.beliefIdx = 0;
    this.updateBelief(this.beliefIdx);

  }

  // twinkle() {

  //   // get the element

  //   // for each polygon change the opacity fill of the shape

  // }

  initTeam() {
    this.team = [
      {
        first: 'Chase',
        last: 'Oliphant',
        cert: 'CPA',
        title: 'Founder',
        blurb: 'This guy rocks!',
        about: 'Chase is a Certified Public Accountant (CPA) and software developer with' +
          ' seven years of big four consulting experience.  He has lectured about M&A' +
          ' Integration at Deloitte University and Blockchain at Cal State San Bernadino.' +
          ' He has worked with clients in Aerospace' +
          ' Manufacturing, Semiconductor Manufacturing, and Venture Capital (VC) to name a few. ' +
          'He has considerable experience in Audit, IPO readiness, divestitures, and' +
          ' Mergers & Acquisitions. He primarily focuses on building' +
          ' cutting-edge (think blockchain and serverless infrastructure)' +
          ' financial applications for the accounting industry.',
        state: 'active',
        avatar: './assets/avatars/chase.jpg',
        facebook: 'https://www.facebook.com/chaseoliphant',
        twitter: 'https://twitter.com/OliphantChase',
        linkedin: 'https://www.linkedin.com/in/chaseoliphant',
        instagram: '',
        internal_calendar: '/now',
        external_calendar: ''
      },
      // {
      //   first: 'Torrie',
      //   last: 'Tinley',
      //   cert: '',
      //   title: 'Digital Marketing & Brand',
      //   blurb: 'This guy rocks!',
      //   about: 'Out of the box thinker and innovative leader with 10+ years experience' +
      //     ' in digital marketing, advertising, copywriting & e-commerce arenas within the' +
      //     ' action sports, retail, entertainment, non-profit and real estate industries.' +
      //     ' Strong background in brand management, digital marketing strategy and planning,' +
      //     ' social media, content marketing, influencer activations, campaigns,' +
      //     ' performance marketing, e-commerce, events, photoshoots, sponsorships, PR and more.',
      //   state: 'active',
      //   avatar: './assets/avatars/torrie.jpg',
      //   facebook: 'https://www.facebook.com/torrie.tinley',
      //   twitter: 'https://twitter.com/torrietin',
      //   linkedin: 'https://www.linkedin.com/in/torrietinley/',
      //   instagram: 'https://www.instagram.com/torrietin/',
      //   internal_calendar: '',
      //   external_calendar: ''
      // }
      // {
      //   first: 'Kristin',
      //   last: 'Oliphant',
      //   cert: 'CPA',
      //   title: 'Principle',
      //   blurb: 'This gal rocks!',
      //   state: 'inactive',
      //   avatar: 'http://demo.qodearena.com/projects/anticahtml/img/team_img1.jpg'
      // },
      // {
      //   first: 'Torrie',
      //   last: 'Tinley',
      //   cert: 'CPA',
      //   title: 'Principle',
      //   blurb: 'This gal works!',
      //   state: 'inactive',
      //   avatar: 'http://demo.qodearena.com/projects/anticahtml/img/team_img1.jpg'
      // }
    ];
  }

  selectStmt(idx) {
    // console.log(idx);

    for (let i = 0; i < this.statements.length; i++) {
      this.statements[i].state = i === idx ? 'active' : 'inactive';
    }

    // update current idx
    this.statementIdx = idx;

  }

  updateBelief(idx?) {

    // update current idx
    // idx > -1 because idx === 0 is false
    this.beliefIdx = idx > -1 ? idx : Number(this.beliefIdx) + 1; // take selected idx or increment idx

    if (this.beliefWait) {
      // stop timeout (note: that it will automatically be recreated)
      // this prevents the stmt from changing in-between clicks
      clearTimeout(this.beliefWait);
    }

    if (idx > -1) { // idx > -1 because idx === 0 is false
      this.selectRepeatAnimationState(this.beliefIdx, 'beliefs');
      this.updateBelief(); // call self
    } else {
      this.beliefWait = setTimeout(() => {
        if (!this.beliefsPaused) {
          // don't continue if paused
          if (this.beliefIdx >= this.beliefs.length) {
            // reset count once length is reached.
            this.beliefIdx = 0;
          }
          this.selectRepeatAnimationState(this.beliefIdx, 'beliefs');
          this.beliefWait = null; // remove the wait so that it will pass if stmt above
          this.updateBelief(); // call self
        }
      }, 5000);
    }

  }

  selectRepeatAnimationState(idx: number, objArrName: 'statements' | 'team' | 'beliefs') {
    // console.log(idx);

    for (let i = 0; i < this[objArrName].length; i++) {
      this[objArrName][i].state = (i === idx ? 'active' : 'inactive');
    }

  }

  toggleStmt(increment: number) {
    // console.log('clicked');

    const oldIdx = _.clone(this.statementIdx);
    this.statementIdx = this.statementIdx + increment;

    if (this.statementIdx > (this.statements.length - 1)) {
      this.statementIdx = 0;
    }

    // create animations
    this.statements[oldIdx].state = 'inactive';
    this.statements[this.statementIdx].state = 'active';

  }

  setAnnouncement() {

    this.statements = [
      {
        title: 'Accounting',
        // desc:
        //   `<div>
        //   We <strong>crunch</strong> the numbers
        //   , aid in <strong>tax</strong> compliance,
        //   so you can focus on what <strong class="text-accent">matters</strong>.
        //   </div>`,
        desc:
          `<div>
          We <strong>crunch</strong> the numbers so you can <strong>focus</strong> on what <strong class="text-accent">matters</strong>.
          </div>`,
        // icon: 'account_balance',
        // icon: 'attach_money',
        // icon: 'local_atm'
        icon: 'show_chart',
        btnText: 'Learn more', // takes you to "Become a client" setup
        // img: '',
        link: '/accounting',
        state: 'active'
      },
      {
        title: 'Technology',
        desc:
          `<div>
          We <strong>develop</strong>, <strong>build</strong>, and <strong class="text-accent">implement</strong> web and mobile solutions.
          </div>`,
        // icon: 'fingerprint',
        // icon: 'usb',
        // icon: 'cloud',
        icon: 'phonelink',
        // icon: 'memory',
        btnText: 'Learn more',
        // img: '',
        link: '/technology',
        state: 'inactive'
      },
      {
        title: 'Creative',
        desc:
          `<div>
          We use <strong>research</strong>, <strong>strategy</strong>, and <strong>design</strong> to create <strong> engaging </strong>
          <strong class="text-accent"> experiences.</strong>
          </div>`,
        // icon: 'extension',
        // icon: 'bubble_chart',
        // icon: 'videogame_asset',
        icon: 'wb_incandescent',
        btnText: 'Learn more',
        // img: '',
        link: '/creative',
        state: 'inactive'
      }
    ];

  }

  dialogGetStarted(): void {
    const dialogRef = this.dialog.open(GetStartedDialogComponent, {
      disableClose: true
    });

    dialogRef.beforeClosed().subscribe(result => {

      // console.log('The dialog was closed, result: ', result);

      if (result.action === 'submit') {
        this.dialogMessage(result.data.first);
      }

    });

  }

  dialogMessage(first: string) {
    const messageRef = this.dialog.open(SubmitMessageDialogComponent,
      {
        disableClose: true,
        panelClass: 'full-screen-dialog',
        data: {
          title: 'Thank you for connecting ' + first + ',',
          msg: 'Your message was delivered! We are excited about the opportunity' +
            ' to work together and look forward to talking with you. We will be in touch shortly.'
        }
      }
    );

    // messageRef.afterClosed().subscribe(result => {
    //   // console.log('The dialog was closed, result: ', result);
    //   // this.animal = result;
    // });

  }

  dialogTeam(teamMember: ITeamMember) {
    const messageRef = this.dialog.open(TeamDialogComponent,
      {
        data: {
          model: teamMember
        }
      }
    );
  }

}
