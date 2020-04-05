import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API_URL = environment.apiUrl;
const TOKEN = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  getHeaders() {
    const headers = new HttpHeaders();
    headers.set('Accept', 'application/vnd.github.v3+json');
    headers.set('Accept', 'application/vnd.github.nebula-preview+json');
    headers.set('Accept', 'application/vnd.github.scarlet-witch-preview+json');
    headers.set('Authorization', 'token ' + TOKEN);
  }

  public get(url) {
    return this.http.get<any>(API_URL + url);
  }

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
  }
}
