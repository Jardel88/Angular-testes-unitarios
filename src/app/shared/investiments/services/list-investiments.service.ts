import { Investiments } from './../model/investiments';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListInvestimentsService {

  private url: string = 'http://localhost:3000/investiments';

  constructor(private http: HttpClient) { }

  public list(): Observable<Array<Investiments>>{
    return this.http.get<Array<Investiments>>(this.url).pipe(
      map(
        res => res
      )
    )
  }
}
