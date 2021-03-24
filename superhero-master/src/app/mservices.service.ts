import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  constructor(private http: HttpClient) {}

  private url = environment.API_URL;
  private key = environment.API_KEY;

  getCharacters(): Observable<any> {
    return this.http.get(this.url + 'characters?apikey=' + this.key);
  }

  getCreators(): Observable<any> {
    return this.http.get(this.url + 'creators?apikey=' + this.key);
  }
  getStories(): Observable<any> {
    return this.http.get(this.url + 'stories?apikey=' + this.key);
  }
  getSeries(): Observable<any> {
    return this.http.get(this.url + 'series?apikey=' + this.key);
  }
  getEvents(): Observable<any> {
    return this.http.get(this.url + 'events?apikey=' + this.key);
  }
  getComics(): Observable<any> {
    return this.http.get(this.url + 'comics?apikey=' + this.key);
  }
}
