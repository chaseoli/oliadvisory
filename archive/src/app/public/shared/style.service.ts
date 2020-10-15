import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router, Event, NavigationEnd, NavigationStart } from '@angular/router';
import { log } from 'util';
import * as _ from 'lodash';

export interface IPageStyles {

    darkBg: boolean;

    // change toolbar at scroll position
    changeToolbarAt: number;

    // site class can be used to toggle 'dark-theme' or site backgrounds or outer padding
    siteClasses: string[];
    toolbarClasses: string[];
    footerClasses: string[];
}

const styleDefaults: IPageStyles = {
    darkBg: false,
    changeToolbarAt: 0,
    toolbarClasses: [],
    footerClasses: [],
    siteClasses: []
};

@Injectable()
export class StyleService {

    public pageStyles: IPageStyles;

    constructor(private router: Router) {

        // console.log('init public style service');

        this.pageStyles = _.clone(styleDefaults);

        // fires on navigation event
        this.router.events.subscribe((val: Event) => {

            // fires at the start of every navigation event
            if (val instanceof NavigationStart) {
                // console.log('NavigationStart from service:', val);
                // reset styles when page starts to navigate to another route
                this.pageStyles = _.clone(styleDefaults);
                // console.log('this.pageStyles: ', this.pageStyles);
            }

        });

    }

    getStyling(): IPageStyles {

        return this.pageStyles;
    }

    addToolbarClasses(classes: string[]) {
        this.pageStyles.toolbarClasses = classes;
    }

    addSiteClasses(classes: string[]) {
        this.pageStyles.siteClasses = classes;
    }

    addFooterClasses(classes: string[]) {
        this.pageStyles.footerClasses = classes;
    }


    // updateStyling(navigatedRoute: string) {

    //     // the "transparent theme" will be applied when the following child routes are active
    //     const transparentToolbarRouteArr = ['/landing'];
    //     const restrictToolbarWidthRouteArr = ['/landing'];
    //     const hideToolbarRouteArr = ['/'];

    //     // console.log(routeArr.indexOf(navigatedRoute) > -1);

    //     // check if the current url is included in the routeArr to add specific styling via class

    //     // transparent
    //     if (transparentToolbarRouteArr.indexOf(navigatedRoute) > -1) {
    //         this.addToolbarClasses(['transparent']);
    //     }

    //     // hide
    //     if (hideToolbarRouteArr.indexOf(navigatedRoute) > -1) {
    //         this.addToolbarClasses(['hide']);
    //     }

    //     // restrict-width
    //     if (hideToolbarRouteArr.indexOf(navigatedRoute) > -1) {
    //         this.addToolbarClasses(['restrict-width']);
    //     }

    // }

}
