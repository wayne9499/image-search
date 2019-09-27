import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  searchQuery: string;
  images: any[];
  imageFound = false;
  searching = false;

  handleSuccess(data) {
    this.imageFound = true;
    this.images = data.hits;
    console.log(data.hits);
  }

  handleError(err) {
    console.log(err);
  }

  constructor(private imageServices: ImageService) { }

  searchImages(query: string) {
    this.searching = true;
    return this.imageServices.getImage(query).subscribe(
      data => this.handleSuccess(data),
      err => this.handleError(err),
      () => this.searching = false
    );
  }

  ngOnInit() {
  }

}
