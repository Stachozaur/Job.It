import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpecialistListComponent } from './specialist-list/specialist-list.component';
import { MdbModule } from 'mdb-angular-ui-kit';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';
import { SpecialistDetailComponent } from './specialist-detail/specialist-detail.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { FontAwesomeRendererComponent } from './font-awesome-renderer/font-awesome-renderer.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    SpecialistListComponent,
    SpecialistDetailComponent,
    SpecialistListComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    FooterComponent,
    ModalPopupComponent,
    SpecialistListComponent,
    SpecialistDetailComponent,
    FontAwesomeRendererComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { passThruUnknownUrl: true ,dataEncapsulation: false }),
    MdbModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    NgbModule,
    FontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB2NyJo8nmwODZm5IDASbhGBEngXkXsMus',
      libraries: ['places']
    })
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
