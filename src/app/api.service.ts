import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = '';
  category = '';
  API_TOP_URL = `https://newsapi.org/v2/top-headlines?country=ng${this.API_KEY}`;
  urlPre = `https://newsapi.org/v2/top-headlines?country=ng&category=`;

  constructor(private http: HttpClient) { }

  getHeadlines() {
    return this.http.get(`${this.API_TOP_URL}`);
  }

  getPage(category) {
    this.category = category;
    return this.http.get(`${this.urlPre}${this.category}${this.API_KEY}`);
  }

} // class
