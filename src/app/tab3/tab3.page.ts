import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  category;

  constructor(public router: Router) {}

  go(event: string) {
    this.category = event;
    this.router.navigateByUrl(`category/${this.category}`);
  }

} // class
