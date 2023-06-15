import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgPipesModule } from 'ngx-pipes';

import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faMapMarkerAlt,
  faHome,
  faUserPlus,
  faWifi,
  faBars,
  faUserAlt,
  faSignInAlt,
  faLaptop,
  faLock,
  faTasks,
  faAngleDoubleUp,
  faFax,
  faEnvelope,
  faPhoneAlt,
  faLink,
  faKey,
  faReceipt,
  faGlobe,
  faExclamation,
  faAngleRight,
  faCaretRight,
  faInfoCircle,
  faQuestionCircle,
  faMusic,
} from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import {
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [FooterComponent, NotFoundComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgPipesModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgPipesModule,
    MatToolbarModule,
    FooterComponent,
    NotFoundComponent,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(
      faMapMarkerAlt,
      faHome,
      faUserPlus,
      faWifi,
      faTwitter,
      faLinkedinIn,
      faEnvelope,
      faBars,
      faUserAlt,
      faSignInAlt,
      faLaptop,
      faUserCircle,
      faLock,
      faTasks,
      faAngleDoubleUp,
      faFax,
      faPhoneAlt,
      faLink,
      faKey,
      faReceipt,
      faGlobe,
      faExclamation,
      faAngleRight,
      faCaretRight,
      faInstagram,
      faInfoCircle,
      faQuestionCircle,
      faMusic
    );
  }
}
