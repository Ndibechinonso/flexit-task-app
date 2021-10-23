import { Component, OnInit } from '@angular/core';
import {ApiService} from "../core/api.service";
import {GridImageTemplate} from "../shared/models/data.model";
import {DataService} from "../core/data.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-gallery-grid',
  templateUrl: './gallery-grid.component.html',
  styleUrls: ['./gallery-grid.component.scss']
})
export class GalleryGridComponent implements OnInit {

  gridImages : GridImageTemplate[] = [];
  userDetails: GridImageTemplate[] = [];
  loading: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(private apiService: ApiService, private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchGridImages()
    this.subscribeToSearchPayload();
  }

  fetchGridImages(query?: any){
    this.loading = true;
    this.apiService.getGalleryGridImages(query).subscribe((data)=> {
    this.loading = false;
    this.gridImages = data.results;
    this.gridImages = this.gridImages.map(userDetail => Object.assign({}, userDetail,
      {userName: userDetail.user.first_name || userDetail.user.last_name },
      {userLocation: userDetail.user.location || '' }))
    console.log(this.gridImages)

    })
  }

  subscribeToSearchPayload(){
    this.subscription = this.dataService.payLoadType$.subscribe(data =>{
      this. fetchGridImages(data);
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

