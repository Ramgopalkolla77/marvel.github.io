import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { CreatorsComponent } from './creators/creators.component';
import { EventsComponent } from './events/events.component';
import { StoriesComponent } from './stories/stories.component';
import { SeriesComponent } from './series/series.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComicsComponent } from './comics/comics.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { MaterialModule } from './material/material.module';
import { GeneralCardComponent } from './shared/general-card/general-card.component';
import { StoriesCardComponent } from './shared/series-card/stories-card.component';
import { DetailsComponent } from './shared/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CreatorsComponent,
    EventsComponent,
    StoriesComponent,
    SeriesComponent,
    ComicsComponent,
    DasboardComponent,
    GeneralCardComponent,
    StoriesCardComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule, //Material Module seperated
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
