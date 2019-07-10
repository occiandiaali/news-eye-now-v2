import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_TOP_URL = 'https://newsapi.org/v2/top-headlines?country=ng&apiKey=40f233687a574369b42c8cd177ab60e0';

  constructor(private http: HttpClient) { }

  getHeadlines() {
    return this.http.get(`${this.API_TOP_URL}`);
  }
} // class
