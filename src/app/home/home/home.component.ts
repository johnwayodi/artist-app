import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicService } from 'src/app/core/services/music.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  artists: any[] = [];
  isLoading: Boolean = false;
  randomLetter: string = String.fromCharCode(
    97 + Math.floor(Math.random() * 26)
  );

  constructor(private musicService: MusicService, private router: Router) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.musicService.getArtists(this.randomLetter).subscribe((res) => {
      this.artists = res.data;
      this.isLoading = false;
    });
  }

  openArtistDetails(artistId: number): void {
    this.router.navigate(['artist', artistId]);
  }
}
