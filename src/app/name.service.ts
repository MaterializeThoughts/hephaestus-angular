import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  constructor(private http: HttpClient) {}

  generateName(query: string, endpoint: string){
    const headers = new HttpHeaders()
        .set('X-RapidAPI-Key', '<YOUR API KEY>')
        .set('X-RapidAPI-Host', 'nameforge.p.rapidapi.com');

    const url = `https://nameforge.p.rapidapi.com/${endpoint}/${query}`;

    return this.http.get(url, { headers, withCredentials: true });
  }
}
