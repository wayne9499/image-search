import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';

import { ImageService } from './image.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatMenuModule,
  MatToolbarModule, MatIconModule,
  MatAutocompleteModule, MatInputModule, MatFormFieldModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    [MatButtonModule, MatCardModule, MatMenuModule,
      MatToolbarModule, MatIconModule,
      MatAutocompleteModule, MatInputModule, MatFormFieldModule]

  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
