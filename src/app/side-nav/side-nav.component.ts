import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {Component, HostListener, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {map, shareReplay} from "rxjs/operators";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {DataService} from "../core/data.service";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  public location: any = window.location.href;
  public user = localStorage.getItem('username');
  activityModal = false;
  // public input = ''
  // searchForm : FormGroup = new FormGroup({});
  input = new FormControl('');
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private dataService: DataService) { }


  ngOnInit(): void {
    this.input.setValue('');
  }

  showActivityModal(){
    this.activityModal = !this.activityModal;
}

  onClickedOutside(e: Event) {
    this.activityModal = false;
  }

  fetchCategory(value: string){
    console.log(value)
    this.dataService.sendpayLoadType(value);
  }
}
