import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Eod } from '../Model/eod';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EodService {

  private httpHeaders  : HttpHeaders;
  eodModel : Eod[] | any;
  private api : string = environment.apiUrl;

  constructor(private httpClient : HttpClient) {
    this.httpHeaders = new HttpHeaders({ 'content-type' : 'application/json '});
   }

   getAll() : Observable<Eod[]>{
    return this.httpClient.get<Eod[]>(this.api + "EOD");
   }

   getEodById(id : any) : Observable<Eod>{
    return this.httpClient.get<Eod>(this.api + "EOD/" + id);
   }

   addEod(eodModel : Eod) : Observable<HttpResponse<any>>{
    console.log(eodModel)
    return this.httpClient.post<HttpResponse<any>>(this.api + "EOD", JSON.stringify(eodModel), {headers : this.httpHeaders, observe : 'response'});
   }

   updateEod(eodModel : Eod, id : string) : Observable<HttpResponse<any>>{
    
    return this.httpClient.patch<HttpResponse<any>>(this.api + "EOD/" + id, JSON.stringify(eodModel), {headers : this.httpHeaders, observe : 'response'});
   }

   deleteEod(id : any) : Observable<HttpResponse<any>>{
    return this.httpClient.delete<HttpResponse<any>>(this.api + "EOD/" + id, {headers : this.httpHeaders, observe : 'response'});
   }

}
