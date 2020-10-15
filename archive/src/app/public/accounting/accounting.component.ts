import { Component, OnInit } from '@angular/core';
import { StyleService } from '../shared/style.service';

interface IServiceOffering {
  name: string;
  desc: string;
}

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.scss']
})
export class AccountingComponent implements OnInit {

  accounting: IServiceOffering[];

  constructor(private styles: StyleService) {
    this.styles.addSiteClasses(['restrict-width', 'dark-bg', 'fullPageShadow']);
    this.styles.addToolbarClasses(['dark-theme', 'mat-elevation-z6']);
    this.styles.addFooterClasses(['dark-theme']);
  }

  ngOnInit() {
    this.initServices();
  }

  initServices() {

    this.accounting = [
      {
        name: 'Bookkeeping',
        desc: 'Paying bills, tracking time, processing payroll, creating invoices, inventory tracking,' +
          'cash reconciliations, periodic close process, generating financial statements'
      },
      {
        name: 'Tax Preparation',
        desc: 'Tax Forms 1040 Individual, 1120 Corporate, 1065 Partnership, 1120S S-Corporation,' +
          '1041 Estates & Trusts, 990 Exempt Organization, 709 Gift Tax, W-2s, 1099s'
      },
      {
        name: 'Payroll',
        desc: 'Tracking time, W-2s, quarterly and annual tax filings'
      },
      {
        name: 'Forensic Accounting',
        desc: 'Support for clients that suspect that they or their business' +
          ' may have been a victim of a fraud.Forensic accounting is an area' +
          ' of accounting that investigates actual or anticipated disputes.We ' +
          ' obtain and analyze financial data to expose misconduct.'
      },
      {
        name: 'Accounting Information System',
        desc: 'We build, test, migrate and implement accounting systems on' +
          ' various platforms including QuickBooks and Xero, to name a few.We' +
          ' develop tailored software that integrates into your existing accounting' +
          ' system to achieve a current reporting or management need.'
      },
      {
        name: 'Mergers & Acquisions',
        desc: 'We assist in obtaining and examining relevant information during' +
          ' diligence to help clients evaluate the current state of the target.' +
          ' We also manage the integration project management office throughout' +
          ' the deal\'s life - cycle until a steady state for the business is achieved.'
      },
      {
        name: 'Internal Controls',
        desc: 'Internal controls are methods put in place by a company strengthen' +
          ' the integrity of financial and accounting information, meet operational' +
          ' and profitability targets, and transmit management policies throughout' +
          ' the organization.'
      }
    ];

  }

}


