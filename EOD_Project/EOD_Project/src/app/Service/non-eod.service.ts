import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { NonEod } from '../Model/non-eod';


@Injectable({
  providedIn: 'root'
})
export class NonEODService {

  private httpHeaders  : HttpHeaders;
  nonEodModel : NonEod[] | any;
  private api : string = environment.apiUrl;

  constructor(private httpClient : HttpClient) {
    this.httpHeaders = new HttpHeaders({ 'content-type' : 'application/json '});
   }

   getAll() : Observable<NonEod[]>{
    return this.httpClient.get<NonEod[]>(this.api + "NonEOD");
   }

   getNonEODById(id : any) : Observable<NonEod>{
    return this.httpClient.get<NonEod>(this.api + "NonEOD/" + id);
   }

   addNonEOD(nonEodModel : NonEod) : Observable<HttpResponse<any>>{
    return this.httpClient.post<HttpResponse<any>>(this.api + "NonEOD", JSON.stringify(nonEodModel), {headers : this.httpHeaders, observe : 'response'});
   }

   updateNonEOD(nonEodModel : NonEod, id : any) : Observable<HttpResponse<any>>{
    return this.httpClient.patch<HttpResponse<any>>(this.api + "NonEOD/" + id, JSON.stringify(nonEodModel), {headers : this.httpHeaders, observe : 'response'});
   }

   deleteNonEOD(id : any) : Observable<HttpResponse<any>>{
    return this.httpClient.delete<HttpResponse<any>>(this.api + "NonEOD/" + id, {headers : this.httpHeaders, observe : 'response'});
   }

}
