import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { CreatorsComponent } from './creators/creators.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { EventsComponent } from './events/events.component';
import { SeriesComponent } from './series/series.component';
import { StoriesComponent } from './stories/stories.component';

const routes: Routes = [
  { path: '', component: DasboardComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'events', component: EventsComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'creators', component: CreatorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
