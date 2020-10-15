import { AfterViewInit, Directive } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { invisibleSiteKey } from '../../../shared/constants/recaptcha.constant';
import { WindowService } from '../../../shared/window.service';
import { MatDialogRef } from '@angular/material/dialog';
import { UrlConstants } from '../../../shared/constants/urls.constant';
import { map } from 'rxjs/operators';

// Recaptcha for angular and node.js:
// https://www.youtube.com/watch?v=UzCkSzmEq8E
// https://netbasal.com/how-to-integrate-recaptcha-in-your-angular-forms-400c43344d5c

declare const grecaptcha: any;

@Directive({
  selector: '[appInvisibleRecaptcha]',
  exportAs: 'appInvisibleRecaptcha'
})
export class ReCaptchaInvisibleDirective implements AfterViewInit {

  private urls: UrlConstants;
  // private reCaptchaSiteKey: string;
  private widgetId: number;
  private data: {};
  private firestorePath: string;
  private dialogRef?: MatDialogRef<any>;
  private scrollTopElm: HTMLElement;
  public spinner: boolean;
  public loaded: boolean;
  public warnMsg: string;
  private url: string;

  constructor(
    private _window: WindowService,
    private http: HttpClient
  ) {
    this.urls = new UrlConstants();
    // this.reCaptchaSiteKey = invisibleSiteKey;
    // this.onLoaded.emit(false);
    this.spinner = true;
    this.loaded = false;
  }

  submit(firestorePath: string, data: {}, url: string, dialogRef?: MatDialogRef<any>, scrollTop?: HTMLElement) {

    // start spinner so that user can't re-submit request immediately
    this.spinner = true;

    this.data = data;
    this.firestorePath = firestorePath;
    this.dialogRef = dialogRef;
    this.scrollTopElm = scrollTop;
    this.url = url;

    grecaptcha.execute();
  }

  ngAfterViewInit() {
    // render invisible recaptcha to DOM
    // this.recaptcha.initRecaptcha(this.dialogRef, this.el.nativeElement.children["0"]);
    this.initRecaptcha();
  }

  private initRecaptcha() {

    // this.scrollTopElm = scrollTop;
    // this.dialogRef = dialogRef;

    this._window.windowRef.reCaptchaCallback = () => {

      this.widgetId = grecaptcha.render('recaptcha-invisible', {
        'sitekey': invisibleSiteKey,
        'size': 'invisible',
        'callback': (token) => {
          // console.log('invisible token', token);
          // this.token = token;
          this.post(token);
        }
      });

      this.hasLoaded();

      // console.log('widget id: ', this.widgetId);

    };

    this.addRecaptchaScript();

  }

  private post(recaptchaToken: string) {

    this.http.post(
      this.url, {
        firestorePath: this.firestorePath,
        recaptchaToken: recaptchaToken,
        recaptchaType: 'invisible',
        data: this.data
      }
    ).pipe(
      map((res: any) => {

        if (res.success !== undefined && res.success !== false) {
  
          // reset recaptcha
          grecaptcha.reset(this.widgetId);
          delete this._window.windowRef.reCaptchaCallback;
  
          if (this.dialogRef) {
            this.dialogRef.close({ action: 'submit', data: this.data });
          }
  
        } else {
  
          // true so spinner stops and user can read message
          this.spinner = false;
  
          console.log(res.msg);
  
          this.warnMsg = res.msg;
  
        }
  
      })
    ).subscribe();

  }

  private addRecaptchaScript() {
    // add recaptcha script to page
    const scriptEl = document.getElementById('recaptcha-script');

    // add script if it doesn't already exist
    if (!scriptEl) {
      const script = document.createElement('script');
      // script.src = `https://www.google.com/recaptcha/api.js`;
      script.id = 'recaptcha-script';
      script.src = 'https://www.google.com/recaptcha/api.js?onload=reCaptchaCallback&render=explicit';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else {

      // remove script from page
      document.getElementById('recaptcha-script').remove();

      // reload script to reset captcha
      this.addRecaptchaScript();

      this.hasLoaded();
    }

  }

  private hasLoaded() {
    setTimeout(() => {
      // wait for recaptcha to load so that it prevents
      // scrolling to the position of the rendered recaptcha
      // but rather the top of the containing form element
      // if (this.scrollTopElm) {
      //   this.scrollTopElm.scrollTop = 0
      // }
      // this.onLoaded.emit(true);
      this.spinner = false;
      this.loaded = true;
    }, 500);
  }

}
