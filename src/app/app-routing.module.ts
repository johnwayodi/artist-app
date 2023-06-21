import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ProfileComponent } from './home/profile/profile.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AlbumComponent } from './home/album/album.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'artist/:artistId', component: ProfileComponent },
  { path: 'artist/:artistId/albums/:albumId', component: AlbumComponent },
  { path: '**', component: NotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
