import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Faq } from '../models/faq.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  private apiUrl = 'http://localhost:8080/api/pdf/extract/';  

  constructor(private http: HttpClient) {}

  getFaqs(fileName: string | undefined): Observable<Faq[]> {
    return this.http.get<Faq[]>(this.apiUrl+`${fileName}`).pipe(
      map((faqs) => faqs.map(faq => ({ ...faq, isOpen: false }))) 
    );
  }
}
