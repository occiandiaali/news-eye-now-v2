import { Component } from '@angular/core';
import { ApiService } from './../api.service';
// import { LoadingController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  articles;
  webUrl;

  constructor(private apiService: ApiService, private iab: InAppBrowser) {}

  ionViewDidEnter() {
   this.apiService.getHeadlines().subscribe((data) => {
       this.articles = data['articles'];
     });
  }

  openWebPage(uri) {
    this.webUrl = uri;
    this.iab.create(`${this.webUrl}`, `_blank`);
  }

} // class
