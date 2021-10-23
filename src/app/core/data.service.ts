import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // Observable string sources
  private elementTypeSource = new Subject<string>();
  private formPayloadSource = new Subject<string>();

  // Observable string streams
  elementType$ = this.elementTypeSource.asObservable();
  payLoadType$ = this.formPayloadSource.asObservable();
  // Service message commands
  sendElementType(elementType: string) {
    this.elementTypeSource.next(elementType);
  }

  sendpayLoadType(payLoadType: string){
    this.formPayloadSource.next(payLoadType);
  }
}
