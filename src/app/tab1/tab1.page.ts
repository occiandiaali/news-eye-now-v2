import { Component } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  articles;

  constructor(private apiService: ApiService) {}

  ionViewDidEnter() {
   this.apiService.getHeadlines().subscribe((data) => {
       this.articles = data['articles'];
     });
  }

} // class
