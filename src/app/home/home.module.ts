import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from './search/search.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    SearchComponent,
    NavBarComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HomeComponent, ProfileComponent, SearchComponent, NavBarComponent],
})
export class HomeModule {}
