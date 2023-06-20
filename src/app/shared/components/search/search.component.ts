import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, debounceTime } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MusicService } from 'src/app/core/services/music.service';

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
  artists: any[] = [];
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

  private _filterArtists(value: string): any {
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
    return;
  }
}
