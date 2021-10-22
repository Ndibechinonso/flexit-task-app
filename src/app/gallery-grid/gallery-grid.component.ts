import { Component, OnInit } from '@angular/core';
import {ApiService} from "../core/api.service";
import {GridImageTemplate} from "../shared/models/data.model";

@Component({
  selector: 'app-gallery-grid',
  templateUrl: './gallery-grid.component.html',
  styleUrls: ['./gallery-grid.component.scss']
})
export class GalleryGridComponent implements OnInit {

  gridImages : GridImageTemplate[] = [];
  loading: boolean = false;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchGridImages()
  }

  fetchGridImages(){
    this.loading = true;
this.apiService.getGalleryGridImages().subscribe((data)=> {
  this.loading = false;
  this.gridImages = data.results;
  console.log(this.gridImages)
})
  }
}

