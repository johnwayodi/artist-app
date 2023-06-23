import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import { Observable, debounceTime } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MusicService } from 'src/app/core/services/music.service';
import { Artist } from 'src/utils';

export interface State {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  stateCtrl = new FormControl();
  artists: Artist[] = [];
  inputStyles: string[] = ['color: white', 'background-color: white'];

  constructor(private musicService: MusicService, private router: Router) {
    this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(200),
        map((state) => this._filterArtists(state))
      )
      .subscribe();
  }

  ngOnInit(): void {}

  private _filterArtists(value: string): void {
    const filterValue = value.toLowerCase();

    this.musicService.getArtists(filterValue).subscribe((res) => {
      this.artists = res.data;
    });
  }

  openArtistDetails(data: any): void {
    let artistIndex = this.artists.findIndex(
      (item) => item.name === data.option.value
    );
    this.router.navigate(['/artist', this.artists[artistIndex].id]);
  }

  closeKeyboard() {
    const autocompleteTrigger: any = document.querySelector(
      '.mat-autocomplete-trigger'
    );
    if (autocompleteTrigger) {
      autocompleteTrigger.closePanel();
    }
  }
}
