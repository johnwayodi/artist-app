import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { AlbumComponent } from './album/album.component';

@NgModule({
  declarations: [HomeComponent, ProfileComponent, AlbumComponent],
  imports: [CommonModule, SharedModule],
  exports: [HomeComponent, ProfileComponent],
})
export class HomeModule {}
