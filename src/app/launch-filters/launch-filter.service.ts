import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaunchFilterService {

  constructor(private httpClient: HttpClient) {
  }

  // getLaunches gives the Observable http service.
  // Here Api is dynamicalling changing based on the Router content.
  getLaunches(queryParams: string, params?): Observable<any> {
    const requestedURL = 'https://api.spaceXdata.com/v3/launches' + queryParams;
    return this.httpClient.get(requestedURL);
  }

}
